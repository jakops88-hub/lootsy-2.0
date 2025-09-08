import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export const runtime = 'edge'

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!
  const SERVICE_ROLE = process.env.SUPABASE_SERVICE_ROLE_KEY!
  const supabase = createClient(SUPABASE_URL, SERVICE_ROLE)

  const { data: deal } = await supabase.from('deals')
    .select('id,url').eq('id', params.id).single()

  if (!deal?.url) return NextResponse.redirect(new URL('/', req.url), 302)

  const ip = (req.headers.get('x-forwarded-for') || '').split(',')[0] || null
  const ua = req.headers.get('user-agent') || null
  await supabase.from('clicks').insert({ deal_id: deal.id, ip, ua })

  return NextResponse.redirect(deal.url, 302)
}
