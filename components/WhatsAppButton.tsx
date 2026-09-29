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
    es: 'Hola María Fernanda 👋 Vi su página y me gustaría cotizar un seguro para mi familia. ¿Tiene un momento para orientarme? Gracias',
    en: "Hi María Fernanda 👋 I found your website and I'd like to explore insurance options for my family. When can we talk?",
  },
  auto: {
    es: 'Hola María Fernanda 👋 Necesito un seguro de auto y vi que aceptan ITIN sin SSN. ¿Me puede cotizar? Tengo [marca y año del vehículo].',
    en: "Hi María Fernanda 👋 I'm looking for car insurance and found your site — I'd love a competitive quote. When's a good time to connect?",
  },
  mascotas: {
    es: 'Hola María Fernanda 👋 Me interesa el seguro de mascotas con reembolso del 90%. ¿Puede cotizarme un plan? Tengo un/una [perro/gato] de [edad] años.',
    en: "Hi María Fernanda 👋 I'm interested in the pet insurance plan — especially the 90% reimbursement with any licensed vet. Can you help me get started?",
  },
  vida: {
    es: 'Hola María Fernanda 👋 Quiero un seguro de vida para proteger a mi familia. Me interesaron los Living Benefits. ¿Cuándo podemos hablar?',
    en: "Hi María Fernanda 👋 I'm looking at life insurance options — my employer's plan won't follow me if I change jobs. I'm interested in the living benefits option. Can we talk?",
  },
  salud: {
    es: 'Hola María Fernanda 👋 Necesito seguro de salud para mi familia y tenemos ITIN. ¿Qué planes hay disponibles y cuánto costarían aproximadamente?',
    en: "Hi María Fernanda 👋 I'm shopping for health insurance — individual or family plan. I'd love help comparing options without pressure. When can we connect?",
  },
  dental: {
    es: 'Hola María Fernanda 👋 Vi el seguro dental desde $19/mes. ¿Cubre tratamientos mayores como endodoncia o coronas? Quisiera cotizar para [1/familia].',
    en: "Hi María Fernanda 👋 I saw your dental plan starting at $19/mo. Does it cover major procedures like root canals? I'd love to get a quote.",
  },
  comercial: {
    es: 'Hola María Fernanda 👋 Tengo un negocio de [tipo] y quiero protegerlo con un seguro comercial. ¿Aceptan ITIN o EIN? ¿Cuándo podemos hablar?',
    en: "Hi María Fernanda 👋 I'm a small business owner and need commercial liability coverage. One incident and I'm personally exposed. Can you help me find the right policy?",
  },
  auto_comercial: {
    es: 'Hola María Fernanda 👋 Uso mi auto para trabajo (entregas/servicios) y necesito un seguro que cubra el uso comercial. ¿Me pueden ayudar a cotizar?',
    en: "Hi María Fernanda 👋 I drive for work (gig/delivery) and my personal policy excludes commercial use. I need auto coverage that actually covers my job — can we talk?",
  },
  paquete: {
    es: 'Hola María Fernanda 👋 Me interesa el paquete de auto y hogar para ahorrar en los dos. ¿Me puede hacer una cotización combinada?',
    en: "Hi María Fernanda 👋 I'm interested in bundling home and auto to save. I've heard I could save $400–$1,000/yr — can you help me find out exactly how much?",
  },
  umbrella: {
    es: 'Hola María Fernanda 👋 Vi que ofrecen Protección Extra (Umbrella) desde $19/mes. Quiero entender cómo protege mis bienes si hay una demanda. ¿Hablamos?',
    en: "Hi María Fernanda 👋 My current policies cap at $300K — I'm interested in umbrella coverage to protect my assets beyond that. Can we talk through my options?",
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
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center"
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
