import type { ReactNode } from 'react';
import Link from 'next/link';
import BlogHeader from '@/components/BlogHeader';

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#fafbfa] flex flex-col">
      <BlogHeader />
      <main className="flex-1">{children}</main>

      {/* Footer simplificado */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <Link href="/" className="block mb-2">
                <img src="/logo.png" alt="Maria Fernanda Insurance Consulting" className="h-8 w-auto brightness-0 invert" />
              </Link>
              <p className="text-xs text-slate-500 max-w-xs leading-relaxed">
                Seguros en español para la comunidad hispana en Estados Unidos. Sujeto a términos y condiciones.
              </p>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs">
              <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              <Link href="/#cotizador" className="hover:text-white transition-colors">Cotizar</Link>
              <Link href="/#faq" className="hover:text-white transition-colors">FAQ</Link>
              <Link href="/#contacto" className="hover:text-white transition-colors">Contacto</Link>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-slate-800 text-xs text-slate-600">
            © {new Date().getFullYear()} Maria Fernanda Insurance Consulting. Todos los derechos reservados. · Correduría Aseguradora Autorizada
          </div>
        </div>
      </footer>
    </div>
  );
}
