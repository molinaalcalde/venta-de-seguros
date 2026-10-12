'use client';

import { useState, useRef, useEffect, useCallback, type ComponentType } from 'react';
import { pushGTMEvent } from '@/lib/gtm';
import {
  X, CaretLeft, Check, CircleNotch, Car, Truck, PawPrint, Heart,
  Stethoscope, Tooth, Package, Buildings, Umbrella, MapPin,
  Calendar, CreditCard, Headset, EnvelopeSimple,
  Van, Bus, Wrench, Hammer, Motorcycle, Lightning,
  Dog, Cat, User, UsersThree, FirstAidKit, Storefront, Briefcase,
  House, ShieldCheck, Broom, Leaf, ForkKnife, CookingPot,
  TruckTrailer, Crane, FireTruck, Jeep,
  Handshake,
} from '@phosphor-icons/react';

/* ─── Types ─────────────────────────────────────────────────────────────── */
export type InsType =
  | 'Auto' | 'AutoComercial' | 'Mascotas' | 'Vida'
  | 'Salud' | 'Comercial' | 'Umbrella' | 'Dental' | 'Paquete';

export type QuotePath = 'asesor' | 'instantanea';

export const TIPO_LABEL: Record<InsType, string> = {
  Auto:          'Seguro de Auto',
  AutoComercial: 'Auto Comercial',
  Mascotas:      'Seguro de Mascotas',
  Vida:          'Seguro de Vida',
  Salud:         'Seguro de Salud',
  Comercial:     'Seguro Comercial',
  Umbrella:      'Protección Extra',
  Dental:        'Seguro Dental',
  Paquete:       'Paquete Casa + Auto',
};

