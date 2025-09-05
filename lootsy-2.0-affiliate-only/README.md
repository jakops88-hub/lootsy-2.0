# Lootsy 2.0 — Affiliate-only

Next.js 14 (App Router) + Supabase. Fokus: SEO, RSS, sitemap, robots, dark mode, sök/filter, featured deals och enkel admin.

## Snabbstart
```bash
cp .env.example .env.local
npm install
npm run dev
```
Fyll din `.env.local`. För Vercel: lägg samma variabler i Project Settings → Environment Variables.

## Supabase
Kör `supabase/schema.sql` i SQL editor. Lägg in `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY` och `SUPABASE_SERVICE_ROLE_KEY` i Vercel.

## Deploy (Vercel)
- Node 20.x
- Build: `npm run vercel-build`
- Install: `npm install`
- Output dir: tom
- `vercel.json` finns.
