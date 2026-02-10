import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProductCard } from "@/components/ProductCard";
import { getProductBySlug, getCompleteTheLook } from "@/data/mock";

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProductBySlug(slug) : undefined;
  const recommendations = product ? getCompleteTheLook(product) : [];

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="flex flex-col items-center justify-center py-32 px-6">
          <h1 className="font-display text-3xl text-foreground mb-4">Product not available</h1>
          <p className="font-body text-muted-foreground mb-8">
            This product may have been removed or is no longer curated.
          </p>
          <Link to="/" className="font-body text-sm tracking-wider text-primary underline underline-offset-4 hover:opacity-80">
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
        {/* Breadcrumb */}
        <div className="px-6 py-4 lg:px-12">
          <Link to="/" className="inline-flex items-center gap-1 font-body text-xs text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-3 w-3" /> Back to browsing
          </Link>
        </div>

        {/* Product section */}
        <section className="px-6 pb-16 lg:px-12">
          <div className="mx-auto max-w-6xl grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-16">
            {/* Image gallery */}
            <div className="aspect-[3/4] bg-secondary flex items-center justify-center">
              {product.image ? (
                <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
              ) : (
                <span className="font-body text-sm text-muted-foreground tracking-wider">PRODUCT IMAGE</span>
              )}
            </div>

            {/* Details */}
            <div className="flex flex-col justify-center py-4">
              <Link
                to={`/brands/${product.brandSlug}`}
                className="font-body text-[10px] tracking-[0.2em] text-muted-foreground uppercase mb-2 hover:text-foreground transition-colors"
              >
                {product.brandName}
              </Link>
              <h1 className="font-display text-3xl font-medium text-foreground mb-2 lg:text-4xl">
                {product.name}
              </h1>
              <p className="font-body text-lg text-muted-foreground mb-6">
                {product.price}
              </p>
              <p className="font-body text-sm leading-relaxed text-muted-foreground mb-8 max-w-md">
                {product.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {product.tags.map((tag) => (
                  <span key={tag} className="font-body text-[10px] tracking-wider text-muted-foreground border border-border px-3 py-1 uppercase">
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <a
                href={product.shopUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary px-8 py-4 font-body text-sm font-medium tracking-wider text-primary-foreground transition-opacity hover:opacity-90 w-full sm:w-auto"
              >
                Shop on Shopee
                <ExternalLink className="h-4 w-4" />
              </a>

              <p className="font-body text-[10px] text-muted-foreground mt-3">
                You will be redirected to the brand's official store
              </p>
            </div>
          </div>
        </section>

        {/* Complete the Look */}
        {recommendations.length > 0 && (
          <section className="border-t border-border py-16 px-6 lg:px-12">
            <div className="mx-auto max-w-6xl">
              <h2 className="font-display text-2xl font-medium text-foreground mb-2">Complete the Look</h2>
              <p className="font-body text-sm text-muted-foreground mb-8">Style with pieces from across our curated brands</p>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {recommendations.map((p) => (
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
