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
  { label: 'Seguro de Auto', category: 'Protección en Carretera', title: 'Tu auto, tu trabajo, tu libertad — protegidos sin SSN', description: 'Sin SSN para cotizar. Si te paran sin seguro en la mayoría de los estados: multa de hasta $5,000, suspensión de licencia y responsabilidad civil personal por todos los daños. Desde $89/mes, con ITIN o pasaporte. Sujeto a términos y condiciones.', cta: 'Ver mi precio de auto', price: 'Desde $89', priceLabel: 'Tarifa referencial · sujeto a aprobación' },
  { label: 'Seguro de Mascotas', category: 'Salud de tu Mascota', title: '1 de cada 3 mascotas necesitará una emergencia — ¿estás cubierto?', description: 'Lleva a tu mascota a cualquier veterinario con licencia en EE.UU. — sin red restringida. Pagas la factura y recibes hasta el 90% de reembolso en menos de una semana. Una cirugía puede costarte $8,000 sin seguro. Sujeto a términos y condiciones.', cta: 'Ver precio de mascotas', price: 'Desde $29', priceLabel: 'Tarifa referencial · sujeto a aprobación' },
  { label: 'Seguro de Vida', category: 'Protección para tu Familia', title: 'El dinero lo usás vivo, no solo tu familia cuando ya no estés', description: 'Living Benefits: si te diagnostican infarto, cáncer o enfermedad grave, podés acceder al dinero mientras seguís vivo. Sin SSN, sin examen médico en muchos planes, beneficiarios en cualquier país. Desde $15/mes. Sujeto a términos y condiciones.', cta: 'Ver precio de vida', price: 'Desde $15', priceLabel: 'Tarifa referencial · sujeto a aprobación' },
  { label: 'Seguro Comercial', category: 'Protección para tu Negocio', title: 'Un cliente cae en tu local → demanda de $80,000. ¿Podés pagarlo?', description: 'Sin seguro comercial, una sola demanda puede cerrar lo que tardaste años en construir. BOP, responsabilidad civil, Workers Comp. COI en 24 horas. Acepta EIN e ITIN. Desde $19/mes. Sujeto a términos y condiciones.', cta: 'Cotizar seguro comercial', price: 'Desde $19', priceLabel: 'Tarifa referencial · sujeto a aprobación' },
  { label: 'Seguro de Salud', category: 'Tu Salud, tu Prioridad', title: 'Tu información NUNCA llega a ICE. Planes con ITIN, cualquier estatus.', description: 'Protegido por ley HIPAA — nunca compartimos información con migración. Una emergencia sin seguro: $10,000 o más. Planes individuales y familiares con ITIN, desde $199/mes. Asesores en español. Sujeto a términos y condiciones.', cta: 'Ver planes de salud', price: 'Desde $199', priceLabel: 'Tarifa referencial · sujeto a aprobación' },
  { label: 'Protección Extra', category: 'Protección Patrimonial', title: 'Tu seguro cubre $300K. El accidente costó $600K. ¿Quién paga la diferencia?', description: 'La diferencia sale de tus ahorros, tu casa, tu negocio — si no tenés Protección Extra. Menos de $1 al día por $1 millón de cobertura adicional. La última línea de defensa para lo que construiste. Sujeto a términos y condiciones.', cta: 'Cotizar protección extra', price: 'Desde $19', priceLabel: 'Tarifa referencial · sujeto a aprobación' },
];

export const solutionsTabs_en = [
  { label: 'Car Insurance', category: 'Road Protection', title: 'Your car, your work, your freedom — covered without an SSN', description: 'No SSN needed to quote. Driving without insurance in most states: fines up to $5,000, license suspension, and personal financial liability for all damages. From $89/mo, with ITIN or passport. Subject to terms and conditions.', cta: 'See my auto price', price: 'From $89', priceLabel: 'Reference rate · subject to approval' },
  { label: 'Pet Insurance', category: "Your Pet's Health", title: '1 in 3 pets will need emergency care — are you covered?', description: "Take your pet to any licensed vet in the U.S. — no restricted network. You pay the bill and get up to 90% back within a week. One surgery can cost $8,000 without insurance. Subject to terms and conditions.", cta: 'See pet insurance price', price: 'From $29', priceLabel: 'Reference rate · subject to approval' },
  { label: 'Life Insurance', category: 'Protection for Your Family', title: "You use the money while alive — not just your family after you're gone", description: 'Living Benefits: if diagnosed with a heart attack, cancer, or serious illness, you can access the money while still alive. No SSN, no medical exam on many plans, beneficiaries in any country. From $15/mo. Subject to terms and conditions.', cta: 'See life insurance price', price: 'From $15', priceLabel: 'Reference rate · subject to approval' },
  { label: 'Business Insurance', category: 'Protection for Your Business', title: 'A customer slips in your store → $80,000 lawsuit. Can you cover it?', description: 'Without business insurance, one lawsuit can shut down what took you years to build. BOP, general liability, Workers Comp. COI in 24 hours. EIN and ITIN accepted. From $19/mo. Subject to terms and conditions.', cta: 'Get business insurance quote', price: 'From $19', priceLabel: 'Reference rate · subject to approval' },
  { label: 'Health Insurance', category: 'Your Health, Your Priority', title: 'Your information NEVER reaches immigration. Plans with ITIN, any status.', description: 'Protected by HIPAA — we never share your information with immigration authorities. One ER visit without insurance: $10,000+. Individual and family plans with ITIN, from $199/mo. Bilingual agents. Subject to terms and conditions.', cta: 'View health plans', price: 'From $199', priceLabel: 'Reference rate · subject to approval' },
  { label: 'Umbrella Coverage', category: 'Asset Protection', title: 'Your policy covers $300K. The accident cost $600K. Who pays the difference?', description: "The difference comes from your savings, your home, your business — unless you have umbrella coverage. Less than $1 a day for $1 million in additional protection. The last line of defense for what you've built. Subject to terms and conditions.", cta: 'Get umbrella quote', price: 'From $19', priceLabel: 'Reference rate · subject to approval' },
];

