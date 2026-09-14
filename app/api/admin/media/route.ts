import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

const BUCKET = 'media';

export async function GET() {
  const { data, error } = await supabaseAdmin.storage
    .from(BUCKET)
    .list('', { sortBy: { column: 'created_at', order: 'desc' }, limit: 200 });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  const files = (data ?? [])
    .filter(f => f.name !== '.emptyFolderPlaceholder')
    .map(f => ({
      name: f.name,
      url: supabaseAdmin.storage.from(BUCKET).getPublicUrl(f.name).data.publicUrl,
      size: (f.metadata?.size as number) ?? 0,
      created_at: f.created_at ?? '',
    }));

  return NextResponse.json({ files });
}

export async function DELETE(req: NextRequest) {
  const { name } = await req.json();
  if (!name) return NextResponse.json({ error: 'Name required' }, { status: 400 });

  const { error } = await supabaseAdmin.storage.from(BUCKET).remove([name]);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
