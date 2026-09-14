'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const navLinks = [
  { label: 'Inicio', href: '/' },
  { label: 'Soluciones', href: '/#soluciones' },
  { label: 'Cotizador', href: '/#cotizador' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Contacto', href: '/#contacto' },
];

export default function BlogHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-100 shadow-sm">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-5 h-5 rounded-full border-[2px] border-slate-800 flex items-center justify-center transition-all group-hover:scale-110">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-800"></span>
            </div>
            <div className="leading-none">
              <span className="block font-semibold text-[14px] tracking-tight text-slate-900">Aegis</span>
              <span className="block text-[8px] font-medium tracking-[0.1em] uppercase text-slate-400">National Assurance</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="px-3.5 py-2 text-[13px] font-medium rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-all duration-200"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-2">
            <Link
              href="/#cotizador"
              className="hidden lg:flex items-center gap-2 px-4 py-2 text-[13px] font-semibold rounded-xl bg-slate-900 text-white hover:bg-slate-700 transition-all active:scale-95"
            >
              Cotizar Ahora
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>

            {/* Hamburger */}
            <button
              className="lg:hidden flex flex-col gap-[5px] p-2.5 rounded-xl"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Abrir menú"
            >
              <span className={`block w-5 h-[1.5px] bg-slate-900 transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
              <span className={`block w-5 h-[1.5px] bg-slate-900 transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-[1.5px] bg-slate-900 transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-stone-100 bg-white px-4 py-4 space-y-1">
          {navLinks.map(({ label, href }) => (
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
            href="/#cotizador"
            onClick={() => setMobileOpen(false)}
            className="flex items-center justify-center gap-2 mt-2 py-3 rounded-xl bg-slate-900 text-white text-sm font-semibold"
          >
            Cotizar Ahora <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </header>
  );
}
