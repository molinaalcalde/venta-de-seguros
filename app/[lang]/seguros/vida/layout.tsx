import type { Metadata } from 'next';
const BASE = 'https://venta-de-seguros.vercel.app';
export function generateStaticParams() { return [{ lang: 'es' }, { lang: 'en' }]; }
export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const isEn = params.lang === 'en';
  return {
    metadataBase: new URL(BASE),
    title: isEn ? 'Life Insurance for Immigrants | Living Benefits · No SSN' : 'Seguro de Vida para Inmigrantes | Living Benefits · Sin SSN',
    description: isEn ? 'Life insurance for immigrants without SSN. ITIN accepted. Living Benefits: access funds if seriously ill. Beneficiaries in any country. From $45/mo.' : 'Seguro de vida sin SSN para inmigrantes e indocumentados. Acepta ITIN. Living Benefits: accede al dinero si te enfermas. Beneficiarios en cualquier país. Desde $45/mes.',
    alternates: { canonical: isEn ? `${BASE}/en/life-insurance` : `${BASE}/es/seguros/vida`, languages: { 'es-US': `${BASE}/es/seguros/vida`, 'en-US': `${BASE}/en/life-insurance`, 'x-default': `${BASE}/es/seguros/vida` } },
    openGraph: { title: isEn ? 'Life Insurance Without SSN | Maria Fernanda' : 'Seguro de Vida sin SSN | Maria Fernanda', description: isEn ? 'ITIN accepted. Living Benefits. From $45/mo.' : 'Acepta ITIN. Living Benefits. Desde $45/mes.', url: isEn ? `${BASE}/en/life-insurance` : `${BASE}/es/seguros/vida`, siteName: 'Maria Fernanda Insurance Consulting', locale: isEn ? 'en_US' : 'es_US', type: 'website' },
    robots: { index: true, follow: true },
  };
}
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
