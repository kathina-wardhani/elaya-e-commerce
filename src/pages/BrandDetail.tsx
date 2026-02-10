import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Instagram } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProductCard } from "@/components/ProductCard";
import { getBrandBySlug, getProductsByBrand } from "@/data/mock";

const BrandDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const brand = slug ? getBrandBySlug(slug) : undefined;
  const products = slug ? getProductsByBrand(slug) : [];

  if (!brand) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="flex flex-col items-center justify-center py-32 px-6">
          <h1 className="font-display text-3xl text-foreground mb-4">Brand not found</h1>
          <p className="font-body text-muted-foreground mb-8">
            This brand may not be part of our curated selection.
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

        {/* Brand Hero */}
        <section className="px-6 pb-12 lg:px-12">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="font-display text-4xl font-medium text-foreground mb-4 lg:text-5xl">
              {brand.name}
            </h1>
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="font-body text-xs tracking-wider text-muted-foreground">{brand.location}</span>
              <span className="text-muted-foreground">·</span>
              <span className="font-body text-xs tracking-wider text-muted-foreground">Est. {brand.foundedYear}</span>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="px-6 pb-12 lg:px-12">
          <div className="mx-auto max-w-2xl">
            <h2 className="font-display text-xl italic text-foreground mb-4">The Story</h2>
            <p className="font-body text-sm leading-relaxed text-muted-foreground mb-6">
              {brand.story}
            </p>
            <p className="font-body text-sm italic text-muted-foreground mb-8">
              "{brand.philosophy}"
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {brand.tags.map((tag) => (
                <span key={tag} className="font-body text-[10px] tracking-wider text-muted-foreground border border-border px-3 py-1 uppercase">
                  {tag}
                </span>
              ))}
            </div>

            {/* Instagram */}
            <a
              href={brand.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border px-6 py-3 font-body text-sm text-foreground transition-colors hover:bg-secondary"
            >
              <Instagram className="h-4 w-4" />
              Follow on Instagram
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </section>

        {/* Products from this brand */}
        {products.length > 0 && (
          <section className="border-t border-border py-16 px-6 lg:px-12">
            <div className="mx-auto max-w-6xl">
              <h2 className="font-display text-2xl font-medium text-foreground mb-8">
                Curated from {brand.name}
              </h2>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {products.map((p) => (
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

export default BrandDetail;
