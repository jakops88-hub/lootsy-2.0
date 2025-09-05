'use client'
import { useMemo, useState } from 'react'
import DealCard, { type Deal } from './DealCard'

export default function Search({ deals }: { deals: Deal[] }) {
  const [q, setQ] = useState('')
  const [tag, setTag] = useState('')
  const filtered = useMemo(() => {
    const s = q.toLowerCase()
    return deals.filter(d =>
      (!s || d.title.toLowerCase().includes(s) || d.merchant.toLowerCase().includes(s) || (d.tags||[]).join(' ').toLowerCase().includes(s)) &&
      (!tag || (d.tags||[]).includes(tag))
    )
  }, [q, tag, deals])

  const allTags = Array.from(new Set(deals.flatMap(d => d.tags || []))).sort()

  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
        <input
          className="w-full rounded-xl border border-black/10 bg-white/70 px-4 py-2 outline-none ring-brand-500/20 backdrop-blur placeholder:text-zinc-400 focus:ring-4 dark:border-white/10 dark:bg-white/5"
          placeholder="Sök deals, t.ex. ‘AirPods’"
          value={q}
          onChange={e => setQ(e.target.value)}
        />
        <select
          className="rounded-xl border border-black/10 bg-white/70 px-4 py-2 outline-none ring-brand-500/20 backdrop-blur focus:ring-4 dark:border-white/10 dark:bg-white/5"
          value={tag} onChange={e => setTag(e.target.value)}
        >
          <option value="">Alla taggar</option>
          {allTags.map(t => <option key={t} value={t}>{t}</option>)}
        </select>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map(d => <DealCard key={d.id} deal={d} />)}
      </div>
    </div>
  )
}
