import type { InsType } from '@/components/QuoteModal';
import { TIPO_LABEL } from '@/components/QuoteModal';
import {
  Car as PhCar, Truck as PhTruck, PawPrint as PhPaw, Heart as PhHeart,
  Stethoscope as PhSteth, Tooth as PhTooth, Package as PhPkg,
  Buildings as PhBldg, Umbrella as PhUmbrella,
} from '@phosphor-icons/react';

export { TIPO_LABEL };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const COTIZADOR_ICONS: Record<string, any> = {
  Auto:          PhCar,
  AutoComercial: PhTruck,
  Mascotas:      PhPaw,
  Vida:          PhHeart,
  Salud:         PhSteth,
  Dental:        PhTooth,
  Paquete:       PhPkg,
  Comercial:     PhBldg,
  Umbrella:      PhUmbrella,
};

export const TIPO_LABEL_EN: Record<string, string> = {
  Auto:          'Car Insurance',
  AutoComercial: 'Commercial Auto',
  Mascotas:      'Pet Insurance',
  Vida:          'Life Insurance',
  Salud:         'Health Insurance',
  Comercial:     'Business Insurance',
  Umbrella:      'Umbrella Coverage',
  Dental:        'Dental Insurance',
  Paquete:       'Home + Auto Bundle',
};

export const REEL_SLIDES = [
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDhpcaKyb3Dv730KusfGdXUSFLVOmaJp0G2G_CD1Tm9Jj8IxgPMza1YquaADeho2Ikn26nxl7iqjIrPOURTfaDHqJv5XuULnS9ZYK-j_TvrMATbnyT3XwxMK_SXvT6R8JhS23olqKL_HGLrsx-7qrUCiD5ifWYXJwbKk0vl3dc1gyau-UNkcZqYOdgu426BczMtMhs16n4lm2CTfZHpi3SW9-mvjm3PCIitHa2T_1vtp0wuOsas8BA5',
    alt: 'Familia y aventura en la naturaleza protegidos por seguros de viaje y vida',
    caption: 'Cobertura Integral para Aventuras & Estilo de Vida',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuALlX2I4j-SU_STw4ViFQeVDt0M4YxEt0cbgHQFMCr8RXn9gV-DavMlNlAmXZS5X0494HA4XpJvw5jwxaZjTbKrAT0cs5qhPlhNB6tBGECcuhEVItlT7n37JJ8JTVwq74OszgS9qLJhKo48A4YdUUD4hWflLudi-RKeyKWWeGXfWlGE7qzxaFJEee_eU5SF0rSAfIv10xx7FgIu3fdsemCQoRviPDgmodbQI5MoL1-DJGq2_eRboNg7',
    alt: 'Paisajes abiertos y seguros — cada horizonte resguardado',
    caption: 'Cada horizonte resguardado con María Fernanda.',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida/AEtjO1X7Fsl95nUF-Lp5Lff5U0pm19f6MSz9GOCmjjKo0fCZNv9O3rYuqZl69L1su4s9Lg_UXnQ_Ooap4L6zaqGTyZVjIflziXskEcdRy0zQtJc7LZWhM-e0xHK38oZQkk3kEJ439GhT7rA8v2y_unh8f-IFzVojqQoBXslc6sSkwzqydPTZap34_QhXnj1xihdb-A8e68h8Ap_dEq2WHhgyff7M5MLXHF3C2syuCTX_PkerUHg2IwuPu2MDxf0',
    alt: 'Familia protegida y segura — legado para las próximas generaciones',
    caption: 'Tu familia protegida en cada etapa de la vida.',
  },
];

