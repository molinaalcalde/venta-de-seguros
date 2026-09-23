'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  PawPrint, CheckCircle, Stethoscope, FirstAidKit,
  Syringe, Pill, ArrowRight, MapPin, ArrowLeft, Star,
  Shield, Lock, Headset, CreditCard, X, Check,
} from '@phosphor-icons/react';
import QuoteModal from '@/components/QuoteModal';
import LanguageSwitcher from '@/components/LanguageSwitcher';

// ── Affiliate config ─────────────────────────────────────────────────────────
const FETCH_URL =
  'https://www.fetchpet.com/mypet?a=FC87573&utm_source=firstconnect&utm_medium=brokerportal&utm_campaign=firstconnect_email&c=firstconnect&p=firstconnect&v=FVPCTRL';

const FETCH_STATES = new Set(['NJ', 'FL', 'IA', 'NV', 'PA', 'RI', 'TX']);

const STATE_NAMES: Record<string, string> = {
  NJ: 'Nueva Jersey', FL: 'Florida', IA: 'Iowa',
  NV: 'Nevada', PA: 'Pensilvania', RI: 'Rhode Island', TX: 'Texas',
};

// ── Plans ────────────────────────────────────────────────────────────────────
const PLANS = [
  {
    name: 'Accidente',
    price: '29',
    desc: 'Protección esencial para emergencias y accidentes inesperados.',
    features: [
      { label: 'Emergencias y accidentes', included: true },
      { label: 'Cirugías por accidente', included: true },
      { label: 'Diagnósticos de laboratorio', included: true },
      { label: 'Consultas de rutina', included: false },
      { label: 'Vacunas preventivas', included: false },
      { label: 'Medicamentos crónicos', included: false },
    ],
    highlight: false,
    cta: 'Cotizar Plan Accidente',
  },
  {
    name: 'Completo',
    price: '49',
    desc: 'La opción más popular. Cubre accidentes y enfermedades completas.',
    features: [
      { label: 'Emergencias y accidentes', included: true },
      { label: 'Cirugías y hospitalizaciones', included: true },
      { label: 'Diagnósticos de laboratorio', included: true },
      { label: 'Consultas de rutina', included: true },
      { label: 'Vacunas preventivas', included: true },
      { label: 'Medicamentos crónicos', included: false },
    ],
    highlight: true,
    cta: 'Cotizar Plan Completo',
  },
  {
    name: 'Premium',
    price: '79',
    desc: 'Cobertura máxima. Sin sorpresas, sin límites anuales bajos.',
    features: [
      { label: 'Emergencias y accidentes', included: true },
      { label: 'Cirugías y hospitalizaciones', included: true },
      { label: 'Diagnósticos de laboratorio', included: true },
      { label: 'Consultas de rutina', included: true },
      { label: 'Vacunas preventivas', included: true },
      { label: 'Medicamentos crónicos', included: true },
    ],
    highlight: false,
    cta: 'Cotizar Plan Premium',
  },
];

// ── Coverage ─────────────────────────────────────────────────────────────────
const COVERAGE = [
  { icon: Stethoscope, label: 'Consultas veterinarias' },
  { icon: FirstAidKit, label: 'Emergencias y hospitalizaciones' },
  { icon: CheckCircle, label: 'Cirugías y procedimientos' },
  { icon: Syringe, label: 'Vacunas de rutina' },
  { icon: Pill, label: 'Medicamentos recetados' },
  { icon: CheckCircle, label: 'Diagnósticos y laboratorios' },
];

// ── Testimonials ─────────────────────────────────────────────────────────────
const TESTIMONIALS = [
  {
    name: 'Carmen R.',
    location: 'Houston, Texas',
    text: 'Mi perro tuvo una cirugía de emergencia. Con VetDirect™ no adelanté nada — la clínica cobró directo al seguro. Sin ese plan no sé qué hubiera hecho.',
    plan: 'Plan Completo',
  },
  {
    name: 'Andrés M.',
    location: 'Miami, Florida',
    text: 'Pensé que necesitaba SSN para asegurar a mi gata. Me dijeron que solo necesitaba ITIN y en 10 minutos tenía la póliza activa. Muy fácil.',
    plan: 'Plan Accidente',
  },
  {
    name: 'Lucía P.',
    location: 'Newark, New Jersey',
    text: 'Tres mascotas aseguradas con el Plan Premium. El servicio en español es real — hablas con una persona, no con un menú automático.',
    plan: 'Plan Premium',
  },
];

