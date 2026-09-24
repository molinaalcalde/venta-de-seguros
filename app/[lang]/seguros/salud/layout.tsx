import type { Metadata } from 'next';
const BASE = 'https://venta-de-seguros.vercel.app';
export function generateStaticParams() { return [{ lang: 'es' }, { lang: 'en' }]; }
export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const isEn = params.lang === 'en';
  return {
    metadataBase: new URL(BASE),
    title: isEn ? 'Health Insurance Without SSN | For Immigrants · ITIN Accepted' : 'Seguro de Salud sin SSN | Para Inmigrantes · ITIN Aceptado',
    description: isEn ? 'Health insurance for immigrants without Social Security Number. ITIN accepted. Individual and family plans from $199/mo. 100% bilingual service.' : 'Seguro médico para inmigrantes y personas sin número de seguro social. Acepta ITIN. Planes individuales y familiares desde $199/mes. Atención 100% en español.',
    alternates: { canonical: `${BASE}/${params.lang}/seguros/salud`, languages: { 'es-US': `${BASE}/es/seguros/salud`, 'en-US': `${BASE}/en/seguros/salud`, 'x-default': `${BASE}/es/seguros/salud` } },
    openGraph: { title: isEn ? 'Health Insurance for Immigrants Without SSN | Maria Fernanda' : 'Seguro de Salud para Inmigrantes sin SSN | Maria Fernanda', description: isEn ? 'Individual and family plans. ITIN accepted. No SSN. From $199/mo.' : 'Planes individuales y familiares. ITIN aceptado. Sin SSN. Desde $199/mes.', url: `${BASE}/${params.lang}/seguros/salud`, siteName: 'Maria Fernanda Insurance Consulting', locale: isEn ? 'en_US' : 'es_US', type: 'website' },
    robots: { index: true, follow: true },
  };
}
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
