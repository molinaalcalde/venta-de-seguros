import type { Metadata } from 'next';
const BASE = 'https://venta-de-seguros.vercel.app';
export function generateStaticParams() { return [{ lang: 'es' }, { lang: 'en' }]; }
export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const isEn = params.lang === 'en';
  return {
    metadataBase: new URL(BASE),
    title: isEn ? 'Home + Auto Insurance Bundle | Save up to $1,184/yr · ITIN Accepted' : 'Seguro de Casa y Auto en Paquete | ITIN aceptado · Ahorra hasta $1,184/año',
    description: isEn ? 'Bundle home and auto insurance with one independent agent. Save up to 25% — $466 to $1,184 per year. ITIN accepted. Renters and homeowners. Free comparison.' : 'Seguro de hogar para inquilinos desde $15/mes combinado con tu auto. Un solo agente para todo. Comparamos 10+ aseguradoras. ITIN aceptado. Ahorra hasta $1,184 al año. Cotización gratis.',
    alternates: { canonical: isEn ? `${BASE}/en/home-auto-bundle` : `${BASE}/es/seguros/paquete-casa-auto`, languages: { 'es-US': `${BASE}/es/seguros/paquete-casa-auto`, 'en-US': `${BASE}/en/home-auto-bundle`, 'x-default': `${BASE}/es/seguros/paquete-casa-auto` } },
    openGraph: { title: isEn ? 'Home + Auto Bundle for Hispanics | Maria Fernanda' : 'Paquete Seguro Casa + Auto para Hispanos | Maria Fernanda', description: isEn ? 'Bundle and save up to 25%. No SSN. ITIN accepted.' : 'Combina y ahorra hasta 25%. Sin SSN. ITIN aceptado.', url: isEn ? `${BASE}/en/home-auto-bundle` : `${BASE}/es/seguros/paquete-casa-auto`, siteName: 'Maria Fernanda Insurance Consulting', locale: isEn ? 'en_US' : 'es_US', type: 'website' },
    robots: { index: true, follow: true },
  };
}
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
