import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getAllPosts, formatDate, CATEGORIES, type Lang } from '@/lib/blog';
import BlogFilters from '@/components/BlogFilters';

const BASE_URL = 'https://consultingbymf.com';

interface Props {
  params: { lang: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const isEn = params.lang === 'en';
  return {
    title: isEn
      ? 'Insurance Blog — Practical Guides for the Hispanic Community'
      : 'Blog de Seguros — Guías Prácticas para la Comunidad Hispana',
    description: isEn
      ? 'Practical articles about insurance in the United States. Learn about life, auto, health insurance and more without jargon.'
      : 'Artículos prácticos sobre seguros en Estados Unidos escritos en español. Aprende sobre seguro de vida, auto, salud y más sin tecnicismos.',
    alternates: {
      canonical: `${BASE_URL}/${params.lang}/blog`,
      languages: {
        'es-US': `${BASE_URL}/es/blog`,
        'en-US': `${BASE_URL}/en/blog`,
        'x-default': `${BASE_URL}/es/blog`,
      },
    },
  };
}

const categoryColors: Record<string, string> = {
  Guías: 'bg-sage-100 text-sage-800',
  Auto: 'bg-blue-50 text-blue-700',
  Vida: 'bg-violet-50 text-violet-700',
  Salud: 'bg-rose-50 text-rose-700',
  Comercial: 'bg-amber-50 text-amber-700',
  Ahorro: 'bg-emerald-50 text-emerald-700',
  Noticias: 'bg-cyan-50 text-cyan-700',
};

export default function BlogPage({ params }: Props) {
  const lang = params.lang as Lang;
  const isEn = lang === 'en';
  const posts = getAllPosts(lang);
  const categories = CATEGORIES[lang];
  const featured = posts[0];
  const rest = posts.slice(1);

  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: isEn ? 'Insurance Blog' : 'Blog de Seguros',
    description: isEn
      ? 'Practical insurance guides for the Hispanic community in the US'
      : 'Guías prácticas de seguros para la comunidad hispana en EE.UU.',
    url: `${BASE_URL}/${lang}/blog`,
    inLanguage: isEn ? 'en-US' : 'es-US',
    publisher: {
      '@type': 'Organization',
      name: 'Maria Fernanda Insurance Consulting',
      url: BASE_URL,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-slate-900">
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }} />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#fafbfa] to-transparent" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-20 pb-28 sm:pt-24 sm:pb-32">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-5">
              <div className="w-1.5 h-1.5 rounded-full bg-sage-300 animate-pulse" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-sage-300">
                {isEn ? 'Resources & Guides' : 'Recursos y Guías'}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-light text-white tracking-tight leading-[1.1] mb-5">
              {isEn ? 'Insurance' : 'Blog de'}{' '}
              <span className="font-serif italic font-normal text-sage-300">
                {isEn ? 'Blog' : 'Seguros'}
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-lg font-light">
              {isEn
                ? 'Practical guides about insurance in the United States. No jargon, no fine print. In your language.'
                : 'Guías prácticas sobre seguros en Estados Unidos. Sin tecnicismos, sin letra chica. En tu idioma.'}
            </p>
          </div>
        </div>
      </section>

      {/* ── Featured post ───────────────────────────────────────────── */}
      {featured && (
        <section className="max-w-7xl mx-auto px-5 sm:px-8 -mt-16 relative z-10 mb-12">
          <Link
            href={`/${lang}/blog/${featured.slug}`}
            className="group block bg-white rounded-[28px] overflow-hidden border border-stone-200/60 shadow-lg hover:shadow-2xl transition-all duration-500"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image */}
              <div className="relative h-64 lg:h-auto overflow-hidden bg-gradient-to-br from-sage-100 to-sage-200">
                {featured.coverImage ? (
                  <img
                    src={featured.coverImage}
                    alt={featured.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center min-h-[280px]">
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-2xl border-2 border-sage-400/40 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                        <div className="w-6 h-6 rounded-lg bg-sage-400/30" />
                      </div>
                      <span className="text-xs uppercase tracking-[0.2em] font-semibold text-sage-600/60">
                        {featured.category}
                      </span>
                    </div>
                  </div>
                )}
                <span
                  className={`absolute top-5 left-5 px-3 py-1.5 rounded-full text-[11px] font-semibold backdrop-blur-sm ${
                    categoryColors[featured.category] ?? 'bg-slate-100 text-slate-700'
                  }`}
                >
                  {categories.find((c) => c.slug === featured.category)?.label ?? featured.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4 text-xs text-slate-400">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-sage-50 text-sage-700 font-semibold text-[11px]">
                    {isEn ? 'Featured' : 'Destacado'}
                  </span>
                  <time>{formatDate(featured.date, lang)}</time>
                  <span className="text-slate-300">|</span>
                  <span>{featured.readingTime} min {isEn ? 'read' : 'de lectura'}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-light text-slate-900 tracking-tight leading-snug mb-4 group-hover:text-sage-800 transition-colors">
                  {featured.title}
                </h2>
                <p className="text-sm sm:text-base text-slate-500 leading-relaxed mb-6 line-clamp-3">
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 group-hover:gap-3 transition-all">
                  {isEn ? 'Read article' : 'Leer artículo'}
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* ── Category Filters + Grid ─────────────────────────────────── */}
      <BlogFilters
        lang={lang}
        posts={rest}
        categories={categories}
        categoryColors={categoryColors}
      />

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <section className="bg-slate-900 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 py-20 text-center">
          <div className="inline-flex items-center gap-2 mb-5">
            <div className="w-1.5 h-1.5 rounded-full bg-sage-400" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-sage-400">
              {isEn ? 'Free Quote' : 'Cotización Gratis'}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight mb-4">
            {isEn ? (
              <>Ready to <span className="font-serif italic text-sage-300">compare</span> your options?</>
            ) : (
              <>¿Listo para <span className="font-serif italic text-sage-300">comparar</span> tus opciones?</>
            )}
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mb-8 leading-relaxed max-w-lg mx-auto font-light">
            {isEn
              ? 'A bilingual advisor contacts you within 24 hours. No cost, no commitment.'
              : 'Un asesor bilingüe te contacta en 24 horas. Sin costo, sin compromiso.'}
          </p>
          <Link
            href={isEn ? '/en#cotizador' : '/es#cotizador'}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-white text-slate-900 text-sm font-semibold hover:bg-sage-50 transition-all active:scale-95 shadow-lg hover:shadow-xl"
          >
            {isEn ? 'Get a Quote' : 'Cotizar ahora'}
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
