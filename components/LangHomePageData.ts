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
    alt: 'Paisajes abiertos y seguros, cada horizonte resguardado',
    caption: 'Cada horizonte resguardado con Maria Fernanda.',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida/AEtjO1X7Fsl95nUF-Lp5Lff5U0pm19f6MSz9GOCmjjKo0fCZNv9O3rYuqZl69L1su4s9Lg_UXnQ_Ooap4L6zaqGTyZVjIflziXskEcdRy0zQtJc7LZWhM-e0xHK38oZQkk3kEJ439GhT7rA8v2y_unh8f-IFzVojqQoBXslc6sSkwzqydPTZap34_QhXnj1xihdb-A8e68h8Ap_dEq2WHhgyff7M5MLXHF3C2syuCTX_PkerUHg2IwuPu2MDxf0',
    alt: 'Familia protegida y segura, legado para las próximas generaciones',
    caption: 'Tu familia protegida en cada etapa de la vida.',
  },
];

export const solutionsTabs_es = [
  { label: 'Seguro de Auto', category: 'Protección en Carretera', title: 'Los latinos pagan $144 más al año en seguro de auto que otros conductores. La razón: no comparan.', description: 'Sin seguro en la mayoría de los estados: multa de hasta $5,000, suspensión de licencia y responsabilidad personal por todos los daños. ITIN aceptado, sin historial de crédito para cotizar. Sujeto a términos y condiciones.', cta: 'Cotizar auto gratis', price: 'Compara 10+ aseguradoras', priceLabel: 'Cotización sin costo · sin compromiso' },
  { label: 'Seguro de Salud', category: 'Tu Salud, tu Prioridad', title: 'El 55% de hispanos en EE.UU. no tiene seguro de salud. Una visita a urgencias sin seguro puede costarte $3,000 o más.', description: 'Hay 10 o más planes de salud distintos y nadie te los explica en español. Eso es exactamente lo que hacemos. Comparamos aseguradoras para encontrar el plan que cubre tu familia: consultas, medicamentos, emergencias y servicios preventivos. ITIN aceptado. Sujeto a términos y condiciones.', cta: 'Ver planes de salud', price: '', priceLabel: '' },
  { label: 'Seguro de Vida', category: 'Protección para tu Familia', title: 'Protege hoy el futuro de quienes más quieres.', description: 'Un seguro de vida puede ayudar a tu familia a afrontar gastos, deudas y compromisos económicos si llegas a faltar. Te orientamos para elegir entre opciones temporales y permanentes, según tus necesidades y presupuesto. Beneficios en vida disponibles en ciertos planes, sujetos a condiciones. Opciones para solicitantes con ITIN, según la aseguradora. Posibilidad de aplicar sin examen médico en ciertos productos, sujeta a evaluación. Sujeto a términos y condiciones.', cta: 'Cotizar gratis', price: '', priceLabel: 'Tarifa referencial · sujeto a aprobación' },
  { label: 'Seguro de Mascotas', category: 'Salud de tu Mascota', title: 'Una emergencia veterinaria cuesta en promedio $1,100 y el 65% de dueños no puede cubrirla.', description: 'Lleva a tu mascota a cualquier veterinario con licencia en EE.UU. sin red restringida. Pagas la factura y recibes hasta el 90% de reembolso en menos de una semana. Sujeto a términos y condiciones.', cta: 'Cotizar mascotas', price: 'Reembolso hasta 90%', priceLabel: 'Sujeto a términos y condiciones' },
  { label: 'Seguro Comercial', category: 'Protección para tu Negocio', title: 'El 77% de negocios pequeños no tiene la cobertura suficiente si alguien los demanda.', description: 'Sin seguro comercial, una sola demanda puede cerrar lo que tardaste años en construir. BOP, responsabilidad civil, Workers Comp. COI disponible. EIN e ITIN aceptados. Sujeto a términos y condiciones.', cta: 'Cotizar seguro comercial', price: '', priceLabel: 'Tarifa referencial · sujeto a aprobación' },
  { label: 'Protección Extra', category: 'Protección Patrimonial', title: 'Tu seguro de auto y casa tiene un límite. Una demanda puede superarlo en horas.', description: 'La diferencia sale de tus ahorros, tu casa, tu negocio si no tienes Protección Extra. Menos de $1 al día por $1 millón de cobertura adicional. La última línea de defensa para lo que construiste. Sujeto a términos y condiciones.', cta: 'Cotizar protección extra', price: '', priceLabel: '' },
];

