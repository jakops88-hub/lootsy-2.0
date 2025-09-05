'use client'
import { useEffect, useState } from 'react'

type Mode = 'light' | 'dark'

export default function ThemeToggle() {
  const getInitial = (): Mode => {
    if (typeof window === 'undefined') return 'light'
    return (localStorage.getItem('theme') as Mode) || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  }
  const [theme, setTheme] = useState<Mode>(getInitial)
  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') root.classList.add('dark')
    else root.classList.remove('dark')
    localStorage.setItem('theme', theme)
  }, [theme])
  const next = theme === 'dark' ? 'light' : 'dark'
  return (
    <button
      className="rounded-xl border border-black/10 bg-white/70 px-3 py-1 text-sm backdrop-blur hover:shadow dark:border-white/10 dark:bg-white/5"
      onClick={() => setTheme(next)}
      aria-label="Toggle dark mode"
    >
      {theme === 'dark' ? '☀️ Ljust' : '🌙 Mörkt'}
    </button>
  )
}
