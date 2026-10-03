'use client';

import { useState, useEffect, useRef, Fragment } from 'react';
import Link from 'next/link';
import {
  ArrowLeft, ArrowRight, CheckCircle, Star,
  type Icon,
} from '@phosphor-icons/react';
import QuoteModal, { type InsType } from '@/components/QuoteModal';
import LanguageSwitcher from '@/components/LanguageSwitcher';

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
  eligibilityTabs?: { label: string; icon: Icon; items: string[] }[];
  badgeIcon?: Icon;
  features: { icon: Icon; title: string; desc: string }[];
  coverageItems: string[];
  industrySections?: { emoji: string; industry: string; highlight: string; coverages: string[] }[];
  steps: { title: string; desc: string }[];
  testimonials: { name: string; location: string; text: string }[];
  faq: { q: string; a: string }[];
  ctaTitle: string;
  ctaItalic: string;
  ctaSubtitle: string;
  ctaButton: string;
  theme: ThemeKey;
  heroVideo?: string;
  heroVideoMobile?: string;
  schema: { description: string; price?: string };
  stats?: { value: string; label: string; source: string }[];
  featuresHeading?: { label: string; title: string; italic: string; subtitle?: string };
  agentComparison?: {
    heading: string;
    headingItalic?: string;
    independentLabel: string;
    directLabel: string;
    rows: { independent: string; direct: string }[];
    testimonialIndex?: number;
    trustLine?: string;
  };
}

