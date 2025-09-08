export const metadata = {
  title: 'Affiliatepolicy',
  description: 'Information om affiliatelänkar på Lootsy.'
}

export default function AffiliatePage() {
  return (
    <section className="prose prose-zinc max-w-2xl dark:prose-invert">
      <h1>Affiliatepolicy</h1>
      <p>Lootsy finansieras delvis via <strong>affiliatelänkar</strong>. När du klickar och handlar via våra länkar kan vi få en liten provision från butiken – utan extra kostnad för dig.</p>
      <h2>Vårt löfte</h2>
      <ul>
        <li><strong>Inget “pay-to-play”</strong> – vi listar aldrig dåliga deals.</li>
        <li><strong>Tydlighet</strong> – vi märker affiliatelänkar och följer programmens regler.</li>
        <li><strong>Integritet</strong> – vi säljer inte personliga uppgifter.</li>
      </ul>
      <p>Frågor? Hör av dig till <a href="mailto:info@lootsy.se">info@lootsy.se</a>.</p>
    </section>
  )
}
