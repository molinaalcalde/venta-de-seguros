import type { Metadata } from 'next';
const BASE = 'https://venta-de-seguros.vercel.app';
export function generateStaticParams() { return [{ lang: 'es' }, { lang: 'en' }]; }
export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const isEn = params.lang === 'en';
  return {
    metadataBase: new URL(BASE),
    title: isEn ? 'Umbrella Coverage | From $1M Additional Coverage · No SSN' : 'Protección Extra (Umbrella) | Desde $1M de Cobertura · Sin SSN',
    description: isEn ? 'Umbrella liability insurance for Hispanics. Protects your savings when your auto or home insurance limits are exceeded. From $1 million coverage. From $19/mo.' : 'Seguro de responsabilidad extra (umbrella/paraguas) para hispanos. Protege tus ahorros cuando tu seguro de auto o casa no alcanza. Desde $1 millón de cobertura. Desde $19/mes.',
    alternates: { canonical: isEn ? `${BASE}/en/extra-protection` : `${BASE}/es/seguros/proteccion-extra`, languages: { 'es-US': `${BASE}/es/seguros/proteccion-extra`, 'en-US': `${BASE}/en/extra-protection`, 'x-default': `${BASE}/es/seguros/proteccion-extra` } },
    openGraph: { title: isEn ? 'Umbrella Coverage for Hispanics | Maria Fernanda' : 'Protección Extra (Umbrella) para Hispanos | Maria Fernanda', description: isEn ? 'From $1M additional coverage. Protects your savings. From $19/mo. No SSN required.' : 'Desde $1M de cobertura adicional. Protege tus ahorros. Desde $19/mes. Sin SSN requerido.', url: isEn ? `${BASE}/en/extra-protection` : `${BASE}/es/seguros/proteccion-extra`, siteName: 'Maria Fernanda Insurance Consulting', locale: isEn ? 'en_US' : 'es_US', type: 'website' },
    robots: { index: true, follow: true },
  };
}
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
