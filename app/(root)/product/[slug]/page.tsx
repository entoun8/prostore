import ProductImages from "@/components/features/products/ProductImages";
import { ProductPrice } from "@/components/features/products/ProductPrice";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getProductBySlug } from "@/lib/actions/product.actions";
import { notFound } from "next/navigation";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

type Params = {
  params: Promise<{ slug: string }>;
};

export default async function productPage({ params }: Params) {
  const { slug } = await params;

  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <section className="grid grid-cols-1 md:grid-cols-5 gap-3 wrapper">
      <div className="col-span-2">
        <ProductImages images={product.images} />
      </div>
      <div className="col-span-2 flex flex-col gap-3">
        <p className="text-sm font-light">
          {product.brand} {product.category}
        </p>
        <h3 className="font-bold">{product.name}</h3>
        <p className="text-sm font-light">
          {product.rating} of {product.numReviews} Reviews
        </p>
        <div>
          <ProductPrice
            value={Number(product.price)}
            className="w-24 rounded-full bg-green-100 text-green-700 px-5 py-2 text-center"
          />
        </div>
        <div>
          <p className="font-bold">Description</p>
          <p className="font-light text-sm">{product.description}</p>
        </div>
      </div>
      <div>
        <Card>
          <CardContent className="px-4 py-0">
            <div className="mb-2 flex justify-between">
              <p>Price</p>
              <ProductPrice value={Number(product.price)} />
            </div>

            <div className="mb-2 flex justify-between">
              <p>Status</p>
              {product.stock > 0 ? (
                <Badge variant="outline">In Stock</Badge>
              ) : (
                <Badge variant="destructive">Out of Stock</Badge>
              )}
            </div>

            {product.stock > 0 && (
              <div className="flex justify-center mt-4">
                <Button className="w-full">Add to Cart</Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
