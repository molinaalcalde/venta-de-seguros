import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { ArrowLeft, ArrowRight, Clock, User } from 'lucide-react';
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
    mainEntityOfPage: `${BASE_URL}/${lang}/blog/${post.slug}`,
    ...(post.coverImage && { image: post.coverImage }),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: isEn ? 'Home' : 'Inicio', item: `${BASE_URL}/${lang}` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/${lang}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: `${BASE_URL}/${lang}/blog/${post.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* ── Article header ──────────────────────────────────────────── */}
      <div className="bg-slate-900">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 pt-8 pb-16 sm:pb-20">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-8">
            <Link href={`/${lang}`} className="hover:text-slate-300 transition-colors">
              {isEn ? 'Home' : 'Inicio'}
            </Link>
            <span className="text-slate-600">/</span>
            <Link href={`/${lang}/blog`} className="hover:text-slate-300 transition-colors">Blog</Link>
            <span className="text-slate-600">/</span>
            <span className="text-slate-400 line-clamp-1 max-w-[200px]">{post.title}</span>
          </nav>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className={`inline-block px-3 py-1 rounded-full text-[11px] font-semibold ${categoryColors[post.category] ?? 'bg-slate-100 text-slate-700'}`}>
              {catLabel}
            </span>
            <time className="text-xs text-slate-400">{formatDate(post.date, lang)}</time>
            <span className="text-slate-600">|</span>
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <Clock className="w-3 h-3" aria-hidden="true" />
              {post.readingTime} min {isEn ? 'read' : 'de lectura'}
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <User className="w-3 h-3" aria-hidden="true" />
              {post.author ?? 'Maria Fernanda'}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-light text-white tracking-tight leading-tight mb-6">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl font-light">
            {post.excerpt}
          </p>
        </div>
      </div>

      {/* ── Article body ────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 -mt-4">
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_280px] gap-10">
          {/* Main content */}
          <article className="bg-white rounded-t-[28px] shadow-sm border border-stone-200/60 border-b-0 p-6 sm:p-10 lg:p-12 min-w-0">
            {/* Cover image */}
            {post.coverImage && (
              <div className="mb-10 rounded-[20px] overflow-hidden h-72 sm:h-96">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* MDX Content */}
            <div className="min-w-0 prose-custom">
              <MDXRemote source={post.content} components={mdxComponents} />
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-12 pt-6 border-t border-stone-100">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block px-3 py-1.5 rounded-full bg-slate-100 text-xs text-slate-600 font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

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
          </article>

          {/* Sidebar - Table of Contents */}
          {headings.length > 2 && (
            <aside className="hidden xl:block">
              <BlogTableOfContents headings={headings} lang={lang} />
            </aside>
          )}
        </div>
      </div>

      {/* ── Related posts ───────────────────────────────────────────── */}
      {related.length > 0 && (
        <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
          <h2 className="text-2xl sm:text-3xl font-light text-slate-900 tracking-tight mb-8">
            {isEn ? (
              <>Related <span className="font-serif italic text-sage-700">Articles</span></>
            ) : (
              <>Artículos <span className="font-serif italic text-sage-700">Relacionados</span></>
            )}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/${lang}/blog/${r.slug}`}
                className="group bg-white rounded-[20px] overflow-hidden border border-stone-200/60 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="relative h-40 overflow-hidden bg-gradient-to-br from-sage-50 to-sage-100">
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
                  <span className={`absolute top-3 left-3 px-2 py-0.5 rounded-full text-[10px] font-semibold ${categoryColors[r.category] ?? 'bg-slate-100 text-slate-700'}`}>
                    {categories.find((c) => c.slug === r.category)?.label ?? r.category}
                  </span>
                </div>
                <div className="p-5">
                  <time className="text-[11px] text-slate-400 block mb-2">{formatDate(r.date, lang)}</time>
                  <h3 className="text-sm font-medium text-slate-900 leading-snug group-hover:text-sage-800 transition-colors line-clamp-2">
                    {r.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-5 sm:px-8 pb-20">
        <div className="bg-slate-900 rounded-[28px] p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-light text-white tracking-tight mb-3">
            {isEn ? (
              <>Have questions about your <span className="font-serif italic text-sage-300">insurance</span>?</>
            ) : (
              <>¿Tienes preguntas sobre tu <span className="font-serif italic text-sage-300">seguro</span>?</>
            )}
          </h2>
          <p className="text-sm text-slate-400 mb-7 leading-relaxed max-w-md mx-auto font-light">
            {isEn
              ? 'A bilingual advisor can help you at no cost. In your language, from the first contact.'
              : 'Un asesor bilingüe te orienta sin costo y sin compromiso. En español, desde el primer contacto.'}
          </p>
          <Link
            href={isEn ? '/en#cotizador' : '/es#cotizador'}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-slate-900 text-sm font-semibold hover:bg-sage-50 transition-all active:scale-95 shadow-md"
          >
            {isEn ? 'Get a Quote' : 'Cotizar ahora'}
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
