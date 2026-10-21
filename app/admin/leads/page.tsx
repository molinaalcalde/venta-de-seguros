'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import {
  Search, Trash2, ChevronRight, X, Phone, Mail, MessageCircle,
  Users, TrendingUp, UserCheck, Star, Download, RefreshCw, Calendar, FileText,
  MapPin, Clock, ShieldCheck, Filter, BarChart2, Copy, Check, ChevronDown,
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
}

const ESTADOS = ['Todos', 'Nuevo', 'Contactado', 'Calificado', 'Cerrado'];
const ESTADO_COLORS: Record<string, string> = {
  Nuevo:      'bg-blue-100 text-blue-700',
  Contactado: 'bg-amber-100 text-amber-700',
  Calificado: 'bg-emerald-100 text-emerald-700',
  Cerrado:    'bg-slate-100 text-slate-600',
};

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

function getCanal(lead: Lead): 'WhatsApp' | 'Formulario' {
  if (!lead.detalles) return 'Formulario';
  try {
    const obj = typeof lead.detalles === 'string' ? JSON.parse(lead.detalles) : lead.detalles;
    if (obj?.canal === 'WhatsApp') return 'WhatsApp';
  } catch { /* ignore */ }
  if (lead.email?.endsWith('@lead.local')) return 'WhatsApp';
  return 'Formulario';
}

function CanalBadge({ lead }: { lead: Lead }) {
  const canal = getCanal(lead);
  if (canal === 'WhatsApp') {
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-50 text-emerald-700">
        <MessageCircle className="w-3 h-3" />
        WhatsApp
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-blue-50 text-blue-600">
      <FileText className="w-3 h-3" />
      Formulario
    </span>
  );
}

/* ─── Stat Card ─────────────────────────────────────────────────────────── */
function StatCard({ label, value, icon: Icon, color }: {
  label: string; value: number; icon: React.ElementType; color: string;
}) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-4 flex items-center gap-3">
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${color}`}>
        <Icon className="w-5 h-5" />
      </div>
      <div className="min-w-0">
        <p className="text-xl font-bold text-slate-800 leading-none">{value}</p>
        <p className="text-xs text-slate-500 mt-0.5 truncate">{label}</p>
      </div>
    </div>
  );
}

/* ─── Estado Badge ───────────────────────────────────────────────────────── */
function EstadoBadge({ estado }: { estado: string }) {
  const cls = ESTADO_COLORS[estado] ?? 'bg-slate-100 text-slate-600';
  return (
    <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${cls}`}>
      {estado}
    </span>
  );
}