export const TAB_TO_INS: InsType[] = ['Auto', 'Mascotas', 'Vida', 'Comercial', 'Salud', 'Umbrella'];

export const ALL_INS_TYPES: InsType[] = ['Auto', 'AutoComercial', 'Mascotas', 'Vida', 'Salud', 'Dental', 'Paquete', 'Comercial', 'Umbrella'];

export const FAQ_ES = [
  { n: '01', q: '¿Necesito SSN para sacar un seguro de auto?', a: 'No. Cotizas y contratas con ITIN, pasaporte o matrícula consular. No se requiere número de seguro social. Trabajamos con familias en todas las situaciones migratorias — inmigrantes recientes, DACA, visa temporal y estatus pendiente. Solo tu nombre y correo para iniciar.', open: true },
  { n: '02', q: '¿Qué pasa si me paran manejando sin seguro?', a: 'En la mayoría de los estados: multa de $150 a $5,000, suspensión de licencia, posible embargo del vehículo y responsabilidad civil personal por todos los daños causados al otro conductor. Para inmigrantes, esto también puede complicar tu situación legal. El seguro mínimo obligatorio te protege a ti y a los demás.' },
  { n: '03', q: 'Soy chofer de DoorDash, Uber o Lyft — ¿necesito seguro comercial?', a: 'Sí y no depende de la fase. Las apps cubren cuando tenés un pedido activo (Fase 2-3), pero cuando la app está encendida y esperás pedidos (Fase 1), tenés cobertura mínima o nula. DoorDash e Instacart no cubren tu vehículo en ninguna fase. El seguro de rideshare/gig llena ese vacío. Sin él, un accidente en Fase 1 puede dejarte sin cobertura.' },
  { n: '04', q: '¿Mi información personal se comparte con ICE o migración?', a: 'No. Tu información es 100% confidencial. Nunca la compartimos con ICE, la migra ni ninguna agencia gubernamental sin orden judicial. Cumplimos con HIPAA y todas las regulaciones estatales de privacidad. Lo que hablás con nosotros es estrictamente privado — esto incluye estatus migratorio, ingresos y cualquier otro dato personal.' },
  { n: '05', q: '¿Puedo tener seguro de vida sin SSN?', a: 'Sí. Aceptamos ITIN como identificación válida para seguros de vida. Podés designar beneficiarios en cualquier país del mundo — tu mamá en México, tus hijos en Guatemala, tu pareja en Colombia. No necesitan documentos americanos. Además, los planes con Living Benefits te permiten acceder al dinero mientras seguís vivo si te diagnostican una enfermedad grave.' },
  { n: '06', q: '¿Cuánto cuesta el seguro de auto para inmigrantes?', a: 'Desde $89/mes, dependiendo del estado, el vehículo, el historial de manejo y el tipo de cobertura. Usar ITIN en vez de SSN no afecta significativamente el precio. Completás el formulario, un asesor bilingüe te llama dentro de las 24 horas con tu cotización personalizada — sin presiones.' },
  { n: '07', q: '¿El seguro de salud cubre a toda mi familia?', a: 'Sí. Ofrecemos planes familiares que cubren cónyuge e hijos en una sola póliza. Tus hijos pueden estar cubiertos aunque tengan diferente estatus que vos. Los hijos nacidos en USA (ciudadanos) pueden calificar para CHIP. Tu información de salud está protegida por HIPAA — nunca se comparte con migración.' },
  { n: '08', q: '¿Qué es un paquete de auto y casa y cuánto se ahorra?', a: 'Al combinar el seguro de auto con el de hogar (o renters si alquilás), recibís descuento en ambas pólizas. El ahorro típico es $400–$900 al año. Y algo que mucha gente no sabe: el seguro del landlord NO cubre tus pertenencias — si hay un robo o incendio, perdés todo lo tuyo sin seguro de renters. Sin SSN para cotizar el bundle.' },
];

