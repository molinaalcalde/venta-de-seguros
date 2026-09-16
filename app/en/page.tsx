'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import {
  Shield, ArrowRight, ShieldCheck, Layers, CreditCard,
  Sparkles, Lock, Globe, Heart, Star,
} from 'lucide-react';
import Link from 'next/link';
import QuoteModal, { type InsType, TIPO_LABEL } from '@/components/QuoteModal';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import type { ComponentType } from 'react';
import {
  Car as PhCar, Truck as PhTruck, PawPrint as PhPaw, Heart as PhHeart,
  Stethoscope as PhSteth, Tooth as PhTooth, Package as PhPkg,
  Buildings as PhBldg, Umbrella as PhUmbrella,
} from '@phosphor-icons/react';

type PhIcon = ComponentType<{ weight?: string; className?: string }>;
const COTIZADOR_ICONS: Record<string, PhIcon> = {
  Auto:          PhCar as PhIcon,
  AutoComercial: PhTruck as PhIcon,
  Mascotas:      PhPaw as PhIcon,
  Vida:          PhHeart as PhIcon,
  Salud:         PhSteth as PhIcon,
  Dental:        PhTooth as PhIcon,
  Paquete:       PhPkg as PhIcon,
  Comercial:     PhBldg as PhIcon,
  Umbrella:      PhUmbrella as PhIcon,
};

const TIPO_LABEL_EN: Record<InsType, string> = {
  Auto:          'Car Insurance',
  AutoComercial: 'Commercial Auto',
  Mascotas:      'Pet Insurance',
  Vida:          'Life Insurance',
  Salud:         'Health Insurance',
  Comercial:     'Business Insurance',
  Umbrella:      'Umbrella Coverage',
  Dental:        'Dental Insurance',
  Paquete:       'Home + Auto Bundle',
};

const HERO_VIDEOS = [
  { src: '/videos/hero1.mp4', startTime: 2 },
  { src: '/videos/hero2.mp4', startTime: 10 },
  { src: '/videos/hero3.mp4', startTime: 0 },
] as const;

const FAQ_EN = [
  {
    q: 'Do I need a Social Security Number to get insurance?',
    a: 'No. We accept ITIN (Individual Taxpayer Identification Number) and do not require an SSN to quote or enroll. Many of our clients have obtained coverage without an SSN.',
  },
  {
    q: 'Are your agents bilingual?',
    a: 'Yes. All of our agents are bilingual (English and Spanish). You can communicate with us in whichever language makes you most comfortable.',
  },
  {
    q: 'How long does it take to get a quote?',
    a: 'Our online quote form takes about 90 seconds to complete. A bilingual agent will contact you within 15 minutes with your personalized options.',
  },
  {
    q: 'Can I insure my work van or delivery truck?',
    a: 'Absolutely. We offer commercial auto insurance for vans, moving trucks, pickup trucks, and fleets. Personal auto policies do not cover commercial use.',
  },
  {
    q: 'What types of pet insurance do you offer?',
    a: 'We offer VetDirect™ plans that pay the veterinary clinic directly — no upfront payment, no waiting weeks for reimbursement. Coverage includes consultations, surgeries, vaccinations, and medications.',
  },
  {
    q: 'Can I bundle my home and auto insurance?',
    a: 'Yes, and it\'s highly recommended. Our Home + Auto bundle can save you up to 25%. The more coverages you add, the greater your discount.',
  },
  {
    q: 'Is my information kept private?',
    a: 'Absolutely. Your personal information is 100% confidential. We do not share it with any government agency or immigration authority. We are governed by HIPAA and state insurance regulations.',
  },
  {
    q: 'How does life insurance work for my family?',
    a: 'Life insurance provides a tax-free payment to your family if something happens to you. It can also include a living benefit — access to funds while you are still alive if you are diagnosed with a serious illness.',
  },
];