export const solutionsTabs_es = [
  { label: 'Seguro de Auto', category: 'Protección en Carretera', title: 'Los latinos pagan $144 más al año en seguro de auto que otros conductores. La razón: no comparan.', description: 'Sin seguro en la mayoría de los estados: multa de hasta $5,000, suspensión de licencia y responsabilidad personal por todos los daños. Desde $89/mes, ITIN aceptado, sin historial de crédito para cotizar. Sujeto a términos y condiciones.', cta: 'Cotizar auto gratis', price: 'Desde $89', priceLabel: 'Tarifa referencial · sujeto a aprobación' },
  { label: 'Seguro de Salud', category: 'Tu Salud, tu Prioridad', title: 'El 55% de hispanos en EE.UU. no tiene seguro de salud. Una visita a urgencias sin seguro puede costarte $3,000 o más.', description: 'Hay 10+ planes de salud distintos y nadie te los explica en español. Eso es exactamente lo que hacemos. Comparamos aseguradoras para encontrar el plan que cubre tu familia: consultas, medicamentos, emergencias y servicios preventivos. ITIN aceptado. Sujeto a términos y condiciones.', cta: 'Ver planes de salud', price: 'Desde $381', priceLabel: 'Tarifa referencial · sujeto a aprobación' },
  { label: 'Seguro de Vida', category: 'Protección para tu Familia', title: 'El 72% de hispanos cree que el seguro de vida cuesta más de lo que realmente vale.', description: 'Living Benefits: si te diagnostican infarto, cáncer o enfermedad grave, puedes acceder al dinero mientras sigues vivo. Sin SSN, sin examen médico en muchos planes, beneficiarios en cualquier país. Desde $15/mes. Sujeto a términos y condiciones.', cta: 'Cotizar vida gratis', price: 'Desde $15', priceLabel: 'Tarifa referencial · sujeto a aprobación' },
  { label: 'Seguro de Mascotas', category: 'Salud de tu Mascota', title: 'Una emergencia veterinaria cuesta en promedio $1,100 y el 65% de dueños no puede cubrirla.', description: 'Lleva a tu mascota a cualquier veterinario con licencia en EE.UU. sin red restringida. Pagas la factura y recibes hasta el 90% de reembolso en menos de una semana. Sujeto a términos y condiciones.', cta: 'Cotizar mascotas', price: 'Desde $29', priceLabel: 'Tarifa referencial · sujeto a aprobación' },
  { label: 'Seguro Comercial', category: 'Protección para tu Negocio', title: 'El 77% de negocios pequeños no tiene la cobertura suficiente si alguien los demanda.', description: 'Sin seguro comercial, una sola demanda puede cerrar lo que tardaste años en construir. BOP, responsabilidad civil, Workers Comp. COI en 24 horas. EIN e ITIN aceptados. Desde $19/mes. Sujeto a términos y condiciones.', cta: 'Cotizar seguro comercial', price: 'Desde $19', priceLabel: 'Tarifa referencial · sujeto a aprobación' },
  { label: 'Protección Extra', category: 'Protección Patrimonial', title: 'Tu seguro de auto y casa tiene un límite. Una demanda puede superarlo en horas.', description: 'La diferencia sale de tus ahorros, tu casa, tu negocio si no tienes Protección Extra. Menos de $1 al día por $1 millón de cobertura adicional. La última línea de defensa para lo que construiste. Sujeto a términos y condiciones.', cta: 'Cotizar protección extra', price: 'Desde $19', priceLabel: 'Tarifa referencial · sujeto a aprobación' },
];

