'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  ArrowLeft, ArrowRight, CheckCircle, Star,
  Shield, Lock, Headset, CreditCard,
} from '@phosphor-icons/react';
import QuoteModal, { type InsType } from '@/components/QuoteModal';

/* ─── Theme map (all classes literal so Tailwind JIT includes them) ─── */
const THEMES = {
  blue: {
    badgeBg: 'bg-blue-100/60', badgeText: 'text-blue-800',
    heroBg: 'from-blue-50/60', iconText: 'text-blue-600',
    stepBg: 'bg-blue-700', accentBorder: 'border-blue-200',
  },
  orange: {
    badgeBg: 'bg-orange-100/60', badgeText: 'text-orange-800',
    heroBg: 'from-orange-50/60', iconText: 'text-orange-600',
    stepBg: 'bg-orange-600', accentBorder: 'border-orange-200',
  },
  rose: {
    badgeBg: 'bg-rose-100/60', badgeText: 'text-rose-800',
    heroBg: 'from-rose-50/60', iconText: 'text-rose-600',
    stepBg: 'bg-rose-600', accentBorder: 'border-rose-200',
  },
  emerald: {
    badgeBg: 'bg-emerald-100/60', badgeText: 'text-emerald-800',
    heroBg: 'from-emerald-50/60', iconText: 'text-emerald-600',
    stepBg: 'bg-emerald-700', accentBorder: 'border-emerald-200',
  },
  cyan: {
    badgeBg: 'bg-cyan-100/60', badgeText: 'text-cyan-800',
    heroBg: 'from-cyan-50/60', iconText: 'text-cyan-600',
    stepBg: 'bg-cyan-700', accentBorder: 'border-cyan-200',
  },
  violet: {
    badgeBg: 'bg-violet-100/60', badgeText: 'text-violet-800',
    heroBg: 'from-violet-50/60', iconText: 'text-violet-600',
    stepBg: 'bg-violet-700', accentBorder: 'border-violet-200',
  },
  purple: {
    badgeBg: 'bg-purple-100/60', badgeText: 'text-purple-800',
    heroBg: 'from-purple-50/60', iconText: 'text-purple-600',
    stepBg: 'bg-purple-700', accentBorder: 'border-purple-200',
  },
  slate: {
    badgeBg: 'bg-slate-200/60', badgeText: 'text-slate-800',
    heroBg: 'from-slate-100/60', iconText: 'text-slate-600',
    stepBg: 'bg-slate-700', accentBorder: 'border-slate-300',
  },
} as const;

export type ThemeKey = keyof typeof THEMES;

/* ─── Config interface ──────────────────────────────────────────────── */
export interface InsurancePageConfig {
  quoteType: InsType;
  badge: string;
  heroLine1: string;
  heroItalic: string;
  heroSubtitle: string;
  trustBadges: string[];
  priceFrom: string;
  eligibilityTitle: string;
  eligibilityText: string;
  eligibilityItems: string[];
  features: { emoji: string; title: string; desc: string }[];
  coverageItems: string[];
  steps: { title: string; desc: string }[];
  testimonials: { name: string; location: string; text: string }[];
  faq: { q: string; a: string }[];
  ctaTitle: string;
  ctaItalic: string;
  ctaSubtitle: string;
  ctaButton: string;
  theme: ThemeKey;
  schema: { description: string; price?: string };
}