export default function EnglishPage() {
  const [scrolled, setScrolled]           = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [heroIndex, setHeroIndex]         = useState(0);
  const [quoteOpen, setQuoteOpen]         = useState(false);
  const [quoteType, setQuoteType]         = useState<InsType | undefined>(undefined);
  const [openFaq, setOpenFaq]             = useState<number | null>(null);

  const videoRef0 = useRef<HTMLVideoElement>(null);
  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);
  const videoRefs = [videoRef0, videoRef1, videoRef2] as const;
  const timerRef  = useRef<ReturnType<typeof setInterval> | null>(null);

  // Scroll header
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Video carousel
  const goToVideo = useCallback((idx: number) => {
    const prev = videoRefs[heroIndex as 0 | 1 | 2]?.current;
    const next = videoRefs[idx as 0 | 1 | 2]?.current;
    if (prev) prev.pause();
    if (next) { next.currentTime = HERO_VIDEOS[idx].startTime; next.play().catch(() => {}); }
    setHeroIndex(idx);
  }, [heroIndex, videoRefs]);

  const goNext = useCallback(() => goToVideo((heroIndex + 1) % HERO_VIDEOS.length), [heroIndex, goToVideo]);

  useEffect(() => {
    const el = videoRefs[heroIndex as 0 | 1 | 2]?.current;
    if (el) { el.currentTime = HERO_VIDEOS[heroIndex].startTime; el.play().catch(() => {}); }
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(goNext, 10000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [heroIndex, goNext]);

  function openQuote(type?: InsType) { setQuoteType(type); setQuoteOpen(true); }

  const CHECKMARK = (
    <svg className="w-4 h-4 text-sage-800 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );

  return (
    <>
      {/* ── JSON-LD Schema (English) ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'InsuranceAgency',
            name: 'Aegis National Assurance',
            url: 'https://venta-de-seguros.vercel.app/en',
            description: 'Bilingual insurance agency serving the Hispanic community across the US. Auto, life, health, pet, dental, and business insurance. ITIN accepted.',
            areaServed: 'US',
            availableLanguage: ['en-US', 'es-US'],
            priceRange: '$$',
            sameAs: ['https://venta-de-seguros.vercel.app'],
          }),
        }}
      />

      {/* ── HEADER ── */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? 'h-16' : 'h-20'}`}>
            <a href="/en" className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-300 ${
                scrolled ? 'bg-slate-900' : 'bg-white/20 backdrop-blur-sm'
              }`}>
                <Shield className={`w-4 h-4 transition-all duration-300 ${scrolled ? 'text-white' : 'text-white'}`} />
              </div>
              <div className="leading-none">
                <span className={`block font-semibold text-sm tracking-tight transition-all duration-300 ${scrolled ? 'text-slate-900' : 'text-white'}`}>Aegis</span>
                <span className={`block font-medium tracking-[0.1em] uppercase text-[8px] transition-all duration-300 ${scrolled ? 'text-slate-400' : 'text-white/50'}`}>National Assurance</span>
              </div>
            </a>

            <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-7">
              {[
                { label: 'Coverage', href: '#coverage' },
                { label: 'Why Aegis', href: '#why-aegis' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Blog', href: '/blog' },
              ].map(({ label, href }) => (
                <a key={label} href={href} className={`text-[13px] font-medium transition-all duration-200 ${
                  scrolled ? 'text-slate-600 hover:text-slate-900' : 'text-white/80 hover:text-white'
                }`}>{label}</a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <LanguageSwitcher scrolled={scrolled} />
              <button onClick={() => openQuote()} className={`hidden lg:flex items-center gap-2 px-5 py-2 text-[13px] font-semibold rounded-full transition-all duration-200 active:scale-95 ${
                scrolled ? 'bg-slate-900 text-white hover:bg-slate-700' : 'bg-white text-slate-900 hover:bg-white/90 shadow-lg'
              }`}>
                Get a Quote
              </button>
              <button className="lg:hidden flex flex-col gap-[5px] p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Open menu">
                <span className={`block w-5 h-[1.5px] transition-all duration-300 ${scrolled ? 'bg-slate-900' : 'bg-white'} ${mobileMenuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`}></span>
                <span className={`block w-5 h-[1.5px] transition-all duration-300 ${scrolled ? 'bg-slate-900' : 'bg-white'} ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-5 h-[1.5px] transition-all duration-300 ${scrolled ? 'bg-slate-900' : 'bg-white'} ${mobileMenuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`}></span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── MOBILE MENU ── */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <div className="absolute top-0 right-0 h-full w-72 bg-white shadow-2xl flex flex-col">
            <div className="flex items-center justify-between px-6 h-16 border-b border-slate-100">
              <span className="font-medium text-slate-900">Menu</span>
              <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-slate-500 hover:text-slate-900">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            <nav className="flex flex-col px-6 py-8 gap-1 flex-1">
              {[
                { label: 'Home', href: '/en' },
                { label: 'Coverage', href: '#coverage' },
                { label: 'Why Aegis', href: '#why-aegis' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Blog', href: '/blog' },
              ].map(({ label, href }) => (
                <a key={label} href={href} onClick={() => setMobileMenuOpen(false)}
                  className="py-3.5 px-3 rounded-xl text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-all border-b border-slate-100 last:border-0">
                  {label}
                </a>
              ))}
            </nav>
            <div className="px-6 pb-8 space-y-3">
              <div className="flex justify-center"><LanguageSwitcher scrolled={true} /></div>
              <a href="#quote" onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 rounded-xl bg-slate-900 text-white text-sm font-semibold text-center flex items-center justify-center gap-2 hover:bg-slate-800 transition-all">
                Get a Free Quote <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden" aria-label="Hero">
        {/* Video backgrounds */}
        {HERO_VIDEOS.map((v, i) => (
          <video
            key={i}
            ref={i === 0 ? videoRef0 : videoRef1}
            src={v.src}
            muted playsInline loop preload="auto"
            onLoadedMetadata={() => {
              const el = videoRefs[i as 0 | 1 | 2]?.current;
              if (el) el.currentTime = v.startTime;
            }}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
            style={{ opacity: heroIndex === i ? 1 : 0 }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/20" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 pt-24 pb-20 w-full">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <ShieldCheck className="w-3.5 h-3.5 text-white/80" />
              <span className="text-white/80 text-xs font-medium tracking-wide uppercase">No SSN Required · ITIN Accepted</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-normal text-white leading-tight tracking-tight mb-5">
              Protection for<br />
              <span className="font-editorial-italic">every family.</span>
            </h1>
            <p className="text-white/75 text-base sm:text-lg leading-relaxed mb-8 max-w-md">
              Bilingual agents. No Social Security Number required. Auto, life, health, and more — all explained in plain language, in whichever language you prefer.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button onClick={() => openQuote()} className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-slate-900 text-sm font-semibold rounded-full hover:bg-white/90 transition-all active:scale-95 shadow-xl">
                Get My Free Quote <ArrowRight className="w-4 h-4" />
              </button>
              <a href="#coverage" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/30 text-white text-sm font-medium rounded-full hover:bg-white/10 transition-all backdrop-blur-sm">
                See Coverage Options
              </a>
            </div>
            <p className="text-white/40 text-xs mt-5">Free quote · No commitment · Results in 90 seconds</p>
          </div>

          {/* Hero carousel controls */}
          <div className="absolute bottom-10 left-5 sm:left-8 flex items-center gap-4">
            <div className="flex gap-2">
              {HERO_VIDEOS.map((_, i) => (
                <button key={i} onClick={() => goToVideo(i)} aria-label={`Video ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${heroIndex === i ? 'w-6 h-2 bg-white' : 'w-2 h-2 bg-white/40 hover:bg-white/60'}`} />
              ))}
            </div>
            <button onClick={goNext} className="text-xs text-white/60 hover:text-white/90 transition-colors font-medium">
              Next →
            </button>
          </div>
        </div>
      </section>

      {/* ── TRUST BADGES ── */}
      <section className="py-6 bg-white border-b border-stone-100">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-slate-500 text-xs font-medium">
          {[
            { icon: <Lock className="w-3.5 h-3.5" />, text: 'ITIN Accepted' },
            { icon: <Globe className="w-3.5 h-3.5" />, text: '100% Bilingual Service' },
            { icon: <ShieldCheck className="w-3.5 h-3.5" />, text: 'No SSN Required' },
            { icon: <Star className="w-3.5 h-3.5 fill-current text-amber-400" />, text: '4.9 / 5 · 3,200+ families' },
            { icon: <CreditCard className="w-3.5 h-3.5" />, text: 'No Credit Check to Quote' },
          ].map(({ icon, text }) => (
            <div key={text} className="flex items-center gap-1.5">{icon}<span>{text}</span></div>
          ))}
        </div>
      </section>

      {/* ── COVERAGE CARDS ── */}
      <section className="py-20 bg-[#fafbfa] border-t border-stone-200/70" id="coverage">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-slate-500 font-semibold">Our most requested coverages</span>
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-normal text-slate-900 tracking-tight leading-tight mt-2">
              Real protection for{' '}
              <span className="font-editorial-italic font-normal">what matters most</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-3">
              No jargon. No fine print surprises. Every policy explained in plain language by a bilingual agent who understands your situation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card – Auto */}
            <div className="group bg-white rounded-[28px] overflow-hidden shadow-sm border border-stone-200/70 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div className="relative h-52 w-full overflow-hidden">
                <video src="/videos/hero3.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-slate-800 backdrop-blur-sm shadow-sm">Personal & EV</span>
                <span className="absolute bottom-4 right-4 text-xs font-medium text-white/90 bg-black/40 px-2.5 py-1 rounded-full backdrop-blur-sm">From $89/mo</span>
              </div>
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                <div className="space-y-3">
                  <h3 className="text-2xl font-normal text-slate-900 tracking-tight">Car Insurance</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">Your car is your independence. We cover accidents, theft, and liability — with 24/7 roadside assistance handled in English or Spanish. No SSN needed to get a quote. Subject to terms and conditions.</p>
                  <ul className="space-y-2 text-xs text-slate-600 pt-2">
                    {['Collision, theft, and liability coverage', '24/7 roadside assistance in English & Spanish', 'No SSN required to quote'].map(b => (
                      <li key={b} className="flex items-center gap-2">{CHECKMARK}{b}</li>
                    ))}
                  </ul>
                </div>
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-900">From $89/mo · subject to approval</span>
                  <button onClick={() => openQuote('Auto')} className="px-5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold inline-flex items-center gap-1.5 transition-all shadow-sm">
                    Get Auto Quote <span className="text-sm">→</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Card – Mascotas / Pet */}
            <div className="group bg-white rounded-[28px] overflow-hidden shadow-sm border border-stone-200/70 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div className="relative h-52 w-full overflow-hidden">
                <video src="/videos/hero2.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-slate-800 backdrop-blur-sm shadow-sm">VetDirect™ Technology</span>
                <span className="absolute bottom-4 right-4 text-xs font-medium text-white/90 bg-black/40 px-2.5 py-1 rounded-full backdrop-blur-sm">Plans from $29/mo</span>
              </div>
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                <div className="space-y-3">
                  <h3 className="text-2xl font-normal text-slate-900 tracking-tight">Pet Insurance</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">Take your dog or cat to the vet and we pay the clinic directly. No upfront payment, no waiting weeks for a reimbursement check. Your pet gets the care it needs, when it needs it. Subject to terms and conditions.</p>
                  <ul className="space-y-2 text-xs text-slate-600 pt-2">
                    {['VetDirect™: direct payment to the vet clinic', 'Covers check-ups, surgeries, vaccines & meds', 'No surprise charges on your statement'].map(b => (
                      <li key={b} className="flex items-center gap-2">{CHECKMARK}{b}</li>
                    ))}
                  </ul>
                </div>
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-900">From $29/mo · subject to approval</span>
                  <button onClick={() => openQuote('Mascotas')} className="px-5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold inline-flex items-center gap-1.5 transition-all shadow-sm">
                    Quote Pet Insurance <span className="text-sm">→</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Card – Vida / Life */}
            <div className="group bg-white rounded-[28px] overflow-hidden shadow-sm border border-stone-200/70 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div className="relative h-52 w-full overflow-hidden">
                <video src="/videos/vida.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-slate-800 backdrop-blur-sm shadow-sm">Family Protection & Legacy</span>
                <span className="absolute bottom-4 right-4 text-xs font-medium text-white/90 bg-black/40 px-2.5 py-1 rounded-full backdrop-blur-sm">Coverage from $500k</span>
              </div>
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                <div className="space-y-3">
                  <h3 className="text-2xl font-normal text-slate-900 tracking-tight">Life Insurance</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">Life insurance guarantees that the effort you've put into building a life here protects the people you love — even if you're no longer around. And if you become seriously ill, you can access the money while still alive. Subject to terms and conditions.</p>
                  <ul className="space-y-2 text-xs text-slate-600 pt-2">
                    {['Financial protection for your family', 'Living benefit access during serious illness', 'Accessible plans with or without credit history'].map(b => (
                      <li key={b} className="flex items-center gap-2">{CHECKMARK}{b}</li>
                    ))}
                  </ul>
                </div>
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-900">From $45/mo · subject to approval</span>
                  <button onClick={() => openQuote('Vida')} className="px-5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold inline-flex items-center gap-1.5 transition-all shadow-sm">
                    Explore Life Insurance <span className="text-sm">→</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Card – Comercial / Business */}
            <div className="group bg-white rounded-[28px] overflow-hidden shadow-sm border border-stone-200/70 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div className="relative h-52 w-full overflow-hidden">
                <video src="/videos/comercial-negocio.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-slate-800 backdrop-blur-sm shadow-sm">Small Business & Corporate</span>
                <span className="absolute bottom-4 right-4 text-xs font-medium text-white/90 bg-black/40 px-2.5 py-1 rounded-full backdrop-blur-sm">SMBs & Enterprises</span>
              </div>
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                <div className="space-y-3">
                  <h3 className="text-2xl font-normal text-slate-900 tracking-tight">Business Insurance</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">You built your business with hard work. One accident, lawsuit, or fire could bring it down. Business insurance protects your location, equipment, and liability — so you can keep moving forward no matter what. Subject to terms and conditions.</p>
                  <ul className="space-y-2 text-xs text-slate-600 pt-2">
                    {['Location, equipment, and inventory protection', 'General liability if someone gets hurt on premises', 'Bilingual agents specializing in Hispanic businesses'].map(b => (
                      <li key={b} className="flex items-center gap-2">{CHECKMARK}{b}</li>
                    ))}
                  </ul>
                </div>
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-900">From $120/mo · subject to approval</span>
                  <button onClick={() => openQuote('Comercial')} className="px-5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold inline-flex items-center gap-1.5 transition-all shadow-sm">
                    Protect My Business <span className="text-sm">→</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Card – Commercial Auto */}
            <div className="group bg-white rounded-[28px] overflow-hidden shadow-sm border border-stone-200/70 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div className="relative h-52 w-full overflow-hidden">
                <video src="/videos/comercial.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-slate-800 backdrop-blur-sm shadow-sm">Fleets & Moving Trucks</span>
                <span className="absolute bottom-4 right-4 text-xs font-medium text-white/90 bg-black/40 px-2.5 py-1 rounded-full backdrop-blur-sm">From $110/mo</span>
              </div>
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                <div className="space-y-3">
                  <h3 className="text-2xl font-normal text-slate-900 tracking-tight">Commercial Auto Insurance</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">Cargo vans, moving trucks, work pickups, and fleets. Your work vehicle needs commercial-grade coverage that no personal auto policy can provide. Covers all your drivers. Subject to terms and conditions.</p>
                  <ul className="space-y-2 text-xs text-slate-600 pt-2">
                    {['Vans, trucks, and commercial fleets covered', 'Daily commercial use — no exclusions', 'Multiple drivers on one policy'].map(b => (
                      <li key={b} className="flex items-center gap-2">{CHECKMARK}{b}</li>
                    ))}
                  </ul>
                </div>
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-900">From $110/mo · subject to approval</span>
                  <button onClick={() => openQuote('AutoComercial')} className="px-5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold inline-flex items-center gap-1.5 transition-all shadow-sm">
                    Quote Commercial Auto <span className="text-sm">→</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Card – Health */}
            <div className="group bg-white rounded-[28px] overflow-hidden shadow-sm border border-stone-200/70 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div className="relative h-52 w-full overflow-hidden">
                <video src="/videos/salud.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-slate-800 backdrop-blur-sm shadow-sm">Individual & Family</span>
                <span className="absolute bottom-4 right-4 text-xs font-medium text-white/90 bg-black/40 px-2.5 py-1 rounded-full backdrop-blur-sm">From $199/mo</span>
              </div>
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                <div className="space-y-3">
                  <h3 className="text-2xl font-normal text-slate-900 tracking-tight">Health Insurance</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">Access doctors, specialists, and hospitals without paying out of pocket. Individual and family plans available with or without SSN. A bilingual agent explains exactly what each plan covers before you sign anything. Subject to terms and conditions.</p>
                  <ul className="space-y-2 text-xs text-slate-600 pt-2">
                    {['Individual, family, and employee group plans', 'No SSN or credit history required', 'Bilingual agents guide you step by step'].map(b => (
                      <li key={b} className="flex items-center gap-2">{CHECKMARK}{b}</li>
                    ))}
                  </ul>
                </div>
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-900">From $199/mo · subject to approval</span>
                  <button onClick={() => openQuote('Salud')} className="px-5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold inline-flex items-center gap-1.5 transition-all shadow-sm">
                    View Health Plans <span className="text-sm">→</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Card – Dental */}
            <div className="group bg-white rounded-[28px] overflow-hidden shadow-sm border border-stone-200/70 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div className="relative h-52 w-full overflow-hidden">
                <video src="/videos/dental.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-slate-800 backdrop-blur-sm shadow-sm">Dental Care</span>
                <span className="absolute bottom-4 right-4 text-xs font-medium text-white/90 bg-black/40 px-2.5 py-1 rounded-full backdrop-blur-sm">From $19/mo</span>
              </div>
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                <div className="space-y-3">
                  <h3 className="text-2xl font-normal text-slate-900 tracking-tight">Dental Insurance</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">Cleanings, check-ups, fillings, and extractions without the shocking bill. Protect your whole family's oral health without waiting months before your plan activates. Subject to terms and conditions.</p>
                  <ul className="space-y-2 text-xs text-slate-600 pt-2">
                    {['Preventive cleanings and check-ups included', 'Major treatments with low deductible', 'No waiting period for preventive services'].map(b => (
                      <li key={b} className="flex items-center gap-2">{CHECKMARK}{b}</li>
                    ))}
                  </ul>
                </div>
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-900">From $19/mo · subject to approval</span>
                  <button onClick={() => openQuote('Dental')} className="px-5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold inline-flex items-center gap-1.5 transition-all shadow-sm">
                    Quote Dental <span className="text-sm">→</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Card – Home + Auto Bundle */}
            <div className="group bg-white rounded-[28px] overflow-hidden shadow-sm border border-stone-200/70 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div className="relative h-52 w-full overflow-hidden">
                <video src="/videos/paquete.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-slate-800 backdrop-blur-sm shadow-sm">Bundle & Save</span>
                <span className="absolute bottom-4 right-4 text-xs font-medium text-white/90 bg-black/40 px-2.5 py-1 rounded-full backdrop-blur-sm">Save up to 25%</span>
              </div>
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                <div className="space-y-3">
                  <h3 className="text-2xl font-normal text-slate-900 tracking-tight">Home + Auto Bundle</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">Bundle your home and auto policies and pay less than if you insured them separately. One agent, one account, and deeper savings the more coverages you add. Subject to terms and conditions.</p>
                  <ul className="space-y-2 text-xs text-slate-600 pt-2">
                    {['Up to 25% discount when bundling', 'One agent for both policies', 'Add life or health and save even more'].map(b => (
                      <li key={b} className="flex items-center gap-2">{CHECKMARK}{b}</li>
                    ))}
                  </ul>
                </div>
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-900">Bundle from $130/mo · subject to approval</span>
                  <button onClick={() => openQuote('Paquete')} className="px-5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold inline-flex items-center gap-1.5 transition-all shadow-sm">
                    Build My Bundle <span className="text-sm">→</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Card – Umbrella */}
            <div className="group bg-white rounded-[28px] overflow-hidden shadow-sm border border-stone-200/70 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div className="relative h-52 w-full overflow-hidden bg-gradient-to-br from-violet-900 to-violet-600 flex items-center justify-center">
                <PhUmbrella weight="duotone" className="w-28 h-28 text-white/10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-slate-800 backdrop-blur-sm shadow-sm">Extra Coverage</span>
                <span className="absolute bottom-4 right-4 text-xs font-medium text-white/90 bg-black/40 px-2.5 py-1 rounded-full backdrop-blur-sm">From $19/mo</span>
              </div>
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                <div className="space-y-3">
                  <h3 className="text-2xl font-normal text-slate-900 tracking-tight">Umbrella Coverage</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">When an accident exceeds your regular policy limits, umbrella coverage kicks in. Protect your savings, your home, and your reputation against unexpected lawsuits that could change your life. Subject to terms and conditions.</p>
                  <ul className="space-y-2 text-xs text-slate-600 pt-2">
                    {['Extends your auto and home coverage', 'Shields savings from civil lawsuits', 'Available from $1M in additional coverage'].map(b => (
                      <li key={b} className="flex items-center gap-2">{CHECKMARK}{b}</li>
                    ))}
                  </ul>
                </div>
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-900">From $19/mo · subject to approval</span>
                  <button onClick={() => openQuote('Umbrella')} className="px-5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold inline-flex items-center gap-1.5 transition-all shadow-sm">
                    Add Umbrella Coverage <span className="text-sm">→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY AEGIS ── */}
      <section className="py-16 lg:py-24 bg-white border-y border-stone-100" id="why-aegis">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-slate-500 font-semibold">Aegis National Assurance</span>
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-normal text-slate-900 tracking-tight leading-tight mt-3">
              Here when you<br />
              <span className="font-editorial-italic font-normal">need us most.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="w-5 h-5 text-sage-800" />,
                title: '100% Bilingual',
                desc: 'Every agent speaks English and Spanish fluently. You choose the language — we adapt to you, not the other way around.',
              },
              {
                icon: <ShieldCheck className="w-5 h-5 text-sage-800" />,
                title: 'No SSN Required',
                desc: 'We accept ITIN and do not require a Social Security Number to quote or enroll. Coverage for everyone, regardless of immigration status.',
              },
              {
                icon: <Sparkles className="w-5 h-5 text-sage-800" />,
                title: 'Dedicated Agent',
                desc: 'When you have a claim or question, you don\'t get a bot. A real agent in English or Spanish walks you through every step until it\'s resolved.',
              },
              {
                icon: <Layers className="w-5 h-5 text-sage-800" />,
                title: 'Bundle & Save More',
                desc: 'Combine auto, home, life, and pet in one account. The more coverages you hold with Aegis, the greater your multi-policy discount.',
              },
              {
                icon: <Lock className="w-5 h-5 text-sage-800" />,
                title: '100% Private',
                desc: 'Your information is never shared with government agencies or immigration authorities. HIPAA compliant and fully regulated by state insurance departments.',
              },
              {
                icon: <CreditCard className="w-5 h-5 text-sage-800" />,
                title: 'No Credit Check to Quote',
                desc: 'Getting a quote doesn\'t affect your credit score and doesn\'t require a credit history. Just answer a few questions and see your options.',
              },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="flex flex-col gap-4 p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:border-slate-200 transition-all">
                <div className="w-10 h-10 rounded-xl bg-white border border-sage-200 flex items-center justify-center shadow-sm">{icon}</div>
                <h3 className="font-semibold text-slate-900 text-sm">{title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-slate-100">
            {[
              { value: '$1.7B', label: 'In capital reserves — your claims are always backed.' },
              { value: '3,200+', label: 'Families insured across the United States.' },
              { value: '4.9/5', label: 'Average satisfaction from verified clients.' },
              { value: '15 min', label: 'Average response time from a bilingual agent.' },
            ].map(({ value, label }) => (
              <div key={value} className="text-center">
                <div className="text-3xl sm:text-4xl font-normal text-slate-900 tracking-tight">{value}</div>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUOTE SECTION ── */}
      <section className="py-20 bg-[#f7faf7]" id="quote">
        <div className="max-w-2xl mx-auto px-5 sm:px-8 text-center">
          <span className="text-xs uppercase tracking-widest text-slate-500 font-semibold">FREE QUOTE · 5 STEPS · 90 SECONDS</span>
          <h2 className="text-3xl sm:text-4xl font-normal text-slate-900 tracking-tight mt-3 mb-3">
            Your personalized{' '}
            <span className="font-editorial-italic font-normal">insurance quote</span>
          </h2>
          <p className="text-sm text-slate-500 mb-8">
            Choose your coverage, answer a few quick questions, and a bilingual specialist will contact you within 15 minutes.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
            {((['Auto','AutoComercial','Mascotas','Vida','Salud','Dental','Paquete','Comercial','Umbrella']) as InsType[]).map(tipo => {
              const Icon = COTIZADOR_ICONS[tipo];
              return (
                <button key={tipo} onClick={() => openQuote(tipo)}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-2xl border-2 border-slate-200 bg-white hover:border-slate-800 hover:bg-slate-800 hover:text-white text-slate-700 text-sm font-medium transition-all">
                  <Icon weight="duotone" className="w-4 h-4 shrink-0" />
                  {TIPO_LABEL_EN[tipo]}
                </button>
              );
            })}
          </div>

          <button onClick={() => openQuote()}
            className="w-full py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold transition-all shadow-md active:scale-95 flex items-center justify-center gap-2">
            <span>Get My Free Quote Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-5 text-xs text-slate-500">
            <span className="flex items-center gap-1.5"><Lock className="w-3 h-3" /> No SSN required</span>
            <span>·</span>
            <span>100% bilingual service</span>
            <span>·</span>
            <span>No spam</span>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-white border-t border-stone-100" id="faq">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-14">
            <span className="text-xs uppercase tracking-widest text-slate-500 font-semibold">Frequently Asked Questions</span>
            <h2 className="text-3xl sm:text-4xl font-normal text-slate-900 tracking-tight mt-3">
              Your questions,{' '}
              <span className="font-editorial-italic font-normal">answered.</span>
            </h2>
          </div>
          <div className="space-y-3">
            {FAQ_EN.map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden">
                <button className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span className="text-sm font-semibold text-slate-800">{item.q}</span>
                  <span className={`text-slate-400 text-lg shrink-0 transition-transform duration-200 ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100">{item.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-normal text-white tracking-tight leading-tight mb-5">
            Ready to protect<br />
            <span className="font-editorial-italic font-normal">everything you've built?</span>
          </h2>
          <p className="text-white/60 text-sm mb-8 max-w-lg mx-auto leading-relaxed">
            Join over 3,200 families who trust Aegis. Bilingual agents. No SSN required. Free quote in 90 seconds.
          </p>
          <button onClick={() => openQuote()}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 text-sm font-semibold rounded-full hover:bg-white/90 transition-all active:scale-95 shadow-xl">
            Get My Free Quote <ArrowRight className="w-4 h-4" />
          </button>
          <p className="text-white/30 text-xs mt-4">No commitment · 100% private · Bilingual service</p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-slate-950 py-12">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center">
                <Shield className="w-3.5 h-3.5 text-white" />
              </div>
              <div className="leading-none">
                <span className="block text-white text-sm font-semibold">Aegis</span>
                <span className="block text-white/30 text-[8px] tracking-widest uppercase">National Assurance</span>
              </div>
            </div>
            <p className="text-white/30 text-xs text-center">
              © {new Date().getFullYear()} Aegis National Assurance. All rights reserved. · Coverage subject to approval and terms & conditions.
            </p>
            <div className="flex items-center gap-4 text-xs text-white/40">
              <Link href="/" className="hover:text-white/70 transition-colors">Español</Link>
              <span>·</span>
              <a href="/en/privacy" className="hover:text-white/70 transition-colors">Privacy</a>
            </div>
          </div>
        </div>
      </footer>

      <QuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} initialType={quoteType} />
    </>
  );
}
