export interface Product {
  id: string;
  name: string;
  brandName: string;
  price: string;
  image: string;
  category: string;
  gender: "women" | "men";
  slug: string;
}

export interface EditorialCollection {
  id: string;
  tag: string;
  title: string;
  cta: string;
  image: string;
  slug: string;
}

export interface BrandStory {
  id: string;
  name: string;
  image: string;
  slug: string;
}

export interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
  cta: string;
  image: string;
  link: string;
}

export const heroSlides: HeroSlide[] = [
  {
    id: "1",
    title: "End of Year Collection",
    subtitle: "Discover handcrafted pieces from Indonesia's finest designers",
    cta: "EXPLORE NOW",
    image: "/hero-1",
    link: "/category/new",
  },
  {
    id: "2",
    title: "Fashion Week Highlights",
    subtitle: "Behind the scenes of our latest collection",
    cta: "EXPLORE NOW",
    image: "/hero-2",
    link: "/category/featured",
  },
];

export const featuredProducts: Product[] = [
  { id: "1", name: "Silk Evening Dress", brandName: "Biyan", price: "Rp 2,850,000", image: "", category: "tops", gender: "women", slug: "silk-evening-dress" },
  { id: "2", name: "Tenun Wide Pants", brandName: "Ikat Indonesia", price: "Rp 4,100,000", image: "", category: "bottoms", gender: "women", slug: "tenun-wide-pants" },
  { id: "3", name: "Batik Cocktail Dress", brandName: "Sejauh Mata Memandang", price: "Rp 3,200,000", image: "", category: "tops", gender: "women", slug: "batik-cocktail-dress" },
  { id: "4", name: "Asymmetric Blouse", brandName: "Tulola", price: "Rp 1,850,000", image: "", category: "tops", gender: "women", slug: "asymmetric-blouse" },
  { id: "5", name: "Heritage Cap", brandName: "Aero Sport Club", price: "Rp 450,000", image: "", category: "accessories", gender: "men", slug: "heritage-cap" },
];

export const editorialCollections: EditorialCollection[] = [
  { id: "1", tag: "NEW YEAR PARTY", title: "Sparkle & Shine", cta: "Party Szn Incoming", image: "/editorial-party", slug: "sparkle-and-shine" },
  { id: "2", tag: "HANG OUT", title: "Keep It Chill", cta: "Weekend Vibes", image: "/editorial-casual", slug: "keep-it-chill" },
  { id: "3", tag: "OFFICE ATTIRE", title: "Power Dressing", cta: "Boss Mode On", image: "/editorial-office", slug: "power-dressing" },
  { id: "4", tag: "GALA", title: "Make an Entrance", cta: "Red Carpet Ready", image: "/editorial-gala", slug: "make-an-entrance" },
];

export const brandStories: BrandStory[] = [
  { id: "1", name: "GIFTED MOMENTS", image: "/brand-story-1", slug: "gifted-moments" },
  { id: "2", name: "MAKE WAVES NOT RULES", image: "/brand-story-2", slug: "make-waves-not-rules" },
  { id: "3", name: "OIAL", image: "/brand-story-3", slug: "oial" },
  { id: "4", name: "AERO SPORT CLUB", image: "/brand-story-4", slug: "aero-sport-club" },
];

export const categoryTabs = ["Featured Products", "Trending Now", "New Arrivals"];

export const megaMenuCategories = {
  women: [
    { name: "READY TO WEAR", subcategories: [] },
    { name: "SCARVES AND TIES", subcategories: ["Silk Scarves and Accessories", "Cashmere Shawls and Stoles", "Twilly and Other Small Formats"] },
    { name: "JEWELRY", subcategories: [] },
    { name: "SHOES", subcategories: [] },
    { name: "BAGS", subcategories: [] },
    { name: "BELTS", subcategories: [] },
    { name: "HATS AND GLOVES", subcategories: [] },
  ],
  men: [
    { name: "READY TO WEAR", subcategories: [] },
    { name: "SHOES", subcategories: [] },
    { name: "BAGS", subcategories: [] },
    { name: "ACCESSORIES", subcategories: [] },
    { name: "BELTS", subcategories: [] },
    { name: "HATS", subcategories: [] },
  ],
};