// ── FAQ ──────────────────────────────────────────────────────────────────────
const FAQ = [
  {
    q: '¿Necesito número de seguro social para asegurar a mi mascota?',
    a: 'No. Puedes contratar el seguro de mascotas con tu ITIN. No se requiere SSN ni ciudadanía. Solo necesitas tu nombre, dirección y la información básica de tu mascota.',
  },
  {
    q: '¿Cómo funciona VetDirect™ — el pago directo a la clínica?',
    a: 'Con VetDirect™ pagamos directamente a la clínica veterinaria asociada. Tú llevas a tu mascota, recibes la atención, y nosotros cubrimos el costo. No necesitas adelantar dinero ni esperar semanas para un reembolso.',
  },
  {
    q: '¿Cuánto cuesta el seguro de mascotas?',
    a: 'Los planes comienzan desde $29/mes para cobertura de accidentes. El precio varía según raza, edad y estado de tu mascota. Sujeto a términos y condiciones.',
  },
  {
    q: '¿El seguro cubre enfermedades preexistentes?',
    a: 'Las enfermedades preexistentes generalmente no están cubiertas durante los primeros 6 a 12 meses. Las condiciones nuevas y accidentes quedan cubiertos desde el inicio. Consulta con un asesor para tu caso específico.',
  },
  {
    q: '¿La compra directa en línea está disponible en mi estado?',
    a: 'La compra directa en línea a través de nuestro portal afiliado Fetch está disponible en: Nueva Jersey, Florida, Iowa, Nevada, Pensilvania, Rhode Island y Texas. Para residentes de otros estados, un asesor en español te guiará.',
  },
  {
    q: '¿Mi información personal se comparte con el gobierno o migración?',
    a: 'No. Tu información personal es 100% confidencial. Nunca la compartimos con ICE ni ninguna agencia gubernamental. Cumplimos con todas las regulaciones estatales de privacidad de seguros.',
  },
];

// ─────────────────────────────────────────────────────────────────────────────

