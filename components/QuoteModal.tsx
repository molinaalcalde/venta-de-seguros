'use client';

import { useState, useEffect } from 'react';
import {
  X, ChevronLeft, Check, Car, Heart, Shield, Briefcase,
  PawPrint, Loader2, MapPin, Activity, Building2,
} from 'lucide-react';

/* ─── Types ─────────────────────────────────────────────────────────────── */
export type InsType = 'Auto' | 'Mascotas' | 'Vida' | 'Salud' | 'Comercial' | 'Umbrella';

const TIPO_LABEL: Record<InsType, string> = {
  Auto:      'Seguro de Auto',
  Mascotas:  'Seguro de Mascotas',
  Vida:      'Seguro de Vida',
  Salud:     'Seguro de Salud',
  Comercial: 'Seguro Comercial',
  Umbrella:  'Seguro Umbrella',
};

interface QuoteData {
  tipo_seguro: InsType | '';
  zip_code: string;
  estado_us: string;
  ciudad: string;
  detalles: Record<string, string>;
  timeline: string;
  tiene_seguro: string;
  nombre: string;
  email: string;
  telefono: string;
}

/* ─── Config ─────────────────────────────────────────────────────────────── */
const INSURANCE_OPTIONS: {
  id: InsType; label: string; price: string; icon: React.ElementType; color: string;
}[] = [
  { id: 'Auto',      label: 'Seguro de Auto',     price: 'Desde $89/mes',  icon: Car,       color: 'text-blue-600 bg-blue-50' },
  { id: 'Mascotas',  label: 'Mascotas',            price: 'Desde $29/mes',  icon: PawPrint,  color: 'text-amber-600 bg-amber-50' },
  { id: 'Vida',      label: 'Seguro de Vida',      price: 'Desde $45/mes',  icon: Heart,     color: 'text-rose-600 bg-rose-50' },
  { id: 'Salud',     label: 'Seguro de Salud',     price: 'Desde $199/mes', icon: Activity,  color: 'text-emerald-600 bg-emerald-50' },
  { id: 'Comercial', label: 'Seguro Comercial',    price: 'Desde $120/mes', icon: Building2, color: 'text-purple-600 bg-purple-50' },
  { id: 'Umbrella',  label: 'Protección Extra',     price: 'Desde $19/mes',  icon: Shield,    color: 'text-slate-600 bg-slate-100' },
];

const ADAPTIVE: Record<InsType, {
  q1: string; opts1: string[]; key1: string;
  q2: string; opts2: string[]; key2: string;
}> = {
  Auto: {
    q1: '¿Qué tipo de vehículo tienes?', key1: 'vehiculo_tipo',
    opts1: ['🚗 Auto / Sedán', '🛻 Camioneta / Pickup', '🚙 SUV / Minivan', '⚡ Eléctrico / EV', '🏍️ Motocicleta'],
    q2: '¿Cuántos años llevas sin accidentes?', key2: 'anios_sin_accidente',
    opts2: ['Menos de 1 año', '1 a 3 años', '3 a 5 años', 'Más de 5 años ✓'],
  },
  Mascotas: {
    q1: '¿Qué tipo de mascota tienes?', key1: 'mascota_tipo',
    opts1: ['🐕 Perro', '🐈 Gato', '🐾 Otra mascota'],
    q2: '¿Cuántos años tiene tu mascota?', key2: 'mascota_edad',
    opts2: ['🐣 Cachorro (menos de 1 año)', '🐩 Joven (1 a 5 años)', '🐕 Adulto (5 a 10 años)', '🦮 Senior (más de 10 años)'],
  },
  Vida: {
    q1: '¿En qué rango de edad estás?', key1: 'edad_rango',
    opts1: ['18 – 30 años', '31 – 45 años', '46 – 55 años', '56 – 65 años', '65+ años'],
    q2: '¿Cuál es tu situación familiar?', key2: 'situacion_familiar',
    opts2: ['👤 Soltero/a', '👫 En pareja, sin hijos', '👨‍👩‍👧 Con hijos', '👴 Cuido a mis padres'],
  },
  Salud: {
    q1: '¿Qué tipo de plan necesitas?', key1: 'plan_tipo',
    opts1: ['👤 Solo para mí', '👨‍👩‍👧 Para mi familia', '🏢 Para mis empleados', '🏥 Medicare (65+)'],
    q2: '¿Cuántas personas cubre el plan?', key2: 'plan_miembros',
    opts2: ['Solo yo', '2 personas', '3 a 4 personas', '5 o más'],
  },
  Comercial: {
    q1: '¿Qué tipo de negocio tienes?', key1: 'negocio_tipo',
    opts1: ['🍽️ Restaurante / Food', '🔨 Construcción / Trades', '🛍️ Retail / Tienda', '💼 Servicios / Oficina', '📦 Otro'],
    q2: '¿Cuántos empleados tienes?', key2: 'negocio_empleados',
    opts2: ['Solo yo (self-employed)', '1 a 5 empleados', '6 a 20 empleados', 'Más de 20'],
  },
  Umbrella: {
    q1: '¿Qué seguros tienes actualmente?', key1: 'coberturas_actuales',
    opts1: ['🚗 Seguro de auto', '🏠 Seguro de hogar / renters', '✅ Auto y hogar', '❌ Ninguno todavía'],
    q2: '¿Qué quieres proteger con el Umbrella?', key2: 'patrimonio',
    opts2: ['💰 Mis ahorros', '🏠 Mi casa / propiedad', '🏢 Mi negocio', '🛡️ Todo lo anterior'],
  },
};