export const solutionsTabs_en = [
  { label: 'Car Insurance', category: 'Road Protection', title: 'Car insurance premiums rose 30% in two years. Drivers who compared saved a median $461 last year.', description: 'No SSN needed to quote. Driving without insurance in most states: fines up to $5,000, license suspension, and personal financial liability for all damages. ITIN or passport accepted. Subject to terms and conditions.', cta: 'See my auto price', price: 'Compare 10+ carriers', priceLabel: 'Free quote · no commitment' },
  { label: 'Life Insurance', category: 'Protection for Your Family', title: '72% of Americans overestimate the cost of life insurance. Most base their estimate on a guess, not the real price.', description: 'Living Benefits: if diagnosed with a heart attack, cancer, or serious illness, you can access the money while still alive. No SSN, no medical exam on many plans, beneficiaries in any country. Subject to terms and conditions.', cta: 'See life insurance price', price: '', priceLabel: '' },
  { label: 'Health Insurance', category: 'Your Health, Your Priority', title: "1 in 4 Americans with health insurance still can't afford to use it. A plan is not the same as being covered.", description: 'Most people find out what their plan covers when they need care. We compare marketplace, employer supplement, and individual plans to find what fits your situation and budget. Subject to terms and conditions.', cta: 'View health plans', price: '', priceLabel: '' },
  { label: 'Pet Insurance', category: "Your Pet's Health", title: '38% of pet owners cannot cover an emergency vet visit without going into debt. Fewer than 4% have pet insurance.', description: "An emergency vet surgery can cost $1,500 to $5,000 (CareCredit, 2024). Take your pet to any licensed vet in the U.S., no restricted network. You pay the bill and get up to 90% back. Subject to terms and conditions.", cta: 'See pet insurance price', price: 'Up to 90% back', priceLabel: 'Subject to terms and conditions' },
  { label: 'Business Insurance', category: 'Protection for Your Business', title: 'A customer slips in your store → $80,000 lawsuit. Can you cover it?', description: 'Without business insurance, one lawsuit can shut down what took you years to build. BOP, general liability, Workers Comp. COI in 24 hours. EIN and ITIN accepted. Subject to terms and conditions.', cta: 'Get business insurance quote', price: '', priceLabel: '' },
  { label: 'Umbrella Coverage', category: 'Asset Protection', title: 'Your policy covers $300K. The accident cost $600K. Who pays the difference?', description: "The difference comes from your savings, your home, your business — unless you have umbrella coverage. Less than $1 a day for $1 million in additional protection. The last line of defense for what you've built. Subject to terms and conditions.", cta: 'Get umbrella quote', price: '', priceLabel: '' },
];

export const TAB_TO_INS_ES: InsType[] = ['Auto', 'Salud', 'Vida', 'Mascotas', 'Comercial', 'Umbrella'];
export const TAB_TO_INS_EN: InsType[] = ['Auto', 'Vida', 'Salud', 'Mascotas', 'Comercial', 'Umbrella'];
/** @deprecated use TAB_TO_INS_ES or TAB_TO_INS_EN */
export const TAB_TO_INS = TAB_TO_INS_ES;

export const ALL_INS_TYPES: InsType[] = ['Auto', 'AutoComercial', 'Mascotas', 'Vida', 'Salud', 'Dental', 'Paquete', 'Comercial', 'Umbrella'];

