export interface Product {
  id: string;
  name: string;
  brandName: string;
  brandSlug: string;
  price: string;
  image: string;
  category: string;
  gender: "women" | "men";
  slug: string;
  description: string;
  shopUrl: string;
  tags: string[];
}

export interface EditorialCollection {
  id: string;
  tag: string;
  title: string;
  cta: string;
  image: string;
  slug: string;
  description: string;
}

export interface Brand {
  id: string;
  name: string;
  slug: string;
  image: string;
  story: string;
  location: string;
  foundedYear: number;
  philosophy: string;
  instagram: string;
  tags: string[];
}

export interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
  cta: string;
  image: string;
  link: string;
}

export type BrandStory = Brand;

export const heroSlides: HeroSlide[] = [
  {
    id: "1",
    title: "End of Year Collection",
    subtitle: "Discover handcrafted pieces from Indonesia's finest designers",
    cta: "EXPLORE NOW",
    image: "/hero-1",
    link: "/categories/new",
  },
  {
    id: "2",
    title: "Fashion Week Highlights",
    subtitle: "Behind the scenes of our latest collection",
    cta: "EXPLORE NOW",
    image: "/hero-2",
    link: "/categories/featured",
  },
];

export const brands: Brand[] = [
  {
    id: "1", name: "Biyan", slug: "biyan", image: "",
    story: "Biyan Wanaatmadja has been dressing Indonesia's most discerning women for over three decades. His eponymous label is synonymous with intricate embroidery, luxurious fabrics, and a quiet elegance that transcends trends.",
    location: "Surabaya, Indonesia", foundedYear: 1983,
    philosophy: "Timeless elegance through Indonesian textile heritage.",
    instagram: "https://instagram.com/biaborgen", tags: ["luxury", "heritage"],
  },
  {
    id: "2", name: "Ikat Indonesia", slug: "ikat-indonesia", image: "",
    story: "Ikat Indonesia by Didiet Maulana celebrates the country's rich weaving traditions, transforming traditional ikat and tenun into contemporary fashion that tells a story of cultural pride.",
    location: "Jakarta, Indonesia", foundedYear: 2010,
    philosophy: "Preserving Indonesia's weaving legacy through modern fashion.",
    instagram: "https://instagram.com/iaborgen", tags: ["artisan", "tenun"],
  },
  {
    id: "3", name: "Sejauh Mata Memandang", slug: "sejauh-mata-memandang", image: "",
    story: "Sejauh Mata Memandang crafts sustainable fashion using natural dyes and hand-woven fabrics from across the Indonesian archipelago, partnering with local artisan communities.",
    location: "Jakarta, Indonesia", foundedYear: 2014,
    philosophy: "Sustainable fashion that honors Indonesian craftsmanship.",
    instagram: "https://instagram.com/sejauh", tags: ["sustainable", "natural-dye"],
  },
  {
    id: "4", name: "Tulola", slug: "tulola", image: "",
    story: "Founded in Bali, Tulola creates handcrafted jewelry inspired by Indonesian mythology and nature, blending ancient Balinese silversmithing with contemporary design.",
    location: "Bali, Indonesia", foundedYear: 2009,
    philosophy: "Balinese artistry meets modern jewelry design.",
    instagram: "https://instagram.com/tulola", tags: ["jewelry", "bali"],
  },
  {
    id: "5", name: "Aero Sport Club", slug: "aero-sport-club", image: "",
    story: "Aero Sport Club merges Indonesian streetwear culture with vintage athletic aesthetics, creating a new generation of casual wear rooted in local identity.",
    location: "Bandung, Indonesia", foundedYear: 2018,
    philosophy: "Indonesian street culture, elevated.",
    instagram: "https://instagram.com/aerosportclub", tags: ["streetwear", "casual"],
  },
];

