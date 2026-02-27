"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProductCard } from "@/components/ProductCard";
import { useBrandBySlug, useProductsByBrand } from "@/hooks/use-supabase-data";
import { Skeleton } from "@/components/ui/skeleton";

interface BrandDetailProps {
  slug?: string;
}

const BrandDetail = ({ slug }: BrandDetailProps) => {
  const { data: brand, isLoading: brandLoading } = useBrandBySlug(slug);
  const { data: products, isLoading: productsLoading } = useProductsByBrand(brand?.id);
  const fallbackImage = "https://m.media-amazon.com/images/I/513TSUbtW+L._AC_SX679_.jpg";

  if (brandLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="px-6 py-12 lg:px-12">
          <div className="mx-auto max-w-4xl text-center">
            <Skeleton className="h-12 w-64 mx-auto mb-4" />
            <Skeleton className="h-4 w-48 mx-auto" />
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!brand) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="flex flex-col items-center justify-center py-32 px-6">
          <h1 className="font-display text-3xl text-foreground mb-4">Brand not found</h1>
          <p className="font-body text-muted-foreground mb-8">
            This brand may not be part of our curated selection.
          </p>
          <Link href="/" className="font-body text-sm tracking-wider text-primary underline underline-offset-4 hover:opacity-80">
            ← Back to home
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="px-6 py-4 lg:px-12">
          <Link href="/" className="inline-flex items-center gap-1 font-body text-xs text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-3 w-3" /> Back to browsing
          </Link>
        </div>

        <section className="px-6 pb-12 lg:px-12">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="font-display text-4xl font-medium text-foreground mb-4 lg:text-5xl">
              {brand.name}
            </h1>
            <div className="flex items-center justify-center gap-4 mb-8">
              {brand.location && (
                <span className="font-body text-xs tracking-wider text-muted-foreground">{brand.location}</span>
              )}
              {brand.location && brand.founded_year && <span className="text-muted-foreground">·</span>}
              {brand.founded_year && (
                <span className="font-body text-xs tracking-wider text-muted-foreground">Est. {brand.founded_year}</span>
              )}
            </div>
          </div>
        </section>

        <section className="px-6 pb-12 lg:px-12">
          <div className="mx-auto max-w-4xl">
            <div className="aspect-[21/9] overflow-hidden bg-white flex items-center justify-center border-y border-gray-100">
              <img
                src={brand.main_image || fallbackImage}
                alt={brand.name}
                className="h-full w-full object-contain p-4 lg:p-12"
              />
            </div>
          </div>
        </section>

        {brand.story && (
          <section className="px-6 pb-12 lg:px-12">
            <div className="mx-auto max-w-2xl">
              <h2 className="font-display text-xl italic text-foreground mb-4">The Story</h2>
              <p className="font-body text-sm leading-relaxed text-muted-foreground mb-6 whitespace-pre-wrap">
                {brand.story}
              </p>
            </div>
          </section>
        )}

        {(products || []).length > 0 && (
          <section className="border-t border-border py-16 px-6 lg:px-12">
            <div className="mx-auto max-w-6xl">
              <h2 className="font-display text-2xl font-medium text-foreground mb-8">
                Curated from {brand.name}
              </h2>
              {productsLoading ? (
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <Skeleton key={i} className="aspect-[3/4] w-full" />
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                  {(products || []).map((p) => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                </div>
              )}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default BrandDetail;
