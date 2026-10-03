'use client';
import InsurancePage, { type InsurancePageConfig } from '@/components/InsurancePage';
import { Truck, WarningDiamond, Users } from '@phosphor-icons/react';

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
  heroVideo: '/videos/comercial.mp4',
  schema: {
    description: 'Seguro de auto comercial para hispanos. Uber, Lyft, DoorDash, Instacart, contratistas y flotas. Agente independiente compara 10+ aseguradoras. COI en 24 horas. Desde $110 al mes.',
    price: '110',
  },
};

const configEn: InsurancePageConfig = {
  quoteType: 'AutoComercial',
  badgeIcon: Truck,
  badge: 'Business exclusion explained · 10+ carriers · COI in 24h · Claims support · Free quote',
  heroLine1: 'Commercial Auto Insurance',
  heroItalic: 'your personal auto policy has a business exclusion',
  heroSubtitle: 'Your insurer knows it. They don\'t volunteer it. The moment GPS data or app history shows you were working when the accident happened, personal policies deny the claim under the commercial use exclusion. The average third-party injury claim costs $27,373. Without the right coverage, that number is yours.',
  trustBadges: ['10+ carriers compared', 'COI in 24 hours', 'Contractors and fleets', 'From $110/mo'],
  priceFrom: 'From $110/mo',
  eligibilityTitle: 'If your vehicle earns money, it needs the right policy',
  eligibilityText: 'Any use of your vehicle to generate income makes it a commercial vehicle to your insurer. It does not matter if it is full time or a few hours a week. The exclusion is already written into your current policy.',
  eligibilityItems: [
    'Contractors and tradespeople who drive to job sites',
    'Gig drivers on Uber, Lyft, DoorDash, Instacart, or Amazon Flex',
    'Cleaning, landscaping, and home service businesses',
    'Small businesses with employees who drive personal cars for work',
    'Businesses with 2 or more company-owned vehicles',
  ],
  features: [
    {
      icon: WarningDiamond,
      title: 'The business exclusion your personal insurer will not volunteer',
      desc: 'Personal auto policies exclude commercial use in the fine print. When you have an accident and your insurer checks GPS data or app history, they have what they need to deny the claim. Uber and Lyft only cover your vehicle during an active ride. Period 1 (app on, waiting) is your responsibility. DoorDash does not cover your car at all. Instacart does not cover you in any period. A commercial policy closes every one of those gaps explicitly.',
    },
    {
      icon: Truck,
      title: 'When you file a claim, you call me directly. Not a 1-800 number.',
      desc: 'Progressive, Next Insurance, and every online-first carrier route you to a call center when something goes wrong. I am your agent before, during, and after the claim. If a carrier denies coverage, I escalate it. If you need a COI by tomorrow morning to keep a contract, I issue it today. That is not a promise most agents make because most agents disappear after the sale.',
    },
    {
      icon: Users,
      title: 'We compare 10+ carriers. Progressive only shows you one.',
      desc: 'If you go directly to Progressive, you see Progressive rates. An independent agent compares 10 or more carriers for your specific vehicle, industry, and state. A gig driver can add commercial coverage from $15 a month over their current policy. A contractor with a pickup averages $177 to $285 a month. We find the real number before recommending anything.',
    },
  ],
  coverageItems: [
    'Commercial use liability for vehicles used for work',
    'Rideshare Period 1 gap (the window app platforms leave uncovered)',
    'DoorDash, Instacart, Amazon Flex: your own vehicle covered',
    'Hired and Non-Owned Auto for employees using personal cars',
    'Fleet coverage for 2 or more vehicles',
    'Cargo and tools in transit',
    'Work vehicle theft',
    'Certificate of Insurance (COI) in 24 hours',
  ],
  industrySections: [
    {
      emoji: '🚗',
      industry: 'Uber / Lyft drivers',
      highlight: 'Covers Period 1, the gap platforms leave open',
      coverages: [
        'Coverage while app is on and waiting for a ride',
        'Full liability during active trips',
        'Your own vehicle covered if the platform denies the claim',
      ],
    },
    {
      emoji: '📦',
      industry: 'DoorDash / Instacart / Amazon Flex',
      highlight: 'Your car is never covered by the platform',
      coverages: [
        'Coverage during pickup routes, not just active deliveries',
        'Instacart: complete protection where the platform covers nothing',
        'Works across all delivery apps on the same policy',
      ],
    },
    {
      emoji: '🔧',
      industry: 'Contractors and tradespeople',
      highlight: 'Your work truck is not a personal vehicle',
      coverages: [
        'Liability coverage driving to and from job sites',
        'Tools and equipment stolen from the vehicle',
        'Employees listed as additional drivers',
      ],
    },
    {
      emoji: '🏢',
      industry: 'Small businesses with employees driving personal cars',
      highlight: 'Your GL policy does not cover their vehicle',
      coverages: [
        'Hired and Non-Owned Auto closes the liability gap',
        'Covers errands, client visits, and job site runs',
        'Protects your business from claims on vehicles you do not own',
      ],
    },
    {
      emoji: '🚛',
      industry: 'Fleets of 2 or more vehicles',
      highlight: 'One policy, one agent, one call when you need it',
      coverages: [
        'Lower cost per vehicle than individual policies',
        'Single monthly payment for the whole operation',
        'COI issued same day for any contract requirement',
      ],
    },
  ],
  steps: [
    {
      title: 'Tell us how your vehicle or business operates',
      desc: 'Gig driver, contractor, fleet, or employees using personal cars. Five minutes is enough to identify every gap in your current coverage.',
    },
    {
      title: 'We compare 10+ carriers for your specific situation',
      desc: 'Not every carrier covers every type of commercial use at the same price. We find the right fit for your vehicle, your state, and your industry.',
    },
    {
      title: 'Coverage active and someone to call when you need it',
      desc: 'We stay with you after the sale. If a claim gets denied or you need a COI by morning, you have a direct line, not a ticket number.',
    },
  ],
  testimonials: [
    {
      name: 'Mike T.',
      location: 'Dallas, Texas',
      text: 'My crew drives their personal trucks to every job site. My agent showed me that if any of them had an accident on the way to a client, my business could be sued and my GL policy would not cover it. Got it fixed the same week. That conversation saved me from a lawsuit I did not know I was exposed to.',
    },
    {
      name: 'Sarah M.',
      location: 'Phoenix, Arizona',
      text: 'A property management company we wanted to work with required commercial auto with $1M limits on the COI. We had the policy and the certificate the next morning. Signed the contract that afternoon. I did not know a missing piece of paper was blocking that deal.',
    },
    {
      name: 'Robert V.',
      location: 'Houston, Texas',
      text: 'Had an accident delivering for DoorDash. My personal insurer denied the claim immediately, commercial use exclusion. I called my agent directly, not a 1-800 number. He contacted the carrier, disputed it, and two weeks later the claim was paid. I would not have known how to fight that alone.',
    },
  ],
  faq: [
    {
      q: 'Does my personal auto policy cover me when I drive for work?',
      a: 'No. Personal auto policies contain a commercial use exclusion. If you have an accident while the app is on, driving to a job site, or making a business errand, your insurer can review GPS data and app history and deny the full claim. The exclusion is already in your current policy. Commercial auto coverage removes that risk explicitly.',
    },
    {
      q: 'What is Hired and Non-Owned Auto and do I need it?',
      a: 'Hired and Non-Owned Auto (HNOA) covers your business when employees use their personal vehicles for work. If an employee has an accident driving to a client, their personal insurer denies it under the commercial use exclusion, and the injured party sues your business. Your General Liability policy does not cover vehicles. HNOA closes that gap. If anyone on your team ever drives their own car for your business, you need it.',
    },
    {
      q: 'What are the three coverage periods for rideshare drivers and why do they matter?',
      a: 'Period 0 (app off): personal policy covers normally. Period 1 (app on, waiting): personal policy may deny the claim. Uber and Lyft offer only $50,000 per person in this period and do not cover your own vehicle. Periods 2 and 3 (active ride or delivery): platforms provide up to $1M liability but with a $2,500 deductible for your car. Commercial coverage fills every gap across all three periods.',
    },
    {
      q: 'Does DoorDash or Instacart provide auto insurance for their drivers?',
      a: 'DoorDash provides third-party liability during active deliveries only and does not cover damage to your own vehicle at any point. Instacart provides no auto insurance whatsoever. Amazon Flex covers active delivery blocks only. If you are not in an active delivery and have an accident, you have no platform coverage. Only a commercial policy of your own covers you in every scenario.',
    },
    {
      q: 'What is a COI and why do contractors need one to start a job?',
      a: 'A Certificate of Insurance proves your business carries active commercial coverage with the required limits. Property managers, general contractors, and corporate clients require a COI with specific commercial auto limits before you start work. Without the right COI, you do not get the contract. We issue COIs within 24 hours of your policy going active.',
    },
    {
      q: 'How much does commercial auto insurance cost for a contractor or small business?',
      a: 'A contractor with one pickup truck averages $177 to $285 per month. A cleaning or service van averages $189 to $270 per month per vehicle. Fleet policies covering 2 or more vehicles typically cost less per vehicle than individual policies. The final price depends on your vehicle type, state, driving history, and the type of work you do.',
    },
    {
      q: 'Can I lose my personal auto policy if my insurer finds out I have been using it for work?',
      a: 'Yes. Some insurers have canceled personal policies after discovering commercial use, especially for gig drivers. A cancellation for undisclosed commercial use can appear on your insurance history and raise your next policy cost by 40 to 60 percent. Declaring the commercial use and getting the right coverage protects both your claim and your record.',
    },
    {
      q: 'Why use an independent agent instead of buying commercial auto directly online?',
      a: 'Buying directly from Progressive or an online platform means you see one carrier\'s rates and one set of coverage options. An independent agent compares 10 or more carriers, identifies coverage gaps you may not know about, and is available when a claim gets filed or disputed. The premium is the same either way. The difference is having someone in your corner when it actually matters.',
    },
  ],
  ctaTitle: 'See what you\'re actually covered for',
  ctaItalic: 'most business owners are surprised by the answer',
  ctaSubtitle: 'Free comparison. 10+ carriers. COI in 24 hours. No obligation.',
  ctaButton: 'Get a free quote',
  theme: 'orange',
  heroVideo: '/videos/comercial.mp4',
  schema: {
    description: 'Commercial auto insurance for small businesses, contractors, and gig workers in the US. Independent agent compares 10+ carriers. Hired and Non-Owned Auto, fleet policies, and rideshare coverage. COI in 24 hours. From $110/mo.',
    price: '110',
  },
};

export default function AutoComercialPage({ params }: { params: { lang: string } }) {
  const config = params.lang === 'en' ? configEn : configEs;
  return <InsurancePage config={config} lang={params.lang} />;
}
