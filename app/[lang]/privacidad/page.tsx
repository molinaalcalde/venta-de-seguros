import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Política de Privacidad — Maria Fernanda Insurance',
  robots: { index: false, follow: false },
};

export default function PrivacidadPage({ params }: { params: { lang: string } }) {
  const isEn = params.lang === 'en';
  const base = `/${params.lang}`;

  if (isEn) return (
    <main className="max-w-3xl mx-auto px-6 py-20 text-slate-800">
      <Link href={base} className="text-xs text-slate-500 hover:text-slate-800 mb-8 inline-block">← Back</Link>
      <h1 className="text-3xl font-semibold mb-2">Privacy Policy</h1>
      <p className="text-sm text-slate-500 mb-10">Last updated: October 1, 2026</p>

      <section className="space-y-8 text-sm leading-relaxed text-slate-700">
        <div>
          <h2 className="font-semibold text-slate-900 mb-2">1. Who We Are</h2>
          <p>Maria Fernanda Insurance Consulting is a licensed independent insurance agent operating in the United States. We collect personal information solely to provide insurance quotes and connect individuals with coverage options through licensed carriers.</p>
        </div>

        <div>
          <h2 className="font-semibold text-slate-900 mb-2">2. Information We Collect</h2>
          <p>We collect the following categories of information when you submit a quote request or contact us:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Name, email address, and phone number</li>
            <li>ZIP code, city, and state</li>
            <li>Insurance type requested and coverage preferences</li>
            <li>Vehicle information (for auto insurance quotes)</li>
            <li>General health information (for health insurance quotes only)</li>
            <li>TCPA consent record and timestamp</li>
          </ul>
          <p className="mt-2">We do not collect Social Security Numbers, financial account numbers, or government identification numbers through this website.</p>
        </div>

        <div>
          <h2 className="font-semibold text-slate-900 mb-2">3. How We Use Your Information</h2>
          <p>We do not sell or market your personal data. Your information is used exclusively to:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Prepare and deliver insurance quotes</li>
            <li>Contact you regarding insurance options you requested</li>
            <li>Connect you with licensed insurance carriers for coverage</li>
            <li>Comply with legal and regulatory requirements</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-slate-900 mb-2">4. Data Sharing</h2>
          <p>We do not sell or market personal data. We may share your information only with:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Technology service providers (hosting, CRM, email delivery) who process data on our behalf under confidentiality agreements</li>
            <li>Advertising platforms (Meta, Google) under their own privacy policies, solely for campaign measurement</li>
            <li>Licensed insurance carriers, solely to process your quote request</li>
            <li>Competent authorities when required by law</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-slate-900 mb-2">4. HIPAA Notice</h2>
          <p>Any health-related information you provide for health insurance quotes is handled in compliance with the Health Insurance Portability and Accountability Act (HIPAA). This information is used only for the purpose of obtaining health insurance quotes and is not disclosed to any party without your authorization except as required by law.</p>
        </div>

        <div>
          <h2 className="font-semibold text-slate-900 mb-2">5. TCPA Consent and Communications</h2>
          <p>By submitting a quote request, you provide prior express written consent for Maria Fernanda Insurance Consulting to contact you at the phone number and email address provided, including via automated telephone calls, pre-recorded messages, and text messages (SMS/MMS), for insurance-related purposes. Consent is not a condition of purchase. You may revoke consent at any time by replying STOP to any text message or emailing us.</p>
        </div>

        <div>
          <h2 className="font-semibold text-slate-900 mb-2">6. California Residents — CCPA Rights</h2>
          <p>California residents have the right to: (a) know what personal information we collect; (b) request deletion of their personal information; (c) opt out of the sale of personal information (we do not sell personal information); (d) non-discrimination for exercising these rights. To submit a request, contact us at the information below.</p>
        </div>

        <div>
          <h2 className="font-semibold text-slate-900 mb-2">7. Cookies and Tracking Technologies</h2>
          <p>This website may use cookies and similar tracking technologies, including analytics tools (Google Analytics) and advertising pixels (Meta Pixel), to understand usage patterns and improve our services. You may decline non-essential cookies using the consent banner displayed on your first visit. Declining tracking cookies does not affect your ability to use this website or request a quote.</p>
        </div>

        <div>
          <h2 className="font-semibold text-slate-900 mb-2">8. Data Retention</h2>
          <p>We retain your personal information for as long as necessary to fulfill the purposes described in this policy, and no longer than 5 years from the date of your last active contact, unless a longer period is required by applicable law or insurance regulation.</p>
        </div>

        <div>
          <h2 className="font-semibold text-slate-900 mb-2">9. Security</h2>
          <p>We implement HTTPS encryption, access controls, and periodic security reviews to protect your personal information. No method of transmission over the Internet is 100% secure. In the event of a data breach affecting your rights, we will notify affected users as required by applicable law.</p>
        </div>

        <div>
          <h2 className="font-semibold text-slate-900 mb-2">10. International Data Transfers</h2>
          <p>Your data may be processed on servers outside the United States through providers such as Supabase (database), Google (analytics), and Meta (advertising). Each of these providers maintains data transfer mechanisms that comply with internationally recognized data protection standards.</p>
        </div>

        <div>
          <h2 className="font-semibold text-slate-900 mb-2">10. Contact</h2>
          <p>For privacy-related requests or questions, contact us at:</p>
          <p className="mt-2 font-medium">Maria Fernanda Insurance Consulting<br />
          Email: [EMAIL]<br />
          Phone: (908) 228-0973</p>
        </div>
      </section>
    </main>
  );

  return (
    <main className="max-w-3xl mx-auto px-6 py-20 text-slate-800">
      <Link href={base} className="text-xs text-slate-500 hover:text-slate-800 mb-8 inline-block">← Volver</Link>
      <h1 className="text-3xl font-semibold mb-2">Política de Privacidad</h1>
      <p className="text-sm text-slate-500 mb-10">Última actualización: 1 de octubre de 2026</p>

      <section className="space-y-8 text-sm leading-relaxed text-slate-700">
        <div>
          <h2 className="font-semibold text-slate-900 mb-2">1. Quiénes somos</h2>
          <p>Maria Fernanda Insurance Consulting es una agencia de seguros independiente con licencia en los Estados Unidos. Recopilamos información personal exclusivamente para proporcionar cotizaciones de seguros y conectar a las personas con opciones de cobertura a través de aseguradoras con licencia.</p>
        </div>

        <div>
          <h2 className="font-semibold text-slate-900 mb-2">2. Información que recopilamos</h2>
          <p>Recopilamos la siguiente información cuando envías una solicitud de cotización o nos contactas:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Nombre, correo electrónico y número de teléfono</li>
            <li>Código postal, ciudad y estado</li>
            <li>Tipo de seguro solicitado y preferencias de cobertura</li>
            <li>Información del vehículo (para cotizaciones de seguro de auto)</li>
            <li>Información general de salud (solo para cotizaciones de seguro de salud)</li>
            <li>Registro de consentimiento TCPA y fecha y hora de consentimiento</li>
          </ul>
          <p className="mt-2">No recopilamos números de seguro social, números de cuentas financieras ni números de identificación gubernamental a través de este sitio web.</p>
        </div>

        <div>
          <h2 className="font-semibold text-slate-900 mb-2">3. Cómo usamos tu información</h2>
          <p>No vendemos ni comercializamos tus datos personales. Tu información se usa exclusivamente para:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Preparar y entregar cotizaciones de seguros</li>
            <li>Contactarte sobre las opciones de seguro que solicitaste</li>
            <li>Conectarte con aseguradoras con licencia para obtener cobertura</li>
            <li>Cumplir con requisitos legales y regulatorios</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-slate-900 mb-2">4. Compartición de datos con terceros</h2>
          <p>No vendemos ni comercializamos datos personales. Los datos pueden compartirse únicamente con:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Proveedores de servicios tecnológicos (alojamiento, CRM, correo electrónico) que procesan datos en nuestro nombre bajo acuerdos de confidencialidad</li>
            <li>Plataformas de publicidad (Meta, Google) bajo sus propias políticas de privacidad, exclusivamente para medición de campañas</li>
            <li>Aseguradoras con licencia, exclusivamente para procesar tu solicitud de cotización</li>
            <li>Autoridades competentes cuando lo exija la ley</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-slate-900 mb-2">4. Aviso HIPAA</h2>
          <p>Cualquier información de salud que proporciones para cotizaciones de seguro médico se maneja en cumplimiento con la Ley de Portabilidad y Responsabilidad del Seguro Médico (HIPAA). Esta información se usa únicamente para obtener cotizaciones de seguro de salud y no se divulga a ninguna parte sin tu autorización, excepto según lo exija la ley.</p>
        </div>

        <div>
          <h2 className="font-semibold text-slate-900 mb-2">5. Consentimiento TCPA y comunicaciones</h2>
          <p>Al enviar una solicitud de cotización, otorgas consentimiento expreso por escrito para que Maria Fernanda Insurance Consulting te contacte al número de teléfono y correo electrónico proporcionados, incluyendo llamadas telefónicas automatizadas, mensajes pregrabados y mensajes de texto (SMS/MMS), para fines relacionados con seguros. El consentimiento no es condición para realizar ninguna compra. Puedes revocar el consentimiento en cualquier momento respondiendo STOP a cualquier mensaje de texto o enviándonos un correo electrónico.</p>
        </div>

        <div>
          <h2 className="font-semibold text-slate-900 mb-2">6. Residentes de California — Derechos bajo CCPA</h2>
          <p>Los residentes de California tienen derecho a: (a) saber qué información personal recopilamos; (b) solicitar la eliminación de su información personal; (c) optar por no participar en la venta de información personal (no vendemos información personal); (d) no discriminación por ejercer estos derechos. Para enviar una solicitud, contáctanos con la información a continuación.</p>
        </div>

        <div>
          <h2 className="font-semibold text-slate-900 mb-2">7. Cookies y tecnologías de seguimiento</h2>
          <p>Este sitio web puede usar cookies y tecnologías de seguimiento similares, incluyendo herramientas de análisis (Google Analytics) y píxeles publicitarios (Meta Pixel), para comprender los patrones de uso y mejorar nuestros servicios. Puedes rechazar las cookies no esenciales usando el banner de consentimiento que se muestra en tu primera visita. Rechazar las cookies de seguimiento no afecta tu capacidad de usar este sitio web ni de solicitar una cotización.</p>
        </div>

        <div>
          <h2 className="font-semibold text-slate-900 mb-2">8. Retención de datos</h2>
          <p>Conservamos tu información personal durante el tiempo necesario para cumplir los propósitos descritos en esta política, y no más de 5 años desde la fecha de tu último contacto activo, salvo que una obligación legal o regulatoria de seguros exija un período distinto.</p>
        </div>

        <div>
          <h2 className="font-semibold text-slate-900 mb-2">9. Seguridad</h2>
          <p>Implementamos cifrado HTTPS, control de acceso a sistemas internos y revisiones periódicas de seguridad para proteger tu información personal. Ningún método de transmisión por Internet es 100% seguro. En caso de brecha de seguridad que afecte tus derechos, notificaremos a los usuarios afectados conforme a la normativa aplicable.</p>
        </div>

        <div>
          <h2 className="font-semibold text-slate-900 mb-2">10. Transferencias internacionales de datos</h2>
          <p>Tus datos pueden ser procesados en servidores fuera de Estados Unidos a través de proveedores como Supabase (base de datos), Google (analítica) y Meta (publicidad). Cada uno de estos proveedores cuenta con mecanismos de transferencia internacional que cumplen con estándares reconocidos de protección de datos.</p>
        </div>

        <div>
          <h2 className="font-semibold text-slate-900 mb-2">10. Contacto</h2>
          <p>Para solicitudes o preguntas relacionadas con privacidad, contáctanos en:</p>
          <p className="mt-2 font-medium">Maria Fernanda Insurance Consulting<br />
          Email: [EMAIL]<br />
          Teléfono: (908) 228-0973</p>
        </div>
      </section>
    </main>
  );
}
