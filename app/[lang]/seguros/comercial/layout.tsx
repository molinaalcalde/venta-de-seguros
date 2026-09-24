import type { Metadata } from 'next';
const BASE = 'https://venta-de-seguros.vercel.app';
export function generateStaticParams() { return [{ lang: 'es' }, { lang: 'en' }]; }
export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const isEn = params.lang === 'en';
  return {
    metadataBase: new URL(BASE),
    title: isEn ? 'Business Insurance for Hispanic Businesses | BOP · ITIN · No SSN' : 'Seguro Comercial para Negocios Hispanos | BOP · ITIN · Sin SSN',
    description: isEn ? 'Business insurance for small Hispanic businesses without SSN. ITIN and EIN accepted. General liability, BOP, property protection. COI in 24 hours. From $120/mo.' : 'Seguro para pequeños negocios hispanos sin SSN. Acepta ITIN y EIN. Responsabilidad civil general, BOP, protección de propiedad. COI en 24 horas. Desde $120/mes.',
    alternates: { canonical: `${BASE}/${params.lang}/seguros/comercial`, languages: { 'es-US': `${BASE}/es/seguros/comercial`, 'en-US': `${BASE}/en/seguros/comercial`, 'x-default': `${BASE}/es/seguros/comercial` } },
    openGraph: { title: isEn ? 'Business Insurance for Hispanic Businesses | Maria Fernanda' : 'Seguro Comercial para Negocios Hispanos | Maria Fernanda', description: isEn ? 'BOP, liability, property. No SSN. ITIN or EIN accepted. COI in 24h. From $120/mo.' : 'BOP, responsabilidad y propiedad. Sin SSN. ITIN o EIN aceptado. COI en 24h. Desde $120/mes.', url: `${BASE}/${params.lang}/seguros/comercial`, siteName: 'Maria Fernanda Insurance Consulting', locale: isEn ? 'en_US' : 'es_US', type: 'website' },
    robots: { index: true, follow: true },
  };
}
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
