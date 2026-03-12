"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProductCard } from "@/components/ProductCard";
import { useProductsByCategory } from "@/hooks/use-supabase-data";
import { Skeleton } from "@/components/ui/skeleton";

interface CategoryListingProps {
  slug?: string;
  gender?: string;
}

const CategoryListing = ({ slug }: CategoryListingProps) => {
  const categoryName = slug?.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()) || "Browse";
  const { data: products, isLoading } = useProductsByCategory(slug);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="px-6 py-4 lg:px-12">
          <Link href="/" className="inline-flex items-center gap-1 font-body text-xs text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-3 w-3" /> Back to home
          </Link>
        </div>

        <section className="px-6 pb-8 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <h1 className="font-display text-3xl font-bold tracking-wide text-foreground uppercase lg:text-4xl">
              {categoryName}
            </h1>
            <p className="font-body text-sm text-muted-foreground mt-1">
              {isLoading ? "Loading..." : `${(products || []).length} curated pieces`}
            </p>
          </div>
        </section>

        <section className="px-6 pb-20 lg:px-12">
          <div className="mx-auto max-w-6xl">
            {isLoading ? (
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {Array.from({ length: 8 }).map((_, i) => (
                  <Skeleton key={i} className="aspect-[3/4] w-full" />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {(products || []).map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CategoryListing;
