import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { featuredProducts, categoryTabs } from "@/data/mock";

export const ShopByCategory = () => {
  const [gender, setGender] = useState<"women" | "men">("women");
  const [activeTab, setActiveTab] = useState(0);

  const filtered = featuredProducts.filter((p) => p.gender === gender);

  return (
    <section className="py-16 lg:py-24">
      <div className="px-6 lg:px-12">
        {/* Header */}
        <div className="mb-8 flex flex-col items-center gap-4">
          <div className="flex items-center gap-3">
            <h2 className="font-display text-2xl sm:text-3xl text-foreground">
              Shop by category for
            </h2>
            <button
              onClick={() => setGender(gender === "women" ? "men" : "women")}
              className="flex items-center gap-1 border border-border px-4 py-2 font-body text-sm font-medium text-foreground"
            >
              {gender === "women" ? "WOMEN" : "MEN"}
              <ChevronDown className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2">
            {categoryTabs.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                className={`rounded-full px-5 py-2 font-body text-sm transition-colors ${
                  i === activeTab
                    ? "bg-primary text-primary-foreground"
                    : "border border-border bg-background text-foreground hover:bg-secondary"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Product grid */}
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {filtered.map((product) => (
            <div key={product.id} className="w-[220px] flex-shrink-0">
              <ProductCard product={product} />
            </div>
          ))}
          {/* Repeat to fill */}
          {filtered.map((product) => (
            <div key={`dup-${product.id}`} className="w-[220px] flex-shrink-0">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
