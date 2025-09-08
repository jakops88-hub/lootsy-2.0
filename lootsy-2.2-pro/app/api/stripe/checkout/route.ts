import Stripe from "stripe";
import { NextResponse } from "next/server";
import { env } from "@/lib/env";

export async function POST() {
  if (!env.stripeSK || !env.stripePriceId) {
    // Fallback: not configured
    return NextResponse.redirect("/deals", { status: 302 });
  }
  const stripe = new Stripe(env.stripeSK, { apiVersion: "2024-06-20" });

  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    line_items: [{ price: env.stripePriceId, quantity: 1 }],
    success_url: `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/deals?upgraded=1`,
    cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/premium`
  });

  return NextResponse.redirect(session.url!, { status: 303 });
}
