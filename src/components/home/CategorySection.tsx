import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { useProductsByGenderCategory } from "@/hooks/use-supabase-data";
import { Skeleton } from "@/components/ui/skeleton";

interface CategorySectionProps {
  title: string;
  slug: string;
}

export const CategorySection = ({ title, slug }: CategorySectionProps) => {
  const { data: products, isLoading } = useProductsByGenderCategory("women", slug);

  return (
    <section className="py-12 lg:py-16">
      <div className="px-6 lg:px-12">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="font-display text-2xl font-bold tracking-wide text-foreground uppercase sm:text-3xl">
            {title}
          </h2>
          <Link
            to={`/women/${slug}`}
            className="flex items-center gap-1 bg-primary px-5 py-2.5 font-body text-xs font-medium tracking-wider text-primary-foreground transition-opacity hover:opacity-90"
          >
            View All
            <ChevronRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {isLoading ? (
            Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="w-[220px] flex-shrink-0">
                <Skeleton className="aspect-[3/4] w-full mb-3" />
                <Skeleton className="h-3 w-20 mb-1" />
                <Skeleton className="h-4 w-32" />
              </div>
            ))
          ) : (products || []).length > 0 ? (
            (products || []).map((product) => (
              <div key={product.id} className="w-[220px] flex-shrink-0">
                <ProductCard product={product} />
              </div>
            ))
          ) : (
            <p className="font-body text-sm text-muted-foreground py-4">No products in this category yet.</p>
          )}
        </div>
      </div>
    </section>
  );
};
