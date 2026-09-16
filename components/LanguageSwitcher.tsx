'use client';

import { usePathname } from 'next/navigation';
import { Globe } from 'lucide-react';
import { Check } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

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
            href="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 transition-colors"
          >
            <span>🇪🇸</span>
            <span className={!isEnglish ? 'font-semibold text-slate-900' : ''}>Español</span>
            {!isEnglish && <Check className="w-3.5 h-3.5 ml-auto text-slate-800" />}
          </Link>
          <div className="mx-4 h-px bg-slate-100" />
          <Link
            href="/en"
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
