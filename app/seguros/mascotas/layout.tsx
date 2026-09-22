import type { Metadata } from 'next';

const BASE_URL = 'https://venta-de-seguros.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: 'Seguro de Mascotas VetDirect™ | Sin SSN · Acepta ITIN',
  description:
    'Seguro de mascotas con pago directo a la clínica veterinaria (VetDirect™). Sin adelantar dinero, sin esperar reembolsos. Acepta ITIN, sin SSN requerido. Planes desde $29/mes. Cubre perros y gatos en EE.UU.',
  keywords: [
    'seguro de mascotas sin SSN',
    'seguro para perros sin número de seguro social',
    'seguro de mascotas ITIN',
    'seguro veterinario inmigrantes',
    'VetDirect pago directo veterinaria',
    'seguro de mascotas en español',
    'pet insurance sin SSN',
    'seguro gatos sin SSN',
    'seguro mascotas hispanos',
    'seguro veterinario barato',
  ],
  alternates: {
    canonical: `${BASE_URL}/seguros/mascotas`,
    languages: {
      'es-US': `${BASE_URL}/seguros/mascotas`,
      'en-US': `${BASE_URL}/en`,
      'x-default': `${BASE_URL}/seguros/mascotas`,
    },
  },
  openGraph: {
    title: 'Seguro de Mascotas VetDirect™ — Sin SSN, Pago Directo a la Clínica',
    description:
      'Lleva a tu perro o gato al veterinario y nosotros pagamos directamente. Sin adelantar dinero. Planes desde $29/mes. Sin SSN, acepta ITIN.',
    type: 'website',
    locale: 'es_US',
    url: `${BASE_URL}/seguros/mascotas`,
    siteName: 'Aegis National Assurance',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Seguro de Mascotas VetDirect™ | Aegis National Assurance',
    description:
      'Pago directo a la clínica veterinaria. Sin SSN requerido. Acepta ITIN. Planes desde $29/mes.',
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

export default function MascotasLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
