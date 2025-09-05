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
    <section className="space-y-10">
      <div className="mx-auto mt-10 max-w-3xl text-center">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/50 px-3 py-1 text-xs backdrop-blur dark:border-white/10 dark:bg-white/5">
          🔥 Uppdateras dagligen
        </div>
        <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Här hittar du Sveriges bästa deals</h1>
        <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-300">
          Fynd som sparar pengar – kuraterade och redo att klickas. Inga paywalls.
        </p>
      </div>
      <Search deals={deals as any} />
    </section>
  )
}
