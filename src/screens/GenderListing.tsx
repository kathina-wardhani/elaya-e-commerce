"use client";

import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProductCard } from "@/components/ProductCard";
import { useCategoryTree, useProductsByGenderCategory } from "@/hooks/use-supabase-data";
import { Skeleton } from "@/components/ui/skeleton";

interface GenderListingProps {
  gender?: "women" | "men";
  category?: string;
  subcategory?: string;
}

const GenderListing = ({ gender, category, subcategory }: GenderListingProps) => {
  const pathGender = gender;
  const { data: categories = [] } = useCategoryTree(pathGender);

  const { data: products, isLoading } = useProductsByGenderCategory(pathGender, category, subcategory);

  const categoryData = pathGender && category
    ? categories.find((c) => c.slug === category) || categories.find((c) => c.subcategories.some((s) => s.slug === category))
    : undefined;

  const getCategoryName = (slug: string): string => {
    for (const cat of categories) {
      if (cat.slug === slug) return cat.name;
      const sub = cat.subcategories.find((s) => s.slug === slug);
      if (sub) return sub.name;
    }
    return slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
  };

  const breadcrumbs: { label: string; path: string }[] = [];
  if (pathGender) {
    breadcrumbs.push({ label: pathGender === "women" ? "Women" : "Men", path: `/${pathGender}` });
    if (category) {
      breadcrumbs.push({ label: getCategoryName(category), path: `/${pathGender}/${category}` });
      if (subcategory) {
        breadcrumbs.push({ label: getCategoryName(subcategory), path: `/${pathGender}/${category}/${subcategory}` });
      }
    }
  }

  const pageTitle = subcategory
    ? getCategoryName(subcategory)
    : category
    ? getCategoryName(category)
    : pathGender === "women"
    ? "Women"
    : pathGender === "men"
    ? "Men"
    : "Browse";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="px-6 py-4 lg:px-12">
          <nav className="flex items-center gap-1 font-body text-xs text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={crumb.path} className="flex items-center gap-1">
                <span className="mx-1">/</span>
                {i === breadcrumbs.length - 1 ? (
                  <span className="text-foreground">{crumb.label}</span>
                ) : (
                  <Link href={crumb.path} className="hover:text-foreground transition-colors">
                    {crumb.label}
                  </Link>
                )}
              </span>
            ))}
          </nav>
        </div>

        <section className="px-6 pb-8 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <h1 className="font-display text-3xl font-bold tracking-wide text-foreground uppercase lg:text-4xl">
              {pageTitle}
            </h1>
            <p className="font-body text-sm text-muted-foreground mt-2">
              {isLoading ? "Loading..." : `${(products || []).length} curated ${(products || []).length === 1 ? "piece" : "pieces"}`}
            </p>
          </div>
        </section>

        <section className="px-6 pb-20 lg:px-12">
          <div className="mx-auto max-w-6xl flex gap-10">
            {categoryData && categoryData.subcategories.length > 0 && (
              <aside className="hidden w-48 shrink-0 lg:block">
                <h3 className="font-body text-xs tracking-widest text-muted-foreground uppercase mb-4">
                  Subcategories
                </h3>
                <div className="space-y-2">
                  <Link
                    href={`/${pathGender}/${category}`}
                    className={`block font-body text-sm transition-colors ${
                      !subcategory ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    All {getCategoryName(category!)}
                  </Link>
                  {categoryData.subcategories.map((sub) => (
                    <Link
                      key={sub.slug}
                      href={`/${pathGender}/${category}/${sub.slug}`}
                      className={`block font-body text-sm transition-colors ${
                        subcategory === sub.slug ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              </aside>
            )}

            <div className="flex-1">
              {isLoading ? (
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i}>
                      <Skeleton className="aspect-[3/4] w-full mb-3" />
                      <Skeleton className="h-3 w-20 mb-1" />
                      <Skeleton className="h-4 w-32" />
                    </div>
                  ))}
                </div>
              ) : (products || []).length > 0 ? (
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                  {(products || []).map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="py-20 text-center">
                  <h2 className="font-display text-xl text-foreground mb-2">No pieces found</h2>
                  <p className="font-body text-sm text-muted-foreground mb-6">
                    We're curating more items for this category.
                  </p>
                  <Link
                    href={pathGender ? `/${pathGender}` : "/"}
                    className="font-body text-sm text-primary underline underline-offset-4 hover:opacity-80"
                  >
                    Browse all {pathGender || "products"}
                  </Link>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GenderListing;
