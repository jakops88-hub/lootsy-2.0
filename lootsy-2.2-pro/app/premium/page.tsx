import Link from "next/link";

export default function PremiumPage() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl font-bold">Premium – 49 kr/mån</h1>
      <p className="mt-2 text-slate-600">
        Obegränsade deals, realtidsnotiser och felpris-larm. Stöd Lootsy och spara mer.
      </p>
      <ul className="mt-6 space-y-2">
        <li>• Obegränsad åtkomst till alla deals</li>
        <li>• Felpris-larm i realtid</li>
        <li>• Exklusiva kampanjer</li>
      </ul>
      <form action="/api/stripe/checkout" method="post" className="mt-8">
        <button className="px-4 py-2 rounded-xl bg-black text-white">Starta Premium</button>
      </form>
      <p className="mt-2 text-xs text-slate-500">
        Saknar du Stripe? Admin kan sätta Premium manuellt i Supabase.
      </p>
      <Link href="/deals" className="mt-6 inline-block underline">Tillbaka till deals</Link>
    </div>
  );
}
