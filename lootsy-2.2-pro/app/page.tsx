// @ts-nocheck
import HomeTabs from '@/components/HomeTabs'
import TrendingGrid from '@/components/TrendingGrid'
import { supabasePublic } from '@/lib/supabase'
import { scoreDeal } from '@/lib/rank'
import dealsLocal from '@/data/deals.json'

async function loadDeals() {
  if (supabasePublic) {
    const { data } = await supabasePublic.from('deals')
      .select('*')
      .order('featured', { ascending: false })
      .order('id', { ascending: false })
      .limit(160)
    if (data) return data as any[]
  }
  return dealsLocal as any[]
}

async function loadClicks7d() {
  if (!supabasePublic) return new Map()
  const since = new Date(Date.now() - 7*24*60*60*1000).toISOString()
  const { data } = await supabasePublic
    .from('clicks')
    .select('deal_id, created_at')
    .gte('created_at', since)
    .limit(5000)
  const m = new Map<number, number>()
  for (const r of (data||[])) {
    const k = (r as any).deal_id
    m.set(k, (m.get(k)||0) + 1)
  }
  return m
}

export default async function Page() {
  const deals = await loadDeals()
  const clicksMap = await loadClicks7d()
  const trending = [...deals]
    .sort((a,b) => scoreDeal(b, clicksMap) - scoreDeal(a, clicksMap))
    .slice(0, 6)

  return (
    <section className="space-y-10">
      <div className="mx-auto mt-8 max-w-3xl text-center">
        <h1 className="text-4xl font-black tracking-tight sm:text-5xl">Här hittar du Sveriges bästa deals</h1>
        <p className="mt-2 opacity-80">Fynd som sparar pengar – kuraterade och redo att klickas. Inga paywalls.</p>
      </div>

      <TrendingGrid deals={trending as any} />
      <HomeTabs deals={deals as any} />
    </section>
  )
}
