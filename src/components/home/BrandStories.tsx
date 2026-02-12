import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { useAllBrands } from "@/hooks/use-supabase-data";
import { Skeleton } from "@/components/ui/skeleton";

export const BrandStories = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { data: brands, isLoading } = useAllBrands();

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 320;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-12 lg:py-20">
      <div className="px-6 lg:px-12">
        <h2 className="font-display text-2xl font-bold tracking-wide text-foreground uppercase sm:text-3xl mb-8">
          Brands' Stories
        </h2>

        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute -left-3 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center bg-background/80 shadow-sm transition-colors hover:bg-secondary"
          >
            <ChevronLeft className="h-5 w-5 text-foreground" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute -right-3 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center bg-background/80 shadow-sm transition-colors hover:bg-secondary"
          >
            <ChevronRight className="h-5 w-5 text-foreground" />
          </button>

          <div ref={scrollRef} className="flex gap-5 overflow-x-auto scrollbar-hide">
            {isLoading ? (
              Array.from({ length: 4 }).map((_, i) => (
                <Skeleton key={i} className="aspect-square w-[280px] flex-shrink-0 sm:w-[300px]" />
              ))
            ) : (
              (brands || []).map((brand) => (
                <Link
                  key={brand.id}
                  to={`/brands/${brand.slug}`}
                  className="group relative aspect-square w-[280px] flex-shrink-0 overflow-hidden sm:w-[300px] bg-secondary"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <p className="absolute bottom-4 left-4 font-body text-xs font-medium tracking-[0.15em] text-primary-foreground">
                    {brand.name.toUpperCase()}
                  </p>
                </Link>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
