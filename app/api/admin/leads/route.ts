import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

export async function GET() {
  const { data, error } = await supabaseAdmin
    .from('leads')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // Normalizar: si estado no existe en la tabla, asignar 'Nuevo'
  const leads = (data ?? []).map((l: Record<string, unknown>) => ({
    ...l,
    estado: l.estado ?? 'Nuevo',
  }));

  return NextResponse.json({ leads });
}
