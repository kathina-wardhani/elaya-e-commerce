import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProductCard } from "@/components/ProductCard";
import { useFeaturedProducts } from "@/hooks/use-supabase-data";
import editorialParty from "@/assets/editorial-party.jpg";
import editorialCasual from "@/assets/editorial-casual.jpg";
import editorialOffice from "@/assets/editorial-office.jpg";
import editorialGala from "@/assets/editorial-gala.jpg";

const collectionMeta: Record<string, { tag: string; title: string; description: string; image: string }> = {
  "sparkle-and-shine": { tag: "NEW YEAR PARTY", title: "Sparkle & Shine", description: "Ring in the new year with sequins, silk, and statement pieces from Indonesia's boldest designers.", image: editorialParty },
  "keep-it-chill": { tag: "HANG OUT", title: "Keep It Chill", description: "Effortless weekend style. Relaxed fits, natural fabrics, easy-going vibes.", image: editorialCasual },
  "power-dressing": { tag: "OFFICE ATTIRE", title: "Power Dressing", description: "Commanding office style that blends Indonesian craftsmanship with modern tailoring.", image: editorialOffice },
  "make-an-entrance": { tag: "GALA", title: "Make an Entrance", description: "Show-stopping gowns and accessories for your most glamorous moments.", image: editorialGala },
};

const CollectionPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const collection = slug ? collectionMeta[slug] : undefined;
  const { data: products } = useFeaturedProducts(4);

  if (!collection) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="flex flex-col items-center justify-center py-32 px-6">
          <h1 className="font-display text-3xl text-foreground mb-4">Collection not found</h1>
          <p className="font-body text-muted-foreground mb-8">This collection may no longer be available.</p>
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
        <section className="relative h-[50vh] overflow-hidden">
          <img src={collection.image} alt={collection.title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 lg:p-12">
            <p className="font-body text-[10px] tracking-[0.2em] text-primary-foreground/70 mb-1">{collection.tag}</p>
            <h1 className="font-display text-4xl italic font-medium text-primary-foreground lg:text-5xl">{collection.title}</h1>
          </div>
        </section>

        <div className="px-6 py-4 lg:px-12">
          <Link to="/" className="inline-flex items-center gap-1 font-body text-xs text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-3 w-3" /> Back to home
          </Link>
        </div>

        <section className="px-6 pb-8 lg:px-12">
          <div className="mx-auto max-w-2xl">
            <p className="font-body text-sm leading-relaxed text-muted-foreground">{collection.description}</p>
          </div>
        </section>

        <section className="px-6 pb-20 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-display text-xl font-medium text-foreground mb-6">Shop this edit</h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {(products || []).map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CollectionPage;
