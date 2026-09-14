'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import {
  Search, Trash2, ChevronRight, X, Phone, Mail, MessageCircle,
  Users, TrendingUp, UserCheck, Star, Download, RefreshCw, Calendar, FileText,
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

function initials(nombre: string) {
  return nombre.split(' ').slice(0, 2).map(w => w[0]).join('').toUpperCase();
}

/* ─── Stat Card ─────────────────────────────────────────────────────────── */
function StatCard({ label, value, icon: Icon, color }: {
  label: string; value: number; icon: React.ElementType; color: string;
}) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 flex items-center gap-4">
      <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${color}`}>
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <p className="text-2xl font-bold text-slate-800 leading-none">{value}</p>
        <p className="text-xs text-slate-500 mt-0.5">{label}</p>
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
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600">
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
                className="flex flex-col items-center gap-1 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span className="text-[10px] font-medium text-emerald-700">WhatsApp</span>
              </a>
            )}
            <a
              href={`mailto:${lead.email}`}
              className="flex flex-col items-center gap-1 py-2 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors"
            >
              <Mail className="w-4 h-4 text-blue-600" />
              <span className="text-[10px] font-medium text-blue-700">Email</span>
            </a>
            {lead.telefono && (
              <a
                href={`tel:${lead.telefono}`}
                className="flex flex-col items-center gap-1 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors"
              >
                <Phone className="w-4 h-4 text-slate-600" />
                <span className="text-[10px] font-medium text-slate-700">Llamar</span>
              </a>
            )}
          </div>
        </div>

        {/* Info */}
        <div className="px-5 py-4 space-y-3 border-b border-slate-100 text-sm">
          <Row icon={<Phone className="w-3.5 h-3.5" />} label="Teléfono" value={lead.telefono ?? '—'} />
          <Row icon={<Mail className="w-3.5 h-3.5" />} label="Email" value={lead.email} />
          <Row icon={<Calendar className="w-3.5 h-3.5" />} label="Registrado" value={fmtDate(lead.created_at)} />
          <Row icon={<FileText className="w-3.5 h-3.5" />} label="Tipo de seguro" value={lead.tipo_seguro ?? '—'} />
          <Row icon={<Star className="w-3.5 h-3.5" />} label="Nivel" value={lead.nivel_proteccion ?? '—'} />
        </div>

        {/* Estado */}
        <div className="px-5 py-4 border-b border-slate-100">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Estado</p>
          <div className="flex flex-wrap gap-1.5">
            {ESTADOS.filter(e => e !== 'Todos').map(e => (
              <button
                key={e}
                onClick={() => handleEstado(e)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
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
                  className="flex-1 py-1.5 bg-red-600 text-white text-xs font-semibold rounded-lg hover:bg-red-700"
                >
                  Sí, eliminar
                </button>
                <button
                  onClick={() => setConfirmDelete(false)}
                  className="flex-1 py-1.5 bg-white border border-slate-300 text-slate-600 text-xs font-semibold rounded-lg hover:bg-slate-50"
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

function Row({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-start gap-2">
      <span className="text-slate-400 mt-0.5">{icon}</span>
      <div>
        <span className="text-slate-500 text-xs">{label}: </span>
        <span className="text-slate-700 font-medium">{value}</span>
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
  const stats = useMemo(() => ({
    total:      leads.length,
    nuevo:      leads.filter(l => l.estado === 'Nuevo').length,
    contactado: leads.filter(l => l.estado === 'Contactado').length,
    calificado: leads.filter(l => l.estado === 'Calificado').length,
  }), [leads]);

  /* Filtered list */
  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return leads.filter(l => {
      const matchSearch =
        !q ||
        l.nombre.toLowerCase().includes(q) ||
        l.email.toLowerCase().includes(q) ||
        (l.telefono ?? '').includes(q);
      const matchEstado =
        filterEstado === 'Todos' || l.estado === filterEstado;
      return matchSearch && matchEstado;
    });
  }, [leads, search, filterEstado]);

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
        <div className="px-6 pt-6 pb-4 bg-slate-100 border-b border-slate-200">
          <div className="flex items-center justify-between flex-wrap gap-3 mb-5">
            <div>
              <h1 className="text-xl font-bold text-slate-800">Leads</h1>
              <p className="text-sm text-slate-500 mt-0.5">
                {filtered.length} de {leads.length} contactos
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleRefresh}
                disabled={refreshing}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 transition-colors disabled:opacity-50"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${refreshing ? 'animate-spin' : ''}`} />
                Actualizar
              </button>
              <button
                onClick={exportCSV}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm text-white bg-slate-800 hover:bg-slate-700 transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                Exportar CSV
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
            <StatCard label="Total leads"  value={stats.total}      icon={Users}       color="bg-slate-100 text-slate-600" />
            <StatCard label="Nuevos"       value={stats.nuevo}      icon={TrendingUp}  color="bg-blue-100 text-blue-600" />
            <StatCard label="Contactados"  value={stats.contactado} icon={MessageCircle} color="bg-amber-100 text-amber-600" />
            <StatCard label="Calificados"  value={stats.calificado} icon={UserCheck}   color="bg-emerald-100 text-emerald-600" />
          </div>

          {/* Search + filters */}
          <div className="flex flex-col sm:flex-row gap-3">
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
            <div className="flex gap-1.5 flex-wrap">
              {ESTADOS.map(e => (
                <button
                  key={e}
                  onClick={() => setFilterEstado(e)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all whitespace-nowrap ${
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
        </div>

        {/* Error */}
        {error && (
          <div className="mx-6 mt-4 px-4 py-3 bg-red-50 border border-red-200 rounded-xl text-sm text-red-700">
            {error}
          </div>
        )}

        {/* Table */}
        <div className="flex-1 overflow-auto px-6 py-4">
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
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-100 bg-slate-50">
                    <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Contacto</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide hidden md:table-cell">Tipo Seguro</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide hidden lg:table-cell">Nivel</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Estado</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide hidden sm:table-cell">Fecha</th>
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
                      <td className="px-4 py-3 text-slate-600 hidden md:table-cell">
                        {lead.tipo_seguro ?? <span className="text-slate-400">—</span>}
                      </td>

                      {/* Nivel */}
                      <td className="px-4 py-3 text-slate-600 hidden lg:table-cell">
                        {lead.nivel_proteccion ?? <span className="text-slate-400">—</span>}
                      </td>

                      {/* Estado */}
                      <td className="px-4 py-3" onClick={e => e.stopPropagation()}>
                        <select
                          value={lead.estado}
                          onChange={e => handleUpdate(lead.id, { estado: e.target.value })}
                          className={`text-xs font-medium rounded-full px-2 py-0.5 border-0 focus:outline-none cursor-pointer appearance-none ${
                            ESTADO_COLORS[lead.estado] ?? 'bg-slate-100 text-slate-600'
                          }`}
                        >
                          {ESTADOS.filter(e => e !== 'Todos').map(e => (
                            <option key={e} value={e}>{e}</option>
                          ))}
                        </select>
                      </td>

                      {/* Fecha */}
                      <td className="px-4 py-3 text-slate-500 text-xs hidden sm:table-cell whitespace-nowrap">
                        {fmtDate(lead.created_at)}
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
          )}
        </div>
      </div>

      {/* Desktop: right panel */}
      {selected && (
        <div className="hidden lg:block w-80 shrink-0 border-l border-slate-200 overflow-y-auto">
          <DetailPanel
            lead={selected}
            onClose={() => setSelected(null)}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        </div>
      )}

      {/* Mobile: full-screen overlay */}
      {selected && (
        <div className="lg:hidden fixed inset-0 z-40 flex justify-end">
          <div className="absolute inset-0 bg-black/50" onClick={() => setSelected(null)} />
          <div className="relative w-full max-w-sm bg-white shadow-2xl overflow-y-auto">
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
