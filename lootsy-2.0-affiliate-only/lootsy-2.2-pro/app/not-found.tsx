export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl py-20 text-center">
      <h2 className="text-3xl font-bold">Sidan hittades inte</h2>
      <p className="mt-2 text-zinc-500">Länken kan vara fel eller borttagen.</p>
      <a href="/" className="mt-6 inline-block rounded-lg bg-brand-600 px-4 py-2 font-medium text-white">Till startsidan</a>
    </div>
  )
}
