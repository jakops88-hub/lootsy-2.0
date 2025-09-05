import Search from '@/components/Search'
import { supabasePublic } from '@/lib/supabase'
import dealsLocal from '@/data/deals.json'

export const dynamic = 'force-dynamic'

async function loadDeals() {
  if (supabasePublic) {
    const { data, error } = await supabasePublic
      .from('deals')
      .select('*')
      .order('featured', { ascending: false })
      .order('id', { ascending: false })
      .limit(60)
    if (!error && data) return data as any[]
  }
  return dealsLocal as any[]
}

export default async function Home() {
  const deals = await loadDeals()
  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-bold">Dagens bästa deals</h1>
      <p className="opacity-80">Endast affiliate – inga premiumfunktioner, inga paywalls.</p>
      <Search deals={deals as any} />
    </section>
  )
}

