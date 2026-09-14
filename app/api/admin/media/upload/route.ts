import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

const BUCKET = 'media';
const MAX_MB = 10;
const ALLOWED = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/svg+xml'];

export async function POST(req: NextRequest) {
  const form = await req.formData();
  const file = form.get('file') as File | null;

  if (!file) return NextResponse.json({ error: 'No se recibió archivo' }, { status: 400 });
  if (!ALLOWED.includes(file.type))
    return NextResponse.json({ error: 'Formato no permitido (JPG, PNG, WebP, GIF, SVG)' }, { status: 400 });
  if (file.size > MAX_MB * 1024 * 1024)
    return NextResponse.json({ error: `El archivo supera ${MAX_MB}MB` }, { status: 400 });

  // Build a unique, safe filename
  const ext = file.name.split('.').pop()?.toLowerCase() ?? 'jpg';
  const base = file.name
    .replace(/\.[^/.]+$/, '')
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '-')
    .slice(0, 40);
  const safeName = `${Date.now()}-${base}.${ext}`;

  const buffer = await file.arrayBuffer();

  const { error } = await supabaseAdmin.storage
    .from(BUCKET)
    .upload(safeName, buffer, { contentType: file.type, upsert: false });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  const publicUrl = supabaseAdmin.storage.from(BUCKET).getPublicUrl(safeName).data.publicUrl;

  return NextResponse.json({ name: safeName, url: publicUrl }, { status: 201 });
}