export const FAQ_EN = [
  { n: '01', q: 'Can I get car insurance without a Social Security Number?', a: 'Yes. You can quote and enroll using an ITIN, passport, or consular ID card. No SSN ever required. We work with immigrants, DACA recipients, visa holders, and those with pending status. You only need your name and email to get started.', open: true },
  { n: '02', q: 'What happens if I get pulled over without insurance?', a: 'In most states: fines from $150 to $5,000, license suspension, possible vehicle impoundment, and personal financial liability for all damages you cause. For immigrants, this can also complicate your legal situation. Minimum required liability insurance protects both you and other drivers.' },
  { n: '03', q: "I drive for DoorDash, Uber, or Lyft — do I need commercial auto insurance?", a: "It depends on the phase. Apps cover you when you have an active delivery or passenger (Phase 2–3), but when the app is on and you're waiting for a request (Phase 1), coverage is minimal or nonexistent. DoorDash and Instacart provide zero vehicle coverage at any phase. Rideshare/gig insurance fills that gap. Without it, a Phase 1 accident could leave you with no coverage at all." },
  { n: '04', q: 'Is my personal information shared with immigration authorities?', a: 'No. Your information is 100% confidential and is never shared with ICE, immigration authorities, or any government agency without a specific court order. We comply with HIPAA and all state privacy regulations. This includes your immigration status, income, and any other personal data you share with us.' },
  { n: '05', q: 'Can non-US citizens get life insurance in America?', a: 'Yes. We accept ITIN as valid identification. You can designate beneficiaries anywhere in the world — your mom in Mexico, your kids in Guatemala, your partner in Colombia. They do not need US documents. Our Living Benefits plans also let you access the money while still alive if diagnosed with a critical illness.' },
  { n: '06', q: 'How much does car insurance cost for immigrants in the US?', a: 'From $89/month, depending on your state, vehicle, and driving history. Using an ITIN instead of an SSN does not significantly affect your premium. Fill out the form, and a bilingual agent will call you within 24 hours with your personalized quote — no pressure.' },
  { n: '07', q: 'Does getting a quote affect my credit score?', a: 'No. Getting a quote does not affect your credit score. We do not require a credit check to provide a quote or to enroll in most plans. You can explore all your options with zero impact on your credit.' },
  { n: '08', q: 'What is a home and auto bundle and how much can I save?', a: 'When you combine home insurance (or renters insurance if you rent) with auto insurance, you get a discount on both policies. The typical savings is $400–$900 per year. One thing most people don\'t know: your landlord\'s insurance does NOT cover your belongings — if there\'s a theft or fire, everything you own is gone without renters insurance. No SSN to quote the bundle.' },
];

export const HERO_VIDEOS = [
  { src: '/videos/hero1.mp4', startTime: 2 },
  { src: '/videos/hero2-desktop.mp4', startTime: 10 },
  { src: '/videos/hero-auto.mp4', srcMobile: '/videos/hero-auto-mobile.mp4', startTime: 0 },
];

export const TRUST_STATS_ES = [
  { value: '200+', label: 'Familias protegidas' },
  { value: '8', label: 'Tipos de seguro' },
  { value: '100%', label: 'Atención en español' },
  { value: '24h', label: 'Respuesta garantizada' },
];

export const TRUST_STATS_EN = [
  { value: '200+', label: 'Families protected' },
  { value: '8', label: 'Insurance types' },
  { value: '100%', label: 'Bilingual service' },
  { value: '24h', label: 'Guaranteed response' },
];

export const MARIA_BIO_ES = {
  name: 'María Fernanda',
  title: 'Agente de Seguros Licenciada',
  subtitle: 'Tu asesora bilingüe de confianza',
  bio: 'Entiendo de primera mano lo que significa construir una vida en un país nuevo. Por eso me convertí en agente de seguros: para que tu familia tenga la protección que merece, sin barreras de idioma, sin letra chica y sin importar tu estatus migratorio.',
  quote: '"Porque proteger a tu familia no debería depender de tener un número de seguro social."',
  cta: 'Hablar con María Fernanda',
  ctaHref: 'https://wa.me/19082280973?text=Hola%20Mar%C3%ADa%20Fernanda%2C%20vi%20su%20p%C3%A1gina%20y%20me%20gustar%C3%ADa%20cotizar%20un%20seguro.',
};

export const MARIA_BIO_EN = {
  name: 'María Fernanda',
  title: 'Licensed Insurance Agent',
  subtitle: 'Your bilingual agent',
  bio: "I understand firsthand what it means to build a life in a new country. That's why I became an insurance agent: so your family can have the protection it deserves — no language barriers, no fine print, and no matter your immigration status.",
  quote: '"Because protecting your family shouldn\'t depend on having a Social Security Number."',
  cta: 'Talk to María Fernanda',
  ctaHref: 'https://wa.me/19082280973?text=Hi%20Mar%C3%ADa%20Fernanda%2C%20I%20saw%20your%20website%20and%20would%20like%20to%20get%20an%20insurance%20quote.',
};
