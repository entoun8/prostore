import ProductsList from "@/components/features/products/ProductsList";
import { getLatestProducts } from "@/lib/actions/product.actions";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function HomePage() {
  const latestProducts = await getLatestProducts();

  return (
    <>
      <ProductsList products={latestProducts} title="Newest Arrivals" />
    </>
  );
}
