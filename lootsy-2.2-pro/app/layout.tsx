import './globals.css'
import { Metadata } from 'next'
import ThemeToggle from '@/components/ThemeToggle'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: process.env.NEXT_PUBLIC_SITE_NAME || 'Lootsy',
    template: `%s • ${process.env.NEXT_PUBLIC_SITE_NAME || 'Lootsy'}`
  },
  description: process.env.SITE_DESCRIPTION || 'Sveriges bästa deals – snabbt, snyggt och gratis.',
  openGraph: {
    title: process.env.NEXT_PUBLIC_SITE_NAME || 'Lootsy',
    description: process.env.SITE_DESCRIPTION || 'Sveriges bästa deals – snabbt, snyggt och gratis.',
    url: '/',
    siteName: process.env.NEXT_PUBLIC_SITE_NAME || 'Lootsy',
    images: [{ url: '/og-lootsy.png' }],
    locale: 'sv_SE',
    type: 'website',
  },
  icons: { icon: '/favicon.ico' },
  robots: { index: true, follow: true }
}

function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": process.env.NEXT_PUBLIC_SITE_NAME || "Lootsy",
    "url": process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": process.env.NEXT_PUBLIC_SITE_NAME || "Lootsy",
      "url": process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
    }
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv" suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        <header className="sticky top-0 z-50 border-b border-black/5 bg-white/70 backdrop-blur dark:border-white/10 dark:bg-zinc-900/60">
          <div className="container mx-auto flex items-center justify-between px-4 py-3">
            <a href="/" className="flex items-center gap-2 font-semibold">
              <img src="/logo.png" className="h-8 w-8" alt="Lootsy" />
              <span className="text-lg">{process.env.NEXT_PUBLIC_SITE_NAME || 'Lootsy'}</span>
            </a>
            <nav className="flex items-center gap-4 text-sm">
              <a href="/k/tech" className="opacity-80 hover:opacity-100">Tech</a>
              <a href="/k/hem" className="opacity-80 hover:opacity-100">Hem</a>
              <a href="/artiklar" className="opacity-80 hover:opacity-100">Artiklar</a>
              <a href="/about" className="opacity-80 hover:opacity-100">Om</a>
              <a href="/admin" className="rounded-lg px-3 py-1 text-brand-700 hover:underline dark:text-brand-300">Admin</a>
              <a href={process.env.NEXT_PUBLIC_TIP_FORM_URL || '#'} className="rounded-lg bg-brand-600 px-3 py-1 font-medium text-white shadow hover:bg-brand-700">Tipsa om deal</a>
              <ThemeToggle />
            </nav>
          </div>
        </header>
        <main className="container mx-auto px-4 pb-16">{children}</main>
        <footer className="border-t border-black/5 py-10 text-center text-sm opacity-90 dark:border-white/10">
          <div className="space-x-4">
            <a href="/affiliate" className="hover:underline">Affiliatepolicy</a>
            <a href="/privacy" className="hover:underline">Integritet & cookies</a>
            <a href="/contact" className="hover:underline">Kontakt</a>
          </div>
          <div className="mt-2">© {new Date().getFullYear()} {process.env.NEXT_PUBLIC_SITE_NAME || 'Lootsy'}</div>
        </footer>
        <StructuredData />
      </body>
    </html>
  )
}
