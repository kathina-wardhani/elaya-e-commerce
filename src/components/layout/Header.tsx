import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { MegaMenu } from "./MegaMenu";
import { BrandsMegaMenu } from "./BrandsMegaMenu";

const navItems = [
  { label: "WOMEN", key: "women" as const, path: "/women" },
  { label: "MEN", key: "men" as const, path: "/men" },
  { label: "BRANDS", key: "brands" as const, path: "/brands" },
];

export const Header = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = (key: string) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setActiveMenu(key);
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => setActiveMenu(null), 150);
  };

  const handleMenuMouseEnter = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-background">
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 py-4 lg:px-12">
        <Link to="/" className="font-display text-2xl italic font-medium tracking-tight text-foreground">
          ELAYA Curated
        </Link>
        <form onSubmit={handleSearch} className="flex items-center">
          <div className="flex items-center rounded-full border border-border bg-background px-4 py-2">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-36 bg-transparent text-sm font-body text-foreground placeholder:text-muted-foreground outline-none lg:w-48"
            />
            <button type="submit">
              <Search className="h-4 w-4 text-muted-foreground" />
            </button>
          </div>
        </form>
      </div>

      {/* Navigation */}
      <nav className="border-t border-border">
        <div className="flex items-center justify-center gap-8 py-3 lg:gap-12">
          {navItems.map((item) => (
            <div
              key={item.key}
              onMouseEnter={() => handleMouseEnter(item.key)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to={item.path}
                className={`font-body text-sm font-medium tracking-widest transition-colors hover:text-foreground ${
                  activeMenu === item.key ? "text-foreground font-semibold" : "text-muted-foreground"
                }`}
                onClick={() => setActiveMenu(null)}
              >
                {item.label}
              </Link>
            </div>
          ))}
        </div>
      </nav>

      {/* Mega Menus */}
      {(activeMenu === "women" || activeMenu === "men") && (
        <div onMouseEnter={handleMenuMouseEnter} onMouseLeave={handleMouseLeave}>
          <MegaMenu
            gender={activeMenu}
            onClose={() => setActiveMenu(null)}
          />
        </div>
      )}
      {activeMenu === "brands" && (
        <div onMouseEnter={handleMenuMouseEnter} onMouseLeave={handleMouseLeave}>
          <BrandsMegaMenu onClose={() => setActiveMenu(null)} />
        </div>
      )}
    </header>
  );
};
