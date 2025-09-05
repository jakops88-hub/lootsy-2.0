import './globals.css'
import { Metadata } from 'next'
import ThemeToggle from '@/components/ThemeToggle'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: process.env.NEXT_PUBLIC_SITE_NAME || 'Lootsy',
    template: `%s • ${process.env.NEXT_PUBLIC_SITE_NAME || 'Lootsy'}`
  },
  description: process.env.SITE_DESCRIPTION || 'Heta deals & affiliates. Endast riktiga fynd.',
  openGraph: {
    title: process.env.NEXT_PUBLIC_SITE_NAME || 'Lootsy',
    description: process.env.SITE_DESCRIPTION || 'Heta deals & affiliates. Endast riktiga fynd.',
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
      <body className="min-h-screen bg-white text-gray-900 antialiased dark:bg-zinc-900 dark:text-zinc-100">
        <header className="container mx-auto flex items-center justify-between px-4 py-4">
          <a href="/" className="flex items-center gap-2 font-semibold">
            <img src="/logo.svg" className="h-7 w-7" alt="" />
            <span>{process.env.NEXT_PUBLIC_SITE_NAME || 'Lootsy'}</span>
          </a>
          <nav className="flex items-center gap-3">
            <a href="/admin" className="text-sm hover:underline">Admin</a>
            <ThemeToggle />
          </nav>
        </header>
        <main className="container mx-auto px-4 pb-16">{children}</main>
        <footer className="border-t py-8 text-center text-sm opacity-80">
          © {new Date().getFullYear()} {process.env.NEXT_PUBLIC_SITE_NAME || 'Lootsy'}
        </footer>
      </body>
    </html>
  )
}