const TIMELINE = [
  { label: '⚡ Hoy mismo', value: 'Hoy mismo', score: 3 },
  { label: '📅 Esta semana', value: 'Esta semana', score: 2 },
  { label: '🗓️ Este mes', value: 'Este mes', score: 1 },
  { label: '🔍 Solo explorando', value: 'Solo explorando', score: -1 },
];

const TIENE_SEGURO = [
  { label: '✅ Sí, tengo seguro actualmente', value: 'Sí', score: 1 },
  { label: '❌ No, nunca he tenido', value: 'No', score: 0 },
  { label: '⏰ Tuve pero ya venció', value: 'Venció', score: 0 },
];

const INITIAL: QuoteData = {
  tipo_seguro: '', zip_code: '', estado_us: '', ciudad: '',
  detalles: {}, timeline: '', tiene_seguro: '',
  nombre: '', email: '', telefono: '',
};

function calcScore(d: QuoteData): number {
  let s = 0;
  s += TIMELINE.find(t => t.value === d.timeline)?.score ?? 0;
  s += TIENE_SEGURO.find(t => t.value === d.tiene_seguro)?.score ?? 0;
  if (['Vida', 'Salud', 'Comercial'].includes(d.tipo_seguro)) s += 2; else s += 1;
  if (d.telefono.replace(/\D/g, '').length >= 10) s += 2;
  const sit = d.detalles.situacion_familiar ?? '';
  if (sit.includes('hijos') || sit.includes('padres')) s += 1;
  return Math.max(0, s);
}

/* ─── Small Components ───────────────────────────────────────────────────── */
function Dot({ active, done }: { active: boolean; done: boolean }) {
  return (
    <div className={`rounded-full transition-all duration-300 ${
      done ? 'w-2 h-2 bg-slate-800' :
      active ? 'w-5 h-2 bg-slate-800' : 'w-2 h-2 bg-slate-300'
    }`} />
  );
}

