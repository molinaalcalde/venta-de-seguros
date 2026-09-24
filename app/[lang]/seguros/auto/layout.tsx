import type { Metadata } from 'next';
const BASE = 'https://venta-de-seguros.vercel.app';
export function generateStaticParams() { return [{ lang: 'es' }, { lang: 'en' }]; }
export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const isEn = params.lang === 'en';
  const canonical = isEn ? `${BASE}/en/car-insurance` : `${BASE}/es/seguros/auto`;
  return {
    metadataBase: new URL(BASE),
    title: isEn ? 'Car Insurance Without SSN | ITIN Accepted' : 'Seguro de Auto sin SSN | ITIN Aceptado',
    description: isEn
      ? 'Car insurance for immigrants without Social Security Number. ITIN, passport, and consular ID accepted. 100% bilingual service. No SSN required.'
      : 'Seguro de auto para inmigrantes sin número de seguro social. Aceptamos ITIN, pasaporte y matrícula consular. Atención 100% en español. Sin SSN requerido.',
    alternates: {
      canonical,
      languages: {
        'es-US': `${BASE}/es/seguros/auto`,
        'en-US': `${BASE}/en/car-insurance`,
        'x-default': `${BASE}/es/seguros/auto`,
      },
    },
    openGraph: {
      title: isEn ? 'Car Insurance Without SSN | Maria Fernanda' : 'Seguro de Auto sin SSN | Maria Fernanda',
      description: isEn ? 'ITIN accepted. No SSN required.' : 'Acepta ITIN. Sin SSN.',
      url: canonical,
      siteName: 'Maria Fernanda Insurance Consulting',
      locale: isEn ? 'en_US' : 'es_US',
      type: 'website',
    },
    robots: { index: true, follow: true },
  };
}
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
