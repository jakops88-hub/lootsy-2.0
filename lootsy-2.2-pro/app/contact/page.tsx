export const metadata = {
  title: 'Kontakt',
  description: 'Kontakta Lootsy.'
}

export default function ContactPage() {
  return (
    <section className="prose prose-zinc max-w-md dark:prose-invert">
      <h1>Kontakt</h1>
      <p>Har du frågor, samarbeten eller pressförfrågningar? Hör av dig!</p>
      <ul>
        <li>E-post: <a href="mailto:info@lootsy.se">info@lootsy.se</a></li>
        <li>Tipsa om en deal: via knappen <em>Tipsa om deal</em> i menyn</li>
      </ul>
    </section>
  )
}
