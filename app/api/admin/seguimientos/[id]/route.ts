import { NextRequest } from 'next/server';
import { getSupabaseAdmin } from '@/lib/supabase';
import { nocache } from '@/lib/nocache';

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;

/* PATCH — completar o editar seguimiento */
export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const body = await req.json();
  const updates: Record<string, unknown> = {};

  if (body.completado !== undefined) {
    updates.completado = body.completado;
    if (body.completado) updates.fecha_completada = new Date().toISOString();
    else updates.fecha_completada = null;
  }
  if (body.tipo !== undefined) updates.tipo = body.tipo;
  if (body.fecha_programada !== undefined) updates.fecha_programada = body.fecha_programada;
  if (body.descripcion !== undefined) updates.descripcion = body.descripcion;

  const { data, error } = await getSupabaseAdmin()
    .from('seguimientos')
    .update(updates)
    .eq('id', params.id)
    .select()
    .single();

  if (error) return nocache({ error: error.message }, 500);
  return nocache({ seguimiento: data });
}

/* DELETE */
export async function DELETE(_req: NextRequest, { params }: { params: { id: string } }) {
  const { error } = await getSupabaseAdmin()
    .from('seguimientos')
    .delete()
    .eq('id', params.id);

  if (error) return nocache({ error: error.message }, 500);
  return nocache({ ok: true });
}
