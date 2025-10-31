import { Product } from "@/types";
import ProductCard from "./ProductCard";

type ProductsListProps = {
  products: Product[];
  title?: string;
  limit?: number;
};

export default function ProductsList({ title, products }: ProductsListProps) {
  return (
    <div className="my-10 wrapper">
      <h2 className="h2-bold mb-4">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.slug}>
              <ProductCard product={product} />
            </div>
          ))
        ) : (
          <div>No Products Found</div>
        )}
      </div>
    </div>
  );
}
