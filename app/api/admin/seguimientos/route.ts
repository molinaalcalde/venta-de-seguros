import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseAdmin } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

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

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ seguimientos: data ?? [] });
  }

  if (leadId) {
    const { data, error } = await sb
      .from('seguimientos')
      .select('*')
      .eq('lead_id', leadId)
      .order('fecha_programada', { ascending: true });

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ seguimientos: data ?? [] });
  }

  return NextResponse.json({ error: 'lead_id o pendientes requerido' }, { status: 400 });
}

/* POST — crear seguimiento */
export async function POST(req: NextRequest) {
  const body = await req.json();
  const { lead_id, tipo, fecha_programada, descripcion } = body;

  if (!lead_id || !fecha_programada) {
    return NextResponse.json({ error: 'lead_id y fecha_programada requeridos' }, { status: 400 });
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

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ seguimiento: data }, { status: 201 });
}