export const solutionsTabs_en = [
  { label: 'Car Insurance', category: 'Road Protection', title: 'Car insurance premiums rose 30% in two years. Drivers who compared saved a median $461 last year.', description: 'No SSN needed to quote. Driving without insurance in most states: fines up to $5,000, license suspension, and personal financial liability for all damages. From $89/mo, with ITIN or passport. Subject to terms and conditions.', cta: 'See my auto price', price: 'From $89', priceLabel: 'Reference rate · subject to approval' },
  { label: 'Life Insurance', category: 'Protection for Your Family', title: '72% of Americans overestimate the cost of life insurance. Most base their estimate on a guess, not the real price.', description: 'Living Benefits: if diagnosed with a heart attack, cancer, or serious illness, you can access the money while still alive. No SSN, no medical exam on many plans, beneficiaries in any country. From $15/mo. Subject to terms and conditions.', cta: 'See life insurance price', price: 'From $15', priceLabel: 'Reference rate · subject to approval' },
  { label: 'Health Insurance', category: 'Your Health, Your Priority', title: "1 in 4 Americans with health insurance still can't afford to use it. A plan is not the same as being covered.", description: 'The median employer health plan deductible is now $2,750. Most people find this out when they need care. We compare marketplace, employer supplement, and individual plans to find what fits your situation and budget. From $199/mo. Subject to terms and conditions.', cta: 'View health plans', price: 'From $199', priceLabel: 'Reference rate · subject to approval' },
  { label: 'Pet Insurance', category: "Your Pet's Health", title: '38% of pet owners cannot cover an emergency vet visit without going into debt. Fewer than 4% have pet insurance.', description: "Take your pet to any licensed vet in the U.S. — no restricted network. You pay the bill and get up to 90% back within a week. One surgery can cost $8,000 without insurance. Subject to terms and conditions.", cta: 'See pet insurance price', price: 'From $29', priceLabel: 'Reference rate · subject to approval' },
  { label: 'Business Insurance', category: 'Protection for Your Business', title: 'A customer slips in your store → $80,000 lawsuit. Can you cover it?', description: 'Without business insurance, one lawsuit can shut down what took you years to build. BOP, general liability, Workers Comp. COI in 24 hours. EIN and ITIN accepted. From $19/mo. Subject to terms and conditions.', cta: 'Get business insurance quote', price: 'From $19', priceLabel: 'Reference rate · subject to approval' },
  { label: 'Umbrella Coverage', category: 'Asset Protection', title: 'Your policy covers $300K. The accident cost $600K. Who pays the difference?', description: "The difference comes from your savings, your home, your business — unless you have umbrella coverage. Less than $1 a day for $1 million in additional protection. The last line of defense for what you've built. Subject to terms and conditions.", cta: 'Get umbrella quote', price: 'From $19', priceLabel: 'Reference rate · subject to approval' },
];

export const TAB_TO_INS_ES: InsType[] = ['Auto', 'Salud', 'Vida', 'Mascotas', 'Comercial', 'Umbrella'];
export const TAB_TO_INS_EN: InsType[] = ['Auto', 'Vida', 'Salud', 'Mascotas', 'Comercial', 'Umbrella'];
/** @deprecated use TAB_TO_INS_ES or TAB_TO_INS_EN */
export const TAB_TO_INS = TAB_TO_INS_ES;

export const ALL_INS_TYPES: InsType[] = ['Auto', 'AutoComercial', 'Mascotas', 'Vida', 'Salud', 'Dental', 'Paquete', 'Comercial', 'Umbrella'];

