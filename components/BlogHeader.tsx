'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

type Lang = 'es' | 'en';

const NAV: Record<Lang, { label: string; href: string }[]> = {
  es: [
    { label: 'Inicio', href: '/es' },
    { label: 'Coberturas', href: '/es#coberturas-destacadas' },
    { label: 'Blog', href: '/es/blog' },
    { label: 'FAQ', href: '/es#faq' },
    { label: 'Contacto', href: '/es#contacto' },
  ],
  en: [
    { label: 'Home', href: '/en' },
    { label: 'Coverage', href: '/en#coberturas-destacadas' },
    { label: 'Blog', href: '/en/blog' },
    { label: 'FAQ', href: '/en#faq' },
    { label: 'Contact', href: '/en#contacto' },
  ],
};

export default function BlogHeader({ lang }: { lang: Lang }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const links = NAV[lang];
  const isEn = lang === 'en';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-stone-200/80 shadow-sm'
          : 'bg-white border-b border-stone-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link href={isEn ? '/en' : '/es'} className="shrink-0">
            <img
              src="/logo.png"
              alt="Maria Fernanda Insurance Consulting"
              className="h-9 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {links.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className={`px-3.5 py-2 text-[13px] font-medium rounded-xl transition-all duration-200 ${
                  label === 'Blog'
                    ? 'text-sage-800 bg-sage-50'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* CTA + Lang + hamburger */}
          <div className="flex items-center gap-2">
            <LanguageSwitcher scrolled={true} />
            <Link
              href={isEn ? '/en#cotizador' : '/es#cotizador'}
              className="hidden lg:flex items-center gap-2 px-4 py-2 text-[13px] font-semibold rounded-xl bg-slate-900 text-white hover:bg-slate-700 transition-all active:scale-95"
            >
              {isEn ? 'Get a Quote' : 'Cotizar Ahora'}
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>

            {/* Hamburger */}
            <button
              className="lg:hidden flex flex-col gap-[5px] p-2.5 rounded-xl"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={isEn ? 'Open menu' : 'Abrir menu'}
            >
              <span
                className={`block w-5 h-[1.5px] bg-slate-900 transition-all duration-300 ${
                  mobileOpen ? 'rotate-45 translate-y-[6.5px]' : ''
                }`}
              />
              <span
                className={`block w-5 h-[1.5px] bg-slate-900 transition-all duration-300 ${
                  mobileOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block w-5 h-[1.5px] bg-slate-900 transition-all duration-300 ${
                  mobileOpen ? '-rotate-45 -translate-y-[6.5px]' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-stone-100 bg-white px-4 py-4 space-y-1 shadow-lg">
          {links.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 px-3 rounded-xl text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-all"
            >
              {label}
            </Link>
          ))}
          <Link
            href={isEn ? '/en#cotizador' : '/es#cotizador'}
            onClick={() => setMobileOpen(false)}
            className="flex items-center justify-center gap-2 mt-2 py-3 rounded-xl bg-slate-900 text-white text-sm font-semibold"
          >
            {isEn ? 'Get a Quote' : 'Cotizar Ahora'}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </header>
  );
}
