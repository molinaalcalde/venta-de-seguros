'use client';

import { useState, useEffect } from 'react';
import type { Lang } from '@/lib/blog';

interface Props {
  headings: { id: string; text: string }[];
  lang: Lang;
}

export default function BlogTableOfContents({ headings, lang }: Props) {
  const [activeId, setActiveId] = useState('');
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

  if (headings.length === 0) return null;

  return (
    <div className="sticky top-20">
      <div className="bg-white rounded-[20px] border border-stone-200/60 shadow-sm p-6">
        <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400 mb-4">
          {isEn ? 'In this article' : 'En este artículo'}
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

        {/* Mini CTA */}
        <div className="mt-6 pt-5 border-t border-stone-100">
          <p className="text-[11px] text-slate-400 mb-3">
            {isEn ? 'Need personalized advice?' : '¿Necesitas asesoría personalizada?'}
          </p>
          <a
            href={isEn ? '/en#cotizador' : '/es#cotizador'}
            className="block w-full text-center px-4 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-slate-700 transition-all active:scale-95"
          >
            {isEn ? 'Free Quote' : 'Cotizar gratis'}
          </a>
        </div>
      </div>
    </div>
  );
}
