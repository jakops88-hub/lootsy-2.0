import Badge from './Badge'

export type Deal = {
  id: number
  title: string
  price: string
  merchant: string
  url: string
  image?: string
  tags?: string[]
  featured?: boolean
}

export default function DealCard({ deal }: { deal: Deal }) {
  return (
    <a
      href={`/go/${encodeURIComponent(deal.id)}`}
      className="group relative block overflow-hidden rounded-2xl border border-black/5 bg-white p-4 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg dark:border-white/10 dark:bg-zinc-900"
    >
      {deal.featured && (
        <div className="absolute right-3 top-3">
          <Badge>Utvald</Badge>
        </div>
      )}
      <div className="flex items-center gap-3">
        {deal.image ? (
          <img src={deal.image} alt="" className="h-12 w-12 rounded-lg object-contain" />
        ) : (
          <div className="h-12 w-12 rounded-lg bg-zinc-100 dark:bg-zinc-800" />
        )}
        <div className="min-w-0">
          <div className="line-clamp-2 font-semibold leading-tight">{deal.title}</div>
          <div className="mt-1 text-sm text-zinc-500">{deal.merchant} • <span className="font-medium text-emerald-600 dark:text-emerald-400">{deal.price}</span></div>
        </div>
      </div>
      {deal.tags && deal.tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {deal.tags.map((t) => (
            <span key={t} className="rounded-full border border-black/10 px-2 py-0.5 text-xs text-zinc-600 dark:border-white/10 dark:text-zinc-300">
              #{t}
            </span>
          ))}
        </div>
      )}
      <div className="pointer-events-none mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-700 underline-offset-2 group-hover:underline dark:text-brand-300">
        Visa deal
        <svg className="h-4 w-4 transition group-hover:translate-x-0.5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M12.293 5.293a1 1 0 011.414 0L18 9.586l-4.293 4.293a1 1 0 01-1.414-1.414L14.586 11H4a1 1 0 110-2h10.586l-2.293-2.293a1 1 0 010-1.414z"/>
        </svg>
      </div>
    </a>
  )
}
