'use client';
import InsurancePage, { type InsurancePageConfig } from '@/components/InsurancePage';
import { Truck, WarningDiamond, Certificate, Users, Buildings } from '@phosphor-icons/react';

const configEs: InsurancePageConfig = {
  quoteType: 'AutoComercial',
  badgeIcon: Truck,
  badge: 'Uber · Lyft · DoorDash · Contratistas · Flotas · Cotización gratis',
  heroLine1: 'Seguro de Auto Comercial',
  heroItalic: 'tu póliza personal no te cubre cuando vas a trabajar',
  heroSubtitle: 'Tu aseguradora lo sabe. No te lo dijo. Cuando tienes un accidente y revisan el GPS o el historial de la app, la respuesta llega rápido: uso comercial, reclamo denegado. El costo promedio de un reclamo de lesión a terceros es $27,373. Sin la cobertura correcta, ese número es tuyo.',
  trustBadges: ['Gig workers', 'Contratistas y flotas', '10+ aseguradoras', 'Cotización gratis'],
  priceFrom: 'Desde $110/mes',
  eligibilityTitle: 'Si tu vehículo trabaja, necesita el seguro correcto',
  eligibilityText: 'Cualquier uso de tu vehículo para generar ingresos lo convierte en vehículo comercial ante tu aseguradora. No importa si es tiempo completo o unas horas a la semana.',
  eligibilityItems: [
    'Conductores de Uber, Lyft y plataformas de transporte',
    'Repartidores de DoorDash, Uber Eats, Instacart y Amazon Flex',
    'Plomeros, electricistas, techadores y contratistas de construcción',
    'Servicios de limpieza y mantenimiento con vans',
    'Paisajistas con pickups o trailers',
    'Empresas con dos o más vehículos de trabajo',
  ],
  features: [
    {
      icon: WarningDiamond,
      title: 'Tres momentos. Solo uno te cubre si usas apps.',
      desc: 'Cuando la app está encendida esperando un viaje, tu seguro personal no cubre. DoorDash no te cubre cuando vas al restaurante a buscar el pedido. Instacart no cubre a sus conductores en ningún momento. Solo durante la entrega o viaje activo activa la plataforma cobertura completa. Todo lo demás es responsabilidad tuya directa.',
    },
    {
      icon: Truck,
      title: 'La troca de trabajo no es un auto personal',
      desc: 'Si usas tu pickup, van o camioneta para ir a trabajos, transportar herramientas o llevar empleados, tu póliza personal puede ser inválida en un accidente. 1 de cada 3 trabajadores de construcción en USA es hispano. La mayoría opera con pólizas personales en vehículos de trabajo. Cuando la aseguradora investiga, el GPS, las herramientas y los pasajeros son evidencia suficiente para negar el reclamo completo.',
    },
    {
      icon: Users,
      title: 'Progressive solo vende Progressive. Nosotros comparamos 10+.',
      desc: 'Si contratas directo con una aseguradora, solo ves sus planes. Nosotros comparamos cada opción disponible para tu tipo de vehículo y uso. Un conductor de apps puede agregar cobertura desde $15 al mes sobre su póliza actual. Un contratista con pickup paga en promedio entre $177 y $285 al mes. Encontramos la opción correcta antes de recomendarte nada.',
    },
  ],
  coverageItems: [
    'Responsabilidad civil durante uso comercial del vehículo',
    'Colisión y daños al vehículo durante jornada de trabajo',
    'Cobertura en Período 1 de rideshare, el hueco que Uber no cubre',
    'DoorDash, Instacart y Amazon Flex: cubre tu propio vehículo',
    'Robo del vehículo de trabajo',
    'Conductores adicionales y empleados incluidos',
    'Flotas de 2 o más vehículos',
    'Certificado de Seguro (COI) en 24 horas',
  ],
  industrySections: [
    {
      emoji: '🚗',
      industry: 'Uber / Lyft',
      highlight: 'Cubre los 3 períodos, incluyendo cuando esperas',
      coverages: [
        'Cobertura mientras esperas tu próximo viaje',
        'Responsabilidad hasta $1M durante viaje activo',
        'Protección si la plataforma niega el reclamo',
      ],
    },
    {
      emoji: '📦',
      industry: 'DoorDash / Instacart / Uber Eats',
      highlight: 'La plataforma no te cubre cuando vas al pickup',
      coverages: [
        'Cobertura durante el trayecto al restaurante',
        'Instacart: protección completa donde la plataforma no cubre nada',
        'Amazon Flex y todas las apps de entrega',
      ],
    },
    {
      emoji: '🔧',
      industry: 'Contratistas y oficios',
      highlight: 'La troca de trabajo necesita póliza de trabajo',
      coverages: [
        'Uso en jobsites y traslados de trabajo',
        'Herramientas cubiertas si las roban del vehículo',
        'Empleados como conductores adicionales incluidos',
      ],
    },
    {
      emoji: '🚐',
      industry: 'Vans de limpieza y servicios',
      highlight: 'Empleados, equipo y responsabilidad en un plan',
      coverages: [
        'Vans tipo Transit, Sprinter y ProMaster',
        'Múltiples conductores en una sola póliza',
        'COI en 24 horas para property managers',
      ],
    },
    {
      emoji: '🚛',
      industry: 'Flotas de 2 o más vehículos',
      highlight: 'Un solo agente para toda la flota',
      coverages: [
        'Ahorro por volumen desde 2 vehículos',
        'Un solo pago mensual para toda la operación',
        'Revisión anual incluida',
      ],
    },
  ],
  steps: [
    {
      title: 'Cuéntanos cómo usas tu vehículo',
      desc: 'App de entrega, trabajo por tu cuenta o flota de negocio. Cinco minutos es suficiente para saber exactamente qué necesitas y cuánto debería costar.',
    },
    {
      title: 'Comparamos 10+ aseguradoras para tu situación específica',
      desc: 'No todas las aseguradoras cubren el mismo tipo de uso comercial al mismo precio. Encontramos la opción correcta para tu vehículo, tu uso y tu estado.',
    },
    {
      title: 'Cobertura activa y alguien a quien llamar cuando la necesitas',
      desc: 'Te acompañamos hasta que la póliza está activa. Si tienes un accidente, estamos disponibles para ayudarte con el reclamo. La mayoría de agentes desaparece después de la venta.',
    },
  ],
  testimonials: [
    {
      name: 'Miguel R.',
      location: 'Miami, Florida',
      text: 'Llevaba dos años manejando para DoorDash con mi seguro personal. Un accidente pequeño y la aseguradora revisó el historial de la app. Reclamo denegado. Pagué $4,200 de mi bolsillo. Ahora tengo la cobertura correcta por $89 al mes. La diferencia es enorme.',
    },
    {
      name: 'Carmen J.',
      location: 'Houston, Texas',
      text: 'Tengo una empresa de limpieza con dos vans y empleados que las manejan. No sabíamos que la póliza personal no los cubría. Un accidente con una van de trabajo nos hubiera costado el negocio completo. Ahora tenemos las dos vans aseguradas correctamente por $310 al mes.',
    },
    {
      name: 'Andrés V.',
      location: 'Los Angeles, California',
      text: 'Soy electricista. Mi pickup va a todos mis trabajos cargada de herramientas. Mi agente me mostró exactamente por qué el seguro personal no alcanzaba. Ahora tengo póliza comercial, mis herramientas están cubiertas y pago $198 al mes.',
    },
  ],
  faq: [
    {
      q: '¿Mi seguro personal me cubre si tengo un accidente manejando para DoorDash o Uber?',
      a: 'No. Los contratos de seguro personal tienen una cláusula de exclusión por uso comercial. Cuando abres la app de Uber, DoorDash o cualquier plataforma de trabajo, tu vehículo se convierte en herramienta de trabajo. Si tienes un accidente, la aseguradora revisa el historial del GPS o de la app y puede rechazar el reclamo completo. El seguro comercial cubre explícitamente ese uso.',
    },
    {
      q: '¿Qué son los tres períodos de cobertura en apps de rideshare y por qué importan?',
      a: 'Período 0 (app apagada): tu seguro personal cubre normalmente. Período 1 (app encendida, esperando pedido): tu seguro personal puede rechazar el reclamo. Uber y Lyft solo ofrecen $50,000 por persona en este período y no cubren tu propio vehículo. Períodos 2 y 3 (viaje activo o con pasajero): la plataforma activa hasta $1 millón en responsabilidad, pero el deducible de colisión puede ser de $2,500. El seguro comercial cierra todos esos huecos.',
    },
    {
      q: '¿Instacart me cubre si tengo un accidente durante una entrega?',
      a: 'No. Instacart no provee ningún seguro de auto a sus conductores. Eres completamente responsable con tu propia póliza personal, que probablemente excluye uso comercial. DoorDash cubre responsabilidad ante terceros durante entregas activas pero no cubre daños a tu propio vehículo. Amazon Flex ofrece cobertura durante bloques activos pero tampoco cubre tu auto. Solo un seguro comercial propio te protege en todos los casos.',
    },
    {
      q: '¿Necesito seguro comercial si solo manejo para apps unas horas a la semana?',
      a: 'Sí. Cualquier uso del vehículo para generar ingresos activa la exclusión comercial de tu póliza personal. No importa si son 5 horas a la semana o 50. Si la app está encendida y tienes un accidente, tu aseguradora personal puede negar el reclamo. La cobertura comercial para gig workers puede comenzar desde $15 al mes adicional sobre tu póliza actual.',
    },
    {
      q: '¿Cuánto cuesta el seguro de auto comercial para un contratista?',
      a: 'Un contratista con pickup paga en promedio entre $177 y $285 al mes. Una van de servicios o limpieza cuesta entre $189 y $270 al mes por vehículo. El precio depende del tipo de vehículo, el estado, el historial del conductor y el tipo de trabajo. Comparamos 10+ aseguradoras para encontrar la mejor opción para tu situación específica.',
    },
    {
      q: '¿Me pueden cancelar el seguro personal por manejar para apps?',
      a: 'Sí. Algunas aseguradoras han cancelado pólizas personales a conductores de apps cuando detectaron uso comercial. Si te cancelan por uso no declarado, eso puede quedar en tu historial y hacer que tu siguiente póliza cueste entre 40% y 60% más. Es mejor declarar el uso comercial y tener la cobertura correcta desde el inicio.',
    },
    {
      q: '¿Puedo asegurar varios vehículos en una sola póliza?',
      a: 'Sí. Las pólizas de flota cubren 2 o más vehículos comerciales e incluyen conductores adicionales y empleados. Generalmente cuestan menos por vehículo que pólizas individuales y simplifican la administración de tu negocio.',
    },
    {
      q: '¿Qué diferencia hay entre un endoso rideshare y una póliza comercial completa?',
      a: 'Un endoso rideshare es un añadido a tu póliza personal que cubre el Período 1 y cuesta entre $15 y $30 al mes adicional. Es suficiente para conductores de Uber o Lyft de tiempo parcial. Una póliza comercial completa cubre todos los períodos, todos los tipos de vehículos y todos los usos comerciales. Te recomendamos cuál conviene según las horas que manejas y el tipo de trabajo.',
    },
  ],
  ctaTitle: 'No dejes que un accidente corte tu ingreso',
  ctaItalic: 'cotiza la cobertura correcta hoy',
  ctaSubtitle: 'Gig workers, contratistas y flotas. Sin compromiso.',
  ctaButton: 'Cotizar gratis',
  theme: 'orange',
  schema: {
    description: 'Seguro de auto comercial para hispanos. Uber, Lyft, DoorDash, Instacart, contratistas y flotas. Agente independiente compara 10+ aseguradoras. COI en 24 horas. Desde $110 al mes.',
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
