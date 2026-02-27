"use client";

import Link from "next/link";
import { useState, useRef, useEffect, useMemo } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { useFeaturedProducts } from "@/hooks/use-supabase-data";
import { Skeleton } from "@/components/ui/skeleton";

export const ShopByCategory = () => {
  const [gender, setGender] = useState<"women" | "men">("women");
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { data: products, isLoading } = useFeaturedProducts(120, false);

  const filtered = useMemo(
    () => (products || []).filter((p) => p.category?.gender === gender),
    [products, gender]
  );

  const displayedProducts = useMemo(() => {
    const shuffled = [...filtered].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 10);
  }, [filtered]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (value: "women" | "men") => {
    setGender(value);
    setOpen(false);
  };

  return (
    <section className="py-16 lg:py-24">
      <div className="px-6 lg:px-12">
        <div className="mb-8 flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <h2 className="font-display text-2xl sm:text-3xl text-foreground">
              Shop by category for
            </h2>
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setOpen(!open)}
                onKeyDown={(e) => {
                  if (e.key === "Escape") setOpen(false);
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setOpen(!open);
                  }
                }}
                aria-haspopup="listbox"
                aria-expanded={open}
                className="flex items-center gap-2 border border-foreground bg-background px-4 py-2.5 font-body text-sm font-medium text-foreground rounded-[6px] h-[42px] min-w-[120px] justify-between cursor-pointer transition-colors duration-150 hover:bg-foreground hover:text-background"
              >
                {gender === "women" ? "WOMEN" : "MEN"}
                <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-150 ${open ? "rotate-180" : ""}`} />
              </button>
              {open && (
                <div
                  role="listbox"
                  className="absolute top-full left-0 mt-1 w-full border border-foreground bg-background rounded-[6px] shadow-md z-50 overflow-hidden"
                >
                  {(["women", "men"] as const).map((option) => (
                    <button
                      key={option}
                      role="option"
                      aria-selected={gender === option}
                      onClick={() => handleSelect(option)}
                      className={`block w-full text-left px-4 py-2.5 font-body text-sm font-medium cursor-pointer transition-colors duration-150 ${gender === option
                        ? "bg-foreground text-background"
                        : "text-foreground hover:bg-foreground hover:text-background"
                        }`}
                    >
                      {option.toUpperCase()}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          <Link
            href={`/${gender}`}
            className="flex items-center gap-1 bg-primary px-5 py-2.5 font-body text-xs font-medium tracking-wider text-primary-foreground transition-opacity hover:opacity-90"
          >
            View All
            <ChevronRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {isLoading ? (
          <div className="flex gap-4 overflow-x-auto pb-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="w-[220px] flex-shrink-0">
                <Skeleton className="aspect-[3/4] w-full mb-3" />
                <Skeleton className="h-3 w-20 mb-1" />
                <Skeleton className="h-4 w-32 mb-1" />
                <Skeleton className="h-3 w-24" />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {displayedProducts.map((product) => (
              <div key={product.id} className="w-[220px] flex-shrink-0">
                <ProductCard product={product} />
              </div>
            ))}
            {displayedProducts.length === 0 && (
              <p className="font-body text-sm text-muted-foreground py-8">No products found for this category yet.</p>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
