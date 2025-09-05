import { NextRequest, NextResponse } from 'next/server'
import { supabaseService } from '@/lib/supabase'
import { z } from 'zod'

const schema = z.object({
  title: z.string().min(2),
  price: z.string().min(1),
  merchant: z.string().min(1),
  url: z.string().url(),
  image: z.string().optional().or(z.literal('')),
  tags: z.string().optional(),
  featured: z.boolean().optional()
})

export async function POST(req: NextRequest) {
  if (!supabaseService) {
    return NextResponse.json({ ok:false, error: 'SUPABASE_SERVICE_ROLE_KEY saknas i servern' }, { status: 500 })
  }
  const body = await req.json()
  const parsed = schema.safeParse(body)
  if (!parsed.success) return NextResponse.json({ ok:false, error: 'Ogiltig data' }, { status: 400 })
  const { title, price, merchant, url, image, tags, featured } = parsed.data
  const { error } = await supabaseService.from('deals').insert({
    title, price, merchant, url, image: image || null, tags: tags ? tags.split(',').map(t=>t.trim()) : [], featured: !!featured
  })
  if (error) return NextResponse.json({ ok:false, error: error.message }, { status: 500 })
  return NextResponse.json({ ok:true })
}
