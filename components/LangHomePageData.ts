import type { InsType } from '@/components/QuoteModal';
import { TIPO_LABEL } from '@/components/QuoteModal';
import {
  Car as PhCar, Truck as PhTruck, PawPrint as PhPaw, Heart as PhHeart,
  Stethoscope as PhSteth, Tooth as PhTooth, Package as PhPkg,
  Buildings as PhBldg, Umbrella as PhUmbrella,
} from '@phosphor-icons/react';

export { TIPO_LABEL };

export const COTIZADOR_ICONS: Record<string, unknown> = {
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
  { label: 'Seguro de Auto', category: 'Protección en Carretera', title: 'Seguro de Auto para tu Tranquilidad en la Carretera', description: 'Tu auto es tu herramienta de trabajo y libertad. Te cubrimos contra accidentes, robo y daños, con asistencia en carretera 24/7 atendida en español. Sin SSN para cotizar. Sujeto a términos y condiciones.', cta: 'Cotizar Seguro de Auto', price: 'Desde $89', priceLabel: 'Tarifa referencial · sujeto a aprobación' },
  { label: 'Seguro de Mascotas', category: 'Salud de tu Mascota', title: 'Cuida a tu Perro o Gato sin Preocuparte por la Cuenta', description: 'Con VetDirect™ pagamos directamente a la clínica veterinaria — tú solo llevas a tu mascota. Sin adelantar dinero, sin esperar reembolsos. Sujeto a términos y condiciones.', cta: 'Cotizar Seguro de Mascotas', price: 'Desde $29', priceLabel: 'Tarifa referencial · sujeto a aprobación' },
  { label: 'Seguro de Vida', category: 'Protección para tu Familia', title: 'Seguro de Vida: lo Mejor que Puedes Dejarle a tu Familia', description: 'Si algo te pasara, tu familia estaría protegida económicamente. Y si enfrentas una enfermedad grave, puedes acceder al dinero mientras estás vivo. Atención 100% en español. Sujeto a términos y condiciones.', cta: 'Cotizar Seguro de Vida', price: 'Desde $45', priceLabel: 'Tarifa referencial · sujeto a aprobación' },
  { label: 'Seguro Comercial', category: 'Protección para tu Negocio', title: 'Protege el Negocio que Construiste con Tanto Esfuerzo', description: 'Restaurante, ferretería, salón, empresa de construcción — protege tu local, tus equipos y tu responsabilidad. Asesoría en español para dueños de negocios hispanos. Sujeto a términos y condiciones.', cta: 'Cotizar Seguro Comercial', price: 'Desde $120', priceLabel: 'Tarifa referencial · sujeto a aprobación' },
  { label: 'Seguro de Salud', category: 'Tu Salud, tu Prioridad', title: 'Planes de Salud que te Explican Todo en Español', description: 'Encuentra un plan que cubra médicos, medicamentos y emergencias. Incluimos Medicare para mayores de 65 años. Nuestros asesores te explican cada opción sin complicaciones ni letra chica. Sujeto a términos y condiciones.', cta: 'Ver Planes de Salud', price: 'Desde $199', priceLabel: 'Tarifa referencial · sujeto a aprobación' },
  { label: 'Seguro Umbrella', category: 'Protección Patrimonial', title: 'Una Red de Seguridad Extra para lo que has Logrado', description: 'Cuando un accidente grave supera los límites de tu seguro de auto o casa, el seguro umbrella protege tus ahorros, tu hogar y tu tranquilidad. Sujeto a términos y condiciones.', cta: 'Cotizar Seguro Umbrella', price: 'Desde $19', priceLabel: 'Tarifa referencial · sujeto a aprobación' },
];

