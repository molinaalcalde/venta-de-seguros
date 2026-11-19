'use client';

import { useState, useEffect } from 'react';
import { ArrowUp, Link2, Check } from 'lucide-react';
import type { Lang } from '@/lib/blog';

interface Props {
  title: string;
  lang: Lang;
}

export default function FloatingShareSidebar({ title, lang }: Props) {
  const [copied, setCopied] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = encodeURIComponent(`${title}\n\n${shareUrl}`);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-1">
      <span className="text-[9px] uppercase tracking-[0.2em] font-semibold text-slate-400 mb-2 [writing-mode:vertical-lr] rotate-180">
        {lang === 'en' ? 'Share' : 'Compartir'}
      </span>

      {/* WhatsApp */}
      <a
        href={`https://wa.me/?text=${shareText}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-xl bg-white border border-stone-200/60 shadow-sm flex items-center justify-center hover:bg-sage-50 hover:border-sage-200 transition-all group"
        aria-label="Compartir en WhatsApp"
      >
        <svg className="w-4.5 h-4.5 text-slate-600 group-hover:text-sage-700 transition-colors" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

      {/* X/Twitter */}
      <a
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-xl bg-white border border-stone-200/60 shadow-sm flex items-center justify-center hover:bg-slate-50 hover:border-slate-300 transition-all group"
        aria-label="Compartir en X"
      >
        <svg className="w-4 h-4 text-slate-600 group-hover:text-slate-900 transition-colors" viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      </a>

      {/* Copy link */}
      <button
        onClick={copyLink}
        className="w-10 h-10 rounded-xl bg-white border border-stone-200/60 shadow-sm flex items-center justify-center hover:bg-slate-50 hover:border-slate-300 transition-all group"
        aria-label="Copiar enlace"
      >
        {copied ? (
          <Check className="w-4 h-4 text-sage-600" />
        ) : (
          <Link2 className="w-4 h-4 text-slate-600 group-hover:text-slate-900 transition-colors" />
        )}
      </button>

      {/* Divider */}
      <div className="w-5 h-px bg-slate-200 my-1" />

      {/* Back to top */}
      <button
        onClick={scrollToTop}
        className="w-10 h-10 rounded-xl bg-white border border-stone-200/60 shadow-sm flex items-center justify-center hover:bg-slate-50 hover:border-slate-300 transition-all group"
        aria-label="Volver arriba"
      >
        <ArrowUp className="w-4 h-4 text-slate-600 group-hover:text-slate-900 transition-colors" />
      </button>
    </div>
  );
}
