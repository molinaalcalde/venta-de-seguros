import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getAllPosts, formatDate } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog — Guías de Seguros en Español para la Comunidad Hispana',
  description:
    'Artículos prácticos sobre seguros en Estados Unidos escritos en español. Aprende sobre seguro de vida, auto, salud y más sin tecnicismos.',
};

const categoryColors: Record<string, string> = {
  Guías: 'bg-sage-100 text-sage-800',
  Noticias: 'bg-blue-50 text-blue-700',
  Comunidad: 'bg-amber-50 text-amber-700',
  General: 'bg-slate-100 text-slate-700',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      {/* Hero */}
      <section className="bg-[#dbe7dc] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-4 h-4 rounded-full border-[1.8px] border-slate-700 flex items-center justify-center">
                <span className="w-1 h-1 bg-slate-700 rounded-full" />
              </div>
              <span className="text-xs uppercase tracking-widest font-semibold text-slate-600">Recursos y Guías</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-normal text-slate-900 tracking-tight leading-tight">
              Blog{' '}
              <span className="font-['Cormorant_Garamond',serif] italic font-normal">Seguros</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed max-w-lg">
              Guías prácticas sobre seguros en Estados Unidos, escritas en español para la comunidad hispana. Sin tecnicismos, sin letra chica.
            </p>
          </div>
        </div>
      </section>

      {/* Posts grid */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          {posts.length === 0 ? (
            <p className="text-slate-500 text-sm text-center py-20">No hay artículos publicados aún.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="group bg-white rounded-[28px] overflow-hidden border border-stone-200/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
                >
                  {/* Image / placeholder */}
                  <div className="relative h-48 overflow-hidden bg-[#ccdccc] shrink-0">
                    {post.coverImage ? (
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-10 h-10 rounded-full border-[2px] border-slate-600/40 flex items-center justify-center mx-auto mb-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-slate-600/40" />
                          </div>
                          <span className="text-[10px] uppercase tracking-widest font-semibold text-slate-600/60">
                            {post.category}
                          </span>
                        </div>
                      </div>
                    )}
                    <span
                      className={`absolute top-4 left-4 px-2.5 py-1 rounded-full text-[11px] font-semibold ${
                        categoryColors[post.category] ?? categoryColors.General
                      }`}
                    >
                      {post.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <time className="text-[11px] text-slate-400 mb-2.5 block">
                      {formatDate(post.date)}
                    </time>
                    <h2 className="text-lg font-normal text-slate-900 tracking-tight leading-snug mb-3 group-hover:text-slate-700 transition-colors line-clamp-3">
                      {post.title}
                    </h2>
                    <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed flex-grow line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[11px] text-slate-400">{post.readingTime} min de lectura</span>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-xs font-semibold text-slate-900 inline-flex items-center gap-1.5 hover:gap-3 transition-all duration-200"
                      >
                        Leer más <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#dbe7dc] border-t border-[#ccdccc]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-normal text-slate-900 tracking-tight mb-3">
            ¿Listo para proteger a tu familia?
          </h2>
          <p className="text-sm text-slate-600 mb-7 leading-relaxed">
            Un asesor bilingüe te contacta en 24 horas. Sin costo, sin compromiso, en español.
          </p>
          <Link
            href="/#cotizador"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-slate-900 text-white text-sm font-semibold hover:bg-slate-700 transition-all active:scale-95 shadow-md"
          >
            Cotizar ahora <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
