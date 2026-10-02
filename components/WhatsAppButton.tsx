'use client';

import { usePathname } from 'next/navigation';
import { pushGTMEvent } from '@/lib/gtm';

const PHONE = '19082280973';

type InsKey =
  | 'home'
  | 'auto'
  | 'auto_comercial'
  | 'mascotas'
  | 'vida'
  | 'salud'
  | 'dental'
  | 'comercial'
  | 'paquete'
  | 'umbrella';

/* ── Mensajes por tipo de seguro e idioma ───────────────────────────────────
   ES → comunidad latina: ITIN, familia, sin SSN, privacidad migratoria
   EN → norteamericanos: dolor económico, cobertura, portabilidad, ROI
   ────────────────────────────────────────────────────────────────────────── */
const MESSAGES: Record<InsKey, { es: string; en: string }> = {
  home: {
    es: 'Hola Maria Fernanda 👋 me gustaría cotizar un seguro, ¿cuándo tiene un momento para hablar?',
    en: "Hi Maria Fernanda 👋 I'd like to explore insurance options. When's a good time to connect?",
  },
  auto: {
    es: 'Hola Maria Fernanda 👋, me gustaría cotizar un seguro de auto. ¿Podrías ayudarme a encontrar la mejor cobertura?',
    en: "Hi Maria Fernanda 👋, I'm looking for a car insurance quote. Could you help me find the best coverage?",
  },
  mascotas: {
    es: 'Hola Maria Fernanda 👋, quiero proteger a mi mascota ante cualquier emergencia médica. ¿Qué planes ofreces?',
    en: "Hi Maria Fernanda 👋, I want to protect my pet in case of a medical emergency. What plans do you offer?",
  },
  vida: {
    es: 'Hola Maria Fernanda 👋, estoy pensando en el futuro y quiero asegurar la tranquilidad de mi familia. ¿Podemos revisar opciones de seguro de vida?',
    en: "Hi Maria Fernanda 👋, I'm planning for the future and want to ensure my family is protected. Can we discuss life insurance options?",
  },
  salud: {
    es: 'Hola Maria Fernanda 👋, busco un buen seguro de salud para mi familia. ¿Me ayudas a comparar los planes disponibles?',
    en: "Hi Maria Fernanda 👋, I'm looking for reliable health insurance for my family. Can you help me compare the available plans?",
  },
  dental: {
    es: 'Hola Maria Fernanda 👋, me interesa un seguro dental que cubra más allá de limpiezas preventivas. ¿Tienes opciones para mí?',
    en: "Hi Maria Fernanda 👋, I'm interested in dental insurance that goes beyond basic cleanings. Do you have options for me?",
  },
  comercial: {
    es: 'Hola Maria Fernanda 👋, tengo un negocio y necesito asegurarlo correctamente. ¿Me ayudas a encontrar la póliza ideal?',
    en: "Hi Maria Fernanda 👋, I own a business and need to make sure it's properly insured. Can you help me find the right policy?",
  },
  auto_comercial: {
    es: 'Hola Maria Fernanda 👋, uso mi vehículo para trabajar y busco un seguro comercial. ¿Me asesoras con las opciones?',
    en: "Hi Maria Fernanda 👋, I use my vehicle for work and need commercial auto insurance. Can you guide me through my options?",
  },
  paquete: {
    es: 'Hola Maria Fernanda 👋, me interesa combinar mis seguros de auto y hogar para obtener un mejor precio. ¿Me ayudas con una cotización?',
    en: "Hi Maria Fernanda 👋, I'm interested in bundling my home and auto insurance to save money. Can you put a quote together for me?",
  },
  umbrella: {
    es: 'Hola Maria Fernanda 👋 quiero proteger mis bienes más allá de lo básico. ¿Cómo funciona la protección extra?',
    en: "Hi Maria Fernanda 👋 I want to make sure my assets are fully protected beyond my current policies. Can we talk?",
  },
};

/* ── Detecta tipo de seguro desde la URL ────────────────────────────────── */
function getInsType(pathname: string): InsKey {
  // auto-comercial debe ir ANTES que auto para evitar falso match
  if (pathname.includes('/seguros/auto-comercial') || pathname.includes('/commercial-auto')) return 'auto_comercial';
  if (pathname.includes('/seguros/auto') || pathname.includes('/car-insurance')) return 'auto';
  if (pathname.includes('/seguros/mascotas') || pathname.includes('/pet-insurance')) return 'mascotas';
  if (pathname.includes('/seguros/vida') || pathname.includes('/life-insurance')) return 'vida';
  if (pathname.includes('/seguros/salud') || pathname.includes('/health-insurance')) return 'salud';
  if (pathname.includes('/seguros/dental') || pathname.includes('/dental-insurance')) return 'dental';
  if (pathname.includes('/seguros/comercial') || pathname.includes('/business-insurance')) return 'comercial';
  if (pathname.includes('/seguros/paquete') || pathname.includes('/home-auto-bundle')) return 'paquete';
  if (pathname.includes('/seguros/proteccion-extra') || pathname.includes('/extra-protection')) return 'umbrella';
  return 'home';
}

export default function WhatsAppButton() {
  const pathname = usePathname();
  const lang = pathname.startsWith('/en') ? 'en' : 'es';
  const insType = getInsType(pathname);
  const message = encodeURIComponent(MESSAGES[insType][lang]);
  const href = `https://wa.me/${PHONE}?text=${message}`;

  const ariaLabel = lang === 'en' ? 'Chat on WhatsApp' : 'Chatea por WhatsApp';
  const tooltip = lang === 'en' ? 'Chat with us' : 'Chatea con nosotros';

  function handleClick() {
    pushGTMEvent({
      event: 'whatsapp_click',
      source: 'floating_button',
      insurance_type: insType,
      page_lang: lang,
      page_path: pathname,
    });
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      title={tooltip}
      onClick={handleClick}
      className="fixed bottom-20 md:bottom-6 right-6 z-50 flex items-center justify-center"
    >
      <span
        className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-20"
        style={{ animation: 'ping 3s cubic-bezier(0,0,0.2,1) infinite' }}
      />
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform duration-200 hover:scale-110 active:scale-95">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-7 w-7" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </span>
    </a>
  );
}
