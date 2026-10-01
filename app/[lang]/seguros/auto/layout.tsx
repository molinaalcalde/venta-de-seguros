import type { Metadata } from 'next';
const BASE = 'https://consultingbymf.com';
export function generateStaticParams() { return [{ lang: 'es' }, { lang: 'en' }]; }
export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const isEn = params.lang === 'en';
  const canonical = isEn ? `${BASE}/en/car-insurance` : `${BASE}/es/seguros/auto`;
  return {
    metadataBase: new URL(BASE),
    title: isEn ? 'Car Insurance | Compare Multiple Carriers · Bilingual Service' : 'Seguro de Auto | Comparamos Varias Aseguradoras · Atención en Español',
    description: isEn
      ? 'Independent car insurance agent. Compare multiple carriers, understand your coverage, and get the right policy at the right price. Bilingual service. Free quote.'
      : 'Compara seguros de auto entre múltiples aseguradoras. Atención en español. Aceptamos ITIN y pasaporte. Cotización gratis. Un asesor bilingüe te llama en 24 horas.',
    alternates: {
      canonical,
      languages: {
        'es-US': `${BASE}/es/seguros/auto`,
        'en-US': `${BASE}/en/car-insurance`,
        'x-default': `${BASE}/es/seguros/auto`,
      },
    },
    openGraph: {
      title: isEn ? 'Car Insurance | Maria Fernanda Insurance' : 'Seguro de Auto | Maria Fernanda Insurance',
      description: isEn ? 'Compare multiple carriers. Bilingual service. Free quote.' : 'Comparamos varias aseguradoras. Atención en español. Cotización gratis.',
      url: canonical,
      siteName: 'Maria Fernanda Insurance Consulting',
      locale: isEn ? 'en_US' : 'es_US',
      type: 'website',
    },
    robots: { index: true, follow: true },
  };
}
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
