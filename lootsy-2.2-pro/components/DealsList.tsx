import { supabaseService } from "@/lib/supabaseServer";
import DealCard from "./DealCard";

// NOTE: For MVP we treat visitor as not logged in -> show top 5.
// You can connect Supabase Auth and pass the email to this component later.
export default async function DealsList({ email }: { email?: string } = {}) {
  const limit = 0;

  const svc = supabaseService();
  const query = svc.from("deals_trending").select("*").order("clicks_24h", { ascending: false }).order("created_at", { ascending: false });
  const { data: deals, error } = await (limit ? query.limit(limit) : query);
  if (error) {
    return <div className="text-red-600">Fel: {error.message}</div>;
  }

  return (
    <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {deals?.map((d) => <DealCard key={d.id} deal={d as any} />)}
      </div>
    </div>
  );
}
