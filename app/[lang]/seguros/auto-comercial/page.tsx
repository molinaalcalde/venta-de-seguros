'use client';
import InsurancePage, { type InsurancePageConfig } from '@/components/InsurancePage';
import { Truck, WarningDiamond, Certificate, Users } from '@phosphor-icons/react';

const configEs: InsurancePageConfig = {
  quoteType: 'AutoComercial',
  badgeIcon: Truck,
  badge: 'Uber · Lyft · DoorDash · Delivery · Sin SSN',
  heroLine1: 'Seguro de Auto Comercial',
  heroItalic: 'DoorDash no cubre tu carro — este sí',
  heroSubtitle: 'Instacart no te cubre. Grubhub tampoco. Ninguna app de delivery cubre daños a tu propio vehículo. Y si tienes un accidente durante una entrega, tu seguro personal lo rechaza por "uso comercial". Tu carro queda inutilizado y pierdes tu única herramienta de trabajo — sin ningún ingreso. El seguro comercial cierra ese hueco. Sin SSN requerido.',
  trustBadges: ['Sin SSN — ITIN o EIN', 'Desde $110/mes', 'COI en 24 horas', 'Uber · Lyft · DoorDash'],
  priceFrom: 'Desde $110/mes',
  eligibilityTitle: '¿Usas tu vehículo para trabajar? Necesitas seguro comercial',
  eligibilityText: 'Casi todos los contratos de seguro personal incluyen una cláusula de exclusión por uso comercial. Si tienes un accidente mientras trabajas, tu seguro personal puede negar el reclamo. Muchos conductores lo aprenden en el peor momento.',
  eligibilityItems: [
    'Conductores de Uber, Lyft, HopSkipDrive y plataformas de rideshare',
    'Delivery: DoorDash, Instacart, Uber Eats, Amazon Flex, restaurantes',
    'Contratistas: construcción, plomería, electricidad, landscaping, pintura',
    'Food trucks, catering y negocios de comida con vehículo de trabajo',
    'Empresas de limpieza, mudanzas y servicios al hogar',
  ],
  features: [
    {
      icon: WarningDiamond,
      title: 'Las 3 Fases del Rideshare — y Cuándo Estás Desprotegido',
      desc: 'Fase 0 (app apagada): tu seguro personal cubre normalmente. Fase 1 (app encendida, esperando pedido): tu seguro personal puede RECHAZAR el reclamo — Uber/Lyft solo ofrecen $50,000/persona y $25,000 en daños a propiedad, sin cobertura para tu auto. Fase 2-3 (en viaje activo): Uber/Lyft cubren hasta $1 millón de liability — pero la colisión de tu propio auto tiene un deducible de $2,500 y solo aplica si tú ya tienes esa cobertura. El seguro comercial cierra todos esos huecos.',
    },
    {
      icon: Certificate,
      title: 'COI en 24 Horas para No Perder Ningún Contrato',
      desc: 'Contratistas generales, edificios corporativos y clientes grandes exigen un Certificado de Seguro (COI) antes de dejarte entrar a trabajar. Sin COI, pierdes el contrato ese mismo día. Lo emitimos en menos de 24 horas de que tu póliza esté activa.',
    },
    {
      icon: Users,
      title: 'Tu Flota Completa — Empleados Incluidos',
      desc: 'Asegura 2, 5 o 20 vehículos en una sola póliza. Agrega conductores adicionales y empleados. Una sola póliza de flota es más económica y más simple de administrar que pólizas individuales por vehículo.',
    },
  ],
  coverageItems: [
    'Responsabilidad civil comercial — daños a terceros durante trabajo',
    'Colisión durante jornada laboral',
    'Daños al vehículo de trabajo y carga transportada',
    'Robo del vehículo de trabajo',
    'Conductores adicionales y empleados',
    'Cobertura en Fase 1 de rideshare (hueco de Uber/Lyft)',
    'Flotillas de 2 o más vehículos',
    'Certificado de Seguro (COI) en 24 horas',
  ],
  steps: [
    {
      title: 'Cuéntanos sobre tu trabajo y vehículo',
      desc: 'Tipo de trabajo, vehículo y número de conductores. Sin SSN — aceptamos ITIN o EIN del negocio.',
    },
    {
      title: 'Cotización ajustada a tu industria — no genérica',
      desc: 'Un conductor de Uber, un contratista y una empresa de limpieza tienen riesgos distintos. Te damos precio real según tu actividad específica.',
    },
    {
      title: 'Póliza activa y COI disponible en 24 horas',
      desc: 'Podés presentar el Certificado de Seguro a clientes y contratistas de inmediato. Sin esperas.',
    },
  ],
  testimonials: [
    {
      name: 'Ernesto P.',
      location: 'Houston, Texas',
      text: 'Soy contratista de construcción. Me pidieron un COI para entrar a un proyecto grande. Me lo tuvieron listo al otro día. Sin ese papel no hubiera podido entrar al trabajo y hubiera perdido el contrato.',
    },
    {
      name: 'Ramón G.',
      location: 'Phoenix, Arizona',
      text: 'Tuve un accidente yendo a una entrega con mi seguro personal. Me rechazaron el reclamo porque era "uso comercial". Tuve que pagar los daños de mi bolsillo. Ahora tengo el comercial y trabajo tranquilo.',
    },
    {
      name: 'Diana L.',
      location: 'Chicago, Illinois',
      text: 'Tengo 3 vans de limpieza. Antes nadie me aseguraba la flota sin SSN. Aquí lo hicieron sin problema — más rápido y más barato que en otros lugares.',
    },
  ],
  faq: [
    {
      q: '¿Por qué mi seguro personal no me cubre cuando trabajo con Uber o DoorDash?',
      a: 'Los contratos de seguro personal incluyen una cláusula de "exclusión por uso comercial". Cuando abres la app de Uber, Lyft o DoorDash, tu vehículo pasa a ser un instrumento de trabajo. Si tienes un accidente en ese momento, tu aseguradora puede revisar los registros de la app y rechazar el reclamo por "uso comercial no declarado". El seguro comercial cubre explícitamente ese uso.',
    },
    {
      q: '¿Qué cubre Uber y Lyft exactamente durante las 3 fases?',
      a: 'Fase 0 (app apagada): tu seguro personal cubre normalmente. Fase 1 (app activa esperando viaje): Uber/Lyft ofrecen cobertura limitada de $50,000 por persona, $100,000 por accidente en lesiones y $25,000 en daños a propiedad — pero tu seguro personal puede rechazar el reclamo. Fase 2-3 (en viaje activo o con pasajero): Uber/Lyft cubren hasta $1 millón en responsabilidad. El seguro comercial cierra el hueco en Fase 1.',
    },
    {
      q: '¿DoorDash, Instacart o Amazon Flex me cubren si tengo un accidente?',
      a: 'La respuesta corta: ninguna cubre tu vehículo. DoorDash cubre daños a terceros durante entregas activas, pero NO cubre daños a tu propio auto. Instacart directamente no provee ningún seguro de auto — eres 100% responsable. Amazon Flex ofrece $1 millón de liability durante bloques activos, pero tampoco cubre tu vehículo. Si tu carro queda inutilizado por un accidente, pierdes tu herramienta de trabajo. Solo un seguro comercial propio cubre tu auto.',
    },
    {
      q: '¿Puedo contratar seguro comercial con ITIN?',
      a: 'Sí. Aceptamos ITIN para contratar seguros de auto comerciales. Si el seguro va a nombre de tu negocio, también puedes usar el EIN del negocio en lugar del SSN personal.',
    },
    {
      q: '¿Qué es un COI y por qué me lo exigen?',
      a: 'Un COI (Certificate of Insurance) prueba que tienes seguro activo con los límites requeridos. Contratistas generales, propietarios de edificios y clientes corporativos lo exigen antes de dejarte trabajar en su propiedad. Sin COI, pierdes contratos importantes. Lo emitimos en menos de 24 horas.',
    },
    {
      q: '¿Puedo asegurar múltiples vehículos en una sola póliza?',
      a: 'Sí. Las pólizas de flota cubren 2 o más vehículos comerciales. Generalmente resultan en ahorro por vehículo comparado con pólizas individuales y simplifican la administración de tu seguro.',
    },
    {
      q: '¿Mi información se comparte con migración?',
      a: 'No. Tu información es 100% confidencial. Nunca la compartimos con ICE ni ninguna agencia gubernamental sin orden judicial.',
    },
  ],
  ctaTitle: 'Tu negocio merece',
  ctaItalic: 'protección real',
  ctaSubtitle: 'Seguro comercial desde $110/mes. Sin SSN. COI en 24 horas.',
  ctaButton: 'Ver mi precio gratis',
  theme: 'orange',
  schema: {
    description: 'Seguro de auto comercial para latinos — Uber, Lyft, DoorDash, contratistas, delivery y flotas. Sin SSN, acepta ITIN y EIN. COI en 24 horas. Desde $110/mes.',
    price: '110',
  },
};

