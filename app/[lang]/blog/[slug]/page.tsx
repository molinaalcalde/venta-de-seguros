import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { ArrowRight, Clock, User, ChevronRight } from 'lucide-react';
import {
  getAllPosts,
  getPostBySlug,
  getRelatedPosts,
  formatDate,
  extractHeadings,
  CATEGORIES,
  type Lang,
} from '@/lib/blog';
import BlogTableOfContents from '@/components/BlogTableOfContents';
import FloatingShareSidebar from '@/components/FloatingShareSidebar';
import BlogArticleFooter from '@/components/BlogArticleFooter';

const BASE_URL = 'https://consultingbymf.com';

interface Props {
  params: { lang: string; slug: string };
}

export function generateStaticParams() {
  const params: { lang: string; slug: string }[] = [];
  for (const lang of ['es', 'en'] as const) {
    for (const post of getAllPosts(lang)) {
      params.push({ lang, slug: post.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = params.lang as Lang;
  try {
    const post = getPostBySlug(params.slug, lang);
    const otherLang = lang === 'en' ? 'es' : 'en';
    const otherSlug = post.translationSlug ?? post.slug;
    return {
      title: post.title,
      description: post.excerpt,
      alternates: {
        canonical: `${BASE_URL}/${lang}/blog/${post.slug}`,
        languages: {
          'es-US': `${BASE_URL}/es/blog/${lang === 'es' ? post.slug : otherSlug}`,
          'en-US': `${BASE_URL}/en/blog/${lang === 'en' ? post.slug : otherSlug}`,
          'x-default': `${BASE_URL}/es/blog/${lang === 'es' ? post.slug : otherSlug}`,
        },
      },
      openGraph: {
        title: post.title,
        description: post.excerpt,
        type: 'article',
        publishedTime: post.date,
        locale: lang === 'en' ? 'en_US' : 'es_US',
        url: `${BASE_URL}/${lang}/blog/${post.slug}`,
        ...(post.coverImage && { images: [{ url: post.coverImage }] }),
      },
    };
  } catch {
    return {};
  }
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

// MDX component styling
const mdxComponents = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => {
    const text = typeof props.children === 'string' ? props.children : '';
    const id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-');
    return (
      <h2
        id={id}
        className="text-2xl sm:text-[28px] font-light text-slate-900 tracking-tight mt-14 mb-5 pb-3 border-b border-stone-100 scroll-mt-24"
        {...props}
      />
    );
  },
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-slate-600 leading-[1.8] mb-5 text-[15px]" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="space-y-2.5 mb-6 pl-1" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="space-y-2.5 mb-6 pl-5 list-decimal" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="text-slate-600 text-[15px] leading-[1.8] flex items-start gap-2.5">
      <span className="mt-[11px] w-1.5 h-1.5 rounded-full bg-sage-400 shrink-0" />
      <span {...props} />
    </li>
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-semibold text-slate-900" {...props} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLElement>) => (
    <blockquote
      className="border-l-[3px] border-sage-400 pl-5 py-2 my-8 bg-sage-50/50 rounded-r-xl pr-5"
      {...props}
    />
  ),
  hr: () => <hr className="my-10 border-stone-200" />,
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="text-sage-700 underline underline-offset-2 decoration-sage-300 hover:decoration-sage-500 transition-colors" {...props} />
  ),
  table: (props: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 overflow-x-auto rounded-xl border border-stone-200/60">
      <table className="w-full text-sm" {...props} />
    </div>
  ),
  thead: (props: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <thead className="bg-slate-50 text-slate-700 text-xs font-semibold uppercase tracking-wider" {...props} />
  ),
  th: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th className="px-4 py-3 text-left" {...props} />
  ),
  td: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td className="px-4 py-3 text-slate-600 border-t border-stone-100" {...props} />
  ),
};

