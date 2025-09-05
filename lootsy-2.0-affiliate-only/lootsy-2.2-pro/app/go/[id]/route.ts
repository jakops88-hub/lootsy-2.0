import { NextRequest, NextResponse } from 'next/server'
import dealsLocal from '@/data/deals.json'
import { supabaseService } from '@/lib/supabase'

export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
  const id = decodeURIComponent(params.id)
  let deal: any = (dealsLocal as any[]).find(d => String(d.id) === String(id))

  if (supabaseService) {
    const { data } = await supabaseService.from('deals').select('*').eq('id', id).single()
    if (data) deal = data
  }

  if (deal && supabaseService) {
    await supabaseService.from('clicks').insert({ deal_id: deal.id, merchant: deal.merchant, url: deal.url })
  }

  if (!deal) return NextResponse.redirect(new URL('/', process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'))
  return NextResponse.redirect(deal.url)
}