interface QuoteData {
  tipo_seguro: InsType | '';
  quote_path: QuotePath | '';
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
type PhosphorIcon = ComponentType<{ weight?: 'thin'|'light'|'regular'|'bold'|'fill'|'duotone'; className?: string; size?: number }>;

const INSURANCE_OPTIONS: {
  id: InsType; label: string; sublabel: string; price: string;
  icon: PhosphorIcon; iconBg: string; iconColor: string; selBg: string; selText: string;
}[] = [
  { id: 'Auto',          label: 'Auto Personal',    sublabel: 'Para tu vehículo',           price: 'Desde $89/mes',  icon: Car as PhosphorIcon,         iconBg: 'bg-blue-100',    iconColor: 'text-blue-600',    selBg: 'bg-blue-600',    selText: 'text-white' },
  { id: 'AutoComercial', label: 'Auto Comercial',   sublabel: 'Vans · camiones · flotas',   price: 'Desde $110/mes', icon: Truck as PhosphorIcon,       iconBg: 'bg-orange-100',  iconColor: 'text-orange-600',  selBg: 'bg-orange-500',  selText: 'text-white' },
  { id: 'Mascotas',      label: 'Mascotas',         sublabel: 'VetDirect™',                 price: 'Desde $29/mes',  icon: PawPrint as PhosphorIcon,    iconBg: 'bg-amber-100',   iconColor: 'text-amber-600',   selBg: 'bg-amber-500',   selText: 'text-white' },
  { id: 'Vida',          label: 'Seguro de Vida',   sublabel: 'Protege a tu familia',       price: 'Desde $45/mes',  icon: Heart as PhosphorIcon,       iconBg: 'bg-rose-100',    iconColor: 'text-rose-600',    selBg: 'bg-rose-500',    selText: 'text-white' },
  { id: 'Salud',         label: 'Seguro de Salud',  sublabel: 'Individual o familiar',      price: 'Desde $199/mes', icon: Stethoscope as PhosphorIcon, iconBg: 'bg-emerald-100', iconColor: 'text-emerald-600', selBg: 'bg-emerald-600', selText: 'text-white' },
  { id: 'Dental',        label: 'Seguro Dental',    sublabel: 'Sonríe sin preocuparte',     price: 'Desde $19/mes',  icon: Tooth as PhosphorIcon,       iconBg: 'bg-cyan-100',    iconColor: 'text-cyan-600',    selBg: 'bg-cyan-600',    selText: 'text-white' },
  { id: 'Paquete',       label: 'Casa + Auto',      sublabel: 'Paquete: ahorra hasta 25%', price: 'Bundle',         icon: Package as PhosphorIcon,     iconBg: 'bg-violet-100',  iconColor: 'text-violet-600',  selBg: 'bg-violet-600',  selText: 'text-white' },
  { id: 'Comercial',     label: 'Seguro Comercial', sublabel: 'Protege tu negocio',         price: 'Desde $120/mes', icon: Buildings as PhosphorIcon,   iconBg: 'bg-purple-100',  iconColor: 'text-purple-600',  selBg: 'bg-purple-600',  selText: 'text-white' },
  { id: 'Umbrella',      label: 'Protección Extra', sublabel: 'Cobertura adicional',        price: 'Desde $19/mes',  icon: Umbrella as PhosphorIcon,    iconBg: 'bg-slate-100',   iconColor: 'text-slate-600',   selBg: 'bg-slate-700',   selText: 'text-white' },
];

type OptItem = { label: string; icon?: ComponentType<{ className?: string; weight?: string }> };
type AdaptiveConfig = { q1: string; opts1: OptItem[]; key1: string; q2: string; opts2: OptItem[]; key2: string };

const ADAPTIVE: Record<InsType, AdaptiveConfig> = {
  Auto: {
    q1: '¿Qué tipo de vehículo tienes?', key1: 'vehiculo_tipo',
    opts1: [
      { label: 'Auto / Sedán', icon: Car },
      { label: 'Camioneta / Pickup', icon: Jeep },
      { label: 'SUV / Minivan', icon: Truck },
      { label: 'Eléctrico / EV', icon: Lightning },
      { label: 'Motocicleta', icon: Motorcycle },
    ],
    q2: '¿Cuántos años llevas sin accidentes?', key2: 'anios_sin_accidente',
    opts2: [
      { label: 'Menos de 1 año' },
      { label: '1 a 3 años' },
      { label: '3 a 5 años' },
      { label: 'Más de 5 años', icon: ShieldCheck },
    ],
  },
  AutoComercial: {
    q1: '¿Qué tipo de vehículo comercial tienes?', key1: 'vehiculo_comercial_tipo',
    opts1: [
      { label: 'Pick-up de trabajo', icon: Jeep },
      { label: 'Van de carga / Cargo van', icon: Van },
      { label: 'Camión de caja / Box truck', icon: Truck },
      { label: 'Camión de volteo / Dump truck', icon: Crane },
      { label: 'Plataforma / Flatbed', icon: TruckTrailer },
      { label: 'Food truck', icon: CookingPot },
      { label: 'Grúa / Tow truck', icon: FireTruck },
      { label: 'Bus / Shuttle', icon: Bus },
      { label: 'Semi / Tractor-trailer', icon: TruckTrailer },
    ],
    q2: '¿Para qué usas el vehículo?', key2: 'uso_comercial',
    opts2: [
      { label: 'Construcción / Contratista', icon: Hammer },
      { label: 'Landscaping / Jardinería', icon: Leaf },
      { label: 'Delivery / Entregas', icon: Package },
      { label: 'Mudanzas', icon: Truck },
      { label: 'Plomería / Electricidad / HVAC', icon: Wrench },
      { label: 'Food / Catering', icon: ForkKnife },
      { label: 'Transporte de personas', icon: Bus },
      { label: 'Limpieza / Servicios', icon: Broom },
    ],
  },
  Mascotas: {
    q1: '¿Qué tipo de mascota tienes?', key1: 'mascota_tipo',
    opts1: [
      { label: 'Perro', icon: Dog },
      { label: 'Gato', icon: Cat },
      { label: 'Otra mascota', icon: PawPrint },
    ],
    q2: '¿Cuál es la raza de tu mascota?', key2: 'mascota_raza',
    opts2: [
      { label: 'Mestizo / Sin raza pura', icon: Dog },
      { label: 'Labrador Retriever' },
      { label: 'Golden Retriever' },
      { label: 'French Bulldog' },
      { label: 'Poodle / Caniche' },
      { label: 'Chihuahua' },
      { label: 'Pastor Alemán' },
      { label: 'Gato doméstico', icon: Cat },
      { label: 'Otra raza', icon: PawPrint },
    ],
  },
  Vida: {
    q1: '¿En qué rango de edad estás?', key1: 'edad_rango',
    opts1: [
      { label: '18 – 30 años' },
      { label: '31 – 45 años' },
      { label: '46 – 55 años' },
      { label: '56 – 65 años' },
      { label: '65+ años' },
    ],
    q2: '¿Cuál es tu situación familiar?', key2: 'situacion_familiar',
    opts2: [
      { label: 'Soltero/a', icon: User },
      { label: 'En pareja, sin hijos', icon: Handshake },
      { label: 'Con hijos', icon: UsersThree },
      { label: 'Cuido a mis padres', icon: Heart },
    ],
  },
  Salud: {
    q1: '¿Qué tipo de plan necesitas?', key1: 'plan_tipo',
    opts1: [
      { label: 'Solo para mí', icon: User },
      { label: 'Para mi familia', icon: UsersThree },
      { label: 'Para mis empleados', icon: Buildings },
      { label: 'Medicare (65+)', icon: FirstAidKit },
    ],
    q2: '¿Cuántas personas cubre el plan?', key2: 'plan_miembros',
    opts2: [
      { label: 'Solo yo' },
      { label: '2 personas' },
      { label: '3 a 4 personas' },
      { label: '5 o más' },
    ],
  },
  Dental: {
    q1: '¿Para quién es el seguro dental?', key1: 'dental_cobertura',
    opts1: [
      { label: 'Solo para mí', icon: User },
      { label: 'Para mí y mi pareja', icon: Handshake },
      { label: 'Para mi familia completa', icon: UsersThree },
      { label: 'Para un mayor de 65', icon: Heart },
    ],
    q2: '¿Cuándo fue tu última visita al dentista?', key2: 'ultima_visita_dentista',
    opts2: [
      { label: 'En los últimos 6 meses' },
      { label: 'Hace 1 año' },
      { label: 'Hace más de 2 años' },
      { label: 'Nunca / No recuerdo' },
    ],
  },
  Comercial: {
    q1: '¿Qué tipo de negocio tienes?', key1: 'negocio_tipo',
    opts1: [
      { label: 'Restaurante / Food', icon: ForkKnife },
      { label: 'Construcción / Trades', icon: Hammer },
      { label: 'Retail / Tienda', icon: Storefront },
      { label: 'Servicios / Oficina', icon: Briefcase },
      { label: 'Otro', icon: Package },
    ],
    q2: '¿Cuántos empleados tienes?', key2: 'negocio_empleados',
    opts2: [
      { label: 'Solo yo (self-employed)' },
      { label: '1 a 5 empleados' },
      { label: '6 a 20 empleados' },
      { label: 'Más de 20' },
    ],
  },
  Umbrella: {
    q1: '¿Qué seguros tienes actualmente?', key1: 'coberturas_actuales',
    opts1: [
      { label: 'Seguro de auto', icon: Car },
      { label: 'Seguro de hogar', icon: House },
      { label: 'Auto y hogar', icon: ShieldCheck },
      { label: 'Ninguno todavía' },
    ],
    q2: '¿Qué quieres proteger con el Umbrella?', key2: 'patrimonio',
    opts2: [
      { label: 'Mis ahorros', icon: ShieldCheck },
      { label: 'Mi casa / propiedad', icon: House },
      { label: 'Mi negocio', icon: Buildings },
      { label: 'Todo lo anterior', icon: Umbrella },
    ],
  },
  Paquete: {
    q1: '¿Qué tipo de propiedad tienes?', key1: 'tipo_propiedad',
    opts1: [
      { label: 'Casa propia', icon: House },
      { label: 'Condominio / Condo', icon: Buildings },
      { label: 'Townhouse', icon: House },
      { label: 'Casa en renta (renters)', icon: House },
    ],
    q2: '¿Cuántos vehículos quieres asegurar?', key2: 'num_vehiculos_paquete',
    opts2: [
      { label: '1 vehículo' },
      { label: '2 vehículos' },
      { label: '3 o más vehículos' },
    ],
  },
};

type ExtraField =
  | { type: 'vin';     key: string; label: string; required: boolean }
  | { type: 'date';    key: string; label: string; required: boolean }
  | { type: 'chips';   key: string; label: string; options: string[]; required: boolean }
  | { type: 'address'; key: string; label: string; required: boolean };

const PATH_B_FIELDS: Partial<Record<InsType, ExtraField[]>> = {
  Mascotas: [
    { type: 'chips', key: 'mascota_edad', label: '¿Cuántos años tiene tu mascota?', required: true,
      options: ['Cachorro (menos de 1 año)', 'Joven (1–5 años)', 'Adulto (5–10 años)', 'Senior (más de 10 años)'] },
  ],
  Auto: [
    { type: 'vin',     key: 'vin',             label: 'Número VIN del vehículo',              required: true },
    { type: 'date',    key: 'fecha_nacimiento', label: 'Tu fecha de nacimiento',               required: true },
    { type: 'chips',   key: 'estado_civil',     label: 'Estado civil', required: true,
      options: ['Soltero/a', 'Casado/a', 'Divorciado/a', 'Viudo/a', 'Unión libre'] },
    { type: 'address', key: 'direccion',        label: 'Dirección donde resides (para tarifa)', required: true },
  ],
  AutoComercial: [
    { type: 'vin',     key: 'vin',               label: 'VIN del vehículo principal',          required: true },
    { type: 'date',    key: 'fecha_nacimiento',   label: 'Fecha de nacimiento del conductor principal', required: true },
    { type: 'address', key: 'direccion_negocio',  label: 'Dirección del negocio',              required: true },
  ],
  Vida: [
    { type: 'date',  key: 'fecha_nacimiento', label: 'Tu fecha de nacimiento',               required: true },
    { type: 'chips', key: 'estado_civil',     label: 'Estado civil', required: true,
      options: ['Soltero/a', 'Casado/a', 'Divorciado/a', 'Viudo/a', 'Unión libre'] },
    { type: 'chips', key: 'fumador',          label: '¿Eres fumador actualmente?', required: true,
      options: ['No fumo', 'Dejé de fumar', 'Fumo ocasionalmente', 'Fumo diario'] },
  ],
  Salud: [
    { type: 'date',  key: 'fecha_nacimiento', label: 'Tu fecha de nacimiento',               required: true },
    { type: 'chips', key: 'estado_civil',     label: 'Estado civil', required: true,
      options: ['Soltero/a', 'Casado/a', 'Divorciado/a', 'Viudo/a', 'Unión libre'] },
  ],
  Dental: [
    { type: 'chips', key: 'dental_miembros', label: '¿Cuántas personas se cubrirán?', required: true,
      options: ['Solo yo (1)', 'Yo + pareja (2)', 'Familia pequeña (3–4)', 'Familia grande (5+)'] },
    { type: 'chips', key: 'tiene_dentista',  label: '¿Tienes dentista de cabecera?', required: true,
      options: ['Sí, tengo uno en mente', 'No, necesito que me recomienden'] },
  ],
  Paquete: [
    { type: 'address', key: 'direccion_propiedad', label: 'Dirección de la propiedad',        required: true },
    { type: 'vin',     key: 'vin',                 label: 'VIN del vehículo (opcional)',       required: false },
    { type: 'date',    key: 'fecha_nacimiento',    label: 'Tu fecha de nacimiento',            required: true },
    { type: 'chips',   key: 'estado_civil',        label: 'Estado civil', required: true,
      options: ['Soltero/a', 'Casado/a', 'Divorciado/a', 'Viudo/a', 'Unión libre'] },
  ],
};

const TIMELINE = [
  { label: 'Hoy mismo',       value: 'Hoy mismo',       score: 3, icon: Lightning },
  { label: 'Esta semana',     value: 'Esta semana',     score: 2, icon: Calendar },
  { label: 'Este mes',        value: 'Este mes',        score: 1, icon: Calendar },
  { label: 'Solo explorando', value: 'Solo explorando', score: -1 },
];

const TIENE_SEGURO = [
  { label: 'Sí, tengo seguro actualmente', value: 'Sí',     score: 1, icon: ShieldCheck },
  { label: 'No, nunca he tenido',           value: 'No',     score: 0 },
  { label: 'Tuve pero ya venció',           value: 'Venció', score: 0 },
];

const INITIAL: QuoteData = {
  tipo_seguro: '', quote_path: '',
  zip_code: '', estado_us: '', ciudad: '',
  detalles: {}, timeline: '', tiene_seguro: '',
  nombre: '', email: '', telefono: '',
};

const VIN_REGEX = /^[A-HJ-NPR-Z0-9]{17}$/i;
const ADDRESS_REGEX = /\d+.*[a-zA-Z]{2,}/;

function calcAge(dateStr: string): number | null {
  const d = new Date(dateStr);
  if (isNaN(d.getTime()) || d.getFullYear() < 1920) return null;
  const today = new Date();
  let age = today.getFullYear() - d.getFullYear();
  if (today.getMonth() < d.getMonth() || (today.getMonth() === d.getMonth() && today.getDate() < d.getDate())) age--;
  return age >= 0 && age <= 120 ? age : null;
}

function isValidDate(dateStr: string): boolean {
  if (!dateStr) return false;
  const age = calcAge(dateStr);
  return age !== null && age >= 16 && age <= 120;
}

/* ─── Helpers ─────────────────────────────────────────────────────────────── */
function calcScore(d: QuoteData): number {
  let s = 0;
  s += TIMELINE.find(t => t.value === d.timeline)?.score ?? 0;
  s += TIENE_SEGURO.find(t => t.value === d.tiene_seguro)?.score ?? 0;
  if (['Vida', 'Salud', 'Comercial', 'Paquete'].includes(d.tipo_seguro)) s += 2; else s += 1;
  if (d.telefono.replace(/\D/g, '').length >= 10) s += 2;
  if (d.quote_path === 'instantanea') s += 3;
  if (d.detalles.vin && VIN_REGEX.test(d.detalles.vin)) s += 2;
  if (d.detalles.direccion || d.detalles.direccion_propiedad) s += 1;
  if (d.tipo_seguro === 'Paquete') s += 2;
  const sit = d.detalles.situacion_familiar ?? '';
  if (sit.includes('hijos') || sit.includes('padres')) s += 1;
  return Math.max(0, s);
}

async function decodeVin(vin: string): Promise<string> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000);
    const r = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${vin}?format=json`, { signal: controller.signal });
    clearTimeout(timeout);
    const j = await r.json();
    const res: Array<{ Variable: string; Value: string }> = j.Results ?? [];
    const get = (n: string) => res.find(r => r.Variable === n)?.Value ?? '';
    const make = get('Make'); const model = get('Model'); const year = get('Model Year');
    return make && model && year ? `${year} ${make} ${model}` : '';
  } catch { return ''; }
}

async function searchMapbox(query: string): Promise<string[]> {
  const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
  if (!token || query.length < 3) return [];
  try {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(query)}.json?country=us&types=address&autocomplete=true&access_token=${token}&language=es&limit=5`;
    const r = await fetch(url);
    const j = await r.json();
    return (j.features ?? []).map((f: { place_name: string }) => f.place_name);
  } catch { return []; }
}

