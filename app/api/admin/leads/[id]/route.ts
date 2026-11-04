import { NextRequest } from 'next/server';
import { getSupabaseAdmin } from '@/lib/supabase';
import { nocache } from '@/lib/nocache';

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;

const ALLOWED_FIELDS = [
  'estado', 'notas', 'nombre', 'email', 'telefono',
  'tipo_seguro', 'nivel_proteccion', 'zip_code', 'estado_us', 'ciudad',
  'timeline', 'tiene_seguro', 'lead_score', 'detalles',
  'idioma_preferido', 'fuente', 'aseguradora_actual',
  'fecha_vencimiento_poliza', 'motivo_perdida', 'valor_estimado',
  'primer_contacto_at', 'ultimo_contacto_at', 'proximo_seguimiento',
];

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const body = await req.json();

  const updates: Record<string, unknown> = {};
  for (const key of ALLOWED_FIELDS) {
    if (body[key] !== undefined) updates[key] = body[key];
  }

  if (Object.keys(updates).length === 0) {
    return nocache({ error: 'No hay campos para actualizar' }, 400);
  }

  const { data, error } = await getSupabaseAdmin()
    .from('leads')
    .update(updates)
    .eq('id', params.id)
    .select()
    .single();

  if (error) {
    return nocache({ error: error.message }, 500);
  }
  return nocache({ lead: data });
}

export async function DELETE(_req: NextRequest, { params }: { params: { id: string } }) {
  const { error } = await getSupabaseAdmin()
    .from('leads')
    .delete()
    .eq('id', params.id);

  if (error) {
    return nocache({ error: error.message }, 500);
  }
  return nocache({ ok: true });
}
