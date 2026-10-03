'use client';
import InsurancePage, { type InsurancePageConfig } from '@/components/InsurancePage';
import { Car, Warning, TrendUp, ArrowsLeftRight, CurrencyDollar, Question, UsersThree } from '@phosphor-icons/react';

const configEs: InsurancePageConfig = {
  quoteType: 'Auto',
  badgeIcon: Car,
  badge: 'Comparamos múltiples aseguradoras · Atención en español',
  heroLine1: '¿Tu seguro de auto subió?',
  heroItalic: 'comparamos 10+ aseguradoras para que no pagues de más',
  heroSubtitle: 'La mayoría de conductores paga el aumento sin cuestionar. Nosotros comparamos múltiples aseguradoras por ti, te explicamos cada opción en español, y cada año revisamos tu póliza. Sin costo para ti: la aseguradora nos paga a nosotros.',
  trustBadges: ['10+ aseguradoras comparadas', 'Desde $89/mes', 'Respuesta en 24 horas', 'ITIN y licencia extranjera aceptados'],
  priceFrom: 'Desde $89/mes',
  eligibilityTitle: '¿Cuál es tu situación?',
  eligibilityText: 'Cada conductor tiene una historia diferente. Cuéntanos la tuya y encontramos la cobertura que tiene sentido para ti.',
  eligibilityItems: [
    'Es tu primer seguro de auto en EE.UU. y no sabes qué cobertura necesitas',
    'Tu prima subió y nadie te explicó por qué',
    'Financiaste el auto y el banco exige full coverage, pero no sabes qué significa',
    'Tuviste un accidente y el proceso de reclamo fue confuso y lento',
    'Tienes accidentes o infracciones previas y no sabes si calificas para un seguro',
    'Tienes varios conductores en casa y quieres asegurarlos a todos',
  ],
  eligibilityTabs: [
    {
      label: 'Primera vez',
      icon: Question,
      items: [
        'Es tu primer seguro de auto en EE.UU. y no sabes qué cobertura necesitas',
        'Financiaste el auto y el banco exige full coverage, pero no sabes qué significa',
      ],
    },
    {
      label: 'Pagando de más',
      icon: TrendUp,
      items: [
        'Tu prima subió y nadie te explicó por qué',
        'Tienes accidentes o infracciones previas y no sabes si calificas para un mejor precio',
      ],
    },
    {
      label: 'Situación familiar',
      icon: UsersThree,
      items: [
        'Tienes varios conductores en casa y quieres asegurarlos a todos',
        'Tuviste un accidente y el proceso de reclamo fue confuso y lento',
      ],
    },
  ],
  featuresHeading: {
    label: 'Por qué comparar',
    title: 'Tres cosas que la aseguradora',
    italic: 'no te cuenta',
    subtitle: 'Situaciones donde la mayoría de conductores pierde dinero — y cómo las resolvemos.',
  },
  features: [
    {
      icon: ArrowsLeftRight,
      title: 'Tu aseguradora no te compara con nadie. Le conviene que no lo hagas tú.',
      desc: 'Las aseguradoras directas solo muestran SU precio. Un agente independiente compara 10+ opciones por ti y te explica las diferencias reales: cobertura, precio y condiciones. Aceptamos ITIN, pasaporte y matrícula consular para cotizar.',
    },
    {
      icon: CurrencyDollar,
      title: 'Primer auto financiado: lo que el dealer no te explica',
      desc: 'Si financiaste el carro, el banco exige full coverage, no es opcional. El minimum liability solo cubre a la otra persona, no a ti. Tu historial de manejo de otro país no se transfiere: empiezas desde cero. Te decimos exactamente qué necesitas.',
    },
    {
      icon: TrendUp,
      title: 'Tu prima subió. Te explicamos por qué y qué puedes hacer.',
      desc: 'Los autos modernos tienen sensores que cuestan miles en reparar. Los repuestos subieron 30–40% desde 2020. No es personal, pero comparar entre aseguradoras es la forma más efectiva de recuperar esa diferencia.',
    },
  ],
  coverageItems: [
    'Responsabilidad civil (Liability): obligatoria por ley, protege a otros',
    'Colisión (Collision): daños a tu vehículo en accidentes',
    'Daños completos (Comprehensive): robo, granizo, fuego, vandalismo',
    'Conductor sin seguro (UM/UIM): protección si el otro no tiene seguro',
    'Gap Insurance: si financiaste y debes más de lo que vale el auto',
    'Auto de reemplazo mientras te reparan el tuyo',
    'Protección de lesiones personales (PIP/MedPay)',
    'Asistencia en carretera 24/7',
  ],
  steps: [
    {
      title: 'Cuéntanos tu situación',
      desc: 'Info básica sobre tu auto y tu situación actual. Gratis, sin compromiso, en español.',
    },
    {
      title: 'Comparamos múltiples aseguradoras',
      desc: 'No trabajamos para una sola compañía. Buscamos la mejor cobertura al precio más justo para tu caso.',
    },
    {
      title: 'Tu tarjeta llega hoy, y cada año revisamos',
      desc: 'La tarjeta digital llega por email el mismo día. Y en 12 meses te contactamos para ver si hay una mejor opción disponible para ti.',
    },
  ],
  testimonials: [
    {
      name: 'Carmen L.',
      location: 'Miami, Florida',
      text: 'Era mi primer seguro de auto en EE.UU. y no sabía ni por dónde empezar. María Fernanda me explicó cada cobertura en español, sin apuro. Comparé tres opciones y elegí la que tenía sentido para mi situación. En 15 minutos tenía la póliza activa.',
    },
    {
      name: 'Roberto M.',
      location: 'Houston, Texas',
      text: 'El dealer me quiso vender el seguro ahí mismo. Por instinto llamé a María Fernanda antes de firmar. Comparó opciones y conseguí la misma cobertura por $180 menos al mes. En un año son más de $2,000 de diferencia.',
    },
    {
      name: 'Patricia V.',
      location: 'Los Ángeles, California',
      text: 'Mi aseguradora me subió $60 al mes sin un solo accidente. María Fernanda me explicó que era por los costos de reparación de los autos modernos, algo que la compañía nunca me dijo. Luego comparó opciones y ahorré $720 al año.',
    },
  ],
  faq: [
    {
      q: '¿Qué documentos necesito para cotizar un seguro de auto?',
      a: 'Para cotizar necesitamos: nombre completo, fecha de nacimiento, dirección donde se guarda el vehículo, número de licencia de manejo, información del vehículo (año, marca, modelo o VIN), e historial de manejo. Aceptamos ITIN, pasaporte y matrícula consular. No necesitas número de seguro social para cotizar.',
    },
    {
      q: '¿Cuánto me cobra usted por el servicio?',
      a: 'Nada. La comisión la paga la aseguradora, no tú. Pagas exactamente lo mismo que si fueras directo con la compañía, pero con alguien que compara múltiples opciones por ti y está de tu lado cuando necesitas hacer un reclamo.',
    },
    {
      q: '¿Qué necesito si es mi primer auto en EE.UU.?',
      a: 'Tres cosas que el dealer generalmente no explica: (1) Si financiaste el carro, el banco exige full coverage, no puedes elegir solo liability. (2) El "minimum coverage" solo cubre daños a otras personas, tu propio carro no queda cubierto. (3) Tu historial de manejo de otro país no se transfiere: empiezas sin historial en EE.UU. y eso sube la prima el primer año. Te ayudamos a elegir la cobertura correcta según tu situación.',
    },
    {
      q: '¿Por qué me subió la prima si no tuve accidentes?',
      a: 'Es el mayor aumento en casi 50 años: 14% en 2023. Los autos modernos tienen sensores y cámaras que cuestan mucho más reparar que antes, los repuestos subieron 30–40% desde 2020, y más accidentes post-pandemia aumentaron los costos generales. No es personal, pero comparar entre aseguradoras es la forma más efectiva de recuperar esa diferencia.',
    },
    {
      q: '¿Qué es "full coverage" y qué cubre realmente?',
      a: '"Full coverage" no es un producto oficial. Combina tres coberturas: Liability (protege a otros, obligatoria), Collision (daños a tu auto en accidentes) y Comprehensive (robo, granizo, vandalismo). Lo que NO cubre: fallas mecánicas, tus artículos personales dentro del auto, la diferencia si debes más de lo que vale el carro (Gap Insurance), ni el auto de reemplazo. Muchas familias descubren estos límites en el peor momento.',
    },
    {
      q: '¿Qué pasa si el otro conductor no tiene seguro?',
      a: 'En varios estados más del 15% de los conductores maneja sin seguro. Si te chocan y el culpable no tiene cobertura, puedes quedarte sin cobrar a menos que tengas cobertura UM/UIM (Uninsured/Underinsured Motorist). Es una de las coberturas más importantes y menos conocidas.',
    },
    {
      q: '¿Cuánto cuesta un seguro de auto?',
      a: 'Desde $89/mes para cobertura básica de responsabilidad civil. El estado, el vehículo y el historial de manejo son los factores principales. Comparamos entre múltiples compañías para encontrarte el mejor precio disponible para tu situación.',
    },
    {
      q: '¿Pueden asegurarme si tengo accidentes o infracciones previas?',
      a: 'Sí. Trabajamos con aseguradoras que aceptan conductores con historial de accidentes o infracciones. El precio puede ser mayor, pero encontramos cobertura. Te explicamos exactamente qué opciones tienes según tu historial.',
    },
  ],
  ctaTitle: 'Tu cobertura correcta',
  ctaItalic: 'al precio justo',
  ctaSubtitle: 'Sin revisión de crédito. Comparamos múltiples aseguradoras. Cubrirte hoy es el primer paso. Cada año revisamos tu póliza para asegurarnos de que sigues pagando el precio justo.',
  ctaButton: 'Cotizar gratis',
  theme: 'blue',
  heroVideo: '/videos/hero-auto.mp4',
  heroVideoMobile: '/videos/hero-auto-mobile.mp4',
  schema: {
    description: 'Agente de seguros de auto para familias latinas. Comparamos múltiples aseguradoras para encontrarte la mejor cobertura al precio justo. Atención en español. Desde $89/mes.',
    price: '89',
  },
  stats: [
    {
      value: '$144 más/año',
      label: 'es lo que pagan en promedio los conductores latinos comparado con conductores blancos por la misma cobertura.',
      source: 'Insurance Journal · 2024',
    },
    {
      value: '55%',
      label: 'de hispanos en EE.UU. tiene seguro de auto, frente al 80% de la población general.',
      source: 'Claritas · 2024',
    },
    {
      value: '48%',
      label: 'de conductores recibió un aumento de prima el último año sin recibir una explicación clara.',
      source: 'JD Power · 2025',
    },
  ],
  agentComparison: {
    heading: 'Agente independiente',
    independentLabel: 'Con María Fernanda',
    directLabel: 'Directo con la aseguradora',
    rows: [
      { independent: 'Compara 10+ aseguradoras al mismo tiempo', direct: 'Solo sus propias tarifas' },
      { independent: 'Sin costo adicional para ti', direct: 'Sin costo adicional' },
      { independent: 'Revisión anual de tu póliza incluida', direct: 'Nunca más te contactan' },
      { independent: 'Te acompaña si necesitas hacer un reclamo', direct: 'Tú solo contra el sistema' },
      { independent: 'Explica cada opción en español, sin apuro', direct: 'Call center en turno' },
      { independent: 'Un solo contacto para todo', direct: 'Cambia de agente cada renovación' },
    ],
    testimonialIndex: 1,
  },
};

