'use client';
import InsurancePage, { type InsurancePageConfig } from '@/components/InsurancePage';
import { Truck, WarningDiamond, Certificate, Users, Buildings } from '@phosphor-icons/react';

const configEs: InsurancePageConfig = {
  quoteType: 'AutoComercial',
  badgeIcon: Truck,
  badge: 'Uber · DoorDash · Contratistas · Flotas · Sin SSN',
  heroLine1: 'Seguro de Auto Comercial',
  heroItalic: 'el carro es tu negocio — protégelo',
  heroSubtitle: 'Abriste el app. Tuviste un accidente. La aseguradora revisó el GPS: "uso comercial — reclamo denegado." Sin carro no trabajas. Sin trabajo no pagas la renta. El 30% de los latinos en USA trabajan en gig economy — 4 veces más que otros grupos. Y la mayoría no sabe que su seguro personal los excluye en ese momento exacto. Sin SSN requerido.',
  trustBadges: ['Sin SSN — ITIN o EIN', 'Desde $110/mes', 'COI en 24 horas', 'Info 100% confidencial'],
  priceFrom: 'Desde $110/mes',
  eligibilityTitle: 'Si usas tu carro para ganar dinero, tu seguro personal no te cubre',
  eligibilityText: 'Todos los contratos de seguro personal tienen una cláusula de exclusión por uso comercial. No es letra chica — es la razón por la que miles de conductores pagan de su bolsillo cada año. El seguro comercial cubre explícitamente lo que el personal no cubre.',
  eligibilityItems: [
    'Conductores de Uber, Lyft, HopSkipDrive y rideshare',
    'Delivery: DoorDash, Instacart, Uber Eats, Amazon Flex, restaurantes',
    'Contratistas: construcción, plomería, electricidad, landscaping, pintura',
    'Food trucks, catering y negocios de comida con vehículo propio',
    'Empresas de limpieza, mudanzas y servicios al hogar',
  ],
  features: [
    {
      icon: WarningDiamond,
      title: 'El Momento Exacto en que Quedas Sin Cobertura',
      desc: 'Fase 0 (app apagada): tu seguro personal funciona normal. Fase 1 (app activa, esperando pedido): tu seguro personal PUEDE RECHAZAR el reclamo — y Uber/Lyft solo ofrecen $50,000 por persona, sin cubrir tu propio vehículo. Fases 2-3 (en viaje o con pasajero): Uber/Lyft cubren hasta $1M en responsabilidad, pero la colisión de tu carro tiene deducible de $2,500 y solo aplica si ya tenías esa cobertura. El seguro comercial cierra todos esos huecos.',
    },
    {
      icon: Certificate,
      title: 'COI en 24 Horas — No Pierdas el Contrato por un Papel',
      desc: 'Para entrar a trabajar en edificios corporativos, proyectos de construcción o con clientes grandes, te piden un Certificado de Seguro (COI) antes de empezar. Sin ese papel, pierdes el contrato ese mismo día. Lo emitimos en menos de 24 horas desde que tu póliza está activa.',
    },
    {
      icon: Users,
      title: 'Tu Flota Completa en Una Sola Póliza',
      desc: '2 vans de limpieza, 5 pickups de construcción o 20 vehículos de delivery — todo en una sola póliza. Agrega conductores adicionales y empleados. Una póliza de flota es más económica por vehículo y mucho más simple de administrar que pólizas individuales.',
    },
  ],
  coverageItems: [
    'Responsabilidad civil comercial — daños a terceros durante trabajo',
    'Colisión y daños al vehículo durante jornada laboral',
    'Cobertura en Fase 1 de rideshare — el hueco que Uber no cubre',
    'DoorDash, Instacart y Amazon Flex: cubre tu propio vehículo',
    'Robo del vehículo de trabajo',
    'Conductores adicionales y empleados incluidos',
    'Flotillas de 2 o más vehículos',
    'Certificado de Seguro (COI) en 24 horas',
  ],
  steps: [
    {
      title: 'Cuéntanos cómo usas tu vehículo',
      desc: 'Tipo de trabajo, vehículo y número de conductores. Sin SSN — aceptamos ITIN o EIN del negocio. Todo confidencial.',
    },
    {
      title: 'Cotización real según tu industria',
      desc: 'Un conductor de Uber, un contratista y una empresa de limpieza tienen riesgos distintos. Tu precio refleja exactamente tu actividad — no una estimación genérica.',
    },
    {
      title: 'Póliza activa y COI listo en 24 horas',
      desc: 'Presénta el Certificado de Seguro a tus clientes y contratistas desde el día siguiente. Sin esperas, sin trámites complicados.',
    },
  ],
  testimonials: [
    {
      name: 'Ramón G.',
      location: 'Phoenix, Arizona',
      text: 'Tuve un accidente yendo a una entrega con mi seguro personal. Me rechazaron el reclamo — "uso comercial". Tuve que pagar $4,200 de mi bolsillo. Ese mes no pude pagar la renta. Ahora tengo el comercial y trabajo tranquilo.',
    },
    {
      name: 'Ernesto P.',
      location: 'Houston, Texas',
      text: 'Soy contratista de construcción. Me pidieron el COI para entrar a un proyecto de $80,000. Me lo tuvieron listo al otro día. Sin ese papel hubiera perdido el contrato más grande del año.',
    },
    {
      name: 'Diana L.',
      location: 'Chicago, Illinois',
      text: 'Tengo 3 vans de limpieza y 4 empleadas. Antes nadie me aseguraba la flota sin SSN. Aquí lo hicieron sin problema y más barato que en otros lugares. Ahora puedo trabajar con property managers grandes que exigen COI.',
    },
  ],
  faq: [
    {
      q: '¿Por qué mi seguro personal no me cubre cuando trabajo con Uber, DoorDash o Instacart?',
      a: 'Todos los contratos de seguro personal tienen una cláusula de "exclusión por uso comercial". Cuando abres el app de Uber, DoorDash o cualquier plataforma de trabajo, tu vehículo se convierte en instrumento de trabajo. Si tienes un accidente en ese momento, la aseguradora puede revisar los registros del GPS o de la app y rechazar el reclamo por "uso comercial no declarado". No es una excusa — es contractual. El seguro comercial cubre explícitamente ese uso.',
    },
    {
      q: '¿Qué cubre Uber y Lyft exactamente durante las 3 fases?',
      a: 'Fase 0 (app apagada): tu seguro personal cubre normalmente. Fase 1 (app activa, esperando pedido): Uber/Lyft ofrecen cobertura limitada de $50,000 por persona y $25,000 en daños a propiedad — pero tu seguro personal puede rechazar el reclamo al mismo tiempo. Fases 2-3 (viaje activo o con pasajero): Uber/Lyft cubren hasta $1 millón en responsabilidad civil, pero la colisión de tu propio auto tiene deducible de $2,500 y solo aplica si tú ya tenías esa cobertura contratada. El seguro comercial cierra el hueco de Fase 1 y protege tu vehículo en todas las fases.',
    },
    {
      q: '¿DoorDash, Instacart o Amazon Flex cubren mi vehículo si tengo un accidente?',
      a: 'Ninguna cubre tu vehículo. DoorDash cubre responsabilidad civil ante terceros durante entregas activas, pero NO cubre daños a tu propio auto. Instacart no provee ningún seguro de auto — eres 100% responsable. Amazon Flex ofrece $1 millón de liability durante bloques activos, pero tampoco cubre tu vehículo. Si tu carro queda inutilizado, perdiste tu herramienta de trabajo. Solo un seguro comercial propio cubre tu auto en todos los casos.',
    },
    {
      q: '¿Puedo contratar seguro comercial con ITIN?',
      a: 'Sí. Aceptamos ITIN para contratar seguros de auto comercial. Si el seguro va a nombre de tu negocio, también puedes usar el EIN del negocio en lugar del SSN personal. Tu información es 100% confidencial y nunca se comparte con ICE ni ninguna agencia gubernamental.',
    },
    {
      q: '¿Qué es un COI y por qué me lo exigen antes de trabajar?',
      a: 'Un COI (Certificate of Insurance) es un documento que prueba que tienes seguro activo con los límites de cobertura requeridos. Contratistas generales, propietarios de edificios, property managers y clientes corporativos lo exigen antes de dejarte trabajar en su propiedad. Sin COI pierdes el contrato en el momento. Lo emitimos en menos de 24 horas desde que tu póliza está activa.',
    },
    {
      q: '¿Puedo asegurar varios vehículos y empleados en una sola póliza?',
      a: 'Sí. Las pólizas de flota cubren 2 o más vehículos comerciales e incluyen conductores adicionales y empleados. Generalmente resultan en ahorro por vehículo comparado con pólizas individuales, y simplifican mucho la administración del seguro de tu negocio.',
    },
    {
      q: '¿Mi información se comparte con migración?',
      a: 'No. Tu información es 100% confidencial. Nunca la compartimos con ICE ni ninguna agencia gubernamental sin orden judicial específica. Lo que nos dices para contratar tu póliza es estrictamente privado.',
    },
  ],
  ctaTitle: 'Tu carro es tu negocio —',
  ctaItalic: 'protégelo hoy',
  ctaSubtitle: 'Desde $110/mes. Sin SSN. COI en 24 horas. Tu asesora en español.',
  ctaButton: 'Ver mi precio gratis',
  theme: 'orange',
  schema: {
    description: 'Seguro de auto comercial para latinos — Uber, Lyft, DoorDash, contratistas, delivery y flotas. Sin SSN, acepta ITIN y EIN. COI en 24 horas. Desde $110/mes. Info confidencial.',
    price: '110',
  },
};

