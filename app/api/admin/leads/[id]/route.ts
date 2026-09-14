import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

interface Params {
  params: { id: string };
}

export async function PATCH(req: NextRequest, { params }: Params) {
  const body = await req.json();
  const { estado, notas } = body;

  const updates: Record<string, unknown> = {};
  if (estado !== undefined) updates.estado = estado;
  if (notas !== undefined) updates.notas = notas;

  const { data, error } = await supabaseAdmin
    .from('leads')
    .update(updates)
    .eq('id', params.id)
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ lead: data });
}

export async function DELETE(_req: NextRequest, { params }: Params) {
  const { error } = await supabaseAdmin
    .from('leads')
    .delete()
    .eq('id', params.id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ ok: true });
}
