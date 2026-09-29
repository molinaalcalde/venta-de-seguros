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

## Metodología de trabajo (LOOP)
1. Leer `/memory/` antes de tocar cualquier archivo
2. Proponer copy → esperar aprobación → implementar
3. Una página a la vez
4. Responder siempre en español a la usuaria

## Reglas absolutas de contenido
- NO: estatus migratorio, DACA, ICE, indocumentados, sin papeles
- NO: SSN/ITIN más de una vez por página (solo badge del hero)
- NO: cifras exactas sin fuente verificable
- NO: guiones em (—) en copy
- NO: "protege a tu familia" ni frases genéricas
- NO: "solo tu nombre y correo para empezar" — es falso
- NO: testimoniales donde cliente compró algo que Maria Fernanda no vende (vende SEGUROS, no autos)
- CTAs aprobados: "Cotizar gratis" / "Cotizar ahora" — NO "Ver mi precio gratis"

## Sobre el negocio
- Agente INDEPENDIENTE: compara 10-40+ aseguradoras
- Vende seguros, NO autos ni propiedades
- Opera en múltiples estados (NJ es referencia legal, no límite)
- Diferenciadores: comparación + revisión anual + acompañamiento en reclamos

## Datos de mercado verificados
- Latinos pagan $849/año vs $705 blancos — Insurance Journal 2024
- 55% hispanos tiene seguro de auto vs 80% general — Claritas 2024
- 48% americanos recibió aumento de prima sin explicación — JD Power 2025
- 51% no confía en su aseguradora — McKinsey
- Q3 2024: record histórico de comparación — LexisNexis

## Progreso de páginas
- [x] auto (ES + EN) — completado
- [ ] salud — alta prioridad
- [ ] vida, dental, comercial, auto-comercial, paquete, proteccion-extra, mascotas
- [ ] homepage (LangHomePageData.ts)
