import type { Metadata } from 'next';
const BASE = 'https://venta-de-seguros.vercel.app';
export function generateStaticParams() { return [{ lang: 'es' }, { lang: 'en' }]; }
export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const isEn = params.lang === 'en';
  return {
    metadataBase: new URL(BASE),
    title: isEn ? 'Dental Insurance Without SSN | For Hispanic Families · From $19/mo' : 'Seguro Dental sin SSN | Para Familias Hispanas · Desde $19/mes',
    description: isEn ? 'Dental insurance for immigrants without SSN. ITIN accepted. Individual plans from $19/mo and family plans. Cleanings, fillings, extractions, and orthodontics.' : 'Aseguranza dental para inmigrantes e indocumentados sin número de seguro social. Acepta ITIN. Planes individuales desde $19/mes y familiares.',
    alternates: { canonical: isEn ? `${BASE}/en/dental-insurance` : `${BASE}/es/seguros/dental`, languages: { 'es-US': `${BASE}/es/seguros/dental`, 'en-US': `${BASE}/en/dental-insurance`, 'x-default': `${BASE}/es/seguros/dental` } },
    openGraph: { title: isEn ? 'Dental Insurance for Immigrants Without SSN | Maria Fernanda' : 'Seguro Dental para Inmigrantes sin SSN | Maria Fernanda', description: isEn ? 'From $19/mo. No SSN. ITIN accepted.' : 'Desde $19/mes. Sin SSN. Acepta ITIN.', url: isEn ? `${BASE}/en/dental-insurance` : `${BASE}/es/seguros/dental`, siteName: 'Maria Fernanda Insurance Consulting', locale: isEn ? 'en_US' : 'es_US', type: 'website' },
    robots: { index: true, follow: true },
  };
}
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
