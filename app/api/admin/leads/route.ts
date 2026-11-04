import { NextResponse } from 'next/server';
import { getSupabaseAdmin } from '@/lib/supabase';
import { nocache } from '@/lib/nocache';

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;

export async function GET() {
  const { data, error } = await getSupabaseAdmin()
    .from('leads')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    return nocache({ error: error.message }, 500);
  }

  // Normalizar: si estado no existe en la tabla, asignar 'Nuevo'
  const leads = (data ?? []).map((l: Record<string, unknown>) => ({
    ...l,
    estado: l.estado ?? 'Nuevo',
  }));

  return nocache({ leads });
}
