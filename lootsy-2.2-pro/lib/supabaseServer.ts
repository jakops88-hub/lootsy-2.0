import { createClient } from "@supabase/supabase-js";
import { env } from "@/lib/env";

export function supabaseService() {
  if (!env.supabaseUrl || !env.supabaseServiceKey) {
    throw new Error("Supabase server env vars missing.");
  }
  return createClient(env.supabaseUrl, env.supabaseServiceKey, {
    auth: { persistSession: false },
  });
}

export function supabaseAnon() {
  if (!env.supabaseUrl || !env.supabaseAnonKey) {
    throw new Error("Supabase public env vars missing.");
  }
  return createClient(env.supabaseUrl, env.supabaseAnonKey, {
    auth: { persistSession: false },
  });
}
