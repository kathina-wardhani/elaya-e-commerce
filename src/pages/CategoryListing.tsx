import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProductCard } from "@/components/ProductCard";
import { getProductsByCategory, allCategories, featuredProducts } from "@/data/mock";

const CategoryListing = () => {
  const { slug, gender } = useParams<{ slug: string; gender?: string }>();

  // Try to find the category by slug
  const category = allCategories.find((c) => c.slug === slug);
  const categoryName = category?.name || slug?.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()) || "Browse";

  // Get products - use all products as fallback for categories with no exact match
  let products = slug ? getProductsByCategory(slug) : featuredProducts;
  if (gender) {
    products = products.filter((p) => p.gender === gender);
  }
  // If no products found for this category, show all as editorial curation
  if (products.length === 0) {
    products = featuredProducts;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Breadcrumb */}
        <div className="px-6 py-4 lg:px-12">
          <Link to="/" className="inline-flex items-center gap-1 font-body text-xs text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-3 w-3" /> Back to home
          </Link>
        </div>

        {/* Category header */}
        <section className="px-6 pb-8 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <h1 className="font-display text-3xl font-bold tracking-wide text-foreground uppercase lg:text-4xl">
              {categoryName}
            </h1>
            {gender && (
              <p className="font-body text-sm text-muted-foreground mt-2 capitalize">{gender}'s collection</p>
            )}
            <p className="font-body text-sm text-muted-foreground mt-1">
              {products.length} curated {products.length === 1 ? "piece" : "pieces"}
            </p>
          </div>
        </section>

        {/* Product grid */}
        <section className="px-6 pb-20 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CategoryListing;
