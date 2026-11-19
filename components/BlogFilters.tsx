'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { ArrowRight, Search, Clock, Mail, Shield } from 'lucide-react';
import type { PostMeta, Lang, BlogCategory } from '@/lib/blog';

interface Props {
  lang: Lang;
  posts: PostMeta[];
  allPostsCount: number;
  categories: { slug: BlogCategory; label: string }[];
  categoryColors: Record<string, string>;
}

function formatDate(dateStr: string, lang: Lang): string {
  const date = new Date(dateStr + 'T12:00:00');
  return date.toLocaleDateString(lang === 'en' ? 'en-US' : 'es-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export default function BlogFilters({ lang, posts, allPostsCount, categories, categoryColors }: Props) {
  const [active, setActive] = useState<string>('all');
  const [search, setSearch] = useState('');
  const isEn = lang === 'en';

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const p of posts) {
      counts[p.category] = (counts[p.category] ?? 0) + 1;
    }
    return counts;
  }, [posts]);

  const filtered = posts.filter((p) => {
    const matchCat = active === 'all' || p.category === active;
    const matchSearch =
      !search ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <section className="max-w-7xl mx-auto px-5 sm:px-8 pb-20">
      {/* Filters bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
        {/* Category pills with counts */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 -mx-1 px-1">
          <button
            onClick={() => setActive('all')}
            className={`shrink-0 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 inline-flex items-center gap-1.5 ${
              active === 'all'
                ? 'bg-slate-900 text-white shadow-md'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {isEn ? 'All' : 'Todos'}
            <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[20px] text-center ${
              active === 'all' ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-500'
            }`}>
              {allPostsCount}
            </span>
          </button>
          {categories.map(({ slug, label }) => {
            const count = categoryCounts[slug] ?? 0;
            if (count === 0) return null;
            return (
              <button
                key={slug}
                onClick={() => setActive(slug)}
                className={`shrink-0 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 inline-flex items-center gap-1.5 ${
                  active === slug
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {label}
                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[20px] text-center ${
                  active === slug ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-500'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder={isEn ? 'Search articles...' : 'Buscar artículos...'}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sage-200 focus:border-sage-300 transition-all"
          />
        </div>
      </div>

      {/* Posts grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-20">
          <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center mx-auto mb-4">
            <Search className="w-6 h-6 text-slate-400" />
          </div>
          <p className="text-slate-500 text-sm">
            {isEn ? 'No articles found.' : 'No se encontraron artículos.'}
          </p>
          <button
            onClick={() => { setActive('all'); setSearch(''); }}
            className="mt-3 text-xs font-semibold text-sage-700 hover:text-sage-900 transition-colors"
          >
            {isEn ? 'Clear filters' : 'Limpiar filtros'}
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filtered.map((post, i) => {
            const items: React.ReactNode[] = [];

            // Insert lead magnet card after position 2 (only when not filtering/searching)
            if (i === 2 && active === 'all' && !search) {
              items.push(
                <div
                  key="lead-magnet"
                  className="bg-slate-900 rounded-[24px] overflow-hidden border border-slate-700/50 shadow-lg p-8 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-sage-400">
                      {isEn ? 'Free guide 2025' : 'Guia gratuita 2025'}
                    </span>
                    <div className="mt-3 mb-2">
                      <Shield className="w-8 h-8 text-sage-400 mb-3" />
                    </div>
                    <p className="text-white text-lg font-light tracking-tight leading-snug mb-2">
                      {isEn
                        ? 'The insurance comparison guide that saves families up to $1,200/year'
                        : 'La guia de comparacion de seguros que ahorra a las familias hasta $1,200/ano'}
                    </p>
                    <p className="text-slate-400 text-xs mb-5 leading-relaxed italic">
                      {isEn
                        ? 'What your current agent probably hasn\'t told you.'
                        : 'Lo que tu agente actual probablemente no te ha dicho.'}
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="text-xs text-slate-300 flex items-start gap-2">
                        <span className="mt-1 w-1 h-1 rounded-full bg-sage-400 shrink-0" />
                        {isEn ? 'Compare 10+ insurers side by side' : 'Compara 10+ aseguradoras lado a lado'}
                      </li>
                      <li className="text-xs text-slate-300 flex items-start gap-2">
                        <span className="mt-1 w-1 h-1 rounded-full bg-sage-400 shrink-0" />
                        {isEn ? 'Checklist: 7 questions before switching' : 'Checklist: 7 preguntas antes de cambiar'}
                      </li>
                      <li className="text-xs text-slate-300 flex items-start gap-2">
                        <span className="mt-1 w-1 h-1 rounded-full bg-sage-400 shrink-0" />
                        {isEn ? 'Real savings examples by state' : 'Ejemplos reales de ahorro por estado'}
                      </li>
                    </ul>
                  </div>
                  <div>
                    <a
                      href={isEn ? '/en#cotizador' : '/es#cotizador'}
                      className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-white text-slate-900 text-xs font-semibold hover:bg-sage-50 transition-all active:scale-95"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      {isEn ? 'Get free comparison' : 'Obtener comparacion gratis'}
                    </a>
                  </div>
                </div>
              );
            }

            items.push(
              <article
                key={post.slug}
                className="group bg-white rounded-[24px] overflow-hidden border border-stone-200/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                {/* Image / placeholder */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-sage-50 to-sage-100 shrink-0">
                  {post.coverImage ? (
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-10 h-10 rounded-xl border-2 border-sage-300/40 flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                          <div className="w-3.5 h-3.5 rounded-md bg-sage-300/30" />
                        </div>
                        <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-sage-500/50">
                          {post.category}
                        </span>
                      </div>
                    </div>
                  )}
                  <span
                    className={`absolute top-4 left-4 px-2.5 py-1 rounded-full text-[11px] font-semibold backdrop-blur-sm ${
                      categoryColors[post.category] ?? 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    {categories.find((c) => c.slug === post.category)?.label ?? post.category}
                  </span>
                  {/* Reading time badge */}
                  <span className="absolute bottom-4 right-4 inline-flex items-center gap-1 px-2 py-1 rounded-full bg-black/50 backdrop-blur-sm text-[10px] text-white font-medium">
                    <Clock className="w-3 h-3" />
                    {post.readingTime} min
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2.5 mb-3">
                    <span className={`text-[10px] font-semibold uppercase tracking-wider ${
                      categoryColors[post.category]?.replace('bg-', 'text-').split(' ')[1] ?? 'text-slate-500'
                    }`}>
                      {categories.find((c) => c.slug === post.category)?.label ?? post.category}
                    </span>
                  </div>
                  <h2 className="text-lg font-normal text-slate-900 tracking-tight leading-snug mb-3 group-hover:text-sage-800 transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <time className="text-[11px] text-slate-400">{formatDate(post.date, lang)}</time>
                    <Link
                      href={`/${lang}/blog/${post.slug}`}
                      className="text-xs font-semibold text-slate-900 inline-flex items-center gap-1.5 hover:gap-3 transition-all duration-200"
                    >
                      {isEn ? 'Read' : 'Leer'}
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </article>
            );

            return items;
          })}
        </div>
      )}
    </section>
  );
}
