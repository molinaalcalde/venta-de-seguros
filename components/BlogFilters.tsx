'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Search } from 'lucide-react';
import type { PostMeta, Lang, BlogCategory } from '@/lib/blog';

interface Props {
  lang: Lang;
  posts: PostMeta[];
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

export default function BlogFilters({ lang, posts, categories, categoryColors }: Props) {
  const [active, setActive] = useState<string>('all');
  const [search, setSearch] = useState('');
  const isEn = lang === 'en';

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
        {/* Category pills */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 -mx-1 px-1">
          <button
            onClick={() => setActive('all')}
            className={`shrink-0 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
              active === 'all'
                ? 'bg-slate-900 text-white shadow-md'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {isEn ? 'All' : 'Todos'}
          </button>
          {categories.map(({ slug, label }) => (
            <button
              key={slug}
              onClick={() => setActive(slug)}
              className={`shrink-0 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                active === slug
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {label}
            </button>
          ))}
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
          {filtered.map((post, i) => (
            <article
              key={post.slug}
              className="group bg-white rounded-[24px] overflow-hidden border border-stone-200/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              style={{ animationDelay: `${i * 50}ms` }}
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
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2.5 mb-3">
                  <time className="text-[11px] text-slate-400">{formatDate(post.date, lang)}</time>
                  <span className="text-slate-200">|</span>
                  <span className="text-[11px] text-slate-400">
                    {post.readingTime} min {isEn ? 'read' : 'de lectura'}
                  </span>
                </div>
                <h2 className="text-lg font-normal text-slate-900 tracking-tight leading-snug mb-3 group-hover:text-sage-800 transition-colors line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed flex-grow line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-end">
                  <Link
                    href={`/${lang}/blog/${post.slug}`}
                    className="text-xs font-semibold text-slate-900 inline-flex items-center gap-1.5 hover:gap-3 transition-all duration-200"
                  >
                    {isEn ? 'Read more' : 'Leer más'}
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
