import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { ArrowLeft, ArrowRight, Clock } from 'lucide-react';
import { getAllPosts, getPostBySlug, formatDate } from '@/lib/blog';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const post = getPostBySlug(params.slug);
    return {
      title: post.title,
      description: post.excerpt,
      openGraph: {
        title: post.title,
        description: post.excerpt,
        type: 'article',
        publishedTime: post.date,
        locale: 'es_US',
      },
    };
  } catch {
    return {};
  }
}

// Componentes MDX con el estilo del sitio
const mdxComponents = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="text-2xl sm:text-3xl font-normal text-slate-900 tracking-tight mt-12 mb-4 pb-3 border-b border-stone-100"
      {...props}
    />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className="text-xl font-semibold text-slate-900 mt-8 mb-3"
      {...props}
    />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-slate-600 leading-relaxed mb-5 text-base" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="space-y-2 mb-6 pl-1" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="space-y-2 mb-6 pl-5 list-decimal" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="text-slate-600 text-base leading-relaxed flex items-start gap-2.5">
      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
      <span {...props} />
    </li>
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-semibold text-slate-900" {...props} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLElement>) => (
    <blockquote
      className="border-l-2 border-sage-400 pl-5 py-1 my-6 text-slate-600 italic"
      {...props}
    />
  ),
  hr: () => <hr className="my-10 border-stone-200" />,
};

export default function ArticlePage({ params }: Props) {
  let post;
  try {
    post = getPostBySlug(params.slug);
  } catch {
    notFound();
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    publisher: {
      '@type': 'Organization',
      name: 'Maria Fernanda Insurance Consulting',
      url: 'https://venta-de-seguros.vercel.app',
    },
    inLanguage: 'es-US',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="max-w-[1720px] mx-auto">
        {/* Breadcrumb */}
        <div className="max-w-3xl mx-auto px-5 sm:px-8 pt-8 pb-0">
          <nav className="flex items-center gap-2 text-xs text-slate-400">
            <Link href="/" className="hover:text-slate-700 transition-colors">Inicio</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-slate-700 transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-slate-600 line-clamp-1">{post.title}</span>
          </nav>
        </div>

        {/* Article */}
        <article className="max-w-3xl mx-auto px-5 sm:px-8 py-10">
          {/* Header */}
          <header className="mb-10">
            <div className="flex items-center gap-3 mb-5">
              <span className="inline-block px-3 py-1 rounded-full bg-[#dbe7dc] text-slate-700 text-xs font-semibold">
                {post.category}
              </span>
              <span className="text-slate-300">·</span>
              <time className="text-xs text-slate-400">{formatDate(post.date)}</time>
              <span className="text-slate-300">·</span>
              <span className="text-xs text-slate-400 flex items-center gap-1">
                <Clock className="w-3 h-3" aria-hidden="true" />
                {post.readingTime} min de lectura
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-normal text-slate-900 tracking-tight leading-tight mb-5">
              {post.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-500 leading-relaxed border-l-2 border-[#a8c5a0] pl-5">
              {post.excerpt}
            </p>
          </header>

          {/* Cover image */}
          {post.coverImage && (
            <div className="mb-10 rounded-[24px] overflow-hidden h-72 sm:h-96">
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Divider */}
          <div className="h-px bg-stone-200 mb-10" />

          {/* MDX Content */}
          <div className="min-w-0">
            <MDXRemote source={post.content} components={mdxComponents} />
          </div>

          {/* Back link */}
          <div className="mt-14 pt-8 border-t border-stone-200">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
              Volver al Blog
            </Link>
          </div>
        </article>

        {/* CTA */}
        <div className="max-w-3xl mx-auto px-5 sm:px-8 pb-20">
          <div className="bg-[#dbe7dc] rounded-[28px] p-8 sm:p-10 text-center">
            <h2 className="text-2xl sm:text-3xl font-normal text-slate-900 tracking-tight mb-3">
              ¿Tienes preguntas sobre tu seguro?
            </h2>
            <p className="text-sm text-slate-600 mb-7 leading-relaxed max-w-md mx-auto">
              Un asesor bilingüe te orienta sin costo y sin compromiso. En español, desde el primer contacto.
            </p>
            <Link
              href="/#cotizador"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-slate-900 text-white text-sm font-semibold hover:bg-slate-700 transition-all active:scale-95 shadow-md"
            >
              Cotizar ahora <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
