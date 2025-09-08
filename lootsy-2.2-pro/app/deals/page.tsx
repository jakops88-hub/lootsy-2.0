import DealsList from "@/components/DealsList";

export const revalidate = 30;

export default async function DealsPage() {
  // Server Component: fetch deals server-side (service role)
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Dagens deals</h1>
      <DealsList/>
    </div>
  );
}
