'use client';

import { useState, useEffect } from 'react';
import { Mail, Clock } from 'lucide-react';
import type { Lang } from '@/lib/blog';

interface Props {
  headings: { id: string; text: string }[];
  lang: Lang;
  readingTime: number;
}

export default function BlogTableOfContents({ headings, lang, readingTime }: Props) {
  const [activeId, setActiveId] = useState('');
  const [progress, setProgress] = useState(0);
  const isEn = lang === 'en';

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0 }
    );

    for (const { id } of headings) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [headings]);

  useEffect(() => {
    const handleScroll = () => {
      const article = document.querySelector('article');
      if (!article) return;
      const rect = article.getBoundingClientRect();
      const total = article.scrollHeight;
      const scrolled = Math.max(0, -rect.top);
      setProgress(Math.min(100, (scrolled / (total - window.innerHeight)) * 100));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (headings.length === 0) return null;

  return (
    <div className="sticky top-20 space-y-5">
      {/* Reading time + progress bar */}
      <div className="bg-white rounded-[20px] border border-stone-200/60 shadow-sm p-5">
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
          <Clock className="w-3.5 h-3.5" />
          <span>{readingTime} min {isEn ? 'read' : 'de lectura'}</span>
        </div>
        <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-sage-500 rounded-full transition-all duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Table of contents */}
      <div className="bg-white rounded-[20px] border border-stone-200/60 shadow-sm p-6">
        <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400 mb-4">
          {isEn ? 'In this article' : 'En este articulo'}
        </h3>
        <nav className="flex flex-col gap-1">
          {headings.map(({ id, text }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`text-[13px] leading-snug py-1.5 px-3 rounded-lg transition-all duration-200 ${
                activeId === id
                  ? 'text-sage-800 bg-sage-50 font-medium'
                  : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
              }`}
            >
              {text}
            </a>
          ))}
        </nav>

        {/* Share section */}
        <div className="mt-5 pt-4 border-t border-stone-100">
          <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400 mb-3">
            {isEn ? 'Share' : 'Compartir'}
          </h4>
          <div className="flex items-center gap-2">
            <ShareWAButton />
            <CopyLinkButton lang={lang} />
          </div>
        </div>

        {/* Mini CTA */}
        <div className="mt-5 pt-4 border-t border-stone-100">
          <p className="text-[11px] text-slate-400 mb-3">
            {isEn ? 'Need personalized advice?' : '¿Necesitas asesoria personalizada?'}
          </p>
          <a
            href={isEn ? '/en#cotizador' : '/es#cotizador'}
            className="block w-full text-center px-4 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-slate-700 transition-all active:scale-95"
          >
            {isEn ? 'Free Quote' : 'Cotizar gratis'}
          </a>
        </div>
      </div>

      {/* Newsletter in sidebar */}
      <div className="bg-white rounded-[20px] border border-stone-200/60 shadow-sm p-6">
        <div className="flex items-center gap-2 mb-3">
          <Mail className="w-4 h-4 text-sage-600" />
          <h3 className="text-sm font-semibold text-slate-900">Newsletter</h3>
        </div>
        <p className="text-[12px] text-slate-500 leading-relaxed mb-4">
          {isEn
            ? 'Get exclusive insurance insights directly to your inbox.'
            : 'Recibe tips exclusivos de seguros directo a tu correo.'}
        </p>
        <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder={isEn ? 'Your email' : 'Tu correo'}
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sage-200 focus:border-sage-300 transition-all"
          />
          <button
            type="submit"
            className="w-full px-4 py-2.5 rounded-xl bg-sage-700 text-white text-xs font-semibold hover:bg-sage-800 transition-all active:scale-95"
          >
            {isEn ? 'Subscribe' : 'Suscribirse'}
          </button>
        </form>
        <p className="text-[10px] text-slate-400 mt-2">
          {isEn ? 'No spam. Unsubscribe anytime.' : 'Sin spam. Cancela cuando quieras.'}
        </p>
      </div>
    </div>
  );
}

function ShareWAButton() {
  const share = () => {
    const url = window.location.href;
    const text = document.title;
    window.open(`https://wa.me/?text=${encodeURIComponent(`${text}\n\n${url}`)}`, '_blank');
  };
  return (
    <button
      onClick={share}
      className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-600 hover:bg-slate-100 transition-all"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5" width="14" height="14">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
      WA
    </button>
  );
}

function CopyLinkButton({ lang }: { lang: Lang }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };
  return (
    <button
      onClick={copy}
      className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-600 hover:bg-slate-100 transition-all"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5" width="14" height="14">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      {copied ? (lang === 'en' ? 'Copied' : 'Copiado') : (lang === 'en' ? 'Copy' : 'Copiar')}
    </button>
  );
}