/* ─── Sub-components ─────────────────────────────────────────────────────── */
function ProgressDots({ total, current }: { total: number; current: number }) {
  return (
    <div className="flex items-center gap-1.5">
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} className={`rounded-full transition-all duration-300 ${
          i < current ? 'w-2 h-2 bg-slate-800' :
          i === current ? 'w-5 h-2 bg-slate-800' : 'w-2 h-2 bg-slate-300'
        }`} />
      ))}
    </div>
  );
}

function Chip({ label, selected, onClick, icon: Icon }: {
  label: string; selected: boolean; onClick: () => void;
  icon?: ComponentType<{ className?: string; weight?: string }>;
}) {
  return (
    <button
      type="button" onClick={onClick}
      className={`w-full text-left px-4 py-3 rounded-2xl border-2 text-sm font-medium transition-all leading-snug flex items-center gap-3 ${
        selected
          ? 'border-slate-800 bg-slate-800 text-white'
          : 'border-slate-200 bg-white text-slate-700 hover:border-slate-400 hover:bg-slate-50'
      }`}
    >
      <span className={`w-4 h-4 shrink-0 rounded-full border-2 flex items-center justify-center transition-all ${
        selected ? 'border-white bg-white' : 'border-slate-300'
      }`}>
        {selected && <span className="w-1.5 h-1.5 rounded-full bg-slate-800" />}
      </span>
      {Icon && <Icon className={`w-4.5 h-4.5 shrink-0 ${selected ? 'text-white' : 'text-slate-400'}`} weight="regular" />}
      {label}
    </button>
  );
}

