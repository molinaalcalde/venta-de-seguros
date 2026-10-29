'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import {
  Search, Trash2, ChevronRight, X, Phone, Mail, MessageCircle,
  Users, TrendingUp, UserCheck, Star, Download, RefreshCw, Calendar, FileText,
  MapPin, Clock, ShieldCheck, Filter, BarChart2, Copy, Check, ChevronDown,
  Plus, CheckCircle2, AlertCircle, CircleDot, Send, Trophy, XCircle,
  RotateCcw, Bell, DollarSign, CalendarClock,
} from 'lucide-react';

/* ─── Types ─────────────────────────────────────────────────────────────── */
interface Lead {
  id: string;
  nombre: string;
  email: string;
  telefono: string | null;
  tipo_seguro: string | null;
  nivel_proteccion: string | null;
  estado: string;
  notas: string | null;
  created_at: string;
  zip_code: string | null;
  estado_us: string | null;
  ciudad: string | null;
  timeline: string | null;
  tiene_seguro: string | null;
  lead_score: number | null;
  detalles: string | null;
  // Campos nuevos
  idioma_preferido?: string;
  fuente?: string | null;
  aseguradora_actual?: string | null;
  fecha_vencimiento_poliza?: string | null;
  motivo_perdida?: string | null;
  valor_estimado?: number | null;
  primer_contacto_at?: string | null;
  ultimo_contacto_at?: string | null;
  proximo_seguimiento?: string | null;
}

interface Seguimiento {
  id: string;
  lead_id: string;
  tipo: string;
  fecha_programada: string;
  fecha_completada: string | null;
  descripcion: string | null;
  completado: boolean;
  created_at: string;
  leads?: { id: string; nombre: string; tipo_seguro: string | null; telefono: string | null; email: string };
}

interface Actividad {
  id: string;
  lead_id: string;
  tipo: string;
  descripcion: string;
  metadata: Record<string, unknown> | null;
  created_at: string;
}

/* ─── Pipeline states ───────────────────────────────────────────────────── */
const PIPELINE = [
  { key: 'Nuevo',              label: 'Nuevo',              color: 'bg-blue-100 text-blue-700',    icon: CircleDot },
  { key: 'Contactado',         label: 'Contactado',         color: 'bg-amber-100 text-amber-700',  icon: Phone },
  { key: 'Cotizando',          label: 'Cotizando',          color: 'bg-violet-100 text-violet-700', icon: Search },
  { key: 'Propuesta Enviada',  label: 'Propuesta Enviada',  color: 'bg-indigo-100 text-indigo-700', icon: Send },
  { key: 'Cerrado - Ganado',   label: 'Cerrado - Ganado',   color: 'bg-emerald-100 text-emerald-700', icon: Trophy },
  { key: 'Cerrado - Perdido',  label: 'Cerrado - Perdido',  color: 'bg-red-100 text-red-700',      icon: XCircle },
  { key: 'Renovacion',         label: 'Renovacion',         color: 'bg-orange-100 text-orange-700', icon: RotateCcw },
];

const PIPELINE_KEYS = PIPELINE.map(p => p.key);
const FILTER_ESTADOS = ['Todos', ...PIPELINE_KEYS];

function getPipelineColor(estado: string) {
  return PIPELINE.find(p => p.key === estado)?.color ?? 'bg-slate-100 text-slate-600';
}

const MOTIVOS_PERDIDA = [
  'Precio muy alto',
  'Eligio otro agente',
  'No califica',
  'No responde',
  'Ya tiene cobertura',
  'No le interesa',
  'Otro',
];

const FUENTES = ['Google', 'Facebook', 'Instagram', 'Referido', 'WhatsApp directo', 'Otro'];

const TIPOS_SEGUIMIENTO = [
  { key: 'llamar', label: 'Llamar', icon: Phone },
  { key: 'whatsapp', label: 'WhatsApp', icon: MessageCircle },
  { key: 'email', label: 'Email', icon: Mail },
  { key: 'cotizacion', label: 'Enviar cotizacion', icon: Send },
  { key: 'renovacion', label: 'Revisar renovacion', icon: RotateCcw },
  { key: 'otro', label: 'Otro', icon: CalendarClock },
];

/* ─── Helpers ────────────────────────────────────────────────────────────── */
function fmtDate(iso: string) {
  return new Date(iso).toLocaleDateString('es-MX', {
    day: '2-digit', month: 'short', year: 'numeric',
  });
}

function fmtDateTime(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString('es-MX', {
    day: '2-digit', month: 'short', year: 'numeric',
  }) + ' · ' + d.toLocaleTimeString('es-MX', {
    hour: '2-digit', minute: '2-digit', hour12: true,
  });
}

function fmtDateShort(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString('es-MX', { day: '2-digit', month: 'short' });
}

function timeAgo(iso: string) {
  const diff = Date.now() - new Date(iso).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 60) return `hace ${mins}m`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `hace ${hrs}h`;
  const days = Math.floor(hrs / 24);
  return `hace ${days}d`;
}

function initials(nombre: string) {
  return nombre.split(' ').slice(0, 2).map(w => w[0]).join('').toUpperCase();
}

function isToday(iso: string) {
  const d = new Date(iso);
  const now = new Date();
  return d.toDateString() === now.toDateString();
}

function isOverdue(iso: string) {
  return new Date(iso) < new Date() && !isToday(iso);
}

function getCanal(lead: Lead): 'WhatsApp' | 'Formulario' {
  if (!lead.detalles) {
    if (lead.email?.endsWith('@lead.local')) return 'WhatsApp';
    return 'Formulario';
  }
  try {
    const obj = typeof lead.detalles === 'string' ? JSON.parse(lead.detalles) : lead.detalles;
    if (obj?.canal === 'WhatsApp') return 'WhatsApp';
  } catch { /* ignore */ }
  if (lead.email?.endsWith('@lead.local')) return 'WhatsApp';
  return 'Formulario';
}

/* ─── API helper with session check ─────────────────────────────────────── */
async function apiFetch(url: string, opts?: RequestInit) {
  const res = await fetch(url, opts);
  if (res.status === 401) {
    window.location.href = '/admin/login';
    throw new Error('Sesion expirada');
  }
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.error || `Error ${res.status}`);
  }
  return res.json();
}

/* ─── Small components ──────────────────────────────────────────────────── */
function CanalBadge({ lead }: { lead: Lead }) {
  const canal = getCanal(lead);
  if (canal === 'WhatsApp') {
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-50 text-emerald-700">
        <MessageCircle className="w-3 h-3" />WhatsApp
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-blue-50 text-blue-600">
      <FileText className="w-3 h-3" />Formulario
    </span>
  );
}

