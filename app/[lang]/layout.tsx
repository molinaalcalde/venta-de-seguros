import type { Metadata } from 'next';

const BASE_URL = 'https://venta-de-seguros.vercel.app';

type Props = {
  params: { lang: string };
  children: React.ReactNode;
};

export function generateStaticParams() {
  return [{ lang: 'es' }, { lang: 'en' }];
}

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const { lang } = params;
  const isEn = lang === 'en';

  return {
    metadataBase: new URL(BASE_URL),
    title: isEn
      ? 'Maria Fernanda Insurance Consulting | Bilingual Insurance for the Hispanic Community'
      : 'Maria Fernanda Insurance Consulting | Seguros en Español para la Comunidad Hispana',
    description: isEn
      ? 'Bilingual insurance agency for immigrants and the Hispanic community in the United States. Auto, life, health, pet, dental, and business insurance. ITIN accepted. No SSN required.'
      : 'Seguros de auto, vida, salud, mascotas y comerciales para la comunidad hispana en Estados Unidos. Atención 100% en español. Cotiza online en menos de un minuto. Acepta ITIN.',
    keywords: isEn
      ? [
          'insurance without SSN',
          'ITIN insurance',
          'insurance for immigrants',
          'bilingual insurance agent',
          'car insurance no SSN',
          'life insurance non-citizens',
          'health insurance no social security',
          'pet insurance ITIN',
          'hispanic insurance USA',
          'insurance en español',
        ]
      : [
          'seguros en español',
          'seguro de vida para inmigrantes',
          'seguro de auto hispanos',
          'seguro con ITIN',
          'seguros baratos hispanos',
          'seguro de salud en español USA',
          'agencia de seguros hispana',
          'seguros para inmigrantes',
          'seguro sin SSN',
          'Medicare en español',
        ],
    alternates: {
      canonical: `${BASE_URL}/${lang}`,
      languages: {
        'es-US': `${BASE_URL}/es`,
        'en-US': `${BASE_URL}/en`,
        'x-default': `${BASE_URL}/es`,
      },
    },
    openGraph: {
      title: isEn
        ? 'Maria Fernanda Insurance Consulting | Bilingual Insurance for the Hispanic Community'
        : 'Maria Fernanda Insurance Consulting | Seguros en Español para la Comunidad Hispana',
      description: isEn
        ? 'Bilingual insurance for immigrants and Hispanic families. Auto, life, health, pet, dental, and business insurance. ITIN accepted. No SSN required.'
        : 'Seguros de auto, vida, salud, mascotas y comerciales con atención 100% en español. Cotiza sin SSN. Acepta ITIN. Agentes bilingüe certificados.',
      type: 'website',
      locale: isEn ? 'en_US' : 'es_US',
      url: `${BASE_URL}/${lang}`,
      siteName: 'Maria Fernanda Insurance Consulting',
    },
    twitter: {
      card: 'summary_large_image',
      title: isEn
        ? 'Maria Fernanda Insurance Consulting | Bilingual Insurance'
        : 'Maria Fernanda Insurance Consulting | Seguros en Español',
      description: isEn
        ? 'Bilingual insurance for immigrants. Auto, life, health, pet, dental. ITIN accepted. No SSN required.'
        : 'Seguros de auto, vida, salud, mascotas y comerciales para la comunidad hispana. Sin SSN. Acepta ITIN.',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-snippet': -1,
        'max-image-preview': 'large',
        'max-video-preview': -1,
      },
    },
  };
}

export default function LangLayout({ children }: Props) {
  return <>{children}</>;
}
