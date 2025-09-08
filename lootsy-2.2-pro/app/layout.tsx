import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Lootsy – Felpris & Deals",
  description: "AI-driven plattform för felpriser, dolda deals och rabatter.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv">
      <body className="min-h-screen bg-white text-slate-900">
        <header className="border-b">
          <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
            <Link href="/" className="font-bold text-xl">Lootsy</Link>
            <nav className="flex gap-4 text-sm">
              <Link href="/deals" className="hover:underline">Deals</Link>
              <Link href="/premium" className="hover:underline">Premium</Link>
              <Link href="/admin" className="hover:underline">Admin</Link>
            </nav>
          </div>
        </header>
        <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
        <footer className="border-t mt-16">
          <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-slate-500">
            © {new Date().getFullYear()} Lootsy. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
