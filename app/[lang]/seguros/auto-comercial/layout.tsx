import type { Metadata } from 'next';
const BASE = 'https://venta-de-seguros.vercel.app';
export function generateStaticParams() { return [{ lang: 'es' }, { lang: 'en' }]; }
export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const isEn = params.lang === 'en';
  return {
    metadataBase: new URL(BASE),
    title: isEn ? 'Commercial Auto Insurance Without SSN | Vans · Trucks · ITIN' : 'Seguro de Auto Comercial sin SSN | Vans · Camiones · ITIN',
    description: isEn ? 'Commercial insurance for vans, trucks, and work fleets. No SSN required, ITIN accepted. COI in 24 hours. For Hispanic contractors, delivery, and businesses. From $110/mo.' : 'Seguro comercial para vans, camiones y flotas de trabajo. Sin SSN requerido, acepta ITIN. COI en 24 horas. Para contratistas hispanos, delivery y negocios. Desde $110/mes.',
    alternates: { canonical: `${BASE}/${params.lang}/seguros/auto-comercial`, languages: { 'es-US': `${BASE}/es/seguros/auto-comercial`, 'en-US': `${BASE}/en/seguros/auto-comercial`, 'x-default': `${BASE}/es/seguros/auto-comercial` } },
    openGraph: { title: isEn ? 'Commercial Auto Insurance for Hispanic Contractors | Maria Fernanda' : 'Seguro Auto Comercial para Contratistas Hispanos | Maria Fernanda', description: isEn ? 'Vans, trucks, fleets. No SSN. COI in 24 hours. From $110/mo.' : 'Vans, camiones y flotas. Sin SSN. COI en 24 horas. Desde $110/mes.', url: `${BASE}/${params.lang}/seguros/auto-comercial`, siteName: 'Maria Fernanda Insurance Consulting', locale: isEn ? 'en_US' : 'es_US', type: 'website' },
    robots: { index: true, follow: true },
  };
}
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
