import type { Metadata } from 'next';
import WhatsAppButton from '@/components/WhatsAppButton';

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
      : 'Agente de Seguros en Español | ITIN aceptado · 10+ Aseguradoras · Cotización gratis',
    description: isEn
      ? 'Bilingual insurance agency for immigrants and the Hispanic community in the United States. Auto, life, health, pet, dental, and business insurance. ITIN accepted. No SSN required.'
      : 'Agente independiente compara 10+ aseguradoras de auto, salud, vida, dental y más. Atención 100% en español. ITIN aceptado. Sin SSN para cotizar. Cotización gratis.',
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
          'agente de seguros en español',
          'comparar seguros en español',
          'seguro de auto con ITIN',
          'agente independiente de seguros',
          'cotizar seguro de auto en español',
          'seguro de salud en español',
          'seguro de vida sin SSN',
          'seguros para hispanos USA',
          'seguro de auto ITIN',
          'cotizar seguro gratis en español',
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
        : 'Agente Independiente de Seguros en Español | María Fernanda',
      description: isEn
        ? 'Bilingual insurance for immigrants and Hispanic families. Auto, life, health, pet, dental, and business insurance. ITIN accepted. No SSN required.'
        : 'Compara 10+ aseguradoras en español. Auto, salud, vida, dental, mascotas y comercial. ITIN aceptado. Sin SSN. Cotización gratis.',
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
  return (
    <>
      {children}
      <WhatsAppButton />
    </>
  );
}
