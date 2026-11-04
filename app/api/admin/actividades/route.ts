import { NextRequest } from 'next/server';
import { getSupabaseAdmin } from '@/lib/supabase';
import { nocache } from '@/lib/nocache';

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;

/* GET — actividades por lead_id */
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const leadId = searchParams.get('lead_id');

  if (!leadId) {
    return nocache({ error: 'lead_id requerido' }, 400);
  }

  const { data, error } = await getSupabaseAdmin()
    .from('actividades')
    .select('*')
    .eq('lead_id', leadId)
    .order('created_at', { ascending: false });

  if (error) return nocache({ error: error.message }, 500);
  return nocache({ actividades: data ?? [] });
}

/* POST — crear actividad */
export async function POST(req: NextRequest) {
  const body = await req.json();
  const { lead_id, tipo, descripcion, metadata } = body;

  if (!lead_id || !descripcion) {
    return nocache({ error: 'lead_id y descripcion requeridos' }, 400);
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

  if (error) return nocache({ error: error.message }, 500);
  return nocache({ actividad: data }, 201);
}
