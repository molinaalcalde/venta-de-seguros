import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Aegis National Assurance | Safeguarding Your Valuables',
  description:
    'Soluciones integrales de seguro de auto, mascotas, vida y patrimonio en USA. Cotiza online en menos de un minuto. Respaldo institucional A+ AM Best. Liquidación en tiempo real.',
  keywords: [
    'seguro de vida USA',
    'seguro de auto',
    'seguro de mascotas',
    'seguros comerciales',
    'Medicare seguro salud',
    'life insurance',
    'auto insurance',
    'pet insurance',
    'umbrella insurance',
    'Aegis National Assurance',
  ],
  openGraph: {
    title: 'Aegis National Assurance | Protegiendo lo que más Valoras',
    description:
      'Protección transparente diseñada a la medida de tu estilo de vida, familia, mascotas y negocios. Calificación AM Best A+ Superior.',
    type: 'website',
    locale: 'es_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aegis National Assurance',
    description:
      'Seguros de auto, mascotas, vida y patrimonio con respaldo institucional y liquidación en tiempo real.',
  },
  robots: {
    index: true,
    follow: true,
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
