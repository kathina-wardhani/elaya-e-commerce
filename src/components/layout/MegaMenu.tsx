import { useState } from "react";
import { Link } from "react-router-dom";
import { megaMenuCategories } from "@/data/mock";
import megaMenuImage from "@/assets/brand-story-2.jpg";

interface MegaMenuProps {
  gender: "women" | "men";
  onClose: () => void;
}

export const MegaMenu = ({ gender, onClose }: MegaMenuProps) => {
  const categories = megaMenuCategories[gender];
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const hovered = categories.find((c) => c.name === hoveredCategory);

  return (
    <div
      className="absolute left-0 right-0 z-40 border-b border-border bg-background shadow-sm"
      onMouseLeave={onClose}
    >
      <div className="mx-auto flex max-w-7xl gap-12 px-12 py-8">
        {/* Editorial image */}
        <div className="hidden w-72 shrink-0 lg:block">
          <div className="relative aspect-[3/4] overflow-hidden">
            <img src={megaMenuImage} alt="Editorial" className="h-full w-full object-cover" />
          </div>
        </div>

        {/* Categories */}
        <div className="flex gap-16">
          <div className="space-y-3">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                to={`/category/${gender}/${cat.name.toLowerCase().replace(/ /g, "-")}`}
                className={`block font-body text-sm tracking-wider transition-colors hover:text-foreground ${
                  hoveredCategory === cat.name
                    ? "bg-foreground text-background px-3 py-1 -mx-3"
                    : "text-muted-foreground"
                }`}
                onMouseEnter={() => setHoveredCategory(cat.name)}
                onClick={onClose}
              >
                {cat.name}
              </Link>
            ))}
          </div>

          {/* Subcategories */}
          {hovered && hovered.subcategories.length > 0 && (
            <div className="border-l border-border pl-8 space-y-3">
              {hovered.subcategories.map((sub) => (
                <Link
                  key={sub}
                  to={`/category/${gender}/${sub.toLowerCase().replace(/ /g, "-")}`}
                  className="block font-body text-sm text-muted-foreground tracking-wider hover:text-foreground transition-colors"
                  onClick={onClose}
                >
                  {sub.toUpperCase()}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
