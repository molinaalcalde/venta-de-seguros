'use client';

import { useState, useEffect } from 'react';
import {
  Shield,
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  Layers,
  CreditCard,
  Sparkles,
  ArrowUpRight,
  Lock,
  Compass,
  Globe,
  Heart,
  Star,
} from 'lucide-react';
import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import QuoteModal, { type InsType } from '@/components/QuoteModal';

// ─── Solutions Tab Data ───────────────────────────────────────────────────────
const solutionsTabs = [
  {
    label: 'Seguro de Auto',
    category: 'Protección en Carretera',
    title: 'Seguro de Auto para tu Tranquilidad en la Carretera',
    description:
      'Tu auto es tu herramienta de trabajo y libertad. Te cubrimos contra accidentes, robo y daños, con asistencia en carretera 24/7 atendida en español. Sin SSN para cotizar. Sujeto a términos y condiciones.',
    cta: 'Cotizar Seguro de Auto',
    price: 'Desde $89',
    priceLabel: 'Tarifa referencial · sujeto a aprobación',
  },
  {
    label: 'Seguro de Mascotas',
    category: 'Salud de tu Mascota',
    title: 'Cuida a tu Perro o Gato sin Preocuparte por la Cuenta',
    description:
      'Con VetDirect™ pagamos directamente a la clínica veterinaria — tú solo llevas a tu mascota. Sin adelantar dinero, sin esperar reembolsos. Sujeto a términos y condiciones.',
    cta: 'Cotizar Seguro de Mascotas',
    price: 'Desde $29',
    priceLabel: 'Tarifa referencial · sujeto a aprobación',
  },
  {
    label: 'Seguro de Vida',
    category: 'Protección para tu Familia',
    title: 'Seguro de Vida: lo Mejor que Puedes Dejarle a tu Familia',
    description:
      'Si algo te pasara, tu familia estaría protegida económicamente. Y si enfrentas una enfermedad grave, puedes acceder al dinero mientras estás vivo. Atención 100% en español. Sujeto a términos y condiciones.',
    cta: 'Cotizar Seguro de Vida',
    price: 'Desde $45',
    priceLabel: 'Tarifa referencial · sujeto a aprobación',
  },
  {
    label: 'Seguro Comercial',
    category: 'Protección para tu Negocio',
    title: 'Protege el Negocio que Construiste con Tanto Esfuerzo',
    description:
      'Restaurante, ferretería, salón, empresa de construcción — protege tu local, tus equipos y tu responsabilidad. Asesoría en español para dueños de negocios hispanos. Sujeto a términos y condiciones.',
    cta: 'Cotizar Seguro Comercial',
    price: 'Desde $120',
    priceLabel: 'Tarifa referencial · sujeto a aprobación',
  },
  {
    label: 'Seguro de Salud',
    category: 'Tu Salud, tu Prioridad',
    title: 'Planes de Salud que te Explican Todo en Español',
    description:
      'Encuentra un plan que cubra médicos, medicamentos y emergencias. Incluimos Medicare para mayores de 65 años. Nuestros asesores te explican cada opción sin complicaciones ni letra chica. Sujeto a términos y condiciones.',
    cta: 'Ver Planes de Salud',
    price: 'Desde $199',
    priceLabel: 'Tarifa referencial · sujeto a aprobación',
  },
  {
    label: 'Seguro Umbrella',
    category: 'Protección Patrimonial',
    title: 'Una Red de Seguridad Extra para lo que has Logrado',
    description:
      'Cuando un accidente grave supera los límites de tu seguro de auto o casa, el seguro umbrella protege tus ahorros, tu hogar y tu tranquilidad. Sujeto a términos y condiciones.',
    cta: 'Cotizar Seguro Umbrella',
    price: 'Desde $19',
    priceLabel: 'Tarifa referencial · sujeto a aprobación',
  },
];

// ─── Tab → InsType mapping ────────────────────────────────────────────────────
const TAB_TO_INS: InsType[] = ['Auto', 'Mascotas', 'Vida', 'Comercial', 'Salud', 'Umbrella'];

