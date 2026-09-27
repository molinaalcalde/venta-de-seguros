import InsurancePage, { type InsurancePageConfig } from '@/components/InsurancePage';

const config: InsurancePageConfig = {
  quoteType: 'AutoComercial',
  badge: '🚛 Vans · Camiones · Flotas · Sin SSN',
  heroLine1: 'Seguro de Auto Comercial',
  heroItalic: 'tu seguro personal no te cubre cuando trabajas',
  heroSubtitle: 'Si usas tu vehículo para trabajar — entregas, construcción, limpieza, plomería, catering — tu seguro personal puede rechazar el reclamo. El seguro comercial te cubre en jornada laboral. Sin SSN requerido.',
  trustBadges: ['Sin SSN requerido', 'Acepta ITIN o EIN', 'Desde $110/mes', 'COI en 24 horas'],
  priceFrom: 'Desde $110/mes',
  eligibilityTitle: '¿Usas tu vehículo para trabajar? Necesitas seguro comercial',
  eligibilityText: 'La ley es clara: el seguro de auto personal excluye el uso comercial. Si tienes un accidente mientras trabajas y solo tienes seguro personal, tu aseguradora puede negarte el pago. Muchos lo aprenden a las malas.',
  eligibilityItems: [
    'Contratistas: construcción, electricidad, plomería, landscaping',
    'Delivery y reparto — Amazon Flex, restaurantes, mensajería',
    'Food trucks, catering y panaderías con vehículo de trabajo',
    'Empresas de limpieza y mantenimiento',
    'Cualquier negocio con van, camioneta o camión de trabajo',
  ],
  features: [
    { emoji: '⚠️', title: 'Tu Seguro Personal NO Te Cubre Trabajando', desc: 'Si haces una entrega, visitas un cliente o transitas herramientas y tienes un accidente, tu seguro personal puede rechazar el reclamo. El comercial cubre explícitamente el uso laboral — sin excepciones.' },
    { emoji: '📋', title: 'COI en 24 Horas para Trabajar Sin Esperar', desc: 'Muchos contratistas generales, edificios y clientes corporativos exigen un Certificado de Seguro (COI) antes de dejarte entrar a trabajar. Lo emitimos en menos de 24 horas para que no pierdas ningún trabajo.' },
    { emoji: '👥', title: 'Cubre a Tus Empleados y Toda Tu Flota', desc: 'Agrega conductores adicionales y múltiples vehículos en una sola póliza. Protección completa para ti, tus empleados y toda tu operación comercial.' },
  ],
  coverageItems: [
    'Responsabilidad civil comercial (Liability)',
    'Colisión durante jornada laboral',
    'Daños al vehículo y carga transportada',
    'Robo del vehículo de trabajo',
    'Conductores adicionales y empleados',
    'Flotillas de 2 o más vehículos',
    'Certificado de Seguro (COI)',
    'Asistencia en carretera 24/7',
  ],
  steps: [
    { title: 'Cuéntanos sobre tu trabajo y vehículo', desc: 'Tipo de negocio, vehículo y número de conductores. Sin SSN — aceptamos ITIN o EIN del negocio.' },
    { title: 'Cotización ajustada a tu industria', desc: 'Un contratista, un delivery y un food truck tienen riesgos distintos. Te damos precio real según tu actividad — no un número genérico de calculadora.' },
    { title: 'COI disponible en 24 horas', desc: 'Póliza activa y Certificado de Seguro listo en menos de 24 horas. Puedes presentarlo a clientes y contratistas generales de inmediato.' },
  ],
  testimonials: [
    { name: 'Ernesto P.', location: 'Houston, Texas', text: 'Soy contratista de construcción. Me pidieron un COI para trabajar en un proyecto grande y me lo tuvieron listo al otro día. Sin ese papel no hubiera entrado al trabajo. Me salvaron el contrato.' },
    { name: 'Diana L.', location: 'Chicago, Illinois', text: 'Tengo 3 vans de limpieza. Antes nadie me aseguraba la flota sin SSN. Aquí lo hicieron sin problema, más rápido y más barato que en otros lugares. Muy profesionales.' },
    { name: 'Ramón G.', location: 'Phoenix, Arizona', text: 'Tuve un accidente yendo a una entrega con mi seguro personal. Me rechazaron el reclamo porque era "uso comercial". Ahora tengo el comercial y trabajo tranquilo todos los días.' },
  ],
  faq: [
    { q: '¿Cuál es la diferencia entre seguro de auto personal y comercial?', a: 'El seguro personal cubre el vehículo para uso privado — ir al trabajo, mandados, salidas personales. Si tienes un accidente mientras haces una entrega, visitas a un cliente o transportas materiales o herramientas de trabajo, tu aseguradora personal puede rechazar el reclamo porque es "uso comercial". El seguro comercial cubre explícitamente estas situaciones laborales.' },
    { q: '¿Necesito seguro comercial si uso mi camioneta para trabajar?', a: 'Sí. Si usas tu vehículo regularmente para visitar clientes, hacer entregas, transportar herramientas o materiales, o cualquier actividad comercial, necesitas seguro comercial. Esto incluye plomeros, electricistas, carpinteros, landscapers, delivery, food trucks y cualquier oficio que use un vehículo como herramienta de trabajo.' },
    { q: '¿Puedo sacar seguro comercial de auto con ITIN?', a: 'Sí. Aceptamos ITIN para contratar seguros de auto comerciales. Si el seguro va a nombre de tu negocio, también puedes usar tu EIN (número de identificación del negocio) en lugar del SSN personal.' },
    { q: '¿Qué es un COI y por qué lo exigen mis clientes?', a: 'Un COI (Certificate of Insurance / Certificado de Seguro) es un documento que prueba que tienes seguro activo con los límites de cobertura requeridos. Es muy común que contratistas generales, propietarios de edificios y clientes corporativos lo requieran antes de dejarte trabajar en su propiedad. Sin él, puedes perder contratos importantes. Lo emitimos en menos de 24 horas.' },
    { q: '¿Mi información se comparte con el gobierno o migración?', a: 'No. Tu información es 100% confidencial. Nunca la compartimos con ICE ni ninguna agencia gubernamental sin orden judicial. Tu estatus migratorio no afecta tu elegibilidad para el seguro comercial.' },
    { q: '¿Puedo asegurar múltiples vehículos en una sola póliza?', a: 'Sí. Ofrecemos pólizas de flota que cubren 2 o más vehículos comerciales. Esto generalmente resulta en ahorro por vehículo comparado con pólizas individuales, y simplifica la administración de tu seguro. Sujeto a términos y condiciones.' },
    { q: '¿El seguro comercial cubre a mis empleados si manejan mis vehículos?', a: 'Sí. El seguro comercial puede cubrir a conductores adicionales y empleados que manejen los vehículos asegurados durante jornada laboral. Es importante declarar todos los conductores habituales al contratar la póliza.' },
  ],
  ctaTitle: 'Tu negocio merece',
  ctaItalic: 'protección real',
  ctaSubtitle: 'Seguro comercial desde $110/mes. Sin SSN. COI disponible en 24 horas.',
  ctaButton: 'Cotizar Auto Comercial',
  theme: 'orange',
  schema: { description: 'Seguro de auto comercial para latinos — vans, camiones y flotas de trabajo. Sin SSN, acepta ITIN y EIN. COI en 24 horas para contratistas, delivery, food trucks y flotas. Desde $110/mes.', price: '110' },
};

export default function AutoComercialPage() {
  return <InsurancePage config={config} />;
}
