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

      {/* ── Featured post (full-width hero card like VANTIZ) ─────────── */}
      {featured && (
        <section className="max-w-7xl mx-auto px-5 sm:px-8 -mt-16 relative z-10 mb-12">
          <Link
            href={`/${lang}/blog/${featured.slug}`}
            className="group block relative rounded-[28px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 min-h-[400px] sm:min-h-[460px]"
          >
            {/* Background image */}
            {featured.coverImage ? (
              <img
                src={featured.coverImage}
                alt={featured.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-sage-800 to-slate-900" />
            )}
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/50 to-transparent" />

            {/* Destacado badge */}
            <div className="absolute top-6 right-6 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white text-[11px] font-semibold border border-white/20">
              <div className="w-1.5 h-1.5 rounded-full bg-sage-400" />
              {isEn ? 'Featured' : 'Destacado'}
            </div>

            {/* Content overlay */}
            <div className="relative flex flex-col justify-end h-full min-h-[400px] sm:min-h-[460px] p-8 sm:p-10 lg:p-12">
              <span
                className={`inline-block self-start px-3 py-1.5 rounded-full text-[11px] font-semibold backdrop-blur-sm mb-4 ${
                  categoryColors[featured.category] ?? 'bg-slate-100 text-slate-700'
                }`}
              >
                {categories.find((c) => c.slug === featured.category)?.label ?? featured.category}
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-light text-white tracking-tight leading-[1.15] mb-4 max-w-3xl drop-shadow-sm">
                {featured.title}
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 line-clamp-2 max-w-2xl">
                {featured.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-xs text-slate-400">
                  <time>{formatDate(featured.date, lang)}</time>
                  <span className="text-slate-600">·</span>
                  <span>{featured.readingTime} min {isEn ? 'read' : 'de lectura'}</span>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:gap-3 transition-all">
                  {isEn ? 'Read article' : 'Leer artículo'}
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* ── Category Filters + Grid ─────────────────────────────────── */}
      <BlogFilters
        lang={lang}
        posts={rest}
        allPostsCount={posts.length}
        categories={categories}
        categoryColors={categoryColors}
      />

      {/* ── Newsletter subscription ────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-5 sm:px-8 pb-16">
        <div className="bg-white rounded-[28px] border border-stone-200/60 shadow-sm p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-light text-slate-900 tracking-tight mb-3">
            {isEn ? (
              <>Get our <span className="font-serif italic text-sage-700">Insurance Insights</span></>
            ) : (
              <>Recibe nuestras <span className="font-serif italic text-sage-700">Guias de Seguros</span></>
            )}
          </h2>
          <p className="text-sm text-slate-500 mb-7 leading-relaxed max-w-md mx-auto font-light">
            {isEn
              ? 'Tips and comparisons directly to your inbox. No spam, no sales pitches.'
              : 'Tips y comparativas directo a tu correo. Sin spam, sin presion de venta.'}
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" action="#">
            <input
              type="email"
              placeholder={isEn ? 'Your email address' : 'Tu correo electronico'}
              className="flex-1 px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sage-200 focus:border-sage-300 transition-all"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-slate-900 text-white text-sm font-semibold hover:bg-slate-700 transition-all active:scale-95"
            >
              {isEn ? 'Subscribe' : 'Suscribirse'}
            </button>
          </form>
          <p className="text-[11px] text-slate-400 mt-4">
            {isEn
              ? 'By subscribing, you accept our privacy policy.'
              : 'Al suscribirte, aceptas nuestra politica de privacidad.'}
          </p>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <section className="bg-slate-900 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 py-20 text-center">
          <div className="inline-flex items-center gap-2 mb-5">
            <div className="w-1.5 h-1.5 rounded-full bg-sage-400" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-sage-400">
              {isEn ? 'Free Quote' : 'Cotizacion Gratis'}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight mb-4">
            {isEn ? (
              <>Ready to <span className="font-serif italic text-sage-300">compare</span> your options?</>
            ) : (
              <>¿Lista para <span className="font-serif italic text-sage-300">comparar</span> tus opciones?</>
            )}
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mb-8 leading-relaxed max-w-lg mx-auto font-light">
            {isEn
              ? 'A bilingual advisor contacts you within 24 hours. No cost, no commitment.'
              : 'Un asesor bilingue te contacta en 24 horas. Sin costo, sin compromiso.'}
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