export const featuredProducts: Product[] = [
  {
    id: "1", name: "Silk Evening Dress", brandName: "Biyan", brandSlug: "biyan",
    price: "Rp 2,850,000", image: "", category: "tops", gender: "women", slug: "silk-evening-dress",
    description: "A stunning silk evening dress featuring intricate hand-embroidered details inspired by Javanese batik motifs. Perfect for formal occasions.",
    shopUrl: "https://shopee.co.id", tags: ["formal", "silk", "evening"],
  },
  {
    id: "2", name: "Tenun Wide Pants", brandName: "Ikat Indonesia", brandSlug: "ikat-indonesia",
    price: "Rp 4,100,000", image: "", category: "bottoms", gender: "women", slug: "tenun-wide-pants",
    description: "Wide-leg trousers crafted from hand-woven tenun fabric. Each piece carries the unique patterns of Indonesian textile heritage.",
    shopUrl: "https://shopee.co.id", tags: ["casual", "tenun", "artisan"],
  },
  {
    id: "3", name: "Batik Cocktail Dress", brandName: "Sejauh Mata Memandang", brandSlug: "sejauh-mata-memandang",
    price: "Rp 3,200,000", image: "", category: "tops", gender: "women", slug: "batik-cocktail-dress",
    description: "A contemporary cocktail dress with naturally dyed batik fabric. Lightweight and elegant, designed for warm-weather celebrations.",
    shopUrl: "https://shopee.co.id", tags: ["cocktail", "batik", "sustainable"],
  },
  {
    id: "4", name: "Asymmetric Blouse", brandName: "Tulola", brandSlug: "tulola",
    price: "Rp 1,850,000", image: "", category: "tops", gender: "women", slug: "asymmetric-blouse",
    description: "An asymmetric blouse with delicate Balinese-inspired patterns. Versatile enough for office and evening wear.",
    shopUrl: "https://shopee.co.id", tags: ["blouse", "versatile"],
  },
  {
    id: "5", name: "Heritage Cap", brandName: "Aero Sport Club", brandSlug: "aero-sport-club",
    price: "Rp 450,000", image: "", category: "accessories", gender: "men", slug: "heritage-cap",
    description: "A vintage-washed cap featuring embroidered heritage graphics. Relaxed fit, adjustable strap.",
    shopUrl: "https://shopee.co.id", tags: ["cap", "streetwear", "casual"],
  },
  {
    id: "6", name: "Linen Resort Shirt", brandName: "Sejauh Mata Memandang", brandSlug: "sejauh-mata-memandang",
    price: "Rp 1,200,000", image: "", category: "tops", gender: "men", slug: "linen-resort-shirt",
    description: "A relaxed-fit linen shirt dyed with natural indigo. Perfect for tropical weekends.",
    shopUrl: "https://shopee.co.id", tags: ["linen", "resort", "casual"],
  },
  {
    id: "7", name: "Silver Cuff Bracelet", brandName: "Tulola", brandSlug: "tulola",
    price: "Rp 2,400,000", image: "", category: "jewelry", gender: "women", slug: "silver-cuff-bracelet",
    description: "Handcrafted sterling silver cuff inspired by Balinese temple carvings. A statement piece of Indonesian artistry.",
    shopUrl: "https://shopee.co.id", tags: ["jewelry", "silver", "bali"],
  },
  {
    id: "8", name: "Batik Chino Pants", brandName: "Ikat Indonesia", brandSlug: "ikat-indonesia",
    price: "Rp 2,800,000", image: "", category: "bottoms", gender: "men", slug: "batik-chino-pants",
    description: "Modern chino-cut trousers featuring subtle batik-printed fabric. Smart casual perfection.",
    shopUrl: "https://shopee.co.id", tags: ["chino", "batik", "smart-casual"],
  },
];

export const editorialCollections: EditorialCollection[] = [
  { id: "1", tag: "NEW YEAR PARTY", title: "Sparkle & Shine", cta: "Party Szn Incoming", image: "/editorial-party", slug: "sparkle-and-shine", description: "Ring in the new year with sequins, silk, and statement pieces from Indonesia's boldest designers." },
  { id: "2", tag: "HANG OUT", title: "Keep It Chill", cta: "Weekend Vibes", image: "/editorial-casual", slug: "keep-it-chill", description: "Effortless weekend style. Relaxed fits, natural fabrics, easy-going vibes." },
  { id: "3", tag: "OFFICE ATTIRE", title: "Power Dressing", cta: "Boss Mode On", image: "/editorial-office", slug: "power-dressing", description: "Commanding office style that blends Indonesian craftsmanship with modern tailoring." },
  { id: "4", tag: "GALA", title: "Make an Entrance", cta: "Red Carpet Ready", image: "/editorial-gala", slug: "make-an-entrance", description: "Show-stopping gowns and accessories for your most glamorous moments." },
];

