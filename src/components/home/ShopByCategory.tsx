import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { useFeaturedProducts } from "@/hooks/use-supabase-data";
import { Skeleton } from "@/components/ui/skeleton";

export const ShopByCategory = () => {
  const [gender, setGender] = useState<"women" | "men">("women");
  const { data: products, isLoading } = useFeaturedProducts(16);

  const filtered = (products || []).filter((p) => p.category?.gender === gender);

  return (
    <section className="py-16 lg:py-24">
      <div className="px-6 lg:px-12">
        <div className="mb-8 flex flex-col items-center gap-4">
          <div className="flex items-center gap-3">
            <h2 className="font-display text-2xl sm:text-3xl text-foreground">
              Shop by category for
            </h2>
            <button
              onClick={() => setGender(gender === "women" ? "men" : "women")}
              className="flex items-center gap-1 border border-border px-4 py-2 font-body text-sm font-medium text-foreground"
            >
              {gender === "women" ? "WOMEN" : "MEN"}
              <ChevronDown className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {isLoading ? (
          <div className="flex gap-4 overflow-x-auto pb-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="w-[220px] flex-shrink-0">
                <Skeleton className="aspect-[3/4] w-full mb-3" />
                <Skeleton className="h-3 w-20 mb-1" />
                <Skeleton className="h-4 w-32 mb-1" />
                <Skeleton className="h-3 w-24" />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {filtered.map((product) => (
              <div key={product.id} className="w-[220px] flex-shrink-0">
                <ProductCard product={product} />
              </div>
            ))}
            {filtered.length === 0 && (
              <p className="font-body text-sm text-muted-foreground py-8">No products found for this category yet.</p>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