export const solutionsTabs_en = [
  { label: 'Car Insurance', category: 'Road Protection', title: 'Car Insurance for Your Peace of Mind on the Road', description: 'Your car is your tool and freedom. We cover accidents, theft, and liability — with 24/7 roadside assistance in English or Spanish. No SSN to quote. Subject to terms and conditions.', cta: 'Get Car Insurance Quote', price: 'From $89', priceLabel: 'Reference rate · subject to approval' },
  { label: 'Pet Insurance', category: "Your Pet's Health", title: 'Take Care of Your Dog or Cat Without Worrying About the Bill', description: 'With VetDirect™ we pay the vet clinic directly — you just bring your pet. No upfront payment, no waiting for reimbursements. Subject to terms and conditions.', cta: 'Get Pet Insurance Quote', price: 'From $29', priceLabel: 'Reference rate · subject to approval' },
  { label: 'Life Insurance', category: 'Protection for Your Family', title: 'Life Insurance: The Best Thing You Can Leave Your Family', description: 'If something happened to you, your family would be protected financially. And if you face a serious illness, you can access the money while still alive. Subject to terms and conditions.', cta: 'Get Life Insurance Quote', price: 'From $45', priceLabel: 'Reference rate · subject to approval' },
  { label: 'Business Insurance', category: 'Protection for Your Business', title: 'Protect the Business You Built with So Much Effort', description: 'Restaurant, hardware store, salon, construction company — protect your location, equipment, and liability. Spanish-speaking advisors for Hispanic business owners. Subject to terms and conditions.', cta: 'Get Business Insurance Quote', price: 'From $120', priceLabel: 'Reference rate · subject to approval' },
  { label: 'Health Insurance', category: 'Your Health, Your Priority', title: 'Health Plans Explained to You in Plain Language', description: 'Find a plan that covers doctors, medications, and emergencies. Includes Medicare for those 65+. Our advisors explain each option without complications or fine print. Subject to terms and conditions.', cta: 'View Health Plans', price: 'From $199', priceLabel: 'Reference rate · subject to approval' },
  { label: 'Umbrella Coverage', category: 'Asset Protection', title: "An Extra Safety Net for What You've Achieved", description: 'When a serious accident exceeds the limits of your auto or home insurance, umbrella coverage protects your savings, your home, and your peace of mind. Subject to terms and conditions.', cta: 'Get Umbrella Quote', price: 'From $19', priceLabel: 'Reference rate · subject to approval' },
];

export const TAB_TO_INS: InsType[] = ['Auto', 'Mascotas', 'Vida', 'Comercial', 'Salud', 'Umbrella'];

export const ALL_INS_TYPES: InsType[] = ['Auto', 'AutoComercial', 'Mascotas', 'Vida', 'Salud', 'Dental', 'Paquete', 'Comercial', 'Umbrella'];

export const FAQ_ES = [
  { n: '01', q: '¿Necesito número de seguro social (SSN) para sacar un seguro de auto?', a: 'No. En Maria Fernanda Insurance Consulting puedes cotizar y contratar tu seguro de auto sin presentar número de seguro social. Aceptamos ITIN (Número de Identificación del Contribuyente Individual) como identificación válida. Solo necesitas tu nombre y correo electrónico para iniciar. Tu situación migratoria no es un obstáculo.', open: true },
  { n: '02', q: '¿Los inmigrantes indocumentados pueden tener seguro de auto en EE.UU.?', a: 'Sí. Las personas indocumentadas pueden contratar seguro de auto en los 50 estados de Estados Unidos. La mayoría de los estados exige seguro mínimo a todos los conductores, sin importar su estatus migratorio. Manejar sin seguro puede resultar en multas graves, suspensión de licencia y responsabilidad civil personal. Con nosotros estás cubierto.' },
  { n: '03', q: '¿Qué es el ITIN y sirve para contratar seguros en Estados Unidos?', a: 'El ITIN (Individual Taxpayer Identification Number) es un número emitido por el IRS para personas que no califican para un SSN. Sí sirve para contratar seguros. Lo aceptamos para seguros de auto, vida, salud, dental, mascotas y comerciales. No necesitas ciudadanía ni residencia permanente para obtener cobertura.' },
  { n: '04', q: '¿Mi información personal se comparte con inmigración o el gobierno?', a: 'No. Tu información personal es 100% confidencial. Nunca la compartimos con ICE, la migra ni ninguna agencia gubernamental sin orden judicial. Cumplimos con la ley HIPAA y todas las regulaciones estatales de privacidad de seguros. Tu seguridad y privacidad son nuestra prioridad absoluta.' },
  { n: '05', q: '¿Puedo tener seguro de vida siendo inmigrante o indocumentado?', a: 'Sí. Los inmigrantes, incluyendo personas indocumentadas, residentes y titulares de visas, pueden contratar seguro de vida en EE.UU. sin SSN. Aceptamos ITIN. Nuestros planes con Living Benefits te permiten acceder al dinero mientras sigues vivo si te diagnostican una enfermedad grave. Sujeto a términos y condiciones.' },
  { n: '06', q: '¿Cuánto cuesta el seguro de auto para inmigrantes en EE.UU.?', a: 'El seguro de auto comienza desde $89/mes, dependiendo del estado, el vehículo, el historial de manejo y el tipo de cobertura. Usar ITIN en vez de SSN no afecta significativamente el precio. Cotiza gratis en menos de 90 segundos y un asesor bilingüe te contacta en 15 minutos con opciones personalizadas.' },
  { n: '07', q: '¿El seguro de salud cubre a toda mi familia sin número de seguro social?', a: 'Sí. Ofrecemos planes de salud individuales y familiares que aceptan ITIN. Tu cónyuge, hijos y dependientes pueden estar cubiertos sin necesidad de SSN. Nuestros asesores en español te explican qué cubre cada plan, los deducibles y los copagos antes de que firmes nada. Sujeto a términos y condiciones.' },
  { n: '08', q: '¿Qué pasa si tengo un accidente de auto sin seguro siendo inmigrante?', a: 'Manejar sin seguro en EE.UU. puede resultar en multas de $150 a $5,000 según el estado, suspensión de licencia, embargo del vehículo y responsabilidad civil personal por todos los daños causados. Siendo inmigrante, esto también puede complicar tu situación legal. El seguro mínimo obligatorio te protege a ti y a otros conductores.' },
];

