import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { MegaMenu } from "./MegaMenu";

const navItems = [
  { label: "WOMEN", key: "women" as const },
  { label: "MEN", key: "men" as const },
  { label: "BRANDS", key: "brands" as const },
];

export const Header = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 bg-background">
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 py-4 lg:px-12">
        <Link to="/" className="font-display text-2xl italic font-medium tracking-tight text-foreground">
          ELAYA Curated
        </Link>
        <div className="flex items-center gap-3">
          <div className="hidden items-center rounded-full border border-border bg-background px-4 py-2 sm:flex">
            <input
              type="text"
              placeholder="Search..."
              className="w-36 bg-transparent text-sm font-body text-foreground placeholder:text-muted-foreground outline-none lg:w-48"
            />
            <Search className="h-4 w-4 text-muted-foreground" />
          </div>
          <button className="sm:hidden">
            <Search className="h-5 w-5 text-foreground" />
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="border-t border-border">
        <div className="flex items-center justify-center gap-8 py-3 lg:gap-12">
          {navItems.map((item) => (
            <button
              key={item.key}
              className={`font-body text-sm font-medium tracking-widest transition-colors hover:text-foreground ${
                activeMenu === item.key ? "text-foreground font-semibold" : "text-muted-foreground"
              }`}
              onMouseEnter={() => {
                if (item.key !== "brands") setActiveMenu(item.key);
                else setActiveMenu(null);
              }}
              onClick={() => {
                if (item.key === "brands") {
                  setActiveMenu(null);
                  navigate("/category/brands");
                } else {
                  setActiveMenu(activeMenu === item.key ? null : item.key);
                }
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Mega Menu */}
      {(activeMenu === "women" || activeMenu === "men") && (
        <MegaMenu
          gender={activeMenu}
          onClose={() => setActiveMenu(null)}
        />
      )}
    </header>
  );
};
