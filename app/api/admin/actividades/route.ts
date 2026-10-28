import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseAdmin } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

/* GET — actividades por lead_id */
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const leadId = searchParams.get('lead_id');

  if (!leadId) {
    return NextResponse.json({ error: 'lead_id requerido' }, { status: 400 });
  }

  const { data, error } = await getSupabaseAdmin()
    .from('actividades')
    .select('*')
    .eq('lead_id', leadId)
    .order('created_at', { ascending: false });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ actividades: data ?? [] });
}

/* POST — crear actividad */
export async function POST(req: NextRequest) {
  const body = await req.json();
  const { lead_id, tipo, descripcion, metadata } = body;

  if (!lead_id || !descripcion) {
    return NextResponse.json({ error: 'lead_id y descripcion requeridos' }, { status: 400 });
  }

  const { data, error } = await getSupabaseAdmin()
    .from('actividades')
    .insert([{
      lead_id,
      tipo: tipo || 'nota',
      descripcion,
      metadata: metadata || null,
    }])
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ actividad: data }, { status: 201 });
}
