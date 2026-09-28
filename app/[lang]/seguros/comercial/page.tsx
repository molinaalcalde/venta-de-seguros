'use client';
import InsurancePage, { type InsurancePageConfig } from '@/components/InsurancePage';
import { Buildings, Scales, ShieldCheck, Certificate } from '@phosphor-icons/react';

const configEs: InsurancePageConfig = {
  quoteType: 'Comercial',
  badgeIcon: Buildings,
  badge: 'Sin SSN · ITIN o EIN · COI en 24hs · Atención en español',
  heroLine1: 'Seguro de Negocio',
  heroItalic: 'porque tu LLC no te protege como crees',
  heroSubtitle: 'El 77% de los pequeños negocios en USA está sub-asegurado — y la mayoría cree que está cubierto. El costo promedio de una demanda: $97,200. Tu LLC protege tus bienes personales, no las cuentas del negocio.',
  trustBadges: ['Sin SSN — ITIN o EIN', 'Desde $19/mes', 'COI en 24 horas', 'Info 100% confidencial'],
  priceFrom: 'Desde $19/mes',
  eligibilityTitle: '¿Tu negocio está realmente protegido?',
  eligibilityText: 'La mayoría cree que sí — hasta que pasa algo. Estos son los negocios que más ayudamos:',
  eligibilityItems: [
    'Restaurantes, panaderías, tiendas y negocios de comida',
    'Contratistas: construcción, plomería, electricidad, landscaping',
    'Salones de belleza, barberías, spas y estéticas',
    'Empresas de limpieza, mudanzas y servicios al hogar',
    'Trabajadores independientes con clientes o contratos',
    'Cualquier negocio que recibe clientes o tiene empleados',
  ],
  features: [
    {
      icon: Scales,
      title: 'Tu LLC no te protege como crees',
      desc: 'La LLC protege tus bienes personales de las deudas del negocio — no de las demandas. Si un cliente se lastima y te demanda, paga el negocio. Sin seguro, eso vacía tus cuentas. La Responsabilidad Civil (GL) es lo que realmente te protege — desde $19/mes.',
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
    'Responsabilidad Civil General (GL) — desde $19/mes',
    'Protección de propiedad — local, equipo e inventario',
    'Póliza BOP (GL + Propiedad combinados)',
    'Interrupción del negocio — cubre ingresos si cierras temporalmente',
    'Compensación laboral (Workers Comp) — obligatoria con empleados',
    'Responsabilidad de productos',
    'Equipos y maquinaria especializada',
    'Certificado de Seguro (COI) en menos de 24 horas',
  ],
  steps: [
    {
      title: 'Cuéntanos sobre tu negocio',
      desc: 'Tipo de negocio, ubicación y empleados. Sin SSN — usa tu ITIN o EIN. Gratis, sin compromiso.',
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
      text: 'Una clienta se resbaló en mi salón y amenazó con demandarme por $60,000. El seguro cubrió todo — abogados y arreglo. Sin el seguro hubiera tenido que cerrar.',
    },
    {
      name: 'Roberto H.',
      location: 'Miami, Florida',
      text: 'Creía que mi LLC me protegía. Me explicaron que no — y que sin seguro, una demanda sale de las cuentas del negocio. Conseguí el BOP por menos de lo que pensaba.',
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
      a: 'No directamente. La LLC protege tus bienes personales de las deudas del negocio — pero si un cliente te demanda por negligencia, la indemnización y los honorarios legales los paga el negocio. Sin seguro, eso puede vaciar tus cuentas y forzar el cierre.',
    },
    {
      q: '¿Qué seguro mínimo necesita mi negocio?',
      a: 'La Responsabilidad Civil General (GL) desde $19/mes — cubre lesiones y daños a clientes o terceros. Si tienes local o inventario, agrega protección de propiedad (o el BOP que combina ambos). Con empleados, Workers Comp es obligatoria por ley.',
    },
    {
      q: '¿Puedo asegurar mi negocio con ITIN en lugar de SSN?',
      a: 'Sí. Aceptamos ITIN para dueños individuales y EIN para negocios registrados como LLC o corporación. Tu estatus migratorio no afecta la cobertura ni la confidencialidad de tu información.',
    },
    {
      q: '¿Qué es el COI y por qué me lo exigen?',
      a: 'El Certificado de Seguro prueba que tienes seguro activo con los límites requeridos. Landlords, clientes corporativos y contratistas lo exigen antes de dejarte trabajar. Lo emitimos en menos de 24 horas.',
    },
    {
      q: '¿Mi seguro de hogar cubre mi negocio?',
      a: 'No. Las pólizas de hogar excluyen explícitamente la actividad comercial. Si trabajas desde casa, recibes clientes o guardas inventario, necesitas cobertura comercial por separado.',
    },
    {
      q: '¿Mi información se comparte con el gobierno o migración?',
      a: 'No. Tu información es 100% confidencial. Nunca la compartimos con ICE ni ninguna agencia gubernamental sin orden judicial.',
    },
  ],
  ctaTitle: 'Protege lo que',
  ctaItalic: 'construiste',
  ctaSubtitle: 'Desde $19/mes. COI en 24 horas. Sin SSN — ITIN y EIN aceptados. Información confidencial.',
  ctaButton: 'Ver mi precio gratis',
  heroVideo: '/videos/hero-comercial.mp4',
  theme: 'purple',
  schema: {
    description: 'Seguro comercial para pequeños negocios en USA. Sin SSN, acepta ITIN y EIN. BOP, responsabilidad civil, Workers Comp y protección de propiedad. Restaurantes, salones, contratistas y más. Desde $19/mes.',
    price: '19',
  },
};

const configEn: InsurancePageConfig = {
  quoteType: 'Comercial',
  badgeIcon: Buildings,
  badge: 'Independent Agent · BOP · GL · Workers Comp · COI in 24hrs',
  heroLine1: 'Business Insurance',
  heroItalic: 'that actually covers you — not just looks like it',
  heroSubtitle: '$97,200. That\'s the average liability claim against a small business. 77% of small businesses are underinsured — and most think they\'re fine. We find the gaps before they cost you everything.',
  trustBadges: ['Independent agent', 'Multiple carriers compared', 'COI in 24 hours', 'Quote in 5 min'],
  priceFrom: 'From $19/mo',
  eligibilityTitle: 'Are you actually covered — or just think you are?',
  eligibilityText: '77% of small businesses are underinsured (Hiscox 2025). Most believe they\'re protected until a claim reveals otherwise.',
  eligibilityItems: [
    'No coverage: betting the business on nothing going wrong',
    'GL only: your property, equipment, and income aren\'t covered',
    'Have a BOP but unsure what it actually covers',
    'Hiring your first employee — workers comp just became legally required',
    'Client or landlord requires a COI and you need it fast',
    'Paying for coverage and wondering if you could get the same for less',
  ],
  features: [
    {
      icon: Scales,
      title: 'The gap between feeling covered and being covered',
      desc: '77% of small businesses are underinsured (Hiscox 2025). Average liability claim: $97,200. A defended lawsuit costs $75,000+ even when you win. Most find out what their policy doesn\'t cover when they file a claim.',
    },
    {
      icon: Certificate,
      title: 'One contract requires a COI. You have 24 hours.',
      desc: 'A Certificate of Insurance is the #1 purchase trigger in small business insurance. Landlords, general contractors, and corporate clients require it before you can work. We issue it in under 24 hours of your policy going active.',
    },
    {
      icon: ShieldCheck,
      title: 'Hired your first employee? Everything just changed.',
      desc: 'Workers Compensation becomes legally required the moment you have an employee in almost every state. It also opens new liability exposures most new employers don\'t know about. We review your full coverage picture.',
    },
  ],
  coverageItems: [
    'General Liability (GL) — from $19/mo',
    'Commercial property — space, equipment, and inventory',
    'BOP policy (GL + Property combined)',
    'Business interruption — covers income if you have to close',
    'Workers Compensation — required by law when you have employees',
    'Products liability',
    'Specialized equipment and machinery',
    'Certificate of Insurance (COI) in 24 hours',
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
      text: 'I thought my LLC protected me from lawsuits. It doesn\'t. Got GL insurance after this conversation — three months later a customer slipped in my store. Insurance handled everything.',
    },
    {
      name: 'Michael T.',
      location: 'Tampa, Florida',
      text: 'My general contractor wouldn\'t let me on the job without a COI. Had it in less than 24 hours. That one contract paid for five years of premiums.',
    },
    {
      name: 'Sarah D.',
      location: 'Austin, Texas',
      text: 'Hired my first employee and had no idea workers comp was legally required. They caught it before I had a problem — and found I was overpaying elsewhere too.',
    },
  ],
  faq: [
    {
      q: 'Does an LLC protect me from lawsuits?',
      a: 'An LLC protects your personal assets from business debts — not from negligence claims. If a customer gets injured and sues, the business pays legal fees and damages. Without GL insurance, that comes directly from your business accounts.',
    },
    {
      q: 'What\'s the minimum insurance my small business needs?',
      a: 'General Liability (GL) is the foundation — covers injuries and property damage to clients or third parties. Have a physical space or inventory? Add property coverage (or get a BOP that bundles both). Have an employee? Workers Comp is legally required in almost every state.',
    },
    {
      q: 'What is a BOP and do I need one?',
      a: 'A Business Owner\'s Policy combines General Liability and commercial property in one package — cheaper than buying separately. Right for most small businesses with a physical location, equipment, or inventory. Starts at $25/mo.',
    },
    {
      q: 'What is a COI and why does everyone require it?',
      a: 'A Certificate of Insurance proves you have active coverage with required limits. Landlords, corporate clients, and general contractors require it before you can work. We issue COIs in under 24 hours.',
    },
    {
      q: 'When should I file a claim vs. pay out of pocket?',
      a: 'For injuries to others or significant property damage: always file. For minor incidents below your deductible: calculate first. A claim can raise your premium $200–500/year for 3 years — sometimes more than the repair.',
    },
    {
      q: 'How much does small business insurance cost?',
      a: 'GL starts at $19/month for low-risk businesses. A BOP typically runs $25–80/month depending on industry and revenue. We compare multiple carriers to find your best rate.',
    },
  ],
  ctaTitle: 'Find out if you\'re',
  ctaItalic: 'actually covered',
  ctaSubtitle: 'Independent review. 5 minutes. Multiple carriers compared. COI in 24 hours. No commitment.',
  ctaButton: 'Check my coverage — free',
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
