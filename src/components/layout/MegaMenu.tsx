import { useState } from "react";
import { Link } from "react-router-dom";
import { megaMenuCategories } from "@/data/mock";
import megaMenuImageWomen from "@/assets/brand-story-2.jpg";
import megaMenuImageMen from "@/assets/brand-story-3.jpg";

interface MegaMenuProps {
  gender: "women" | "men";
  onClose: () => void;
}

export const MegaMenu = ({ gender, onClose }: MegaMenuProps) => {
  const categories = megaMenuCategories[gender];
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const hovered = categories.find((c) => c.name === hoveredCategory);
  const menuImage = gender === "women" ? megaMenuImageWomen : megaMenuImageMen;

  return (
    <div className="absolute left-0 right-0 z-40 border-b border-border bg-background shadow-sm">
      <div className="mx-auto flex max-w-7xl gap-12 px-12 py-8">
        {/* Editorial image */}
        <div className="hidden w-72 shrink-0 lg:block">
          <div className="relative aspect-[3/4] overflow-hidden">
            <img src={menuImage} alt="Editorial" className="h-full w-full object-cover" />
          </div>
        </div>

        {/* Categories column */}
        <div className="flex gap-16">
          <div className="space-y-3">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                to={`/${gender}/${cat.slug}`}
                className={`block font-body text-sm tracking-wider transition-all duration-150 cursor-pointer ${
                  hoveredCategory === cat.name
                    ? "bg-[hsl(0,0%,0%)] text-[hsl(0,0%,100%)] font-medium px-3 py-1.5 -mx-3 rounded-sm"
                    : "text-[hsl(0,0%,27%)] hover:bg-[hsl(0,0%,0%)] hover:text-[hsl(0,0%,100%)] hover:px-3 hover:py-1.5 hover:-mx-3 hover:rounded-sm"
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
                  key={sub.slug}
                  to={`/${gender}/${hovered.slug}/${sub.slug}`}
                  className="block font-body text-sm text-[hsl(0,0%,27%)] tracking-wider hover:underline hover:text-foreground transition-colors duration-150 cursor-pointer"
                  onClick={onClose}
                >
                  {sub.name.toUpperCase()}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
