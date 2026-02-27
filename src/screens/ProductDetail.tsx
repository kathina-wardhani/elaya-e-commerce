"use client";

import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProductCard } from "@/components/ProductCard";
import { useProductBySlug, useCompleteTheLook, formatPrice } from "@/hooks/use-supabase-data";
import { Skeleton } from "@/components/ui/skeleton";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface ProductDetailProps {
  slug?: string;
}

const ProductDetail = ({ slug }: ProductDetailProps) => {
  const { data: product, isLoading, error } = useProductBySlug(slug);
  const { data: recommendations } = useCompleteTheLook(product);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="px-6 py-12 lg:px-12">
          <div className="mx-auto max-w-6xl grid grid-cols-1 gap-10 md:grid-cols-2">
            <Skeleton className="aspect-[3/4] w-full" />
            <div className="space-y-4 py-8">
              <Skeleton className="h-3 w-24" />
              <Skeleton className="h-8 w-48" />
              <Skeleton className="h-5 w-32" />
              <Skeleton className="h-20 w-full" />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="flex flex-col items-center justify-center py-32 px-6">
          <h1 className="font-display text-3xl text-foreground mb-4">Product not available</h1>
          <p className="font-body text-muted-foreground mb-2">
            This product may have been removed or is no longer curated.
          </p>
          {error && (
            <p className="font-body text-xs text-muted-foreground mb-8">
              We couldn&apos;t load this product right now.
            </p>
          )}
          <Link href="/" className="font-body text-sm tracking-wider text-primary underline underline-offset-4 hover:opacity-80">
            ← Back to home
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const fallbackImage = "https://m.media-amazon.com/images/I/513TSUbtW+L._AC_SX679_.jpg";
  const imageList = Array.from(
    new Set([...(product.images || []), product.main_image].filter((img): img is string => Boolean(img && img.trim())))
  );
  const imagesToRender = imageList.length > 0 ? imageList : [fallbackImage];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="px-6 py-4 lg:px-12">
          <Link href="/" className="inline-flex items-center gap-1 font-body text-xs text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-3 w-3" /> Back to browsing
          </Link>
        </div>

        <section className="px-6 pb-16 lg:px-12">
          <div className="mx-auto max-w-6xl grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-16">
            <div className="bg-secondary overflow-hidden">
              <Carousel className="w-full">
                <CarouselContent className="ml-0">
                  {imagesToRender.map((imageUrl, index) => (
                    <CarouselItem key={`${product.id}-${index}`} className="pl-0">
                      <div className="aspect-[3/4] flex items-center justify-center overflow-hidden">
                        <img
                          src={imageUrl}
                          alt={`${product.name} image ${index + 1}`}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                {imagesToRender.length > 1 && (
                  <>
                    <CarouselPrevious className="left-3 top-1/2 -translate-y-1/2" />
                    <CarouselNext className="right-3 top-1/2 -translate-y-1/2" />
                  </>
                )}
              </Carousel>
            </div>

            <div className="flex flex-col justify-center py-4">
              {product.brand && (
                <Link
                  href={`/brands/${product.brand.slug}`}
                  className="font-body text-[10px] tracking-[0.2em] text-muted-foreground uppercase mb-2 hover:text-foreground transition-colors"
                >
                  {product.brand.name}
                </Link>
              )}
              <h1 className="font-display text-3xl font-medium text-foreground mb-2 lg:text-4xl">
                {product.name}
              </h1>
              <p className="font-body text-lg text-muted-foreground mb-6">
                {formatPrice(product.price_min, product.price_max)}
              </p>
              {product.description && (
                <p className="font-body text-sm leading-relaxed text-muted-foreground mb-8 max-w-md whitespace-pre-line">
                  {product.description}
                </p>
              )}

              <div className="space-y-3 mb-8">
                {product.material && (
                  <div>
                    <p className="font-body text-[10px] tracking-[0.18em] text-muted-foreground uppercase mb-1">Material</p>
                    <p className="font-body text-sm text-foreground whitespace-pre-line">{product.material}</p>
                  </div>
                )}
                {product.size_range && (
                  <div>
                    <p className="font-body text-[10px] tracking-[0.18em] text-muted-foreground uppercase mb-1">Size Range</p>
                    <p className="font-body text-sm text-foreground whitespace-pre-line">{product.size_range}</p>
                  </div>
                )}
              </div>

              {product.tags && product.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-8">
                  {product.tags.map((tag) => (
                    <span key={tag} className="font-body text-[10px] tracking-wider text-muted-foreground border border-border px-3 py-1 uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <a
                href={product.external_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary px-8 py-4 font-body text-sm font-medium tracking-wider text-primary-foreground transition-opacity hover:opacity-90 w-full sm:w-auto"
              >
                Shop Here
                <ExternalLink className="h-4 w-4" />
              </a>

              <p className="font-body text-[10px] text-muted-foreground mt-3">
                You will be redirected to the brand's official store
              </p>
            </div>
          </div>
        </section>

        {(recommendations || []).length > 0 && (
          <section className="border-t border-border py-16 px-6 lg:px-12">
            <div className="mx-auto max-w-6xl">
              <h2 className="font-display text-2xl font-medium text-foreground mb-2">Complete the Look</h2>
              <p className="font-body text-sm text-muted-foreground mb-8">Style with pieces from across our curated brands</p>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {(recommendations || []).map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
