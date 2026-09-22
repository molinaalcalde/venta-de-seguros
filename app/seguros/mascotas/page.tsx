'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  PawPrint,
  CheckCircle,
  Stethoscope,
  FirstAidKit,
  Syringe,
  Pill,
  ArrowRight,
  MapPin,
  ArrowLeft,
} from '@phosphor-icons/react';
import QuoteModal from '@/components/QuoteModal';

// ── Affiliate config ────────────────────────────────────────────────────────
const FETCH_URL =
  'https://www.fetchpet.com/mypet?a=FC87573&utm_source=firstconnect&utm_medium=brokerportal&utm_campaign=firstconnect_email&c=firstconnect&p=firstconnect&v=FVPCTRL';

const FETCH_STATES = new Set(['NJ', 'FL', 'IA', 'NV', 'PA', 'RI', 'TX']);

const STATE_NAMES: Record<string, string> = {
  NJ: 'Nueva Jersey',
  FL: 'Florida',
  IA: 'Iowa',
  NV: 'Nevada',
  PA: 'Pensilvania',
  RI: 'Rhode Island',
  TX: 'Texas',
};

// ── FAQ data ────────────────────────────────────────────────────────────────
const FAQ = [
  {
    q: '¿Necesito número de seguro social para asegurar a mi mascota?',
    a: 'No. Puedes contratar el seguro de mascotas con tu ITIN (Número de Identificación del Contribuyente Individual). No se requiere SSN.',
  },
  {
    q: '¿Cómo funciona VetDirect™ — el pago directo a la clínica?',
    a: 'Con VetDirect™, nosotros pagamos directamente a la clínica veterinaria asociada. Tú llevas a tu mascota, recibes la atención, y nosotros cubrimos el costo. No necesitas adelantar dinero ni esperar semanas para un reembolso.',
  },
  {
    q: '¿Cuánto cuesta el seguro de mascotas?',
    a: 'Los planes comienzan desde $29/mes dependiendo de la raza, edad y estado de salud de tu mascota. El precio puede variar según el estado y el nivel de cobertura elegido. Sujeto a términos y condiciones.',
  },
  {
    q: '¿El seguro cubre enfermedades preexistentes?',
    a: 'Las enfermedades preexistentes generalmente no están cubiertas durante los primeros 6 a 12 meses de la póliza. Las condiciones nuevas y accidentes quedan cubiertos desde el inicio. Consulta con un asesor para conocer los detalles completos.',
  },
  {
    q: '¿Qué razas de perros y gatos cubre el seguro?',
    a: 'Cubrimos la gran mayoría de razas de perros y gatos. Algunas razas consideradas de alto riesgo pueden requerir una evaluación adicional. Contáctanos para confirmar la elegibilidad de tu mascota.',
  },
  {
    q: '¿Mi información personal se comparte con el gobierno o migración?',
    a: 'No. Tu información personal es 100% confidencial. Nunca la compartimos con ICE ni ninguna agencia gubernamental. Cumplimos con todas las regulaciones estatales de privacidad de seguros.',
  },
];

// ── Coverage items ──────────────────────────────────────────────────────────
const COVERAGE = [
  { icon: Stethoscope, label: 'Consultas veterinarias' },
  { icon: FirstAidKit, label: 'Emergencias y hospitalizaciones' },
  { icon: CheckCircle, label: 'Cirugías y procedimientos' },
  { icon: Syringe, label: 'Vacunas de rutina' },
  { icon: Pill, label: 'Medicamentos recetados' },
  { icon: CheckCircle, label: 'Diagnósticos y laboratorios' },
];

