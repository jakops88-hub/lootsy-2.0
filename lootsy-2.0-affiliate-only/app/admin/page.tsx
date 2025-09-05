'use client'
import { useState } from 'react'

export default function Admin() {
  const [form, setForm] = useState({ title:'', price:'', merchant:'', url:'', image:'', tags:'', featured:false })
  const [msg, setMsg] = useState<string>('')
  const onChange = (e: any) => {
    const { name, value, type, checked } = e.target
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }
  const submit = async (e: any) => {
    e.preventDefault()
    setMsg('Sparar...')
    const res = await fetch('/api/admin/add-deal', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(form) })
    const j = await res.json()
    setMsg(j.ok ? 'Sparad!' : ('Fel: ' + (j.error || 'okänt')))
  }
  return (
    <div className="mx-auto max-w-xl space-y-4">
      <h1 className="text-2xl font-bold">Admin – lägg till deal</h1>
      <form onSubmit={submit} className="space-y-3">
        {['title','price','merchant','url','image','tags'].map(k => (
          <input key={k} name={k} placeholder={k} value={(form as any)[k] as any} onChange={onChange}
            className="w-full rounded-md border px-3 py-2" required={k!=='image'} />
        ))}
        <label className="flex items-center gap-2"><input type="checkbox" name="featured" checked={form.featured} onChange={onChange}/> Utvald</label>
        <button className="rounded-md bg-black px-4 py-2 text-white dark:bg-white dark:text-black">Spara</button>
      </form>
      <p className="text-sm opacity-80">{msg}</p>
      <p className="text-sm opacity-80">OBS: Kräver att du sätter Supabase-nycklar i Vercel så att server route kan skriva till DB.</p>
    </div>
  )
}
