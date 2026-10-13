'use client';

import { useState, useEffect } from 'react';
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
    es: 'Hola, vi tu pagina y me interesa cotizar un seguro. Podemos hablar?',
    en: "Hi, I saw your website and I'd like to get an insurance quote. Can we talk?",
  },
  auto: {
    es: 'Hola, vi tu pagina de seguro de auto y quiero cotizar. Tienes disponibilidad?',
    en: "Hi, I saw your car insurance page and I'd like a quote. Are you available?",
  },
  mascotas: {
    es: 'Hola, vi tu pagina de seguro de mascotas y quiero cotizar para mi mascota',
    en: "Hi, I saw your pet insurance page and I'd like a quote for my pet",
  },
  vida: {
    es: 'Hola, vi tu pagina de seguro de vida y me interesa explorar opciones',
    en: "Hi, I saw your life insurance page and I'd like to explore my options",
  },
  salud: {
    es: 'Hola, vi tu pagina de seguro de salud y quiero comparar planes',
    en: "Hi, I saw your health insurance page and I'd like to compare plans",
  },
  dental: {
    es: 'Hola, vi tu pagina de seguro dental y me interesa cotizar',
    en: "Hi, I saw your dental insurance page and I'd like a quote",
  },
  comercial: {
    es: 'Hola, tengo un negocio y vi tu pagina de seguro comercial. Podemos hablar?',
    en: "Hi, I own a business and saw your commercial insurance page. Can we talk?",
  },
  auto_comercial: {
    es: 'Hola, uso mi vehiculo para trabajar y vi tu pagina de seguro. Me asesoras?',
    en: "Hi, I use my vehicle for work and saw your commercial auto page. Can you help?",
  },
  paquete: {
    es: 'Hola, me interesa un paquete casa + auto. Vi tu pagina y quiero cotizar',
    en: "Hi, I'm interested in a home + auto bundle. I saw your page and want a quote",
  },
  umbrella: {
    es: 'Hola, vi tu pagina de proteccion extra y quiero saber mas sobre umbrella',
    en: "Hi, I saw your extra protection page and want to learn about umbrella coverage",
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
  const [modalOpen, setModalOpen] = useState(false);

  const ariaLabel = lang === 'en' ? 'Chat on WhatsApp' : 'Chatea por WhatsApp';
  const tooltip = lang === 'en' ? 'Chat with us' : 'Chatea con nosotros';

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setModalOpen(document.body.dataset.quoteOpen === 'true');
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ['data-quote-open'] });
    return () => observer.disconnect();
  }, []);

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
      className={`fixed bottom-20 md:bottom-6 right-6 z-50 flex items-center justify-center${modalOpen ? ' hidden md:flex' : ''}`}
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
