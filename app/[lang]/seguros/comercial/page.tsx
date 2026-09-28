import InsurancePage, { type InsurancePageConfig } from '@/components/InsurancePage';
import { Buildings, Scales, ShieldCheck, Certificate } from '@phosphor-icons/react';

const configEs: InsurancePageConfig = {
  quoteType: 'Comercial',
  badgeIcon: Buildings,
  badge: 'BOP · GL · Workers Comp · Sin SSN · COI en 24hs',
  heroLine1: 'Seguro para tu Negocio',
  heroItalic: 'protege lo que construiste con tanto esfuerzo',
  heroSubtitle: 'Un cliente se resbala en tu local. Te demandan por $80,000. ¿Podés pagar de tu bolsillo? Sin seguro comercial, una sola demanda puede cerrar lo que tardaste años en construir. Desde $19/mes. Sin SSN — aceptamos ITIN y EIN.',
  trustBadges: ['Sin SSN — ITIN o EIN', 'Desde $19/mes', 'COI en 24 horas', 'Asesor en español'],
  priceFrom: 'Desde $19/mes',
  eligibilityTitle: 'Para negocios hispanos de todos los tamaños',
  eligibilityText: 'Desde el trabajador independiente hasta el restaurante con empleados. Tu seguro de hogar NO cubre tu negocio — aunque trabajes desde casa. Y sin Certificado de Seguro (COI), muchos landlords y clientes no te van a dejar trabajar.',
  eligibilityItems: [
    'Restaurantes, panaderías, tiendas y negocios de comida',
    'Contratistas: construcción, plomería, electricidad, pintura, landscaping',
    'Salones de belleza, barberías, spas y estéticas',
    'Empresas de limpieza, mudanzas y servicios al hogar',
    'Trabajadores independientes (self-employed) con clientes',
  ],
  features: [
    {
      icon: Scales,
      title: 'Si Te Demandan, el Seguro Paga los Abogados — Aunque No Ganen',
      desc: 'Un cliente se lastima en tu negocio, alguien te acusa de dañar su propiedad, un empleado dice que lo discriminaste. Los honorarios de abogado solos pueden costarte $10,000–$50,000 solo para defenderte. La Responsabilidad Civil General (GL) cubre los gastos legales y la indemnización — aunque la demanda no prospere.',
    },
    {
      icon: ShieldCheck,
      title: 'Póliza BOP — Todo en Uno, Más Económico que por Separado',
      desc: 'La póliza BOP (Business Owner\'s Policy) combina Responsabilidad Civil General y protección de propiedad en un solo paquete — más cobertura a menor precio que contratarlos por separado. También cubrimos equipos, inventario y pérdida de ingresos si tenés que cerrar temporalmente por un siniestro.',
    },
    {
      icon: Certificate,
      title: 'COI en 24 Horas — No Perdés Ningún Trabajo',
      desc: 'El Certificado de Seguro (COI) es el documento que te exigen landlords, contratistas generales y clientes corporativos antes de dejarte entrar a trabajar. Sin él perdés contratos. Lo emitimos en menos de 24 horas de que tu póliza está activa.',
    },
  ],
  coverageItems: [
    'Responsabilidad Civil General (GL) — desde $19/mes',
    'Protección de propiedad comercial — local, equipo e inventario',
    'Póliza BOP (GL + Propiedad combinados)',
    'Interrupción del negocio — cubre ingresos si tenés que cerrar',
    'Compensación laboral (Workers Comp) — obligatoria con empleados',
    'Responsabilidad de productos',
    'Equipos y maquinaria especializada',
    'Certificado de Seguro (COI) disponible en 24 horas',
  ],
  steps: [
    {
      title: 'Cuéntanos sobre tu negocio — sin SSN',
      desc: 'Tipo de negocio, ubicación, número de empleados y actividad principal. Podés usar tu EIN o ITIN.',
    },
    {
      title: 'Cotización ajustada a tu industria, no genérica',
      desc: 'Un restaurante, un salón y una empresa de construcción tienen riesgos distintos. Te damos precio real según tu sector — no un número de calculadora.',
    },
    {
      title: 'Póliza activa y COI en menos de 24 horas',
      desc: 'El Certificado de Seguro está disponible en menos de 24 horas para presentar a clientes, landlords o contratistas generales.',
    },
  ],
  testimonials: [
    {
      name: 'Alejandra C.',
      location: 'Los Angeles, California',
      text: 'Tengo un salón de belleza. Una clienta se resbaló y amenazó con demandarme por $60,000. El seguro cubrió todo — los gastos legales y el arreglo. Sin el seguro hubiera tenido que cerrar el salón.',
    },
    {
      name: 'Roberto H.',
      location: 'Miami, Florida',
      text: 'Soy dueño de un restaurante pequeño. El seguro comercial costó menos de lo que pensaba y cubre mi cocina, el inventario y la responsabilidad. Si hay un incendio, el seguro paga. Vale cada centavo.',
    },
    {
      name: 'Carmen M.',
      location: 'Houston, Texas',
      text: 'Mi landlord me exigía un COI para renovar el contrato del local. En menos de 24 horas lo tuve listo. Sin ese papel hubiera perdido el local que tanto me costó conseguir.',
    },
  ],
  faq: [
    {
      q: '¿Qué seguro mínimo necesita mi pequeño negocio en USA?',
      a: 'Como mínimo, la mayoría de negocios necesitan Responsabilidad Civil General (GL) que cubre lesiones y daños causados a clientes o terceros. Si tenés local, equipos o inventario, también necesitás protección de propiedad. La póliza BOP combina ambos a menor costo. Los contratistas con empleados también necesitan Workers Comp por ley.',
    },
    {
      q: '¿Por qué mi seguro de hogar no cubre mi negocio?',
      a: 'Las pólizas de hogar excluyen explícitamente actividades comerciales. Si trabajás desde casa y recibís clientes, guardás inventario o usás equipos de trabajo, tu seguro personal no cubre daños ni responsabilidades relacionadas con tu negocio. Necesitás una cobertura comercial por separado.',
    },
    {
      q: '¿Puedo asegurar mi negocio con ITIN en lugar de SSN?',
      a: 'Sí. Podés contratar seguros comerciales con tu ITIN. Si tu negocio está registrado como LLC o corporación con EIN, el seguro puede ir a nombre del negocio usando el EIN directamente — sin necesitar el SSN del dueño.',
    },
    {
      q: '¿Qué es un COI y por qué me lo exigen?',
      a: 'Un COI (Certificate of Insurance) es un documento que prueba que tenés seguro activo con los límites de cobertura requeridos. Landlords, clientes corporativos y contratistas generales lo exigen antes de firmar contratos o dejarte trabajar en su propiedad. Sin COI perdés contratos importantes. Lo emitimos en menos de 24 horas.',
    },
    {
      q: '¿El seguro cubre si un empleado se lastima trabajando?',
      a: 'Sí, con la cobertura de Compensación Laboral (Workers Compensation). Es obligatoria en casi todos los estados si tenés empleados. Cubre gastos médicos, salarios perdidos y beneficios por incapacidad si un empleado se lastima en el trabajo. Sin ella, el dueño es responsable personal de todos esos costos.',
    },
    {
      q: '¿Qué es una póliza BOP y cuánto cuesta?',
      a: 'BOP (Business Owner\'s Policy) combina Responsabilidad Civil General y protección de propiedad comercial en una sola póliza — más económica que contratar cada cobertura por separado. Los precios comienzan desde $25/mes dependiendo del sector. Es el punto de partida ideal para restaurantes, tiendas, salones y negocios de servicio.',
    },
    {
      q: '¿Mi información se comparte con el gobierno o migración?',
      a: 'No. Tu información es 100% confidencial. Nunca la compartimos con ICE ni ninguna agencia gubernamental sin orden judicial. Tu estatus migratorio no afecta tu elegibilidad para contratar seguros comerciales.',
    },
  ],
  ctaTitle: 'Protegé lo que',
  ctaItalic: 'construiste',
  ctaSubtitle: 'Seguro comercial desde $19/mes. COI en 24 horas. Sin SSN — acepta EIN e ITIN.',
  ctaButton: 'Ver mi precio gratis',
  theme: 'purple',
  schema: {
    description: 'Seguro comercial para pequeños negocios hispanos en USA. Sin SSN, acepta ITIN y EIN. BOP, responsabilidad civil, Workers Comp y protección de propiedad. Restaurantes, salones, contratistas y más. Desde $19/mes.',
    price: '19',
  },
};

