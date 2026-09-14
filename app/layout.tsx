import type { Metadata } from 'next';
import './globals.css';

const BASE_URL = 'https://venta-de-seguros.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Aegis National Assurance | Seguros en Español para la Comunidad Hispana',
    template: '%s | Aegis National Assurance',
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
    'Aegis National Assurance',
    'insurance en español',
  ],
  alternates: {
    canonical: BASE_URL,
    languages: {
      'es-US': BASE_URL,
    },
  },
  openGraph: {
    title: 'Aegis National Assurance | Seguros en Español para la Comunidad Hispana',
    description:
      'Seguros de auto, vida, salud, mascotas y comerciales con atención 100% en español. Cotiza sin SSN. Acepta ITIN. Agentes bilingüe certificados.',
    type: 'website',
    locale: 'es_US',
    url: BASE_URL,
    siteName: 'Aegis National Assurance',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aegis National Assurance | Seguros en Español',
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
  return (
    <html lang="es" className="scroll-smooth">
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
