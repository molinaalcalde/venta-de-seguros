import type { Metadata } from 'next';
const BASE = 'https://venta-de-seguros.vercel.app';
export function generateStaticParams() { return [{ lang: 'es' }, { lang: 'en' }]; }
export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const isEn = params.lang === 'en';
  return {
    metadataBase: new URL(BASE),
    title: isEn ? 'Car Insurance Without SSN | ITIN Accepted · From $89/mo' : 'Seguro de Auto sin SSN | ITIN Aceptado · Desde $89/mes',
    description: isEn ? 'Car insurance for immigrants without Social Security Number. ITIN, passport, and consular ID accepted. From $89/mo. 100% bilingual service. No SSN required.' : 'Seguro de auto para inmigrantes sin número de seguro social. Aceptamos ITIN, pasaporte y matrícula consular. Desde $89/mes. Atención 100% en español. Sin SSN requerido.',
    alternates: { canonical: `${BASE}/${params.lang}/seguros/auto`, languages: { 'es-US': `${BASE}/es/seguros/auto`, 'en-US': `${BASE}/en/seguros/auto`, 'x-default': `${BASE}/es/seguros/auto` } },
    openGraph: { title: isEn ? 'Car Insurance Without SSN | Maria Fernanda' : 'Seguro de Auto sin SSN | Maria Fernanda', description: isEn ? 'ITIN accepted. No SSN. From $89/mo.' : 'Acepta ITIN. Sin SSN. Desde $89/mes.', url: `${BASE}/${params.lang}/seguros/auto`, siteName: 'Maria Fernanda Insurance Consulting', locale: isEn ? 'en_US' : 'es_US', type: 'website' },
    robots: { index: true, follow: true },
  };
}
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