export const brandStories = brands;

export const categoryTabs = ["Featured Products", "Trending Now", "New Arrivals"];

export const allCategories = [
  { name: "Ready to Wear", slug: "ready-to-wear", gender: "women" as const },
  { name: "Tops", slug: "tops", gender: "women" as const },
  { name: "Bottoms", slug: "bottoms", gender: "women" as const },
  { name: "Jewelry", slug: "jewelry", gender: "women" as const },
  { name: "Scarves and Ties", slug: "scarves-and-ties", gender: "women" as const },
  { name: "Shoes", slug: "shoes", gender: "women" as const },
  { name: "Bags", slug: "bags", gender: "women" as const },
  { name: "Belts", slug: "belts", gender: "women" as const },
  { name: "Hats and Gloves", slug: "hats-and-gloves", gender: "women" as const },
  { name: "Accessories", slug: "accessories", gender: "men" as const },
  { name: "Ready to Wear", slug: "ready-to-wear-men", gender: "men" as const },
  { name: "New", slug: "new", gender: "women" as const },
  { name: "Featured", slug: "featured", gender: "women" as const },
];

export const megaMenuCategories = {
  women: [
    { name: "READY TO WEAR", slug: "ready-to-wear", subcategories: [] },
    { name: "SCARVES AND TIES", slug: "scarves-and-ties", subcategories: [
      { name: "Silk Scarves and Accessories", slug: "silk-scarves-and-accessories" },
      { name: "Cashmere Shawls and Stoles", slug: "cashmere-shawls-and-stoles" },
      { name: "Twilly and Other Small Formats", slug: "twilly-and-other-small-formats" },
    ]},
    { name: "JEWELRY", slug: "jewelry", subcategories: [] },
    { name: "SHOES", slug: "shoes", subcategories: [] },
    { name: "BAGS", slug: "bags", subcategories: [] },
    { name: "BELTS", slug: "belts", subcategories: [] },
    { name: "HATS AND GLOVES", slug: "hats-and-gloves", subcategories: [] },
  ],
  men: [
    { name: "READY TO WEAR", slug: "ready-to-wear-men", subcategories: [] },
    { name: "SHOES", slug: "shoes-men", subcategories: [] },
    { name: "BAGS", slug: "bags-men", subcategories: [] },
    { name: "ACCESSORIES", slug: "accessories", subcategories: [] },
    { name: "BELTS", slug: "belts-men", subcategories: [] },
    { name: "HATS", slug: "hats-men", subcategories: [] },
  ],
};

export function getProductBySlug(slug: string): Product | undefined {
  return featuredProducts.find((p) => p.slug === slug);
}

export function getBrandBySlug(slug: string): Brand | undefined {
  return brands.find((b) => b.slug === slug);
}

export function getProductsByBrand(brandSlug: string): Product[] {
  return featuredProducts.filter((p) => p.brandSlug === brandSlug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return featuredProducts.filter((p) => p.category === categorySlug || categorySlug === "new" || categorySlug === "featured");
}

export function getCollectionBySlug(slug: string): EditorialCollection | undefined {
  return editorialCollections.find((c) => c.slug === slug);
}

export function getCompleteTheLook(product: Product): Product[] {
  const recommendations: Record<string, string[]> = {
    tops: ["bottoms", "jewelry", "shoes"],
    bottoms: ["tops", "shoes"],
    dresses: ["jewelry", "shoes", "bags"],
    jewelry: ["tops", "dresses"],
    accessories: ["tops", "bottoms"],
  };
  const targetCategories = recommendations[product.category] || ["tops", "bottoms"];
  return featuredProducts
    .filter((p) => p.id !== product.id && targetCategories.includes(p.category))
    .slice(0, 4);
}
