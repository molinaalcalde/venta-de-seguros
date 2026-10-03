'use client';
import InsurancePage, { type InsurancePageConfig } from '@/components/InsurancePage';
import { Buildings, Scales, ShieldCheck, Certificate, Warning, Storefront, ArrowsClockwise } from '@phosphor-icons/react';

const configEs: InsurancePageConfig = {
  quoteType: 'Comercial',
  badgeIcon: Buildings,
  badge: 'ITIN o EIN aceptados · COI en 24hs · Cotización gratis · Atención en español',
  heroLine1: 'Seguro de Negocio',
  heroItalic: 'porque tu LLC no te protege como crees',
  heroSubtitle: 'El error más común de los dueños de negocio: creer que la LLC los cubre de demandas. No es así. Si un cliente se lastima, si dañas la propiedad de alguien o si tienes que cerrar por un incendio, paga el negocio. Cotizamos múltiples aseguradoras por ti, te explicamos cada opción en español, y cada año revisamos que sigas bien cubierto.',
  trustBadges: ['ITIN o EIN aceptados', 'Desde $19/mes', 'COI en 24 horas', 'Cotización gratis'],
  priceFrom: 'Desde $19/mes',
  eligibilityTitle: '¿Tu negocio está realmente protegido?',
  eligibilityText: 'La mayoría cree que sí, hasta que pasa algo. Estos son los negocios que más ayudamos:',
  eligibilityItems: [],
  eligibilityTabs: [
    {
      label: 'Me lo están pidiendo',
      icon: Warning,
      items: [
        'Un cliente o contratista te pidió un certificado de seguro (COI) para poder trabajar',
        'Tu landlord exige prueba de seguro para renovar el contrato del local',
        'Necesitas Workers Comp porque acabas de contratar a tu primer empleado',
      ],
    },
    {
      label: 'Estoy empezando',
      icon: Storefront,
      items: [
        'Acabas de abrir tu negocio y no sabes qué seguro necesitas',
        'Tienes una LLC pero no sabes si eso te protege de demandas (no lo hace)',
        'Trabajas desde casa y no sabes si tu seguro de hogar cubre tu negocio (no lo cubre)',
      ],
    },
    {
      label: 'Ya tengo seguro',
      icon: ArrowsClockwise,
      items: [
        'Tu prima subió y nadie te explicó por qué',
        'No has revisado tu póliza desde que abriste y tu negocio ha cambiado',
        'Sientes que pagas de más o que no estás realmente cubierto',
      ],
    },
  ],
  features: [
    {
      icon: Scales,
      title: 'Una demanda cuesta $75,000 aunque la ganes',
      desc: 'El costo promedio de defender un juicio por responsabilidad civil es $75,000, incluso si el negocio no tuvo la culpa (Hiscox). La GL cubre honorarios legales, indemnizaciones y daños a terceros. Desde $19/mes, es la primera cobertura que necesita cualquier negocio con clientes.',
    },
    {
      icon: Certificate,
      title: 'Sin COI, pierdes el local o el contrato',
      desc: 'El Certificado de Seguro (COI) es lo primero que te exige un landlord, un cliente corporativo o un contratista general. Sin él, no trabajas. Lo emitimos en menos de 24 horas para que no pierdas ninguna oportunidad.',
    },
    {
      icon: ShieldCheck,
      title: 'BOP: todo cubierto, un solo pago',
      desc: 'La póliza BOP combina Responsabilidad Civil y protección de propiedad (local, equipo, inventario) en un paquete. También cubre pérdida de ingresos si tienes que cerrar temporalmente. Más cobertura, menos precio que contratarlo por separado.',
    },
  ],
  coverageItems: [
    'Responsabilidad Civil General (GL): desde $19/mes',
    'Protección de propiedad: local, equipo e inventario',
    'Póliza BOP (GL + Propiedad combinados)',
    'Interrupción del negocio: cubre ingresos si cierras temporalmente',
    'Compensación laboral (Workers Comp): obligatoria con empleados',
    'Responsabilidad de productos',
    'Equipos y maquinaria especializada',
    'Certificado de Seguro (COI) en menos de 24 horas',
  ],
  industrySections: [
    {
      emoji: '🍽️',
      industry: 'Restaurantes y bares',
      highlight: 'Liquor Liability es obligatoria si sirves alcohol',
      coverages: [
        'GL: caída o lesión de cliente en el local',
        'Liquor Liability: exigida por la licencia de licor',
        'Falla de equipo: refrigeración, hornos, cocinas',
        'Interrupción del negocio: cubre ingresos si cierras',
      ],
    },
    {
      emoji: '🔨',
      industry: 'Contratistas y construcción',
      highlight: 'Sin GL, no consigues el contrato ni entras en la obra',
      coverages: [
        'GL: requerida para contratos y acceso a obras',
        'Herramientas y equipo en campo',
        'Workers Comp: industria de mayor siniestralidad',
        'COI inmediato: muchos contratos lo exigen el mismo día',
      ],
    },
    {
      emoji: '✂️',
      industry: 'Salones, barberías y spas',
      highlight: 'Una reacción adversa puede costar más que un año de prima',
      coverages: [
        'GL: caída en el local o reacción a producto',
        'Professional Liability: tratamiento mal aplicado',
        'BOP: sillas, equipos e inventario de productos',
        'Workers Comp si tienes estilistas contratados',
      ],
    },
    {
      emoji: '🧹',
      industry: 'Limpieza y servicios al hogar',
      highlight: 'El bonding es lo que piden antes de darte acceso al local',
      coverages: [
        'GL: daño accidental a propiedad del cliente',
        'Bonding: protege al cliente en caso de robo',
        'Workers Comp: trabajo físico con alto riesgo',
        'Commercial Auto: vehículos usados para trabajar',
      ],
    },
    {
      emoji: '💼',
      industry: 'Trabajadores independientes',
      highlight: 'Muchos clientes corporativos exigen GL antes de contratarte',
      coverages: [
        'GL: requisito de clientes corporativos',
        'Professional Liability: errores en el servicio',
        'COI por proyecto: sin póliza anual larga',
        'Cobertura activa en menos de 24 horas',
      ],
    },
  ],
  steps: [
    {
      title: 'Cuéntanos sobre tu negocio',
      desc: 'Tipo de negocio, ubicación y empleados. Puedes usar tu ITIN o EIN. Gratis, sin compromiso.',
    },
    {
      title: 'Cotización por industria, no genérica',
      desc: 'Un restaurante, un salón y un contractor tienen riesgos distintos. Tu precio refleja tu negocio real.',
    },
    {
      title: 'Póliza activa y COI en 24 horas',
      desc: 'Listo para presentar a landlords, clientes o contratistas generales. El mismo día en la mayoría de los casos.',
    },
  ],
  testimonials: [
    {
      name: 'Alejandra C.',
      location: 'Los Ángeles, California',
      text: 'Una clienta se resbaló en mi salón y amenazó con demandarme. El seguro cubrió los honorarios legales y el arreglo. Sin el seguro hubiera tenido que cerrar el negocio.',
    },
    {
      name: 'Roberto H.',
      location: 'Miami, Florida',
      text: 'Creía que mi LLC me protegía. Me explicaron que no, y que sin seguro una demanda sale de las cuentas del negocio. Conseguí el BOP por menos de lo que pensaba.',
    },
    {
      name: 'Carmen M.',
      location: 'Houston, Texas',
      text: 'Mi landlord me exigió el COI para renovar el local. Lo tuve en menos de 24 horas. Sin ese papel, perdía el local que tanto me costó conseguir.',
    },
  ],
  faq: [
    {
      q: '¿La LLC me protege si me demandan?',
      a: 'No directamente. La LLC protege tus bienes personales de las deudas del negocio, pero si un cliente te demanda por negligencia, los honorarios legales y la indemnización los paga el negocio. Sin seguro, eso puede vaciar tus cuentas y forzar el cierre.',
    },
    {
      q: '¿Qué seguro mínimo necesita mi negocio?',
      a: 'La Responsabilidad Civil General (GL) cubre lesiones y daños a clientes o terceros, desde $19/mes. Si tienes local o inventario, agrega protección de propiedad (o el BOP que los combina). Con empleados, Workers Comp es obligatoria por ley en casi todos los estados.',
    },
    {
      q: '¿Cuándo necesito Workers Comp?',
      a: 'En la mayoría de los estados, desde que contratas tu primer empleado, incluso si es a tiempo parcial o temporal. Las multas por no tenerlo superan el costo de años de prima. Si pagas a alguien para trabajar en tu negocio, revisa los requisitos de tu estado.',
    },
    {
      q: '¿Puedo asegurar mi negocio con ITIN en lugar de SSN?',
      a: 'Sí. Aceptamos ITIN para dueños individuales y EIN para negocios registrados como LLC o corporación. Tu información es confidencial y solo se usa para la cotización.',
    },
    {
      q: '¿Qué es el COI y por qué me lo exigen?',
      a: 'El Certificado de Seguro prueba que tienes seguro activo con los límites requeridos. Landlords, clientes corporativos y contratistas generales lo piden antes de dejarte trabajar o entrar en un local. Lo emitimos en menos de 24 horas.',
    },
    {
      q: '¿Mi seguro de hogar cubre mi negocio?',
      a: 'No. Las pólizas de hogar excluyen explícitamente la actividad comercial. Si recibes clientes en casa, guardas inventario o usas equipo del negocio, necesitas cobertura comercial por separado.',
    },
    {
      q: '¿Mi seguro de auto personal cubre si uso el vehículo para trabajar?',
      a: 'No. Si usas tu vehículo para entregar productos, visitar clientes o transportar equipo del negocio, tu póliza personal probablemente no cubre un accidente en esas circunstancias. Pregúnanos por cobertura comercial de auto.',
    },
    {
      q: '¿Puedo empezar con lo básico y ampliar después?',
      a: 'Sí. Muchos dueños de negocio empiezan solo con GL y agregan cobertura a medida que el negocio crece. Revisamos tu póliza cada año y te avisamos si algo cambió o si encontramos mejor precio.',
    },
    {
      q: '¿Qué información necesitan para cotizar?',
      a: 'Tipo de negocio, estado, cantidad aproximada de empleados y si tienes local físico o trabajas desde casa. Puedes usar tu ITIN o EIN. Es gratis y sin compromiso.',
    },
  ],
  ctaTitle: 'Protege lo que',
  ctaItalic: 'construiste',
  ctaSubtitle: 'Desde $19/mes. COI en 24 horas. ITIN y EIN aceptados. Gratis, sin compromiso.',
  ctaButton: 'Cotizar gratis',
  heroVideo: '/videos/hero-comercial.mp4',
  theme: 'purple',
  schema: {
    description: 'Seguro comercial para pequeños negocios en USA. ITIN y EIN aceptados. BOP, responsabilidad civil, Workers Comp y protección de propiedad. Restaurantes, salones, contratistas y más. Desde $19/mes.',
    price: '19',
  },
};