const configEn: InsurancePageConfig = {
  quoteType: 'Auto',
  badgeIcon: Car,
  badge: 'Independent Agent · We Shop 10+ Carriers · No Loyalty to Any One Insurer',
  heroLine1: 'Your rate went up.',
  heroItalic: 'we shop 10+ carriers so you stop overpaying',
  heroSubtitle: 'Most drivers set it and forget it — same carrier, year after year, while rates quietly climb. We\'re an independent agent: we shop multiple carriers at once, break down every option in plain English, and check back every year. We don\'t cost you a dime extra.',
  trustBadges: ['10+ carriers shopped', 'From $89/mo', '5-minute rate check', 'No loyalty to any one carrier'],
  priceFrom: 'From $89/mo',
  eligibilityTitle: 'Which one sounds like you?',
  eligibilityText: 'No two drivers are in the same situation. Tell us yours and we\'ll find coverage that actually makes sense for it.',
  eligibilityItems: [
    'You got hit with a rate increase and nobody gave you a straight answer why',
    'You\'ve been with the same carrier for years and honestly haven\'t thought about it since',
    'You financed your car and your lender is requiring full coverage, but you\'re not totally sure what that includes',
    'You filed a claim and the process was a lot more painful than you expected',
    'You want to understand what "full coverage" actually covers before you need to find out the hard way',
    'New car, new home, new driver on the policy: something changed and your coverage probably should too',
  ],
  eligibilityTabs: [
    {
      label: 'First time',
      icon: Question,
      items: [
        'You financed your car and your lender is requiring full coverage, but you\'re not totally sure what that includes',
        'You want to understand what "full coverage" actually covers before you need to find out the hard way',
      ],
    },
    {
      label: 'Overpaying',
      icon: TrendUp,
      items: [
        'You got hit with a rate increase and nobody gave you a straight answer why',
        'You\'ve been with the same carrier for years and honestly haven\'t thought about it since',
      ],
    },
    {
      label: 'Life changed',
      icon: UsersThree,
      items: [
        'New car, new home, new driver on the policy: something changed and your coverage probably should too',
        'You filed a claim and the process was a lot more painful than you expected',
      ],
    },
  ],
  featuresHeading: {
    label: 'Why comparison matters',
    title: 'Three things your carrier',
    italic: 'doesn\'t tell you',
    subtitle: 'Common situations where most drivers lose money — and how we handle them.',
  },
  features: [
    {
      icon: TrendUp,
      title: 'Your rate went up. Here\'s why — and what to do about it.',
      desc: 'Modern cars have sensors that cost $2,800+ to fix vs. $300 in 2015. Parts jumped 30-40% since 2020. Not your fault. But not every carrier raised rates equally — some went up 8%, others 34%. Comparing right now can recover most of what you lost.',
    },
    {
      icon: Warning,
      title: '"Full coverage" doesn\'t cover everything. Most people find out during a claim.',
      desc: 'It typically means Liability + Collision + Comprehensive. What it almost never includes: mechanical breakdown, your stuff stolen from the car, the gap between your loan and what the car\'s worth, or a rental while yours is in the shop.',
    },
    {
      icon: ArrowsLeftRight,
      title: 'First car? Here\'s what the dealer didn\'t mention.',
      desc: 'State minimum only protects other people, not you. If you financed, your lender requires full coverage — no choice there. And if you owe more than the car\'s worth, gap insurance matters a lot. Most first-time buyers get this wrong. We walk you through it before you sign.',
    },
  ],
  coverageItems: [
    'Liability: protects others if the accident is your fault (required by law; state minimums are rarely enough)',
    'Collision: your car in an accident, after your deductible',
    'Comprehensive: theft, hail, fire, vandalism, hitting an animal — after your deductible',
    'Uninsured/Underinsured Motorist: about 15% of US drivers have no insurance',
    'Gap Insurance: covers the difference between your loan and the car\'s actual value',
    'Rental Reimbursement: almost never included by default — worth adding if you depend on your car',
    'Roadside Assistance: usually cheaper through your insurer than a standalone plan',
    'MedPay / PIP: your own medical bills regardless of who was at fault',
  ],
  steps: [
    {
      title: 'Tell us your situation — 5 minutes',
      desc: 'Current coverage, vehicle info, any recent changes. No credit check. Nothing to sign.',
    },
    {
      title: 'We shop 10+ carriers at once',
      desc: 'We don\'t work for any single insurer — zero reason to push you toward one over another. We find what\'s actually best for your situation.',
    },
    {
      title: 'You see everything, then you decide',
      desc: 'Real differences between each option: coverage, gaps, price. You choose. No pressure. Cards arrive same day you\'re ready. And in 12 months, we check back in.',
    },
  ],
  testimonials: [
    {
      name: 'Jennifer K.',
      location: 'Phoenix, Arizona',
      text: 'Nine years with the same carrier and never once questioned it. María Fernanda compared my rate against ten others in one call. Switching saved me more than I expected for identical coverage. Turns out I\'d been quietly paying the loyalty tax the whole time.',
    },
    {
      name: 'Michael T.',
      location: 'Tampa, Florida',
      text: 'My carrier raised my rate and couldn\'t give me a straight answer why. María Fernanda broke down exactly what happened — sensor repairs on newer cars cost a lot more now — and then found me a better rate anyway. First time insurance actually made sense to me.',
    },
    {
      name: 'Sarah D.',
      location: 'Austin, Texas',
      text: 'Just bought my first car and had no idea what I actually needed. María Fernanda walked me through everything before I left the lot — liability vs. full coverage, gap insurance since I financed it, what my deductible should be. Wish I\'d called before I talked to the dealer.',
    },
  ],
  faq: [
    {
      q: 'Why did my rate go up if I didn\'t have any accidents?',
      a: 'Almost certainly not your fault. Modern cars have sensors and cameras that cost $2,800+ to fix — up from about $300 in 2015. Parts prices jumped 30-40% since 2020. Post-pandemic accident rates went up nationally. And insurers spread the cost of fraud across all policyholders. The 2023 average increase was the biggest in 50 years. The move: shop around. Carriers didn\'t all raise rates equally, and comparing right now can recover most of what you lost.',
    },
    {
      q: 'What does "full coverage" actually cover?',
      a: 'It\'s not an official term — no standard definition exists. It usually means Liability + Collision + Comprehensive. What it rarely includes: mechanical problems, stuff stolen out of your car, the difference between your loan balance and what the car is worth, a rental while yours is being fixed, or roadside assistance. Most people find this out right when they need to file a claim. We go through all of it with you before you sign anything.',
    },
    {
      q: 'What does your service cost me?',
      a: 'Nothing. The insurer pays our commission — you pay the exact same rate as going to them directly. You just skip the hours of shopping around yourself.',
    },
    {
      q: 'I just bought my first car. What do I actually need?',
      a: 'Four questions worth asking first: Did you finance it? If yes, your lender requires full coverage — liability only won\'t satisfy the loan. Do you owe more than the car is worth? Gap insurance matters here. What\'s your emergency fund? Higher deductible means lower monthly rate, but you need to cover it out of pocket. How much do you drive? Mileage affects your rate more than most people realize.',
    },
    {
      q: 'What\'s gap insurance and do I actually need it?',
      a: 'If you financed or leased, you probably owe more than the car is worth right now — especially in the first few years. If it\'s totaled, your insurer pays current market value. Gap covers the difference between that and what you still owe the bank. Without it, you could owe thousands on a car you no longer have. Dealers charge a lot for it. Your insurer usually offers the same thing for much less.',
    },
    {
      q: 'How often should I shop my rate?',
      a: 'Every year. And any time something changes — new car, new home, got married, teenager on the policy, or an at-fault accident. Insurance companies give their best rates to new customers. Staying put without checking is the loyalty tax. We do the annual check for you so you don\'t have to think about it.',
    },
    {
      q: 'What if the driver who hits me doesn\'t have insurance?',
      a: 'About 15% of US drivers are uninsured — higher in some states. If one of them hits you, whether you recover anything depends entirely on whether you have UM/UIM coverage. Without it, you might get nothing even if the accident was 100% their fault. It\'s one of the most underrated coverages out there.',
    },
    {
      q: 'Should I file a claim or just pay out of pocket?',
      a: 'Filing can raise your rate for up to three years. If the repair costs less than your deductible plus three years of higher premiums, paying out of pocket usually makes more sense. File for anything involving other people, injuries, or damage well above your deductible. For minor stuff under $1,500 — do the math first.',
    },
  ],
  ctaTitle: 'Find out if you\'re',
  ctaItalic: 'overpaying',
  ctaSubtitle: 'Takes 5 minutes. 10+ carriers compared. No credit check, no commitment, no loyalty to any one insurer. We check back every year so you don\'t have to think about it.',
  ctaButton: 'Get my free rate check',
  theme: 'blue',
  heroVideo: '/videos/hero-auto.mp4',
  heroVideoMobile: '/videos/hero-auto-mobile.mp4',
  schema: {
    description: 'Independent car insurance agent. We shop 10+ carriers, explain full coverage in plain English, and review your policy every year. Rate check in 5 minutes. From $89/mo.',
    price: '89',
  },
  stats: [
    {
      value: '$144/yr more',
      label: 'is what Hispanic drivers pay on average compared to white drivers for the same coverage.',
      source: 'Insurance Journal · 2024',
    },
    {
      value: '55%',
      label: 'of Hispanic adults in the US have auto insurance, versus 80% of the general population.',
      source: 'Claritas · 2024',
    },
    {
      value: '48%',
      label: 'of drivers received a rate increase last year without receiving a clear explanation.',
      source: 'JD Power · 2025',
    },
  ],
  agentComparison: {
    heading: 'Independent agent',
    independentLabel: 'With María Fernanda',
    directLabel: 'Going direct',
    rows: [
      { independent: 'Shops 10+ carriers at the same time', direct: 'Only their own rates' },
      { independent: 'No extra cost to you', direct: 'No extra cost either' },
      { independent: 'Annual policy review included', direct: 'You\'re on your own after you sign' },
      { independent: 'Guides you through claims if you need it', direct: 'You vs. their claims team' },
      { independent: 'Walks through every option in plain language', direct: 'Call center, next in queue' },
      { independent: 'One contact for everything', direct: 'New agent every renewal' },
    ],
    testimonialIndex: 1,
  },
};

export default function AutoPage({ params }: { params: { lang: string } }) {
  const config = params.lang === 'en' ? configEn : configEs;
  return <InsurancePage config={config} lang={params.lang} />;
}