const configEn: InsurancePageConfig = {
  quoteType: 'AutoComercial',
  badgeIcon: Truck,
  badge: 'Fleets · Contractors · Delivery · Hired & Non-Owned',
  heroLine1: 'Commercial Auto Insurance',
  heroItalic: 'your employee\'s personal policy won\'t protect your business',
  heroSubtitle: 'Your employee has an accident while driving to a job site in their personal car. Their insurer denies the claim — "commercial use." The injured party sues your business. Your general liability policy doesn\'t cover vehicles you don\'t own. That gap has a name: Hired & Non-Owned Auto. And most small business owners don\'t know it exists until it\'s too late.',
  trustBadges: ['Hired & Non-Owned Auto', 'COI in 24 hours', 'Fleet policies', 'From $110/mo'],
  priceFrom: 'From $110/mo',
  eligibilityTitle: 'If your business involves vehicles — owned or not — you need commercial auto',
  eligibilityText: 'Most small business owners assume their general liability policy or their employees\' personal insurance covers work-related driving. Both assumptions are wrong. The coverage gap is real and the liability exposure is personal.',
  eligibilityItems: [
    'Contractors using personal vehicles for client jobs (HNOA gap)',
    'Businesses with company-owned vans, trucks, or fleets',
    'Cleaning companies, landscapers, and home service businesses',
    'Food trucks, catering operations, and restaurant delivery',
    'Rideshare and delivery drivers who need commercial coverage',
  ],
  features: [
    {
      icon: Buildings,
      title: 'The Hired & Non-Owned Auto Gap That Exposes Your Business',
      desc: 'General Liability insurance does not cover vehicles — even when your employees drive their personal cars for your business. If they have an accident on a job run, their personal insurer denies it (commercial use exclusion), and the injured party comes after your business. Hired & Non-Owned Auto coverage closes that exact gap — protecting your business from liability created by vehicles you don\'t own or operate yourself.',
    },
    {
      icon: Certificate,
      title: 'COI in 24 Hours — Stop Losing Contracts Over Insurance',
      desc: 'Property managers, general contractors, and corporate clients require a Certificate of Insurance (COI) with specific commercial auto limits before you step foot on their property. No COI, no contract — that day. We issue yours in less than 24 hours of your policy going active, so you never lose a job over paperwork.',
    },
    {
      icon: Users,
      title: 'One Policy for Your Entire Operation',
      desc: 'Two cleaning vans, five contractor pickups, or a twenty-vehicle delivery fleet — one policy covers it all. Add employees as additional drivers. Fleet policies are more cost-effective per vehicle than individual policies and dramatically simplify your insurance administration.',
    },
  ],
  coverageItems: [
    'Hired & Non-Owned Auto (HNOA) — employees driving personal vehicles for work',
    'Company-owned vehicle liability and collision',
    'Fleet coverage for 2 or more vehicles',
    'Additional drivers and employees',
    'Cargo and equipment in transit',
    'Work vehicle theft',
    'Rideshare Period 1 gap coverage',
    'Certificate of Insurance (COI) in 24 hours',
  ],
  steps: [
    {
      title: 'Tell us about your business and vehicles',
      desc: 'Industry, number of vehicles, and whether employees use personal cars for work. We identify every gap in your current coverage.',
    },
    {
      title: 'Tailored quote for your specific operation',
      desc: 'A landscaping company with 3 trucks, a contractor with HNOA exposure, and a delivery fleet all have different risk profiles. Your quote reflects your actual situation.',
    },
    {
      title: 'Policy active and COI ready in 24 hours',
      desc: 'Present your Certificate of Insurance to clients and property managers the next day. No delays, no lost contracts.',
    },
  ],
  testimonials: [
    {
      name: 'Mike T.',
      location: 'Dallas, Texas',
      text: 'My landscaping crew uses their personal trucks to get to job sites. My agent pointed out that if any of them had an accident on the way to a client, my business could get sued and my GL wouldn\'t cover it. Got HNOA added to the policy the same week. That conversation saved me.',
    },
    {
      name: 'Sarah M.',
      location: 'Phoenix, Arizona',
      text: 'We have 5 cleaning vans. A property management company we wanted to work with required commercial auto on the COI with $1M limits. Had the policy and COI the next morning. Landed the contract that afternoon.',
    },
    {
      name: 'James R.',
      location: 'Houston, Texas',
      text: 'As a general contractor I subcontract a lot of work. I needed commercial auto plus HNOA to cover subcontractors using their personal vehicles. One policy, competitive price, COI issued same day I needed it.',
    },
  ],
  faq: [
    {
      q: 'What is Hired & Non-Owned Auto (HNOA) coverage and do I need it?',
      a: 'HNOA covers your business for liability when employees use their personal vehicles — or rented vehicles — for work purposes. If an employee runs an errand for your business and causes an accident, their personal auto policy will likely deny the claim (commercial use exclusion). The injured party then sues your business. Your general liability policy does not cover this. HNOA fills that gap. If any employee ever drives for your business — even occasionally — you need it.',
    },
    {
      q: 'Does my General Liability policy cover work-related vehicle accidents?',
      a: 'No. General Liability policies specifically exclude automobile liability. This is one of the most common and expensive coverage gaps for small businesses. GL covers bodily injury and property damage from your operations — but once a vehicle is involved, you need commercial auto or HNOA coverage. Many business owners discover this only after a claim is denied.',
    },
    {
      q: 'What is a COI and why do clients require it before I start work?',
      a: 'A Certificate of Insurance (COI) is a one-page document that proves your business has active insurance with the coverage types and limits required by the client. Property managers, general contractors, and corporate facilities require it before allowing contractors on-site. They\'re protecting themselves from liability if your team causes damage or injury on their property. Without a current COI matching their requirements, you don\'t get the contract. We issue COIs in under 24 hours.',
    },
    {
      q: 'Can I insure my whole fleet under one policy?',
      a: 'Yes. Fleet policies cover 2 or more commercial vehicles and typically cost less per vehicle than individual policies. You can add multiple drivers, employees, and vehicle types. Fleet policies also simplify your certificate management — one policy number for all COI requests.',
    },
    {
      q: 'What coverage do rideshare and delivery drivers actually need?',
      a: 'Personal auto policies exclude commercial use — when the app is on, your coverage may not apply. Uber and Lyft provide limited coverage in Period 1 (app on, no active ride) but leave significant gaps, especially for your own vehicle. DoorDash and Instacart don\'t cover your vehicle at all. A commercial auto policy fills every gap across all periods and platforms.',
    },
    {
      q: 'How fast can I get coverage and a COI?',
      a: 'In most cases, same day or next business day. Once we have your vehicle and business information, we bind coverage and issue your Certificate of Insurance within 24 hours. If you have an urgent contract deadline, tell us — we prioritize same-day issuance when needed.',
    },
  ],
  ctaTitle: 'Close the gap before',
  ctaItalic: 'someone else does',
  ctaSubtitle: 'Commercial auto from $110/mo. Fleet policies. HNOA. COI in 24 hours.',
  ctaButton: 'Get my coverage quote',
  theme: 'orange',
  schema: {
    description: 'Commercial auto insurance for small businesses — fleet coverage, Hired & Non-Owned Auto (HNOA), contractors, delivery, and rideshare drivers. COI in 24 hours. From $110/mo.',
    price: '110',
  },
};

export default function AutoComercialPage({ params }: { params: { lang: string } }) {
  const config = params.lang === 'en' ? configEn : configEs;
  return <InsurancePage config={config} />;
}