export default function MascotasPage() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [userState, setUserState] = useState<string | null>(null);
  const [geoLoading, setGeoLoading] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);

  // Detect user's state via IP
  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then(r => r.json())
      .then((d) => {
        if (d.region_code) setUserState(d.region_code);
      })
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

  // Schema JSON-LD
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Seguro de Mascotas VetDirect™',
            description:
              'Seguro de mascotas con pago directo a la clínica veterinaria. Sin SSN requerido. Acepta ITIN. Planes desde $29/mes.',
            provider: {
              '@type': 'InsuranceAgency',
              name: 'Aegis National Assurance',
              url: 'https://venta-de-seguros.vercel.app',
            },
            areaServed: { '@type': 'Country', name: 'United States' },
            offers: {
              '@type': 'Offer',
              price: '29',
              priceCurrency: 'USD',
              priceSpecification: {
                '@type': 'UnitPriceSpecification',
                price: '29',
                priceCurrency: 'USD',
                unitText: 'mes',
              },
            },
          }),
        }}
      />

      {/* ── Navbar ───────────────────────────────────────────────────────── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm'
            : 'bg-white border-b border-slate-100'
        }`}
      >
        <div className="max-w-5xl mx-auto px-5 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <Link href="/" className="flex items-center gap-2 group">
              <ArrowLeft weight="regular" className="w-4 h-4 text-slate-400 group-hover:text-slate-700 transition-colors" />
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full border-[2px] border-slate-800 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-800"></span>
                </div>
                <span className="font-semibold text-sm text-slate-900 tracking-tight">Aegis</span>
              </div>
            </Link>
            <button
              onClick={() => setQuoteOpen(true)}
              className="px-4 py-2 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-all shadow-sm"
            >
              Cotizar gratis
            </button>
          </div>
        </div>
      </header>

      <main className="pt-14 bg-[#fafbfa] min-h-screen">

        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="relative bg-white border-b border-slate-100 overflow-hidden">
          {/* Soft sage tint background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#e8f0e9]/60 via-white to-white pointer-events-none" />
          <div className="relative max-w-5xl mx-auto px-5 lg:px-8 py-16 md:py-24">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-[#d1e3d4]/60 text-[#2d5a35] text-xs font-semibold px-3.5 py-1.5 rounded-full mb-6">
                <PawPrint weight="duotone" className="w-4 h-4" />
                VetDirect™ · Pago directo a la clínica
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-slate-900 tracking-tight leading-[1.1] mb-5">
                Seguro de Mascotas{' '}
                <span className="font-editorial-italic text-[#3d7a47]">sin adelantar dinero</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed mb-8">
                Lleva a tu perro o gato al veterinario y nosotros pagamos directamente a la clínica.
                Sin esperar reembolsos, sin formularios complicados. Sin SSN requerido.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-3 mb-10">
                {['Sin SSN requerido', 'Acepta ITIN', 'Desde $29/mes', 'Atención en español'].map((b) => (
                  <span key={b} className="text-xs font-medium text-slate-700 bg-white border border-slate-200 px-3 py-1 rounded-full shadow-sm">
                    {b}
                  </span>
                ))}
              </div>

              {/* State-gated CTA */}
              {geoLoading ? (
                <div className="h-12 w-56 bg-slate-100 animate-pulse rounded-full" />
              ) : isEligibleState ? (
                <div className="space-y-3">
                  <a
                    href={FETCH_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#2d5a35] hover:bg-[#245030] text-white font-semibold text-sm transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                  >
                    <PawPrint weight="fill" className="w-4 h-4" />
                    Obtener seguro para mi mascota
                    <ArrowRight weight="bold" className="w-4 h-4" />
                  </a>
                  <p className="text-xs text-slate-500 flex items-center gap-1.5">
                    <MapPin weight="duotone" className="w-3.5 h-3.5 text-[#3d7a47]" />
                    Disponible en {stateName} — compra directa en línea
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  <button
                    onClick={() => setQuoteOpen(true)}
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                  >
                    <PawPrint weight="fill" className="w-4 h-4" />
                    Cotizar Seguro de Mascotas
                    <ArrowRight weight="bold" className="w-4 h-4" />
                  </button>
                  <p className="text-xs text-slate-500">
                    Gratis · Sin compromiso · Respuesta en 24 horas
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ── 3 Feature highlights ─────────────────────────────────────── */}
        <section className="max-w-5xl mx-auto px-5 lg:px-8 py-14 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🏥',
                title: 'Pago Directo VetDirect™',
                desc: 'Nosotros le pagamos directamente a la clínica veterinaria. Tú no adelantas nada. No hay formularios de reembolso.',
              },
              {
                icon: '📋',
                title: 'Cobertura Completa',
                desc: 'Cubre consultas, emergencias, cirugías, vacunas, medicamentos y diagnósticos de laboratorio. Sujeto a términos y condiciones.',
              },
              {
                icon: '🔒',
                title: 'Privacidad Garantizada',
                desc: 'Tu información es 100% confidencial. Nunca la compartimos con migración ni con ninguna agencia del gobierno.',
              },
            ].map((f) => (
              <div key={f.title} className="bg-white rounded-2xl p-7 border border-slate-200/70 shadow-sm">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="font-semibold text-slate-900 text-base mb-2">{f.title}</h3>
                <p className="text-sm text-slate-600 font-light leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── What's covered ────────────────────────────────────────────── */}
        <section className="bg-white border-y border-slate-100">
          <div className="max-w-5xl mx-auto px-5 lg:px-8 py-14 md:py-20">
            <div className="max-w-xl mb-10">
              <h2 className="text-3xl md:text-4xl font-light text-slate-900 tracking-tight mb-3">
                ¿Qué está{' '}
                <span className="font-editorial-italic text-[#3d7a47]">cubierto?</span>
              </h2>
              <p className="text-slate-600 font-light text-sm leading-relaxed">
                Cobertura integral para que tu perro o gato esté protegido en cualquier situación.
                Sujeto a términos y condiciones de la póliza.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {COVERAGE.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3 bg-[#fafbfa] rounded-xl px-4 py-3.5 border border-slate-100">
                  <Icon weight="duotone" className="w-5 h-5 text-[#3d7a47] shrink-0" />
                  <span className="text-sm text-slate-700 font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── How VetDirect works ───────────────────────────────────────── */}
        <section className="max-w-5xl mx-auto px-5 lg:px-8 py-14 md:py-20">
          <div className="max-w-xl mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-slate-900 tracking-tight mb-3">
              Así de{' '}
              <span className="font-editorial-italic text-[#3d7a47]">sencillo</span>{' '}
              funciona
            </h2>
            <p className="text-slate-600 font-light text-sm">
              Con VetDirect™ el proceso es simple y sin estrés.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                step: '1',
                title: 'Contrata tu plan',
                desc: 'Elige tu cobertura en línea o con un asesor en español. Sin SSN. Sin burocracia.',
              },
              {
                step: '2',
                title: 'Lleva a tu mascota',
                desc: 'Cuando tu perro o gato necesite atención, ve a cualquier clínica veterinaria asociada.',
              },
              {
                step: '3',
                title: 'Nosotros pagamos',
                desc: 'Con VetDirect™ le pagamos directamente a la clínica. Tú te llevas a tu mascota a casa, sin deudas.',
              },
            ].map((s) => (
              <div key={s.step} className="relative">
                <div className="w-10 h-10 rounded-full bg-[#2d5a35] text-white text-sm font-bold flex items-center justify-center mb-4">
                  {s.step}
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{s.title}</h3>
                <p className="text-sm text-slate-600 font-light leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Geo-gated CTA block ───────────────────────────────────────── */}
        <section className="bg-[#1a3320] text-white">
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
                    Puedes contratar tu seguro de mascotas directamente en línea hoy mismo.
                    Proceso 100% digital, sin llamadas ni papeleos.
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
                  <p className="text-xs text-white/40 mt-4">
                    Serás redirigido al portal seguro de Fetch Pet Insurance · Aegis afiliado certificado
                  </p>
                </>
              ) : (
                <>
                  <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">
                    Protege a tu mascota{' '}
                    <span className="font-editorial-italic text-[#7db887]">hoy mismo</span>
                  </h2>
                  <p className="text-white/70 font-light mb-8 text-base">
                    Un asesor en español te guía en todo el proceso.
                    Sin SSN, sin burocracia. Cotiza gratis en minutos.
                  </p>
                  <button
                    onClick={() => setQuoteOpen(true)}
                    className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#7db887] hover:bg-[#8fc99a] text-[#1a3320] font-bold text-sm transition-all shadow-xl hover:-translate-y-0.5"
                  >
                    <PawPrint weight="fill" className="w-5 h-5" />
                    Cotizar Seguro de Mascotas gratis
                    <ArrowRight weight="bold" className="w-4 h-4" />
                  </button>
                  <p className="text-xs text-white/40 mt-4">
                    Sin compromiso · Respuesta en menos de 24 horas
                  </p>
                </>
              )}
            </div>
          </div>
        </section>

        {/* ── State availability note ───────────────────────────────────── */}
        <section className="bg-white border-b border-slate-100">
          <div className="max-w-5xl mx-auto px-5 lg:px-8 py-10">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <MapPin weight="duotone" className="w-6 h-6 text-[#3d7a47] shrink-0" />
              <div>
                <p className="text-sm font-semibold text-slate-800 mb-0.5">Disponibilidad de compra directa en línea</p>
                <p className="text-sm text-slate-600 font-light">
                  La compra directa en línea está disponible en:{' '}
                  <strong className="font-semibold">Nueva Jersey, Florida, Iowa, Nevada, Pensilvania, Rhode Island y Texas.</strong>{' '}
                  Para residentes de otros estados, un asesor en español te guiará en el proceso.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────────── */}
        <section className="max-w-5xl mx-auto px-5 lg:px-8 py-14 md:py-20">
          <div className="max-w-xl mb-10">
            <h2 className="text-3xl md:text-4xl font-light text-slate-900 tracking-tight mb-3">
              Preguntas{' '}
              <span className="font-editorial-italic text-[#3d7a47]">frecuentes</span>
            </h2>
          </div>
          <div className="space-y-3 max-w-3xl">
            {FAQ.map((item, i) => (
              <div
                key={i}
                className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden"
              >
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
        <footer className="bg-slate-900 text-white">
          <div className="max-w-5xl mx-auto px-5 lg:px-8 py-10">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-4 h-4 rounded-full border-[2px] border-white/80 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/80"></span>
                  </div>
                  <span className="font-semibold text-sm tracking-tight">Aegis National Assurance</span>
                </div>
                <p className="text-xs text-slate-400 font-light">
                  Seguros para la comunidad hispana · Sin SSN requerido · ITIN aceptado
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Link href="/" className="text-xs text-slate-400 hover:text-white transition-colors">
                  Inicio
                </Link>
                <button
                  onClick={() => setQuoteOpen(true)}
                  className="px-4 py-2 rounded-full bg-white hover:bg-slate-100 text-slate-900 text-xs font-semibold transition-all"
                >
                  Cotizar gratis
                </button>
              </div>
            </div>
            <div className="border-t border-slate-800 mt-8 pt-6">
              <p className="text-xs text-slate-500 font-light leading-relaxed">
                Los precios mostrados son referenciales y están sujetos a aprobación. La disponibilidad de cobertura, términos y condiciones varían por estado.
                Aegis National Assurance actúa como agente afiliado de Fetch Pet Insurance en los estados indicados. Sujeto a términos y condiciones.
              </p>
            </div>
          </div>
        </footer>
      </main>

      {/* Quote Modal */}
      <QuoteModal
        open={quoteOpen}
        onClose={() => setQuoteOpen(false)}
        initialType="Mascotas"
      />
    </>
  );
}