const configEn: InsurancePageConfig = {
  quoteType: 'Comercial',
  badgeIcon: Buildings,
  badge: 'Independent Agent · GL · BOP · Workers Comp · COI in 24hrs',
  heroLine1: 'Business Insurance',
  heroItalic: 'because your LLC is not your insurance',
  heroSubtitle: 'An LLC protects your personal assets from business debts. That\'s it. It doesn\'t cover the customer who slips in your store, the equipment that breaks down, or the employee who gets hurt on the job. That\'s what business insurance does — and 77% of small businesses don\'t have enough of it (Hiscox 2025). We compare 10+ carriers to make sure you\'re not one of them.',
  trustBadges: ['10+ carriers compared', 'From $19/mo', 'COI in under 24 hours', 'Free, no commitment'],
  priceFrom: 'From $19/mo',
  eligibilityTitle: 'Are you actually covered — or just insured?',
  eligibilityText: 'There\'s a difference. 77% of small businesses have a policy that doesn\'t cover what they think it covers (Hiscox 2025). These are the situations we see most:',
  eligibilityItems: [],
  eligibilityTabs: [
    {
      label: 'I need it now',
      icon: Warning,
      items: [
        'A client or GC just asked for a Certificate of Insurance (COI) before you can start work',
        'Your landlord requires proof of insurance to renew your lease',
        'You just hired your first employee and need Workers Comp before they start',
      ],
    },
    {
      label: 'Just starting out',
      icon: Storefront,
      items: [
        'You just opened your business and don\'t know what insurance you actually need',
        'You have an LLC and assumed that meant you were protected from lawsuits (it doesn\'t)',
        'You work from home and don\'t know if your homeowner\'s policy covers your business (it doesn\'t)',
      ],
    },
    {
      label: 'Already insured',
      icon: ArrowsClockwise,
      items: [
        'Your premium went up and nobody gave you a real explanation why',
        'You haven\'t reviewed your policy since you opened and your business has changed',
        'You have coverage but you\'re not sure it would actually hold up if something happened',
      ],
    },
  ],
  features: [
    {
      icon: Scales,
      title: '"I have an LLC, so I\'m covered" — the most expensive assumption in small business',
      desc: 'An LLC protects your personal assets from business debts. It does nothing for the customer who sues you, the fire that burns your equipment, or the employee injured on the job. 30% of small businesses have no commercial coverage at all (Next Insurance). Of those who do, 77% are underinsured — and most only find out when they file a claim (Hiscox 2025).',
    },
    {
      icon: Certificate,
      title: 'A contract requires a COI. You have 24 hours.',
      desc: 'A Certificate of Insurance is the single most common reason small business owners buy coverage — and they usually need it the same week. Landlords, general contractors, and corporate clients require it before you can start work. We issue COIs in under 24 hours of your policy going active.',
    },
    {
      icon: ShieldCheck,
      title: 'Your first employee changed everything. Did your policy?',
      desc: 'Workers Compensation becomes legally required the moment you hire your first employee in almost every state — including part-time and temporary workers. Texas is the only exception. Penalties for non-compliance typically exceed the cost of years of premiums. We check your state\'s requirements and review your full exposure.',
    },
  ],
  coverageItems: [
    'General Liability (GL): from $19/mo',
    'Commercial property: space, equipment, and inventory',
    'BOP policy (GL + Property combined)',
    'Business interruption: covers income if you have to close',
    'Workers Compensation: required by law when you have employees',
    'Products liability',
    'Specialized equipment and machinery',
    'Certificate of Insurance (COI) in 24 hours',
  ],
  industrySections: [
    {
      emoji: '🍽️',
      industry: 'Restaurants & Bars',
      highlight: 'Liquor Liability is required the moment you serve alcohol',
      coverages: [
        'GL: slip and fall, customer injuries on premises',
        'Liquor Liability: required by your liquor license',
        'Equipment Breakdown: refrigeration, ovens, commercial kitchen',
        'Business Interruption: income coverage if you have to close',
      ],
    },
    {
      emoji: '🔨',
      industry: 'Contractors & Construction',
      highlight: 'No GL means no contracts — most job sites require it on day one',
      coverages: [
        'GL: required for contracts and job site access',
        'Tools & Equipment: coverage in the field',
        'Workers Comp: highest injury rate of any industry',
        'Same-day COI: many contracts require it before you start',
      ],
    },
    {
      emoji: '✂️',
      industry: 'Salons, Barbershops & Spas',
      highlight: 'One adverse reaction claim can exceed a full year of premiums',
      coverages: [
        'GL: slip and fall or product reaction in your space',
        'Professional Liability: treatment gone wrong',
        'BOP: chairs, equipment, product inventory',
        'Workers Comp if you have employees or booth renters',
      ],
    },
    {
      emoji: '🧹',
      industry: 'Cleaning & Home Services',
      highlight: 'Clients require bonding before giving you access to their home',
      coverages: [
        'GL: accidental damage to client property',
        'Bonding: theft protection for your clients',
        'Workers Comp: physical work with high injury exposure',
        'Commercial Auto: vehicles used on the job',
      ],
    },
    {
      emoji: '💼',
      industry: 'Independent Contractors & Freelancers',
      highlight: 'Most corporate clients require GL before signing a contract',
      coverages: [
        'GL: standard corporate client requirement',
        'Professional Liability: errors in your service',
        'Per-project COI: no long-term annual commitment',
        'Coverage active in under 24 hours',
      ],
    },
  ],
  steps: [
    {
      title: 'Tell us about your business — 5 min',
      desc: 'Type of business, location, employees. No credit check. No commitment.',
    },
    {
      title: 'We compare across multiple carriers',
      desc: 'Independent agent — no loyalty to any one insurer. Best coverage at the best price for your specific industry.',
    },
    {
      title: 'Policy active and COI in 24 hours',
      desc: 'Ready to present to clients, landlords, or contractors. Most policies bind same day.',
    },
  ],
  testimonials: [
    {
      name: 'Jennifer R.',
      location: 'Phoenix, Arizona',
      text: 'I thought my LLC protected me from lawsuits. It doesn\'t. Got GL coverage after this conversation. Three months later a customer slipped in my store. Insurance handled the whole thing — attorneys, settlement, everything.',
    },
    {
      name: 'Michael T.',
      location: 'Tampa, Florida',
      text: 'My GC wouldn\'t let me on a job site without a COI. Had it in under 24 hours. Didn\'t expect it to move that fast. That\'s the only reason I made the deadline on that contract.',
    },
    {
      name: 'Sarah D.',
      location: 'Austin, Texas',
      text: 'Hired my first employee and had no idea workers comp requirements vary by state. They flagged it before I had a problem and reviewed my whole coverage picture while we were at it.',
    },
  ],
  faq: [
    {
      q: 'Does an LLC protect me from lawsuits?',
      a: 'An LLC protects your personal assets from business debts — not from negligence claims. If a customer gets injured and sues your business, legal fees and damages come from business accounts. Without GL insurance, that can close the business.',
    },
    {
      q: 'What\'s the minimum coverage my small business needs?',
      a: 'General Liability (GL) is the foundation — from $19/mo, covers injuries and property damage to clients or third parties. Have a physical space, equipment, or inventory? A BOP bundles GL and property coverage for less than buying each separately. Have an employee? Workers Comp is legally required in almost every state.',
    },
    {
      q: 'What is a BOP — and do I actually need one?',
      a: 'A Business Owner\'s Policy combines General Liability and commercial property in one package — typically cheaper than buying each separately. It also covers business interruption: lost income if you have to close temporarily. Right for most businesses with a location, equipment, or inventory. Starts around $25/mo.',
    },
    {
      q: 'What is a COI and why does everyone ask for it?',
      a: 'A Certificate of Insurance proves you have active coverage at the required limits. Landlords, corporate clients, and general contractors require it before you can work or sign a lease. We issue COIs in under 24 hours of your policy going active.',
    },
    {
      q: 'When do I need Workers Comp?',
      a: 'In almost every state, the day you hire your first employee — including part-time and temporary workers. Texas is the only state where it\'s optional for most employers. Penalties for non-compliance typically run higher than years of premiums. We verify your state\'s requirements before you make your first hire.',
    },
    {
      q: 'Does my homeowner\'s policy cover my home-based business?',
      a: 'No. Standard homeowner\'s policies explicitly exclude commercial activity. If you receive clients, store inventory, or use business equipment at home, you need a separate commercial policy.',
    },
    {
      q: 'Does my personal auto insurance cover business use?',
      a: 'No. If you use your vehicle to deliver products, visit clients, or haul equipment, your personal policy likely won\'t cover an accident during those trips. Ask us about commercial auto coverage.',
    },
    {
      q: 'When should I file a claim vs. pay out of pocket?',
      a: 'For injuries to others or significant property damage: always file. For minor incidents below your deductible: calculate first. A claim can raise your commercial premium $300-600/year for 3 years — sometimes more than the repair itself.',
    },
    {
      q: 'How much does small business insurance cost?',
      a: 'GL starts at $19/month for low-risk businesses. A BOP typically runs $25-80/month depending on industry, revenue, and location. Commercial insurance premiums have risen for 25 consecutive quarters (CIAB 2024) — which is exactly why shopping multiple carriers matters more now than it used to.',
    },
  ],
  ctaTitle: 'Find out if you\'re',
  ctaItalic: 'actually covered',
  ctaSubtitle: 'Independent review. 10+ carriers compared. COI in 24 hours. Free, no commitment.',
  ctaButton: 'Get a free coverage review',
  heroVideo: '/videos/hero-comercial.mp4',
  theme: 'purple',
  schema: {
    description: 'Small business insurance — General Liability, BOP, Workers Comp, and property protection. Independent agent comparing multiple carriers. COI in 24 hours. From $19/mo.',
    price: '19',
  },
};

export default function ComercialPage({ params }: { params: { lang: string } }) {
  const config = params.lang === 'en' ? configEn : configEs;
  return <InsurancePage config={config} />;
}