/* ─── Scroll reveal hook ─────────────────────────────────────────────── */
function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* ─── Reveal wrapper component ───────────────────────────────────────── */
function RevealWrapper({ children, className }: { children: React.ReactNode; className?: string }) {
  const { ref, visible } = useReveal();
  return (
    <div ref={ref} className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className ?? ''}`}>
      {children}
    </div>
  );
}

/* ─── Eligibility tabs section ──────────────────────────────────────── */
function EligibilitySection({ items, tabs, isEn, stepBg, iconText, accentBorder, onQuote, ctaButton }: {
  items: string[]; tabs?: { label: string; icon: Icon; items: string[] }[];
  isEn: boolean; stepBg: string; iconText: string; accentBorder: string;
  onQuote: () => void; ctaButton: string;
}) {
  const { ref, visible } = useReveal(0.08);
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);

  /* If no tabs provided, auto-group items into pairs */
  const resolvedTabs = tabs ?? autoGroupItems(items, isEn);

  const handleTab = (i: number) => {
    if (i === active) return;
    setAnimating(true);
    setTimeout(() => { setActive(i); setAnimating(false); }, 200);
  };

  return (
    <section className="bg-white border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-5 lg:px-8 py-16 md:py-20">
        <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-[0.15em] mb-8">
          {isEn ? 'Does any of this sound familiar?' : '¿Te suena alguna de estas?'}
        </p>

        {/* Tab pills */}
        <div ref={ref} className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1 scrollbar-hide">
            {resolvedTabs.map((tab, i) => {
              const TabIcon = tab.icon;
              const isActive = i === active;
              return (
                <button
                  key={i}
                  onClick={() => handleTab(i)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 shrink-0 ${
                    isActive
                      ? `${stepBg} text-white shadow-sm`
                      : 'bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-700'
                  }`}
                >
                  <TabIcon weight={isActive ? 'fill' : 'regular'} className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Content card */}
          <div className={`mt-6 rounded-2xl border ${accentBorder} bg-slate-50/50 p-6 md:p-8 min-h-[160px] transition-all duration-200 ${
            animating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
          }`}>
            <div className="space-y-4">
              {resolvedTabs[active]?.items.map((item, j) => (
                <div key={j} className="flex items-start gap-3">
                  <CheckCircle weight="fill" className={`w-5 h-5 ${iconText} shrink-0 mt-0.5`} />
                  <p className="text-base md:text-lg text-slate-700 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8">
            <button
              onClick={onQuote}
              className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-full ${stepBg} text-white font-semibold text-sm hover:opacity-90 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150 shadow-sm`}
            >
              {ctaButton}
              <ArrowRight weight="bold" className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Auto-group string[] items into tab pairs for backward compat */
function autoGroupItems(items: string[], isEn: boolean): { label: string; icon: Icon; items: string[] }[] {
  const labels = isEn
    ? ['Your situation', 'Your coverage', 'Your options']
    : ['Tu situación', 'Tu cobertura', 'Tus opciones'];
  const icons: Icon[] = [Star, CheckCircle, ArrowRight];
  const tabs: { label: string; icon: Icon; items: string[] }[] = [];
  for (let i = 0; i < items.length; i += 2) {
    const idx = Math.min(Math.floor(i / 2), labels.length - 1);
    tabs.push({
      label: labels[idx] ?? labels[labels.length - 1],
      icon: icons[idx] ?? icons[icons.length - 1],
      items: items.slice(i, i + 2),
    });
  }
  return tabs;
}

/* ─── Agent comparison with scroll-reveal rows ─────────────────────── */
function AgentComparisonSection({ config, testimonials, ctaButton, isEn, theme, onQuote }: {
  config: NonNullable<InsurancePageConfig['agentComparison']>;
  testimonials: InsurancePageConfig['testimonials'];
  ctaButton: string; isEn: boolean;
  theme: typeof THEMES[ThemeKey]; onQuote: () => void;
}) {
  const { ref, visible } = useReveal(0.05);
  const idx = config.testimonialIndex ?? 0;
  const testi = testimonials[idx];

  return (
    <section className="bg-white border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-5 lg:px-8 py-14 md:py-20">
        <h2 className="text-3xl md:text-4xl font-light text-slate-900 tracking-tight mb-4">
          {config.heading}{' '}
          {config.headingItalic && (
            <span className={`font-editorial-italic ${theme.iconText}`}>{config.headingItalic}</span>
          )}
        </h2>

        {/* Column headers */}
        <div ref={ref} className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6">
            <p className={`text-xs font-bold uppercase tracking-[0.15em] ${theme.iconText}`}>
              {config.independentLabel}
            </p>
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400">
              {config.directLabel}
            </p>
          </div>

          {/* Rows with stagger reveal */}
          <div className="space-y-3">
            {config.rows.map((row, i) => (
              <div
                key={i}
                style={{ transitionDelay: visible ? `${i * 120}ms` : '0ms' }}
                className={`grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 transition-all duration-500 ease-out ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                {/* María Fernanda side */}
                <div className={`flex items-start gap-3 rounded-xl border-2 ${theme.accentBorder} bg-white px-5 py-4 shadow-md md:scale-[1.02] origin-left`}>
                  <CheckCircle weight="fill" className={`w-5 h-5 ${theme.iconText} shrink-0 mt-0.5`} />
                  <span className="text-sm text-slate-800 font-medium leading-snug">{row.independent}</span>
                </div>
                {/* Direct side */}
                <div className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50/70 px-5 py-4">
                  <span className="w-5 h-5 shrink-0 mt-0.5 flex items-center justify-center text-slate-300 text-base leading-none">–</span>
                  <span className="text-sm text-slate-400 font-light leading-snug">{row.direct}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          {testi && (
            <div
              style={{ transitionDelay: visible ? `${config.rows.length * 120 + 200}ms` : '0ms' }}
              className={`mt-10 max-w-2xl transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <blockquote className={`pl-5 border-l-3 ${theme.accentBorder}`}>
                <p className="text-base text-slate-600 font-light italic leading-relaxed mb-2">
                  &ldquo;{testi.text}&rdquo;
                </p>
                <cite className={`text-sm not-italic font-medium ${theme.iconText}`}>
                  {testi.name} &middot; {testi.location}
                </cite>
              </blockquote>
            </div>
          )}

          {/* Trust line + CTA */}
          <div
            style={{ transitionDelay: visible ? `${config.rows.length * 120 + 400}ms` : '0ms' }}
            className={`mt-8 text-center transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <p className="text-xs text-slate-400 mb-5">
              {config.trustLine ?? (isEn
                ? 'No extra cost to you · No commitment · Response within 24 hours'
                : 'Sin costo adicional para ti · Sin compromiso · Respuesta en 24 horas')}
            </p>
            <button
              onClick={onQuote}
              className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-full ${theme.stepBg} text-white font-semibold text-sm hover:opacity-90 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150 shadow-sm`}
            >
              {ctaButton}
              <ArrowRight weight="bold" className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Component ─────────────────────────────────────────────────────── */
export default function InsurancePage({ config, lang = 'es' }: { config: InsurancePageConfig; lang?: string }) {
  const [quoteOpen, setQuoteOpen]   = useState(false);
  const [openFaq, setOpenFaq]       = useState<number | null>(null);
  const [scrolled, setScrolled]     = useState(false);
  const t = THEMES[config.theme];
  const isEn = lang === 'en';

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
      url: 'https://consultingbymf.com',
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

  const footerLinks = isEn ? [
    { href: '/en/seguros/auto',              label: 'Car Insurance' },
    { href: '/en/seguros/vida',              label: 'Life Insurance' },
    { href: '/en/seguros/salud',             label: 'Health Insurance' },
    { href: '/en/seguros/dental',            label: 'Dental Insurance' },
    { href: '/en/seguros/mascotas',          label: 'Pet Insurance' },
    { href: '/en/seguros/auto-comercial',    label: 'Commercial Auto' },
    { href: '/en/seguros/comercial',         label: 'Business Insurance' },
    { href: '/en/seguros/paquete-casa-auto', label: 'Home + Auto Bundle' },
    { href: '/en/seguros/proteccion-extra',  label: 'Umbrella Insurance' },
  ] : [
    { href: '/seguros/auto',              label: 'Seguro de Auto' },
    { href: '/seguros/vida',              label: 'Seguro de Vida' },
    { href: '/seguros/salud',             label: 'Seguro de Salud' },
    { href: '/seguros/dental',            label: 'Seguro Dental' },
    { href: '/seguros/mascotas',          label: 'Seguro de Mascotas' },
    { href: '/seguros/auto-comercial',    label: 'Auto Comercial' },
    { href: '/seguros/comercial',         label: 'Seguro Comercial' },
    { href: '/seguros/paquete-casa-auto', label: 'Paquete Casa + Auto' },
    { href: '/seguros/proteccion-extra',  label: 'Protección Extra' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── Navbar ──────────────────────────────────────────────────── */}
      {(() => {
        const navTransparent = !!config.heroVideo && !scrolled;
        return (
          <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled
              ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm'
              : config.heroVideo
                ? 'bg-transparent border-b border-transparent'
                : 'bg-white/70 backdrop-blur-sm border-b border-slate-100/60'
          }`}>
            <div className="max-w-5xl mx-auto px-5 lg:px-8">
              <div className="flex items-center justify-between h-14">
                <Link href={isEn ? '/en' : '/'} className="flex items-center gap-2 group">
                  <ArrowLeft weight="regular" className={`w-4 h-4 transition-colors ${navTransparent ? 'text-white/70 group-hover:text-white' : 'text-slate-400 group-hover:text-slate-700'}`} />
                  <img src="/logo.png" alt="Maria Fernanda Insurance Consulting" className={`h-8 w-auto transition-all duration-300 ${navTransparent ? 'brightness-0 invert' : ''}`} />
                </Link>
                <div className="flex items-center gap-3">
                  <LanguageSwitcher scrolled={!navTransparent} />
                  <button
                    onClick={() => setQuoteOpen(true)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold transition-all shadow-sm ${
                      navTransparent
                        ? 'bg-white/15 hover:bg-white/25 text-white border border-white/30 backdrop-blur-sm'
                        : 'bg-slate-900 hover:bg-slate-800 text-white'
                    }`}
                  >
                    {isEn ? 'Get a quote' : 'Cotizar gratis'}
                  </button>
                </div>
              </div>
            </div>
          </header>
        );
      })()}

      <main className={`${config.heroVideo ? '' : 'pt-14'} bg-[#fafbfa] min-h-screen`}>

        {/* ── Hero ──────────────────────────────────────────────────── */}
        <section className="relative border-b border-slate-100 overflow-hidden">
          {config.heroVideo ? (
            <>
              {/* Desktop video */}
              <video
                src={config.heroVideo}
                autoPlay muted loop playsInline
                className={`absolute inset-0 w-full h-full object-cover ${config.heroVideoMobile ? 'hidden md:block' : 'object-top md:object-center'}`}
              />
              {/* Mobile video (vertical) */}
              {config.heroVideoMobile && (
                <video
                  src={config.heroVideoMobile}
                  autoPlay muted loop playsInline
                  className="absolute inset-0 w-full h-full object-cover md:hidden"
                />
              )}
              <div className="absolute inset-0 bg-black/55" />
            </>
          ) : (
            <div className={`absolute inset-0 bg-gradient-to-br ${t.heroBg} via-white to-white pointer-events-none`} />
          )}
          <div className={`relative max-w-5xl mx-auto px-5 lg:px-8 py-20 md:py-32 ${config.heroVideo ? 'pt-28 md:pt-36' : ''}`}>
            <div className="max-w-2xl">
              <div className={`inline-flex items-center gap-2 ${config.heroVideo ? 'bg-white/15 text-white border border-white/20' : `${t.badgeBg} ${t.badgeText}`} text-xs font-semibold px-3.5 py-1.5 rounded-full mb-6 backdrop-blur-sm`}>
                {config.badgeIcon && <config.badgeIcon weight="bold" className="w-3.5 h-3.5 shrink-0" />}
                {config.badge}
              </div>
              <h1 className={`text-4xl md:text-5xl lg:text-[64px] font-light tracking-tight leading-[1.08] mb-8 ${config.heroVideo ? 'text-white' : 'text-slate-900'}`}>
                {config.heroLine1}{' '}
                <span className={`font-editorial-italic ${config.heroVideo ? 'text-white/90' : t.iconText}`}>{config.heroItalic}</span>
              </h1>
              {config.heroSubtitle && (
                <p className={`text-base font-light leading-relaxed mb-8 max-w-xl ${config.heroVideo ? 'text-white/75' : 'text-slate-600'}`}>
                  {config.heroSubtitle}
                </p>
              )}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <button
                  onClick={() => setQuoteOpen(true)}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white hover:bg-slate-100 text-slate-900 font-semibold text-sm transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-95"
                >
                  {config.ctaButton}
                  <ArrowRight weight="bold" className="w-4 h-4" />
                </button>
                <span className={`text-xs ${config.heroVideo ? 'text-white/60' : 'text-slate-400'}`}>
                  {config.priceFrom} {isEn ? '· No commitment' : '· Sin compromiso'}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Para quién (eligibility stagger) ─────────────────────── */}
        <EligibilitySection
          items={config.eligibilityItems}
          tabs={config.eligibilityTabs}
          isEn={isEn}
          stepBg={t.stepBg}
          iconText={t.iconText}
          accentBorder={t.accentBorder}
          onQuote={() => setQuoteOpen(true)}
          ctaButton={config.ctaButton}
        />

        {/* ── Stats (market data) ───────────────────────────────────── */}
        {config.stats && config.stats.length > 0 && (
          <section className="bg-white border-b border-slate-100">
            <div className="max-w-5xl mx-auto px-5 lg:px-8 py-14 md:py-20">
              <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-[0.15em] mb-10">
                {isEn ? 'The market reality' : 'La realidad del mercado'}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
                {config.stats.map((s, i) => (
                  <div key={i} className={`${i > 0 ? 'pt-8 sm:pt-0 sm:pl-12' : ''} ${i < config.stats!.length - 1 ? 'pb-8 sm:pb-0 sm:pr-12' : ''}`}>
                    <p className={`text-4xl md:text-5xl font-light tracking-tight ${t.iconText} mb-2`}>{s.value}</p>
                    <p className="text-sm text-slate-700 font-light leading-snug mb-2">{s.label}</p>
                    <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-[0.12em]">{s.source}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── Feature blocks (alternating) ─────────────────────────── */}
        <section className="bg-[#fafbfa] py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-5 lg:px-8">
            {config.featuresHeading && (
              <div className="mb-16 md:mb-20">
                <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-[0.15em] mb-4">
                  {config.featuresHeading.label}
                </p>
                <h2 className="text-3xl md:text-4xl font-light text-slate-900 tracking-tight mb-3">
                  {config.featuresHeading.title}{' '}
                  <span className={`font-editorial-italic ${t.iconText}`}>{config.featuresHeading.italic}</span>
                </h2>
                {config.featuresHeading.subtitle && (
                  <p className="text-slate-500 font-light text-base max-w-xl leading-relaxed">
                    {config.featuresHeading.subtitle}
                  </p>
                )}
              </div>
            )}
          </div>
          <div className="max-w-5xl mx-auto px-5 lg:px-8 space-y-16 md:space-y-24">
            {config.features.map((f, i) => {
              const isEven = i % 2 === 0;
              return (
                <RevealWrapper key={f.title} className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
                  {/* Icon panel */}
                  <div className={`flex items-center justify-center rounded-3xl bg-white border border-slate-100 shadow-sm h-52 md:h-64 ${isEven ? 'md:order-first' : 'md:order-last'}`}>
                    <f.icon weight="duotone" className={`w-20 h-20 ${t.iconText} opacity-80`} />
                  </div>
                  {/* Text */}
                  <div className={isEven ? 'md:order-last' : 'md:order-first'}>
                    <h2 className="text-2xl md:text-3xl font-light text-slate-900 tracking-tight mb-3">{f.title}</h2>
                    <p className="text-slate-600 font-light leading-relaxed text-base">{f.desc}</p>
                  </div>
                </RevealWrapper>
              );
            })}

            {/* CTA after features */}
            <RevealWrapper className="text-center mt-10">
              <button
                onClick={() => setQuoteOpen(true)}
                className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-full ${t.stepBg} text-white font-semibold text-sm hover:opacity-90 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150 shadow-sm`}
              >
                {config.ctaButton}
                <ArrowRight weight="bold" className="w-4 h-4" />
              </button>
            </RevealWrapper>
          </div>
        </section>

        {/* ── Agent comparison (scroll-reveal rows) ────────────────── */}
        {config.agentComparison && (
          <AgentComparisonSection
            config={config.agentComparison}
            testimonials={config.testimonials}
            ctaButton={config.ctaButton}
            isEn={isEn}
            theme={t}
            onQuote={() => setQuoteOpen(true)}
          />
        )}

        {/* ── Coverage grid ─────────────────────────────────────────── */}
        <section className="max-w-5xl mx-auto px-5 lg:px-8 py-14 md:py-20">
          <h2 className="text-3xl md:text-4xl font-light text-slate-900 tracking-tight mb-2">
            {isEn ? "What's" : '¿Qué está'}{' '}
            <span className={`font-editorial-italic ${t.iconText}`}>{isEn ? 'covered?' : 'cubierto?'}</span>
          </h2>
          <p className="text-slate-400 font-light text-xs mb-8">
            {isEn ? 'Subject to policy terms and conditions.' : 'Sujeto a términos y condiciones de la póliza.'}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {config.coverageItems.map((item) => (
              <div key={item} className="flex items-center gap-3 bg-white rounded-xl px-4 py-3.5 border border-slate-100 shadow-sm">
                <CheckCircle weight="duotone" className={`w-4 h-4 ${t.iconText} shrink-0`} />
                <span className="text-sm text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Industry sections (optional) ────────────────────────── */}
        {config.industrySections && config.industrySections.length > 0 && (
          <section className="max-w-5xl mx-auto px-5 lg:px-8 py-14 md:py-20">
            <h2 className="text-3xl md:text-4xl font-light text-slate-900 tracking-tight mb-2">
              {isEn ? 'Coverage by' : 'Cobertura por'}{' '}
              <span className={`font-editorial-italic ${t.iconText}`}>{isEn ? 'business type' : 'tipo de negocio'}</span>
            </h2>
            <p className="text-slate-500 font-light text-sm mb-10">
              {isEn ? 'Every industry has distinct risks. Your policy should reflect yours.' : 'Cada industria tiene riesgos distintos. Tu póliza debe reflejar los tuyos.'}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {config.industrySections.map((ind) => (
                <div key={ind.industry} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                  <div className="text-3xl mb-3">{ind.emoji}</div>
                  <h3 className="font-semibold text-slate-900 mb-1">{ind.industry}</h3>
                  <p className={`text-xs font-medium mb-4 ${t.iconText}`}>{ind.highlight}</p>
                  <ul className="space-y-2">
                    {ind.coverages.map((c) => (
                      <li key={c} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle weight="duotone" className={`w-3.5 h-3.5 ${t.iconText} shrink-0 mt-0.5`} />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── How it works ─────────────────────────────────────────── */}
        <section className="bg-white border-y border-slate-100">
          <div className="max-w-5xl mx-auto px-5 lg:px-8 py-14 md:py-20">
            <h2 className="text-3xl md:text-4xl font-light text-slate-900 tracking-tight mb-12">
              {isEn ? 'This is' : 'Así de'}{' '}
              <span className={`font-editorial-italic ${t.iconText}`}>{isEn ? 'how it works' : 'sencillo'}</span>
            </h2>
            {/* Desktop: flex con conectores */}
            <div className="hidden sm:flex items-start gap-0 mb-12">
              {config.steps.map((s, i) => (
                <Fragment key={i}>
                  <div className="flex-1 min-w-0">
                    <div className={`w-10 h-10 rounded-full ${t.stepBg} text-white text-sm font-bold flex items-center justify-center mb-4`}>
                      {i + 1}
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-2 pr-6">{s.title}</h3>
                    <p className="text-sm text-slate-600 font-light leading-relaxed pr-6">{s.desc}</p>
                  </div>
                  {i < config.steps.length - 1 && (
                    <div className="flex-shrink-0 w-12 h-px bg-slate-200 mt-5" />
                  )}
                </Fragment>
              ))}
            </div>
            {/* Mobile: apilado */}
            <div className="sm:hidden space-y-8 mb-12">
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
            {/* CTA 2 — after steps */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-50 rounded-2xl px-7 py-5 border border-slate-100">
              <div>
                <p className="font-semibold text-slate-900 text-sm">
                  {isEn ? 'Ready to get started? Takes under 5 minutes.' : '¿Todo claro? Empieza ahora, tarda menos de 5 minutos.'}
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  {config.priceFrom} {isEn ? '· No commitment · No credit check' : '· Sin compromiso · Sin revisión de crédito'}
                </p>
              </div>
              <button
                onClick={() => setQuoteOpen(true)}
                className={`shrink-0 flex items-center gap-2 px-6 py-3 rounded-full ${t.stepBg} text-white text-sm font-semibold transition-all hover:opacity-90`}
              >
                {config.ctaButton}
                <ArrowRight weight="bold" className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* ── Testimonials ─────────────────────────────────────────── */}
        <section className="bg-slate-900">
          <div className="max-w-5xl mx-auto px-5 lg:px-8 py-14 md:py-20">
            <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight mb-10">
              {isEn ? 'What our' : 'Lo que dicen'}{' '}
              <span className="font-editorial-italic text-slate-400">{isEn ? 'clients say' : 'nuestros clientes'}</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {config.testimonials.map((t_, i) => (
                <div key={i} className="bg-white/[0.06] rounded-2xl p-6 border border-white/10">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, s) => (
                      <Star key={s} weight="fill" className="w-3.5 h-3.5 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm text-white/80 font-light leading-relaxed mb-4 italic">
                    &ldquo;{t_.text}&rdquo;
                  </p>
                  <div>
                    <p className="text-sm font-semibold text-white">{t_.name}</p>
                    <p className="text-xs text-slate-400">{t_.location}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA 3 — after testimonials */}
            <div className="mt-10 text-center">
              <p className="text-white/60 text-sm mb-4">
                {isEn ? 'Join over 200 families already protected.' : 'Únete a más de 200 familias que ya están protegidas.'}
              </p>
              <button
                onClick={() => setQuoteOpen(true)}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white hover:bg-slate-100 text-slate-900 font-bold text-sm transition-all hover:-translate-y-0.5 shadow-lg"
              >
                {config.ctaButton}
                <ArrowRight weight="bold" className="w-4 h-4" />
              </button>
              <p className="text-[11px] text-white/30 mt-3">
                {config.priceFrom} {isEn ? '· No commitment' : '· Sin compromiso'}
              </p>
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────── */}
        <section className="max-w-5xl mx-auto px-5 lg:px-8 py-14 md:py-20">
          <h2 className="text-3xl md:text-4xl font-light text-slate-900 tracking-tight mb-10">
            {isEn ? 'Frequently' : 'Preguntas'}{' '}
            <span className={`font-editorial-italic ${t.iconText}`}>{isEn ? 'asked questions' : 'frecuentes'}</span>
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
            <p className="text-xs text-white/40 mt-4">
              {isEn ? 'Free · No commitment · Response within 24 hours' : 'Gratis · Sin compromiso · Respuesta en menos de 24 horas'}
            </p>
          </div>
        </section>

        {/* ── Footer ───────────────────────────────────────────────── */}
        <footer className="bg-black text-white">
          <div className="max-w-5xl mx-auto px-5 lg:px-8 py-10">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-8">
              <div>
                <div className="mb-1.5">
                  <img src="/logo.png" alt="Maria Fernanda Insurance Consulting" className="h-8 w-auto brightness-0 invert" />
                </div>
                <p className="text-xs text-slate-400 font-light mb-4">
                  {isEn
                    ? 'Independent insurance for families and businesses across the US'
                    : 'Seguros para familias y negocios hispanos · Atención en español · ITIN aceptado'}
                </p>
                <button
                  onClick={() => setQuoteOpen(true)}
                  className="px-4 py-2 rounded-full bg-white hover:bg-slate-100 text-slate-900 text-xs font-semibold transition-all"
                >
                  {isEn ? 'Get a quote' : 'Cotizar gratis'}
                </button>
                <div className="flex items-center gap-3 mt-4">
                  <a href="https://www.instagram.com/insurancebymf_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-slate-500 hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3">
                  {isEn ? 'Our Insurance' : 'Nuestros Seguros'}
                </p>
                <div className="grid grid-cols-2 gap-x-8 gap-y-1.5">
                  {footerLinks.map(({ href, label }) => (
                    <Link key={href} href={href} className="text-xs text-slate-400 hover:text-white transition-colors">
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="border-t border-white/10 mt-8 pt-4">
              <p className="text-xs text-slate-500 font-light">
                {isEn
                  ? 'Prices are for reference only. Coverage, terms and conditions vary by state and are subject to underwriting approval. Maria Fernanda Insurance Consulting is a licensed insurance agent.'
                  : 'Los precios son referenciales. Cobertura, términos y condiciones varían por estado y sujetos a aprobación. Maria Fernanda Insurance Consulting es un agente de seguros con licencia.'}
              </p>
            </div>
          </div>
        </footer>
      </main>

      {/* ── Sticky mobile bottom bar ─────────────────────────────── */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-sm border-t border-slate-200 px-5 py-3 flex items-center justify-between shadow-[0_-4px_24px_rgba(0,0,0,0.08)]">
        <div>
          <p className="text-xs font-bold text-slate-900">{config.priceFrom}</p>
          <p className="text-[10px] text-slate-500">
            {isEn ? 'No commitment · No credit check' : 'Sin compromiso · Sin revisión de crédito'}
          </p>
        </div>
        <button
          onClick={() => setQuoteOpen(true)}
          className={`flex items-center gap-1.5 px-5 py-2.5 rounded-full ${t.stepBg} text-white text-xs font-bold shadow-sm`}
        >
          {config.ctaButton}
          <ArrowRight weight="bold" className="w-3.5 h-3.5" />
        </button>
      </div>

      <QuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} initialType={config.quoteType} />
    </>
  );
}