function Chip({
  label, selected, onClick,
}: { label: string; selected: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full text-left px-4 py-3 rounded-2xl border-2 text-sm font-medium transition-all leading-snug ${
        selected
          ? 'border-slate-800 bg-slate-800 text-white'
          : 'border-slate-200 bg-white text-slate-700 hover:border-slate-400 hover:bg-slate-50'
      }`}
    >
      {label}
    </button>
  );
}

/* ─── Main Component ─────────────────────────────────────────────────────── */
export interface QuoteModalProps {
  open: boolean;
  onClose: () => void;
  initialType?: InsType;
}

const STEPS = 5;

export default function QuoteModal({ open, onClose, initialType }: QuoteModalProps) {
  const [step, setStep]       = useState(0);
  const [data, setData]       = useState<QuoteData>(INITIAL);
  const [visible, setVisible] = useState(true);
  const [zipLoading, setZipLoading] = useState(false);
  const [zipMsg, setZipMsg]   = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitErr, setSubmitErr]   = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (open) {
      setStep(0);
      setData({ ...INITIAL, tipo_seguro: initialType ?? '' });
      setVisible(true);
      setSuccess(false);
      setSubmitErr('');
      setZipMsg('');
    }
  }, [open, initialType]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  async function fade(fn: () => void) {
    setVisible(false);
    await new Promise(r => setTimeout(r, 160));
    fn();
    setVisible(true);
  }

  const next = () => fade(() => setStep(s => s + 1));
  const back = () => fade(() => setStep(s => s - 1));

  function set<K extends keyof QuoteData>(k: K, v: QuoteData[K]) {
    setData(d => ({ ...d, [k]: v }));
  }

  function setDetail(k: string, v: string) {
    setData(d => ({ ...d, detalles: { ...d.detalles, [k]: v } }));
  }

  async function lookupZip(zip: string) {
    setZipLoading(true);
    setZipMsg('');
    try {
      const r = await fetch(`https://api.zippopotam.us/us/${zip}`);
      if (!r.ok) throw new Error();
      const j = await r.json();
      const p = j.places?.[0];
      if (p) {
        setData(d => ({ ...d, estado_us: p['state'], ciudad: p['place name'] }));
        setZipMsg(`✓ ${p['place name']}, ${p['state abbreviation']}`);
      }
    } catch {
      setZipMsg('ZIP no reconocido — puedes continuar igual.');
    } finally {
      setZipLoading(false);
    }
  }

  async function submit() {
    setSubmitting(true);
    setSubmitErr('');
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre: data.nombre,
          email: data.email,
          telefono: data.telefono,
          tipo_seguro: data.tipo_seguro ? TIPO_LABEL[data.tipo_seguro as InsType] : '',
          zip_code: data.zip_code,
          estado_us: data.estado_us,
          ciudad: data.ciudad,
          timeline: data.timeline,
          tiene_seguro: data.tiene_seguro,
          lead_score: calcScore(data),
          detalles: data.detalles,
          nivel_proteccion: '',
        }),
      });
      if (!res.ok) {
        const d = await res.json();
        setSubmitErr(d.error ?? 'Error al enviar. Intenta de nuevo.');
        return;
      }
      await fade(() => setSuccess(true));
    } catch {
      setSubmitErr('Error de conexión. Intenta de nuevo.');
    } finally {
      setSubmitting(false);
    }
  }

  const aq = data.tipo_seguro ? ADAPTIVE[data.tipo_seguro as InsType] : null;

  const canNext = (() => {
    if (step === 0) return !!data.tipo_seguro;
    if (step === 1) return data.zip_code.length === 5;
    if (step === 2) return !!aq && !!data.detalles[aq.key1] && !!data.detalles[aq.key2];
    if (step === 3) return !!data.timeline && !!data.tiene_seguro;
    if (step === 4) return !!data.nombre.trim() && !!data.email.trim();
    return false;
  })();

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      {/* Card */}
      <div className="relative bg-white w-full sm:max-w-lg rounded-t-3xl sm:rounded-3xl shadow-2xl max-h-[93vh] flex flex-col">

        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 shrink-0">
          <div className="flex items-center gap-3">
            {step > 0 && !success && (
              <button
                onClick={back}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
            )}
            {!success && (
              <div className="flex items-center gap-1.5">
                {Array.from({ length: STEPS }).map((_, i) => (
                  <Dot key={i} active={i === step} done={i < step} />
                ))}
              </div>
            )}
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable body */}
        <div
          className="flex-1 overflow-y-auto px-6 py-6 transition-all duration-200"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(10px)' }}
        >
          {/* ── Success ─────────────────────────────────────────────── */}
          {success && (
            <div className="text-center py-4">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-5">
                <Check className="w-8 h-8 text-emerald-600" strokeWidth={2.5} />
              </div>
              <h2 className="text-2xl font-bold text-slate-800 mb-2">
                ¡Listo, {data.nombre.split(' ')[0]}!
              </h2>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                Recibimos tu solicitud de <strong>{data.tipo_seguro ? TIPO_LABEL[data.tipo_seguro as InsType] : 'seguro'}</strong>.
                Un asesor bilingüe te contactará al{' '}
                <strong>{data.telefono || data.email}</strong>{' '}
                en los próximos <strong>15 minutos</strong>.
              </p>
              <div className="bg-slate-50 rounded-2xl p-4 text-left text-xs text-slate-500 mb-6 space-y-1.5">
                <p className="font-semibold text-slate-700 text-sm mb-2">¿Qué sigue?</p>
                <p>✅ Revisamos tu perfil y opciones en {data.estado_us || 'tu estado'}</p>
                <p>✅ Te presentamos 2–3 opciones sin presión</p>
                <p>✅ Tú decides cuándo y si contratar</p>
              </div>
              <button
                onClick={onClose}
                className="w-full py-3.5 bg-slate-800 text-white text-sm font-semibold rounded-2xl hover:bg-slate-700 transition-colors"
              >
                Cerrar
              </button>
            </div>
          )}

          {/* ── Step 0: Type ─────────────────────────────────────────── */}
          {!success && step === 0 && (
            <>
              <h2 className="text-xl font-bold text-slate-800 mb-1">¿Qué quieres proteger?</h2>
              <p className="text-slate-500 text-sm mb-5">Elige el tipo de seguro y te guiamos paso a paso.</p>
              <div className="grid grid-cols-2 gap-3">
                {INSURANCE_OPTIONS.map(opt => {
                  const Icon = opt.icon;
                  const sel = data.tipo_seguro === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => set('tipo_seguro', opt.id)}
                      className={`flex flex-col items-start gap-2.5 p-4 rounded-2xl border-2 text-left transition-all ${
                        sel
                          ? 'border-slate-800 bg-slate-800 text-white'
                          : 'border-slate-200 bg-white hover:border-slate-400 text-slate-700'
                      }`}
                    >
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                        sel ? 'bg-white/20' : opt.color
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold leading-tight">{opt.label}</p>
                        <p className={`text-xs mt-0.5 ${sel ? 'text-white/70' : 'text-slate-400'}`}>{opt.price}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </>
          )}

          {/* ── Step 1: ZIP ──────────────────────────────────────────── */}
          {!success && step === 1 && (
            <>
              <h2 className="text-xl font-bold text-slate-800 mb-1">¿Cuál es tu código postal?</h2>
              <p className="text-slate-500 text-sm mb-5">
                El precio varía por estado. No pedimos dirección exacta.
              </p>
              <div className="relative mb-3">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                {zipLoading && (
                  <Loader2 className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 animate-spin" />
                )}
                <input
                  type="text"
                  inputMode="numeric"
                  maxLength={5}
                  autoComplete="postal-code"
                  placeholder="ej. 90210"
                  value={data.zip_code}
                  onChange={e => {
                    const v = e.target.value.replace(/\D/g, '').slice(0, 5);
                    set('zip_code', v);
                    setData(d => ({ ...d, estado_us: '', ciudad: '' }));
                    setZipMsg('');
                    if (v.length === 5) lookupZip(v);
                  }}
                  className="w-full pl-10 pr-10 py-4 text-xl font-semibold border-2 border-slate-200 rounded-2xl focus:outline-none focus:border-slate-700 tracking-widest transition-colors"
                />
              </div>
              {zipMsg && (
                <div className={`text-sm px-3 py-2 rounded-xl mb-3 ${
                  zipMsg.startsWith('✓')
                    ? 'text-emerald-700 bg-emerald-50 border border-emerald-200'
                    : 'text-amber-700 bg-amber-50 border border-amber-200'
                }`}>
                  {zipMsg}
                </div>
              )}
              <p className="text-xs text-slate-400">
                🔒 Tu ubicación es privada — solo la usamos para encontrar tarifas disponibles en tu área.
              </p>
            </>
          )}

          {/* ── Step 2: Adaptive ─────────────────────────────────────── */}
          {!success && step === 2 && aq && (
            <>
              <h2 className="text-xl font-bold text-slate-800 mb-5">Cuéntame un poco más</h2>

              <p className="text-sm font-semibold text-slate-700 mb-2.5">{aq.q1}</p>
              <div className="space-y-2 mb-6">
                {aq.opts1.map(o => (
                  <Chip key={o} label={o} selected={data.detalles[aq.key1] === o} onClick={() => setDetail(aq.key1, o)} />
                ))}
              </div>

              <p className="text-sm font-semibold text-slate-700 mb-2.5">{aq.q2}</p>
              <div className="space-y-2">
                {aq.opts2.map(o => (
                  <Chip key={o} label={o} selected={data.detalles[aq.key2] === o} onClick={() => setDetail(aq.key2, o)} />
                ))}
              </div>
            </>
          )}

          {/* ── Step 3: Intent ───────────────────────────────────────── */}
          {!success && step === 3 && (
            <>
              <h2 className="text-xl font-bold text-slate-800 mb-5">Una última pregunta…</h2>

              <p className="text-sm font-semibold text-slate-700 mb-2.5">¿Cuándo necesitas la cobertura?</p>
              <div className="space-y-2 mb-6">
                {TIMELINE.map(o => (
                  <Chip key={o.value} label={o.label} selected={data.timeline === o.value} onClick={() => set('timeline', o.value)} />
                ))}
              </div>

              <p className="text-sm font-semibold text-slate-700 mb-2.5">¿Tienes seguro actualmente?</p>
              <div className="space-y-2">
                {TIENE_SEGURO.map(o => (
                  <Chip key={o.value} label={o.label} selected={data.tiene_seguro === o.value} onClick={() => set('tiene_seguro', o.value)} />
                ))}
              </div>
            </>
          )}

          {/* ── Step 4: Contact ──────────────────────────────────────── */}
          {!success && step === 4 && (
            <>
              <h2 className="text-xl font-bold text-slate-800 mb-1">¿Cómo te contactamos?</h2>
              <p className="text-slate-500 text-sm mb-5">
                Un asesor bilingüe te llama en 15 minutos con tu cotización.
              </p>

              <div className="space-y-3 mb-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1.5">Tu nombre *</label>
                  <input
                    type="text"
                    autoComplete="name"
                    placeholder="María García"
                    value={data.nombre}
                    onChange={e => set('nombre', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-2xl text-sm focus:outline-none focus:border-slate-700 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1.5">Email *</label>
                  <input
                    type="email"
                    autoComplete="email"
                    placeholder="maria@email.com"
                    value={data.email}
                    onChange={e => set('email', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-2xl text-sm focus:outline-none focus:border-slate-700 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1.5">
                    Teléfono <span className="text-slate-400 font-normal">(para llamarte más rápido)</span>
                  </label>
                  <input
                    type="tel"
                    autoComplete="tel"
                    placeholder="(555) 555-5555"
                    value={data.telefono}
                    onChange={e => set('telefono', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-2xl text-sm focus:outline-none focus:border-slate-700 transition-colors"
                  />
                </div>
              </div>

              {submitErr && (
                <p className="text-xs text-red-600 bg-red-50 border border-red-200 rounded-xl px-3 py-2 mb-3">
                  {submitErr}
                </p>
              )}

              <p className="text-xs text-slate-400 leading-relaxed">
                🔒 Tu información es 100% privada. No la compartimos con el gobierno ni agencias de inmigración.
                Sin importar tu situación, tienes opciones. <strong>Aceptamos ITIN.</strong>
              </p>
            </>
          )}
        </div>

        {/* Footer CTA */}
        {!success && (
          <div className="px-6 py-4 border-t border-slate-100 shrink-0 bg-white rounded-b-3xl">
            {step < 4 ? (
              <button
                onClick={next}
                disabled={!canNext}
                className="w-full py-3.5 bg-slate-800 text-white font-semibold text-sm rounded-2xl hover:bg-slate-700 transition-all active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                {step === 0
                  ? `Cotizar ${data.tipo_seguro ? TIPO_LABEL[data.tipo_seguro as InsType] : 'mi seguro'} →`
                  : step === 3
                  ? 'Casi listo →'
                  : 'Continuar →'}
              </button>
            ) : (
              <button
                onClick={submit}
                disabled={!canNext || submitting}
                className="w-full py-3.5 bg-slate-800 text-white font-semibold text-sm rounded-2xl hover:bg-slate-700 transition-all active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {submitting
                  ? <><Loader2 className="w-4 h-4 animate-spin" /> Enviando…</>
                  : 'Ver mi cotización →'}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
