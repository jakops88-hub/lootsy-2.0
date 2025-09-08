import { NextResponse } from "next/server";
import { env } from "@/lib/env";
import { supabaseService } from "@/lib/supabaseServer";

export async function POST(req: Request) {
  const secret = req.headers.get("x-admin-secret");
  if (!secret || secret !== env.adminSecret) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json().catch(() => null) as any;
  if (!body || !Array.isArray(body.deals)) {
    return NextResponse.json({ error: "Invalid payload. Expected { deals: [...] }" }, { status: 400 });
  }

  const svc = supabaseService();

  // Ensure merchants exist, then insert deals
  const results = [];
  for (const d of body.deals) {
    const merchantName = d.merchant_name || "Unknown";
    let merchantId: string | null = null;

    // find or create merchant
    const { data: found } = await svc.from("merchants").select("id").eq("name", merchantName).maybeSingle();
    if (found?.id) {
      merchantId = found.id;
    } else {
      const { data: created, error: mErr } = await svc.from("merchants").insert({ name: merchantName }).select("id").single();
      if (mErr) return NextResponse.json({ error: mErr.message }, { status: 500 });
      merchantId = created.id;
    }

    const payload = {
      title: d.title,
      description: d.description || null,
      price_current: d.price_current,
      price_before: d.price_before || null,
      affiliate_url: d.affiliate_url,
      image_url: d.image_url || null,
      stock_left: d.stock_left ?? null,
      expires_at: d.expires_at ?? null,
      is_active: d.is_active ?? true,
      merchant_id: merchantId
    };

    const { data: deal, error } = await svc.from("deals").insert(payload).select("*").single();
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    results.push(deal);
  }

  return NextResponse.json({ inserted: results.length, deals: results });
}