function EstadoBadge({ estado }: { estado: string }) {
  const cls = getPipelineColor(estado);
  return <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${cls}`}>{estado}</span>;
}

function StatCard({ label, value, icon: Icon, color, suffix }: {
  label: string; value: number | string; icon: React.ElementType; color: string; suffix?: string;
}) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-4 flex items-center gap-3">
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${color}`}>
        <Icon className="w-5 h-5" />
      </div>
      <div className="min-w-0">
        <p className="text-xl font-bold text-slate-800 leading-none">{value}{suffix}</p>
        <p className="text-xs text-slate-500 mt-0.5 truncate">{label}</p>
      </div>
    </div>
  );
}

function Row({ icon, label, value, copyable }: { icon: React.ReactNode; label: string; value: string; copyable?: boolean }) {
  const [copied, setCopied] = useState(false);
  function handleCopy() {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }
  return (
    <div className="flex items-start gap-2 group">
      <span className="text-slate-400 mt-0.5">{icon}</span>
      <div className="flex-1 min-w-0">
        <span className="text-slate-500 text-xs">{label}: </span>
        <span className="text-slate-700 font-medium">{value}</span>
      </div>
      {copyable && value !== '—' && (
        <button onClick={handleCopy} className="opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity text-slate-400 hover:text-slate-600 mt-0.5 shrink-0 p-1 -m-1" title="Copiar">
          {copied ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
        </button>
      )}
    </div>
  );
}

/* ─── Toast notification ────────────────────────────────────────────────── */
function Toast({ message, type, onClose }: { message: string; type: 'success' | 'error'; onClose: () => void }) {
  useEffect(() => {
    const t = setTimeout(onClose, 4000);
    return () => clearTimeout(t);
  }, [onClose]);

  return (
    <div className={`fixed bottom-4 right-4 z-50 flex items-center gap-2 px-4 py-3 rounded-xl shadow-lg text-sm font-medium ${
      type === 'success' ? 'bg-emerald-600 text-white' : 'bg-red-600 text-white'
    }`}>
      {type === 'success' ? <CheckCircle2 className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
      {message}
      <button onClick={onClose} className="ml-2 opacity-70 hover:opacity-100"><X className="w-3.5 h-3.5" /></button>
    </div>
  );
}

/* ─── Vista "Hoy" — seguimientos del dia ────────────────────────────────── */
function VistaHoy({ seguimientos, onComplete, onClickLead }: {
  seguimientos: Seguimiento[];
  onComplete: (id: string) => void;
  onClickLead: (leadId: string) => void;
}) {
  const hoy = seguimientos.filter(s => isToday(s.fecha_programada));
  const vencidos = seguimientos.filter(s => isOverdue(s.fecha_programada));
  const total = hoy.length + vencidos.length;

  if (total === 0) return null;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-4 mb-4">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center">
          <Bell className="w-4 h-4 text-amber-600" />
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-800">
            {total} seguimiento{total !== 1 ? 's' : ''} pendiente{total !== 1 ? 's' : ''}
          </p>
          <p className="text-[10px] text-slate-400">
            {vencidos.length > 0 && <span className="text-red-500 font-medium">{vencidos.length} vencido{vencidos.length !== 1 ? 's' : ''}</span>}
            {vencidos.length > 0 && hoy.length > 0 && ' · '}
            {hoy.length > 0 && `${hoy.length} para hoy`}
          </p>
        </div>
      </div>

      <div className="space-y-2 max-h-48 overflow-y-auto">
        {[...vencidos, ...hoy].map(s => {
          const overdue = isOverdue(s.fecha_programada);
          const tipoInfo = TIPOS_SEGUIMIENTO.find(t => t.key === s.tipo);
          const TipoIcon = tipoInfo?.icon || CalendarClock;
          return (
            <div key={s.id} className={`flex items-center gap-3 px-3 py-2.5 rounded-xl ${overdue ? 'bg-red-50 border border-red-100' : 'bg-slate-50'}`}>
              <button
                onClick={() => onComplete(s.id)}
                className="shrink-0 w-5 h-5 rounded-full border-2 border-slate-300 hover:border-emerald-500 hover:bg-emerald-50 transition-colors flex items-center justify-center"
                title="Marcar completado"
              >
                <Check className="w-3 h-3 text-transparent hover:text-emerald-500" />
              </button>
              <TipoIcon className={`w-4 h-4 shrink-0 ${overdue ? 'text-red-400' : 'text-slate-400'}`} />
              <div className="flex-1 min-w-0">
                <p className="text-sm text-slate-700 font-medium truncate">
                  {tipoInfo?.label || s.tipo}: {s.leads?.nombre || 'Lead'}
                </p>
                {s.descripcion && <p className="text-xs text-slate-400 truncate">{s.descripcion}</p>}
              </div>
              {s.leads?.tipo_seguro && (
                <span className="text-[10px] text-slate-400 shrink-0 hidden sm:block">{s.leads.tipo_seguro}</span>
              )}
              {overdue && <span className="text-[10px] font-medium text-red-500 shrink-0">Vencido</span>}
              <button
                onClick={() => onClickLead(s.lead_id)}
                className="text-slate-400 hover:text-slate-600 shrink-0"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ─── Seguimiento Form (mini) ───────────────────────────────────────────── */
function SeguimientoForm({ leadId, onCreated }: { leadId: string; onCreated: () => void }) {
  const [open, setOpen] = useState(false);
  const [tipo, setTipo] = useState('llamar');
  const [fecha, setFecha] = useState('');
  const [desc, setDesc] = useState('');
  const [saving, setSaving] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!fecha) return;
    setSaving(true);
    try {
      await apiFetch('/api/admin/seguimientos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lead_id: leadId, tipo, fecha_programada: new Date(fecha).toISOString(), descripcion: desc || null }),
      });
      // Log activity
      await apiFetch('/api/admin/actividades', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          lead_id: leadId,
          tipo: 'seguimiento',
          descripcion: `Seguimiento agendado: ${TIPOS_SEGUIMIENTO.find(t => t.key === tipo)?.label || tipo} para ${fmtDate(new Date(fecha).toISOString())}`,
        }),
      });
      setOpen(false);
      setTipo('llamar');
      setFecha('');
      setDesc('');
      onCreated();
    } catch { /* toast handled upstream */ }
    setSaving(false);
  }

  if (!open) {
    return (
      <button onClick={() => setOpen(true)} className="flex items-center gap-1.5 text-xs font-medium text-violet-600 hover:text-violet-700">
        <Plus className="w-3.5 h-3.5" />Agendar seguimiento
      </button>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-violet-50 rounded-xl p-3 space-y-2">
      <div className="flex gap-2">
        <select value={tipo} onChange={e => setTipo(e.target.value)} className="flex-1 text-xs bg-white border border-violet-200 rounded-lg px-2 py-1.5 focus:outline-none">
          {TIPOS_SEGUIMIENTO.map(t => <option key={t.key} value={t.key}>{t.label}</option>)}
        </select>
        <input type="datetime-local" value={fecha} onChange={e => setFecha(e.target.value)} required className="flex-1 text-xs bg-white border border-violet-200 rounded-lg px-2 py-1.5 focus:outline-none" />
      </div>
      <input type="text" value={desc} onChange={e => setDesc(e.target.value)} placeholder="Nota opcional..." className="w-full text-xs bg-white border border-violet-200 rounded-lg px-2 py-1.5 focus:outline-none" />
      <div className="flex gap-2">
        <button type="submit" disabled={saving} className="flex-1 py-1.5 bg-violet-600 text-white text-xs font-semibold rounded-lg hover:bg-violet-700 disabled:opacity-50">
          {saving ? 'Guardando...' : 'Agendar'}
        </button>
        <button type="button" onClick={() => setOpen(false)} className="px-3 py-1.5 bg-white border border-violet-200 text-violet-600 text-xs font-semibold rounded-lg">
          Cancelar
        </button>
      </div>
    </form>
  );
}

/* ─── Activity Timeline ─────────────────────────────────────────────────── */
function ActivityTimeline({ leadId, actividades, onRefresh }: {
  leadId: string;
  actividades: Actividad[];
  onRefresh: () => void;
}) {
  const [nota, setNota] = useState('');
  const [saving, setSaving] = useState(false);

  async function handleAddNota(e: React.FormEvent) {
    e.preventDefault();
    if (!nota.trim()) return;
    setSaving(true);
    try {
      await apiFetch('/api/admin/actividades', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lead_id: leadId, tipo: 'nota', descripcion: nota.trim() }),
      });
      setNota('');
      onRefresh();
    } catch { /* handled */ }
    setSaving(false);
  }

  const TIPO_STYLES: Record<string, { icon: React.ElementType; color: string }> = {
    estado_cambio: { icon: CircleDot, color: 'text-blue-500' },
    nota: { icon: FileText, color: 'text-slate-500' },
    seguimiento: { icon: CalendarClock, color: 'text-violet-500' },
    contacto: { icon: MessageCircle, color: 'text-emerald-500' },
    creacion: { icon: Plus, color: 'text-slate-400' },
  };

  return (
    <div>
      {/* Add note */}
      <form onSubmit={handleAddNota} className="flex gap-2 mb-3">
        <input
          type="text"
          value={nota}
          onChange={e => setNota(e.target.value)}
          placeholder="Agregar nota..."
          className="flex-1 text-sm bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 focus:outline-none focus:border-slate-400"
        />
        <button type="submit" disabled={saving || !nota.trim()} className="px-3 py-2 bg-slate-800 text-white text-xs font-semibold rounded-xl hover:bg-slate-700 disabled:opacity-50 shrink-0">
          {saving ? '...' : 'Guardar'}
        </button>
      </form>

      {/* Timeline */}
      {actividades.length === 0 ? (
        <p className="text-xs text-slate-400 text-center py-4">Sin actividad registrada</p>
      ) : (
        <div className="space-y-0">
          {actividades.map((a, i) => {
            const style = TIPO_STYLES[a.tipo] || TIPO_STYLES.nota;
            const Icon = style.icon;
            return (
              <div key={a.id} className="flex gap-3 relative">
                {/* Vertical line */}
                {i < actividades.length - 1 && (
                  <div className="absolute left-[9px] top-6 bottom-0 w-px bg-slate-200" />
                )}
                <div className={`w-[18px] h-[18px] rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-white border border-slate-200 z-10`}>
                  <Icon className={`w-3 h-3 ${style.color}`} />
                </div>
                <div className="flex-1 min-w-0 pb-4">
                  <p className="text-sm text-slate-700">{a.descripcion}</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">{fmtDateTime(a.created_at)}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

/* ─── Seguimientos List in Detail ───────────────────────────────────────── */
function SeguimientosList({ seguimientos, onComplete }: {
  seguimientos: Seguimiento[];
  onComplete: (id: string) => void;
}) {
  const pendientes = seguimientos.filter(s => !s.completado);
  const completados = seguimientos.filter(s => s.completado);

  if (seguimientos.length === 0) return <p className="text-xs text-slate-400">Sin seguimientos</p>;

  return (
    <div className="space-y-1.5">
      {pendientes.map(s => {
        const overdue = isOverdue(s.fecha_programada);
        const tipoInfo = TIPOS_SEGUIMIENTO.find(t => t.key === s.tipo);
        return (
          <div key={s.id} className={`flex items-center gap-2 px-2.5 py-2 rounded-lg ${overdue ? 'bg-red-50' : 'bg-slate-50'}`}>
            <button onClick={() => onComplete(s.id)} className="shrink-0 w-4 h-4 rounded-full border-2 border-slate-300 hover:border-emerald-500 transition-colors" />
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-slate-700 truncate">{tipoInfo?.label || s.tipo}</p>
              {s.descripcion && <p className="text-[10px] text-slate-400 truncate">{s.descripcion}</p>}
            </div>
            <span className={`text-[10px] shrink-0 ${overdue ? 'text-red-500 font-medium' : 'text-slate-400'}`}>
              {fmtDateShort(s.fecha_programada)}
            </span>
          </div>
        );
      })}
      {completados.length > 0 && (
        <details className="mt-1">
          <summary className="text-[10px] text-slate-400 cursor-pointer hover:text-slate-500">
            {completados.length} completado{completados.length !== 1 ? 's' : ''}
          </summary>
          <div className="mt-1 space-y-1">
            {completados.map(s => (
              <div key={s.id} className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg opacity-50">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span className="text-xs text-slate-500 line-through truncate">{TIPOS_SEGUIMIENTO.find(t => t.key === s.tipo)?.label || s.tipo}</span>
                <span className="text-[10px] text-slate-400 shrink-0">{fmtDateShort(s.fecha_programada)}</span>
              </div>
            ))}
          </div>
        </details>
      )}
    </div>
  );
}

/* ─── Detail Panel ───────────────────────────────────────────────────────── */
function DetailPanel({ lead, onClose, onUpdate, onDelete, toast }: {
  lead: Lead;
  onClose: () => void;
  onUpdate: (id: string, updates: Partial<Lead>) => Promise<void>;
  onDelete: (id: string) => Promise<void>;
  toast: (msg: string, type: 'success' | 'error') => void;
}) {
  const [estado, setEstado] = useState(lead.estado);
  const [saving, setSaving] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [showMotivo, setShowMotivo] = useState(lead.estado === 'Cerrado - Perdido');
  const [motivo, setMotivo] = useState(lead.motivo_perdida ?? '');
  // Editable fields
  const [fuente, setFuente] = useState(lead.fuente ?? '');
  const [aseguradora, setAseguradora] = useState(lead.aseguradora_actual ?? '');
  const [valorEst, setValorEst] = useState(lead.valor_estimado?.toString() ?? '');
  const [idioma, setIdioma] = useState(lead.idioma_preferido ?? 'es');
  const [fechaVenc, setFechaVenc] = useState(lead.fecha_vencimiento_poliza ?? '');
  const [savingFields, setSavingFields] = useState(false);
  // Notas
  const [notas, setNotas] = useState(lead.notas ?? '');
  const [savingNotas, setSavingNotas] = useState(false);
  // Tab state
  const [tab, setTab] = useState<'info' | 'actividad' | 'seguimientos'>('info');
  // Activity & seguimientos data
  const [actividades, setActividades] = useState<Actividad[]>([]);
  const [seguimientos, setSeguimientos] = useState<Seguimiento[]>([]);
  const [loadingActivity, setLoadingActivity] = useState(false);

  // Fetch activity & seguimientos when lead changes
  useEffect(() => {
    setEstado(lead.estado);
    setShowMotivo(lead.estado === 'Cerrado - Perdido');
    setMotivo(lead.motivo_perdida ?? '');
    setNotas(lead.notas ?? '');
    setFuente(lead.fuente ?? '');
    setAseguradora(lead.aseguradora_actual ?? '');
    setValorEst(lead.valor_estimado?.toString() ?? '');
    setIdioma(lead.idioma_preferido ?? 'es');
    setFechaVenc(lead.fecha_vencimiento_poliza ?? '');
    loadData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lead.id]);

  async function loadData() {
    setLoadingActivity(true);
    try {
      const [actRes, segRes] = await Promise.all([
        apiFetch(`/api/admin/actividades?lead_id=${lead.id}`),
        apiFetch(`/api/admin/seguimientos?lead_id=${lead.id}`),
      ]);
      setActividades(actRes.actividades ?? []);
      setSeguimientos(segRes.seguimientos ?? []);
    } catch { /* handled */ }
    setLoadingActivity(false);
  }

  async function handleEstado(newEstado: string) {
    if (newEstado === 'Cerrado - Perdido') {
      setShowMotivo(true);
      setEstado(newEstado);
      return;
    }
    setShowMotivo(false);
    setEstado(newEstado);
    setSaving(true);
    try {
      await onUpdate(lead.id, { estado: newEstado });
      // Log activity
      await apiFetch('/api/admin/actividades', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          lead_id: lead.id,
          tipo: 'estado_cambio',
          descripcion: `Estado: ${lead.estado} → ${newEstado}`,
          metadata: { de: lead.estado, a: newEstado },
        }),
      });
      // Set primer_contacto_at if first contact
      if (newEstado === 'Contactado' && !lead.primer_contacto_at) {
        await onUpdate(lead.id, { primer_contacto_at: new Date().toISOString() });
      }
      await onUpdate(lead.id, { ultimo_contacto_at: new Date().toISOString() });
      loadData();
      toast('Estado actualizado', 'success');
    } catch { toast('Error al actualizar estado', 'error'); }
    setSaving(false);
  }

  async function handleCerrarPerdido() {
    setSaving(true);
    try {
      await onUpdate(lead.id, { estado: 'Cerrado - Perdido', motivo_perdida: motivo || null });
      await apiFetch('/api/admin/actividades', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          lead_id: lead.id,
          tipo: 'estado_cambio',
          descripcion: `Estado: ${lead.estado} → Cerrado - Perdido${motivo ? ` (${motivo})` : ''}`,
          metadata: { de: lead.estado, a: 'Cerrado - Perdido', motivo },
        }),
      });
      loadData();
      toast('Marcado como perdido', 'success');
    } catch { toast('Error al actualizar', 'error'); }
    setSaving(false);
  }

  async function handleSaveFields() {
    setSavingFields(true);
    try {
      await onUpdate(lead.id, {
        fuente: fuente || null,
        aseguradora_actual: aseguradora || null,
        valor_estimado: valorEst ? parseFloat(valorEst) : null,
        idioma_preferido: idioma,
        fecha_vencimiento_poliza: fechaVenc || null,
      });
      toast('Datos guardados', 'success');
    } catch { toast('Error al guardar', 'error'); }
    setSavingFields(false);
  }

  async function handleCompleteSeguimiento(segId: string) {
    try {
      await apiFetch(`/api/admin/seguimientos/${segId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ completado: true }),
      });
      toast('Seguimiento completado', 'success');
      loadData();
    } catch { toast('Error al completar', 'error'); }
  }

  const waLink = lead.telefono ? `https://wa.me/${lead.telefono.replace(/\D/g, '')}` : null;

  return (
    <div className="bg-white flex flex-col h-full overflow-y-auto w-full">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
        <span className="text-sm font-semibold text-slate-700">Detalle del Lead</span>
        <button onClick={onClose} className="text-slate-400 hover:text-slate-600 p-1"><X className="w-5 h-5" /></button>
      </div>

      {/* Avatar + name */}
      <div className="px-5 pt-5 pb-4 border-b border-slate-100">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-white font-semibold text-sm shrink-0">
            {initials(lead.nombre)}
          </div>
          <div className="min-w-0">
            <p className="font-semibold text-slate-800">{lead.nombre}</p>
            <p className="text-xs text-slate-500 truncate">{lead.email}</p>
          </div>
        </div>

        {/* Action buttons */}
        <div className="grid grid-cols-3 gap-2">
          {waLink && (
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 py-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 transition-colors">
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span className="text-[10px] font-medium text-emerald-700">WhatsApp</span>
            </a>
          )}
          <a href={`mailto:${lead.email}`} className="flex flex-col items-center gap-1 py-3 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors">
            <Mail className="w-4 h-4 text-blue-600" />
            <span className="text-[10px] font-medium text-blue-700">Email</span>
          </a>
          {lead.telefono && (
            <a href={`tel:${lead.telefono}`} className="flex flex-col items-center gap-1 py-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors">
              <Phone className="w-4 h-4 text-slate-600" />
              <span className="text-[10px] font-medium text-slate-700">Llamar</span>
            </a>
          )}
        </div>
      </div>

      {/* Estado Pipeline */}
      <div className="px-5 py-4 border-b border-slate-100">
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Pipeline</p>
        <div className="flex flex-wrap gap-1.5">
          {PIPELINE.map(p => (
            <button
              key={p.key}
              onClick={() => handleEstado(p.key)}
              className={`px-2.5 py-1.5 rounded-full text-[11px] font-medium transition-all ${
                estado === p.key ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
        {saving && <p className="text-xs text-slate-400 mt-1">Guardando...</p>}

        {/* Motivo de perdida */}
        {showMotivo && (
          <div className="mt-3 bg-red-50 rounded-xl p-3 space-y-2">
            <p className="text-xs font-medium text-red-700">Motivo de perdida:</p>
            <select value={motivo} onChange={e => setMotivo(e.target.value)} className="w-full text-xs bg-white border border-red-200 rounded-lg px-2 py-1.5 focus:outline-none">
              <option value="">Seleccionar...</option>
              {MOTIVOS_PERDIDA.map(m => <option key={m} value={m}>{m}</option>)}
            </select>
            <button onClick={handleCerrarPerdido} disabled={saving} className="w-full py-1.5 bg-red-600 text-white text-xs font-semibold rounded-lg hover:bg-red-700 disabled:opacity-50">
              Confirmar perdida
            </button>
          </div>
        )}
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-100">
        {(['info', 'actividad', 'seguimientos'] as const).map(t => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`flex-1 py-3 text-xs font-medium text-center transition-colors ${
              tab === t ? 'text-slate-800 border-b-2 border-slate-800' : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            {t === 'info' ? 'Info' : t === 'actividad' ? 'Actividad' : 'Seguimientos'}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="flex-1 overflow-y-auto">
        {tab === 'info' && (
          <div>
            {/* Basic info */}
            <div className="px-5 py-4 space-y-3 border-b border-slate-100 text-sm">
              <Row icon={<Phone className="w-3.5 h-3.5" />} label="Telefono" value={lead.telefono ?? '—'} copyable />
              <Row icon={<Mail className="w-3.5 h-3.5" />} label="Email" value={lead.email} copyable />
              <Row icon={<Calendar className="w-3.5 h-3.5" />} label="Registrado" value={fmtDateTime(lead.created_at)} />
              <div className="flex items-start gap-2">
                <span className="text-slate-400 mt-0.5"><MessageCircle className="w-3.5 h-3.5" /></span>
                <div className="flex-1 min-w-0">
                  <span className="text-slate-500 text-xs">Canal: </span>
                  <CanalBadge lead={lead} />
                </div>
              </div>
              <Row icon={<FileText className="w-3.5 h-3.5" />} label="Tipo de seguro" value={lead.tipo_seguro ?? '—'} />
              <Row icon={<Star className="w-3.5 h-3.5" />} label="Nivel" value={lead.nivel_proteccion ?? '—'} />
              {(lead.ciudad || lead.estado_us) && (
                <Row icon={<MapPin className="w-3.5 h-3.5" />} label="Ubicacion" value={[lead.ciudad, lead.estado_us].filter(Boolean).join(', ')} copyable />
              )}
              {lead.zip_code && <Row icon={<MapPin className="w-3.5 h-3.5" />} label="ZIP" value={lead.zip_code} copyable />}
              {lead.timeline && <Row icon={<Clock className="w-3.5 h-3.5" />} label="Cuando necesita" value={lead.timeline} />}
              {lead.tiene_seguro && <Row icon={<ShieldCheck className="w-3.5 h-3.5" />} label="Tiene seguro" value={lead.tiene_seguro} />}
            </div>

            {/* Lead Score */}
            {lead.lead_score !== null && (
              <div className="px-5 py-4 border-b border-slate-100">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Lead Score</p>
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full transition-all ${
                      lead.lead_score >= 70 ? 'bg-emerald-500' : lead.lead_score >= 40 ? 'bg-amber-400' : 'bg-red-400'
                    }`} style={{ width: `${Math.min(lead.lead_score, 100)}%` }} />
                  </div>
                  <span className={`text-sm font-bold w-8 text-right ${
                    lead.lead_score >= 70 ? 'text-emerald-600' : lead.lead_score >= 40 ? 'text-amber-600' : 'text-red-500'
                  }`}>{lead.lead_score}</span>
                </div>
              </div>
            )}

            {/* Editable CRM fields */}
            <div className="px-5 py-4 border-b border-slate-100 space-y-3">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Datos CRM</p>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-[10px] text-slate-400 uppercase">Idioma</label>
                  <select value={idioma} onChange={e => setIdioma(e.target.value)} className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-2 py-1.5 focus:outline-none">
                    <option value="es">Espanol</option>
                    <option value="en">English</option>
                  </select>
                </div>
                <div>
                  <label className="text-[10px] text-slate-400 uppercase">Fuente</label>
                  <select value={fuente} onChange={e => setFuente(e.target.value)} className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-2 py-1.5 focus:outline-none">
                    <option value="">—</option>
                    {FUENTES.map(f => <option key={f} value={f}>{f}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-[10px] text-slate-400 uppercase">Aseguradora actual</label>
                  <input type="text" value={aseguradora} onChange={e => setAseguradora(e.target.value)} placeholder="Ej: GEICO" className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-2 py-1.5 focus:outline-none" />
                </div>
                <div>
                  <label className="text-[10px] text-slate-400 uppercase">Valor estimado ($)</label>
                  <input type="number" value={valorEst} onChange={e => setValorEst(e.target.value)} placeholder="Prima anual" className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-2 py-1.5 focus:outline-none" />
                </div>
                <div className="col-span-2">
                  <label className="text-[10px] text-slate-400 uppercase">Vencimiento poliza actual</label>
                  <input type="date" value={fechaVenc} onChange={e => setFechaVenc(e.target.value)} className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-2 py-1.5 focus:outline-none" />
                </div>
              </div>
              <button onClick={handleSaveFields} disabled={savingFields} className="w-full py-2 bg-slate-800 text-white text-xs font-semibold rounded-xl hover:bg-slate-700 disabled:opacity-50">
                {savingFields ? 'Guardando...' : 'Guardar datos'}
              </button>
            </div>

            {/* Detalles del formulario */}
            {lead.detalles && (
              <div className="px-5 py-4 border-b border-slate-100">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Detalles del formulario</p>
                <div className="bg-slate-50 rounded-xl px-3 py-2 space-y-1.5">
                  {(() => {
                    try {
                      const obj = typeof lead.detalles === 'string' ? JSON.parse(lead.detalles) : lead.detalles;
                      if (typeof obj === 'object' && obj !== null) {
                        return Object.entries(obj).map(([k, v]) => (
                          <div key={k} className="flex justify-between items-start gap-2">
                            <span className="text-xs text-slate-500 shrink-0">{k.replace(/_/g, ' ')}</span>
                            <span className="text-xs text-slate-700 font-medium text-right">{String(v)}</span>
                          </div>
                        ));
                      }
                      return <p className="text-xs text-slate-600">{String(obj)}</p>;
                    } catch {
                      return <p className="text-xs text-slate-600">{String(lead.detalles)}</p>;
                    }
                  })()}
                </div>
              </div>
            )}

            {/* Notas internas */}
            <div className="px-5 py-4 border-b border-slate-100">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Notas internas</p>
              <textarea
                value={notas}
                onChange={e => setNotas(e.target.value)}
                rows={4}
                placeholder="Agrega notas sobre este contacto..."
                className="w-full text-sm text-slate-700 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 resize-none focus:outline-none focus:border-slate-400"
              />
              <button
                onClick={async () => {
                  setSavingNotas(true);
                  try {
                    await onUpdate(lead.id, { notas });
                    toast('Notas guardadas', 'success');
                  } catch { toast('Error al guardar notas', 'error'); }
                  setSavingNotas(false);
                }}
                disabled={savingNotas}
                className="mt-2 w-full py-2 bg-slate-800 text-white text-xs font-semibold rounded-xl hover:bg-slate-700 transition-colors disabled:opacity-50"
              >
                {savingNotas ? 'Guardando...' : 'Guardar notas'}
              </button>
            </div>

            {/* TCPA Consent info */}
            <div className="px-5 py-4 border-b border-slate-100">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">Consentimiento TCPA</p>
              <p className="text-xs text-slate-400">Registrado al crear el lead</p>
            </div>
          </div>
        )}

        {tab === 'actividad' && (
          <div className="px-5 py-4">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">Historial de actividad</p>
            {loadingActivity ? (
              <div className="flex items-center justify-center py-8">
                <div className="w-5 h-5 border-2 border-slate-300 border-t-slate-600 rounded-full animate-spin" />
              </div>
            ) : (
              <ActivityTimeline leadId={lead.id} actividades={actividades} onRefresh={loadData} />
            )}
          </div>
        )}

        {tab === 'seguimientos' && (
          <div className="px-5 py-4 space-y-4">
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">Seguimientos</p>
              <SeguimientoForm leadId={lead.id} onCreated={loadData} />
            </div>
            {loadingActivity ? (
              <div className="flex items-center justify-center py-8">
                <div className="w-5 h-5 border-2 border-slate-300 border-t-slate-600 rounded-full animate-spin" />
              </div>
            ) : (
              <SeguimientosList seguimientos={seguimientos} onComplete={handleCompleteSeguimiento} />
            )}
          </div>
        )}
      </div>

      {/* Delete */}
      <div className="px-5 py-4 border-t border-slate-100">
        {confirmDelete ? (
          <div className="bg-red-50 border border-red-200 rounded-xl p-3 text-sm">
            <p className="text-red-700 font-medium mb-2">Eliminar este lead?</p>
            <div className="flex gap-2">
              <button onClick={() => onDelete(lead.id)} className="flex-1 py-2 bg-red-600 text-white text-xs font-semibold rounded-lg hover:bg-red-700">Si, eliminar</button>
              <button onClick={() => setConfirmDelete(false)} className="flex-1 py-2 bg-white border border-slate-300 text-slate-600 text-xs font-semibold rounded-lg hover:bg-slate-50">Cancelar</button>
            </div>
          </div>
        ) : (
          <button onClick={() => setConfirmDelete(true)} className="flex items-center gap-2 text-red-500 hover:text-red-700 text-xs font-medium transition-colors">
            <Trash2 className="w-3.5 h-3.5" />Eliminar lead
          </button>
        )}
      </div>
    </div>
  );
}

/* ─── Mobile Lead Card ───────────────────────────────────────────────────── */
function MobileLeadCard({ lead, selected, onSelect }: {
  lead: Lead;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <div
      className={`bg-white rounded-2xl border p-4 cursor-pointer transition-all ${
        selected ? 'border-slate-400 ring-1 ring-slate-300' : 'border-slate-200'
      }`}
      onClick={onSelect}
    >
      <div className="flex items-start gap-3">
        <div className="w-9 h-9 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-semibold text-xs shrink-0">
          {initials(lead.nombre)}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <p className="font-medium text-slate-800 text-sm leading-tight truncate">{lead.nombre}</p>
            <EstadoBadge estado={lead.estado} />
          </div>
          <p className="text-xs text-slate-500 mt-0.5 truncate">{lead.email}</p>
          <div className="flex items-center gap-1.5 mt-1 flex-wrap">
            {lead.tipo_seguro && <span className="text-xs text-slate-400">{lead.tipo_seguro}</span>}
            <CanalBadge lead={lead} />
          </div>
        </div>
        <ChevronRight className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
      </div>
      <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-100">
        <p className="text-[10px] text-slate-400">{fmtDate(lead.created_at)} · {timeAgo(lead.created_at)}</p>
        <div className="flex items-center gap-2">
          {lead.valor_estimado && (
            <span className="text-[10px] font-medium text-emerald-600">${lead.valor_estimado}</span>
          )}
          {lead.lead_score !== null && (
            <span className={`text-[10px] font-semibold ${
              lead.lead_score >= 70 ? 'text-emerald-600' : lead.lead_score >= 40 ? 'text-amber-600' : 'text-red-500'
            }`}>Score {lead.lead_score}</span>
          )}
        </div>
      </div>
    </div>
  );
}

/* ─── Main Page ─────────────────────────────────────────────────────────── */
export default function LeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [filterEstado, setFilterEstado] = useState('Todos');
  const [filterTipo, setFilterTipo] = useState('Todos');
  const [selected, setSelected] = useState<Lead | null>(null);
  const [refreshing, setRefreshing] = useState(false);
  const [statsOpen, setStatsOpen] = useState(false);
  const [toastMsg, setToastMsg] = useState<{ msg: string; type: 'success' | 'error' } | null>(null);
  // Seguimientos pendientes (vista Hoy)
  const [segPendientes, setSegPendientes] = useState<Seguimiento[]>([]);

  const showToast = useCallback((msg: string, type: 'success' | 'error') => {
    setToastMsg({ msg, type });
  }, []);

  async function fetchLeads() {
    try {
      const data = await apiFetch('/api/admin/leads');
      setLeads(data.leads ?? []);
    } catch (err) {
      if (err instanceof Error && err.message !== 'Sesion expirada') {
        setError('No se pudieron cargar los leads. Verifica tu conexion.');
      }
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }

  async function fetchSeguimientos() {
    try {
      const data = await apiFetch('/api/admin/seguimientos?pendientes=1');
      setSegPendientes(data.seguimientos ?? []);
    } catch { /* ignore */ }
  }

  useEffect(() => {
    fetchLeads();
    fetchSeguimientos();
  }, []);

  async function handleRefresh() {
    setRefreshing(true);
    await Promise.all([fetchLeads(), fetchSeguimientos()]);
  }

  const handleUpdate = useCallback(async (id: string, updates: Partial<Lead>) => {
    try {
      await apiFetch(`/api/admin/leads/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates),
      });
      setLeads(prev => prev.map(l => (l.id === id ? { ...l, ...updates } : l)));
      setSelected(prev => (prev?.id === id ? { ...prev, ...updates } : prev));
    } catch (err) {
      showToast(err instanceof Error ? err.message : 'Error al actualizar', 'error');
      throw err;
    }
  }, [showToast]);

  const handleDelete = useCallback(async (id: string) => {
    try {
      await apiFetch(`/api/admin/leads/${id}`, { method: 'DELETE' });
      setLeads(prev => prev.filter(l => l.id !== id));
      setSelected(null);
      showToast('Lead eliminado', 'success');
    } catch (err) {
      showToast(err instanceof Error ? err.message : 'Error al eliminar', 'error');
    }
  }, [showToast]);

  async function handleCompleteSeg(segId: string) {
    try {
      await apiFetch(`/api/admin/seguimientos/${segId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ completado: true }),
      });
      showToast('Seguimiento completado', 'success');
      fetchSeguimientos();
    } catch { showToast('Error al completar', 'error'); }
  }

  function handleClickLeadFromSeg(leadId: string) {
    const lead = leads.find(l => l.id === leadId);
    if (lead) setSelected(lead);
  }

  /* Stats */
  const stats = useMemo(() => {
    const total = leads.length;
    const activos = leads.filter(l => !l.estado.startsWith('Cerrado')).length;
    const nuevo = leads.filter(l => l.estado === 'Nuevo').length;
    const contactado = leads.filter(l => l.estado === 'Contactado').length;
    const cotizando = leads.filter(l => l.estado === 'Cotizando').length;
    const ganados = leads.filter(l => l.estado === 'Cerrado - Ganado').length;
    const conversion = total > 0 ? Math.round((ganados / total) * 100) : 0;
    const valorPipeline = leads
      .filter(l => !l.estado.startsWith('Cerrado'))
      .reduce((sum, l) => sum + (l.valor_estimado || 0), 0);
    const sinContactar48h = leads.filter(l => {
      if (l.estado !== 'Nuevo') return false;
      const hrs = (Date.now() - new Date(l.created_at).getTime()) / 3600000;
      return hrs > 48;
    }).length;

    return { total, activos, nuevo, contactado, cotizando, ganados, conversion, valorPipeline, sinContactar48h };
  }, [leads]);

  /* Tipos unicos */
  const tiposUnicos = useMemo(() => {
    const tipos = leads.map(l => l.tipo_seguro).filter(Boolean) as string[];
    return ['Todos', ...Array.from(new Set(tipos)).sort()];
  }, [leads]);

  /* Filtered list */
  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return leads.filter(l => {
      const matchSearch = !q || l.nombre.toLowerCase().includes(q) || l.email.toLowerCase().includes(q) || (l.telefono ?? '').includes(q);
      const matchEstado = filterEstado === 'Todos' || l.estado === filterEstado;
      const matchTipo = filterTipo === 'Todos' || l.tipo_seguro === filterTipo;
      return matchSearch && matchEstado && matchTipo;
    });
  }, [leads, search, filterEstado, filterTipo]);

  /* CSV export */
  function exportCSV() {
    const headers = ['Nombre', 'Email', 'Telefono', 'Tipo Seguro', 'Estado', 'Canal', 'Fuente', 'Ubicacion', 'Valor Estimado', 'Lead Score', 'Fecha'];
    const rows = filtered.map(l => [
      l.nombre, l.email, l.telefono ?? '', l.tipo_seguro ?? '', l.estado, getCanal(l),
      l.fuente ?? '', [l.ciudad, l.estado_us].filter(Boolean).join(', '),
      l.valor_estimado ?? '', l.lead_score ?? '', fmtDate(l.created_at),
    ]);
    const csv = [headers, ...rows]
      .map(r => r.map(v => `"${String(v).replace(/"/g, '""')}"`).join(','))
      .join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `leads-consultingbymf-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full min-h-[300px]">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-2 border-slate-300 border-t-slate-700 rounded-full animate-spin" />
          <p className="text-sm text-slate-500">Cargando leads...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full overflow-hidden">
      {/* Toast */}
      {toastMsg && <Toast message={toastMsg.msg} type={toastMsg.type} onClose={() => setToastMsg(null)} />}

      {/* Left: main content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">

        {/* Page header */}
        <div className="px-4 sm:px-6 pt-4 sm:pt-6 pb-4 bg-slate-100 border-b border-slate-200">

          {/* Title row */}
          <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
            <div className="flex items-center gap-3">
              <div>
                <h1 className="text-xl font-bold text-slate-800">Leads</h1>
                <p className="text-sm text-slate-500 mt-0.5">{filtered.length} de {leads.length} contactos</p>
              </div>
              <button onClick={() => setStatsOpen(v => !v)} className="md:hidden flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-medium text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 transition-colors">
                <BarChart2 className="w-3.5 h-3.5" />Stats
                <ChevronDown className={`w-3 h-3 transition-transform ${statsOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={handleRefresh} disabled={refreshing} className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 transition-colors disabled:opacity-50">
                <RefreshCw className={`w-3.5 h-3.5 ${refreshing ? 'animate-spin' : ''}`} />
                <span className="hidden sm:inline">Actualizar</span>
              </button>
              <button onClick={exportCSV} className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm text-white bg-slate-800 hover:bg-slate-700 transition-colors">
                <Download className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Exportar CSV</span>
              </button>
            </div>
          </div>

          {/* Stats grid */}
          <div className={`${statsOpen ? 'block' : 'hidden'} md:block mb-4`}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3">
              <StatCard label="Total leads" value={stats.total} icon={Users} color="bg-slate-100 text-slate-600" />
              <StatCard label="Nuevos" value={stats.nuevo} icon={TrendingUp} color="bg-blue-100 text-blue-600" />
              <StatCard label="En pipeline" value={stats.activos} icon={UserCheck} color="bg-violet-100 text-violet-600" />
              <StatCard label="Ganados" value={stats.ganados} icon={Trophy} color="bg-emerald-100 text-emerald-600" />
              <StatCard label="Conversion" value={stats.conversion} icon={BarChart2} color="bg-amber-100 text-amber-600" suffix="%" />
            </div>
            {/* Secondary metrics */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 mt-2">
              {stats.valorPipeline > 0 && (
                <StatCard label="Pipeline estimado" value={`$${stats.valorPipeline.toLocaleString()}`} icon={DollarSign} color="bg-emerald-50 text-emerald-600" />
              )}
              {stats.sinContactar48h > 0 && (
                <div className="bg-red-50 rounded-2xl border border-red-200 p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-red-100 text-red-600">
                    <AlertCircle className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xl font-bold text-red-700 leading-none">{stats.sinContactar48h}</p>
                    <p className="text-xs text-red-500 mt-0.5 truncate">Sin contactar +48h</p>
                  </div>
                </div>
              )}
              <StatCard label="Cotizando" value={stats.cotizando} icon={Search} color="bg-violet-50 text-violet-600" />
            </div>
          </div>

          {/* Search + filters */}
          <div className="flex flex-col gap-2 sm:gap-3">
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text" value={search} onChange={e => setSearch(e.target.value)}
                  placeholder="Buscar por nombre, email o telefono..."
                  className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:border-slate-400"
                />
                {search && (
                  <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-0.5 shrink-0">
                <span className="text-xs text-slate-400 font-medium shrink-0 hidden sm:block">Estado:</span>
                {FILTER_ESTADOS.map(e => (
                  <button
                    key={e}
                    onClick={() => setFilterEstado(e)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all whitespace-nowrap shrink-0 ${
                      filterEstado === e ? 'bg-slate-800 text-white' : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {e}
                  </button>
                ))}
              </div>
            </div>

            {tiposUnicos.length > 1 && (
              <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-0.5">
                <Filter className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span className="text-xs text-slate-400 font-medium shrink-0">Seguro:</span>
                {tiposUnicos.map(t => (
                  <button
                    key={t}
                    onClick={() => setFilterTipo(t)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all whitespace-nowrap shrink-0 ${
                      filterTipo === t ? 'bg-violet-700 text-white' : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Error */}
        {error && (
          <div className="mx-4 sm:mx-6 mt-4 px-4 py-3 bg-red-50 border border-red-200 rounded-xl text-sm text-red-700">{error}</div>
        )}

        {/* Content */}
        <div className="flex-1 overflow-auto px-4 sm:px-6 py-4">
          {/* Vista Hoy */}
          <VistaHoy seguimientos={segPendientes} onComplete={handleCompleteSeg} onClickLead={handleClickLeadFromSeg} />

          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <Users className="w-10 h-10 text-slate-300 mb-3" />
              <p className="text-slate-500 font-medium">No hay leads que mostrar</p>
              <p className="text-slate-400 text-sm mt-1">
                {search || filterEstado !== 'Todos' ? 'Prueba con otros filtros' : 'Los leads del formulario apareceran aqui'}
              </p>
            </div>
          ) : (
            <>
              {/* Mobile cards */}
              <div className="md:hidden space-y-3">
                {filtered.map(lead => (
                  <MobileLeadCard key={lead.id} lead={lead} selected={selected?.id === lead.id} onSelect={() => setSelected(lead)} />
                ))}
              </div>

              {/* Desktop table */}
              <div className="hidden md:block bg-white rounded-2xl border border-slate-200 overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-100 bg-slate-50">
                      <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Contacto</th>
                      <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Tipo Seguro</th>
                      <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide hidden lg:table-cell">Canal</th>
                      <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Estado</th>
                      <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide hidden lg:table-cell">Fecha</th>
                      <th className="px-4 py-3" />
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filtered.map(lead => (
                      <tr
                        key={lead.id}
                        className={`hover:bg-slate-50 transition-colors cursor-pointer ${selected?.id === lead.id ? 'bg-slate-50' : ''}`}
                        onClick={() => setSelected(lead)}
                      >
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-semibold text-xs shrink-0">
                              {initials(lead.nombre)}
                            </div>
                            <div>
                              <p className="font-medium text-slate-800 leading-tight">{lead.nombre}</p>
                              <p className="text-xs text-slate-500">{lead.email}</p>
                              {lead.telefono && <p className="text-xs text-slate-400">{lead.telefono}</p>}
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-slate-600">{lead.tipo_seguro ?? <span className="text-slate-400">—</span>}</td>
                        <td className="px-4 py-3 hidden lg:table-cell"><CanalBadge lead={lead} /></td>
                        <td className="px-4 py-3">
                          <EstadoBadge estado={lead.estado} />
                        </td>
                        <td className="px-4 py-3 hidden lg:table-cell whitespace-nowrap">
                          <p className="text-xs text-slate-500">{fmtDate(lead.created_at)}</p>
                          <p className="text-[10px] text-slate-400">{timeAgo(lead.created_at)}</p>
                        </td>
                        <td className="px-4 py-3"><ChevronRight className="w-4 h-4 text-slate-400" /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Desktop: right panel */}
      {selected && (
        <div className="hidden lg:block lg:w-80 xl:w-96 shrink-0 border-l border-slate-200 overflow-y-auto">
          <DetailPanel lead={selected} onClose={() => setSelected(null)} onUpdate={handleUpdate} onDelete={handleDelete} toast={showToast} />
        </div>
      )}

      {/* Mobile: slide-in overlay */}
      {selected && (
        <div className="lg:hidden fixed inset-0 z-40 flex justify-end">
          <div className="absolute inset-0 bg-black/50 fade-in-backdrop" onClick={() => setSelected(null)} />
          <div className="relative w-full max-w-sm bg-white shadow-2xl overflow-y-auto slide-in-right">
            <DetailPanel lead={selected} onClose={() => setSelected(null)} onUpdate={handleUpdate} onDelete={handleDelete} toast={showToast} />
          </div>
        </div>
      )}
    </div>
  );
}
