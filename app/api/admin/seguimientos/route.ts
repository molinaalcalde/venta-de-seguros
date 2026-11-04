import { NextRequest } from 'next/server';
import { getSupabaseAdmin } from '@/lib/supabase';
import { nocache } from '@/lib/nocache';

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;

/* GET — seguimientos por lead_id o todos los pendientes (para vista "Hoy") */
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const leadId = searchParams.get('lead_id');
  const pendientes = searchParams.get('pendientes');

  const sb = getSupabaseAdmin();

  if (pendientes === '1') {
    // Todos los seguimientos no completados, ordenados por fecha
    const { data, error } = await sb
      .from('seguimientos')
      .select('*, leads(id, nombre, tipo_seguro, telefono, email)')
      .eq('completado', false)
      .order('fecha_programada', { ascending: true });

    if (error) return nocache({ error: error.message }, 500);
    return nocache({ seguimientos: data ?? [] });
  }

  if (leadId) {
    const { data, error } = await sb
      .from('seguimientos')
      .select('*')
      .eq('lead_id', leadId)
      .order('fecha_programada', { ascending: true });

    if (error) return nocache({ error: error.message }, 500);
    return nocache({ seguimientos: data ?? [] });
  }

  return nocache({ error: 'lead_id o pendientes requerido' }, 400);
}

/* POST — crear seguimiento */
export async function POST(req: NextRequest) {
  const body = await req.json();
  const { lead_id, tipo, fecha_programada, descripcion } = body;

  if (!lead_id || !fecha_programada) {
    return nocache({ error: 'lead_id y fecha_programada requeridos' }, 400);
  }

  const { data, error } = await getSupabaseAdmin()
    .from('seguimientos')
    .insert([{
      lead_id,
      tipo: tipo || 'otro',
      fecha_programada,
      descripcion: descripcion || null,
    }])
    .select()
    .single();

  if (error) return nocache({ error: error.message }, 500);
  return nocache({ seguimiento: data }, 201);
}
