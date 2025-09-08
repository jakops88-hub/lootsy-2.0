import Search from '@/components/Search'
import { supabasePublic } from '@/lib/supabase'
import dealsLocal from '@/data/deals.json'

type Params = { params: { tag: string } }

export async function generateMetadata({ params }: Params) {
  const t = decodeURIComponent(params.tag)
  return {
    title: `Deals inom ${t}`,
    description: `Utvalda erbjudanden taggade med ${t}.`
  }
}

async function loadDeals(tag: string) {
  const t = tag.toLowerCase()
  if (supabasePublic) {
    const { data } = await supabasePublic.from('deals').select('*').order('featured', { ascending: false }).order('id', { ascending: false }).limit(100)
    if (data) return (data as any[]).filter(d => (d.tags||[]).map((x:string)=>x.toLowerCase()).includes(t))
  }
  return (dealsLocal as any[]).filter(d => (d.tags||[]).map((x:string)=>x.toLowerCase()).includes(t))
}

export default async function TagPage({ params }: Params) {
  const tag = decodeURIComponent(params.tag)
  const deals = await loadDeals(tag)
  return (
    <section className="space-y-8">
      <div className="mt-6 text-center">
        <h1 className="text-3xl font-bold">Deals inom “{tag}”</h1>
        <p className="opacity-80">Här samlar vi aktuella erbjudanden med taggen {tag}.</p>
      </div>
      <Search deals={deals as any} />
    </section>
  )
}
