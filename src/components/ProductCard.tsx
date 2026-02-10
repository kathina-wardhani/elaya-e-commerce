import { Link } from "react-router-dom";
import type { Product } from "@/data/mock";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link to={`/product/${product.slug}`} className="group block min-w-[200px] flex-shrink-0">
      <div className="aspect-[3/4] overflow-hidden bg-card mb-3">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-secondary">
            <span className="font-body text-xs text-muted-foreground tracking-wider">IMAGE</span>
          </div>
        )}
      </div>
      <p className="font-body text-[10px] tracking-widest text-muted-foreground uppercase mb-1">
        {product.brandName}
      </p>
      <h3 className="font-display text-sm font-medium text-foreground mb-1">
        {product.name}
      </h3>
      <p className="font-body text-sm text-muted-foreground">
        {product.price}
      </p>
    </Link>
  );
};
