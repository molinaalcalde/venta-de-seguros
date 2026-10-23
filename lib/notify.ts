import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const NOTIFY_TO = [
  'info@consultingbymf.com',
  'molinaalcalde89@gmail.com',
];

interface LeadData {
  nombre: string;
  email?: string;
  telefono?: string | null;
  tipo_seguro?: string | null;
  canal?: string;
  ciudad?: string | null;
  estado_us?: string | null;
  lead_score?: number | null;
}

export async function notifyNewLead(lead: LeadData) {
  if (!process.env.RESEND_API_KEY) return;

  const canal = lead.canal || 'Formulario';
  const isWhatsApp = canal === 'WhatsApp';
  const ubicacion = [lead.ciudad, lead.estado_us].filter(Boolean).join(', ') || 'No especificada';
  const emailDisplay = lead.email?.endsWith('@lead.local') ? 'No proporcionado' : (lead.email || 'No proporcionado');

  try {
    await resend.emails.send({
      from: 'Consulting by MF <notificaciones@consultingbymf.com>',
      to: NOTIFY_TO,
      subject: `Nuevo lead${isWhatsApp ? ' via WhatsApp' : ''}: ${lead.nombre} - ${lead.tipo_seguro || 'General'}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 480px; margin: 0 auto; padding: 0;">
          <div style="background: #17281b; padding: 24px 20px; border-radius: 12px 12px 0 0;">
            <h2 style="color: #ffffff; margin: 0; font-size: 18px; font-weight: 600;">Nuevo Lead Recibido</h2>
            <p style="color: #b2d1b7; margin: 6px 0 0; font-size: 13px;">Consulting by MF</p>
          </div>

          <div style="background: #ffffff; padding: 24px 20px; border: 1px solid #e5e7eb; border-top: none;">
            <div style="background: ${isWhatsApp ? '#dcfce7' : '#dbeafe'}; border-radius: 8px; padding: 10px 14px; margin-bottom: 20px; display: inline-block;">
              <span style="font-size: 13px; font-weight: 600; color: ${isWhatsApp ? '#166534' : '#1e40af'};">
                ${isWhatsApp ? 'WhatsApp' : 'Formulario Web'}
              </span>
            </div>

            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 13px; width: 120px;">Nombre</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-size: 14px; font-weight: 500;">${lead.nombre}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 13px;">Telefono</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-size: 14px; font-weight: 500;">
                  ${lead.telefono ? `<a href="https://wa.me/${lead.telefono.replace(/\D/g, '')}" style="color: #25D366; text-decoration: none;">${lead.telefono}</a>` : 'No proporcionado'}
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 13px;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-size: 14px;">${emailDisplay}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 13px;">Tipo de seguro</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-size: 14px; font-weight: 500;">${lead.tipo_seguro || 'General'}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #6b7280; font-size: 13px;">Ubicacion</td>
                <td style="padding: 10px 0; color: #111827; font-size: 14px;">${ubicacion}</td>
              </tr>
            </table>
          </div>

          <div style="background: #f9fafb; padding: 16px 20px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px; text-align: center;">
            <a href="https://consultingbymf.com/admin/leads" style="display: inline-block; background: #17281b; color: #ffffff; padding: 10px 24px; border-radius: 8px; font-size: 13px; font-weight: 600; text-decoration: none;">
              Ver en el CRM
            </a>
          </div>
        </div>
      `,
    });
  } catch (err) {
    console.error('Resend notification error:', err);
  }
}
