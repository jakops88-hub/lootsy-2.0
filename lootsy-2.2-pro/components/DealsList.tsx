import { supabaseService } from "@/lib/supabaseServer";
import DealCard from "./DealCard";

async function isPremium(email?: string | null) {
  if (!email) return false;
  const svc = supabaseService();
  const { data } = await svc.from("profiles").select("premium").eq("email", email.toLowerCase()).maybeSingle();
  return !!data?.premium;
}

// NOTE: For MVP we treat visitor as not logged in -> show top 5.
// You can connect Supabase Auth and pass the email to this component later.
export default async function DealsList({ email }: { email?: string } = {}) {
  const premium = await isPremium(email);
  const limit = premium ? 0 : 5;

  const svc = supabaseService();
  const query = svc.from("deals_trending").select("*").order("clicks_24h", { ascending: false }).order("created_at", { ascending: false });
  const { data: deals, error } = await (limit ? query.limit(limit) : query);
  if (error) {
    return <div className="text-red-600">Fel: {error.message}</div>;
  }

  return (
    <div>
      {!premium && (
        <div className="mb-6 rounded-xl border p-4 bg-amber-50">
          <div className="font-medium">Gratisläge – du ser de 5 hetaste just nu.</div>
          <div className="text-sm text-slate-700">
            Uppgradera till <a href="/premium" className="underline">Premium</a> för obegränsad åtkomst och felpris-larm.
          </div>
        </div>
      )}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {deals?.map((d) => <DealCard key={d.id} deal={d as any} />)}
      </div>
    </div>
  );
}
