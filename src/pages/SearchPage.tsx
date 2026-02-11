import { useSearchParams, Link } from "react-router-dom";
import { Search } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProductCard } from "@/components/ProductCard";
import { searchProducts, searchBrands } from "@/data/mock";
import { useState } from "react";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [localQuery, setLocalQuery] = useState(query);

  const products = searchProducts(query);
  const matchedBrands = searchBrands(query);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="px-6 py-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          {/* Search input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (localQuery.trim()) {
                window.location.href = `/search?q=${encodeURIComponent(localQuery.trim())}`;
              }
            }}
            className="mb-8"
          >
            <div className="flex items-center border-b-2 border-foreground pb-2 max-w-lg">
              <Search className="h-5 w-5 text-foreground mr-3" />
              <input
                type="text"
                value={localQuery}
                onChange={(e) => setLocalQuery(e.target.value)}
                placeholder="Search products, brands, categories..."
                className="flex-1 bg-transparent font-body text-lg text-foreground placeholder:text-muted-foreground outline-none"
                autoFocus
              />
            </div>
          </form>

          {query ? (
            <>
              <p className="font-body text-sm text-muted-foreground mb-8">
                {products.length + matchedBrands.length} results for "{query}"
              </p>

              {/* Brands */}
              {matchedBrands.length > 0 && (
                <section className="mb-12">
                  <h2 className="font-display text-xl text-foreground mb-4">Brands</h2>
                  <div className="flex flex-wrap gap-3">
                    {matchedBrands.map((brand) => (
                      <Link
                        key={brand.slug}
                        to={`/brands/${brand.slug}`}
                        className="font-body text-sm tracking-wider border border-border px-5 py-2.5 text-foreground hover:bg-secondary transition-colors"
                      >
                        {brand.name}
                      </Link>
                    ))}
                  </div>
                </section>
              )}

              {/* Products */}
              {products.length > 0 ? (
                <section>
                  <h2 className="font-display text-xl text-foreground mb-4">Products</h2>
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                    {products.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </section>
              ) : (
                matchedBrands.length === 0 && (
                  <div className="py-20 text-center">
                    <h2 className="font-display text-2xl text-foreground mb-2">No results found</h2>
                    <p className="font-body text-sm text-muted-foreground mb-6">
                      Try a different search term or browse our categories.
                    </p>
                    <Link to="/" className="font-body text-sm text-primary underline underline-offset-4 hover:opacity-80">
                      Back to home
                    </Link>
                  </div>
                )
              )}
            </>
          ) : (
            <div className="py-20 text-center">
              <p className="font-body text-muted-foreground">
                Start typing to search across products, brands, and categories.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SearchPage;
