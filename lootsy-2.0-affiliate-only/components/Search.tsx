'use client'
import { useMemo, useState } from 'react'

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
    <div className="space-y-3">
      <div className="flex gap-2">
        <input
          className="w-full rounded-md border px-3 py-2"
          placeholder="Sök deals, t.ex. 'AirPods'"
          value={q}
          onChange={e => setQ(e.target.value)}
        />
        <select className="rounded-md border px-3 py-2" value={tag} onChange={e=>setTag(e.target.value)}>
          <option value="">Alla taggar</option>
          {allTags.map(t => <option key={t} value={t}>{t}</option>)}
        </select>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map(d => (
          <a key={d.id} href={`/go/${encodeURIComponent(d.id)}`} className="rounded-xl border p-4 hover:shadow">
            <div className="flex items-center gap-3">
              {d.image ? <img src={d.image} alt="" className="h-10 w-10 rounded object-contain" /> : null}
              <div className="min-w-0">
                <div className="truncate font-semibold">{d.title}</div>
                <div className="text-sm text-gray-500">{d.merchant} • {d.price}</div>
              </div>
            </div>
            {d.featured ? <div className="mt-2 inline-block rounded bg-amber-100 px-2 py-0.5 text-xs">Utvald</div> : null}
          </a>
        ))}
      </div>
    </div>
  )
}