function VinField({ value, decoded, onChange, onDecoded, error: externalError }: {
  value: string; decoded: string;
  onChange: (v: string) => void; onDecoded: (v: string) => void; error?: string;
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleChange(raw: string) {
    const v = raw.toUpperCase().replace(/[^A-HJ-NPR-Z0-9]/g, '').slice(0, 17);
    onChange(v); onDecoded(''); setError('');
    if (v.length === 17) {
      if (!VIN_REGEX.test(v)) { setError('VIN inválido. Verifica los caracteres.'); return; }
      setLoading(true);
      const result = await decodeVin(v);
      setLoading(false);
      if (result) onDecoded(result);
      else onDecoded('VIN registrado');
    }
  }

  return (
    <div>
      <div className="relative">
        <CreditCard weight="duotone" className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
        {loading && <CircleNotch weight="bold" className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 animate-spin" />}
        <input
          type="text" value={value} onChange={e => handleChange(e.target.value)}
          placeholder="Ej. 1HGBH41JXMN109186" maxLength={17}
          className={`w-full pl-11 pr-10 py-3.5 border-2 rounded-2xl text-sm font-mono tracking-wider focus:outline-none transition-colors ${
            value.length === 17 && !error && !loading
              ? 'border-emerald-400 bg-emerald-50 focus:border-emerald-500'
              : externalError ? 'border-amber-400 bg-amber-50/50 focus:border-amber-500'
              : 'border-slate-200 focus:border-slate-700'
          }`}
        />
      </div>
      <div className="flex justify-between items-center mt-1 px-1">
        <span className={`text-xs ${value.length === 17 ? 'text-emerald-600' : 'text-slate-400'}`}>{value.length}/17</span>
        {decoded && <span className="text-xs text-emerald-600 font-medium">✓ {decoded}</span>}
        {error && <span className="text-xs text-red-500">{error}</span>}
      </div>
      <p className="text-xs text-slate-400 mt-1 px-1">Lo encuentras en el tablero o en la puerta del conductor.</p>
    </div>
  );
}

function AddressField({ value, onChange, error: externalError }: { value: string; onChange: (v: string) => void; error?: string }) {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [open, setOpen] = useState(false);
  const debounce = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hasToken = !!process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

  function handleInput(v: string) {
    onChange(v); setSuggestions([]);
    if (!hasToken) return;
    if (debounce.current) clearTimeout(debounce.current);
    debounce.current = setTimeout(async () => {
      const results = await searchMapbox(v);
      setSuggestions(results); setOpen(results.length > 0);
    }, 350);
  }

  return (
    <div className="relative">
      <div className="relative">
        <MapPin weight="duotone" className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
        <input
          type="text" value={value} onChange={e => handleInput(e.target.value)}
          onFocus={() => suggestions.length > 0 && setOpen(true)}
          onBlur={() => setTimeout(() => setOpen(false), 150)}
          placeholder="123 Main St, Miami, FL 33101"
          autoComplete="off"
          className={`w-full pl-11 py-3.5 border-2 rounded-2xl text-sm focus:outline-none focus:border-slate-700 transition-colors ${
            externalError ? 'border-amber-400 bg-amber-50/50' : 'border-slate-200'
          }`}
        />
      </div>
      {open && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-slate-200 rounded-2xl shadow-lg overflow-hidden">
          {suggestions.map((s, i) => (
            <button key={i} type="button" onMouseDown={() => { onChange(s); setSuggestions([]); setOpen(false); }}
              className="w-full text-left px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 border-b border-slate-100 last:border-0 flex items-start gap-2">
              <MapPin weight="duotone" className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />{s}
            </button>
          ))}
        </div>
      )}
      <p className="text-xs text-slate-400 mt-1 px-1">
        {hasToken ? 'Escribe para ver sugerencias.' : 'Escribe tu dirección completa incluyendo ciudad y estado.'}
      </p>
    </div>
  );
}

/* ─── Main ───────────────────────────────────────────────────────────────── */
export interface QuoteModalProps {
  open: boolean; onClose: () => void; initialType?: InsType;
}

export default function QuoteModal({ open, onClose, initialType }: QuoteModalProps) {
  const [step, setStep]         = useState(0);
  const [data, setData]         = useState<QuoteData>(INITIAL);
  const [visible, setVisible]   = useState(true);
  const [zipLoading, setZipLoading] = useState(false);
  const [zipMsg, setZipMsg]     = useState('');
  const [vinDecoded, setVinDecoded] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitErr, setSubmitErr]   = useState('');
  const [success, setSuccess]   = useState(false);
  const [showErrors, setShowErrors] = useState(false);
  const [shaking, setShaking]       = useState(false);

  useEffect(() => {
    if (open) {
      setStep(0); setData({ ...INITIAL, tipo_seguro: initialType ?? '' });
      setVisible(true); setSuccess(false); setSubmitErr(''); setZipMsg(''); setVinDecoded('');
      setShowErrors(false); setShaking(false);
    }
  }, [open, initialType]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    document.body.dataset.quoteOpen = open ? 'true' : '';
    return () => { document.body.style.overflow = ''; document.body.dataset.quoteOpen = ''; };
  }, [open]);

  async function fade(fn: () => void) {
    setVisible(false);
    await new Promise(r => setTimeout(r, 160));
    fn(); setVisible(true);
  }

  const totalSteps = data.quote_path === 'instantanea' ? 7 : 6;
  function visualStep(s: number) { return data.quote_path === 'asesor' && s >= 5 ? s - 1 : s; }

  const next = () => {
    if (!canNext) {
      setShowErrors(true);
      setShaking(true);
      setTimeout(() => setShaking(false), 500);
      // Scroll to first invalid field
      const firstErr = document.querySelector('[data-field-error="true"]');
      if (firstErr) firstErr.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    setShowErrors(false);
    fade(() => {
      if (step === 3 && data.quote_path === 'asesor') setStep(5);
      else setStep(s => s + 1);
    });
  };
  const back = () => fade(() => {
    if (step === 5 && data.quote_path === 'asesor') setStep(3);
    else setStep(s => s - 1);
  });

  function set<K extends keyof QuoteData>(k: K, v: QuoteData[K]) { setData(d => ({ ...d, [k]: v })); }
  function setDetail(k: string, v: string) { setData(d => ({ ...d, detalles: { ...d.detalles, [k]: v } })); }

  async function lookupZip(zip: string) {
    setZipLoading(true); setZipMsg('');
    try {
      const r = await fetch(`https://api.zippopotam.us/us/${zip}`);
      if (!r.ok) throw new Error();
      const j = await r.json(); const p = j.places?.[0];
      if (p) { setData(d => ({ ...d, estado_us: p['state'], ciudad: p['place name'] })); setZipMsg(`✓ ${p['place name']}, ${p['state abbreviation']}`); }
    } catch { setZipMsg('ZIP no reconocido. Puedes continuar igual.'); }
    finally { setZipLoading(false); }
  }

  async function submit() {
    setSubmitting(true); setSubmitErr('');
    try {
      const res = await fetch('/api/leads', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre: data.nombre, email: data.email, telefono: data.telefono,
          tipo_seguro: data.tipo_seguro ? TIPO_LABEL[data.tipo_seguro as InsType] : '',
          zip_code: data.zip_code, estado_us: data.estado_us, ciudad: data.ciudad,
          timeline: data.timeline, tiene_seguro: data.tiene_seguro,
          lead_score: calcScore(data),
          detalles: { ...data.detalles, quote_path: data.quote_path, vin_decoded: vinDecoded },
          nivel_proteccion: '',
          tcpa_consent: true,
          consent_timestamp: new Date().toISOString(),
          tcpa_text: 'Al enviar, consientes que Maria Fernanda Insurance Consulting te contacte al teléfono y correo proporcionados, incluyendo mensajes de texto y llamadas, para fines relacionados con seguros. El consentimiento no es condición de compra.',
        }),
      });
      if (!res.ok) { const d = await res.json(); setSubmitErr(d.error ?? 'Error al enviar. Intenta de nuevo.'); return; }
      pushGTMEvent({
        event: 'quote_submitted',
        insurance_type: data.tipo_seguro,
        quote_path: data.quote_path,
        estado_us: data.estado_us || 'unknown',
        timeline: data.timeline,
        lead_score: calcScore(data),
      });
      await fade(() => setSuccess(true));
    } catch { setSubmitErr('Error de conexión. Intenta de nuevo.'); }
    finally { setSubmitting(false); }
  }

  const aq = data.tipo_seguro ? ADAPTIVE[data.tipo_seguro as InsType] : null;
  const pathBFields: ExtraField[] = data.tipo_seguro ? (PATH_B_FIELDS[data.tipo_seguro as InsType] ?? []) : [];
  const isInstantanea = data.quote_path === 'instantanea';

  const canNext = (() => {
    if (step === 0) return !!data.tipo_seguro;
    if (step === 1) return !!data.quote_path;
    if (step === 2) return data.zip_code.length === 5;
    if (step === 3) return !!aq && !!data.detalles[aq.key1] && !!data.detalles[aq.key2];
    if (step === 4) return pathBFields.filter(f => f.required).every(f => {
      const v = data.detalles[f.key] ?? '';
      if (f.type === 'vin') return VIN_REGEX.test(v) || !f.required;
      if (f.type === 'date') return isValidDate(v);
      if (f.type === 'address') return v.length >= 10 && ADDRESS_REGEX.test(v);
      return v.length > 0;
    });
    if (step === 5) return !!data.timeline && !!data.tiene_seguro;
    if (step === 6) return !!data.nombre.trim() && !!data.email.trim();
    return false;
  })();

  // Field-level error helpers for step 4
  const step4Errors: Record<string, string> = {};
  if (showErrors && step === 4) {
    pathBFields.filter(f => f.required).forEach(f => {
      const v = data.detalles[f.key] ?? '';
      if (f.type === 'vin' && !VIN_REGEX.test(v))
        step4Errors[f.key] = `El VIN debe tener 17 caracteres (tienes ${v.length})`;
      else if (f.type === 'date' && !isValidDate(v))
        step4Errors[f.key] = !v ? 'Selecciona tu fecha de nacimiento' : 'Ingresa una fecha de nacimiento válida';
      else if (f.type === 'chips' && !v)
        step4Errors[f.key] = 'Selecciona una opción';
      else if (f.type === 'address' && (!v || v.length < 10 || !ADDRESS_REGEX.test(v)))
        step4Errors[f.key] = 'Ingresa una dirección válida (ej. 123 Main St, Miami, FL)';
      else if (!v)
        step4Errors[f.key] = 'Este campo es necesario';
    });
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white w-full sm:max-w-lg rounded-t-3xl sm:rounded-3xl shadow-2xl max-h-[93vh] flex flex-col">

        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 shrink-0">
          <div className="flex items-center gap-3">
            {step > 0 && !success && (
              <button onClick={back} className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors">
                <CaretLeft weight="bold" className="w-4 h-4" />
              </button>
            )}
            {!success && <ProgressDots total={totalSteps} current={visualStep(step)} />}
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors">
            <X weight="bold" className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-6 py-6 transition-all duration-200"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(10px)' }}>

          {/* Success */}
          {success && (
            <div className="text-center py-4">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 bg-emerald-100">
                <Check weight="bold" className="w-8 h-8 text-emerald-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-800 mb-2">
                {`¡Recibimos tu solicitud, ${data.nombre.split(' ')[0]}!`}
              </h2>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                Un asesor bilingüe te contactará pronto con opciones personalizadas de <strong>{data.tipo_seguro ? TIPO_LABEL[data.tipo_seguro as InsType] : 'seguro'}</strong>.
              </p>
              <div className="bg-slate-50 rounded-2xl p-4 text-left text-xs text-slate-500 mb-6 space-y-1.5">
                <p className="font-semibold text-slate-700 text-sm mb-2">¿Qué sigue?</p>
                <p>✅ Revisamos tu perfil y opciones en {data.estado_us || 'tu estado'}</p>
                <p>✅ Te presentamos 2–3 opciones sin presión</p>
                <p>✅ Tú decides cuándo y si contratar</p>
              </div>
              <button onClick={onClose} className="w-full py-3.5 bg-slate-800 text-white text-sm font-semibold rounded-2xl hover:bg-slate-700 transition-colors">Cerrar</button>
            </div>
          )}

          {/* Step 0 — Tipo */}
          {!success && step === 0 && (
            <>
              <h2 className="text-xl font-bold text-slate-800 mb-1">¿Qué quieres proteger?</h2>
              <p className="text-slate-500 text-sm mb-5">Elige el tipo de seguro y te guiamos paso a paso.</p>
              <div className="grid grid-cols-3 gap-2.5" data-field-error={showErrors && !data.tipo_seguro ? 'true' : undefined}>
                {INSURANCE_OPTIONS.map(opt => {
                  const Icon = opt.icon; const sel = data.tipo_seguro === opt.id;
                  return (
                    <button key={opt.id} type="button" onClick={() => { set('tipo_seguro', opt.id); setShowErrors(false); }}
                      className={`flex flex-col items-center gap-2.5 p-3.5 rounded-2xl border-2 text-center transition-all duration-200 ${
                        sel ? `${opt.selBg} border-transparent shadow-md scale-[1.03]` : showErrors && !data.tipo_seguro ? 'border-amber-300 bg-amber-50/50 hover:border-amber-400' : 'border-slate-100 bg-white hover:border-slate-200 hover:shadow-sm'
                      }`}>
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${sel ? 'bg-white/20' : opt.iconBg}`}>
                        <Icon weight="duotone" className={`w-5 h-5 ${sel ? 'text-white' : opt.iconColor}`} />
                      </div>
                      <div>
                        <p className={`text-[11px] font-semibold leading-tight ${sel ? 'text-white' : 'text-slate-800'}`}>{opt.label}</p>
                        <p className={`text-[9px] mt-0.5 leading-tight ${sel ? 'text-white/70' : 'text-slate-400'}`}>{opt.sublabel}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
              {showErrors && !data.tipo_seguro && <p className="text-xs text-amber-600 mt-2 px-1">Selecciona un tipo de seguro para continuar</p>}
            </>
          )}

          {/* Step 1 — Ruta */}
          {!success && step === 1 && (
            <>
              <h2 className="text-xl font-bold text-slate-800 mb-1">¿Cómo prefieres continuar?</h2>
              <p className="text-slate-500 text-sm mb-6">Ambas opciones son gratuitas y sin compromiso.</p>
              <div className="space-y-3" data-field-error={showErrors && !data.quote_path ? 'true' : undefined}>
                {([
                  {
                    value: 'asesor' as QuotePath,
                    Icon: Headset,
                    iconBg: 'bg-slate-100',
                    iconColor: 'text-slate-600',
                    title: 'Hablar con un asesor',
                    desc: 'Un especialista bilingüe te llama en 15 minutos con tu cotización personalizada. Sin formularios largos.',
                    badge: 'Llamada en 15 min · Opción más rápida',
                    selBg: 'border-slate-800 bg-slate-800',
                    badgeSel: 'bg-white/20 text-white',
                    badgeDef: 'bg-slate-100 text-slate-600',
                  },
                  {
                    value: 'instantanea' as QuotePath,
                    Icon: EnvelopeSimple,
                    iconBg: 'bg-violet-100',
                    iconColor: 'text-violet-600',
                    title: 'Cotización directa por email',
                    desc: 'Calculamos tu precio real y lo enviamos a tu correo en minutos. Sin llamadas. Sin presión. A tu ritmo.',
                    badge: 'En tu correo en 5 min · Sin llamadas',
                    selBg: 'border-violet-600 bg-violet-600',
                    badgeSel: 'bg-white/20 text-white',
                    badgeDef: 'bg-violet-50 text-violet-600',
                  },
                ] as const).map(opt => {
                  const sel = data.quote_path === opt.value;
                  return (
                    <button key={opt.value} type="button" onClick={() => { set('quote_path', opt.value); setShowErrors(false); }}
                      className={`w-full text-left p-5 rounded-2xl border-2 transition-all ${sel ? `${opt.selBg} text-white shadow-md` : showErrors && !data.quote_path ? 'border-amber-300 bg-amber-50/50 hover:border-amber-400' : 'border-slate-200 bg-white hover:border-slate-300'}`}>
                      <div className="flex items-start gap-4">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${sel ? 'bg-white/20' : opt.iconBg}`}>
                          <opt.Icon weight="duotone" className={`w-5 h-5 ${sel ? 'text-white' : opt.iconColor}`} />
                        </div>
                        <div>
                          <p className={`font-semibold text-sm ${sel ? 'text-white' : 'text-slate-800'}`}>{opt.title}</p>
                          <p className={`text-xs mt-1 leading-relaxed ${sel ? 'text-white/75' : 'text-slate-500'}`}>{opt.desc}</p>
                          <span className={`inline-block mt-2 text-[10px] font-semibold px-2 py-0.5 rounded-full ${sel ? opt.badgeSel : opt.badgeDef}`}>{opt.badge}</span>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
              {showErrors && !data.quote_path && <p className="text-xs text-amber-600 mt-2 px-1">Elige cómo prefieres recibir tu cotización</p>}
            </>
          )}

          {/* Step 2 — ZIP */}
          {!success && step === 2 && (
            <>
              <h2 className="text-xl font-bold text-slate-800 mb-1">¿Cuál es tu código postal?</h2>
              <p className="text-slate-500 text-sm mb-5">El precio varía por estado. No pedimos dirección exacta.</p>
              <div className="relative mb-3" data-field-error={showErrors && data.zip_code.length !== 5 ? 'true' : undefined}>
                <MapPin weight="duotone" className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                {zipLoading && <CircleNotch weight="bold" className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 animate-spin" />}
                <input type="text" inputMode="numeric" maxLength={5} autoComplete="postal-code"
                  placeholder="ej. 90210" value={data.zip_code}
                  onChange={e => {
                    const v = e.target.value.replace(/\D/g, '').slice(0, 5);
                    set('zip_code', v); setData(d => ({ ...d, estado_us: '', ciudad: '' })); setZipMsg('');
                    if (v.length === 5) lookupZip(v);
                    if (showErrors) setShowErrors(false);
                  }}
                  className={`w-full pl-10 pr-10 py-4 text-xl font-semibold border-2 rounded-2xl focus:outline-none focus:border-slate-700 tracking-widest transition-colors ${
                    showErrors && data.zip_code.length !== 5 ? 'border-amber-400 bg-amber-50/50' : 'border-slate-200'
                  }`}
                />
              </div>
              {showErrors && data.zip_code.length !== 5 && <p className="text-xs text-amber-600 mb-3 px-1">Ingresa un código postal de 5 dígitos</p>}
              {zipMsg && (
                <div className={`text-sm px-3 py-2 rounded-xl mb-3 ${zipMsg.startsWith('✓') ? 'text-emerald-700 bg-emerald-50 border border-emerald-200' : 'text-amber-700 bg-amber-50 border border-amber-200'}`}>{zipMsg}</div>
              )}
              <p className="text-xs text-slate-400">🔒 Tu ubicación es privada. Solo la usamos para encontrar tarifas disponibles en tu área.</p>
            </>
          )}

          {/* Step 3 — Adaptive */}
          {!success && step === 3 && aq && (
            <>
              <h2 className="text-xl font-bold text-slate-800 mb-5">Cuéntame un poco más</h2>
              <p className="text-sm font-semibold text-slate-700 mb-2.5">{aq.q1}</p>
              <div className="space-y-2 mb-1" data-field-error={showErrors && !data.detalles[aq.key1] ? 'true' : undefined}>
                {aq.opts1.map(o => <Chip key={o.label} label={o.label} icon={o.icon} selected={data.detalles[aq.key1] === o.label} onClick={() => { setDetail(aq.key1, o.label); setShowErrors(false); }} />)}
              </div>
              {showErrors && !data.detalles[aq.key1] && <p className="text-xs text-amber-600 mb-4 px-1">Selecciona una opción</p>}
              {(!showErrors || data.detalles[aq.key1]) && <div className="mb-6" />}
              <p className="text-sm font-semibold text-slate-700 mb-2.5">{aq.q2}</p>
              <div className="space-y-2" data-field-error={showErrors && !data.detalles[aq.key2] ? 'true' : undefined}>
                {aq.opts2.map(o => <Chip key={o.label} label={o.label} icon={o.icon} selected={data.detalles[aq.key2] === o.label} onClick={() => { setDetail(aq.key2, o.label); setShowErrors(false); }} />)}
              </div>
              {showErrors && !data.detalles[aq.key2] && <p className="text-xs text-amber-600 mt-1 px-1">Selecciona una opción</p>}
            </>
          )}

          {/* Step 4 — Path B extra (solo ruta instantánea) */}
          {!success && step === 4 && (
            <>
              <h2 className="text-xl font-bold text-slate-800 mb-1">Detalles para tu cotización</h2>
              <p className="text-slate-500 text-sm mb-6">Esta información nos permite calcular tu precio real.</p>
              <div className="space-y-6">
                {pathBFields.map(field => {
                  const errMsg = step4Errors[field.key];
                  return (
                  <div key={field.key} data-field-error={errMsg ? 'true' : undefined}>
                    <label className="block text-sm font-semibold text-slate-700 mb-2.5">
                      {field.label}
                      {!field.required && <span className="text-slate-400 font-normal ml-1">(opcional)</span>}
                    </label>
                    {field.type === 'vin' && <VinField value={data.detalles[field.key] ?? ''} decoded={vinDecoded} onChange={v => { setDetail(field.key, v); if (showErrors) setShowErrors(false); }} onDecoded={setVinDecoded} error={errMsg} />}
                    {field.type === 'date' && (() => {
                      const dateVal = data.detalles[field.key] ?? '';
                      const age = dateVal ? calcAge(dateVal) : null;
                      const valid = dateVal ? isValidDate(dateVal) : false;
                      return (
                      <div>
                        <div className="relative">
                          <Calendar weight="duotone" className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                          <input type="date" value={dateVal}
                            onChange={e => { setDetail(field.key, e.target.value); if (showErrors) setShowErrors(false); }}
                            max={new Date(new Date().setFullYear(new Date().getFullYear() - 16)).toISOString().split('T')[0]}
                            min="1920-01-01"
                            className={`w-full pl-11 py-3.5 border-2 rounded-2xl text-sm focus:outline-none focus:border-slate-700 transition-colors ${
                              errMsg ? 'border-amber-400 bg-amber-50/50' : valid ? 'border-emerald-400 bg-emerald-50' : 'border-slate-200'
                            }`}
                          />
                        </div>
                        {valid && age !== null && <p className="text-xs text-emerald-600 mt-1 px-1 font-medium">✓ {age} años</p>}
                      </div>
                      );
                    })()}
                    {field.type === 'chips' && (
                      <div className="space-y-2">{field.options.map(o => <Chip key={o} label={o} selected={data.detalles[field.key] === o} onClick={() => { setDetail(field.key, o); if (showErrors) setShowErrors(false); }} />)}</div>
                    )}
                    {field.type === 'address' && <AddressField value={data.detalles[field.key] ?? ''} onChange={v => { setDetail(field.key, v); if (showErrors) setShowErrors(false); }} error={errMsg} />}
                    {errMsg && <p className="text-xs text-amber-600 mt-1 px-1">{errMsg}</p>}
                  </div>
                  );
                })}
                {pathBFields.length === 0 && (
                  <p className="text-sm text-slate-500 text-center py-4">✓ Tenemos todo lo que necesitamos para tu cotización.</p>
                )}
              </div>
            </>
          )}

          {/* Step 5 — Intent */}
          {!success && step === 5 && (
            <>
              <h2 className="text-xl font-bold text-slate-800 mb-5">Una última pregunta…</h2>
              <p className="text-sm font-semibold text-slate-700 mb-2.5">¿Cuándo necesitas la cobertura?</p>
              <div className="space-y-2 mb-1" data-field-error={showErrors && !data.timeline ? 'true' : undefined}>
                {TIMELINE.map(o => <Chip key={o.value} label={o.label} icon={o.icon} selected={data.timeline === o.value} onClick={() => { set('timeline', o.value); setShowErrors(false); }} />)}
              </div>
              {showErrors && !data.timeline && <p className="text-xs text-amber-600 mb-4 px-1">Selecciona cuándo necesitas la cobertura</p>}
              {(!showErrors || data.timeline) && <div className="mb-6" />}
              <p className="text-sm font-semibold text-slate-700 mb-2.5">¿Tienes seguro actualmente?</p>
              <div className="space-y-2" data-field-error={showErrors && !data.tiene_seguro ? 'true' : undefined}>
                {TIENE_SEGURO.map(o => <Chip key={o.value} label={o.label} icon={o.icon} selected={data.tiene_seguro === o.value} onClick={() => { set('tiene_seguro', o.value); setShowErrors(false); }} />)}
              </div>
              {showErrors && !data.tiene_seguro && <p className="text-xs text-amber-600 mt-1 px-1">Selecciona una opción</p>}
            </>
          )}

          {/* Step 6 — Contact */}
          {!success && step === 6 && (
            <>
              <h2 className="text-xl font-bold text-slate-800 mb-1">
                {isInstantanea ? '¿A dónde enviamos tu cotización?' : '¿Cómo te contactamos?'}
              </h2>
              <p className="text-slate-500 text-sm mb-5">
                {isInstantanea ? 'Te enviamos tu estimado de precio en minutos, sin spam.' : 'Un asesor bilingüe te llama en 15 minutos con tu cotización.'}
              </p>
              <div className="space-y-3 mb-4">
                <div data-field-error={showErrors && !data.nombre.trim() ? 'true' : undefined}>
                  <label className="block text-xs font-semibold text-slate-500 mb-1.5">Tu nombre *</label>
                  <input type="text" autoComplete="name" placeholder="Maria García" value={data.nombre} onChange={e => { set('nombre', e.target.value); if (showErrors) setShowErrors(false); }}
                    className={`w-full px-4 py-3 border-2 rounded-2xl text-sm focus:outline-none focus:border-slate-700 transition-colors ${
                      showErrors && !data.nombre.trim() ? 'border-amber-400 bg-amber-50/50' : 'border-slate-200'
                    }`} />
                  {showErrors && !data.nombre.trim() && <p className="text-xs text-amber-600 mt-1 px-1">Ingresa tu nombre</p>}
                </div>
                <div data-field-error={showErrors && !data.email.trim() ? 'true' : undefined}>
                  <label className="block text-xs font-semibold text-slate-500 mb-1.5">Email *</label>
                  <input type="email" autoComplete="email" placeholder="maria@email.com" value={data.email} onChange={e => { set('email', e.target.value); if (showErrors) setShowErrors(false); }}
                    className={`w-full px-4 py-3 border-2 rounded-2xl text-sm focus:outline-none focus:border-slate-700 transition-colors ${
                      showErrors && !data.email.trim() ? 'border-amber-400 bg-amber-50/50' : 'border-slate-200'
                    }`} />
                  {showErrors && !data.email.trim() && <p className="text-xs text-amber-600 mt-1 px-1">Ingresa tu email</p>}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1.5">
                    Teléfono <span className="text-slate-400 font-normal">{isInstantanea ? '(opcional)' : '(para llamarte más rápido)'}</span>
                  </label>
                  <input type="tel" autoComplete="tel" placeholder="(555) 555-5555" value={data.telefono} onChange={e => set('telefono', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-2xl text-sm focus:outline-none focus:border-slate-700 transition-colors" />
                </div>
              </div>
              {submitErr && <p className="text-xs text-red-600 bg-red-50 border border-red-200 rounded-xl px-3 py-2 mb-3">{submitErr}</p>}
              <p className="text-xs text-slate-400 leading-relaxed">🔒 Al enviar, consientes que <strong>Maria Fernanda Insurance Consulting</strong> te contacte al teléfono y correo proporcionados, incluyendo mensajes de texto y llamadas, para fines relacionados con seguros. El consentimiento no es condición de compra. By submitting, you consent to be contacted by Maria Fernanda Insurance Consulting at the phone and email provided, including automated calls and texts, for insurance purposes. Consent is not required to purchase. <a href="/es/privacidad" className="underline hover:text-slate-600">Privacidad</a> · <a href="/es/terminos" className="underline hover:text-slate-600">Términos</a></p>
            </>
          )}
        </div>

        {/* Footer */}
        {!success && (
          <div className="px-6 py-4 border-t border-slate-100 shrink-0 bg-white rounded-b-3xl">
            {step < 6 ? (
              <button onClick={next}
                className={`w-full py-3.5 font-semibold text-sm rounded-2xl transition-all active:scale-95 ${
                  shaking ? 'animate-shake' : ''
                } ${
                  step === 1 && data.quote_path === 'instantanea' ? 'bg-violet-600 hover:bg-violet-700 text-white' : 'bg-slate-800 hover:bg-slate-700 text-white'
                }`}>
                {step === 0 ? `Cotizar ${data.tipo_seguro ? TIPO_LABEL[data.tipo_seguro as InsType] : 'mi seguro'} →`
                  : step === 5 ? 'Casi listo →' : 'Continuar →'}
              </button>
            ) : (
              <button onClick={() => { if (!canNext) { setShowErrors(true); setShaking(true); setTimeout(() => setShaking(false), 500); return; } submit(); }} disabled={submitting}
                className={`w-full py-3.5 font-semibold text-sm rounded-2xl transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white ${shaking ? 'animate-shake' : ''}`}>
                {submitting ? <><CircleNotch weight="bold" className="w-4 h-4 animate-spin" /> Enviando…</> : 'Solicitar mi cotización →'}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
