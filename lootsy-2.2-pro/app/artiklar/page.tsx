export const metadata = {
  title: 'Artiklar & guider',
  description: 'Korta guider och tips från Lootsy.'
}

const posts = [
  {
    slug: 'sa-hittar-du-basta-priset',
    title: 'Så hittar du bästa priset på nätet',
    excerpt: 'Prisjämförelse, prishistorik och hur du undviker “falska” reor.'
  },
  {
    slug: 'guide-webbshoppar-som-ar-trygga',
    title: 'Guide: webbshoppar som är trygga att handla från',
    excerpt: 'Våra checklistor för frakt, retur och kundservice.'
  }
]

export default function ArticlesPage() {
  return (
    <section className="mx-auto max-w-2xl">
      <h1 className="mb-4 text-2xl font-bold">Artiklar & guider</h1>
      <div className="divide-y divide-black/10 dark:divide-white/10">
        {posts.map(p => (
          <a key={p.slug} href={`/artiklar/${p.slug}`} className="block py-4 hover:underline">
            <div className="font-medium">{p.title}</div>
            <div className="text-sm opacity-80">{p.excerpt}</div>
          </a>
        ))}
      </div>
    </section>
  )
}
