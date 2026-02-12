import { useRef } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useAllBrands } from "@/hooks/use-supabase-data";
import { Skeleton } from "@/components/ui/skeleton";

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const BrandsListing = () => {
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const { data: brands, isLoading } = useAllBrands();

  const sorted = [...(brands || [])];
  const grouped: Record<string, typeof brands> = {};
  sorted.forEach((brand) => {
    const letter = brand.name[0].toUpperCase();
    if (!grouped[letter]) grouped[letter] = [];
    grouped[letter]!.push(brand);
  });

  const scrollToLetter = (letter: string) => {
    sectionRefs.current[letter]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="px-6 py-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <h1 className="font-display text-3xl font-bold text-foreground lg:text-4xl mb-2">
            Our Brands, from A–Z
          </h1>
          <p className="font-body text-sm text-muted-foreground mb-8">
            {(brands || []).length} brands
          </p>

          <div className="flex flex-wrap gap-2 mb-12 border-b border-border pb-6">
            {ALPHABET.map((letter) => {
              const hasBrands = !!grouped[letter];
              return (
                <button
                  key={letter}
                  onClick={() => hasBrands && scrollToLetter(letter)}
                  disabled={!hasBrands}
                  className={`font-body text-sm w-8 h-8 flex items-center justify-center transition-colors ${
                    hasBrands
                      ? "text-foreground hover:bg-primary hover:text-primary-foreground cursor-pointer"
                      : "text-muted-foreground/40 cursor-default"
                  }`}
                >
                  {letter}
                </button>
              );
            })}
          </div>

          {isLoading ? (
            <div className="space-y-8">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i}>
                  <Skeleton className="h-8 w-8 mb-4" />
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                    {Array.from({ length: 4 }).map((_, j) => (
                      <Skeleton key={j} className="h-5 w-32" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-12">
              {ALPHABET.filter((l) => grouped[l]).map((letter) => (
                <div
                  key={letter}
                  ref={(el) => { sectionRefs.current[letter] = el; }}
                  className="scroll-mt-32"
                >
                  <h2 className="font-display text-3xl text-foreground mb-6">{letter}</h2>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-3 lg:grid-cols-4">
                    {grouped[letter]!.map((brand) => (
                      <Link
                        key={brand.slug}
                        to={`/brands/${brand.slug}`}
                        className="font-body text-sm tracking-wider text-muted-foreground hover:text-foreground transition-colors uppercase"
                      >
                        {brand.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BrandsListing;
