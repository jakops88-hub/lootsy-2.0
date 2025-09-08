export const metadata = {
  title: 'Om Lootsy',
  description: 'Vad är Lootsy och hur väljer vi deals?'
}

export default function AboutPage() {
  return (
    <section className="prose prose-zinc max-w-2xl dark:prose-invert">
      <h1>Om Lootsy</h1>
      <p><strong>Lootsy</strong> är en svensk sajt som samlar de bästa fynden just nu. Vi går igenom kampanjer hos välkända butiker och väljer ut erbjudanden som faktiskt sparar pengar.</p>
      <h2>Så väljer vi deals</h2>
      <ul>
        <li><strong>Prisvärde</strong> – riktiga sänkningar eller paketvärde.</li>
        <li><strong>Pålitliga butiker</strong> – trygg frakt, retur och kundtjänst.</li>
        <li><strong>Tydlighet</strong> – pris, villkor och datum när det finns.</li>
      </ul>
      <h2>Oberoende men transparenta</h2>
      <p>Vissa länkar är affiliatelänkar vilket kan ge oss provision. Urvalet görs alltid redaktionellt – en deal får bara plats om den är bra.</p>
      <p>Tipsa gärna om en deal via knappen i menyn. Tack för att du hjälper oss hitta fynd!</p>
    </section>
  )
}