/* ─── Component ─────────────────────────────────────────────────────── */
export default function InsurancePage({ config }: { config: InsurancePageConfig }) {
  const [quoteOpen, setQuoteOpen]   = useState(false);
  const [openFaq, setOpenFaq]       = useState<number | null>(null);
  const [scrolled, setScrolled]     = useState(false);
  const t = THEMES[config.theme];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: config.badge,
    description: config.schema.description,
    provider: {
      '@type': 'InsuranceAgency',
      name: 'Maria Fernanda Insurance Consulting',
      url: 'https://venta-de-seguros.vercel.app',
    },
    areaServed: { '@type': 'Country', name: 'United States' },
    ...(config.schema.price
      ? { offers: { '@type': 'Offer', price: config.schema.price, priceCurrency: 'USD' } }
      : {}),
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: config.faq.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── Navbar ──────────────────────────────────────────────────── */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm' : 'bg-white border-b border-slate-100'
      }`}>
        <div className="max-w-5xl mx-auto px-5 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <Link href="/" className="flex items-center gap-2 group">
              <ArrowLeft weight="regular" className="w-4 h-4 text-slate-400 group-hover:text-slate-700 transition-colors" />
              <img src="/logo.png" alt="Maria Fernanda Insurance Consulting" className="h-8 w-auto" />
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

        {/* ── Hero ──────────────────────────────────────────────────── */}
        <section className="relative bg-white border-b border-slate-100 overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-br ${t.heroBg} via-white to-white pointer-events-none`} />
          <div className="relative max-w-5xl mx-auto px-5 lg:px-8 py-16 md:py-24">
            <div className="max-w-2xl">
              <div className={`inline-flex items-center gap-2 ${t.badgeBg} ${t.badgeText} text-xs font-semibold px-3.5 py-1.5 rounded-full mb-6`}>
                {config.badge}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-slate-900 tracking-tight leading-[1.1] mb-5">
                {config.heroLine1}{' '}
                <span className={`font-editorial-italic ${t.iconText}`}>{config.heroItalic}</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed mb-8">
                {config.heroSubtitle}
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                {config.trustBadges.map((b) => (
                  <span key={b} className="text-xs font-medium text-slate-700 bg-white border border-slate-200 px-3 py-1 rounded-full shadow-sm">
                    {b}
                  </span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <button
                  onClick={() => setQuoteOpen(true)}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  {config.ctaButton}
                  <ArrowRight weight="bold" className="w-4 h-4" />
                </button>
                <span className="text-xs text-slate-500">{config.priceFrom} · Sin compromiso</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Eligibility ──────────────────────────────────────────── */}
        <section className="max-w-5xl mx-auto px-5 lg:px-8 py-14 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-slate-900 tracking-tight mb-4">
                {config.eligibilityTitle}
              </h2>
              <p className="text-slate-600 font-light text-sm leading-relaxed mb-6">{config.eligibilityText}</p>
              <ul className="space-y-3">
                {config.eligibilityItems.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle weight="duotone" className={`w-5 h-5 ${t.iconText} shrink-0 mt-0.5`} />
                    <span className="text-sm text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={`rounded-2xl p-7 border ${t.accentBorder} bg-white shadow-sm`}>
              <div className="flex items-center gap-3 mb-4">
                <Lock weight="duotone" className={`w-6 h-6 ${t.iconText}`} />
                <span className="font-semibold text-slate-900 text-sm">Tu privacidad, garantizada</span>
              </div>
              <p className="text-sm text-slate-600 font-light leading-relaxed">
                Tu información personal es 100% confidencial. Nunca la compartimos con ICE, la migra
                ni ninguna agencia gubernamental sin orden judicial. Cumplimos con todas las leyes
                estatales de privacidad de seguros.
              </p>
            </div>
          </div>
        </section>

        {/* ── 3 Feature highlights ─────────────────────────────────── */}
        <section className="bg-white border-y border-slate-100">
          <div className="max-w-5xl mx-auto px-5 lg:px-8 py-14 md:py-18">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-slate-100">
              {config.features.map((f) => (
                <div key={f.title} className="px-6 py-8 md:py-6 first:pl-0 last:pr-0">
                  <div className="text-3xl mb-4">{f.emoji}</div>
                  <h3 className="font-semibold text-slate-900 text-base mb-2">{f.title}</h3>
                  <p className="text-sm text-slate-600 font-light leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Coverage grid ─────────────────────────────────────────── */}
        <section className="max-w-5xl mx-auto px-5 lg:px-8 py-14 md:py-20">
          <h2 className="text-3xl md:text-4xl font-light text-slate-900 tracking-tight mb-2">
            ¿Qué está{' '}
            <span className={`font-editorial-italic ${t.iconText}`}>cubierto?</span>
          </h2>
          <p className="text-slate-400 font-light text-xs mb-8">Sujeto a términos y condiciones de la póliza.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {config.coverageItems.map((item) => (
              <div key={item} className="flex items-center gap-3 bg-white rounded-xl px-4 py-3.5 border border-slate-100 shadow-sm">
                <CheckCircle weight="duotone" className={`w-4 h-4 ${t.iconText} shrink-0`} />
                <span className="text-sm text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── How it works ─────────────────────────────────────────── */}
        <section className="bg-white border-y border-slate-100">
          <div className="max-w-5xl mx-auto px-5 lg:px-8 py-14 md:py-20">
            <h2 className="text-3xl md:text-4xl font-light text-slate-900 tracking-tight mb-12">
              Así de{' '}
              <span className={`font-editorial-italic ${t.iconText}`}>sencillo</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {config.steps.map((s, i) => (
                <div key={i}>
                  <div className={`w-10 h-10 rounded-full ${t.stepBg} text-white text-sm font-bold flex items-center justify-center mb-4`}>
                    {i + 1}
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">{s.title}</h3>
                  <p className="text-sm text-slate-600 font-light leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Por qué nosotros ─────────────────────────────────────── */}
        <section className="max-w-5xl mx-auto px-5 lg:px-8 py-14 md:py-20">
          <h2 className="text-3xl md:text-4xl font-light text-slate-900 tracking-tight mb-10">
            ¿Por qué{' '}
            <span className="font-editorial-italic text-slate-400">elegirnos?</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { icon: Shield,   title: 'Sin SSN',        desc: 'Aceptamos ITIN y pasaporte como identificación válida.' },
              { icon: Lock,     title: '100% Privado',   desc: 'Tu información nunca se comparte con migración ni el gobierno.' },
              { icon: Headset,  title: 'Todo en Español',desc: 'Agentes reales que hablan tu idioma, listos para ayudarte.' },
              { icon: CreditCard, title: 'Sin Sorpresas', desc: 'Tarifas claras, sin letra pequeña, sin cobros ocultos.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-6 border border-slate-200/70 shadow-sm">
                <Icon weight="duotone" className={`w-6 h-6 ${t.iconText} mb-3`} />
                <h3 className="font-semibold text-slate-900 text-sm mb-1.5">{title}</h3>
                <p className="text-xs text-slate-500 font-light leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Testimonials ─────────────────────────────────────────── */}
        <section className="bg-white border-y border-slate-100">
          <div className="max-w-5xl mx-auto px-5 lg:px-8 py-14 md:py-20">
            <h2 className="text-3xl md:text-4xl font-light text-slate-900 tracking-tight mb-10">
              Lo que dicen{' '}
              <span className="font-editorial-italic text-slate-400">nuestros clientes</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {config.testimonials.map((t_, i) => (
                <div key={i} className="bg-[#fafbfa] rounded-2xl p-6 border border-slate-100">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, s) => (
                      <Star key={s} weight="fill" className="w-3.5 h-3.5 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm text-slate-700 font-light leading-relaxed mb-4 italic">
                    &ldquo;{t_.text}&rdquo;
                  </p>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{t_.name}</p>
                    <p className="text-xs text-slate-500">{t_.location}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-400 mt-5">*Los nombres han sido cambiados para proteger la privacidad de nuestros clientes.</p>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────── */}
        <section className="max-w-5xl mx-auto px-5 lg:px-8 py-14 md:py-20">
          <h2 className="text-3xl md:text-4xl font-light text-slate-900 tracking-tight mb-10">
            Preguntas{' '}
            <span className={`font-editorial-italic ${t.iconText}`}>frecuentes</span>
          </h2>
          <div className="space-y-3 max-w-3xl">
            {config.faq.map((item, i) => (
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

        {/* ── CTA dark ─────────────────────────────────────────────── */}
        <section className="bg-slate-900 text-white">
          <div className="max-w-5xl mx-auto px-5 lg:px-8 py-16 md:py-20 text-center">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">
              {config.ctaTitle}{' '}
              <span className="font-editorial-italic text-slate-400">{config.ctaItalic}</span>
            </h2>
            <p className="text-white/70 font-light mb-8 text-base max-w-xl mx-auto">{config.ctaSubtitle}</p>
            <button
              onClick={() => setQuoteOpen(true)}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white hover:bg-slate-100 text-slate-900 font-bold text-sm transition-all shadow-xl hover:-translate-y-0.5"
            >
              {config.ctaButton}
              <ArrowRight weight="bold" className="w-4 h-4" />
            </button>
            <p className="text-xs text-white/40 mt-4">Gratis · Sin compromiso · Respuesta en menos de 24 horas</p>
          </div>
        </section>

        {/* ── Footer ───────────────────────────────────────────────── */}
        <footer className="bg-[#0f1a12] text-white">
          <div className="max-w-5xl mx-auto px-5 lg:px-8 py-10">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-8">
              <div>
                <div className="mb-1.5">
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
                Maria Fernanda Insurance Consulting es un agente de seguros con licencia.
              </p>
            </div>
          </div>
        </footer>
      </main>

      <QuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} initialType={config.quoteType} />
    </>
  );
}