export default function MascotasPage() {
  const [quoteOpen, setQuoteOpen]   = useState(false);
  const [userState, setUserState]   = useState<string | null>(null);
  const [geoLoading, setGeoLoading] = useState(true);
  const [openFaq, setOpenFaq]       = useState<number | null>(null);
  const [scrolled, setScrolled]     = useState(false);

  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then(r => r.json())
      .then(d => { if (d.region_code) setUserState(d.region_code); })
      .catch(() => {})
      .finally(() => setGeoLoading(false));
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isEligibleState = userState && FETCH_STATES.has(userState);
  const stateName = userState ? (STATE_NAMES[userState] ?? userState) : null;

  // ── Schema ────────────────────────────────────────────────────────────────
  const schemas = [
    {
      '@context': 'https://schema.org', '@type': 'FAQPage',
      mainEntity: FAQ.map(({ q, a }) => ({
        '@type': 'Question', name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    },
    {
      '@context': 'https://schema.org', '@type': 'Service',
      name: 'Seguro de Mascotas VetDirect™',
      description: 'Seguro de mascotas con pago directo a la clínica veterinaria. Sin SSN requerido. Acepta ITIN. Planes desde $29/mes.',
      provider: {
        '@type': 'InsuranceAgency',
        name: 'Maria Fernanda Insurance Consulting',
        url: 'https://venta-de-seguros.vercel.app',
      },
      areaServed: { '@type': 'Country', name: 'United States' },
      offers: { '@type': 'Offer', price: '29', priceCurrency: 'USD' },
    },
  ];

  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      {/* ── Navbar ──────────────────────────────────────────────────────── */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-5xl mx-auto px-5 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2 group shrink-0">
              <ArrowLeft weight="regular" className={`w-4 h-4 transition-colors ${scrolled ? 'text-slate-400 group-hover:text-slate-700' : 'text-white/70 group-hover:text-white'}`} />
              <img src="/logo.png" alt="Maria Fernanda Insurance Consulting" className={`h-8 w-auto transition-all duration-300 ${scrolled ? '' : 'brightness-0 invert'}`} />
            </Link>
            <div className="flex items-center gap-2">
              <LanguageSwitcher scrolled={scrolled} />
              <button
                onClick={() => setQuoteOpen(true)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all shadow-sm ${
                  scrolled ? 'bg-slate-900 hover:bg-slate-800 text-white' : 'bg-white text-slate-900 hover:bg-white/90'
                }`}
              >
                Cotizar gratis
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="bg-[#fafbfa] min-h-screen">

        {/* ── Hero — Video full bleed ───────────────────────────────────── */}
        <section className="relative w-full min-h-[600px] lg:min-h-[720px] flex flex-col justify-end overflow-hidden">
          {/* Video background */}
          <video
            src="/videos/hero2.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/75 z-[1]" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/30 z-[1]" />

          {/* Hero content */}
          <div className="relative z-10 w-full px-5 lg:px-10 pb-14 sm:pb-20">
            <div className="max-w-5xl mx-auto flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              {/* Scroll cue */}
              <div className="hidden lg:flex items-center gap-3 text-white/70 text-xs font-light select-none shrink-0">
                <div className="w-5 h-8 rounded-full border border-white/50 flex items-start justify-center pt-1.5">
                  <span className="w-1 h-1.5 bg-white rounded-full animate-bounce" />
                </div>
                <span className="tracking-wide">Scroll Down</span>
              </div>

              {/* Headline */}
              <div className="max-w-2xl text-white lg:text-right">
                <div className="flex flex-wrap gap-2 mb-5 lg:justify-end">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/15 border border-white/25 backdrop-blur-sm text-xs text-white font-medium">
                    <PawPrint weight="duotone" className="w-3.5 h-3.5" />
                    VetDirect™ · Pago directo a la clínica
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/15 border border-white/25 backdrop-blur-sm text-xs text-white font-medium">
                    Sin SSN · Acepta ITIN
                  </span>
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-[72px] font-normal tracking-tight leading-[1.06] drop-shadow-sm">
                  Seguro de <br />
                  <span className="font-sans font-light">Mascotas</span>{' '}
                  <span className="font-editorial-italic">sin adelantar</span>
                </h1>
                <p className="mt-4 text-white/85 text-sm sm:text-base font-light max-w-lg leading-relaxed lg:ml-auto">
                  Lleva a tu perro o gato al veterinario y nosotros pagamos directamente a la clínica. Sin reembolsos, sin burocracia. Sin SSN requerido.
                </p>
                <div className="mt-6 flex flex-wrap gap-4 items-center lg:justify-end">
                  {geoLoading ? (
                    <div className="h-11 w-52 bg-white/20 animate-pulse rounded-full" />
                  ) : isEligibleState ? (
                    <a
                      href={FETCH_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-slate-900 font-semibold text-sm hover:bg-slate-100 transition-all shadow-lg active:scale-95"
                    >
                      <PawPrint weight="fill" className="w-4 h-4 text-[#2d5a35]" />
                      Obtener seguro ahora
                      <ArrowRight weight="bold" className="w-4 h-4" />
                    </a>
                  ) : (
                    <button
                      onClick={() => setQuoteOpen(true)}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-slate-900 font-semibold text-sm hover:bg-slate-100 transition-all shadow-lg active:scale-95"
                    >
                      <PawPrint weight="fill" className="w-4 h-4 text-[#2d5a35]" />
                      Cotizar Seguro de Mascotas
                      <ArrowRight weight="bold" className="w-4 h-4" />
                    </button>
                  )}
                  <span className="text-white/60 text-xs font-light">Desde $29/mes · Sin compromiso</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Stats bar ────────────────────────────────────────────────── */}
        <section className="bg-white border-b border-slate-100">
          <div className="max-w-5xl mx-auto px-5 lg:px-8 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: '10K+', label: 'Mascotas aseguradas' },
                { value: '4.9★', label: 'Calificación promedio' },
                { value: '24h', label: 'Tiempo de activación' },
                { value: '100%', label: 'Confidencial' },
              ].map(({ value, label }) => (
                <div key={label}>
                  <p className="text-2xl font-light text-[#2d5a35] tracking-tight">{value}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3 Features ───────────────────────────────────────────────── */}
        <section className="max-w-5xl mx-auto px-5 lg:px-8 py-14 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                emoji: '🏥',
                title: 'Pago Directo VetDirect™',
                desc: 'Nosotros le pagamos directamente a la clínica. Tú no adelantas nada. No hay formularios de reembolso.',
                accent: 'border-t-2 border-[#3d7a47]',
              },
              {
                emoji: '📋',
                title: 'Cobertura Completa',
                desc: 'Consultas, emergencias, cirugías, vacunas, medicamentos y diagnósticos. Sujeto a términos y condiciones.',
                accent: 'border-t-2 border-[#3d7a47]',
              },
              {
                emoji: '🔒',
                title: 'Privacidad Garantizada',
                desc: 'Tu información es 100% confidencial. Nunca la compartimos con migración ni ninguna agencia del gobierno.',
                accent: 'border-t-2 border-[#3d7a47]',
              },
            ].map((f) => (
              <div key={f.title} className={`bg-white rounded-2xl p-7 border border-slate-200/70 shadow-sm ${f.accent}`}>
                <div className="text-3xl mb-4">{f.emoji}</div>
                <h3 className="font-semibold text-slate-900 text-base mb-2">{f.title}</h3>
                <p className="text-sm text-slate-600 font-light leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Plans / Opciones ─────────────────────────────────────────── */}
        <section className="bg-white border-y border-slate-100">
          <div className="max-w-5xl mx-auto px-5 lg:px-8 py-14 md:py-20">
            <div className="max-w-xl mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-slate-900 tracking-tight mb-3">
                Elige tu{' '}
                <span className="font-editorial-italic text-[#3d7a47]">plan de cobertura</span>
              </h2>
              <p className="text-sm text-slate-500 font-light">
                Todos los planes incluyen VetDirect™. Precios desde y sujetos a términos y condiciones.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {PLANS.map((plan) => (
                <div
                  key={plan.name}
                  className={`rounded-2xl p-7 flex flex-col transition-all ${
                    plan.highlight
                      ? 'bg-[#1a3320] text-white shadow-2xl scale-[1.02] relative'
                      : 'bg-[#fafbfa] border border-slate-200 text-slate-900'
                  }`}
                >
                  {plan.highlight && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#7db887] text-[#1a3320] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                      Más popular
                    </span>
                  )}
                  <div className="mb-5">
                    <p className={`text-xs font-semibold uppercase tracking-widest mb-2 ${plan.highlight ? 'text-[#7db887]' : 'text-[#3d7a47]'}`}>
                      Plan {plan.name}
                    </p>
                    <div className="flex items-end gap-1 mb-2">
                      <span className={`text-4xl font-light tracking-tight ${plan.highlight ? 'text-white' : 'text-slate-900'}`}>
                        ${plan.price}
                      </span>
                      <span className={`text-sm mb-1 ${plan.highlight ? 'text-white/50' : 'text-slate-400'}`}>/mes</span>
                    </div>
                    <p className={`text-xs leading-relaxed ${plan.highlight ? 'text-white/60' : 'text-slate-500'}`}>
                      {plan.desc}
                    </p>
                  </div>

                  <ul className="space-y-2.5 flex-1 mb-7">
                    {plan.features.map(({ label, included }) => (
                      <li key={label} className="flex items-center gap-2.5 text-xs">
                        {included ? (
                          <Check weight="bold" className={`w-4 h-4 shrink-0 ${plan.highlight ? 'text-[#7db887]' : 'text-[#3d7a47]'}`} />
                        ) : (
                          <X weight="bold" className={`w-4 h-4 shrink-0 ${plan.highlight ? 'text-white/20' : 'text-slate-300'}`} />
                        )}
                        <span className={included ? (plan.highlight ? 'text-white/80' : 'text-slate-700') : (plan.highlight ? 'text-white/30' : 'text-slate-400')}>
                          {label}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {isEligibleState && plan.name !== 'Accidente' ? (
                    <a
                      href={FETCH_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-3 rounded-full text-xs font-bold text-center transition-all ${
                        plan.highlight
                          ? 'bg-[#7db887] hover:bg-[#8fc99a] text-[#1a3320]'
                          : 'bg-slate-900 hover:bg-slate-700 text-white'
                      }`}
                    >
                      {plan.cta}
                    </a>
                  ) : (
                    <button
                      onClick={() => setQuoteOpen(true)}
                      className={`w-full py-3 rounded-full text-xs font-bold transition-all ${
                        plan.highlight
                          ? 'bg-[#7db887] hover:bg-[#8fc99a] text-[#1a3320]'
                          : 'bg-slate-900 hover:bg-slate-700 text-white'
                      }`}
                    >
                      {plan.cta}
                    </button>
                  )}
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-400 text-center mt-6">
              *Precios referenciales. Cobertura, términos y condiciones varían según raza, edad, estado y aseguradora. Sujeto a aprobación.
            </p>
          </div>
        </section>

        {/* ── What's covered ───────────────────────────────────────────── */}
        <section className="max-w-5xl mx-auto px-5 lg:px-8 py-14 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-slate-900 tracking-tight mb-4">
                ¿Qué está{' '}
                <span className="font-editorial-italic text-[#3d7a47]">cubierto?</span>
              </h2>
              <p className="text-slate-500 font-light text-sm leading-relaxed mb-8">
                Cobertura integral para que tu perro o gato esté protegido en cualquier situación. Sujeto a términos y condiciones.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {COVERAGE.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3 bg-white rounded-xl px-4 py-3.5 border border-slate-100 shadow-sm">
                    <Icon weight="duotone" className="w-5 h-5 text-[#3d7a47] shrink-0" />
                    <span className="text-sm text-slate-700 font-medium">{label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#1a3320] rounded-3xl p-8 text-white">
              <p className="text-xs uppercase tracking-widest text-[#7db887] font-semibold mb-4">VetDirect™</p>
              <h3 className="text-2xl font-light leading-tight mb-5">
                Sin reembolsos.<br />
                <span className="font-editorial-italic text-[#7db887]">Sin formularios.</span><br />
                Sin esperas.
              </h3>
              <div className="space-y-4">
                {[
                  { step: '1', text: 'Llevas a tu mascota a la clínica asociada' },
                  { step: '2', text: 'La clínica nos contacta directamente' },
                  { step: '3', text: 'Nosotros pagamos. Tú te llevas a tu mascota.' },
                ].map(s => (
                  <div key={s.step} className="flex items-start gap-4">
                    <div className="w-7 h-7 rounded-full bg-[#7db887]/20 border border-[#7db887]/40 flex items-center justify-center shrink-0 text-xs font-bold text-[#7db887]">
                      {s.step}
                    </div>
                    <p className="text-sm text-white/70 leading-relaxed pt-0.5">{s.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Geo-gated CTA ────────────────────────────────────────────── */}
        <section className="bg-gradient-to-br from-[#1a3320] to-[#2d5a35] text-white">
          <div className="max-w-5xl mx-auto px-5 lg:px-8 py-14 md:py-20">
            <div className="max-w-2xl mx-auto text-center">
              <PawPrint weight="duotone" className="w-12 h-12 text-[#7db887] mx-auto mb-5" />
              {geoLoading ? (
                <>
                  <div className="h-8 w-3/4 bg-white/10 animate-pulse rounded-lg mx-auto mb-4" />
                  <div className="h-4 w-1/2 bg-white/10 animate-pulse rounded mx-auto" />
                </>
              ) : isEligibleState ? (
                <>
                  <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">
                    Disponible en{' '}
                    <span className="font-editorial-italic text-[#7db887]">{stateName}</span>
                  </h2>
                  <p className="text-white/70 font-light mb-8 text-base">
                    Compra tu seguro de mascotas directamente en línea. Proceso 100% digital, sin llamadas.
                  </p>
                  <a
                    href={FETCH_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#7db887] hover:bg-[#8fc99a] text-[#1a3320] font-bold text-sm transition-all shadow-xl hover:-translate-y-0.5"
                  >
                    <PawPrint weight="fill" className="w-5 h-5" />
                    Obtener mi seguro de mascotas ahora
                    <ArrowRight weight="bold" className="w-4 h-4" />
                  </a>
                  <p className="text-xs text-white/30 mt-4">
                    Serás redirigido al portal de Fetch Pet Insurance · Maria Fernanda afiliado certificado
                  </p>
                </>
              ) : (
                <>
                  <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">
                    Protege a tu mascota{' '}
                    <span className="font-editorial-italic text-[#7db887]">hoy mismo</span>
                  </h2>
                  <p className="text-white/70 font-light mb-8 text-base">
                    Un asesor en español te guía en todo el proceso. Sin SSN, sin burocracia.
                  </p>
                  <button
                    onClick={() => setQuoteOpen(true)}
                    className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#7db887] hover:bg-[#8fc99a] text-[#1a3320] font-bold text-sm transition-all shadow-xl hover:-translate-y-0.5"
                  >
                    <PawPrint weight="fill" className="w-5 h-5" />
                    Cotizar Seguro de Mascotas gratis
                    <ArrowRight weight="bold" className="w-4 h-4" />
                  </button>
                  <p className="text-xs text-white/30 mt-4">Sin compromiso · Respuesta en menos de 24 horas</p>
                </>
              )}
            </div>
          </div>
        </section>

        {/* ── Why us ───────────────────────────────────────────────────── */}
        <section className="max-w-5xl mx-auto px-5 lg:px-8 py-14 md:py-20">
          <h2 className="text-3xl md:text-4xl font-light text-slate-900 tracking-tight mb-10">
            ¿Por qué{' '}
            <span className="font-editorial-italic text-slate-400">elegirnos?</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { icon: Shield,     title: 'Sin SSN',          desc: 'Aceptamos ITIN y pasaporte como identificación válida.' },
              { icon: Lock,       title: '100% Privado',      desc: 'Tu info nunca se comparte con migración ni el gobierno.' },
              { icon: Headset,    title: 'Todo en Español',   desc: 'Agentes reales que hablan tu idioma, listos para ayudarte.' },
              { icon: CreditCard, title: 'Sin Sorpresas',     desc: 'Tarifas claras, sin letra pequeña, sin cobros ocultos.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-6 border border-slate-200/70 shadow-sm">
                <Icon weight="duotone" className="w-6 h-6 text-[#3d7a47] mb-3" />
                <h3 className="font-semibold text-slate-900 text-sm mb-1.5">{title}</h3>
                <p className="text-xs text-slate-500 font-light leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Testimonials ─────────────────────────────────────────────── */}
        <section className="bg-white border-y border-slate-100">
          <div className="max-w-5xl mx-auto px-5 lg:px-8 py-14 md:py-20">
            <h2 className="text-3xl md:text-4xl font-light text-slate-900 tracking-tight mb-10">
              Lo que dicen{' '}
              <span className="font-editorial-italic text-[#3d7a47]">nuestros clientes</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {TESTIMONIALS.map((t, i) => (
                <div key={i} className="bg-[#fafbfa] rounded-2xl p-6 border border-slate-100">
                  <div className="flex items-center gap-0.5 mb-3">
                    {[...Array(5)].map((_, s) => (
                      <Star key={s} weight="fill" className="w-3.5 h-3.5 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm text-slate-700 font-light leading-relaxed mb-4 italic">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                      <p className="text-xs text-slate-500">{t.location}</p>
                    </div>
                    <span className="text-[10px] font-semibold text-[#3d7a47] bg-[#d1e3d4]/60 px-2 py-1 rounded-full">
                      {t.plan}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-400 mt-5">*Los nombres han sido cambiados para proteger la privacidad de nuestros clientes.</p>
          </div>
        </section>

        {/* ── State availability ───────────────────────────────────────── */}
        <section className="max-w-5xl mx-auto px-5 lg:px-8 py-10">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col sm:flex-row sm:items-start gap-4">
            <MapPin weight="duotone" className="w-6 h-6 text-[#3d7a47] shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-slate-800 mb-1">Disponibilidad de compra directa en línea</p>
              <p className="text-sm text-slate-600 font-light leading-relaxed">
                La compra directa en línea está disponible en:{' '}
                <strong className="font-semibold text-slate-800">Nueva Jersey, Florida, Iowa, Nevada, Pensilvania, Rhode Island y Texas.</strong>{' '}
                Para residentes de otros estados, un asesor en español te guiará en el proceso sin costo.
              </p>
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────────── */}
        <section className="max-w-5xl mx-auto px-5 lg:px-8 py-14 md:py-20">
          <h2 className="text-3xl md:text-4xl font-light text-slate-900 tracking-tight mb-10">
            Preguntas{' '}
            <span className="font-editorial-italic text-[#3d7a47]">frecuentes</span>
          </h2>
          <div className="space-y-3 max-w-3xl">
            {FAQ.map((item, i) => (
              <div key={i} className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="font-medium text-slate-900 text-sm pr-4">{item.q}</span>
                  <span className={`text-slate-400 text-lg transition-transform duration-200 shrink-0 ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5">
                    <p className="text-sm text-slate-600 font-light leading-relaxed">{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── Footer ───────────────────────────────────────────────────── */}
        <footer className="bg-[#0f1a12] text-white">
          <div className="max-w-5xl mx-auto px-5 lg:px-8 py-10">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-8">
              <div>
                <div className="mb-2">
                  <img src="/logo.png" alt="Maria Fernanda Insurance Consulting" className="h-8 w-auto brightness-0 invert" />
                </div>
                <p className="text-xs text-slate-400 font-light mb-4">Seguros para la comunidad hispana · Sin SSN · ITIN aceptado</p>
                <button
                  onClick={() => setQuoteOpen(true)}
                  className="px-4 py-2 rounded-full bg-white hover:bg-slate-100 text-slate-900 text-xs font-semibold transition-all"
                >
                  Cotizar gratis
                </button>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3">Nuestros Seguros</p>
                <div className="grid grid-cols-2 gap-x-8 gap-y-1.5">
                  {[
                    { href: '/seguros/auto',              label: 'Seguro de Auto' },
                    { href: '/seguros/vida',              label: 'Seguro de Vida' },
                    { href: '/seguros/salud',             label: 'Seguro de Salud' },
                    { href: '/seguros/dental',            label: 'Seguro Dental' },
                    { href: '/seguros/mascotas',          label: 'Seguro de Mascotas' },
                    { href: '/seguros/auto-comercial',    label: 'Auto Comercial' },
                    { href: '/seguros/comercial',         label: 'Seguro Comercial' },
                    { href: '/seguros/paquete-casa-auto', label: 'Paquete Casa + Auto' },
                    { href: '/seguros/proteccion-extra',  label: 'Protección Extra' },
                  ].map(({ href, label }) => (
                    <Link key={href} href={href} className="text-xs text-slate-400 hover:text-white transition-colors">
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="border-t border-slate-800 mt-8 pt-4">
              <p className="text-xs text-slate-500 font-light">
                Los precios son referenciales. Cobertura, términos y condiciones varían por estado y sujetos a aprobación.
                Maria Fernanda Insurance Consulting actúa como agente afiliado de Fetch Pet Insurance en los estados indicados. Sujeto a términos y condiciones.
              </p>
            </div>
          </div>
        </footer>
      </main>

      <QuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} initialType="Mascotas" />
    </>
  );
}
