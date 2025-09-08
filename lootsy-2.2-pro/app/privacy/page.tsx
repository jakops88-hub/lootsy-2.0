export const metadata = {
  title: 'Integritet & cookies',
  description: 'Hur vi använder data och cookies.'
}

export default function PrivacyPage() {
  return (
    <section className="prose prose-zinc max-w-2xl dark:prose-invert">
      <h1>Integritet & cookies</h1>
      <p>Vi värnar om din integritet. Lootsy behandlar endast nödvändiga uppgifter för att driva sajten.</p>
      <h2>Vad samlar vi in?</h2>
      <ul>
        <li><strong>Teknisk data</strong> (t.ex. IP-adress, webbläsare) – för säkerhet och statistik.</li>
        <li><strong>Analys</strong> via t.ex. Plausible/GA om aktiverat.</li>
        <li><strong>Klick på deals</strong> loggas anonymt för att mäta intresse.</li>
      </ul>
      <h2>Cookies</h2>
      <p>Vi använder så få cookies som möjligt. Vissa affiliateprogram sätter cookies när du klickar vidare till butiken.</p>
      <h2>Dina rättigheter</h2>
      <p>Kontakta oss på <a href="mailto:info@lootsy.se">info@lootsy.se</a> om du vill begära information eller radering av uppgifter kopplade till dig.</p>
    </section>
  )
}
