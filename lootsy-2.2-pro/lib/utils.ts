export function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(" ");
}

export function formatCurrency(n: number) {
  return new Intl.NumberFormat('sv-SE', { style: 'currency', currency: 'SEK' }).format(n);
}

export function discountPercent(before?: number | null, current?: number | null) {
  if (!before || !current || before <= 0) return null;
  return Math.round(((before - current) / before) * 100);
}