export const FAQ_ES = [
  { n: '01', q: '¿Necesito SSN para sacar un seguro de auto?', a: 'No. Cotizas y contratas con ITIN, pasaporte o matrícula consular. No se requiere número de seguro social. Trabajamos con residentes permanentes, titulares de visa, emprendedores con ITIN y personas con licencia de conducir de su estado. Un asesor bilingüe te llama en 24 horas con tu cotización personalizada.', open: true },
  { n: '02', q: '¿Qué pasa si me paran manejando sin seguro?', a: 'En la mayoría de los estados: multa de $150 a $5,000, suspensión de licencia, posible embargo del vehículo y responsabilidad civil personal por todos los daños causados al otro conductor. El seguro mínimo obligatorio te protege a ti y a los demás.' },
  { n: '03', q: 'Soy chofer de DoorDash, Uber o Lyft. ¿Necesito seguro especial?', a: 'Sí y no, depende de la fase. Las apps cubren cuando tienes un pedido activo, pero cuando la app está encendida y esperas pedidos, tienes cobertura mínima o nula. DoorDash e Instacart no cubren tu vehículo en ninguna fase. El seguro para conductores de plataformas llena ese vacío. Sin él, un accidente en esa fase puede dejarte sin cobertura.' },
  { n: '04', q: '¿La información que doy para cotizar se comparte con el gobierno o agencias de crédito?', a: 'No. Lo que compartes con nosotros es 100% confidencial. No lo compartimos con ninguna agencia gubernamental, y cotizar no genera ningún reporte en tu historial de crédito. Cumplimos con HIPAA y todas las regulaciones estatales de privacidad. Puedes explorar tus opciones con total tranquilidad.' },
  { n: '05', q: '¿Puedo tener seguro de vida sin SSN?', a: 'Sí. Aceptamos ITIN como identificación válida para seguros de vida. Puedes designar beneficiarios en cualquier país del mundo sin que necesiten documentos americanos. Los planes con Living Benefits también te permiten acceder al dinero mientras sigues vivo si te diagnostican una enfermedad grave.' },
  { n: '06', q: '¿Cuánto cuesta un plan de salud y cómo sé cuál me conviene?', a: 'El costo varía según el estado, la edad y los médicos que necesitas. La diferencia entre planes no es solo el precio: está en qué cubre realmente, qué médicos incluye y cuánto pagas cuando vas al doctor. Como agente independiente, comparamos 10+ aseguradoras y te explicamos cada opción en español para que elijas con información real. ITIN aceptado. Te damos tu cotización en la primera llamada.' },
  { n: '07', q: '¿Qué diferencia hay entre un agente independiente y uno de una sola compañía?', a: 'Un agente de una sola compañía solo puede mostrarte los planes de esa compañía. Un agente independiente compara 10+ aseguradoras y encuentra la mejor opción para tu perfil exacto. Además, cuando necesitas hacer un reclamo y hay un problema, el agente independiente está de tu lado para resolverlo, no del lado de la compañía.' },
  { n: '08', q: 'Mi prima subió sin aviso. ¿Qué puedo hacer?', a: 'Es más común de lo que crees: el 48% de asegurados recibió un aumento de prima sin explicación clara en 2025 (JD Power). Cuando eso pasa, tienes tres opciones: aceptar el aumento, llamar a la compañía para negociar, o comparar con otras aseguradoras. La tercera opción casi siempre gana. Como agente independiente, comparamos 10+ aseguradoras en una sola llamada. Si hay una opción mejor, la encontramos. Si la tuya sigue siendo la mejor, te lo decimos también.' },
];