export const FAQ_EN = [
  { n: '01', q: 'Can I get car insurance without a Social Security Number?', a: 'Yes. You can get car insurance using an ITIN (Individual Taxpayer Identification Number) instead of a Social Security Number. At Maria Fernanda Insurance Consulting, we accept ITIN for all coverage types — auto, life, health, dental, and more. No SSN is ever required to get a quote or enroll in a plan.', open: true },
  { n: '02', q: 'Can undocumented immigrants get car insurance in the United States?', a: 'Yes. Undocumented immigrants can legally purchase car insurance in all 50 states. Most states require all drivers to carry minimum liability insurance regardless of immigration status. Driving without insurance can result in fines, license suspension, and personal financial liability for damages caused. We provide coverage regardless of your immigration status.' },
  { n: '03', q: 'What is ITIN insurance and how does it work?', a: 'ITIN insurance refers to insurance policies available to people who use an Individual Taxpayer Identification Number (ITIN) instead of a Social Security Number. The ITIN is issued by the IRS to individuals who do not qualify for an SSN. Here, we accept ITIN as valid identification for auto, life, health, pet, dental, and business insurance.' },
  { n: '04', q: 'Is my personal information shared with immigration authorities?', a: 'No. Your personal information is 100% confidential and is never shared with ICE, immigration authorities, or any government agency without a court order. We comply with HIPAA and all state insurance privacy regulations. Your data is protected with 256-bit bank-grade encryption.' },
  { n: '05', q: 'Can non-US citizens get life insurance in America?', a: 'Yes. Non-citizens — including undocumented immigrants, DACA recipients, visa holders, and permanent residents — can obtain life insurance in the United States without an SSN. We accept ITIN as valid identification. Our plans also include Living Benefits: access to your funds while you are still alive if diagnosed with a critical illness. Subject to terms and conditions.' },
  { n: '06', q: 'How much does car insurance cost for immigrants in the US?', a: 'Car insurance for immigrants in the US typically starts from $89/month, depending on your state, vehicle type, and driving history. Using an ITIN instead of an SSN does not significantly affect your premium. We work with multiple top-rated carriers to find the most competitive rate for your situation. Get a free quote in under 90 seconds.' },
  { n: '07', q: 'Does getting an insurance quote affect my credit score?', a: 'No. Getting a quote from Maria Fernanda Insurance Consulting does not affect your credit score. We do not require a credit check to provide you with a quote or to enroll in most plans. You can explore all your options with zero impact on your credit.' },
  { n: '08', q: 'What languages do your insurance agents speak?', a: 'All Maria Fernanda Insurance Consulting agents are fully bilingual in English and Spanish. You can communicate with your agent in whichever language you prefer — we adapt to you. There are no additional fees for bilingual service. Our agents are available by phone, email, and chat.' },
];

export const HERO_VIDEOS = [
  { src: '/videos/hero1.mp4', startTime: 2 },
  { src: '/videos/hero2.mp4', startTime: 10 },
  { src: '/videos/hero3.mp4', startTime: 0 },
];
