import Image from "next/image";
import Link from "next/link";
import { formatCurrency, discountPercent } from "@/lib/utils";

type Deal = {
  id: string;
  title: string;
  description?: string | null;
  price_current: number;
  price_before?: number | null;
  affiliate_url: string;
  image_url?: string | null;
  stock_left?: number | null;
  expires_at?: string | null;
  created_at?: string;
  clicks_24h?: number | null;
};

function timeLeft(expires_at?: string | null) {
  if (!expires_at) return null;
  const diff = new Date(expires_at).getTime() - Date.now();
  if (diff <= 0) return "utgått";
  const h = Math.floor(diff / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  return `${String(h).padStart(2,"0")}:${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`;
}

export default function DealCard({ deal }: { deal: Deal }) {
  const d = discountPercent(deal.price_before, deal.price_current);
  const tl = timeLeft(deal.expires_at);
  return (
    <div className="rounded-2xl border overflow-hidden">
      {deal.image_url ? (
        <Image src={deal.image_url} alt={deal.title} width={800} height={450} className="w-full h-48 object-cover" />
      ) : <div className="w-full h-48 bg-slate-100" />}
      <div className="p-4">
        <div className="font-semibold">{deal.title}</div>
        <div className="mt-1 text-sm text-slate-600 line-clamp-2">{deal.description}</div>
        <div className="mt-3 flex items-center gap-3">
          <div className="text-lg font-bold">{formatCurrency(deal.price_current)}</div>
          {deal.price_before && <div className="text-slate-500 line-through">{formatCurrency(deal.price_before)}</div>}
          {d !== null && <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">{d}%</span>}
        </div>
        <div className="mt-2 flex items-center gap-3 text-xs text-slate-600">
          {typeof deal.stock_left === "number" && <span>🧮 {deal.stock_left} kvar</span>}
          {tl && tl !== "utgått" && <span>⏳ {tl}</span>}
          {deal.clicks_24h && deal.clicks_24h > 5 && <span>🔥 Trend</span>}
        </div>
        <Link href={`/api/go/${deal.id}`} className="mt-4 inline-block px-4 py-2 rounded-xl bg-black text-white">
          Ta dealen
        </Link>
      </div>
    </div>
  );
}
