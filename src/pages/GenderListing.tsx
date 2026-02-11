import { useParams, useLocation, Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProductCard } from "@/components/ProductCard";
import { filterProducts, getCategoryName, megaMenuCategories } from "@/data/mock";

const GenderListing = () => {
  const { category, subcategory } = useParams<{
    category?: string;
    subcategory?: string;
  }>();
  const location = useLocation();

  // Extract gender from the path
  const pathGender = location.pathname.startsWith("/women")
    ? "women"
    : location.pathname.startsWith("/men")
    ? "men"
    : undefined;

  const products = filterProducts(pathGender, category, subcategory);

  // Build breadcrumb
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

  // Page title
  const pageTitle = subcategory
    ? getCategoryName(subcategory)
    : category
    ? getCategoryName(category)
    : pathGender === "women"
    ? "Women"
    : pathGender === "men"
    ? "Men"
    : "Browse";

  // Subcategories sidebar
  const categoryData = pathGender && category
    ? megaMenuCategories[pathGender]?.find((c) => c.slug === category)
    : undefined;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Breadcrumb */}
        <div className="px-6 py-4 lg:px-12">
          <nav className="flex items-center gap-1 font-body text-xs text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={crumb.path} className="flex items-center gap-1">
                <span className="mx-1">/</span>
                {i === breadcrumbs.length - 1 ? (
                  <span className="text-foreground">{crumb.label}</span>
                ) : (
                  <Link to={crumb.path} className="hover:text-foreground transition-colors">
                    {crumb.label}
                  </Link>
                )}
              </span>
            ))}
          </nav>
        </div>

        {/* Header */}
        <section className="px-6 pb-8 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <h1 className="font-display text-3xl font-bold tracking-wide text-foreground uppercase lg:text-4xl">
              {pageTitle}
            </h1>
            <p className="font-body text-sm text-muted-foreground mt-2">
              {products.length} curated {products.length === 1 ? "piece" : "pieces"}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="px-6 pb-20 lg:px-12">
          <div className="mx-auto max-w-6xl flex gap-10">
            {/* Sidebar */}
            {categoryData && categoryData.subcategories.length > 0 && (
              <aside className="hidden w-48 shrink-0 lg:block">
                <h3 className="font-body text-xs tracking-widest text-muted-foreground uppercase mb-4">
                  Subcategories
                </h3>
                <div className="space-y-2">
                  <Link
                    to={`/${pathGender}/${category}`}
                    className={`block font-body text-sm transition-colors ${
                      !subcategory ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    All {getCategoryName(category!)}
                  </Link>
                  {categoryData.subcategories.map((sub) => (
                    <Link
                      key={sub.slug}
                      to={`/${pathGender}/${category}/${sub.slug}`}
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

            {/* Product grid */}
            <div className="flex-1">
              {products.length > 0 ? (
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                  {products.map((product) => (
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
                    to={pathGender ? `/${pathGender}` : "/"}
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
