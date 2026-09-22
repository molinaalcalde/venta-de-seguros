import InsurancePage, { type InsurancePageConfig } from '@/components/InsurancePage';

const config: InsurancePageConfig = {
  quoteType: 'Comercial',
  badge: '🏢 BOP · Responsabilidad · Propiedad',
  heroLine1: 'Seguro para tu Negocio',
  heroItalic: 'protección total para lo que construiste',
  heroSubtitle: 'Un solo accidente, demanda o robo puede hundir años de trabajo. El seguro comercial protege tu local, tus equipos y tu responsabilidad — sin importar el tamaño de tu negocio.',
  trustBadges: ['Sin SSN requerido', 'Acepta ITIN o EIN', 'Desde $120/mes', 'COI disponible'],
  priceFrom: 'Desde $120/mes',
  eligibilityTitle: 'Para negocios de todos los tamaños',
  eligibilityText: 'Desde el pequeño negocio hasta la empresa mediana, tenemos coberturas diseñadas para la realidad del emprendedor hispano en USA.',
  eligibilityItems: [
    'Restaurantes, tiendas y negocios de servicio',
    'Contratistas de construcción, plomería y electricidad',
    'Salones de belleza, spas y estéticas',
    'Negocios con EIN (sin SSN del dueño)',
    'Trabajadores independientes y self-employed',
  ],
  features: [
    { emoji: '🛡️', title: 'Póliza BOP — Todo en Uno', desc: 'La póliza BOP combina responsabilidad civil general y protección de propiedad en un solo paquete económico. Menos trámites, más cobertura.' },
    { emoji: '⚖️', title: 'Protección Ante Demandas', desc: 'Si un cliente se lastima en tu negocio o demanda por daños causados por tus servicios, el seguro cubre los gastos legales y la indemnización.' },
    { emoji: '🔧', title: 'Cubre Equipos e Inventario', desc: 'Tu equipo, maquinaria, inventario y mobiliario están cubiertos ante robo, incendio y daños. Puedes seguir operando sin perderlo todo.' },
  ],
  coverageItems: [
    'Responsabilidad civil general (GL)',
    'Protección de propiedad comercial',
    'Cobertura de equipos y maquinaria',
    'Inventario y mercancía',
    'Gastos legales y defensa',
    'Interrupción del negocio',
    'Responsabilidad de productos',
    'Signos y publicidad exterior',
  ],
  steps: [
    { title: 'Cuéntanos sobre tu negocio', desc: 'Tipo de negocio, ubicación y número de empleados. Sin SSN — puedes usar tu EIN o ITIN.' },
    { title: 'Cotización por industria', desc: 'Cada sector tiene riesgos distintos. Te damos una cotización ajustada a tu industria específica.' },
    { title: 'Póliza activa y COI disponible', desc: 'Una vez activa tu póliza, el Certificado de Seguro está disponible en 24 horas para presentar a clientes o tu landlord.' },
  ],
  testimonials: [
    { name: 'Alejandra C.', location: 'Los Angeles, California', text: 'Tengo un salón de belleza. Una clienta se resbaló y amenazó con demandarme. El seguro cubrió todo — los gastos legales y el arreglo. Sin eso hubiera cerrado.' },
    { name: 'Roberto H.', location: 'Miami, Florida', text: 'Soy dueño de un restaurante pequeño. El seguro comercial costó menos de lo que pensaba y cubre mi equipo de cocina, el inventario y la responsabilidad.' },
    { name: 'Carmen M.', location: 'Houston, Texas', text: 'Mi landlord me exigía un COI para renovar el contrato del local. En menos de 24 horas lo tuve listo. Sin Aegis hubiera perdido el local.' },
  ],
  faq: [
    { q: '¿Qué seguro necesita mi negocio pequeño en USA?', a: 'Como mínimo, la mayoría de negocios necesitan responsabilidad civil general (GL) que cubre lesiones y daños causados a terceros. Si tienes local, equipos o inventario, también necesitas protección de propiedad. La póliza BOP combina ambos en un paquete económico.' },
    { q: '¿Qué es una póliza BOP y cuánto cuesta?', a: 'BOP (Business Owner\'s Policy) combina responsabilidad civil general y protección de propiedad comercial en una sola póliza, generalmente más económica que contratar cada cobertura por separado. Los precios comienzan desde $120/mes dependiendo del sector. Sujeto a términos y condiciones.' },
    { q: '¿Puedo asegurar mi negocio con ITIN en lugar de SSN?', a: 'Sí. Puedes contratar seguros comerciales con tu ITIN. Si tu negocio está registrado como LLC o corporación con EIN, el seguro puede ir a nombre del negocio usando el EIN directamente.' },
    { q: '¿El seguro cubre si un cliente me demanda?', a: 'Sí. La responsabilidad civil general (GL) cubre lesiones corporales y daños a la propiedad de terceros causados por tus operaciones, productos o empleados. Incluye gastos de defensa legal y la indemnización si corresponde.' },
    { q: '¿Necesito seguro comercial si soy self-employed?', a: 'Si trabajas con clientes y hay riesgo de que te demanden por daños o lesiones, sí es recomendable. Muchos clientes corporativos también exigen un COI a contratistas independientes antes de trabajar con ellos.' },
    { q: '¿Qué es un COI y por qué lo necesitan mis clientes?', a: 'Un COI (Certificate of Insurance) es un documento que prueba que tienes seguro activo. Es muy común que landlords, clientes corporativos y contratistas generales lo requieran. Lo emitimos en menos de 24 horas.' },
  ],
  ctaTitle: 'Protege lo que',
  ctaItalic: 'construiste',
  ctaSubtitle: 'Seguro comercial desde $120/mes. COI en 24 horas. Sin SSN — acepta EIN.',
  ctaButton: 'Cotizar Seguro Comercial',
  theme: 'purple',
  schema: { description: 'Seguro comercial para pequeños negocios hispanos. Sin SSN, acepta ITIN y EIN. BOP, responsabilidad civil y protección de propiedad. Desde $120/mes.', price: '120' },
};

export default function ComercialPage() {
  return <InsurancePage config={config} />;
}
