// @ts-nocheck
import Link from 'next/link'

export default function TrendingGrid({ deals = [] }: { deals: any[] }) {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">🔥 Hetast just nu</h2>
        <Link href="/k/tech" className="text-sm opacity-80 hover:opacity-100">Visa fler →</Link>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {deals.map((d) => (
          <div key={d.id} className="group rounded-2xl border border-black/5 bg-white/70 p-4 shadow-sm backdrop-blur transition hover:shadow-md dark:border-white/10 dark:bg-white/5">
            <div className="flex items-start gap-3">
              <img src={d.image || '/logo.png'} alt="" className="h-16 w-16 rounded-lg object-cover ring-1 ring-black/10 dark:ring-white/10" />
              <div className="min-w-0">
                <div className="truncate font-medium">{d.title}</div>
                <div className="text-sm opacity-80">{d.merchant} • <span className="text-emerald-600 dark:text-emerald-400">{d.price || 'Variabel'}</span></div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {(d.tags || []).slice(0,3).map((t:string) => (
                    <span key={t} className="rounded-full border border-black/10 px-2 py-0.5 text-xs opacity-80 dark:border-white/10">#{t}</span>
                  ))}
                  {d.featured && <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">Utvald</span>}
                </div>
              </div>
            </div>
            <div className="mt-4">
              <a href={`/go/${d.id}`} className="text-sm font-medium text-brand-700 hover:underline dark:text-brand-300">Visa deal →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
