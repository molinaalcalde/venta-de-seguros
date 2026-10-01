import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service | Términos de Servicio — María Fernanda Insurance',
  robots: { index: false, follow: false },
};

export default function TerminosPage({ params }: { params: { lang: string } }) {
  const isEn = params.lang === 'en';
  const base = `/${params.lang}`;

  if (isEn) return (
    <main className="max-w-3xl mx-auto px-6 py-20 text-slate-800">
      <Link href={base} className="text-xs text-slate-500 hover:text-slate-800 mb-8 inline-block">← Back</Link>
      <h1 className="text-3xl font-semibold mb-2">Terms of Service</h1>
      <p className="text-sm text-slate-500 mb-10">Last updated: October 1, 2026</p>

      <section className="space-y-8 text-sm leading-relaxed text-slate-700">
        <div>
          <h2 className="font-semibold text-slate-900 mb-2">1. Informational Purpose Only</h2>
          <p>This website is provided for informational purposes only. Nothing on this website constitutes a binding offer of insurance coverage, a guarantee of insurability, or professional legal, financial, or tax advice. All information is subject to change without notice.</p>
        </div>

        <div>
          <h2 className="font-semibold text-slate-900 mb-2">2. No Binding Quotes</h2>
          <p>Price estimates, premium ranges, and savings figures displayed on this website are estimates only, based on general market data. They are not binding offers of coverage. Final premiums are determined by the issuing carrier following underwriting review of your individual risk profile. Actual rates may differ from estimates shown.</p>
        </div>

        <div>
          <h2 className="font-semibold text-slate-900 mb-2">3. Licensing</h2>
          <p>María Fernanda Insurance Consulting is a licensed independent insurance agent in New Jersey (License #[NJ_LICENSE]) and in additional states upon request. This website does not constitute a solicitation for insurance in any state where the agent is not licensed to sell insurance. By submitting a quote request, you represent that you are located in a state where we are licensed to conduct insurance business.</p>
        </div>

        <div>
          <h2 className="font-semibold text-slate-900 mb-2">4. Testimonials and Results Disclosure</h2>
          <p>Testimonials displayed on this website reflect the individual experiences and documented results of specific clients. These results are not typical and are not guaranteed. Most customers achieve savings between $0 and $400 per year when switching or bundling policies. Individual results depend on state, coverage type, selected carrier, driving history, and other personal risk factors. An independent insurance agent will contact you to evaluate your specific situation.</p>
        </div>

        <div>
          <h2 className="font-semibold text-slate-900 mb-2">5. No Guarantee of Coverage</h2>
          <p>Submitting a quote request does not guarantee that coverage will be offered or approved. All insurance products are subject to underwriting review and approval by the issuing carrier. Coverage may be denied, modified, or conditioned based on individual risk factors.</p>
        </div>

        <div>
          <h2 className="font-semibold text-slate-900 mb-2">6. Accuracy of Information</h2>
          <p>We make reasonable efforts to ensure the accuracy of information on this website. However, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or suitability of the information. Any reliance on information from this website is at your own risk.</p>
        </div>

        <div>
          <h2 className="font-semibold text-slate-900 mb-2">7. Third-Party Links</h2>
          <p>This website may contain links to third-party websites. We have no control over the content or privacy practices of those sites and accept no responsibility for them. The inclusion of any link does not imply endorsement.</p>
        </div>

        <div>
          <h2 className="font-semibold text-slate-900 mb-2">8. Limitation of Liability</h2>
          <p>To the maximum extent permitted by applicable law, María Fernanda Insurance Consulting shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of this website or reliance on information contained herein. Our total liability for any claim shall not exceed the amount of fees, if any, paid by you to us in the 12 months preceding the claim.</p>
        </div>

        <div>
          <h2 className="font-semibold text-slate-900 mb-2">9. Governing Law and Dispute Resolution</h2>
          <p>These Terms of Service shall be governed by and construed in accordance with the laws of the State of New Jersey, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be resolved through binding arbitration in New Jersey, except that either party may seek injunctive relief in a court of competent jurisdiction.</p>
        </div>

        <div>
          <h2 className="font-semibold text-slate-900 mb-2">10. Changes to These Terms</h2>
          <p>We reserve the right to modify these Terms of Service at any time. Changes will be effective upon posting to this website. Continued use of this website following any changes constitutes acceptance of the revised Terms.</p>
        </div>

        <div>
          <h2 className="font-semibold text-slate-900 mb-2">11. Contact</h2>
          <p>For questions about these Terms, contact us at:</p>
          <p className="mt-2 font-medium">María Fernanda Insurance Consulting<br />
          Email: [EMAIL]<br />
          Phone: (908) 228-0973</p>
        </div>
      </section>
    </main>
  );

  return (
    <main className="max-w-3xl mx-auto px-6 py-20 text-slate-800">
      <Link href={base} className="text-xs text-slate-500 hover:text-slate-800 mb-8 inline-block">← Volver</Link>
      <h1 className="text-3xl font-semibold mb-2">Términos de Servicio</h1>
      <p className="text-sm text-slate-500 mb-10">Última actualización: 1 de octubre de 2026</p>

      <section className="space-y-8 text-sm leading-relaxed text-slate-700">
        <div>
          <h2 className="font-semibold text-slate-900 mb-2">1. Solo con fines informativos</h2>
          <p>Este sitio web se proporciona únicamente con fines informativos. Nada en este sitio web constituye una oferta vinculante de cobertura de seguro, una garantía de asegurabilidad, ni asesoría profesional legal, financiera o fiscal. Toda la información está sujeta a cambios sin previo aviso.</p>
        </div>

        <div>
          <h2 className="font-semibold text-slate-900 mb-2">2. Cotizaciones no vinculantes</h2>
          <p>Las estimaciones de precio, rangos de prima y cifras de ahorro que aparecen en este sitio web son solo estimaciones basadas en datos generales del mercado. No son ofertas vinculantes de cobertura. Las primas finales son determinadas por la aseguradora emisora tras la revisión de suscripción de tu perfil de riesgo individual. Las tarifas reales pueden diferir de las estimaciones mostradas.</p>
        </div>

        <div>
          <h2 className="font-semibold text-slate-900 mb-2">3. Licencias</h2>
          <p>María Fernanda Insurance Consulting es una agente de seguros independiente con licencia en New Jersey (Licencia #[NJ_LICENSE]) y en estados adicionales disponible a solicitud. Este sitio web no constituye una solicitud de seguros en ningún estado donde la agente no tenga licencia para vender seguros.</p>
        </div>

        <div>
          <h2 className="font-semibold text-slate-900 mb-2">4. Divulgación sobre testimoniales y resultados</h2>
          <p>Los testimoniales que aparecen en este sitio web reflejan las experiencias individuales y los resultados documentados de clientes específicos. Estos resultados no son típicos ni están garantizados. La mayoría de los clientes obtiene ahorros entre $0 y $400 al año al cambiar o combinar pólizas. Los resultados individuales dependen del estado, tipo de cobertura, aseguradora seleccionada y otros factores de riesgo personales.</p>
        </div>

        <div>
          <h2 className="font-semibold text-slate-900 mb-2">5. Sin garantía de cobertura</h2>
          <p>Enviar una solicitud de cotización no garantiza que se ofrezca o apruebe cobertura. Todos los productos de seguro están sujetos a revisión y aprobación de suscripción por parte de la aseguradora emisora. La cobertura puede ser denegada, modificada o condicionada en función de factores de riesgo individuales.</p>
        </div>

        <div>
          <h2 className="font-semibold text-slate-900 mb-2">6. Exactitud de la información</h2>
          <p>Realizamos esfuerzos razonables para garantizar la exactitud de la información en este sitio web. Sin embargo, no hacemos representaciones ni garantías de ningún tipo sobre la integridad, exactitud, confiabilidad o idoneidad de la información. Cualquier uso de la información de este sitio web es bajo tu propio riesgo.</p>
        </div>

        <div>
          <h2 className="font-semibold text-slate-900 mb-2">7. Limitación de responsabilidad</h2>
          <p>En la máxima medida permitida por la ley aplicable, María Fernanda Insurance Consulting no será responsable de ningún daño indirecto, incidental, especial, consecuente o punitivo que surja del uso de este sitio web. Nuestra responsabilidad total por cualquier reclamación no superará el monto de los honorarios, si los hubiera, pagados por ti en los 12 meses anteriores a la reclamación.</p>
        </div>

        <div>
          <h2 className="font-semibold text-slate-900 mb-2">8. Ley aplicable y resolución de disputas</h2>
          <p>Estos Términos de Servicio se regirán e interpretarán de conformidad con las leyes del Estado de New Jersey. Cualquier disputa que surja de estos Términos se resolverá mediante arbitraje vinculante en New Jersey, salvo que cualquiera de las partes pueda solicitar medidas cautelares ante un tribunal competente.</p>
        </div>

        <div>
          <h2 className="font-semibold text-slate-900 mb-2">9. Cambios en estos Términos</h2>
          <p>Nos reservamos el derecho de modificar estos Términos de Servicio en cualquier momento. Los cambios entrarán en vigor al publicarse en este sitio web. El uso continuado del sitio web tras cualquier cambio constituye la aceptación de los Términos revisados.</p>
        </div>

        <div>
          <h2 className="font-semibold text-slate-900 mb-2">10. Contacto</h2>
          <p>Para preguntas sobre estos Términos, contáctanos en:</p>
          <p className="mt-2 font-medium">María Fernanda Insurance Consulting<br />
          Email: [EMAIL]<br />
          Teléfono: (908) 228-0973</p>
        </div>
      </section>
    </main>
  );
}
