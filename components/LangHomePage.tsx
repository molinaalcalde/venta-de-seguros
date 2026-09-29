'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
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
import Image from 'next/image';
import QuoteModal from '@/components/QuoteModal';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { Umbrella as PhUmbrella } from '@phosphor-icons/react';
import {
  REEL_SLIDES, solutionsTabs_es, solutionsTabs_en, TAB_TO_INS, ALL_INS_TYPES,
  FAQ_ES, FAQ_EN, HERO_VIDEOS, TIPO_LABEL, TIPO_LABEL_EN, COTIZADOR_ICONS,
  TRUST_STATS_ES, TRUST_STATS_EN, MARIA_BIO_ES, MARIA_BIO_EN,
} from '@/components/LangHomePageData';
import type { InsType } from '@/components/QuoteModal';
import { pushGTMEvent } from '@/lib/gtm';

export default function LangHomePage({ params }: { params: { lang: string } }) {
  const { lang } = params;
  const isEn = lang === 'en';

  // Navigation
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ['soluciones', 'coberturas-destacadas', 'por-que-aegis', 'faq'];
    const observers: IntersectionObserver[] = [];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: '-10% 0px -80% 0px', threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // ── Video Hero Carousel ──
  const [heroIndex, setHeroIndex] = useState(0);
  const videoRef0 = useRef<HTMLVideoElement | null>(null);
  const videoRef1 = useRef<HTMLVideoElement | null>(null);
  const videoRef2 = useRef<HTMLVideoElement | null>(null);
  const videoRefs = [videoRef0, videoRef1, videoRef2];
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goToVideo = useCallback((idx: number) => {
    setHeroIndex(idx);
  }, []);

  const goNext = useCallback(() => {
    setHeroIndex(prev => (prev + 1) % HERO_VIDEOS.length);
  }, []);

  useEffect(() => {
    HERO_VIDEOS.forEach((v, i) => {
      const el = videoRefs[i].current;
      if (!el) return;
      if (i === heroIndex) {
        el.currentTime = v.startTime;
        el.play().catch(() => {});
      } else {
        el.pause();
      }
    });
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setHeroIndex(prev => (prev + 1) % HERO_VIDEOS.length);
    }, 10000);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [heroIndex]);

  // ── Brand Story Reel ──
  const [reelIndex, setReelIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setReelIndex(i => (i + 1) % REEL_SLIDES.length), 4000);
    return () => clearInterval(t);
  }, []);

  // Solutions tabs
  const [activeTab, setActiveTab] = useState(0);
  const solutionsTabs = isEn ? solutionsTabs_en : solutionsTabs_es;
  const activeTabData = solutionsTabs[activeTab];

  // Quote modal
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [quoteType, setQuoteType] = useState<InsType | undefined>(undefined);

  const openQuote = (insType?: InsType, source = 'generic') => {
    setQuoteType(insType);
    setQuoteOpen(true);
    pushGTMEvent({
      event: 'quote_modal_open',
      insurance_type: insType ?? 'general',
      page_lang: lang,
      source,
    });
  };

  const faqItems = isEn ? FAQ_EN : FAQ_ES;
  const TIPO_LABELS = isEn ? TIPO_LABEL_EN : TIPO_LABEL;

  // Internal link helper
  const l = (path: string) => `/${lang}${path}`;

  return (
    <>
      {!isEn && <JsonLd />}
      {isEn && (
        <>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org', '@type': 'InsuranceAgency',
            name: 'Maria Fernanda Insurance Consulting',
            url: 'https://venta-de-seguros.vercel.app/en',
            description: 'Bilingual insurance agency specializing in coverage for immigrants and the Hispanic community across the US. Auto, life, health, pet, dental, and business insurance. ITIN accepted. No SSN required.',
            areaServed: { '@type': 'Country', name: 'United States' },
            availableLanguage: ['en-US', 'es-US'],
            priceRange: '$$',
          }) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org', '@type': 'FAQPage',
            mainEntity: FAQ_EN.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
          }) }} />
        </>
      )}

      {/* ── Fixed Sticky Navbar ── */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm' : 'bg-transparent'}`}>
        <div className="max-w-[1720px] mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-16">
            <a className="shrink-0" href={`/${lang}`}>
              <Image src="/logo.png" alt="Maria Fernanda Insurance Consulting" width={160} height={40} className={`h-10 w-auto transition-all duration-300 ${scrolled ? '' : 'brightness-0 invert'}`} />
            </a>
            <nav aria-label={isEn ? 'Main navigation' : 'Navegación principal'} className="hidden lg:flex items-center gap-7">
              {(isEn ? [
                { label: 'Coverage', href: '#coberturas-destacadas', sectionId: 'coberturas-destacadas' },
                { label: 'Why Us', href: '#por-que-aegis', sectionId: 'por-que-aegis' },
                { label: 'Blog', href: '/blog', sectionId: '' },
                { label: 'FAQ', href: '#faq', sectionId: 'faq' },
              ] : [
                { label: 'Soluciones', href: '#soluciones', sectionId: 'soluciones' },
                { label: 'Coberturas', href: '#coberturas-destacadas', sectionId: 'coberturas-destacadas' },
                { label: 'Por qué Nosotros', href: '#por-que-aegis', sectionId: 'por-que-aegis' },
                { label: 'Blog', href: '/blog', sectionId: '' },
                { label: 'FAQ', href: '#faq', sectionId: 'faq' },
              ]).map(({ label, href, sectionId }) => {
                const isActive = sectionId && activeSection === sectionId;
                return (
                  <a
                    key={label}
                    href={href}
                    className={`relative text-[13px] font-medium transition-all duration-200 pb-0.5 ${
                      isActive
                        ? scrolled ? 'text-slate-900' : 'text-white'
                        : scrolled ? 'text-slate-600 hover:text-slate-900' : 'text-white/70 hover:text-white'
                    }`}
                  >
                    {label}
                    {isActive && (
                      <span className={`absolute bottom-0 left-0 right-0 h-[1.5px] rounded-full ${scrolled ? 'bg-slate-900' : 'bg-white'}`} />
                    )}
                  </a>
                );
              })}
            </nav>
            <div className="flex items-center gap-2">
              <LanguageSwitcher scrolled={scrolled} />
              <button onClick={() => openQuote(undefined, 'desktop_nav')} className={`hidden lg:flex items-center gap-2 px-5 py-2 text-[13px] font-semibold rounded-full transition-all duration-200 active:scale-95 ${scrolled ? 'bg-slate-900 text-white hover:bg-slate-700' : 'bg-white text-slate-900 hover:bg-white/90 shadow-lg'}`}>
                {isEn ? 'Get a Quote' : 'Cotizar Ahora'}
              </button>
              <button onClick={() => openQuote(undefined, 'mobile_nav')} className={`lg:hidden flex items-center px-4 py-2 min-h-[44px] text-xs font-semibold rounded-full transition-all duration-200 active:scale-95 ${scrolled ? 'bg-slate-900 text-white' : 'bg-white text-slate-900 shadow-lg'}`}>
                {isEn ? 'Quote' : 'Cotizar'}
              </button>
              <button className="lg:hidden flex flex-col gap-[5px] p-3 min-h-[44px] min-w-[44px] items-center justify-center transition-all" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label={isEn ? 'Open menu' : 'Abrir menú'}>
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
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <div className="absolute top-0 right-0 h-full w-72 bg-white shadow-2xl flex flex-col">
            <div className="flex items-center justify-between px-6 h-16 border-b border-slate-100">
              <span className="font-medium text-slate-900">{isEn ? 'Menu' : 'Menú'}</span>
              <button onClick={() => setMobileMenuOpen(false)} className="p-3 min-h-[44px] min-w-[44px] flex items-center justify-center text-slate-500 hover:text-slate-900">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            <nav className="flex flex-col px-6 py-8 gap-1 flex-1">
              {(isEn ? [
                { label: 'Home', href: `/${lang}` },
                { label: 'Coverage', href: '#coberturas-destacadas' },
                { label: 'Blog', href: '/blog' },
                { label: 'FAQ', href: '#faq' },
              ] : [
                { label: 'Inicio', href: `/${lang}` },
                { label: 'Soluciones', href: '#soluciones' },
                { label: 'Blog', href: '/blog' },
                { label: 'Cotizador', href: '#cotizador' },
                { label: 'FAQ', href: '#faq' },
              ]).map(({ label, href }) => (
                <a key={label} href={href} onClick={() => setMobileMenuOpen(false)} className="py-3.5 px-3 rounded-xl text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-all border-b border-slate-100 last:border-0">{label}</a>
              ))}
            </nav>
            <div className="px-6 pb-8">
              <button onClick={() => { setMobileMenuOpen(false); openQuote(undefined, 'mobile_menu'); }} className="w-full py-3.5 rounded-xl bg-slate-900 text-white text-sm font-semibold text-center flex items-center justify-center gap-2 hover:bg-slate-800 transition-all">
                {isEn ? 'Get a Free Quote' : 'Cotizar Ahora'}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Hero — Full Bleed ── */}
      <div className="relative w-full min-h-[680px] lg:min-h-[860px] flex flex-col justify-between overflow-hidden">
        {/* Slot 0 */}
        <video ref={videoRefs[0]} src={HERO_VIDEOS[0].src} muted playsInline loop preload="metadata"
          onLoadedMetadata={() => { const el = videoRefs[0].current; if (el) el.currentTime = HERO_VIDEOS[0].startTime; }}
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ${heroIndex === 0 ? 'opacity-100' : 'opacity-0'}`}
        />
        {/* Slot 1 — desktop */}
        <video ref={videoRefs[1]} src="/videos/hero2-desktop.mp4" muted playsInline loop preload="metadata"
          onLoadedMetadata={() => { const el = videoRefs[1].current; if (el) el.currentTime = HERO_VIDEOS[1].startTime; }}
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 hidden md:block ${heroIndex === 1 ? 'opacity-100' : 'opacity-0'}`}
        />
        {/* Slot 1 — mobile */}
        <video src="/videos/hero2-mobile.mp4" muted playsInline loop preload="metadata"
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 md:hidden ${heroIndex === 1 ? 'opacity-100' : 'opacity-0'}`}
        />
        {/* Slot 2 — desktop */}
        <video ref={videoRefs[2]} src={HERO_VIDEOS[2].src} muted playsInline loop preload="metadata"
          onLoadedMetadata={() => { const el = videoRefs[2].current; if (el) el.currentTime = HERO_VIDEOS[2].startTime; }}
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 hidden md:block ${heroIndex === 2 ? 'opacity-100' : 'opacity-0'}`}
        />
        {/* Slot 2 — mobile (vertical) */}
        <video src="/videos/hero-auto-mobile.mp4" muted playsInline loop preload="metadata"
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 md:hidden ${heroIndex === 2 ? 'opacity-100' : 'opacity-0'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/15 to-black/70 z-[1]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/50 z-[1]"></div>
        <div className="h-16 relative z-10" />
        <div className="relative z-20 w-full px-6 sm:px-10 lg:px-16 pb-14 sm:pb-20 flex flex-col justify-end gap-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
            <div className="hidden lg:flex items-center gap-3 text-white/80 text-xs font-light select-none shrink-0">
              <div className="w-5 h-8 rounded-full border border-white/60 flex items-start justify-center pt-1.5">
                <span className="w-1 h-1.5 bg-white rounded-full animate-bounce"></span>
              </div>
              <span className="tracking-wide">Scroll Down</span>
            </div>
            <div className="max-w-2xl text-white lg:text-right">
              <div className="flex flex-wrap gap-2 mb-5 lg:justify-end">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/15 border border-white/25 backdrop-blur-sm text-xs text-white font-medium">
                  <Globe className="w-3.5 h-3.5" aria-hidden="true" />
                  {isEn ? '100% Bilingual Service' : 'Atención 100% en español'}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/15 border border-white/25 backdrop-blur-sm text-xs text-white font-medium">
                  <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
                  {isEn ? 'ITIN accepted with participating carriers' : 'Acepta ITIN · Sin SSN'}
                </span>
              </div>
              <h1 className="text-[40px] sm:text-5xl md:text-6xl lg:text-[76px] font-normal tracking-tight leading-[1.08] drop-shadow-sm">
                {isEn ? (
                  <>Insurance options<br /><span className="font-sans font-light">available</span>{' '}<span className="font-editorial-italic font-normal">without an SSN</span></>
                ) : (
                  <>Protegiendo <br /><span className="font-sans font-light">lo que más</span>{' '}<span className="font-editorial-italic font-normal">Valoras</span></>
                )}
              </h1>
              <p className="mt-4 text-white/90 text-sm sm:text-base font-light max-w-xl leading-relaxed lg:ml-auto">
                {isEn
                  ? 'Bilingual insurance guidance for individuals, families and businesses. Auto, Home, Life, Health and Commercial Insurance. ITIN accepted with participating carriers. No credit check to quote.'
                  : 'Seguros de auto, vida, salud y mascotas para tu familia. Agentes bilingüe que entienden tu comunidad, sin importar tu estatus migratorio.'}
              </p>
              <div className="mt-6 flex flex-wrap gap-4 items-center lg:justify-end">
                <button onClick={() => openQuote(undefined, 'hero')} className="px-6 py-3.5 rounded-full bg-white text-slate-900 font-semibold text-sm hover:bg-slate-100 transition-all shadow-lg active:scale-95 flex items-center gap-2 min-h-[44px]">
                  <span>{isEn ? 'Get My Free Quote' : 'Iniciar Cotización Inmediata'}</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
                <a className="group inline-flex items-center gap-2 text-xs sm:text-sm text-white/95 hover:text-white font-light tracking-wide underline underline-offset-8 decoration-white/50 hover:decoration-white transition-all" href="#coberturas-destacadas">
                  <span>{isEn ? 'See Coverage Options' : 'Explorar Coberturas'}</span>
                  <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 lg:justify-end">
            <div className="flex items-center gap-2">
              {HERO_VIDEOS.map((_, i) => (
                <button key={i} onClick={() => goToVideo(i)} aria-label={`Video ${i + 1}`} className="inline-flex items-center justify-center w-11 h-11">
                  <span className={`rounded-full transition-all duration-300 ${i === heroIndex ? 'w-6 h-2 bg-white' : 'w-2 h-2 bg-white/40 hover:bg-white/70'}`} />
                </button>
              ))}
            </div>
            <button onClick={goNext} aria-label={isEn ? 'Next video' : 'Siguiente video'} className="flex items-center gap-1.5 text-white/80 hover:text-white text-xs font-light transition-all border border-white/30 hover:border-white/60 rounded-full px-3 py-1.5 backdrop-blur-sm">
              <span>{isEn ? 'Next' : 'Siguiente'}</span>
              <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* ── Trust Stats Bar ── */}
      <div className="relative z-10 bg-white shadow-[0_4px_24px_rgba(0,0,0,0.10)] border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {(isEn ? TRUST_STATS_EN : TRUST_STATS_ES).map(({ value, label }, i) => (
              <div
                key={label}
                className={`flex flex-col items-center justify-center py-7 px-6 text-center ${i % 2 === 0 ? 'border-r border-slate-100' : ''} ${i < 2 ? 'border-b border-slate-100 lg:border-b-0' : ''} lg:border-r lg:last:border-r-0`}
              >
                <span className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">{value}</span>
                <span className="text-xs text-slate-500 mt-1.5 font-medium uppercase tracking-widest">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Solutions Section ── */}
      {!isEn && (
        <section className="py-20 lg:py-28 px-4 sm:px-8 max-w-7xl mx-auto" id="soluciones">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <div className="inline-flex items-center justify-center gap-2 mb-3 text-slate-700">
              <div className="w-4 h-4 rounded-full border-[1.8px] border-slate-800 flex items-center justify-center"><span className="w-1 h-1 bg-slate-800 rounded-full"></span></div>
              <span className="text-xs uppercase tracking-widest font-semibold text-slate-600">Todos los Seguros en un Solo Lugar</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-normal text-slate-900 tracking-tight leading-tight">
              El seguro que necesitas,{' '}<br /><span className="font-editorial-italic font-normal">explicado en tu idioma</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-3 max-w-xl mx-auto">Sin letra chica, sin presiones. Elige el tipo de seguro y un asesor bilingüe te acompaña desde la cotización hasta el momento de usarlo.</p>
          </div>
          <div className="bg-[#dbe7dc] rounded-[32px] p-4 sm:p-7 lg:p-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-6 items-stretch">
              <div className="md:col-span-4 flex flex-col justify-center space-y-2">
                {solutionsTabs.map((tab, idx) => (
                  <button key={idx} onClick={() => setActiveTab(idx)} className={`w-full text-left px-5 py-3 rounded-2xl font-medium text-xs sm:text-[13px] transition-all flex items-center justify-between ${activeTab === idx ? 'bg-white text-slate-900 font-semibold shadow-sm' : 'text-slate-700 hover:text-slate-950 hover:bg-white/40 py-2.5'}`}>
                    <span>{tab.label}</span>
                    {activeTab === idx ? <span className="w-2 h-2 rounded-full bg-slate-900"></span> : <ChevronRight className="w-3.5 h-3.5 opacity-60" aria-hidden="true" />}
                  </button>
                ))}
              </div>
              <div className="md:col-span-5 bg-[#ccdccc]/80 rounded-2xl p-7 lg:p-9 flex flex-col justify-between min-h-[280px] border border-white/20">
                <div>
                  <span className="text-xs uppercase tracking-wider text-slate-700 font-semibold">{activeTabData.category}</span>
                  <h3 className="text-2xl sm:text-3xl font-normal text-slate-900 tracking-tight leading-snug mt-3">{activeTabData.title}</h3>
                  <p className="text-xs text-slate-700 mt-2 font-light leading-relaxed">{activeTabData.description}</p>
                </div>
                <div className="pt-6">
                  <button onClick={() => openQuote(TAB_TO_INS[activeTab], 'solutions_tab')} className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-900 hover:underline">
                    <span>{activeTabData.cta}</span><ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="md:col-span-3 bg-[#f0f6f0]/90 rounded-2xl p-7 lg:p-8 flex flex-col justify-between min-h-[280px] border border-white/60">
                <div className="flex justify-end">
                  <button onClick={() => openQuote(TAB_TO_INS[activeTab], 'solutions_tab')} className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-slate-800 hover:scale-110 hover:text-black transition-all shadow-sm" title={isEn ? 'Get Quote' : 'Calcular Prima'}>
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">{activeTabData.price}</span>
                    <span className="text-slate-500 text-xs font-medium">/mes</span>
                  </div>
                  <p className="text-xs font-normal text-slate-600 mt-1">{activeTabData.priceLabel}</p>
                  <a className="mt-4 w-full py-2.5 px-4 rounded-xl bg-slate-900 text-white text-xs font-medium hover:bg-slate-800 transition-all text-center flex items-center justify-center gap-1.5" href="#cotizador">
                    <span>Calcular Prima</span><ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 px-4 sm:px-8">
              {[
                { icon: Globe, title: 'Cotiza en menos de un minuto', desc: 'Solo tu nombre y correo para empezar. Un asesor bilingüe te llama en 24 horas con tu cotización personalizada.' },
                { icon: Layers, title: 'Agrupa y ahorra', desc: 'Combina auto, hogar, vida y mascotas en una sola cuenta. Mientras más coberturas tienes con nosotros, mayor es tu descuento. Sujeto a términos y condiciones.' },
                { icon: ShieldCheck, title: 'Respaldo sólido detrás de ti', desc: 'Correduría autorizada con calificación AM Best A+ Superior. Cuando necesites usar tu seguro, el dinero está ahí.' },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-sage-100 flex items-center justify-center shrink-0 text-slate-800"><Icon className="w-5 h-5 text-sage-800" aria-hidden="true" /></div>
                  <div><h4 className="text-sm font-semibold text-slate-900">{title}</h4><p className="text-xs text-slate-500 mt-1 leading-relaxed">{desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Featured Coverage Lines ── */}
      <section className="py-20 bg-[#fafbfa] border-t border-stone-200/70" id="coberturas-destacadas">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-slate-500 font-semibold">{isEn ? 'Our most requested coverages' : 'Coberturas más solicitadas'}</span>
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-normal text-slate-900 tracking-tight leading-tight mt-2">
              {isEn ? <>Real protection for{' '}<span className="font-editorial-italic font-normal">what matters most</span></> : <>Protección real para{' '}<span className="font-editorial-italic font-normal">lo que más importa</span></>}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-3">
              {isEn ? 'No jargon. No fine print surprises. Every policy explained in plain language by a bilingual agent who understands your situation.' : 'Sin tecnicismos. Sin letra chica. Cada seguro explicado en español, con un asesor que entiende tu situación.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card – Auto */}
            <div className="group bg-white rounded-[28px] overflow-hidden shadow-sm border border-stone-200/70 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div className="relative h-52 w-full overflow-hidden">
                <video src="/videos/hero3.mp4" muted autoPlay loop playsInline preload="auto" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <span className="absolute bottom-4 right-4 text-xs font-medium text-white/90 bg-black/40 px-2.5 py-1 rounded-full backdrop-blur-sm">{isEn ? 'From $89/mo' : 'Desde $75/mes'}</span>
              </div>
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                <div className="space-y-3">
                  <h3 className="text-2xl font-normal text-slate-900 tracking-tight">{isEn ? 'Auto Insurance' : 'Seguro de Auto'}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-light">{isEn ? 'Coverage that fits your life and your budget. We help you compare auto insurance options from multiple carriers and explain your coverage clearly in English or Spanish.' : 'Tu auto es tu independencia. Cubrimos accidentes, robo, daños a terceros y asistencia en carretera. Si tienes un accidente, te atendemos en español desde el primer momento. Sujeto a términos y condiciones.'}</p>
                  <ul className="space-y-2 text-sm text-slate-600 pt-2">
                    {(isEn ? ['Liability, collision and comprehensive coverage', 'Multiple carrier options compared for you', 'Bilingual service in English and Spanish', 'Options may be available without an SSN'] : ['Cobertura de colisión, robo y daños a terceros', 'Asistencia en carretera 24/7 atendida en español', 'Sin SSN requerido para cotizar']).map(b => (
                      <li key={b} className="flex items-center gap-2"><svg className="w-4 h-4 text-sage-800 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>{b}</li>
                    ))}
                  </ul>
                </div>
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <Link href={l('/seguros/auto')} className="px-4 py-3 rounded-full border border-slate-200 hover:border-slate-400 text-slate-600 hover:text-slate-900 text-xs font-semibold inline-flex items-center gap-1 transition-all min-h-[44px]">{isEn ? 'View details →' : 'Ver detalle →'}</Link>
                  <button onClick={() => openQuote('Auto', 'card_auto')} className="px-5 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold inline-flex items-center gap-1.5 transition-all shadow-sm min-h-[44px]">{isEn ? 'Get Auto Quote' : 'Ver Cobertura Auto'} <span className="text-sm">→</span></button>
                </div>
              </div>
            </div>

            {/* Card – Mascotas */}
            <div className="group bg-white rounded-[28px] overflow-hidden shadow-sm border border-stone-200/70 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div className="relative h-52 w-full overflow-hidden">
                <video src="/videos/hero2-desktop.mp4" muted autoPlay loop playsInline preload="auto" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <span className="absolute bottom-4 right-4 text-xs font-medium text-white/90 bg-black/40 px-2.5 py-1 rounded-full backdrop-blur-sm">{isEn ? 'Plans from $29/mo' : 'Planes desde $29/mes'}</span>
              </div>
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                <div className="space-y-3">
                  <h3 className="text-2xl font-normal text-slate-900 tracking-tight">{isEn ? 'Pet Insurance' : 'Seguro de Mascotas'}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-light">{isEn ? 'Any vet. Up to 90% back. No network restrictions. Visit any licensed vet in the U.S. or Canada, pay the bill, and submit your claim online. We help you choose the right reimbursement level for your budget.' : 'Lleva a tu mascota a cualquier veterinario con licencia en EE.UU. — sin red restringida. Pagas la factura y recibes hasta el 90% de reembolso en menos de una semana. Una cirugía puede costarte $8,000 sin seguro. Sujeto a términos y condiciones.'}</p>
                  <ul className="space-y-2 text-sm text-slate-600 pt-2">
                    {(isEn ? ['Up to 90% reimbursement on covered expenses', 'Any licensed vet in the U.S. and Canada', 'Covers accidents, illness, dental and prescriptions', 'Plans starting at $29/mo. Subject to terms and conditions.'] : ['Hasta el 90% de reembolso — en menos de una semana', 'Cubre consultas, cirugías, vacunas y medicamentos', 'Cualquier veterinario con licencia en EE.UU. o Canadá']).map(b => (
                      <li key={b} className="flex items-center gap-2"><svg className="w-4 h-4 text-sage-800 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>{b}</li>
                    ))}
                  </ul>
                </div>
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <Link href={l('/seguros/mascotas')} className="px-4 py-3 rounded-full border border-slate-200 hover:border-slate-400 text-slate-600 hover:text-slate-900 text-xs font-semibold inline-flex items-center gap-1 transition-all min-h-[44px]">{isEn ? 'View details →' : 'Ver detalle →'}</Link>
                  <button onClick={() => openQuote('Mascotas', 'card_mascotas')} className="px-5 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold inline-flex items-center gap-1.5 transition-all shadow-sm min-h-[44px]">{isEn ? 'Quote Pet Insurance' : 'Cotizar Mascotas'} <span className="text-sm">→</span></button>
                </div>
              </div>
            </div>

            {/* Card – Vida */}
            <div className="group bg-white rounded-[28px] overflow-hidden shadow-sm border border-stone-200/70 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div className="relative h-52 w-full overflow-hidden">
                <video src="/videos/vida.mp4" muted autoPlay loop playsInline preload="auto" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <span className="absolute bottom-4 right-4 text-xs font-medium text-white/90 bg-black/40 px-2.5 py-1 rounded-full backdrop-blur-sm">{isEn ? 'Coverage from $500k' : 'Coberturas desde $500k'}</span>
              </div>
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                <div className="space-y-3">
                  <h3 className="text-2xl font-normal text-slate-900 tracking-tight">{isEn ? 'Life Insurance' : 'Seguro de Vida'}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-light">{isEn ? 'More affordable than most people expect. A healthy 30-year-old can get $500,000 in coverage for around $30 a month. We compare term and permanent life options from multiple carriers.' : 'Solo el 43% de los latinos en USA tiene seguro de vida. La mayoría cree que cuesta miles — empieza en $30/mes. Lo que dejas a tu familia no tiene precio. Lo que cuesta protegerlos, sí. Sujeto a términos y condiciones.'}</p>
                  <ul className="space-y-2 text-sm text-slate-600 pt-2">
                    {(isEn ? ['Term and permanent life options available', 'Living benefits available on qualifying policies', 'Coverage stays with you even if you change jobs', 'Licensed agent explains your options in plain English'] : ['Desde $30/mes para familias jóvenes', 'Living Benefits: acceso al dinero ante enfermedad grave', 'Sin SSN, acepta ITIN']).map(b => (
                      <li key={b} className="flex items-center gap-2"><svg className="w-4 h-4 text-sage-800 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>{b}</li>
                    ))}
                  </ul>
                </div>
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <Link href={l('/seguros/vida')} className="px-4 py-3 rounded-full border border-slate-200 hover:border-slate-400 text-slate-600 hover:text-slate-900 text-xs font-semibold inline-flex items-center gap-1 transition-all min-h-[44px]">{isEn ? 'View details →' : 'Ver detalle →'}</Link>
                  <button onClick={() => openQuote('Vida', 'card_vida')} className="px-5 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold inline-flex items-center gap-1.5 transition-all shadow-sm min-h-[44px]">{isEn ? 'Explore Life Insurance' : 'Explorar Vida'} <span className="text-sm">→</span></button>
                </div>
              </div>
            </div>

            {/* Card – Comercial */}
            <div className="group bg-white rounded-[28px] overflow-hidden shadow-sm border border-stone-200/70 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div className="relative h-52 w-full overflow-hidden">
                <video src="/videos/comercial-negocio.mp4" muted autoPlay loop playsInline preload="auto" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <span className="absolute bottom-4 right-4 text-xs font-medium text-white/90 bg-black/40 px-2.5 py-1 rounded-full backdrop-blur-sm">{isEn ? 'SMBs & Enterprises' : 'PyMEs y Corporativos'}</span>
              </div>
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                <div className="space-y-3">
                  <h3 className="text-2xl font-normal text-slate-900 tracking-tight">{isEn ? 'Business Insurance' : 'Seguro Comercial'}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-light">{isEn ? 'One incident can cost more than your annual revenue. We help small business owners compare commercial insurance options including general liability, property and workers\' comp.' : 'El 30% de los negocios enfrenta al menos una demanda civil. Sin seguro comercial, pagas con tu cuenta personal — no con la del negocio. Sujeto a términos y condiciones.'}</p>
                  <ul className="space-y-2 text-sm text-slate-600 pt-2">
                    {(isEn ? ['General liability and commercial property coverage', 'Workers\' compensation options available', 'Independent agent compares carriers for your industry', 'Bilingual support in English and Spanish'] : ['Local, equipos e inventario cubiertos', 'Responsabilidad civil si alguien se lastima', 'Cobertura sin historial empresarial previo requerido']).map(b => (
                      <li key={b} className="flex items-center gap-2"><svg className="w-4 h-4 text-sage-800 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>{b}</li>
                    ))}
                  </ul>
                </div>
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <Link href={l('/seguros/comercial')} className="px-4 py-3 rounded-full border border-slate-200 hover:border-slate-400 text-slate-600 hover:text-slate-900 text-xs font-semibold inline-flex items-center gap-1 transition-all min-h-[44px]">{isEn ? 'View details →' : 'Ver detalle →'}</Link>
                  <button onClick={() => openQuote('Comercial', 'card_comercial')} className="px-5 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold inline-flex items-center gap-1.5 transition-all shadow-sm min-h-[44px]">{isEn ? 'Protect My Business' : 'Proteger Empresa'} <span className="text-sm">→</span></button>
                </div>
              </div>
            </div>

            {/* Card – Auto Comercial */}
            <div className="group bg-white rounded-[28px] overflow-hidden shadow-sm border border-stone-200/70 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div className="relative h-52 w-full overflow-hidden">
                <video src="/videos/comercial.mp4" muted autoPlay loop playsInline preload="auto" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <span className="absolute bottom-4 right-4 text-xs font-medium text-white/90 bg-black/40 px-2.5 py-1 rounded-full backdrop-blur-sm">{isEn ? 'From $110/mo' : 'Desde $110/mes'}</span>
              </div>
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                <div className="space-y-3">
                  <h3 className="text-2xl font-normal text-slate-900 tracking-tight">{isEn ? 'Commercial Auto Insurance' : 'Auto Comercial'}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-light">{isEn ? 'Personal auto policies do not cover business use. If your employees or drivers use vehicles for work, your personal policy may not cover a claim. We help you find the right commercial auto coverage.' : 'Aceptaste el pedido. Tuviste un accidente. La aseguradora revisó el GPS: "uso comercial — reclamo denegado." Tu seguro personal no cubre tu trabajo. Este sí. Sujeto a términos y condiciones.'}</p>
                  <ul className="space-y-2 text-sm text-slate-600 pt-2">
                    {(isEn ? ['Covers vans, trucks, fleets and gig drivers', 'Hired and Non-Owned Auto (HNOA) coverage available', 'Business liability for work-related vehicle incidents', 'Bilingual service in English and Spanish'] : ['Cubre Uber/Lyft/DoorDash + vans y pickups de trabajo', 'Sin SSN para cotizar', 'Conductores adicionales incluidos']).map(b => (
                      <li key={b} className="flex items-center gap-2"><svg className="w-4 h-4 text-sage-800 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>{b}</li>
                    ))}
                  </ul>
                </div>
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <Link href={l('/seguros/auto-comercial')} className="px-4 py-3 rounded-full border border-slate-200 hover:border-slate-400 text-slate-600 hover:text-slate-900 text-xs font-semibold inline-flex items-center gap-1 transition-all min-h-[44px]">{isEn ? 'View details →' : 'Ver detalle →'}</Link>
                  <button onClick={() => openQuote('AutoComercial', 'card_auto_comercial')} className="px-5 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold inline-flex items-center gap-1.5 transition-all shadow-sm min-h-[44px]">{isEn ? 'Quote Commercial Auto' : 'Cotizar Flota'} <span className="text-sm">→</span></button>
                </div>
              </div>
            </div>

            {/* Card – Salud */}
            <div className="group bg-white rounded-[28px] overflow-hidden shadow-sm border border-stone-200/70 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div className="relative h-52 w-full overflow-hidden">
                <video src="/videos/salud.mp4" muted autoPlay loop playsInline preload="auto" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <span className="absolute bottom-4 right-4 text-xs font-medium text-white/90 bg-black/40 px-2.5 py-1 rounded-full backdrop-blur-sm">{isEn ? 'From $199/mo' : 'Desde $199/mes'}</span>
              </div>
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                <div className="space-y-3">
                  <h3 className="text-2xl font-normal text-slate-900 tracking-tight">{isEn ? 'Health Insurance' : 'Seguro de Salud'}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-light">{isEn ? 'We help you find a plan that fits your needs and your budget. Whether you need individual, family or small group coverage, we compare plans from multiple carriers and walk you through your options at no cost.' : 'HIPAA — ley federal — prohíbe compartir tu información médica con migración. El 29% de familias inmigrantes evitó el médico en 2025 por miedo (KFF). Atenderte no afecta tu estatus. Sujeto a términos y condiciones.'}</p>
                  <ul className="space-y-2 text-sm text-slate-600 pt-2">
                    {(isEn ? ['Individual, family and small group plans', 'ACA marketplace and private plan options', 'Side-by-side plan comparison at no cost', 'Bilingual support in English and Spanish'] : ['HIPAA: tu info médica no se comparte con migración', 'Sin SSN, acepta ITIN', 'Cubre familia completa desde $199/mes']).map(b => (
                      <li key={b} className="flex items-center gap-2"><svg className="w-4 h-4 text-sage-800 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>{b}</li>
                    ))}
                  </ul>
                </div>
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <Link href={l('/seguros/salud')} className="px-4 py-3 rounded-full border border-slate-200 hover:border-slate-400 text-slate-600 hover:text-slate-900 text-xs font-semibold inline-flex items-center gap-1 transition-all min-h-[44px]">{isEn ? 'View details →' : 'Ver detalle →'}</Link>
                  <button onClick={() => openQuote('Salud', 'card_salud')} className="px-5 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold inline-flex items-center gap-1.5 transition-all shadow-sm min-h-[44px]">{isEn ? 'View Health Plans' : 'Ver Planes de Salud'} <span className="text-sm">→</span></button>
                </div>
              </div>
            </div>

            {/* Card – Dental */}
            <div className="group bg-white rounded-[28px] overflow-hidden shadow-sm border border-stone-200/70 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div className="relative h-52 w-full overflow-hidden">
                <video src="/videos/dental.mp4" muted autoPlay loop playsInline preload="auto" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <span className="absolute bottom-4 right-4 text-xs font-medium text-white/90 bg-black/40 px-2.5 py-1 rounded-full backdrop-blur-sm">{isEn ? 'From $19/mo' : 'Desde $19/mes'}</span>
              </div>
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                <div className="space-y-3">
                  <h3 className="text-2xl font-normal text-slate-900 tracking-tight">{isEn ? 'Dental Insurance' : 'Seguro Dental'}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-light">{isEn ? 'Preventive care today prevents expensive procedures tomorrow. One root canal without coverage can cost $1,500 or more. We help you find affordable dental plans that cover cleanings, basic and major procedures.' : 'El 74% de adultos hispanos evita el dentista por el costo. Una endodoncia sin seguro: $1,500. Un implante: $3,500. Con plan desde $19/mes — cubierto. Sujeto a términos y condiciones.'}</p>
                  <ul className="space-y-2 text-sm text-slate-600 pt-2">
                    {(isEn ? ['Preventive cleanings with no waiting period', 'Basic and major procedure coverage included', 'Individual and family plans available', 'Plans starting at $19/mo. Subject to terms and conditions.'] : ['Limpieza preventiva incluida, sin período de espera', 'Tratamientos mayores con deducible bajo', 'Toda la familia en un solo plan']).map(b => (
                      <li key={b} className="flex items-center gap-2"><svg className="w-4 h-4 text-sage-800 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>{b}</li>
                    ))}
                  </ul>
                </div>
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <Link href={l('/seguros/dental')} className="px-4 py-3 rounded-full border border-slate-200 hover:border-slate-400 text-slate-600 hover:text-slate-900 text-xs font-semibold inline-flex items-center gap-1 transition-all min-h-[44px]">{isEn ? 'View details →' : 'Ver detalle →'}</Link>
                  <button onClick={() => openQuote('Dental', 'card_dental')} className="px-5 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold inline-flex items-center gap-1.5 transition-all shadow-sm min-h-[44px]">{isEn ? 'Quote Dental' : 'Cotizar Dental'} <span className="text-sm">→</span></button>
                </div>
              </div>
            </div>

            {/* Card – Paquete */}
            <div className="group bg-white rounded-[28px] overflow-hidden shadow-sm border border-stone-200/70 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div className="relative h-52 w-full overflow-hidden">
                <video src="/videos/paquete.mp4" muted autoPlay loop playsInline preload="auto" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <span className="absolute bottom-4 right-4 text-xs font-medium text-white/90 bg-black/40 px-2.5 py-1 rounded-full backdrop-blur-sm">{isEn ? 'Save up to 25%' : 'Hasta 25% de ahorro'}</span>
              </div>
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                <div className="space-y-3">
                  <h3 className="text-2xl font-normal text-slate-900 tracking-tight">{isEn ? 'Home and Auto Bundle' : 'Paquete Casa + Auto'}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-light">{isEn ? 'Bundling is the fastest way to lower both premiums at once. We help you combine your home or renters and auto policies from the same carrier. An independent agent shops multiple carriers to find your best rate.' : 'El landlord cubre las paredes. Tus cosas, no. El 71% de los renters latinos no tiene cobertura para sus pertenencias. Combina renters + auto y ahorra hasta $1,184/año. Sujeto a términos y condiciones.'}</p>
                  <ul className="space-y-2 text-sm text-slate-600 pt-2">
                    {(isEn ? ['Homeowners, renters and condo options available', 'Bundle discount applied to both policies', 'Independent agent shops multiple carriers', 'One contact for both policies and claims'] : ['Renters + auto: hasta $1,184/año de ahorro real', 'Cubre ropa, laptop y muebles — no solo las paredes', 'Sin SSN, acepta ITIN']).map(b => (
                      <li key={b} className="flex items-center gap-2"><svg className="w-4 h-4 text-sage-800 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>{b}</li>
                    ))}
                  </ul>
                </div>
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <Link href={l('/seguros/paquete-casa-auto')} className="px-4 py-3 rounded-full border border-slate-200 hover:border-slate-400 text-slate-600 hover:text-slate-900 text-xs font-semibold inline-flex items-center gap-1 transition-all min-h-[44px]">{isEn ? 'View details →' : 'Ver detalle →'}</Link>
                  <button onClick={() => openQuote('Paquete', 'card_paquete')} className="px-5 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold inline-flex items-center gap-1.5 transition-all shadow-sm min-h-[44px]">{isEn ? 'Build My Bundle' : 'Armar mi Paquete'} <span className="text-sm">→</span></button>
                </div>
              </div>
            </div>

            {/* Card – Protección Extra / Umbrella */}
            <div className="group bg-white rounded-[28px] overflow-hidden shadow-sm border border-stone-200/70 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div className="relative h-52 w-full overflow-hidden bg-gradient-to-br from-violet-900 to-violet-600 flex items-center justify-center">
                <PhUmbrella weight="duotone" className="w-28 h-28 text-white/10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <span className="absolute bottom-4 right-4 text-xs font-medium text-white/90 bg-black/40 px-2.5 py-1 rounded-full backdrop-blur-sm">{isEn ? 'From $19/mo' : 'Desde $19/mes'}</span>
              </div>
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                <div className="space-y-3">
                  <h3 className="text-2xl font-normal text-slate-900 tracking-tight">{isEn ? 'Umbrella Coverage' : 'Protección Extra'}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-light">{isEn ? 'Average jury award for bodily injury: $1,479,368 (III). Your policy caps at $300K. That gap comes out of your savings, your home, your wages — unless you have umbrella. From $19/mo. Subject to terms and conditions.' : 'Tu seguro cubre $300K. Si la demanda es de $800K, pueden embargarte hasta el 25% del salario. La Protección Extra cierra esa brecha — desde $19/mes. Sujeto a términos y condiciones.'}</p>
                  <ul className="space-y-2 text-sm text-slate-600 pt-2">
                    {(isEn ? ['$1M–$5M in additional liability coverage', 'Covers teen drivers, pools, dogs & social host', '$19/mo — most cost-effective protection available'] : ['Desde $1M de cobertura adicional', 'Cubre autos, hogar y responsabilidad civil', 'Protege salario y ahorros ante demandas civiles']).map(b => (
                      <li key={b} className="flex items-center gap-2"><svg className="w-4 h-4 text-sage-800 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>{b}</li>
                    ))}
                  </ul>
                </div>
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <Link href={l('/seguros/proteccion-extra')} className="px-4 py-3 rounded-full border border-slate-200 hover:border-slate-400 text-slate-600 hover:text-slate-900 text-xs font-semibold inline-flex items-center gap-1 transition-all min-h-[44px]">{isEn ? 'View details →' : 'Ver detalle →'}</Link>
                  <button onClick={() => openQuote('Umbrella', 'card_umbrella')} className="px-5 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold inline-flex items-center gap-1.5 transition-all shadow-sm min-h-[44px]">{isEn ? 'Add Umbrella Coverage' : 'Añadir Protección Extra'} <span className="text-sm">→</span></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Us ── */}
      <section className="py-20 lg:py-28 bg-white border-t border-stone-100" id="por-que-aegis">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-widest font-semibold text-slate-600">{isEn ? 'Why choose us' : 'Por qué elegirnos'}</span>
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-normal text-slate-900 tracking-tight leading-tight mt-3">
              {isEn ? <>Here when you<br /><span className="font-editorial-italic font-normal">need us most.</span></> : <>Seguros que entienden{' '}<span className="font-editorial-italic font-normal">tu comunidad</span></>}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {(isEn ? [
              { icon: Globe, title: '100% Bilingual', desc: 'Every agent speaks English and Spanish fluently. You choose the language — we adapt to you, not the other way around.' },
              { icon: Lock, title: '100% Private', desc: 'Your information is never shared with government agencies or immigration authorities. HIPAA compliant and fully regulated.' },
              { icon: ShieldCheck, title: 'No SSN Required', desc: 'We accept ITIN and do not require a Social Security Number to quote or enroll. Coverage for everyone, regardless of immigration status.' },
              { icon: CreditCard, title: 'No Credit Check to Quote', desc: 'Getting a quote doesn\'t affect your credit score and doesn\'t require a credit history. Just answer a few questions and see your options.' },
            ] : [
              { icon: Globe, title: 'Agentes 100% bilingüe', desc: 'Te atendemos completamente en español. Sin traductores, sin malentendidos. Tu asesor habla tu idioma de principio a fin.' },
              { icon: Lock, title: 'Tu privacidad, protegida', desc: 'Tu información personal nunca se comparte con terceros ni agencias gubernamentales sin tu consentimiento explícito.' },
              { icon: ShieldCheck, title: 'Sin SSN para cotizar', desc: 'Cotiza sin número de seguro social. Aceptamos ITIN y trabajamos con familias en todas las situaciones migratorias.' },
              { icon: Heart, title: 'Comunidad primero', desc: 'Entendemos los desafíos de construir una vida en un país nuevo. Estamos aquí para proteger lo que con tanto esfuerzo has logrado.' },
            ]).map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-[#f4f8f4] rounded-[24px] p-7 flex flex-col gap-4">
                <div className="w-11 h-11 rounded-2xl bg-white border border-sage-200 flex items-center justify-center shadow-sm"><Icon className="w-5 h-5 text-slate-800" aria-hidden="true" /></div>
                <div><h3 className="text-sm font-semibold text-slate-900">{title}</h3><p className="text-xs text-slate-500 mt-1.5 leading-relaxed">{desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Meet María Fernanda ── */}
      <section className="py-20 lg:py-28 bg-[#f4f8f4] border-t border-stone-200/60">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Photo / Avatar */}
            <div className="flex justify-center lg:justify-end order-2 lg:order-1">
              <div className="relative">
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-[32px] shadow-xl overflow-hidden">
                  <Image src="/maria-fernanda.jpg" alt="María Fernanda" fill className="object-cover object-top" />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl px-4 py-3 shadow-lg border border-stone-200/70 flex items-center gap-2">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-slate-700">200+ familias</span>
                </div>
              </div>
            </div>
            {/* Bio */}
            <div className="order-1 lg:order-2">
              <span className="text-xs uppercase tracking-widest font-semibold text-slate-500 mb-3 block">
                {isEn ? 'Your agent' : 'Tu asesora'}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-normal text-slate-900 tracking-tight leading-tight">
                {(isEn ? MARIA_BIO_EN : MARIA_BIO_ES).name}
                <br />
                <span className="font-editorial-italic font-normal text-[#3d6b42]">
                  {(isEn ? MARIA_BIO_EN : MARIA_BIO_ES).subtitle}
                </span>
              </h2>
              <p className="text-xs uppercase tracking-wide text-slate-500 mt-2 mb-5 font-medium">
                {(isEn ? MARIA_BIO_EN : MARIA_BIO_ES).title}
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-light max-w-lg">
                {(isEn ? MARIA_BIO_EN : MARIA_BIO_ES).bio}
              </p>
              <blockquote className="mt-6 border-l-2 border-[#3d6b42] pl-4 text-sm text-slate-700 font-light italic leading-relaxed">
                {(isEn ? MARIA_BIO_EN : MARIA_BIO_ES).quote}
              </blockquote>
              <div className="mt-8 flex flex-wrap gap-4 items-center">
                <a
                  href={(isEn ? MARIA_BIO_EN : MARIA_BIO_ES).ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => pushGTMEvent({ event: 'whatsapp_click', source: 'bio_section', page_lang: lang })}
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#25D366] text-white text-sm font-semibold hover:bg-[#1eb857] transition-all shadow-md active:scale-95"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-4 h-4" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  {(isEn ? MARIA_BIO_EN : MARIA_BIO_ES).cta}
                </a>
                <button onClick={() => openQuote(undefined, 'bio_section')} className="text-sm font-medium text-slate-700 hover:text-slate-900 underline underline-offset-4 transition-colors">
                  {isEn ? 'Or get a free quote' : 'O cotizá gratis'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quote Section ── */}
      <section className="py-20 bg-[#f7faf7]" id="cotizador">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white rounded-[32px] p-8 sm:p-12 shadow-sm border border-stone-200/70">
            <div className="max-w-xl mx-auto text-center mb-8">
              <span className="text-xs font-semibold uppercase tracking-widest text-sage-800">{isEn ? 'FREE QUOTE · NO SSN · BILINGUAL' : 'Cotización Online · Sin SSN · En Español'}</span>
              <h3 className="text-2xl sm:text-3xl font-normal text-slate-900 mt-2 tracking-tight">
                {isEn ? <>Your personalized{' '}<span className="font-editorial-italic">insurance quote</span></> : <>Tu cotización{' '}<span className="font-editorial-italic">personalizada</span></>}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-2">
                {isEn ? 'Choose your coverage, answer a few quick questions, and a bilingual specialist will contact you within 15 minutes.' : 'Elige tu seguro, responde unas preguntas rápidas y un asesor bilingüe te contacta en 15 minutos.'}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
              {ALL_INS_TYPES.map(tipo => {
                const Icon = COTIZADOR_ICONS[tipo];
                return (
                  <button key={tipo} onClick={() => openQuote(tipo)} className="flex items-center justify-center gap-2 px-4 py-3 rounded-2xl border-2 border-slate-200 bg-white hover:border-slate-800 hover:bg-slate-800 hover:text-white text-slate-700 text-sm font-medium transition-all">
                    <Icon weight="duotone" className="w-4 h-4 shrink-0" />
                    {TIPO_LABELS[tipo]}
                  </button>
                );
              })}
            </div>
            <button onClick={() => openQuote(undefined, 'cotizador')} className="w-full py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold transition-all shadow-md active:scale-95 flex items-center justify-center gap-2">
              <span>{isEn ? 'Get My Free Quote Now' : 'Iniciar mi cotización gratis'}</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
            <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-center gap-4 text-[11px] text-slate-400">
              <span className="flex items-center gap-1.5"><Lock className="w-3.5 h-3.5 text-sage-800" aria-hidden="true" />{isEn ? 'No SSN required' : 'Sin SSN — aceptamos ITIN'}</span>
              <span>·</span>
              <span>{isEn ? '100% bilingual service' : 'Atención 100% en español'}</span>
              <span>·</span>
              <span>{isEn ? 'No spam' : 'Sin presiones · Sin spam'}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-[#fafbfa] border-t border-stone-200/70" id="faq">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-xs uppercase tracking-widest text-slate-500 font-semibold">{isEn ? 'Frequently Asked Questions' : 'Claridad & Transparencia'}</span>
            <h2 className="text-3xl sm:text-4xl font-normal text-slate-900 tracking-tight leading-tight mt-2">
              {isEn ? <>Your questions,{' '}<span className="font-editorial-italic font-normal">answered.</span></> : <>Preguntas <span className="font-editorial-italic font-normal">Frecuentes</span></>}
            </h2>
          </div>
          <div className="space-y-4">
            {faqItems.map(({ n, q, a, open }) => (
              <details key={n} className="group bg-white rounded-2xl p-6 border border-stone-200/70 shadow-sm hover:shadow-md transition-all duration-200 open:bg-sage-50/40 open:border-sage-300" open={open}>
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-semibold text-sm sm:text-base text-slate-900 select-none">
                  <span className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-sage-100 text-sage-800 flex items-center justify-center text-xs font-bold shrink-0">{n}</span>
                    {q}
                  </span>
                  <span className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 group-open:rotate-45 transition-transform duration-200 text-lg font-light leading-none shrink-0">+</span>
                </summary>
                <p className="text-sm text-slate-600 mt-4 pl-10 leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="relative py-20 bg-gradient-to-br from-[#17281b] via-[#233d28] to-[#0f1d12] text-white overflow-hidden border-t border-b border-sage-800/60 shadow-2xl" id="contacto">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#53825d]/20 blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#86f2e4]/10 blur-3xl pointer-events-none"></div>
        <div className="relative max-w-5xl mx-auto px-6 text-center space-y-6 z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#89f5e7]"></span>
            <span className="text-xs uppercase tracking-widest text-sage-200 font-semibold">{isEn ? 'No cost · No commitment · Bilingual' : 'Sin costo · Sin compromiso · En español'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight leading-tight max-w-3xl mx-auto">
            {isEn ? <>Ready to protect<br /><span className="font-editorial-italic font-normal text-sage-200">everything you&apos;ve built?</span></> : <>Tu familia merece estar{' '}<span className="font-editorial-italic font-normal text-sage-200">protegida hoy</span></>}
          </h2>
          <p className="text-sm sm:text-base text-sage-100/90 max-w-2xl mx-auto leading-relaxed font-light">
            {isEn ? 'Fill out the form and a bilingual specialist will contact you within 24 hours. No pressure, no fine print, no SSN required.' : 'Completá el formulario y un asesor en español te contacta en 24 horas. Sin presiones, sin letra chica.'}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 pt-4">
            <button onClick={() => openQuote(undefined, 'final_cta')} className="px-8 py-3.5 rounded-full bg-white text-slate-900 font-semibold text-xs sm:text-sm hover:bg-sage-50 transition-all shadow-xl active:scale-95 flex items-center gap-2 group">
              <span>{isEn ? 'Get My Free Quote' : 'Iniciar Cotización Inmediata'}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-slate-900" aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-black text-slate-300 pt-20 pb-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10">
            <div className="md:col-span-2 space-y-4">
              <div className="text-white"><Image src="/logo.png" alt="Maria Fernanda Insurance Consulting" width={160} height={40} className="h-10 w-auto brightness-0 invert" /></div>
              <p className="text-xs text-slate-400 max-w-sm leading-relaxed font-light">{isEn ? 'Bilingual insurance agency for the Hispanic community and immigrant families across the United States.' : 'Seguridad generacional, protección de vehículos y mascotas, y resguardo patrimonial integral.'}</p>
              <div className="text-xs text-slate-500 pt-1">Correduría Aseguradora Autorizada • Miembro NAIC #892110 • Calificación AM Best A+ Superior</div>
              {/* ── Social ── */}
              <div className="flex items-center gap-3 pt-2">
                <a href="https://www.instagram.com/insurancebymf_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-slate-500 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h5 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">{isEn ? 'Insurance' : 'Soluciones'}</h5>
              <ul className="space-y-2.5 text-xs text-slate-400 font-light">
                {[
                  { href: l('/seguros/auto'), label: isEn ? 'Car Insurance' : 'Seguro de Auto' },
                  { href: l('/seguros/mascotas'), label: isEn ? 'Pet Insurance' : 'Seguro de Mascotas' },
                  { href: l('/seguros/vida'), label: isEn ? 'Life Insurance' : 'Seguro de Vida' },
                  { href: l('/seguros/salud'), label: isEn ? 'Health Insurance' : 'Seguro de Salud' },
                  { href: l('/seguros/dental'), label: isEn ? 'Dental Insurance' : 'Seguro Dental' },
                  { href: l('/seguros/comercial'), label: isEn ? 'Business Insurance' : 'Seguro Comercial' },
                ].map(({ href, label }) => (
                  <li key={href}><Link className="hover:text-white transition-colors" href={href}>{label}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">{isEn ? 'Company' : 'Compañía'}</h5>
              <ul className="space-y-2.5 text-xs text-slate-400 font-light">
                <li><a className="hover:text-white transition-colors" href="/blog">{isEn ? 'Blog & Resources' : 'Blog y Recursos'}</a></li>
                <li><Link className="hover:text-white transition-colors" href={isEn ? '/es' : '/en'}>{isEn ? 'Ver en Español' : 'View in English'}</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">{isEn ? 'Support' : 'Atención'}</h5>
              <ul className="space-y-2.5 text-xs text-slate-400 font-light">
                <li><a className="hover:text-white transition-colors" href="#cotizador">{isEn ? 'Get a Free Quote' : 'Cotizar gratis'}</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-600 font-light gap-4">
            <div>
              <Link href="/admin/login" className="hover:opacity-60 transition-opacity">©</Link>{' '}
              {new Date().getFullYear()} Maria Fernanda Insurance Consulting. {isEn ? 'All rights reserved.' : 'Todos los derechos reservados.'}
            </div>
            <div className="flex items-center gap-4">
              <Link href={isEn ? '/es' : '/en'} className="hover:text-slate-400 transition-colors">{isEn ? 'Español' : 'English'}</Link>
            </div>
          </div>
        </div>
      </footer>

      <QuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} initialType={quoteType} />
    </>
  );
}
