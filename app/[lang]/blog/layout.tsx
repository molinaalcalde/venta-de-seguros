import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import BlogHeaderClient from '@/components/BlogHeader';

const BASE_URL = 'https://consultingbymf.com';

type Props = {
  params: { lang: string };
  children: ReactNode;
};

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const isEn = params.lang === 'en';
  return {
    alternates: {
      canonical: `${BASE_URL}/${params.lang}/blog`,
      languages: {
        'es-US': `${BASE_URL}/es/blog`,
        'en-US': `${BASE_URL}/en/blog`,
        'x-default': `${BASE_URL}/es/blog`,
      },
    },
    openGraph: {
      locale: isEn ? 'en_US' : 'es_US',
    },
  };
}

export default function BlogLayout({ children, params }: Props) {
  const isEn = params.lang === 'en';

  return (
    <div className="min-h-screen bg-[#fafbfa] flex flex-col">
      <BlogHeaderClient lang={params.lang as 'es' | 'en'} />
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Brand */}
            <div>
              <Link href={isEn ? '/en' : '/es'} className="block mb-3">
                <img src="/logo.png" alt="Maria Fernanda Insurance Consulting" className="h-8 w-auto brightness-0 invert" />
              </Link>
              <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
                {isEn
                  ? 'Insurance guides in English and Spanish for the Hispanic community in the United States. Subject to terms and conditions.'
                  : 'Guías de seguros en español e inglés para la comunidad hispana en Estados Unidos. Sujeto a términos y condiciones.'}
              </p>
            </div>

            {/* Quick links */}
            <div>
              <h3 className="text-xs font-semibold text-slate-300 uppercase tracking-widest mb-4">
                {isEn ? 'Quick Links' : 'Enlaces'}
              </h3>
              <div className="flex flex-col gap-2.5 text-sm">
                <Link href={isEn ? '/en' : '/es'} className="hover:text-white transition-colors w-fit">
                  {isEn ? 'Home' : 'Inicio'}
                </Link>
                <Link href={`/${params.lang}/blog`} className="hover:text-white transition-colors w-fit">
                  Blog
                </Link>
                <Link href={isEn ? '/en#coberturas-destacadas' : '/es#coberturas-destacadas'} className="hover:text-white transition-colors w-fit">
                  {isEn ? 'Coverage' : 'Coberturas'}
                </Link>
                <Link href={isEn ? '/en#faq' : '/es#faq'} className="hover:text-white transition-colors w-fit">
                  FAQ
                </Link>
              </div>
            </div>

            {/* Insurance types */}
            <div>
              <h3 className="text-xs font-semibold text-slate-300 uppercase tracking-widest mb-4">
                {isEn ? 'Insurance' : 'Seguros'}
              </h3>
              <div className="flex flex-col gap-2.5 text-sm">
                <Link href={isEn ? '/en/car-insurance' : '/es/seguros/auto'} className="hover:text-white transition-colors w-fit">
                  {isEn ? 'Car Insurance' : 'Seguro de Auto'}
                </Link>
                <Link href={isEn ? '/en/life-insurance' : '/es/seguros/vida'} className="hover:text-white transition-colors w-fit">
                  {isEn ? 'Life Insurance' : 'Seguro de Vida'}
                </Link>
                <Link href={isEn ? '/en/health-insurance' : '/es/seguros/salud'} className="hover:text-white transition-colors w-fit">
                  {isEn ? 'Health Insurance' : 'Seguro de Salud'}
                </Link>
                <Link href={isEn ? '/en/pet-insurance' : '/es/seguros/mascotas'} className="hover:text-white transition-colors w-fit">
                  {isEn ? 'Pet Insurance' : 'Seguro de Mascotas'}
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-600">
              &copy; {new Date().getFullYear()} Maria Fernanda Insurance Consulting. {isEn ? 'All rights reserved.' : 'Todos los derechos reservados.'}
            </p>
            <div className="flex gap-5 text-xs text-slate-600">
              <Link href={`/${params.lang}/privacidad`} className="hover:text-slate-400 transition-colors">
                {isEn ? 'Privacy' : 'Privacidad'}
              </Link>
              <Link href={`/${params.lang}/terminos`} className="hover:text-slate-400 transition-colors">
                {isEn ? 'Terms' : 'Términos'}
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
