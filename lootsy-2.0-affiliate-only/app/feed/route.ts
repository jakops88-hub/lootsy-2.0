import { NextResponse } from 'next/server'
import { supabasePublic } from '@/lib/supabase'
import dealsLocal from '@/data/deals.json'

const site = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
const title = process.env.NEXT_PUBLIC_SITE_NAME || 'Lootsy'

export async function GET() {
  let deals: any[] = (dealsLocal as any[])
  if (supabasePublic) {
    const { data } = await supabasePublic.from('deals').select('*').order('id', { ascending: false }).limit(30)
    if (data) deals = data as any[]
  }

  const items = deals.map(d => `
    <item>
      <title><![CDATA[${d.title}]]></title>
      <link>${site}/go/${encodeURIComponent(d.id)}</link>
      <guid>${site}/go/${encodeURIComponent(d.id)}</guid>
      <description><![CDATA[${d.merchant} • ${d.price}]]></description>
    </item>
  `).join('')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0">
    <channel>
      <title>${title} – Deals</title>
      <link>${site}</link>
      <description>Senaste deals</description>
      ${items}
    </channel>
  </rss>`

  return new NextResponse(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } })
}
