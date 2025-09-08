"use client";

import { useState } from "react";

type DealInput = {
  title: string;
  description?: string;
  price_current: number;
  price_before?: number;
  affiliate_url: string;
  image_url?: string;
  stock_left?: number;
  expires_at?: string;
  merchant_name?: string;
};

export default function AdminPanel() {
  const [deal, setDeal] = useState<DealInput>({
    title: "",
    description: "",
    price_current: 0,
    price_before: undefined,
    affiliate_url: "",
    image_url: "",
    stock_left: undefined,
    expires_at: "",
    merchant_name: ""
  });

  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMsg(null);
    try {
      const res = await fetch("/api/admin/import", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "x-admin-secret": process.env.NEXT_PUBLIC_ADMIN_UI_SECRET || ""
        },
        body: JSON.stringify({ deals: [deal] })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Något gick fel");
      setMsg(`Importerade ${data.inserted} deal(s).`);
      setDeal({ title: "", description: "", price_current: 0, affiliate_url: "" } as any);
    } catch (err: any) {
      setMsg(`Fel: ${err.message}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <p className="text-sm text-slate-600">
        Fyll i en deal och klicka "Spara". För bulk-import använd API:et med `x-admin-secret`.
      </p>
      <div className="grid md:grid-cols-2 gap-4">
        <input className="border rounded-xl p-2" placeholder="Titel" value={deal.title} onChange={e=>setDeal(d=>({...d, title:e.target.value}))}/>
        <input className="border rounded-xl p-2" placeholder="Merchant (valfritt)" value={deal.merchant_name||""} onChange={e=>setDeal(d=>({...d, merchant_name:e.target.value}))}/>
        <input className="border rounded-xl p-2" placeholder="Pris nu (SEK)" type="number" value={deal.price_current} onChange={e=>setDeal(d=>({...d, price_current:Number(e.target.value)}))}/>
        <input className="border rounded-xl p-2" placeholder="Ord. pris (SEK)" type="number" value={deal.price_before||""} onChange={e=>setDeal(d=>({...d, price_before:Number(e.target.value)||undefined}))}/>
        <input className="border rounded-xl p-2 col-span-2" placeholder="Affiliate URL" value={deal.affiliate_url} onChange={e=>setDeal(d=>({...d, affiliate_url:e.target.value}))}/>
        <input className="border rounded-xl p-2 col-span-2" placeholder="Bild-URL" value={deal.image_url||""} onChange={e=>setDeal(d=>({...d, image_url:e.target.value}))}/>
        <input className="border rounded-xl p-2" placeholder="Antal kvar" type="number" value={deal.stock_left||""} onChange={e=>setDeal(d=>({...d, stock_left:Number(e.target.value)||undefined}))}/>
        <input className="border rounded-xl p-2" placeholder="Giltig till (ISO tid)" value={deal.expires_at||""} onChange={e=>setDeal(d=>({...d, expires_at:e.target.value}))}/>
      </div>
      <textarea className="border rounded-xl p-2 w-full" placeholder="Beskrivning (valfritt)" value={deal.description||""} onChange={e=>setDeal(d=>({...d, description:e.target.value}))}/>
      <div className="flex items-center gap-3">
        <button className="px-4 py-2 rounded-xl bg-black text-white" disabled={loading}>{loading?"Sparar...":"Spara"}</button>
        {msg && <span className="text-sm">{msg}</span>}
      </div>
      <p className="text-xs text-slate-500">
        OBS: Ställ in <code>ADMIN_SECRET</code> i servern och <code>NEXT_PUBLIC_ADMIN_UI_SECRET</code> i klienten.
      </p>
    </form>
  );
}
