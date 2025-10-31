import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { ProductPrice } from "./ProductPrice";
import { Product } from "@/types";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
      <CardHeader className="p-3 flex justify-center">
        <Link href={`/product/${product.slug}`}>
          <Image
            src={product.images[0]}
            alt={product.name}
            height={300}
            width={300}
            priority={true}
            className="object-cover rounded-sm"
          />
        </Link>
      </CardHeader>
      <CardContent className="p-3 pt-0 flex flex-col gap-1.5 grow">
        <div className="text-xs text-muted-foreground uppercase tracking-wide">{product.brand}</div>
        <Link href={`/product/${product.slug}`}>
          <h2 className="text-sm font-medium line-clamp-2 hover:text-primary transition-colors">{product.name}</h2>
        </Link>
        <div className="flex justify-between items-center mt-auto pt-2">
          <p className="text-xs text-muted-foreground">{product.rating} ★</p>
          {product.stock > 0 ? (
            <ProductPrice value={product.price} className="font-semibold" />
          ) : (
            <p className="text-xs font-semibold text-destructive">OUT OF STOCK</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
