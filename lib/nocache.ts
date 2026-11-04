import { NextResponse } from 'next/server';

const NO_CACHE_HEADERS = {
  'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0',
  'Pragma': 'no-cache',
  'Expires': '0',
};

/** NextResponse.json wrapper that sets aggressive no-cache headers */
export function nocache(body: unknown, status = 200) {
  return NextResponse.json(body, { status, headers: NO_CACHE_HEADERS });
}
