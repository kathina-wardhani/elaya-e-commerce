"use client";

import Link from "next/link";
import { useAllBrands } from "@/hooks/use-supabase-data";

interface BrandsMegaMenuProps {
  onClose: () => void;
}

export const BrandsMegaMenu = ({ onClose }: BrandsMegaMenuProps) => {
  const { data: brands } = useAllBrands();

  const grouped: Record<string, typeof brands> = {};
  (brands || []).forEach((brand) => {
    const letter = brand.name[0].toUpperCase();
    if (!grouped[letter]) grouped[letter] = [];
    grouped[letter]!.push(brand);
  });

  const letters = Object.keys(grouped).sort();

  return (
    <div className="absolute left-0 right-0 z-40 border-b border-border bg-background shadow-sm">
      <div className="mx-auto max-w-7xl px-12 py-8">
        <div className="grid grid-cols-3 gap-8 sm:grid-cols-4 lg:grid-cols-6">
          {letters.map((letter) => (
            <div key={letter}>
              <h3 className="font-display text-xl text-foreground mb-3">{letter}</h3>
              <div className="space-y-1.5">
                {grouped[letter]!.slice(0, 4).map((brand) => (
                  <Link
                    key={brand.slug}
                    href={`/brands/${brand.slug}`}
                    className="block font-body text-xs tracking-wider text-muted-foreground hover:text-foreground transition-colors uppercase"
                    onClick={onClose}
                  >
                    {brand.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 pt-4 border-t border-border">
          <Link
            href="/brands"
            className="font-body text-sm tracking-wider text-primary hover:opacity-80 transition-opacity"
            onClick={onClose}
          >
            View all brands A–Z →
          </Link>
        </div>
      </div>
    </div>
  );
};
