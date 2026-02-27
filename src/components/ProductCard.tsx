"use client";

import Link from "next/link";
import type { ProductWithBrand } from "@/hooks/use-supabase-data";
import { formatPrice } from "@/hooks/use-supabase-data";

interface ProductCardProps {
  product: ProductWithBrand;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const imageUrl = product.images?.[0] || product.main_image || "https://m.media-amazon.com/images/I/513TSUbtW+L._AC_SX679_.jpg";
  const productPathIdentifier = product.id;

  return (
    <Link href={`/product/${productPathIdentifier}`} className="group block min-w-[200px] flex-shrink-0">
      <div className="aspect-[3/4] overflow-hidden bg-card mb-3">
        <img
          src={imageUrl}
          alt={product.name}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <p className="font-body text-[10px] tracking-widest text-muted-foreground uppercase mb-1">
        {product.brand?.name || "Unknown Brand"}
      </p>
      <h3 className="font-display text-sm font-medium text-foreground mb-1">
        {product.name}
      </h3>
      <p className="font-body text-sm text-muted-foreground">
        {formatPrice(product.price_min, product.price_max)}
      </p>
    </Link>
  );
};