export const FAQ_ES = [
  { n: '01', q: '¿Necesito SSN para sacar un seguro de auto?', a: 'No. No necesitas número de seguro social para cotizar ni contratar un seguro de auto. Trabajamos con residentes permanentes, titulares de visa y personas con licencia de conducir de su estado. Un asesor bilingüe te llama en 24 horas con tu cotización personalizada.', open: true },
  { n: '02', q: '¿Qué pasa si me paran manejando sin seguro?', a: 'Conducir sin seguro puede resultar en multas y suspensión de la licencia o del registro del vehículo. Las sanciones varían según el estado y las circunstancias. Además, si causas un accidente, podrías tener que pagar de tu bolsillo los daños y lesiones. Mantén tu póliza activa y lleva siempre tu comprobante de seguro.' },
  { n: '03', q: 'Soy conductor de Uber, Lyft o hago entregas por apps. ¿Necesito cobertura especial?', a: 'Es posible. Tu seguro de auto personal puede excluir el uso del vehículo para transportar pasajeros o hacer entregas por pago. La cobertura que ofrecen las plataformas varía según la app y la fase de trabajo, y puede dejar gastos sin cubrir. Dependiendo de tu actividad y la aseguradora, podrías necesitar una cobertura adicional o una póliza comercial. Cuéntanos qué apps utilizas y te ayudamos a revisar la opción adecuada.' },
  { n: '04', q: '¿Puedo tener seguro de vida sin SSN?', a: 'Sí. Aceptamos ITIN como identificación válida para seguros de vida. Puedes designar beneficiarios en cualquier país del mundo sin que necesiten documentos americanos. Los planes con Living Benefits también te permiten acceder al dinero mientras sigues vivo si te diagnostican una enfermedad grave.' },
  { n: '05', q: '¿Cuánto cuesta un plan de salud y cómo sé cuál me conviene?', a: 'El costo depende de tu edad, dónde resides y la cobertura que necesitas. Te ayudamos a explorar seguros de salud privados, planes del Marketplace (para ciudadanos, residentes permanentes y personas con estatus migratorio elegible), opciones de Medicare para mayores de 65 años, seguros grupales para empresas y seguros suplementarios para personas y familias. Te explicamos en español los beneficios, costos, límites y exclusiones de cada opción. Los seguros suplementarios y de beneficios fijos no sustituyen un seguro médico integral.' },
  { n: '07', q: '¿Qué diferencia hay entre un agente independiente y uno de una sola compañía?', a: 'Un agente de una sola compañía solo puede mostrarte los planes de esa compañía. Un agente independiente compara 10 o más aseguradoras y encuentra la mejor opción para tu perfil exacto. Además, cuando necesitas hacer un reclamo y hay un problema, el agente independiente está de tu lado para resolverlo, no del lado de la compañía.' },
  { n: '07', q: 'Mi seguro subió de precio. ¿Qué puedo hacer?', a: 'Podemos ayudarte a revisar el motivo del aumento, verificar los datos de tu póliza y explorar descuentos disponibles. También comparamos opciones de otras aseguradoras, tomando en cuenta el precio, las coberturas y los deducibles. Si encontramos una alternativa que te convenga, te orientamos para hacer el cambio sin dejar un período sin cobertura.' },
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
  { src: '/videos/hero-auto-new.mp4', startTime: 0 },
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
  { value: '100%', label: 'Annual review included' },
  { value: '24h', label: 'Guaranteed response' },
];

export const MARIA_BIO_ES = {
  name: 'Maria Fernanda',
  title: 'Agente de Seguros Licenciada',
  subtitle: 'Tu asesora bilingüe de confianza',
  bio: 'Entiendo de primera mano lo que significa construir una vida en un país nuevo. Por eso me convertí en agente de seguros: para que tu familia tenga la protección que merece, sin barreras de idioma, sin letra chica y sin importar el tipo de documentación que tengas.',
  quote: '"Porque proteger a tu familia no debería depender de tener un número de seguro social."',
  cta: 'Hablar con Maria Fernanda',
  ctaHref: 'https://wa.me/19082280973?text=Hola%20Maria%20Fernanda%20%F0%9F%91%8B%20me%20gustar%C3%ADa%20cotizar%20un%20seguro%2C%20%C2%BFcu%C3%A1ndo%20tiene%20un%20momento%20para%20hablar%3F',
};

export const MARIA_BIO_EN = {
  name: 'Maria Fernanda',
  title: 'Licensed Insurance Agent',
  subtitle: 'Your independent agent',
  bio: "I became an insurance agent so your family has the protection it deserves — no fine print, no surprises, and someone in your corner when you need to file a claim.",
  quote: '"Because when you file a claim, you deserve a real person in your corner — not a 1-800 number."',
  cta: 'Talk to Maria Fernanda',
  ctaHref: "https://wa.me/19082280973?text=Hi%20Maria%20Fernanda%20%F0%9F%91%8B%20I'd%20like%20to%20explore%20insurance%20options.%20When's%20a%20good%20time%20to%20connect%3F",
};
