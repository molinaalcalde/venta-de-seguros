import type { Metadata } from 'next';

const BASE_URL = 'https://venta-de-seguros.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Aegis National Assurance | Bilingual Insurance — No SSN Required',
    template: '%s | Aegis National Assurance',
  },
  description:
    'Affordable auto, life, health, pet, and business insurance for the Hispanic community. Bilingual agents. No SSN required. ITIN accepted. Get a free quote online in under 90 seconds.',
  keywords: [
    'bilingual insurance agent',
    'insurance for immigrants',
    'car insurance no SSN required',
    'ITIN accepted insurance',
    'life insurance without SSN',
    'health insurance for undocumented immigrants',
    'Spanish speaking insurance agent',
    'affordable insurance Hispanic community',
    'auto insurance ITIN',
    'insurance agency bilingual',
    'pet insurance bilingual',
    'business insurance Hispanic',
    'Aegis National Assurance',
    'insurance in Spanish',
  ],
  alternates: {
    canonical: `${BASE_URL}/en`,
    languages: {
      'es-US': BASE_URL,
      'en-US': `${BASE_URL}/en`,
      'x-default': BASE_URL,
    },
  },
  openGraph: {
    title: 'Aegis National Assurance | Bilingual Insurance — ITIN Accepted',
    description:
      'Auto, life, health, and business insurance with bilingual agents. No SSN needed. Get your free quote in 90 seconds.',
    type: 'website',
    locale: 'en_US',
    url: `${BASE_URL}/en`,
    siteName: 'Aegis National Assurance',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aegis National Assurance | Bilingual Insurance',
    description:
      'Affordable insurance for everyone — bilingual agents, no SSN required, ITIN accepted. Get a free quote online.',
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

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
