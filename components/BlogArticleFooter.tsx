'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Link2, Check, Mail } from 'lucide-react';
import type { Lang } from '@/lib/blog';

interface Props {
  lang: Lang;
  title: string;
  articleUrl: string;
  tags?: string[];
}

export default function BlogArticleFooter({ lang, title, articleUrl, tags }: Props) {
  const [copied, setCopied] = useState(false);
  const isEn = lang === 'en';

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(articleUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  return (
    <>
      {/* Tags as hashtags */}
      {tags && tags.length > 0 && (
        <div className="mt-12 pt-6 border-t border-stone-100">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-block px-3 py-1.5 rounded-full bg-slate-50 text-xs text-slate-500 font-medium hover:bg-slate-100 transition-colors"
              >
                #{tag.replace(/\s+/g, '-').toLowerCase()}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Share CTA at bottom */}
      <div className="mt-10 pt-8 border-t border-stone-200">
        <p className="text-sm text-slate-600 mb-4 font-medium">
          {isEn ? 'Did you find this useful? Share this article' : '¿Te resulto util? Comparte este articulo'}
        </p>
        <div className="flex items-center gap-3">
          <a
            href={`https://wa.me/?text=${encodeURIComponent(`${title}\n\n${articleUrl}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366]/10 text-[#25D366] text-xs font-semibold hover:bg-[#25D366]/20 transition-all"
          >
            WhatsApp
          </a>
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(articleUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 text-slate-700 text-xs font-semibold hover:bg-slate-200 transition-all"
          >
            X / Twitter
          </a>
          <button
            onClick={copyLink}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 text-slate-700 text-xs font-semibold hover:bg-slate-200 transition-all"
          >
            {copied ? (
              <><Check className="w-3.5 h-3.5" />{isEn ? 'Copied!' : 'Copiado!'}</>
            ) : (
              <><Link2 className="w-3.5 h-3.5" />{isEn ? 'Copy link' : 'Copiar enlace'}</>
            )}
          </button>
        </div>
      </div>

      {/* Newsletter at bottom of article */}
      <div className="mt-10 pt-8 border-t border-stone-200">
        <div className="bg-slate-50 rounded-[20px] p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-2">
            <Mail className="w-4 h-4 text-sage-600" />
            <h3 className="text-lg font-light text-slate-900 tracking-tight">
              Newsletter
            </h3>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed mb-4">
            {isEn
              ? 'Get exclusive insurance insights directly to your inbox.'
              : 'Recibe tips exclusivos de seguros directo a tu correo.'}
          </p>
          <form className="flex flex-col sm:flex-row gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder={isEn ? 'Your email address' : 'Tu correo electronico'}
              className="flex-1 px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sage-200 focus:border-sage-300 transition-all"
            />
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-slate-700 transition-all active:scale-95 shrink-0"
            >
              {isEn ? 'Subscribe' : 'Suscribirse'}
            </button>
          </form>
          <p className="text-[10px] text-slate-400 mt-2">
            {isEn ? 'No spam. Unsubscribe anytime.' : 'Sin spam. Cancela cuando quieras.'}
          </p>
        </div>
      </div>

      {/* Back link */}
      <div className="mt-10 pt-8 border-t border-stone-200">
        <Link
          href={`/${lang}/blog`}
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
          {isEn ? 'Back to Blog' : 'Volver al Blog'}
        </Link>
      </div>
    </>
  );
}