/* ─── Detail Panel ───────────────────────────────────────────────────────── */
function DetailPanel({ lead, onClose, onUpdate, onDelete }: {
  lead: Lead;
  onClose: () => void;
  onUpdate: (id: string, updates: Partial<Lead>) => Promise<void>;
  onDelete: (id: string) => Promise<void>;
}) {
  const [estado, setEstado] = useState(lead.estado);
  const [notas, setNotas] = useState(lead.notas ?? '');
  const [saving, setSaving] = useState(false);
  const [savingNotas, setSavingNotas] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  async function handleEstado(newEstado: string) {
    setEstado(newEstado);
    setSaving(true);
    await onUpdate(lead.id, { estado: newEstado });
    setSaving(false);
  }

  async function handleSaveNotas() {
    setSavingNotas(true);
    await onUpdate(lead.id, { notas });
    setSavingNotas(false);
  }

  const waLink = lead.telefono
    ? `https://wa.me/${lead.telefono.replace(/\D/g, '')}`
    : null;

  return (
    <div className="bg-white flex flex-col h-full overflow-y-auto w-full">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
          <span className="text-sm font-semibold text-slate-700">Detalle del Lead</span>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 p-1">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Avatar + name */}
        <div className="px-5 pt-5 pb-4 border-b border-slate-100">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-white font-semibold text-sm shrink-0">
              {initials(lead.nombre)}
            </div>
            <div>
              <p className="font-semibold text-slate-800">{lead.nombre}</p>
              <p className="text-xs text-slate-500">{lead.email}</p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="grid grid-cols-3 gap-2">
            {waLink && (
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1 py-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span className="text-[10px] font-medium text-emerald-700">WhatsApp</span>
              </a>
            )}
            <a
              href={`mailto:${lead.email}`}
              className="flex flex-col items-center gap-1 py-3 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors"
            >
              <Mail className="w-4 h-4 text-blue-600" />
              <span className="text-[10px] font-medium text-blue-700">Email</span>
            </a>
            {lead.telefono && (
              <a
                href={`tel:${lead.telefono}`}
                className="flex flex-col items-center gap-1 py-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors"
              >
                <Phone className="w-4 h-4 text-slate-600" />
                <span className="text-[10px] font-medium text-slate-700">Llamar</span>
              </a>
            )}
          </div>
        </div>

        {/* Info */}
        <div className="px-5 py-4 space-y-3 border-b border-slate-100 text-sm">
          <Row icon={<Phone className="w-3.5 h-3.5" />} label="Teléfono" value={lead.telefono ?? '—'} copyable />
          <Row icon={<Mail className="w-3.5 h-3.5" />} label="Email" value={lead.email} copyable />
          <Row icon={<Calendar className="w-3.5 h-3.5" />} label="Registrado" value={fmtDateTime(lead.created_at)} />
          <div className="flex items-start gap-2">
            <span className="text-slate-400 mt-0.5"><MessageCircle className="w-3.5 h-3.5" /></span>
            <div className="flex-1 min-w-0">
              <span className="text-slate-500 text-xs">Canal: </span>
              <CanalBadge lead={lead} />
            </div>
          </div>
          <Row icon={<Clock className="w-3.5 h-3.5" />} label="Tiempo" value={timeAgo(lead.created_at)} />
          <Row icon={<FileText className="w-3.5 h-3.5" />} label="Tipo de seguro" value={lead.tipo_seguro ?? '—'} />
          <Row icon={<Star className="w-3.5 h-3.5" />} label="Nivel" value={lead.nivel_proteccion ?? '—'} />
          {(lead.ciudad || lead.estado_us) && (
            <Row icon={<MapPin className="w-3.5 h-3.5" />} label="Ubicación" value={[lead.ciudad, lead.estado_us].filter(Boolean).join(', ')} copyable />
          )}
          {lead.zip_code && (
            <Row icon={<MapPin className="w-3.5 h-3.5" />} label="ZIP" value={lead.zip_code} copyable />
          )}
          {lead.timeline && (
            <Row icon={<Clock className="w-3.5 h-3.5" />} label="¿Cuándo necesita?" value={lead.timeline} />
          )}
          {lead.tiene_seguro && (
            <Row icon={<ShieldCheck className="w-3.5 h-3.5" />} label="¿Tiene seguro?" value={lead.tiene_seguro} />
          )}
        </div>

        {/* Lead Score */}
        {lead.lead_score !== null && (
          <div className="px-5 py-4 border-b border-slate-100">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Lead Score</p>
            <div className="flex items-center gap-3">
              <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all ${
                    lead.lead_score >= 70 ? 'bg-emerald-500' :
                    lead.lead_score >= 40 ? 'bg-amber-400' : 'bg-red-400'
                  }`}
                  style={{ width: `${Math.min(lead.lead_score, 100)}%` }}
                />
              </div>
              <span className={`text-sm font-bold w-8 text-right ${
                lead.lead_score >= 70 ? 'text-emerald-600' :
                lead.lead_score >= 40 ? 'text-amber-600' : 'text-red-500'
              }`}>
                {lead.lead_score}
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              {lead.lead_score >= 70 ? 'Alta prioridad' : lead.lead_score >= 40 ? 'Prioridad media' : 'Prioridad baja'}
            </p>
          </div>
        )}

        {/* Detalles */}
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

        {/* Estado */}
        <div className="px-5 py-4 border-b border-slate-100">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Estado</p>
          <div className="flex flex-wrap gap-1.5">
            {ESTADOS.filter(e => e !== 'Todos').map(e => (
              <button
                key={e}
                onClick={() => handleEstado(e)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  estado === e
                    ? 'bg-slate-800 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {e}
              </button>
            ))}
          </div>
          {saving && <p className="text-xs text-slate-400 mt-1">Guardando…</p>}
        </div>

        {/* Notas */}
        <div className="px-5 py-4 border-b border-slate-100 flex-1">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Notas internas</p>
          <textarea
            value={notas}
            onChange={e => setNotas(e.target.value)}
            rows={4}
            placeholder="Agrega notas sobre este contacto…"
            className="w-full text-sm text-slate-700 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 resize-none focus:outline-none focus:border-slate-400"
          />
          <button
            onClick={handleSaveNotas}
            disabled={savingNotas}
            className="mt-2 w-full py-2 bg-slate-800 text-white text-xs font-semibold rounded-xl hover:bg-slate-700 transition-colors disabled:opacity-50"
          >
            {savingNotas ? 'Guardando…' : 'Guardar notas'}
          </button>
        </div>

        {/* Delete */}
        <div className="px-5 py-4">
          {confirmDelete ? (
            <div className="bg-red-50 border border-red-200 rounded-xl p-3 text-sm">
              <p className="text-red-700 font-medium mb-2">¿Eliminar este lead?</p>
              <div className="flex gap-2">
                <button
                  onClick={() => onDelete(lead.id)}
                  className="flex-1 py-2 bg-red-600 text-white text-xs font-semibold rounded-lg hover:bg-red-700"
                >
                  Sí, eliminar
                </button>
                <button
                  onClick={() => setConfirmDelete(false)}
                  className="flex-1 py-2 bg-white border border-slate-300 text-slate-600 text-xs font-semibold rounded-lg hover:bg-slate-50"
                >
                  Cancelar
                </button>
              </div>
            </div>
          ) : (
            <button
              onClick={() => setConfirmDelete(true)}
              className="flex items-center gap-2 text-red-500 hover:text-red-700 text-xs font-medium transition-colors"
            >
              <Trash2 className="w-3.5 h-3.5" />
              Eliminar lead
            </button>
          )}
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
        /* Siempre visible en touch (sm:opacity-0 sm:group-hover:opacity-100),
           visible siempre en móvil para que funcione en táctil */
        <button
          onClick={handleCopy}
          className="opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity text-slate-400 hover:text-slate-600 mt-0.5 shrink-0 p-1 -m-1"
          title="Copiar"
        >
          {copied ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
        </button>
      )}
    </div>
  );
}

/* ─── Mobile Lead Card ───────────────────────────────────────────────────── */
function MobileLeadCard({ lead, selected, onSelect, onUpdate }: {
  lead: Lead;
  selected: boolean;
  onSelect: () => void;
  onUpdate: (id: string, updates: Partial<Lead>) => Promise<void>;
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
            {lead.tipo_seguro && (
              <span className="text-xs text-slate-400">{lead.tipo_seguro}</span>
            )}
            <CanalBadge lead={lead} />
          </div>
        </div>
        <ChevronRight className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
      </div>
      <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-100">
        <p className="text-[10px] text-slate-400">{fmtDate(lead.created_at)} · {timeAgo(lead.created_at)}</p>
        {lead.lead_score !== null && (
          <span className={`text-[10px] font-semibold ${
            lead.lead_score >= 70 ? 'text-emerald-600' :
            lead.lead_score >= 40 ? 'text-amber-600' : 'text-red-500'
          }`}>
            Score {lead.lead_score}
          </span>
        )}
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
  const [selected, setSelected] = useState<Lead | null>(null);
  const [refreshing, setRefreshing] = useState(false);
  const [filterTipo, setFilterTipo] = useState('Todos');
  const [statsOpen, setStatsOpen] = useState(false);

  async function fetchLeads() {
    try {
      const res = await fetch('/api/admin/leads');
      if (!res.ok) throw new Error('Error al cargar leads');
      const data = await res.json();
      setLeads(data.leads ?? []);
    } catch {
      setError('No se pudieron cargar los leads. Verifica tu conexión.');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }

  useEffect(() => { fetchLeads(); }, []);

  async function handleRefresh() {
    setRefreshing(true);
    await fetchLeads();
  }

  const handleUpdate = useCallback(async (id: string, updates: Partial<Lead>) => {
    await fetch(`/api/admin/leads/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updates),
    });
    setLeads(prev =>
      prev.map(l => (l.id === id ? { ...l, ...updates } : l))
    );
    setSelected(prev => (prev?.id === id ? { ...prev, ...updates } : prev));
  }, []);

  const handleDelete = useCallback(async (id: string) => {
    await fetch(`/api/admin/leads/${id}`, { method: 'DELETE' });
    setLeads(prev => prev.filter(l => l.id !== id));
    setSelected(null);
  }, []);

  /* Stats */
  const stats = useMemo(() => {
    const total      = leads.length;
    const nuevo      = leads.filter(l => l.estado === 'Nuevo').length;
    const contactado = leads.filter(l => l.estado === 'Contactado').length;
    const calificado = leads.filter(l => l.estado === 'Calificado').length;
    const conversion = total > 0 ? Math.round((calificado / total) * 100) : 0;
    return { total, nuevo, contactado, calificado, conversion };
  }, [leads]);

  /* Tipos únicos para filtro */
  const tiposUnicos = useMemo(() => {
    const tipos = leads.map(l => l.tipo_seguro).filter(Boolean) as string[];
    return ['Todos', ...Array.from(new Set(tipos)).sort()];
  }, [leads]);

  /* Filtered list */
  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return leads.filter(l => {
      const matchSearch =
        !q ||
        l.nombre.toLowerCase().includes(q) ||
        l.email.toLowerCase().includes(q) ||
        (l.telefono ?? '').includes(q);
      const matchEstado = filterEstado === 'Todos' || l.estado === filterEstado;
      const matchTipo   = filterTipo === 'Todos' || l.tipo_seguro === filterTipo;
      return matchSearch && matchEstado && matchTipo;
    });
  }, [leads, search, filterEstado, filterTipo]);

  /* CSV export */
  function exportCSV() {
    const headers = ['Nombre', 'Email', 'Teléfono', 'Tipo Seguro', 'Nivel', 'Estado', 'Fecha'];
    const rows = filtered.map(l => [
      l.nombre, l.email, l.telefono ?? '', l.tipo_seguro ?? '',
      l.nivel_proteccion ?? '', l.estado, fmtDate(l.created_at),
    ]);
    const csv = [headers, ...rows]
      .map(r => r.map(v => `"${String(v).replace(/"/g, '""')}"`).join(','))
      .join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `leads-aegis-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full min-h-[300px]">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-2 border-slate-300 border-t-slate-700 rounded-full animate-spin" />
          <p className="text-sm text-slate-500">Cargando leads…</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full overflow-hidden">
      {/* Left: main content */}
      <div className={`flex-1 flex flex-col min-w-0 overflow-hidden transition-all ${selected ? 'lg:mr-0' : ''}`}>

        {/* Page header */}
        <div className="px-4 sm:px-6 pt-4 sm:pt-6 pb-4 bg-slate-100 border-b border-slate-200">

          {/* Title row */}
          <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
            <div className="flex items-center gap-3">
              <div>
                <h1 className="text-xl font-bold text-slate-800">Leads</h1>
                <p className="text-sm text-slate-500 mt-0.5">
                  {filtered.length} de {leads.length} contactos
                </p>
              </div>
              {/* Stats toggle — solo en móvil */}
              <button
                onClick={() => setStatsOpen(v => !v)}
                className="md:hidden flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-medium text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 transition-colors"
              >
                <BarChart2 className="w-3.5 h-3.5" />
                Stats
                <ChevronDown className={`w-3 h-3 transition-transform ${statsOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleRefresh}
                disabled={refreshing}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 transition-colors disabled:opacity-50"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${refreshing ? 'animate-spin' : ''}`} />
                <span className="hidden sm:inline">Actualizar</span>
              </button>
              <button
                onClick={exportCSV}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm text-white bg-slate-800 hover:bg-slate-700 transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Exportar CSV</span>
              </button>
            </div>
          </div>

          {/* Stats grid — siempre visible en md+, colapsable en móvil */}
          <div className={`${statsOpen ? 'block' : 'hidden'} md:block mb-4`}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3">
              <StatCard label="Total leads"  value={stats.total}      icon={Users}         color="bg-slate-100 text-slate-600" />
              <StatCard label="Nuevos"       value={stats.nuevo}      icon={TrendingUp}    color="bg-blue-100 text-blue-600" />
              <StatCard label="Contactados"  value={stats.contactado} icon={MessageCircle} color="bg-amber-100 text-amber-600" />
              <StatCard label="Calificados"  value={stats.calificado} icon={UserCheck}     color="bg-emerald-100 text-emerald-600" />
              {/* 5ta tarjeta: ocupa columna entera en 2-col, normal en 3-col y 5-col */}
              <div className="col-span-2 md:col-span-1 bg-white rounded-2xl border border-slate-200 p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-violet-100 text-violet-600">
                  <BarChart2 className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xl font-bold text-slate-800 leading-none">{stats.conversion}%</p>
                  <p className="text-xs text-slate-500 mt-0.5 truncate">Tasa conversión</p>
                </div>
              </div>
            </div>
          </div>

          {/* Search + filters */}
          <div className="flex flex-col gap-2 sm:gap-3">
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  placeholder="Buscar por nombre, email o teléfono…"
                  className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:border-slate-400"
                />
                {search && (
                  <button
                    onClick={() => setSearch('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Estado filter — scrollable horizontal en móvil */}
              <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-0.5 shrink-0">
                <span className="text-xs text-slate-400 font-medium shrink-0 hidden sm:block">Estado:</span>
                {ESTADOS.map(e => (
                  <button
                    key={e}
                    onClick={() => setFilterEstado(e)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all whitespace-nowrap shrink-0 ${
                      filterEstado === e
                        ? 'bg-slate-800 text-white'
                        : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {e}
                  </button>
                ))}
              </div>
            </div>

            {/* Tipo filter — scrollable horizontal en móvil */}
            {tiposUnicos.length > 1 && (
              <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-0.5">
                <Filter className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span className="text-xs text-slate-400 font-medium shrink-0">Seguro:</span>
                {tiposUnicos.map(t => (
                  <button
                    key={t}
                    onClick={() => setFilterTipo(t)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all whitespace-nowrap shrink-0 ${
                      filterTipo === t
                        ? 'bg-violet-700 text-white'
                        : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
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
          <div className="mx-4 sm:mx-6 mt-4 px-4 py-3 bg-red-50 border border-red-200 rounded-xl text-sm text-red-700">
            {error}
          </div>
        )}

        {/* Content */}
        <div className="flex-1 overflow-auto px-4 sm:px-6 py-4">
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <Users className="w-10 h-10 text-slate-300 mb-3" />
              <p className="text-slate-500 font-medium">No hay leads que mostrar</p>
              <p className="text-slate-400 text-sm mt-1">
                {search || filterEstado !== 'Todos'
                  ? 'Prueba con otros filtros'
                  : 'Los leads del formulario aparecerán aquí'}
              </p>
            </div>
          ) : (
            <>
              {/* Mobile: card list (< md) */}
              <div className="md:hidden space-y-3">
                {filtered.map(lead => (
                  <MobileLeadCard
                    key={lead.id}
                    lead={lead}
                    selected={selected?.id === lead.id}
                    onSelect={() => setSelected(lead)}
                    onUpdate={handleUpdate}
                  />
                ))}
              </div>

              {/* Desktop: table (md+) */}
              <div className="hidden md:block bg-white rounded-2xl border border-slate-200 overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-100 bg-slate-50">
                      <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Contacto</th>
                      <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Tipo Seguro</th>
                      <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide hidden lg:table-cell">Canal</th>
                      <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide hidden xl:table-cell">Nivel</th>
                      <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Estado</th>
                      <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide hidden lg:table-cell">Fecha</th>
                      <th className="px-4 py-3" />
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filtered.map(lead => (
                      <tr
                        key={lead.id}
                        className={`hover:bg-slate-50 transition-colors cursor-pointer ${
                          selected?.id === lead.id ? 'bg-slate-50' : ''
                        }`}
                        onClick={() => setSelected(lead)}
                      >
                        {/* Contacto */}
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-semibold text-xs shrink-0">
                              {initials(lead.nombre)}
                            </div>
                            <div>
                              <p className="font-medium text-slate-800 leading-tight">{lead.nombre}</p>
                              <p className="text-xs text-slate-500">{lead.email}</p>
                              {lead.telefono && (
                                <p className="text-xs text-slate-400">{lead.telefono}</p>
                              )}
                            </div>
                          </div>
                        </td>

                        {/* Tipo */}
                        <td className="px-4 py-3 text-slate-600">
                          {lead.tipo_seguro ?? <span className="text-slate-400">—</span>}
                        </td>

                        {/* Canal */}
                        <td className="px-4 py-3 hidden lg:table-cell">
                          <CanalBadge lead={lead} />
                        </td>

                        {/* Nivel */}
                        <td className="px-4 py-3 text-slate-600 hidden xl:table-cell">
                          {lead.nivel_proteccion ?? <span className="text-slate-400">—</span>}
                        </td>

                        {/* Estado — select con altura mínima para touch */}
                        <td className="px-4 py-3" onClick={e => e.stopPropagation()}>
                          <select
                            value={lead.estado}
                            onChange={e => handleUpdate(lead.id, { estado: e.target.value })}
                            className={`text-xs font-medium rounded-full px-2 py-1.5 min-h-[32px] border-0 focus:outline-none cursor-pointer appearance-none ${
                              ESTADO_COLORS[lead.estado] ?? 'bg-slate-100 text-slate-600'
                            }`}
                          >
                            {ESTADOS.filter(e => e !== 'Todos').map(e => (
                              <option key={e} value={e}>{e}</option>
                            ))}
                          </select>
                        </td>

                        {/* Fecha */}
                        <td className="px-4 py-3 hidden lg:table-cell whitespace-nowrap">
                          <p className="text-xs text-slate-500">{fmtDate(lead.created_at)}</p>
                          <p className="text-[10px] text-slate-400">{timeAgo(lead.created_at)}</p>
                        </td>

                        {/* Arrow */}
                        <td className="px-4 py-3">
                          <ChevronRight className="w-4 h-4 text-slate-400" />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Desktop: right panel — w-80 en lg, w-96 en xl+ */}
      {selected && (
        <div className="hidden lg:block lg:w-80 xl:w-96 shrink-0 border-l border-slate-200 overflow-y-auto">
          <DetailPanel
            lead={selected}
            onClose={() => setSelected(null)}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        </div>
      )}

      {/* Mobile: slide-in overlay desde la derecha */}
      {selected && (
        <div className="lg:hidden fixed inset-0 z-40 flex justify-end">
          <div
            className="absolute inset-0 bg-black/50 fade-in-backdrop"
            onClick={() => setSelected(null)}
          />
          <div className="relative w-full max-w-sm bg-white shadow-2xl overflow-y-auto slide-in-right">
            <DetailPanel
              lead={selected}
              onClose={() => setSelected(null)}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          </div>
        </div>
      )}
    </div>
  );
}
