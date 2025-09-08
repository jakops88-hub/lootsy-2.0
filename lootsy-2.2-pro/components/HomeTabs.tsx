// @ts-nocheck
'use client'

import { useMemo, useState } from 'react'
import Search from '@/components/Search'

const GROUPS = [
  { key: 'alla', label: 'Alla', includes: (t:string)=>true },
  { key: 'tech', label: 'Tech', includes: (t:string)=>['tech','teknik','elektronik','mobil','dator','gaming','ljud'].includes(t) },
  { key: 'hem', label: 'Hem', includes: (t:string)=>['hem','kök','inredning','hushåll','smått&gott'].includes(t) },
  { key: 'gaming', label: 'Gaming', includes: (t:string)=>['gaming','spel','konsol','pc'].includes(t) },
]

export default function HomeTabs({ deals = [] }: { deals: any[] }) {
  const [tab, setTab] = useState('alla')

  const filtered = useMemo(() => {
    if (tab === 'alla') return deals
    const f = GROUPS.find(g => g.key === tab)!
    return deals.filter((d:any) => (d.tags||[]).some((t:string) => f.includes(t.toLowerCase())))
  }, [tab, deals])

  return (
    <section className="space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        {GROUPS.map(g => (
          <button key={g.key}
            onClick={()=>setTab(g.key)}
            className={`rounded-full px-3 py-1 text-sm ring-1 ring-black/10 dark:ring-white/10 ${tab===g.key ? 'bg-brand-600 text-white' : 'bg-white/70 dark:bg-white/5'}`}>
            {g.label}
          </button>
        ))}
      </div>
      <Search deals={filtered as any} />
    </section>
  )
}