export default function ArticlePage({ params }: Props) {
  const lang = params.lang as Lang;
  const isEn = lang === 'en';
  const categories = CATEGORIES[lang];

  let post;
  try {
    post = getPostBySlug(params.slug, lang);
  } catch {
    notFound();
  }

  const headings = extractHeadings(post.content);
  const related = getRelatedPosts(post.slug, lang, 3);
  const catLabel = categories.find((c) => c.slug === post.category)?.label ?? post.category;
  const articleUrl = `${BASE_URL}/${lang}/blog/${post.slug}`;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: post.author ?? 'Maria Fernanda',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Maria Fernanda Insurance Consulting',
      url: BASE_URL,
    },
    inLanguage: isEn ? 'en-US' : 'es-US',
    mainEntityOfPage: articleUrl,
    ...(post.coverImage && { image: post.coverImage }),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: isEn ? 'Home' : 'Inicio', item: `${BASE_URL}/${lang}` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/${lang}/blog` },
      { '@type': 'ListItem', position: 3, name: catLabel, item: `${BASE_URL}/${lang}/blog` },
      { '@type': 'ListItem', position: 4, name: post.title, item: articleUrl },
    ],
  };

  // Generate FAQ schema if content has FAQ-like patterns
  const faqItems = extractFAQFromHeadings(headings);
  const faqSchema = faqItems.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((q) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: '' },
    })),
  } : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}

      {/* ── Floating share sidebar ─────────────────────────────────── */}
      <FloatingShareSidebar title={post.title} lang={lang} />

      {/* ── Article header with cover image background ─────────────── */}
      <div className="relative overflow-hidden">
        {/* Background image */}
        {post.coverImage && (
          <img
            src={post.coverImage}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        {/* Dark overlay */}
        <div className={`absolute inset-0 ${post.coverImage ? 'bg-slate-900/80 backdrop-blur-[2px]' : 'bg-slate-900'}`} />

        <div className="relative max-w-4xl mx-auto px-5 sm:px-8 pt-8 pb-16 sm:pb-20">
          {/* Breadcrumb (improved with category link + chevrons) */}
          <nav className="flex items-center gap-1.5 text-xs text-slate-400 mb-8" aria-label="breadcrumb">
            <Link href={`/${lang}`} className="hover:text-slate-200 transition-colors">
              {isEn ? 'Home' : 'Inicio'}
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <Link href={`/${lang}/blog`} className="hover:text-slate-200 transition-colors">Blog</Link>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <span className="text-sage-400 font-medium">{catLabel}</span>
          </nav>

          {/* Badge + reading time */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-md text-white border border-white/20">
              Editorial
            </span>
            <span className="text-xs text-slate-300 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" aria-hidden="true" />
              {post.readingTime} min {isEn ? 'read' : 'de lectura'}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-light text-white tracking-tight leading-[1.12] mb-6 drop-shadow-sm max-w-3xl">
            {post.title}
          </h1>

          {/* Author + date */}
          <div className="flex items-center gap-3 text-xs text-slate-300">
            <span className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5" aria-hidden="true" />
              {post.author ?? 'Maria Fernanda'}
            </span>
            <span className="text-slate-600">·</span>
            <time>{formatDate(post.date, lang)}</time>
          </div>
        </div>
      </div>

      {/* ── Article body ────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 -mt-4">
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_300px] gap-10">
          {/* Main content */}
          <article className="bg-white rounded-t-[28px] shadow-sm border border-stone-200/60 border-b-0 p-6 sm:p-10 lg:p-12 min-w-0">
            {/* MDX Content */}
            <div className="min-w-0 prose-custom">
              <MDXRemote source={post.content} components={mdxComponents} />
            </div>

            {/* Tags, Share, Newsletter, Back (client component) */}
            <BlogArticleFooter
              lang={lang}
              title={post.title}
              articleUrl={articleUrl}
              tags={post.tags}
            />
          </article>

          {/* Sidebar - Table of Contents */}
          {headings.length > 2 && (
            <aside className="hidden xl:block">
              <BlogTableOfContents headings={headings} lang={lang} readingTime={post.readingTime} />
            </aside>
          )}
        </div>
      </div>

      {/* ── Continue Exploring (Related posts) ─────────────────────── */}
      {related.length > 0 && (
        <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-light text-slate-900 tracking-tight">
                {isEn ? (
                  <>Continue <span className="font-serif italic text-sage-700">Exploring</span></>
                ) : (
                  <>Continua <span className="font-serif italic text-sage-700">Explorando</span></>
                )}
              </h2>
              <p className="text-sm text-slate-500 mt-2 font-light">
                {isEn
                  ? 'Stay up to date with practical insurance guides.'
                  : 'Mantente al dia con guias practicas de seguros.'}
              </p>
            </div>
            <Link
              href={`/${lang}/blog`}
              className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
            >
              {isEn ? 'View Full Blog' : 'Ver Blog Completo'}
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/${lang}/blog/${r.slug}`}
                className="group bg-white rounded-[20px] overflow-hidden border border-stone-200/60 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="relative h-44 overflow-hidden bg-gradient-to-br from-sage-50 to-sage-100">
                  {r.coverImage ? (
                    <img
                      src={r.coverImage}
                      alt={r.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-8 h-8 rounded-lg border-2 border-sage-300/30 flex items-center justify-center">
                        <div className="w-3 h-3 rounded bg-sage-300/20" />
                      </div>
                    </div>
                  )}
                  <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-semibold backdrop-blur-sm ${categoryColors[r.category] ?? 'bg-slate-100 text-slate-700'}`}>
                    {categories.find((c) => c.slug === r.category)?.label ?? r.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-sm font-medium text-slate-900 leading-snug group-hover:text-sage-800 transition-colors line-clamp-2 mb-2">
                    {r.title}
                  </h3>
                  <p className="text-[12px] text-slate-500 line-clamp-2 leading-relaxed mb-3">
                    {r.excerpt}
                  </p>
                  <span className="text-xs font-semibold text-slate-700 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    {isEn ? 'Read more' : 'Leer mas'}
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="sm:hidden mt-6 text-center">
            <Link
              href={`/${lang}/blog`}
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
            >
              {isEn ? 'View Full Blog' : 'Ver Blog Completo'}
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>
      )}

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-5 sm:px-8 pb-12">
        <div className="bg-slate-900 rounded-[28px] p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl font-light text-white tracking-tight mb-2">
              {isEn ? (
                <>Ready to <span className="font-serif italic text-sage-300">compare</span>?</>
              ) : (
                <>¿Lista para <span className="font-serif italic text-sage-300">comparar</span>?</>
              )}
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed max-w-md font-light">
              {isEn
                ? 'Our bilingual advisors are available for a personalized consultation.'
                : 'Nuestros asesores bilingues estan disponibles para una consulta personalizada.'}
            </p>
          </div>
          <Link
            href={isEn ? '/en#cotizador' : '/es#cotizador'}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-slate-900 text-sm font-semibold hover:bg-sage-50 transition-all active:scale-95 shadow-md shrink-0"
          >
            {isEn ? 'Get a Quote' : 'Cotizar ahora'}
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* ── SEO Footer Links ───────────────────────────────────────── */}
      <section className="border-t border-stone-200 bg-slate-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900 mb-3">
                {isEn ? 'Insurance Types' : 'Tipos de Seguro'}
              </h3>
              <ul className="space-y-2">
                {[
                  { href: `/${lang}/seguros/auto`, label: isEn ? 'Auto Insurance' : 'Seguro de Auto' },
                  { href: `/${lang}/seguros/vida`, label: isEn ? 'Life Insurance' : 'Seguro de Vida' },
                  { href: `/${lang}/seguros/comercial`, label: isEn ? 'Business Insurance' : 'Seguro Comercial' },
                  { href: `/${lang}/seguros/mascotas`, label: isEn ? 'Pet Insurance' : 'Seguro de Mascotas' },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-xs text-slate-500 hover:text-sage-700 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900 mb-3">
                {isEn ? 'Guides' : 'Guias'}
              </h3>
              <ul className="space-y-2">
                {getAllPosts(lang)
                  .filter((p) => p.category === 'Guías')
                  .slice(0, 4)
                  .map((p) => (
                    <li key={p.slug}>
                      <Link href={`/${lang}/blog/${p.slug}`} className="text-xs text-slate-500 hover:text-sage-700 transition-colors line-clamp-1">
                        {p.title}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900 mb-3">Blog</h3>
              <ul className="space-y-2">
                {getAllPosts(lang)
                  .slice(0, 4)
                  .map((p) => (
                    <li key={p.slug}>
                      <Link href={`/${lang}/blog/${p.slug}`} className="text-xs text-slate-500 hover:text-sage-700 transition-colors line-clamp-1">
                        {p.title}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900 mb-3">
                {isEn ? 'Company' : 'Compania'}
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href={`/${lang}`} className="text-xs text-slate-500 hover:text-sage-700 transition-colors">
                    {isEn ? 'Home' : 'Inicio'}
                  </Link>
                </li>
                <li>
                  <Link href={`/${lang}/blog`} className="text-xs text-slate-500 hover:text-sage-700 transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href={`/${lang}/politica-de-privacidad`} className="text-xs text-slate-500 hover:text-sage-700 transition-colors">
                    {isEn ? 'Privacy Policy' : 'Politica de Privacidad'}
                  </Link>
                </li>
                <li>
                  <Link href={`/${lang}/terminos-de-uso`} className="text-xs text-slate-500 hover:text-sage-700 transition-colors">
                    {isEn ? 'Terms of Use' : 'Terminos de Uso'}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/** Extract questions from headings (headings that start with ¿ or contain ?) */
function extractFAQFromHeadings(headings: { id: string; text: string }[]): string[] {
  return headings
    .filter((h) => h.text.startsWith('¿') || h.text.includes('?'))
    .map((h) => h.text);
}

