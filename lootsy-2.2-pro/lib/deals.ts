import { supabase } from "./supabase";

export type Deal = {
  id: string;
  title: string;
  url: string;
  image?: string | null;
  merchant?: string | null;
  price?: number | null;
  original_price?: number | null;
  featured?: boolean | null;
  tags?: string[] | null;
  active?: boolean | null;
};

export async function getFeaturedDeals(): Promise<Deal[]> {
  if (!supabase) {
    return [
      { id: "mock-1", title: "Bluetooth-hörlurar Pro", url: "https://amzn.to/4m8ISp1", image: "/placeholder-product.png", merchant: "Amazon", price: 499, original_price: 799, featured: true, tags: ["tech","ljud"], active: true },
      { id: "mock-2", title: "SSD 1TB NVMe", url: "https://example.com", image: "/placeholder-product.png", merchant: "Exempelbutik", price: 699, original_price: 999, featured: true, tags: ["tech","lagring"], active: true },
    ];
  }
  const { data, error } = await supabase
    .from("deals")
    .select("id,title,url,image,merchant,price,original_price,featured,tags,active")
    .eq("active", true)
    .order("featured", { ascending: false })
    .limit(30);
  if (error) {
    console.error(error);
    return [];
  }
  return (data as Deal[]) ?? [];
}
