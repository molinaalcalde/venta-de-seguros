import InsurancePage, { type InsurancePageConfig } from '@/components/InsurancePage';

const config: InsurancePageConfig = {
  quoteType: 'Comercial',
  badge: '🏢 BOP · Responsabilidad · Workers Comp · Sin SSN',
  heroLine1: 'Seguro para tu Negocio',
  heroItalic: 'protege lo que construiste con tanto esfuerzo',
  heroSubtitle: 'Un cliente se resbala, un incendio destruye tu inventario, alguien te demanda — sin seguro, pagas todo de tu bolsillo. El seguro comercial protege tu local, tus equipos y tu responsabilidad. Desde $19/mes. Sin SSN requerido.',
  trustBadges: ['Sin SSN requerido', 'Acepta ITIN o EIN', 'Desde $19/mes', 'COI disponible'],
  priceFrom: 'Desde $19/mes',
  eligibilityTitle: 'Para negocios hispanos de todos los tamaños',
  eligibilityText: 'Desde el self-employed hasta el restaurante con empleados. Cada negocio tiene riesgos distintos — y un seguro diseñado para esos riesgos específicos. Tu seguro de hogar NO cubre tu negocio, aunque trabajes desde casa.',
  eligibilityItems: [
    'Restaurantes, panaderías, tiendas de abarrotes y negocios de comida',
    'Contratistas: construcción, plomería, electricidad, pintura, landscaping',
    'Salones de belleza, barberías, spas y estéticas',
    'Empresas de limpieza, mudanzas y servicios al hogar',
    'Self-employed y trabajadores independientes con clientes',
  ],
  features: [
    { emoji: '🛡️', title: 'Póliza BOP — Todo en Uno, Más Económico', desc: 'La póliza BOP (Business Owner\'s Policy) combina responsabilidad civil general y protección de propiedad en un solo paquete. Más cobertura que comprarlos por separado — y generalmente más económico. Ideal para pequeños negocios.' },
    { emoji: '⚖️', title: 'Si te Demandan, el Seguro Paga los Abogados', desc: 'Si un cliente se lastima en tu negocio, daña algo en su propiedad o te demanda por tus servicios, el seguro cubre los gastos legales y la indemnización — aunque la demanda no prospere. Sin seguro, los honorarios de abogado solo pueden arruinarte.' },
    { emoji: '🔧', title: 'Tu Equipo, Inventario y Local Cubiertos', desc: 'Equipos, maquinaria, inventario, mobiliario — cubiertos ante robo, incendio y daños. Si tienes que cerrar temporalmente por un desastre, la cobertura de interrupción de negocio ayuda a pagar gastos fijos mientras te recuperas.' },
  ],
  coverageItems: [
    'Responsabilidad civil general (GL) — desde $19/mes',
    'Protección de propiedad comercial',
    'Póliza BOP (GL + Propiedad combinados)',
    'Equipos, maquinaria e inventario',
    'Interrupción del negocio',
    'Compensación laboral (Workers Comp)',
    'Responsabilidad de productos',
    'Certificado de Seguro (COI) disponible',
  ],
  steps: [
    { title: 'Cuéntanos sobre tu negocio', desc: 'Tipo de negocio, ubicación, número de empleados y actividad principal. Sin SSN — puedes usar tu EIN o ITIN.' },
    { title: 'Cotización por industria, no genérica', desc: 'Un restaurante, un salón y una empresa de construcción tienen riesgos distintos. Te damos una cotización real ajustada a tu sector.' },
    { title: 'Póliza activa y COI en 24 horas', desc: 'Una vez activa tu póliza, el Certificado de Seguro está disponible en menos de 24 horas para presentar a clientes, landlords o contratistas generales.' },
  ],
  testimonials: [
    { name: 'Alejandra C.', location: 'Los Angeles, California', text: 'Tengo un salón de belleza. Una clienta se resbaló y amenazó con demandarme. El seguro cubrió todo — los gastos legales y el arreglo. Sin el seguro hubiera tenido que cerrar el salón.' },
    { name: 'Roberto H.', location: 'Miami, Florida', text: 'Soy dueño de un restaurante pequeño. El seguro comercial costó menos de lo que pensaba y cubre mi equipo de cocina, el inventario y la responsabilidad. Vale cada centavo.' },
    { name: 'Carmen M.', location: 'Houston, Texas', text: 'Mi landlord me exigía un COI para renovar el contrato del local. En menos de 24 horas lo tuve listo. Sin este seguro hubiera perdido el local que tanto me costó conseguir.' },
  ],
  faq: [
    { q: '¿Qué seguro necesita mi pequeño negocio en USA?', a: 'Como mínimo, la mayoría de negocios necesitan Responsabilidad Civil General (GL) que cubre lesiones y daños causados a clientes o terceros. Si tienes local, equipos o inventario, también necesitas protección de propiedad. La póliza BOP combina ambos en un paquete más económico que comprarlos por separado. Los contratistas además necesitan Workers Comp si tienen empleados.' },
    { q: '¿Qué es una póliza BOP y cuánto cuesta?', a: 'BOP (Business Owner\'s Policy) combina responsabilidad civil general y protección de propiedad comercial en una sola póliza — generalmente más económica que contratar cada cobertura por separado. Los precios comienzan desde $25/mes dependiendo del sector y tamaño del negocio. Es el punto de partida ideal para restaurantes, tiendas, salones y negocios de servicio. Sujeto a términos y condiciones.' },
    { q: '¿Puedo asegurar mi negocio con ITIN en lugar de SSN?', a: 'Sí. Puedes contratar seguros comerciales con tu ITIN. Si tu negocio está registrado como LLC o corporación con EIN, el seguro puede ir a nombre del negocio usando el EIN directamente — sin necesitar el SSN del dueño.' },
    { q: '¿El seguro comercial cubre si un cliente me demanda?', a: 'Sí. La Responsabilidad Civil General (GL) cubre lesiones corporales y daños a la propiedad de terceros causados por tus operaciones, productos o empleados. Incluye gastos de defensa legal y la indemnización si corresponde. Los honorarios de abogado se pagan aunque la demanda no prospere.' },
    { q: '¿Necesito seguro si trabajo solo y desde casa?', a: 'Si tienes clientes y existe riesgo de que te demanden por daños o lesiones, sí es muy recomendable. Además, el seguro de hogar NO cubre actividades comerciales realizadas desde tu casa. Si recibes clientes en casa o guardas inventario, necesitas cobertura comercial aparte.' },
    { q: '¿Qué es un COI y por qué lo necesitan mis clientes?', a: 'Un COI (Certificate of Insurance) es un documento que prueba que tienes seguro activo con los límites de cobertura requeridos. Landlords, clientes corporativos y contratistas generales lo exigen antes de firmar contratos o dejarte trabajar en su propiedad. Sin COI, puedes perder contratos importantes. Lo emitimos en menos de 24 horas.' },
    { q: '¿El seguro cubre a mis empleados si se lesionan trabajando?', a: 'Sí, con la cobertura de Compensación Laboral (Workers Compensation). Esta cobertura es obligatoria en casi todos los estados si tienes empleados. Cubre gastos médicos, salarios perdidos y beneficios por incapacidad si un empleado se lesiona en el trabajo. Sin ella, el dueño del negocio puede ser responsable personal de todos esos gastos.' },
  ],
  ctaTitle: 'Protege lo que',
  ctaItalic: 'construiste',
  ctaSubtitle: 'Seguro comercial desde $19/mes. COI en 24 horas. Sin SSN — acepta EIN e ITIN.',
  ctaButton: 'Cotizar Seguro Comercial',
  theme: 'purple',
  schema: { description: 'Seguro comercial para pequeños negocios hispanos en USA. Sin SSN, acepta ITIN y EIN. BOP, responsabilidad civil, Workers Comp y protección de propiedad. Restaurantes, salones, contratistas y más. Desde $19/mes.', price: '19' },
};

export default function ComercialPage() {
  return <InsurancePage config={config} />;
}
