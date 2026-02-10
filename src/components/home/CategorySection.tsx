import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { featuredProducts } from "@/data/mock";

interface CategorySectionProps {
  title: string;
  slug: string;
}

export const CategorySection = ({ title, slug }: CategorySectionProps) => {
  // In production, filter by category. Here use mock data.
  const products = featuredProducts;

  return (
    <section className="py-12 lg:py-16">
      <div className="px-6 lg:px-12">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <h2 className="font-display text-2xl font-bold tracking-wide text-foreground uppercase sm:text-3xl">
            {title}
          </h2>
          <Link
            to={`/category/${slug}`}
            className="flex items-center gap-1 bg-primary px-5 py-2.5 font-body text-xs font-medium tracking-wider text-primary-foreground transition-opacity hover:opacity-90"
          >
            View All
            <ChevronRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Product scroll */}
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {products.map((product) => (
            <div key={product.id} className="w-[220px] flex-shrink-0">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