const configEn: InsurancePageConfig = {
  quoteType: 'AutoComercial',
  badgeIcon: Truck,
  badge: 'Uber · Lyft · DoorDash · Delivery · No SSN',
  heroLine1: 'Commercial Auto Insurance',
  heroItalic: 'because your personal insurance won\'t cover you while working',
  heroSubtitle: 'You\'re driving for DoorDash and have an accident. Your personal insurer reviews the claim and denies it: "commercial use not covered." That means you pay out of pocket — the other driver\'s damages, your car repairs, medical bills. Commercial insurance closes that gap. No SSN required.',
  trustBadges: ['No SSN — ITIN or EIN', 'From $110/mo', 'COI in 24 hours', 'Uber · Lyft · DoorDash'],
  priceFrom: 'From $110/mo',
  eligibilityTitle: 'Do you use your vehicle for work? You need commercial insurance',
  eligibilityText: 'Almost every personal insurance contract includes a commercial use exclusion clause. If you have an accident while working, your personal policy can deny the claim. Many drivers learn this at the worst possible moment.',
  eligibilityItems: [
    'Uber, Lyft, HopSkipDrive, and rideshare platform drivers',
    'Delivery: DoorDash, Instacart, Uber Eats, Amazon Flex, restaurants',
    'Contractors: construction, plumbing, electrical, landscaping, painting',
    'Food trucks, catering, and food businesses with work vehicles',
    'Cleaning companies, movers, and home service businesses',
  ],
  features: [
    {
      icon: WarningDiamond,
      title: 'The 3 Rideshare Phases — and When You\'re Unprotected',
      desc: 'Period 0 (app off): your personal insurance covers you normally. Period 1 (app on, waiting for a request): your personal insurer may DENY the claim — Uber/Lyft only offer $50K/person and $25K in property damage, with no coverage for your own vehicle. Periods 2-3 (active trip or with passenger): Uber/Lyft cover up to $1 million in liability — but collision coverage for your vehicle has a $2,500 deductible and only applies if you already carry it. Commercial insurance closes all those gaps.',
    },
    {
      icon: Certificate,
      title: 'COI in 24 Hours — Never Lose a Job',
      desc: 'General contractors, corporate buildings, and large clients require a Certificate of Insurance (COI) before letting you work on their property. Without a COI, you lose the contract on the spot. We issue it in less than 24 hours of your policy going active.',
    },
    {
      icon: Users,
      title: 'Your Full Fleet — Employees Included',
      desc: 'Insure 2, 5, or 20 vehicles under one policy. Add additional drivers and employees. A single fleet policy is more affordable and simpler to manage than individual policies per vehicle.',
    },
  ],
  coverageItems: [
    'Commercial liability — third-party damages during work',
    'Collision during work hours',
    'Work vehicle and cargo damage',
    'Work vehicle theft',
    'Additional drivers and employees',
    'Rideshare Period 1 coverage (Uber/Lyft gap)',
    'Fleet policies for 2+ vehicles',
    'Certificate of Insurance (COI) in 24 hours',
  ],
  steps: [
    {
      title: 'Tell us about your work and vehicle',
      desc: 'Type of work, vehicle, and number of drivers. No SSN — we accept ITIN or business EIN.',
    },
    {
      title: 'Industry-specific quote — not a generic estimate',
      desc: 'An Uber driver, a contractor, and a cleaning company have different risks. We give you a real price for your specific activity.',
    },
    {
      title: 'Active policy and COI in 24 hours',
      desc: 'You can present your Certificate of Insurance to clients and contractors immediately. No waiting.',
    },
  ],
  testimonials: [
    {
      name: 'Ernesto P.',
      location: 'Houston, Texas',
      text: 'I\'m a construction contractor. They required a COI to enter a large project. I had it ready the next day. Without that document I would have lost the contract on the spot.',
    },
    {
      name: 'Ramón G.',
      location: 'Phoenix, Arizona',
      text: 'I had an accident while making a delivery with my personal insurance. They denied my claim because it was "commercial use." I had to pay the damages out of pocket. Now I have commercial coverage and work without worry.',
    },
    {
      name: 'Diana L.',
      location: 'Chicago, Illinois',
      text: 'I have 3 cleaning vans. Before, nobody would insure my fleet without an SSN. Here they did it without a problem — faster and cheaper than anywhere else.',
    },
  ],
  faq: [
    {
      q: 'Why won\'t my personal insurance cover me while working for Uber or DoorDash?',
      a: 'Personal insurance contracts include a "commercial use exclusion" clause. When you open the Uber, Lyft, or DoorDash app, your vehicle becomes a work tool. If you have an accident at that moment, your insurer can check app records and deny the claim for "undisclosed commercial use." Commercial insurance explicitly covers that use.',
    },
    {
      q: 'What exactly do Uber and Lyft cover during the 3 periods?',
      a: 'Period 0 (app off): your personal insurance covers normally. Period 1 (app on, waiting for a ride): Uber/Lyft offer limited coverage of $50K per person, $100K per accident in bodily injury, and $25K in property damage — but your personal insurer may still deny the claim. Periods 2-3 (active trip or with passenger): Uber/Lyft cover up to $1 million in liability. Commercial insurance covers the gap in Period 1.',
    },
    {
      q: 'Do DoorDash, Instacart, or Amazon Flex cover me if I have an accident?',
      a: 'Short answer: none of them cover your vehicle. DoorDash covers third-party damages during active deliveries, but does NOT cover damage to your own car. Instacart provides zero auto insurance — you\'re 100% responsible. Amazon Flex offers $1 million in liability during active delivery blocks, but also doesn\'t cover your vehicle. If your car is put out of service by an accident, you lose your work tool. Only your own commercial policy covers your vehicle.',
    },
    {
      q: 'Can I get commercial auto insurance with an ITIN?',
      a: 'Yes. We accept ITIN for commercial auto insurance. If the policy is in your business\'s name, you can also use the business EIN instead of a personal SSN.',
    },
    {
      q: 'What is a COI and why do clients require it?',
      a: 'A COI (Certificate of Insurance) proves you have active insurance with required coverage limits. General contractors, building owners, and corporate clients require it before letting you work on their property. Without a COI, you lose important contracts. We issue it in less than 24 hours.',
    },
    {
      q: 'Can I insure multiple vehicles under one policy?',
      a: 'Yes. Fleet policies cover 2 or more commercial vehicles. They generally result in savings per vehicle compared to individual policies and simplify the management of your insurance.',
    },
  ],
  ctaTitle: 'Your business deserves',
  ctaItalic: 'real protection',
  ctaSubtitle: 'Commercial insurance from $110/mo. No SSN. COI in 24 hours.',
  ctaButton: 'See my free quote',
  theme: 'orange',
  schema: {
    description: 'Commercial auto insurance for Latinos — Uber, Lyft, DoorDash, contractors, delivery, and fleets. No SSN, accepts ITIN and EIN. COI in 24 hours. From $110/mo.',
    price: '110',
  },
};

export default function AutoComercialPage({ params }: { params: { lang: string } }) {
  const config = params.lang === 'en' ? configEn : configEs;
  return <InsurancePage config={config} />;
}
