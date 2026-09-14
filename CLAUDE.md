# Aegis National Assurance — Project Rules

## Identity
Insurance sales site targeting US Hispanic market. Production project (real business), not a demo.
All responses to the user in **Spanish**.

## Essential commands
```bash
npm run dev          # local dev at localhost:3000
npm run build        # production build check before pushing
git push             # triggers Vercel auto-deploy
```

## Stack
- **Framework:** Next.js 14 App Router, TypeScript, `'use client'` on interactive components
- **Styles:** Tailwind CSS — sage color palette, Newsreader/Cormorant Garamond/Plus Jakarta Sans
- **DB:** Supabase — use `supabaseAdmin` (secret key) for server-side writes, `supabase` (publishable) for client reads
- **Deploy:** Vercel — `vercel.json` with `{"framework": "nextjs"}` is required

## Supabase patterns
```ts
// Server-side (API routes): always use supabaseAdmin
import { supabaseAdmin } from '@/lib/supabase'
const { data, error } = await supabaseAdmin.from('leads').insert({...})

// Client-side: use supabase (publishable key)
import { supabase } from '@/lib/supabase'
```

## Insurance content rules
- NEVER invent coverage amounts, premium prices, or specific policy terms
- Add "sujeto a términos y condiciones" qualifier on any coverage claims
- Tone: warm and professional, NOT salesy; address immigrant community concerns (privacy, simplicity)

## Code conventions
- Icons: `lucide-react` only (already installed)
- Forms: validate `nombre` + `email` as required minimum in API routes
- New API routes go in `app/api/[name]/route.ts`
- No new dependencies without checking if existing packages cover the need

## NEVER
- Commit `.env.local`
- Use the publishable Supabase client for server-side writes
- Add decorative UI elements not explicitly requested
- Make coverage promises without qualifiers
