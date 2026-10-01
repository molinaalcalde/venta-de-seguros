import type { Metadata } from 'next';
import WhatsAppButton from '@/components/WhatsAppButton';
import CookieConsent from '@/components/CookieConsent';

const BASE_URL = 'https://consultingbymf.com';

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
      ? 'Independent Insurance Agent | Compare 10+ Carriers · Annual Review · Free Quote'
      : 'Agente de Seguros en Español | ITIN aceptado · 10+ Aseguradoras · Cotización gratis',
    description: isEn
      ? 'Independent agent comparing 10+ carriers for car, health, life, pet, and business insurance. Annual review and claims advocacy included. Free quote.'
      : 'Agente independiente compara 10+ aseguradoras de auto, salud, vida, dental y más. Atención 100% en español. ITIN aceptado. Sin SSN para cotizar. Cotización gratis.',
    keywords: isEn
      ? [
          'independent insurance agent',
          'compare car insurance rates',
          'insurance agent near me',
          'switch car insurance save money',
          'compare insurance quotes',
          'home auto insurance bundle',
          'best car insurance rates',
          'life insurance cost estimate',
          'pet insurance plans',
          'small business liability insurance',
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
        ? 'Independent Insurance Agent | Compare 10+ Carriers · Maria Fernanda'
        : 'Agente Independiente de Seguros en Español | María Fernanda',
      description: isEn
        ? 'Compare 10+ carriers for car, health, life, pet, and business insurance. Annual review and claims advocacy included. Free quote.'
        : 'Compara 10+ aseguradoras en español. Auto, salud, vida, dental, mascotas y comercial. ITIN aceptado. Sin SSN. Cotización gratis.',
      type: 'website',
      locale: isEn ? 'en_US' : 'es_US',
      url: `${BASE_URL}/${lang}`,
      siteName: 'Maria Fernanda Insurance Consulting',
    },
    twitter: {
      card: 'summary_large_image',
      title: isEn
        ? 'Independent Insurance Agent | Compare 10+ Carriers'
        : 'Maria Fernanda Insurance Consulting | Seguros en Español',
      description: isEn
        ? 'Compare rates across 10+ carriers. Annual review and claims advocacy included. Car, health, life, pet, and business. Free quote.'
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

export default function LangLayout({ children, params }: Props) {
  return (
    <>
      {children}
      <WhatsAppButton />
      <CookieConsent lang={params.lang} />
    </>
  );
}
