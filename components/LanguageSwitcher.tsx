'use client';

import { usePathname } from 'next/navigation';
import { Globe, Check } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

// Mapeo bidireccional: cada URL conocida apunta a su equivalente en es/en
const ROUTE_MAP: Record<string, { es: string; en: string }> = {
  // Home
  '/es':                           { es: '/es',                           en: '/en' },
  '/en':                           { es: '/es',                           en: '/en' },
  // Mascotas
  '/es/seguros/mascotas':          { es: '/es/seguros/mascotas',          en: '/en/pet-insurance' },
  '/en/pet-insurance':             { es: '/es/seguros/mascotas',          en: '/en/pet-insurance' },
  // Auto
  '/es/seguros/auto':              { es: '/es/seguros/auto',              en: '/en/car-insurance' },
  '/en/car-insurance':             { es: '/es/seguros/auto',              en: '/en/car-insurance' },
  // Vida
  '/es/seguros/vida':              { es: '/es/seguros/vida',              en: '/en/life-insurance' },
  '/en/life-insurance':            { es: '/es/seguros/vida',              en: '/en/life-insurance' },
  // Salud
  '/es/seguros/salud':             { es: '/es/seguros/salud',             en: '/en/health-insurance' },
  '/en/health-insurance':          { es: '/es/seguros/salud',             en: '/en/health-insurance' },
  // Dental
  '/es/seguros/dental':            { es: '/es/seguros/dental',            en: '/en/dental-insurance' },
  '/en/dental-insurance':          { es: '/es/seguros/dental',            en: '/en/dental-insurance' },
  // Auto Comercial
  '/es/seguros/auto-comercial':    { es: '/es/seguros/auto-comercial',    en: '/en/commercial-auto' },
  '/en/commercial-auto':           { es: '/es/seguros/auto-comercial',    en: '/en/commercial-auto' },
  // Comercial
  '/es/seguros/comercial':         { es: '/es/seguros/comercial',         en: '/en/business-insurance' },
  '/en/business-insurance':        { es: '/es/seguros/comercial',         en: '/en/business-insurance' },
  // Paquete Casa + Auto
  '/es/seguros/paquete-casa-auto': { es: '/es/seguros/paquete-casa-auto', en: '/en/home-auto-bundle' },
  '/en/home-auto-bundle':          { es: '/es/seguros/paquete-casa-auto', en: '/en/home-auto-bundle' },
  // Protección Extra
  '/es/seguros/proteccion-extra':  { es: '/es/seguros/proteccion-extra',  en: '/en/extra-protection' },
  '/en/extra-protection':          { es: '/es/seguros/proteccion-extra',  en: '/en/extra-protection' },
};

function switchToLang(pathname: string, targetLang: 'es' | 'en'): string {
  // Buscar en el mapa directo primero
  if (ROUTE_MAP[pathname]) return ROUTE_MAP[pathname][targetLang];

  // Fallback: reemplazar prefijo de idioma si no está en el mapa
  const currentLang: 'es' | 'en' = pathname.startsWith('/en') ? 'en' : 'es';
  if (currentLang === targetLang) return pathname;

  if (pathname.startsWith('/es/') || pathname === '/es') {
    return pathname.replace(/^\/es/, `/${targetLang}`);
  }
  if (pathname.startsWith('/en/') || pathname === '/en') {
    return pathname.replace(/^\/en/, `/${targetLang}`);
  }
  return `/${targetLang}${pathname === '/' ? '' : pathname}`;
}

export default function LanguageSwitcher({ scrolled }: { scrolled?: boolean }) {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith('/en');
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const esHref = switchToLang(pathname, 'es');
  const enHref = switchToLang(pathname, 'en');

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        aria-label="Cambiar idioma / Change language"
        className={`flex items-center gap-1.5 px-2.5 py-2 rounded-full text-xs font-medium transition-all duration-200 ${
          scrolled
            ? 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
            : 'text-white/80 hover:text-white hover:bg-white/10'
        }`}
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm">{isEnglish ? '🇺🇸' : '🇪🇸'}</span>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-44 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden z-50 py-1">
          <Link
            href={esHref}
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 transition-colors"
          >
            <span>🇪🇸</span>
            <span className={!isEnglish ? 'font-semibold text-slate-900' : ''}>Español</span>
            {!isEnglish && <Check className="w-3.5 h-3.5 ml-auto text-slate-800" />}
          </Link>
          <div className="mx-4 h-px bg-slate-100" />
          <Link
            href={enHref}
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 transition-colors"
          >
            <span>🇺🇸</span>
            <span className={isEnglish ? 'font-semibold text-slate-900' : ''}>English</span>
            {isEnglish && <Check className="w-3.5 h-3.5 ml-auto text-slate-800" />}
          </Link>
        </div>
      )}
    </div>
  );
}
