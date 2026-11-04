import { NextRequest } from 'next/server';
import { getSupabaseAdmin } from '@/lib/supabase';
import { nocache } from '@/lib/nocache';

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;

const BUCKET = 'media';

export async function GET() {
  const admin = getSupabaseAdmin();
  const { data, error } = await admin.storage
    .from(BUCKET)
    .list('', { sortBy: { column: 'created_at', order: 'desc' }, limit: 200 });

  if (error) return nocache({ error: error.message }, 500);

  const files = (data ?? [])
    .filter(f => f.name !== '.emptyFolderPlaceholder')
    .map(f => ({
      name: f.name,
      url: admin.storage.from(BUCKET).getPublicUrl(f.name).data.publicUrl,
      size: (f.metadata?.size as number) ?? 0,
      created_at: f.created_at ?? '',
    }));

  return nocache({ files });
}

export async function DELETE(req: NextRequest) {
  const { name } = await req.json();
  if (!name) return nocache({ error: 'Name required' }, 400);

  const { error } = await getSupabaseAdmin().storage.from(BUCKET).remove([name]);
  if (error) return nocache({ error: error.message }, 500);
  return nocache({ ok: true });
}
