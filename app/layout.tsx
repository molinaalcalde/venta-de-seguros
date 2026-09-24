import type { Metadata } from 'next';
import { headers } from 'next/headers';
import './globals.css';

const BASE_URL = 'https://venta-de-seguros.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Maria Fernanda Insurance Consulting | Seguros en Español para la Comunidad Hispana',
    template: '%s | Maria Fernanda Insurance Consulting',
  },
  description:
    'Seguros de auto, vida, salud, mascotas y comerciales para la comunidad hispana en Estados Unidos. Atención 100% en español. Cotiza online en menos de un minuto. Acepta ITIN.',
  keywords: [
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
    'seguro de mascotas',
    'seguros comerciales hispanos',
    'Maria Fernanda Insurance Consulting',
    'insurance en español',
  ],
  alternates: {
    canonical: `${BASE_URL}/es`,
    languages: {
      'es-US': `${BASE_URL}/es`,
      'en-US': `${BASE_URL}/en`,
      'x-default': `${BASE_URL}/es`,
    },
  },
  openGraph: {
    title: 'Maria Fernanda Insurance Consulting | Seguros en Español para la Comunidad Hispana',
    description:
      'Seguros de auto, vida, salud, mascotas y comerciales con atención 100% en español. Cotiza sin SSN. Acepta ITIN. Agentes bilingüe certificados.',
    type: 'website',
    locale: 'es_US',
    url: `${BASE_URL}/es`,
    siteName: 'Maria Fernanda Insurance Consulting',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maria Fernanda Insurance Consulting | Seguros en Español',
    description:
      'Seguros de auto, vida, salud, mascotas y comerciales para la comunidad hispana. Cotiza online, sin SSN, atención 100% en español.',
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = headers();
  const lang = headersList.get('x-lang') ?? 'es';

  return (
    <html lang={lang === 'en' ? 'en-US' : 'es-US'} className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-[#fafbfa] text-slate-800 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
