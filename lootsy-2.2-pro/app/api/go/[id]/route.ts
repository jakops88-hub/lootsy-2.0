import { NextResponse } from "next/server";
import { supabaseService } from "@/lib/supabaseServer";
import crypto from "crypto";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const id = params.id;
  const svc = supabaseService();
  const { data: deal, error } = await svc.from("deals").select("*").eq("id", id).single();
  if (error || !deal) {
    return NextResponse.json({ error: "Deal not found" }, { status: 404 });
  }

  const ip = (req.headers.get("x-forwarded-for") || "").split(",")[0]?.trim() || "";
  const ua = req.headers.get("user-agent") || "";
  const ip_hash = ip ? crypto.createHash("sha256").update(ip).digest("hex") : null;

  await svc.from("clicks").insert({ deal_id: id, ua, ip_hash });

  return NextResponse.redirect(deal.affiliate_url, { status: 302, headers: { "referrer-policy": "no-referrer" } });
}
