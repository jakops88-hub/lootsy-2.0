export const metadata = {
  title: 'Så hittar du bästa priset på nätet',
  description: 'Prisjämförelse, prishistorik och hur du undviker “falska” reor.'
}

export default function Page() {
  return (
    <article className="prose prose-zinc max-w-2xl dark:prose-invert">
      <h1>Så hittar du bästa priset på nätet</h1>
      <p>Här är några snabba knep: kolla prishistorik, jämför flera återförsäljare, och var vaksam på frakt/returvillkor. Kombinera dessa med Lootsys kuraterade deals så undviker du “lockreor”.</p>
      <ul>
        <li>Jämför pris hos minst tre butiker.</li>
        <li>Kolla om priset varit lägre senaste 30 dagarna.</li>
        <li>Se upp för överdrivna “ord. pris”.</li>
      </ul>
    </article>
  )
}
