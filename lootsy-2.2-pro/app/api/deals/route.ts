import { NextResponse } from "next/server";
import { supabaseService } from "@/lib/supabaseServer";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const limit = parseInt(searchParams.get("limit") || "0", 10);
  const svc = supabaseService();

  const query = svc.from("deals_trending").select("*").order("clicks_24h", { ascending: false }).order("created_at", { ascending: false });
  const { data, error } = await (limit > 0 ? query.limit(limit) : query);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ deals: data });
}