const configEn: InsurancePageConfig = {
  quoteType: 'Comercial',
  badgeIcon: Buildings,
  badge: 'BOP · GL · Workers Comp · No SSN · COI in 24hrs',
  heroLine1: 'Business Insurance',
  heroItalic: 'protect everything you\'ve built',
  heroSubtitle: 'A customer slips in your store. They sue you for $80,000. Can you pay that out of pocket? Without commercial insurance, one lawsuit can shut down what took you years to build. From $19/mo. No SSN — we accept ITIN and EIN.',
  trustBadges: ['No SSN — ITIN or EIN', 'From $19/mo', 'COI in 24 hours', 'Bilingual agents'],
  priceFrom: 'From $19/mo',
  eligibilityTitle: 'For Hispanic businesses of all sizes',
  eligibilityText: 'From the solo contractor to the restaurant with employees. Your homeowner\'s insurance does NOT cover your business — even if you work from home. And without a Certificate of Insurance (COI), many landlords and clients won\'t let you work.',
  eligibilityItems: [
    'Restaurants, bakeries, grocery stores, and food businesses',
    'Contractors: construction, plumbing, electrical, painting, landscaping',
    'Beauty salons, barbershops, spas, and esthetics',
    'Cleaning companies, movers, and home service businesses',
    'Self-employed and independent contractors with clients',
  ],
  features: [
    {
      icon: Scales,
      title: 'If You\'re Sued, Insurance Pays the Lawyers — Win or Lose',
      desc: 'A customer gets injured in your business, someone accuses you of damaging their property, an employee files a complaint. Legal fees alone can run $10,000–$50,000 just to defend yourself. General Liability (GL) covers legal costs and settlements — even if the lawsuit doesn\'t succeed.',
    },
    {
      icon: ShieldCheck,
      title: 'BOP Policy — Everything in One, Cheaper Than Buying Separate',
      desc: 'A Business Owner\'s Policy (BOP) combines General Liability and property protection in one package — more coverage at a lower price than buying them separately. We also cover equipment, inventory, and lost income if you\'re forced to close temporarily due to a covered event.',
    },
    {
      icon: Certificate,
      title: 'COI in 24 Hours — Never Miss a Job',
      desc: 'A Certificate of Insurance (COI) is the document landlords, general contractors, and corporate clients require before letting you work. Without it, you lose contracts. We issue it in less than 24 hours of your policy going active.',
    },
  ],
  coverageItems: [
    'General Liability (GL) — from $19/mo',
    'Commercial property — your space, equipment, and inventory',
    'BOP policy (GL + Property combined)',
    'Business interruption — covers income if you have to close',
    'Workers Compensation — required by law when you have employees',
    'Products liability',
    'Specialized equipment and machinery',
    'Certificate of Insurance (COI) in 24 hours',
  ],
  steps: [
    {
      title: 'Tell us about your business — no SSN needed',
      desc: 'Type of business, location, number of employees, and main activity. You can use your EIN or ITIN.',
    },
    {
      title: 'Industry-specific quote — not a generic estimate',
      desc: 'A restaurant, a salon, and a construction company have different risks. We give you a real price for your sector.',
    },
    {
      title: 'Active policy and COI in less than 24 hours',
      desc: 'Your Certificate of Insurance is ready in under 24 hours to present to clients, landlords, or general contractors.',
    },
  ],
  testimonials: [
    {
      name: 'Alejandra C.',
      location: 'Los Angeles, California',
      text: 'I own a beauty salon. A client slipped and threatened to sue me for $60,000. Insurance covered everything — legal fees and settlement. Without it, I would have had to close my salon.',
    },
    {
      name: 'Roberto H.',
      location: 'Miami, Florida',
      text: 'I own a small restaurant. Commercial insurance cost less than I expected and covers my kitchen, inventory, and liability. If there\'s a fire, insurance pays. Worth every cent.',
    },
    {
      name: 'Carmen M.',
      location: 'Houston, Texas',
      text: 'My landlord required a COI to renew my lease. I had it ready in less than 24 hours. Without that document I would have lost the space it took me so long to get.',
    },
  ],
  faq: [
    {
      q: 'What minimum insurance does my small business need?',
      a: 'At minimum, most businesses need General Liability (GL), which covers injuries and damages to customers or third parties. If you have a space, equipment, or inventory, you also need property protection. A BOP policy combines both at lower cost. Contractors with employees also need Workers Comp by law.',
    },
    {
      q: 'Why doesn\'t my homeowner\'s insurance cover my business?',
      a: 'Homeowner\'s policies explicitly exclude commercial activities. If you work from home and receive clients, store inventory, or use business equipment, your personal insurance won\'t cover business-related damages or liabilities. You need separate commercial coverage.',
    },
    {
      q: 'Can I insure my business with an ITIN instead of SSN?',
      a: 'Yes. You can get commercial insurance with your ITIN. If your business is registered as an LLC or corporation with an EIN, the policy can be in the business\'s name using the EIN directly — no owner SSN required.',
    },
    {
      q: 'What is a COI and why do clients require it?',
      a: 'A Certificate of Insurance (COI) proves you have active insurance with required coverage limits. Landlords, corporate clients, and general contractors require it before signing contracts or letting you work on their property. Without a COI, you lose important contracts. We issue it in less than 24 hours.',
    },
    {
      q: 'Does insurance cover an employee who gets injured at work?',
      a: 'Yes, with Workers Compensation coverage. It\'s required by law in almost every state when you have employees. It covers medical expenses, lost wages, and disability benefits if an employee is injured on the job. Without it, the owner is personally responsible for all those costs.',
    },
    {
      q: 'What is a BOP policy and how much does it cost?',
      a: 'A Business Owner\'s Policy (BOP) combines General Liability and commercial property protection in one policy — cheaper than buying each separately. Prices start at $25/month depending on your industry. It\'s the ideal starting point for restaurants, shops, salons, and service businesses.',
    },
  ],
  ctaTitle: 'Protect what',
  ctaItalic: 'you built',
  ctaSubtitle: 'Business insurance from $19/mo. COI in 24 hours. No SSN — ITIN and EIN accepted.',
  ctaButton: 'See my free quote',
  theme: 'purple',
  schema: {
    description: 'Commercial insurance for Hispanic small businesses in the USA. No SSN, accepts ITIN and EIN. BOP, general liability, Workers Comp, and property protection. Restaurants, salons, contractors and more. From $19/mo.',
    price: '19',
  },
};

export default function ComercialPage({ params }: { params: { lang: string } }) {
  const config = params.lang === 'en' ? configEn : configEs;
  return <InsurancePage config={config} />;
}
