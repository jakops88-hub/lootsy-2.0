# Lootsy – MVP (Next.js + Supabase)

A production-ready MVP for **Lootsy**, the Swedish deal & error-price platform.  
Tech stack: **Next.js 14 (App Router)**, **Supabase** (DB/Auth/Realtime), **TailwindCSS**.

## Features
- Public **Deals feed** with FOMO badges (stock left, time left, trending).
- **Free vs Premium** gating: free users see top 5 deals, premium gets all.
- **Affiliate redirect** (`/api/go/:id`) that counts clicks then redirects.
- **Admin panel** (server actions) for adding/editing deals.
- **Bulk import API** (`/api/admin/import`) using `ADMIN_SECRET`.
- **Stripe Checkout (optional)** for Premium (test-mode ready).
- Deploy-friendly for **Vercel**.

---

## 1) Setup

1. **Create Supabase project** → copy your `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
2. **Run SQL** in Supabase → `supabase/schema.sql` (creates tables & RLS policies).
3. Copy `.env.example` to `.env.local` and fill in secrets.
4. `npm i` then `npm run dev` to run locally.
5. **Push to GitHub**, then **Import to Vercel** (add the same env vars in Vercel).

Optional: Enable Stripe with test keys + webhook (see section "Payments").

---

## 2) Supabase Schema

Open the SQL file at `supabase/schema.sql` and run it in Supabase SQL editor.

**Tables:** `profiles`, `merchants`, `deals`, `clicks`, `subscriptions`  
**Policies:** Users can read active deals; only admin (server role) can write.

---

## 3) Admin Panel

- Sign in with the email that matches `ADMIN_EMAIL` (in env).
- Go to `/admin`. Uses server actions with the **service role** key (never shipped to client).

**Bulk import:** POST JSON to `/api/admin/import` with header `x-admin-secret: ADMIN_SECRET`:
```bash
curl -X POST https://YOUR_DOMAIN/api/admin/import   -H "content-type: application/json" -H "x-admin-secret: YOUR_SECRET"   -d '{"deals":[{"title":"Test","price_current":99,"price_before":299,"affiliate_url":"https://adtraction...","image_url":"https://...","merchant_name":"Webhallen","stock_left":3,"expires_at":"2025-12-31T23:59:59Z"}]}'
```

---

## 4) Payments (Optional, Test Mode)

- Set `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`, `STRIPE_SECRET_KEY`, `STRIPE_PRICE_ID_PREMIUM`.
- Create a webhook in Stripe to `/api/stripe/webhook` and set `STRIPE_WEBHOOK_SECRET`.
- After successful checkout, the webhook marks the user as `premium=true` in `subscriptions` + `profiles`.

If you skip Stripe, you can manually set `premium=true` on a user row in Supabase.

---

## 5) Affiliate Redirects

Links go through `/api/go/:id` to count clicks and then 302 redirect to the partner URL (no-referrer).

---

## 6) ENV Vars on Vercel

Add all `.env.local` keys to Project Settings → Environment Variables.  
Re-deploy. Done.

---

## 7) Roadmap ideas
- Web push notifications for **felpris-larm** (Service Worker + VAPID).
- Deal-scraper workers (scheduled functions) to auto-import.
- Better trend ranking (CTR, velocity).
- Multimarket expansion (SE → EU).

---

MIT © Lootsy
