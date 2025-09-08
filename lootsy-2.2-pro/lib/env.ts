export const env = {
  supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL!,
  supabaseAnonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  supabaseServiceKey: process.env.SUPABASE_SERVICE_ROLE_KEY!,
  adminEmail: process.env.ADMIN_EMAIL || "",
  adminSecret: process.env.ADMIN_SECRET || "",
  appName: process.env.NEXT_PUBLIC_APP_NAME || "Lootsy",
  stripePK: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "",
  stripeSK: process.env.STRIPE_SECRET_KEY || "",
  stripePriceId: process.env.STRIPE_PRICE_ID_PREMIUM || "",
  stripeWebhookSecret: process.env.STRIPE_WEBHOOK_SECRET || "",
};
