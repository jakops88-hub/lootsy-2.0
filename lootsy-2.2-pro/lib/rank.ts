// Simple ranking scoring for deals
export function scoreDeal(d: any, clicksMap: Map<number, number>) {
  const clicks = clicksMap.get(d.id) || 0
  const featured = d.featured ? 1 : 0
  // weight featured high, then clicks (7d)
  return featured * 1000 + clicks * 5
}
