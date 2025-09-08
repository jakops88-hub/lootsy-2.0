import Link from "next/link";

export default function Page() {
  return (
    <div className="grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight">
          Sveriges Deal- & Felprisplattform
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          Lootsy hittar felpriser, dolda deals och rabatter innan någon annan.
          Allt är gratis. Vi tjänar pengar endast via affiliate-länkar – enkelt och transparent.
        </p>
        <div className="mt-6 flex gap-3">
          <Link href="/deals" className="px-4 py-2 rounded-xl bg-black text-white">Visa deals</Link>
          
        </div>
        <ul className="mt-8 space-y-2 text-slate-700">
          <li>• Gratis: 5 utvalda deals per dag</li>
          <li>• Premium (49 kr/mån): Obegränsat, realtidsnotiser, felpris-larm</li>
          <li>• FOMO: trendranking, timers och ”3 kvar”-indikatorer</li>
        </ul>
      </div>
      <div className="rounded-2xl border p-6">
        <div className="text-sm text-slate-600">Exempel-deal</div>
        <div className="mt-2 rounded-xl overflow-hidden border">
          <img src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1200&auto=format&fit=crop" alt="Example" />
        </div>
        <div className="mt-3 font-medium">Sony WH-1000XM5 – 1990 kr (ord. 4490 kr)</div>
        <div className="text-sm text-slate-600">3 kvar • Utgår om 02:13:45 • 🔥 Trend</div>
      </div>
    </div>
  );
}