export default function HomePage() {
  // Navigation
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Solutions tabs
  const [activeTab, setActiveTab] = useState(0);

  // Quote modal
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [quoteType, setQuoteType] = useState<InsType | undefined>(undefined);

  function openQuote(type?: InsType) {
    setQuoteType(type);
    setQuoteOpen(true);
  }

  const activeTabData = solutionsTabs[activeTab];

  return (
    <>
      <JsonLd />
      {/* ── Fixed Sticky Navbar ── */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex items-center justify-between transition-all duration-300 ${
            scrolled
              ? 'mt-2.5 h-12 bg-white/95 backdrop-blur-md shadow-md border border-stone-200/70 rounded-2xl px-4 lg:px-5'
              : 'mt-0 h-16 bg-transparent px-2 lg:px-4'
          }`}>

            {/* Logo */}
            <a className="flex items-center gap-2.5 group shrink-0" href="#">
              <div className={`rounded-full border-[2px] flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                scrolled
                  ? 'w-5 h-5 border-slate-800'
                  : 'w-6 h-6 border-white/90'
              }`}>
                <span className={`rounded-full transition-all duration-300 ${
                  scrolled ? 'w-1.5 h-1.5 bg-slate-800' : 'w-2 h-2 bg-white'
                }`}></span>
              </div>
              <div className="leading-none">
                <span className={`block font-semibold tracking-tight transition-all duration-300 ${
                  scrolled ? 'text-[14px] text-slate-900' : 'text-base text-white'
                }`}>
                  Aegis
                </span>
                <span className={`block font-medium tracking-[0.1em] uppercase transition-all duration-300 ${
                  scrolled ? 'text-[8px] text-slate-400' : 'text-[9px] text-white/60'
                }`}>
                  National Assurance
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav aria-label="Navegación principal" className="hidden lg:flex items-center gap-0.5">
              {[
                { label: 'Soluciones', href: '#soluciones' },
                { label: 'Coberturas', href: '#coberturas-destacadas' },
                { label: 'Por qué Aegis', href: '#por-que-aegis' },
                { label: 'Blog', href: '/blog' },
                { label: 'Cotizador', href: '#cotizador' },
                { label: 'FAQ', href: '#faq' },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className={`relative px-3.5 py-2 text-[13px] font-medium rounded-xl transition-all duration-200 ${
                    scrolled
                      ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {label}
                </a>
              ))}
            </nav>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-2">
              <a
                href="#cotizador"
                className={`hidden lg:flex items-center gap-2 px-4 py-2 text-[13px] font-semibold rounded-xl transition-all duration-200 active:scale-95 ${
                  scrolled
                    ? 'bg-slate-900 text-white hover:bg-slate-700'
                    : 'bg-white text-slate-900 hover:bg-slate-100 shadow-lg'
                }`}
              >
                Cotizar Ahora
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
              {/* Hamburger */}
              <button
                className="lg:hidden flex flex-col gap-[5px] p-2.5 rounded-xl transition-all"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Abrir menú"
              >
                <span className={`block w-5 h-[1.5px] transition-all duration-300 ${scrolled ? 'bg-slate-900' : 'bg-white'} ${mobileMenuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`}></span>
                <span className={`block w-5 h-[1.5px] transition-all duration-300 ${scrolled ? 'bg-slate-900' : 'bg-white'} ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-5 h-[1.5px] transition-all duration-300 ${scrolled ? 'bg-slate-900' : 'bg-white'} ${mobileMenuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`}></span>
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* ── Mobile Menu Overlay ── */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          {/* Slide-in panel */}
          <div className="absolute top-0 right-0 h-full w-72 bg-white shadow-2xl flex flex-col">
            <div className="flex items-center justify-between px-6 h-16 border-b border-slate-100">
              <span className="font-medium text-slate-900">Menú</span>
              <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-slate-500 hover:text-slate-900">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col px-6 py-8 gap-1 flex-1">
              {[
                { label: 'Inicio', href: '#' },
                { label: 'Soluciones', href: '#soluciones' },
                { label: 'Blog', href: '/blog' },
                { label: 'Cotizador', href: '#cotizador' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Contacto', href: '#contacto' },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-3.5 px-3 rounded-xl text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-all border-b border-slate-100 last:border-0"
                >
                  {label}
                </a>
              ))}
            </nav>
            <div className="px-6 pb-8">
              <a
                href="#cotizador"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 rounded-xl bg-slate-900 text-white text-sm font-semibold text-center flex items-center justify-center gap-2 hover:bg-slate-800 transition-all"
              >
                Cotizar Ahora
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ── Hero & Header Wrapper ── */}
      <div className="p-3 sm:p-5 lg:p-6 max-w-[1720px] mx-auto">
        <div className="relative w-full rounded-[28px] overflow-hidden min-h-[680px] lg:min-h-[820px] flex flex-col justify-between shadow-2xl shadow-stone-900/10">
          {/* Hero Background */}
          <img
            alt="Affectionate young family embracing warmly in golden sunset meadow"
            className="absolute inset-0 w-full h-full object-cover object-center lg:object-[center_32%]"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBorFuyfcmKxjwFbRybc5SVfFvvQe9JFQKbNqGJheGbdohO4BdjSi5aOedf4KQJmDoD861C-pa0lzdzv9FQfFNp1p0qJ4ZrdBawFOQdRPqinPoIW2m9itcP0CKYtqcvVP7k6RyhjRAWC05TWyy_CZsyJPoXNCs-yIxnt6EsQ0CjMSErUT_hd9y6qd6FlBj7aRHdhfMBq_suMAYHYxo2D88_FQbVDI3HZFx2Y6ewZYafi4NnQoQs6ru0"
          />
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/75"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/60"></div>

          {/* Spacer for fixed navbar */}
          <div className="h-16" />

          {/* ── Hero Content ── */}
          <div className="relative z-20 w-full px-6 sm:px-10 lg:px-16 pb-12 sm:pb-16 flex flex-col justify-end">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
              {/* Scroll cue */}
              <div className="flex items-center gap-3 text-white/90 text-xs font-light select-none">
                <div className="w-5 h-8 rounded-full border border-white/70 flex items-start justify-center pt-1.5">
                  <span className="w-1 h-1.5 bg-white rounded-full animate-bounce"></span>
                </div>
                <span className="tracking-wide">Scroll Down</span>
              </div>

              {/* Headline */}
              <div className="max-w-2xl lg:text-right text-white">
                <div className="flex flex-wrap gap-2 mb-5 lg:justify-end">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/15 border border-white/25 backdrop-blur-sm text-xs text-white font-medium">
                    <Globe className="w-3.5 h-3.5" aria-hidden="true" />
                    Atención 100% en español
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/15 border border-white/25 backdrop-blur-sm text-xs text-white font-medium">
                    <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
                    Acepta ITIN · Sin SSN
                  </span>
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-[76px] font-normal tracking-tight-title leading-[1.08] drop-shadow-sm">
                  Protegiendo <br />
                  <span className="font-sans font-light">lo que más</span>{' '}
                  <span className="font-editorial-italic font-normal">Valoras</span>
                </h1>
                <p className="mt-4 text-white/90 text-sm sm:text-base font-light max-w-xl lg:ml-auto leading-relaxed">
                  Seguros de auto, vida, salud y mascotas para tu familia. Agentes bilingüe que entienden tu comunidad, sin importar tu estatus migratorio.
                </p>
                <div className="mt-6 flex flex-wrap gap-4 items-center lg:justify-end">
                  <button
                    onClick={() => openQuote()}
                    className="px-6 py-3 rounded-full bg-white text-slate-900 font-semibold text-xs sm:text-sm hover:bg-slate-100 transition-all shadow-lg active:scale-95 flex items-center gap-2"
                  >
                    <span>Iniciar Cotización Inmediata</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                  <a
                    className="group inline-flex items-center gap-2 text-xs sm:text-sm text-white/95 hover:text-white font-light tracking-wide underline underline-offset-8 decoration-white/50 hover:decoration-white transition-all"
                    href="#coberturas-destacadas"
                  >
                    <span>Explorar Coberturas</span>
                    <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ── END: HeroAndHeaderWrapper ── */}

      {/* ── Solutions Section ── */}
      <section className="py-20 lg:py-28 px-4 sm:px-8 max-w-7xl mx-auto" id="soluciones">
        {/* Section Heading */}
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <div className="inline-flex items-center justify-center gap-2 mb-3 text-slate-700">
            <div className="w-4 h-4 rounded-full border-[1.8px] border-slate-800 flex items-center justify-center">
              <span className="w-1 h-1 bg-slate-800 rounded-full"></span>
            </div>
            <span className="text-xs uppercase tracking-widest font-semibold text-slate-600">Todos los Seguros en un Solo Lugar</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-normal text-slate-900 tracking-tight leading-tight">
            El seguro que necesitas,{' '}
            <br />
            <span className="font-editorial-italic font-normal">explicado en tu idioma</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-3 max-w-xl mx-auto">
            Sin letra chica, sin presiones. Elige el tipo de seguro y un asesor bilingüe te acompaña desde la cotización hasta el momento de usarlo.
          </p>
        </div>

        {/* Triple-Pane Sage Container */}
        <div className="bg-[#dbe7dc] rounded-[32px] p-4 sm:p-7 lg:p-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-6 items-stretch">

            {/* Left: Tab Pills */}
            <div className="md:col-span-4 flex flex-col justify-center space-y-2">
              {solutionsTabs.map((tab, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`w-full text-left px-5 py-3 rounded-2xl font-medium text-xs sm:text-[13px] transition-all flex items-center justify-between ${
                    activeTab === idx
                      ? 'bg-white text-slate-900 font-semibold shadow-sm'
                      : 'text-slate-700 hover:text-slate-950 hover:bg-white/40 py-2.5'
                  }`}
                >
                  <span>{tab.label}</span>
                  {activeTab === idx ? (
                    <span className="w-2 h-2 rounded-full bg-slate-900"></span>
                  ) : (
                    <ChevronRight className="w-3.5 h-3.5 opacity-60" aria-hidden="true" />
                  )}
                </button>
              ))}
            </div>

            {/* Middle: Featured Card */}
            <div className="md:col-span-5 bg-[#ccdccc]/80 rounded-2xl p-7 lg:p-9 flex flex-col justify-between min-h-[280px] border border-white/20">
              <div>
                <span className="text-xs uppercase tracking-wider text-slate-700 font-semibold">
                  {activeTabData.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-normal text-slate-900 tracking-tight leading-snug mt-3">
                  {activeTabData.title}
                </h3>
                <p className="text-xs text-slate-700 mt-2 font-light leading-relaxed">
                  {activeTabData.description}
                </p>
              </div>
              <div className="pt-6">
                <button
                  onClick={() => openQuote(TAB_TO_INS[activeTab])}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-900 hover:underline"
                >
                  <span>{activeTabData.cta}</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* Right: Price Metric Card */}
            <div className="md:col-span-3 bg-[#f0f6f0]/90 rounded-2xl p-7 lg:p-8 flex flex-col justify-between min-h-[280px] border border-white/60">
              <div className="flex justify-end">
                <button
                  onClick={() => openQuote(TAB_TO_INS[activeTab])}
                  className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-slate-800 hover:scale-110 hover:text-black transition-all shadow-sm"
                  title="Calcular Prima"
                >
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
                    {activeTabData.price}
                  </span>
                  <span className="text-slate-500 text-xs font-medium">/mes</span>
                </div>
                <p className="text-xs font-normal text-slate-600 mt-1">{activeTabData.priceLabel}</p>
                <a
                  className="mt-4 w-full py-2.5 px-4 rounded-xl bg-slate-900 text-white text-xs font-medium hover:bg-slate-800 transition-all text-center flex items-center justify-center gap-1.5"
                  href="#cotizador"
                >
                  <span>Calcular Prima</span>
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          {/* 3 Value Propositions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 px-4 sm:px-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-sage-100 flex items-center justify-center shrink-0 text-slate-800">
                <Globe className="w-5 h-5 text-sage-800" aria-hidden="true" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-900">Cotiza en menos de un minuto</h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Solo tu nombre y correo para empezar. Un asesor bilingüe te llama en 24 horas con tu cotización personalizada.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-sage-100 flex items-center justify-center shrink-0 text-slate-800">
                <Layers className="w-5 h-5 text-sage-800" aria-hidden="true" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-900">Agrupa y ahorra</h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Combina auto, hogar, vida y mascotas en una sola cuenta. Mientras más coberturas tienes con Aegis, mayor es tu descuento. Sujeto a términos y condiciones.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-sage-100 flex items-center justify-center shrink-0 text-slate-800">
                <ShieldCheck className="w-5 h-5 text-sage-800" aria-hidden="true" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-900">Respaldo sólido detrás de ti</h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Correduría autorizada con calificación AM Best A+ Superior. Cuando necesites usar tu seguro, el dinero está ahí.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ── END: Solutions Section ── */}

      {/* ── Featured Coverage Lines ── */}
      <section className="py-20 bg-[#fafbfa] border-t border-stone-200/70" id="coberturas-destacadas">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-slate-500 font-semibold">Coberturas más solicitadas</span>
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-normal text-slate-900 tracking-tight leading-tight mt-2">
              Protección real para{' '}
              <span className="font-editorial-italic font-normal">lo que más importa</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-3">
              Sin tecnicismos. Sin letra chica. Cada seguro explicado en español, con un asesor que entiende tu situación.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 – Auto & EV */}
            <div className="group bg-white rounded-[28px] overflow-hidden shadow-sm border border-stone-200/70 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div className="relative h-52 w-full overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/aida/AEtjO1Vn9TVQWIybHlufHx6Uoe8BDHhnIe22cMilgQyVfep9gkS5ulXUYzi3Vzfryf9-n3WitxE-qKwc1GpPNZkLQgftir-O_HO1zYamlKziOR3nLyayWpB6lYZci6qR5ldzZyLrpxR_nB2Sg74RQ0t9WdCRF2r_iKOwxuyY6wYDDOgaulV0YdN_I0GQ30xhI4BX0rNeRwbe1fk5hr2G_BE9C8gZ8jFDxH0PspctCWgcKwftu_WKhmwHc2nQp0w"
                  alt="Seguro de Autos y Movilidad Eléctrica"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-slate-800 backdrop-blur-sm shadow-sm">
                  Movilidad Inteligente
                </span>
                <span className="absolute bottom-4 right-4 text-xs font-medium text-white/90 bg-black/40 px-2.5 py-1 rounded-full backdrop-blur-sm">
                  Desde $75/mes
                </span>
              </div>
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                <div className="space-y-3">
                  <h3 className="text-2xl font-normal text-slate-900 tracking-tight">Seguro de Auto</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                    Tu auto es tu independencia. Cubrimos accidentes, robo, daños a terceros y asistencia en carretera. Si tienes un accidente, te atendemos en español desde el primer momento. Sujeto a términos y condiciones.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-600 pt-2">
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-sage-800 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      Cobertura de colisión, robo y daños a terceros
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-sage-800 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      Asistencia en carretera 24/7 atendida en español
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-sage-800 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      Sin SSN requerido para cotizar
                    </li>
                  </ul>
                </div>
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-900">Desde $89/mes · sujeto a aprobación</span>
                  <button onClick={() => openQuote('Auto')} className="px-5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold inline-flex items-center gap-1.5 transition-all shadow-sm">
                    Ver Cobertura Auto <span className="text-sm">→</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2 – Mascotas */}
            <div className="group bg-white rounded-[28px] overflow-hidden shadow-sm border border-stone-200/70 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div className="relative h-52 w-full overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/aida/AEtjO1WCthRCePEcpgbKpd-d1V9YjUvuWRBLqKD_YHN1m8qahA5s2c2ZONFZqKCmbNw7hvVrV672Gym4ZrBOD1IkxDiVyCrziK9Gifm1kX84Eo-PvOoItGZYz3AseCDhsAe0fFTAeGft8EIyXOWSpqsWZjrzzACeisRnJpBEs0i6k4jOA19KDgn6mkl9ZU9JRbJpYUeX1gZIcMOaHtwomL-syV-1PPEwha3YJepaTtu0-LS5Fy07Ch-uQhqf6Q"
                  alt="Seguro de Mascotas VetDirect"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-slate-800 backdrop-blur-sm shadow-sm">
                  VetDirect™ Technology
                </span>
                <span className="absolute bottom-4 right-4 text-xs font-medium text-white/90 bg-black/40 px-2.5 py-1 rounded-full backdrop-blur-sm">
                  Planes desde $29/mes
                </span>
              </div>
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                <div className="space-y-3">
                  <h3 className="text-2xl font-normal text-slate-900 tracking-tight">Seguro de Mascotas</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                    Llevas a tu perro o gato a la clínica y nosotros pagamos directamente. Sin adelantar dinero, sin esperar semanas para que te reembolsen. Tu mascota recibe la atención que necesita cuando la necesita. Sujeto a términos y condiciones.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-600 pt-2">
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-sage-800 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      VetDirect™: pago directo a la clínica veterinaria
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-sage-800 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      Cubre consultas, cirugías, vacunas y medicamentos
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-sage-800 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      Sin sorpresas ni cobros ocultos en tu estado de cuenta
                    </li>
                  </ul>
                </div>
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-900">Desde $29/mes · sujeto a aprobación</span>
                  <button onClick={() => openQuote('Mascotas')} className="px-5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold inline-flex items-center gap-1.5 transition-all shadow-sm">
                    Cotizar Mascotas <span className="text-sm">→</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Card 3 – Vida */}
            <div className="group bg-white rounded-[28px] overflow-hidden shadow-sm border border-stone-200/70 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div className="relative h-52 w-full overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/aida/AEtjO1X7Fsl95nUF-Lp5Lff5U0pm19f6MSz9GOCmjjKo0fCZNv9O3rYuqZl69L1su4s9Lg_UXnQ_Ooap4L6zaqGTyZVjIflziXskEcdRy0zQtJc7LZWhM-e0xHK38oZQkk3kEJ439GhT7rA8v2y_unh8f-IFzVojqQoBXslc6sSkwzqydPTZap34_QhXnj1xihdb-A8e68h8Ap_dEq2WHhgyff7M5MLXHF3C2syuCTX_PkerUHg2IwuPu2MDxf0"
                  alt="Seguro de Vida y Preservación de Patrimonio"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-slate-800 backdrop-blur-sm shadow-sm">
                  Protección Familiar & Legado
                </span>
                <span className="absolute bottom-4 right-4 text-xs font-medium text-white/90 bg-black/40 px-2.5 py-1 rounded-full backdrop-blur-sm">
                  Coberturas desde $500k
                </span>
              </div>
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                <div className="space-y-3">
                  <h3 className="text-2xl font-normal text-slate-900 tracking-tight">Seguro de Vida</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                    Muchas familias hispanas trabajan toda su vida para construir algo. El seguro de vida es la garantía de que ese esfuerzo protege a quienes más amas, incluso si tú ya no estás. Y si te enfermas gravemente, puedes acceder al dinero mientras sigues vivo. Sujeto a términos y condiciones.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-600 pt-2">
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-sage-800 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      Tu familia protegida económicamente si algo te pasara
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-sage-800 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      Acceso al dinero en vida ante enfermedad grave
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-sage-800 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      Planes accesibles, con o sin historial crediticio
                    </li>
                  </ul>
                </div>
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-900">Desde $45/mes · sujeto a aprobación</span>
                  <button onClick={() => openQuote('Vida')} className="px-5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold inline-flex items-center gap-1.5 transition-all shadow-sm">
                    Explorar Vida <span className="text-sm">→</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Card 4 – Comercial */}
            <div className="group bg-white rounded-[28px] overflow-hidden shadow-sm border border-stone-200/70 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div className="relative h-52 w-full overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/aida/AEtjO1Ut8ix4c4svI2T0dezIF5fAym35f_jmGbgJg24hUDZXPE9LaFHoVpC4tE5p4JLdPqh111gWzEerZtZ_inQ7fZWS3uhr6AC-UcwCwC9wDlhJzSy2myjJOmuRmZgSKOzuuko_9lPoIq9PlAyyHOz8KxUpdvVhrRedT2jg84Jjql5seN67hQYsR-vhjHSDBb6TAQsyeFPAmBjV_eeF-zjuoSzQ8jyx5ed_yslMplNe8n3ahVt4VUjwApfjhtE"
                  alt="Seguros Comerciales y Protección Cibernética"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-slate-800 backdrop-blur-sm shadow-sm">
                  Empresas & Cyber
                </span>
                <span className="absolute bottom-4 right-4 text-xs font-medium text-white/90 bg-black/40 px-2.5 py-1 rounded-full backdrop-blur-sm">
                  PyMEs y Corporativos
                </span>
              </div>
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                <div className="space-y-3">
                  <h3 className="text-2xl font-normal text-slate-900 tracking-tight">Seguro Comercial</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                    Construiste tu negocio con esfuerzo. Un solo accidente, demanda o incendio puede derrumbarlo. El seguro comercial protege tu local, tu equipo y tu responsabilidad — para que puedas seguir adelante sin importar qué pase. Sujeto a términos y condiciones.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-600 pt-2">
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-sage-800 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      Protección del local, equipos e inventario
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-sage-800 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      Responsabilidad civil si alguien se lastima en tu negocio
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-sage-800 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      Asesoría en español para negocios hispanos
                    </li>
                  </ul>
                </div>
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-900">Desde $120/mes · sujeto a aprobación</span>
                  <button onClick={() => openQuote('Comercial')} className="px-5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold inline-flex items-center gap-1.5 transition-all shadow-sm">
                    Proteger Empresa <span className="text-sm">→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ── END: Featured Coverage Lines ── */}

      {/* ── Brand Story & Metrics ── */}
      <section className="py-16 lg:py-24 bg-white border-y border-stone-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
            <div className="inline-flex items-center justify-center gap-2 mb-4 text-slate-700">
              <div className="w-4 h-4 rounded-full border-[1.8px] border-slate-800 flex items-center justify-center">
                <span className="w-1 h-1 bg-slate-800 rounded-full"></span>
              </div>
              <span className="text-xs uppercase tracking-widest font-semibold text-slate-600">Aegis National Assurance</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[50px] font-normal text-slate-900 tracking-tight leading-tight">
              Aquí cuando más <br />
              <span className="font-editorial-italic font-normal">nos necesitas.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-12">
              <div>
                <span className="text-xs uppercase tracking-widest text-slate-400 font-semibold">Por qué familias hispanas eligen Aegis</span>
                <h3 className="text-2xl sm:text-3xl font-normal tracking-tight text-slate-900 mt-2">
                  Más que un seguro —<br />un aliado de confianza
                </h3>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-sage-50 border border-sage-200 flex items-center justify-center shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4 text-sage-800" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">Un asesor dedicado cuando lo necesitas</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Cuando tienes un accidente o un siniestro, no hablas con un bot. Un asesor en español te acompaña en cada paso hasta que todo se resuelva.
                  </p>
                </div>
              </div>
              <div className="py-2 border-y border-stone-100">
                <div className="text-5xl lg:text-6xl font-normal tracking-tight text-slate-900">$1.7B</div>
                <p className="text-xs text-slate-500 mt-1">
                  En reservas de capital para garantizar que cuando uses tu seguro, el dinero siempre esté ahí.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-sage-50 border border-sage-200 flex items-center justify-center shrink-0 mt-0.5">
                  <Heart className="w-4 h-4 text-sage-800" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">Construido para tu comunidad</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Entendemos lo que significa empezar de cero en un país nuevo. Por eso nuestros servicios son accesibles, claros y siempre en español.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column – Photo Grid */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-12 gap-4 sm:gap-6 items-stretch">
                <div className="col-span-8 overflow-hidden rounded-[30px] shadow-lg relative min-h-[460px] lg:min-h-[540px]">
                  <img
                    alt="Familia y aventura en la naturaleza protegidos por seguros de viaje y vida"
                    className="absolute inset-0 w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhpcaKyb3Dv730KusfGdXUSFLVOmaJp0G2G_CD1Tm9Jj8IxgPMza1YquaADeho2Ikn26nxl7iqjIrPOURTfaDHqJv5XuULnS9ZYK-j_TvrMATbnyT3XwxMK_SXvT6R8JhS23olqKL_HGLrsx-7qrUCiD5ifWYXJwbKk0vl3dc1gyau-UNkcZqYOdgu426BczMtMhs16n4lm2CTfZHpi3SW9-mvjm3PCIitHa2T_1vtp0wuOsas8BA5"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white text-xs tracking-wide font-light">
                    Cobertura Integral para Aventuras & Estilo de Vida
                  </div>
                </div>
                <div className="col-span-4 overflow-hidden rounded-[30px] shadow-md relative min-h-[460px] lg:min-h-[540px]">
                  <img
                    alt="Paisajes abiertos y seguros"
                    className="absolute inset-0 w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuALlX2I4j-SU_STw4ViFQeVDt0M4YxEt0cbgHQFMCr8RXn9gV-DavMlNlAmXZS5X0494HA4XpJvw5jwxaZjTbKrAT0cs5qhPlhNB6tBGECcuhEVItlT7n37JJ8JTVwq74OszgS9qLJhKo48A4YdUUD4hWflLudi-RKeyKWWeGXfWlGE7qzxaFJEee_eU5SF0rSAfIv10xx7FgIu3fdsemCQoRviPDgmodbQI5MoL1-DJGq2_eRboNg7"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/50"></div>
                  <div className="absolute bottom-6 left-4 right-4 text-white text-[11px] font-light leading-snug">
                    Cada horizonte resguardado con Aegis.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ── END: Brand Story ── */}

      {/* ── Por qué Aegis ── */}
      <section className="py-20 lg:py-28 bg-white border-t border-stone-100" id="por-que-aegis">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <div className="inline-flex items-center justify-center gap-2 mb-3 text-slate-700">
              <div className="w-4 h-4 rounded-full border-[1.8px] border-slate-800 flex items-center justify-center">
                <span className="w-1 h-1 bg-slate-800 rounded-full"></span>
              </div>
              <span className="text-xs uppercase tracking-widest font-semibold text-slate-600">Por qué elegirnos</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-normal text-slate-900 tracking-tight leading-tight">
              Seguros que entienden{' '}
              <span className="font-editorial-italic font-normal">tu comunidad</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-3 max-w-xl mx-auto">
              Somos más que una aseguradora. Somos el aliado que tu familia necesita en Estados Unidos.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Pilar 1 */}
            <div className="bg-[#f4f8f4] rounded-[24px] p-7 flex flex-col gap-4">
              <div className="w-11 h-11 rounded-2xl bg-white border border-sage-200 flex items-center justify-center shadow-sm">
                <Globe className="w-5 h-5 text-slate-800" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-900">Agentes 100% bilingüe</h3>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                  Te atendemos completamente en español. Sin traductores, sin malentendidos. Tu asesor habla tu idioma de principio a fin.
                </p>
              </div>
            </div>

            {/* Pilar 2 */}
            <div className="bg-[#f4f8f4] rounded-[24px] p-7 flex flex-col gap-4">
              <div className="w-11 h-11 rounded-2xl bg-white border border-sage-200 flex items-center justify-center shadow-sm">
                <Lock className="w-5 h-5 text-slate-800" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-900">Tu privacidad, protegida</h3>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                  Tu información personal nunca se comparte con terceros ni agencias gubernamentales sin tu consentimiento explícito. Cifrado de 256 bits.
                </p>
              </div>
            </div>

            {/* Pilar 3 */}
            <div className="bg-[#f4f8f4] rounded-[24px] p-7 flex flex-col gap-4">
              <div className="w-11 h-11 rounded-2xl bg-white border border-sage-200 flex items-center justify-center shadow-sm">
                <ShieldCheck className="w-5 h-5 text-slate-800" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-900">Sin SSN para cotizar</h3>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                  Cotiza sin número de seguro social. Aceptamos ITIN y trabajamos con familias en todas las situaciones migratorias.
                </p>
              </div>
            </div>

            {/* Pilar 4 */}
            <div className="bg-[#f4f8f4] rounded-[24px] p-7 flex flex-col gap-4">
              <div className="w-11 h-11 rounded-2xl bg-white border border-sage-200 flex items-center justify-center shadow-sm">
                <Heart className="w-5 h-5 text-slate-800" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-900">Comunidad primero</h3>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                  Entendemos los desafíos de construir una vida en un país nuevo. Estamos aquí para proteger lo que con tanto esfuerzo has logrado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ── END: Por qué Aegis ── */}

      {/* ── Testimonios ── */}
      <section className="py-20 lg:py-24 bg-[#f4f8f4]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-14 max-w-xl mx-auto">
            <span className="text-xs uppercase tracking-widest text-slate-500 font-semibold">Historias reales</span>
            <h2 className="text-3xl sm:text-4xl font-normal text-slate-900 tracking-tight leading-tight mt-2">
              Familias que{' '}
              <span className="font-editorial-italic font-normal">confían en Aegis</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Testimonio 1 */}
            <div className="bg-white rounded-[24px] p-7 shadow-sm border border-stone-200/60 flex flex-col justify-between">
              <div>
                <div className="flex gap-0.5 mb-4">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                  ))}
                </div>
                <p className="text-sm text-slate-700 leading-relaxed font-light">
                  "Llevaba años sin seguro de vida porque pensaba que era complicado sin papeles. Me ayudaron a entender mis opciones en español y sin presión. Ahora mi familia está protegida."
                </p>
              </div>
              <div className="mt-6 pt-5 border-t border-slate-100">
                <p className="text-sm font-semibold text-slate-900">María T.</p>
                <p className="text-xs text-slate-500 mt-0.5">Trabajadora doméstica · Florida</p>
                <p className="text-xs text-slate-400 mt-1">Seguro de Vida con Living Benefits</p>
              </div>
            </div>

            {/* Testimonio 2 */}
            <div className="bg-white rounded-[24px] p-7 shadow-sm border border-stone-200/60 flex flex-col justify-between">
              <div>
                <div className="flex gap-0.5 mb-4">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                  ))}
                </div>
                <p className="text-sm text-slate-700 leading-relaxed font-light">
                  "Tengo mi restaurante asegurado y también el seguro de salud para mis empleados. Todo en español, fácil de entender. Siento que alguien cuida mi negocio como yo lo cuido."
                </p>
              </div>
              <div className="mt-6 pt-5 border-t border-slate-100">
                <p className="text-sm font-semibold text-slate-900">Carlos R.</p>
                <p className="text-xs text-slate-500 mt-0.5">Dueño de restaurante · Texas</p>
                <p className="text-xs text-slate-400 mt-1">Seguro Comercial + Salud para empleados</p>
              </div>
            </div>

            {/* Testimonio 3 */}
            <div className="bg-white rounded-[24px] p-7 shadow-sm border border-stone-200/60 flex flex-col justify-between">
              <div>
                <div className="flex gap-0.5 mb-4">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                  ))}
                </div>
                <p className="text-sm text-slate-700 leading-relaxed font-light">
                  "Cotizar fue rapidísimo. Sin burocracia, sin que me pregunten si tengo papeles. Tenemos seguro de auto para los dos carros y seguro de vida. El asesor nos llamó al día siguiente."
                </p>
              </div>
              <div className="mt-6 pt-5 border-t border-slate-100">
                <p className="text-sm font-semibold text-slate-900">Ana L.</p>
                <p className="text-xs text-slate-500 mt-0.5">Familia de 4 · California</p>
                <p className="text-xs text-slate-400 mt-1">Seguro de Auto + Seguro de Vida</p>
              </div>
            </div>
          </div>

          <p className="text-center text-xs text-slate-400 mt-8">
            Los testimonios reflejan experiencias individuales. Los resultados de cobertura varían según la póliza contratada. Sujeto a términos y condiciones.
          </p>
        </div>
      </section>
      {/* ── END: Testimonios ── */}

      {/* ── Quote Calculator ── */}
      <section className="py-20 bg-[#f7faf7]" id="cotizador">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white rounded-[32px] p-8 sm:p-12 shadow-sm border border-stone-200/70">
            <div className="max-w-xl mx-auto text-center mb-8">
              <span className="text-xs font-semibold uppercase tracking-widest text-sage-800">
                Cotización Online · 5 Pasos · 90 Segundos
              </span>
              <h3 className="text-2xl sm:text-3xl font-normal text-slate-900 mt-2 tracking-tight">
                Tu cotización{' '}
                <span className="font-editorial-italic">personalizada</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-2">
                Elige tu seguro, responde unas preguntas rápidas y un asesor bilingüe te contacta en 15 minutos.
              </p>
            </div>

            <div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                {(['Auto','Mascotas','Vida','Salud','Comercial','Umbrella'] as InsType[]).map(tipo => (
                  <button
                    key={tipo}
                    onClick={() => openQuote(tipo)}
                    className="px-4 py-3 rounded-2xl border-2 border-slate-200 bg-white hover:border-slate-700 hover:bg-slate-800 hover:text-white text-slate-700 text-sm font-medium transition-all text-center"
                  >
                    {tipo === 'Auto' && '🚗 '}
                    {tipo === 'Mascotas' && '🐾 '}
                    {tipo === 'Vida' && '❤️ '}
                    {tipo === 'Salud' && '🏥 '}
                    {tipo === 'Comercial' && '🏢 '}
                    {tipo === 'Umbrella' && '☂️ '}
                    {tipo === 'Auto' ? 'Seguro de Auto' : tipo === 'Umbrella' ? 'Protección Extra' : `Seguro ${tipo === 'Mascotas' ? 'de Mascotas' : tipo === 'Vida' ? 'de Vida' : tipo === 'Salud' ? 'de Salud' : 'Comercial'}`}
                  </button>
                ))}
              </div>
              <button
                onClick={() => openQuote()}
                className="w-full py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold transition-all shadow-md active:scale-95 flex items-center justify-center gap-2"
              >
                <span>Iniciar mi cotización gratis</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>

            {/* Trust footer */}
            <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-center gap-4 text-[11px] text-slate-400">
              <span className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-sage-800" aria-hidden="true" />
                Sin SSN — aceptamos ITIN
              </span>
              <span>·</span>
              <span>Atención 100% en español</span>
              <span>·</span>
              <span>Sin presiones · Sin spam</span>
            </div>
          </div>
        </div>
      </section>
      {/* ── END: Quote Calculator ── */}

      {/* ── Partner Trust Bar ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-[11px] tracking-[0.2em] uppercase font-semibold text-slate-400 mb-10">
            Nuestros socios que nos ayudan a protegerte
          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-between gap-8 sm:gap-12 opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
            <div className="flex items-center gap-2 font-serif text-lg font-semibold text-slate-700">
              <span className="text-xl">❖</span> Prudential
            </div>
            <div className="flex flex-col items-center">
              <span className="font-serif tracking-widest text-sm font-bold text-slate-800 uppercase">STERLING</span>
              <span className="text-[8px] tracking-wider text-slate-500 uppercase -mt-0.5">Insurance Company Limited</span>
            </div>
            <div className="flex items-center gap-1 text-sm font-semibold tracking-tight text-slate-800">
              <span className="font-serif text-lg">𝖀</span> UnitedHealthcare
            </div>
            <div className="flex items-center gap-1.5 text-xs font-serif font-bold text-slate-700 tracking-wider">
              <Compass className="w-4 h-4" aria-hidden="true" /> Continental <span className="font-sans font-light text-[10px]">Insurance</span>
            </div>
            <div className="font-serif text-base tracking-wide text-slate-800 italic font-medium">
              Credo-Classic
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-20 bg-[#fafbfa] border-t border-stone-200/70" id="faq">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-xs uppercase tracking-widest text-slate-500 font-semibold">Claridad & Transparencia</span>
            <h2 className="text-3xl sm:text-4xl font-normal text-slate-900 tracking-tight leading-tight mt-2">
              Preguntas <span className="font-editorial-italic font-normal">Frecuentes</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Respuestas directas a las inquietudes más habituales sobre nuestras coberturas.
            </p>
          </div>
          <div className="space-y-4">
            {[
              {
                n: '01',
                q: '¿Puedo obtener seguro sin número de seguro social (SSN)?',
                a: 'Sí. Para cotizar solo necesitas tu nombre y correo electrónico. Los requisitos de documentación varían según el tipo de póliza y el estado donde resides. Muchos de nuestros planes aceptan ITIN como identificación válida. Nuestros asesores te guían en cada paso sin complicaciones.',
                open: true,
              },
              {
                n: '02',
                q: '¿Puedo obtener seguro siendo inmigrante o con ITIN?',
                a: 'Sí. Trabajamos con familias en todas las situaciones migratorias. Aceptamos ITIN y entendemos los desafíos de la comunidad hispana en EE.UU. Tu estatus migratorio no es un obstáculo para proteger a tu familia. Los requisitos específicos dependen del tipo de cobertura y el estado donde resides.',
              },
              {
                n: '03',
                q: '¿Cómo funciona la cobertura directa en clínicas veterinarias con VetDirect™?',
                a: 'Con VetDirect™, no necesitas pagar de tu bolsillo y esperar meses de reembolso. Al presentar tu tarjeta digital Aegis en clínicas asociadas, autorizamos el pago de la factura veterinaria directamente al centro médico en tiempo real, cubriendo consultas, intervenciones y tratamientos elegibles. Sujeto a términos y condiciones.',
              },
              {
                n: '04',
                q: '¿Puedo unificar mi póliza de automóvil y hogar para obtener descuentos multilínea?',
                a: 'Sí. Aegis ofrece el programa Aegis Bundle, permitiendo agrupar seguros de vehículo (incluidos eléctricos), hogar, vida y mascotas bajo un único estado de cuenta, con descuentos acumulativos en tu prima total anual. Sujeto a términos y condiciones.',
              },
              {
                n: '05',
                q: '¿En qué momento se activan los beneficios en vida (Living Benefits) de los seguros de vida?',
                a: 'A diferencia del seguro de vida tradicional que solo indemniza tras el fallecimiento, nuestras pólizas con Living Benefits permiten acceder por anticipado a un porcentaje del capital asegurado en caso de diagnóstico de enfermedad crítica, crónica o incapacitante grave. Sujeto a términos y condiciones de la póliza.',
              },
              {
                n: '06',
                q: '¿Mi información personal es confidencial?',
                a: 'Absolutamente. Tu información personal nunca se comparte con terceros ni con agencias gubernamentales sin tu consentimiento explícito. Utilizamos cifrado de grado bancario de 256 bits para proteger todos tus datos. Tu privacidad es nuestra prioridad.',
              },
              {
                n: '07',
                q: '¿Cómo reporto un siniestro?',
                a: 'Puedes reportar un siniestro a través del portal digital o llamando a nuestra línea de emergencias 24/7, disponible en español. Un gestor personal de siniestros se asigna a tu caso para acompañarte en cada paso del proceso hasta la resolución. Sujeto a los términos de tu póliza.',
              },
              {
                n: '08',
                q: '¿Qué requisitos necesita mi empresa para el seguro comercial y contra ciberataques?',
                a: 'Realizamos una breve evaluación digital de seguridad en minutos sin interrumpir tus operaciones. Evaluamos protocolos básicos como autenticación multifactor (MFA) y respaldos en la nube, estructurando de inmediato tu paquete comercial BOP y escudo ante ransomware y filtraciones de datos. Sujeto a aprobación de suscripción.',
              },
            ].map(({ n, q, a, open }) => (
              <details key={n} className="group bg-white rounded-2xl p-6 border border-stone-200/70 shadow-sm hover:shadow-md transition-all duration-200 open:bg-sage-50/40 open:border-sage-300" open={open}>
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-semibold text-sm sm:text-base text-slate-900 select-none">
                  <span className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-sage-100 text-sage-800 flex items-center justify-center text-xs font-bold shrink-0">{n}</span>
                    {q}
                  </span>
                  <span className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 group-open:rotate-45 transition-transform duration-200 text-lg font-light leading-none shrink-0">+</span>
                </summary>
                <p className="text-xs sm:text-sm text-slate-600 mt-4 pl-10 leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      {/* ── END: FAQ ── */}

      {/* ── Contact / CTA Section ── */}
      <section className="relative py-20 bg-gradient-to-br from-[#17281b] via-[#233d28] to-[#0f1d12] text-white overflow-hidden border-t border-b border-sage-800/60 shadow-2xl" id="contacto">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#53825d]/20 blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#86f2e4]/10 blur-3xl pointer-events-none"></div>
        <div className="relative max-w-5xl mx-auto px-6 text-center space-y-6 z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#89f5e7]"></span>
            <span className="text-xs uppercase tracking-widest text-sage-200 font-semibold">Sin costo · Sin compromiso · En español</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight leading-tight max-w-3xl mx-auto">
            Tu familia merece estar{' '}
            <span className="font-editorial-italic font-normal text-sage-200">protegida hoy</span>
          </h2>
          <p className="text-sm sm:text-base text-sage-100/90 max-w-2xl mx-auto leading-relaxed font-light">
            Cotiza en menos de un minuto. Un asesor en español te contacta en 24 horas, sin presiones y sin letra chica.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 pt-4">
            <button
              onClick={() => openQuote()}
              className="px-8 py-3.5 rounded-full bg-white text-slate-900 font-semibold text-xs sm:text-sm hover:bg-sage-50 transition-all shadow-xl active:scale-95 flex items-center gap-2 group"
            >
              <span>Iniciar Cotización Inmediata</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-slate-900" aria-hidden="true" />
            </button>
            <button
              onClick={() => openQuote()}
              className="px-8 py-3.5 rounded-full border border-white/40 text-white font-medium text-xs sm:text-sm hover:bg-white/10 transition-all flex items-center gap-2"
            >
              <svg className="w-4 h-4 text-sage-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <span>Agendar Llamada con Asesor</span>
            </button>
          </div>
        </div>
      </section>
      {/* ── END: Contact ── */}

      {/* ── Footer ── */}
      <footer className="bg-slate-900 text-slate-300 pt-20 pb-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-16 border-b border-slate-800">
            {/* Brand Col */}
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center gap-2 text-white">
                <div className="w-5 h-5 rounded-full border-[2.2px] border-white flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                </div>
                <span className="font-medium text-lg tracking-tight">Aegis National Assurance</span>
              </div>
              <p className="text-xs text-slate-400 max-w-sm leading-relaxed font-light">
                Seguridad generacional, protección de vehículos y mascotas, y resguardo patrimonial integral con solidez institucional de primer nivel.
              </p>
              <div className="text-xs text-slate-500 pt-1">
                Correduría Aseguradora Autorizada • Miembro NAIC #892110 • Calificación AM Best A+ Superior
              </div>
              <div className="pt-4">
                <span className="block text-xs uppercase tracking-widest text-slate-400 font-semibold mb-3">Conéctate con Nosotros</span>
                <div className="flex items-center gap-3">
                  <a className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-300 hover:text-white transition-all hover:scale-105 border border-slate-700/60" href="https://linkedin.com" rel="noreferrer" target="_blank" aria-label="LinkedIn">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.39 9.74v-8.37H5.07v8.37h2.78z"></path></svg>
                  </a>
                  <a className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-300 hover:text-white transition-all hover:scale-105 border border-slate-700/60" href="https://twitter.com" rel="noreferrer" target="_blank" aria-label="X / Twitter">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
                  </a>
                  <a className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-300 hover:text-white transition-all hover:scale-105 border border-slate-700/60" href="https://instagram.com" rel="noreferrer" target="_blank" aria-label="Instagram">
                    <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                  </a>
                  <a className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-300 hover:text-white transition-all hover:scale-105 border border-slate-700/60" href="https://youtube.com" rel="noreferrer" target="_blank" aria-label="YouTube">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path></svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Solutions */}
            <div>
              <h5 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Soluciones</h5>
              <ul className="space-y-2.5 text-xs text-slate-400 font-light">
                <li><a className="hover:text-white transition-colors" href="#cotizador">Seguro de Auto / EV</a></li>
                <li><a className="hover:text-white transition-colors" href="#cotizador">Seguro de Mascotas VetDirect™</a></li>
                <li><a className="hover:text-white transition-colors" href="#cotizador">Seguro de Vida & Legado</a></li>
                <li><a className="hover:text-white transition-colors" href="#cotizador">Seguros Comerciales & Cyber</a></li>
                <li><a className="hover:text-white transition-colors" href="#cotizador">Salud & Medicare</a></li>
                <li><a className="hover:text-white transition-colors" href="#cotizador">Protección Patrimonial Umbrella</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h5 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Compañía</h5>
              <ul className="space-y-2.5 text-xs text-slate-400 font-light">
                <li><a className="hover:text-white transition-colors" href="#">Sobre Aegis National</a></li>
                <li><a className="hover:text-white transition-colors" href="/blog">Blog y Recursos</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Reportes de Solvencia Financiera</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Oportunidades de Carrera</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Sala de Prensa</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h5 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Atención al Titular</h5>
              <ul className="space-y-2.5 text-xs text-slate-400 font-light">
                <li><a className="hover:text-white transition-colors" href="#">Reportar un Siniestro de Emergencia</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Red de Clínicas VetDirect™</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Descargar Tarjeta de Identificación</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Documentos de Póliza</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Soporte al Cliente 24/7</a></li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-light gap-4">
            <div>
              <Link href="/admin/login" className="hover:opacity-60 transition-opacity">©</Link>{' '}
              {new Date().getFullYear()} Aegis National Assurance Group Inc. Todos los derechos reservados.
            </div>
            <div className="flex items-center gap-6">
              <a className="hover:text-slate-400 transition-colors" href="#">Aviso de Privacidad</a>
              <a className="hover:text-slate-400 transition-colors" href="#">Términos de Suscripción</a>
              <a className="hover:text-slate-400 transition-colors" href="#">Divulgación de Seguridad</a>
            </div>
          </div>
        </div>
      </footer>
      {/* ── END: Footer ── */}

      <QuoteModal
        open={quoteOpen}
        onClose={() => setQuoteOpen(false)}
        initialType={quoteType}
      />
    </>
  );
}
