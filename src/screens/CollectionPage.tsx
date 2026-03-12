"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProductCard } from "@/components/ProductCard";
import { useCollectionBySlug, useProductsByCollection } from "@/hooks/use-supabase-data";

interface CollectionPageProps {
  slug?: string;
}

const CollectionPage = ({ slug }: CollectionPageProps) => {
  const { data: collection, isLoading: collectionLoading } = useCollectionBySlug(slug);
  const { data: products = [], isLoading: productsLoading } = useProductsByCollection(collection?.id);
  const fallbackImage = "https://m.media-amazon.com/images/I/513TSUbtW+L._AC_SX679_.jpg";
  const collectionImage =
    collection?.image || products[0]?.images?.[0] || products[0]?.main_image || fallbackImage;

  if (collectionLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="flex flex-col items-center justify-center py-32 px-6">
          <p className="font-body text-sm text-muted-foreground">Loading collection...</p>
        </main>
        <Footer />
      </div>
    );
  }

  if (!collection) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="flex flex-col items-center justify-center py-32 px-6">
          <h1 className="font-display text-3xl text-foreground mb-4">Collection not found</h1>
          <p className="font-body text-muted-foreground mb-8">This collection may no longer be available.</p>
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
        <section className="relative h-[50vh] overflow-hidden">
          <img src={collectionImage} alt={collection.name} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 lg:p-12">
            {collection.tag && (
              <p className="font-body text-[10px] tracking-[0.2em] text-primary-foreground/70 mb-1">{collection.tag}</p>
            )}
            <h1 className="font-display text-4xl italic font-medium text-primary-foreground lg:text-5xl">{collection.name}</h1>
          </div>
        </section>

        <div className="px-6 py-4 lg:px-12">
          <Link href="/" className="inline-flex items-center gap-1 font-body text-xs text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-3 w-3" /> Back to home
          </Link>
        </div>

        <section className="px-6 pb-8 lg:px-12">
          <div className="mx-auto max-w-2xl">
            {collection.description && (
              <p className="font-body text-sm leading-relaxed text-muted-foreground">{collection.description}</p>
            )}
          </div>
        </section>

        <section id="collection-products" className="px-6 pb-20 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <div className="flex items-center justify-between gap-4 mb-6">
              <h2 className="font-display text-xl font-medium text-foreground">
                {collection.button_text || "Shop this edit"}
              </h2>
              {collection.button_text && (
                <a
                  href="#collection-products"
                  className="font-body text-xs tracking-wider text-primary underline underline-offset-4 hover:opacity-80"
                >
                  {collection.button_text}
                </a>
              )}
            </div>
            {productsLoading ? (
              <p className="font-body text-sm text-muted-foreground">Loading products...</p>
            ) : products.length === 0 ? (
              <p className="font-body text-sm text-muted-foreground">No products in this collection yet.</p>
            ) : (
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {products.map((p) => (
                  <ProductCard key={p.id} product={p} />
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

export default CollectionPage;