export const FAQ_EN = [
  { n: '01', q: 'What is an independent insurance agent and why does it matter?', a: 'A captive agent at State Farm, Allstate, or GEICO can only show you that company\'s rates. An independent agent compares 10+ carriers at the same time and brings you the best options for your situation. You pay the same price either way. The difference is who is working for you versus who is working for the carrier.', open: true },
  { n: '02', q: 'Why did my premium go up without any explanation?', a: 'Half of insured Americans received a carrier-initiated rate increase in the past 12 months (JD Power 2025). Carriers raise rates based on ZIP code claims data, reinsurance costs, and inflation. None of which depends on your driving record. When it happens, you have three options: accept it, call to negotiate, or compare with other carriers. An independent agent can run that comparison in one conversation.' },
  { n: '03', q: "I drive for DoorDash, Uber, or Lyft — do I need commercial auto insurance?", a: "It depends on the phase. Apps cover you when you have an active delivery or passenger (Phase 2–3), but when the app is on and you're waiting for a request (Phase 1), coverage is minimal or nonexistent. DoorDash and Instacart provide zero vehicle coverage at any phase. Rideshare/gig insurance fills that gap. Without it, a Phase 1 accident could leave you with no coverage at all." },
  { n: '04', q: 'Does getting a quote affect my credit score?', a: 'No. Getting a quote is a soft inquiry that does not appear on your credit report and does not affect your score. We never run a hard credit check to provide a quote. You can compare rates across multiple carriers with zero impact on your credit.' },
  { n: '05', q: 'How often should I review my insurance policies?', a: 'Most people set up their insurance and forget it. Rates change, life changes, and what covered you three years ago may leave gaps today. We do an annual policy review for every client — at no cost — to make sure your coverage still fits your situation. Most clients find either a better rate or a gap they did not know existed.' },
  { n: '06', q: 'Can I insure my car, home, business, and life with one agent?', a: 'Yes, and it matters more than most people think. When one agent knows your full picture, they can spot gaps between policies, avoid overlap, and make sure everything works together. That coordination is something you lose when you buy each policy separately from different companies. We handle all lines — auto, life, health, pet, and commercial.' },
  { n: '07', q: 'Do you only work with one insurance company?', a: 'No. We are an independent agency, which means we compare 10+ carriers at the same time. You get the options; we do the comparison work. There is no fee for our services — agents are compensated by carriers, so you pay the same price whether you go direct or through us.' },
  { n: '08', q: 'What happens if my claim is denied or takes too long?', a: 'When you file a claim directly with a carrier, you call a 1-800 number and start from zero. When you work with an independent agent, you call one person who knows your policy and your history, and knows exactly who to escalate to. 80% of customers who have a poor claims experience leave their carrier. Most don\'t know an independent agent could have changed the outcome. That advocacy is part of what we do, not an extra service.' },
];

export const HERO_VIDEOS = [
  { src: '/videos/hero1.mp4', startTime: 2 },
  { src: '/videos/hero2-desktop.mp4', startTime: 10 },
  { src: '/videos/hero-auto.mp4', srcMobile: '/videos/hero-auto-mobile.mp4', startTime: 0 },
];

export const TRUST_STATS_ES = [
  { value: '200+', label: 'Familias protegidas' },
  { value: '10+', label: 'Aseguradoras comparadas' },
  { value: '100%', label: 'Atención en español' },
  { value: '24h', label: 'Respuesta garantizada' },
];

export const TRUST_STATS_EN = [
  { value: '200+', label: 'Families protected' },
  { value: '10+', label: 'Carriers compared' },
  { value: '100%', label: 'Bilingual service' },
  { value: '24h', label: 'Guaranteed response' },
];

export const MARIA_BIO_ES = {
  name: 'María Fernanda',
  title: 'Agente de Seguros Licenciada',
  subtitle: 'Tu asesora bilingüe de confianza',
  bio: 'Entiendo de primera mano lo que significa construir una vida en un país nuevo. Por eso me convertí en agente de seguros: para que tu familia tenga la protección que merece, sin barreras de idioma, sin letra chica y sin importar el tipo de documentación que tengas.',
  quote: '"Porque proteger a tu familia no debería depender de tener un número de seguro social."',
  cta: 'Hablar con María Fernanda',
  ctaHref: 'https://wa.me/19082280973?text=Hola%20Mar%C3%ADa%20Fernanda%20%F0%9F%91%8B%20me%20gustar%C3%ADa%20cotizar%20un%20seguro%2C%20%C2%BFcu%C3%A1ndo%20tiene%20un%20momento%20para%20hablar%3F',
};

export const MARIA_BIO_EN = {
  name: 'María Fernanda',
  title: 'Licensed Insurance Agent',
  subtitle: 'Your bilingual agent',
  bio: "I became an insurance agent so your family has the protection it deserves, with no language barriers, no fine print, and someone in your corner when it matters most.",
  quote: '"Because protecting your family shouldn\'t depend on having a Social Security Number."',
  cta: 'Talk to María Fernanda',
  ctaHref: "https://wa.me/19082280973?text=Hi%20Mar%C3%ADa%20Fernanda%20%F0%9F%91%8B%20I'd%20like%20to%20explore%20insurance%20options.%20When's%20a%20good%20time%20to%20connect%3F",
};
