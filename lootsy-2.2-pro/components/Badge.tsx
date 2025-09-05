export default function Badge({ children }: { children: React.ReactNode }) {
  return <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-200">{children}</span>
}
