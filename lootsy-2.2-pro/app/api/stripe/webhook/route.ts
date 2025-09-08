import { NextResponse } from "next/server";
import Stripe from "stripe";
import { env } from "@/lib/env";
import { supabaseService } from "@/lib/supabaseServer";

export async function POST(req: Request) {
  const sig = req.headers.get("stripe-signature") || "";
  const rawBody = await req.text();

  if (!env.stripeWebhookSecret || !env.stripeSK) {
    return NextResponse.json({ error: "Not configured" }, { status: 400 });
  }
  const stripe = new Stripe(env.stripeSK, { apiVersion: "2024-06-20" });

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, sig, env.stripeWebhookSecret);
  } catch (err: any) {
    return NextResponse.json({ error: `Webhook signature verification failed. ${err.message}` }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const email = (session.customer_details?.email || "").toLowerCase();
    if (email) {
      const svc = supabaseService();
      // find profile by email
      const { data: profile } = await svc.from("profiles").select("id").eq("email", email).maybeSingle();
      if (profile?.id) {
        await svc.from("profiles").update({ premium: true }).eq("id", profile.id);
        // upsert subscription
        await svc.from("subscriptions").upsert({
          user_id: profile.id, status: "active", current_period_end: null
        }, { onConflict: "user_id" });
      }
    }
  }

  return NextResponse.json({ received: true });
}

export const config = {
  api: {
    bodyParser: false,
  },
};
