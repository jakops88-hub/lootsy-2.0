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
    images: [{ url: '/logo.svg' }],
    locale: 'sv_SE',
    type: 'website',
  },
  robots: { index: true, follow: true }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv" suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        <header className="sticky top-0 z-50 border-b border-black/5 bg-white/70 backdrop-blur dark:border-white/10 dark:bg-zinc-900/60">
          <div className="container mx-auto flex items-center justify-between px-4 py-3">
            <a href="/" className="flex items-center gap-2 font-semibold">
              <img src="/logo.svg" className="h-8 w-8" alt="" />
              <span className="text-lg">{process.env.NEXT_PUBLIC_SITE_NAME || 'Lootsy'}</span>
            </a>
            <nav className="flex items-center gap-3">
              <a href="/admin" className="rounded-lg px-3 py-1 text-sm text-brand-700 hover:underline dark:text-brand-300">Admin</a>
              <a href={process.env.NEXT_PUBLIC_TIP_FORM_URL || '#'} className="rounded-lg bg-brand-600 px-3 py-1 text-sm font-medium text-white shadow hover:bg-brand-700">Tipsa om deal</a>
              <ThemeToggle />
            </nav>
          </div>
        </header>
        <main className="container mx-auto px-4 pb-16">{children}</main>
        <footer className="border-t border-black/5 py-10 text-center text-sm opacity-80 dark:border-white/10">
          © {new Date().getFullYear()} {process.env.NEXT_PUBLIC_SITE_NAME || 'Lootsy'}
        </footer>
      </body>
    </html>
  )
}
