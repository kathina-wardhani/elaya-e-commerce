// ============= Interfaces =============

export interface Product {
  id: string;
  name: string;
  brandName: string;
  brandSlug: string;
  price: string;
  image: string;
  category: string;        // level-2 slug e.g. "shoes"
  subcategory?: string;     // level-3 slug e.g. "sandals"
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

export interface CategoryItem {
  name: string;
  slug: string;
  subcategories: { name: string; slug: string }[];
}

export type BrandStory = Brand;

// ============= Category hierarchy =============

export const megaMenuCategories: Record<"women" | "men", CategoryItem[]> = {
  women: [
    {
      name: "READY TO WEAR", slug: "ready-to-wear",
      subcategories: [
        { name: "Coats and Jackets", slug: "coats-and-jackets" },
        { name: "Shirts", slug: "shirts" },
        { name: "Pants and Shorts", slug: "pants-and-shorts" },
        { name: "Skirts", slug: "skirts" },
        { name: "Sportwear", slug: "sportwear" },
        { name: "T-Shirts and Polos", slug: "t-shirts-and-polos" },
        { name: "Knitwear and Sweaters", slug: "knitwear-and-sweaters" },
        { name: "Hoodies", slug: "hoodies" },
        { name: "Playsuits and Jumpsuits", slug: "playsuits-and-jumpsuits" },
        { name: "Dresses", slug: "dresses" },
      ],
    },
    {
      name: "SCARVES AND TIES", slug: "scarves-and-ties",
      subcategories: [
        { name: "Silk Scarves and Accessories", slug: "silk-scarves-and-accessories" },
        { name: "Cashmere Shawls and Stoles", slug: "cashmere-shawls-and-stoles" },
        { name: "Twilly and Other Small Formats", slug: "twilly-and-other-small-formats" },
      ],
    },
    {
      name: "JEWELRY", slug: "jewelry",
      subcategories: [
        { name: "Bracelets", slug: "bracelets" },
        { name: "Necklaces and Pendants", slug: "necklaces-and-pendants" },
        { name: "Earrings", slug: "earrings" },
        { name: "Rings", slug: "rings" },
      ],
    },
    {
      name: "SHOES", slug: "shoes",
      subcategories: [
        { name: "Sandals", slug: "sandals" },
        { name: "Sneakers", slug: "sneakers" },
        { name: "Ballet Flats and Pumps", slug: "ballet-flats-and-pumps" },
        { name: "Mules", slug: "mules" },
        { name: "Espadrilles", slug: "espadrilles" },
        { name: "Loafers and Derbies", slug: "loafers-and-derbies" },
        { name: "Boots and Ankle Boots", slug: "boots-and-ankle-boots" },
      ],
    },
    {
      name: "BAGS", slug: "bags",
      subcategories: [
        { name: "Bags and Clutches", slug: "bags-and-clutches" },
        { name: "Small Leather Goods", slug: "small-leather-goods" },
        { name: "Luggage", slug: "luggage" },
        { name: "Leather Accessories", slug: "leather-accessories" },
      ],
    },
    { name: "BELTS", slug: "belts", subcategories: [] },
    { name: "HATS AND GLOVES", slug: "hats-and-gloves", subcategories: [] },
  ],
  men: [
    {
      name: "READY TO WEAR", slug: "ready-to-wear",
      subcategories: [
        { name: "Coats and Jackets", slug: "coats-and-jackets" },
        { name: "Shirts", slug: "shirts" },
        { name: "Pants and Shorts", slug: "pants-and-shorts" },
        { name: "Skirts", slug: "skirts" },
        { name: "Sportwear", slug: "sportwear" },
        { name: "T-Shirts and Polos", slug: "t-shirts-and-polos" },
        { name: "Knitwear and Sweaters", slug: "knitwear-and-sweaters" },
        { name: "Hoodies", slug: "hoodies" },
        { name: "Playsuits and Jumpsuits", slug: "playsuits-and-jumpsuits" },
        { name: "Dresses", slug: "dresses" },
      ],
    },
    {
      name: "SCARVES AND TIES", slug: "scarves-and-ties",
      subcategories: [
        { name: "Silk Scarves and Accessories", slug: "silk-scarves-and-accessories" },
        { name: "Cashmere Shawls and Stoles", slug: "cashmere-shawls-and-stoles" },
        { name: "Twilly and Other Small Formats", slug: "twilly-and-other-small-formats" },
      ],
    },
    {
      name: "JEWELRY", slug: "jewelry",
      subcategories: [
        { name: "Bracelets", slug: "bracelets" },
        { name: "Necklaces and Pendants", slug: "necklaces-and-pendants" },
        { name: "Earrings", slug: "earrings" },
        { name: "Rings", slug: "rings" },
      ],
    },
    {
      name: "SHOES", slug: "shoes",
      subcategories: [
        { name: "Sandals", slug: "sandals" },
        { name: "Sneakers", slug: "sneakers" },
        { name: "Ballet Flats and Pumps", slug: "ballet-flats-and-pumps" },
        { name: "Mules", slug: "mules" },
        { name: "Espadrilles", slug: "espadrilles" },
        { name: "Loafers and Derbies", slug: "loafers-and-derbies" },
        { name: "Boots and Ankle Boots", slug: "boots-and-ankle-boots" },
      ],
    },
    {
      name: "BAGS", slug: "bags",
      subcategories: [
        { name: "Bags and Clutches", slug: "bags-and-clutches" },
        { name: "Small Leather Goods", slug: "small-leather-goods" },
        { name: "Luggage", slug: "luggage" },
        { name: "Leather Accessories", slug: "leather-accessories" },
      ],
    },
    { name: "BELTS", slug: "belts", subcategories: [] },
    { name: "HATS AND GLOVES", slug: "hats-and-gloves", subcategories: [] },
  ],
};

// ============= Static data =============

export const heroSlides: HeroSlide[] = [
  {
    id: "1",
    title: "End of Year Collection",
    subtitle: "Discover handcrafted pieces from Indonesia's finest designers",
    cta: "EXPLORE NOW",
    image: "/hero-1",
    link: "/women",
  },
  {
    id: "2",
    title: "Fashion Week Highlights",
    subtitle: "Behind the scenes of our latest collection",
    cta: "EXPLORE NOW",
    image: "/hero-2",
    link: "/women/ready-to-wear",
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
  {
    id: "6", name: "Alleira Batik", slug: "alleira-batik", image: "",
    story: "Alleira Batik preserves the ancient art of hand-drawn batik tulis while introducing modern silhouettes that appeal to today's fashion-conscious consumers.",
    location: "Jakarta, Indonesia", foundedYear: 2005,
    philosophy: "Keeping batik tulis alive through modern design.",
    instagram: "https://instagram.com/alleirabatik", tags: ["batik", "heritage"],
  },
  {
    id: "7", name: "Danjyo Hiyoji", slug: "danjyo-hiyoji", image: "",
    story: "Danjyo Hiyoji is a menswear-focused brand that brings refined tailoring and contemporary cuts to the Indonesian man's wardrobe.",
    location: "Jakarta, Indonesia", foundedYear: 2012,
    philosophy: "Modern masculinity, tailored precisely.",
    instagram: "https://instagram.com/danjyohiyoji", tags: ["menswear", "tailoring"],
  },
  {
    id: "8", name: "Kami", slug: "kami", image: "",
    story: "Kami is a sustainable fashion label focused on everyday essentials made from organic cotton and natural dyes sourced from local farmers.",
    location: "Yogyakarta, Indonesia", foundedYear: 2016,
    philosophy: "Simple, sustainable, everyday.",
    instagram: "https://instagram.com/kami", tags: ["sustainable", "basics"],
  },
  {
    id: "9", name: "Peggy Hartanto", slug: "peggy-hartanto", image: "",
    story: "Peggy Hartanto creates minimalist womenswear with architectural details, favoring clean lines and neutral palettes.",
    location: "Jakarta, Indonesia", foundedYear: 2013,
    philosophy: "Architectural minimalism for the modern woman.",
    instagram: "https://instagram.com/peggyhartanto", tags: ["minimalist", "architectural"],
  },
  {
    id: "10", name: "Rinaldy Yunardi", slug: "rinaldy-yunardi", image: "",
    story: "Rinaldy Yunardi is Indonesia's most celebrated accessories designer, creating extravagant headpieces and jewelry that have graced international runways.",
    location: "Jakarta, Indonesia", foundedYear: 2008,
    philosophy: "Wearable art that defies convention.",
    instagram: "https://instagram.com/rinaldyyunardi", tags: ["accessories", "couture"],
  },
];

export const featuredProducts: Product[] = [
  // Women - Ready to Wear
  {
    id: "1", name: "Silk Evening Dress", brandName: "Biyan", brandSlug: "biyan",
    price: "Rp 2,850,000", image: "", category: "ready-to-wear", subcategory: "dresses", gender: "women", slug: "silk-evening-dress",
    description: "A stunning silk evening dress featuring intricate hand-embroidered details inspired by Javanese batik motifs.",
    shopUrl: "https://shopee.co.id", tags: ["formal", "silk", "evening"],
  },
  {
    id: "3", name: "Batik Cocktail Dress", brandName: "Sejauh Mata Memandang", brandSlug: "sejauh-mata-memandang",
    price: "Rp 3,200,000", image: "", category: "ready-to-wear", subcategory: "dresses", gender: "women", slug: "batik-cocktail-dress",
    description: "A contemporary cocktail dress with naturally dyed batik fabric. Lightweight and elegant.",
    shopUrl: "https://shopee.co.id", tags: ["cocktail", "batik", "sustainable"],
  },
  {
    id: "4", name: "Asymmetric Blouse", brandName: "Peggy Hartanto", brandSlug: "peggy-hartanto",
    price: "Rp 1,850,000", image: "", category: "ready-to-wear", subcategory: "shirts", gender: "women", slug: "asymmetric-blouse",
    description: "An asymmetric blouse with architectural draping. Versatile for office and evening.",
    shopUrl: "https://shopee.co.id", tags: ["blouse", "versatile", "minimalist"],
  },
  {
    id: "11", name: "Linen Wrap Skirt", brandName: "Kami", brandSlug: "kami",
    price: "Rp 980,000", image: "", category: "ready-to-wear", subcategory: "skirts", gender: "women", slug: "linen-wrap-skirt",
    description: "An organic cotton-linen blend wrap skirt in naturally dyed earth tones.",
    shopUrl: "https://shopee.co.id", tags: ["skirt", "organic", "sustainable"],
  },
  {
    id: "12", name: "Embroidered Jacket", brandName: "Alleira Batik", brandSlug: "alleira-batik",
    price: "Rp 4,500,000", image: "", category: "ready-to-wear", subcategory: "coats-and-jackets", gender: "women", slug: "embroidered-jacket",
    description: "Hand-embroidered jacket with batik tulis detailing on silk-cotton blend.",
    shopUrl: "https://shopee.co.id", tags: ["jacket", "batik", "embroidered"],
  },
  // Women - Bottoms (pants)
  {
    id: "2", name: "Tenun Wide Pants", brandName: "Ikat Indonesia", brandSlug: "ikat-indonesia",
    price: "Rp 4,100,000", image: "", category: "ready-to-wear", subcategory: "pants-and-shorts", gender: "women", slug: "tenun-wide-pants",
    description: "Wide-leg trousers crafted from hand-woven tenun fabric with unique Indonesian patterns.",
    shopUrl: "https://shopee.co.id", tags: ["casual", "tenun", "artisan"],
  },
  // Women - Jewelry
  {
    id: "7", name: "Silver Cuff Bracelet", brandName: "Tulola", brandSlug: "tulola",
    price: "Rp 2,400,000", image: "", category: "jewelry", subcategory: "bracelets", gender: "women", slug: "silver-cuff-bracelet",
    description: "Handcrafted sterling silver cuff inspired by Balinese temple carvings.",
    shopUrl: "https://shopee.co.id", tags: ["jewelry", "silver", "bali"],
  },
  {
    id: "13", name: "Temple Earrings", brandName: "Tulola", brandSlug: "tulola",
    price: "Rp 1,800,000", image: "", category: "jewelry", subcategory: "earrings", gender: "women", slug: "temple-earrings",
    description: "Gold-plated drop earrings inspired by Balinese pura architecture.",
    shopUrl: "https://shopee.co.id", tags: ["jewelry", "gold", "earrings"],
  },
  {
    id: "14", name: "Garuda Pendant Necklace", brandName: "Rinaldy Yunardi", brandSlug: "rinaldy-yunardi",
    price: "Rp 3,600,000", image: "", category: "jewelry", subcategory: "necklaces-and-pendants", gender: "women", slug: "garuda-pendant-necklace",
    description: "Statement necklace featuring a miniature Garuda pendant in sterling silver.",
    shopUrl: "https://shopee.co.id", tags: ["jewelry", "statement", "couture"],
  },
  // Women - Shoes
  {
    id: "15", name: "Woven Leather Sandals", brandName: "Kami", brandSlug: "kami",
    price: "Rp 890,000", image: "", category: "shoes", subcategory: "sandals", gender: "women", slug: "woven-leather-sandals",
    description: "Hand-woven leather sandals with natural rubber sole. Perfect for tropical days.",
    shopUrl: "https://shopee.co.id", tags: ["shoes", "sandals", "leather"],
  },
  {
    id: "16", name: "Batik Sneakers", brandName: "Aero Sport Club", brandSlug: "aero-sport-club",
    price: "Rp 1,200,000", image: "", category: "shoes", subcategory: "sneakers", gender: "women", slug: "batik-sneakers-women",
    description: "Canvas sneakers with hand-applied batik print. Street style meets heritage.",
    shopUrl: "https://shopee.co.id", tags: ["shoes", "sneakers", "batik"],
  },
  // Women - Bags
  {
    id: "17", name: "Rattan Clutch", brandName: "Alleira Batik", brandSlug: "alleira-batik",
    price: "Rp 1,500,000", image: "", category: "bags", subcategory: "bags-and-clutches", gender: "women", slug: "rattan-clutch",
    description: "Handwoven rattan clutch with batik lining. A tropical evening essential.",
    shopUrl: "https://shopee.co.id", tags: ["bags", "clutch", "rattan"],
  },
  // Women - Scarves
  {
    id: "18", name: "Silk Batik Scarf", brandName: "Ikat Indonesia", brandSlug: "ikat-indonesia",
    price: "Rp 1,650,000", image: "", category: "scarves-and-ties", subcategory: "silk-scarves-and-accessories", gender: "women", slug: "silk-batik-scarf",
    description: "Luxurious silk scarf featuring hand-drawn batik parang motif.",
    shopUrl: "https://shopee.co.id", tags: ["scarf", "silk", "batik"],
  },
  // Men - Ready to Wear
  {
    id: "6", name: "Linen Resort Shirt", brandName: "Sejauh Mata Memandang", brandSlug: "sejauh-mata-memandang",
    price: "Rp 1,200,000", image: "", category: "ready-to-wear", subcategory: "shirts", gender: "men", slug: "linen-resort-shirt",
    description: "A relaxed-fit linen shirt dyed with natural indigo. Perfect for tropical weekends.",
    shopUrl: "https://shopee.co.id", tags: ["linen", "resort", "casual"],
  },
  {
    id: "8", name: "Batik Chino Pants", brandName: "Ikat Indonesia", brandSlug: "ikat-indonesia",
    price: "Rp 2,800,000", image: "", category: "ready-to-wear", subcategory: "pants-and-shorts", gender: "men", slug: "batik-chino-pants",
    description: "Modern chino-cut trousers featuring subtle batik-printed fabric.",
    shopUrl: "https://shopee.co.id", tags: ["chino", "batik", "smart-casual"],
  },
  {
    id: "19", name: "Tailored Blazer", brandName: "Danjyo Hiyoji", brandSlug: "danjyo-hiyoji",
    price: "Rp 3,800,000", image: "", category: "ready-to-wear", subcategory: "coats-and-jackets", gender: "men", slug: "tailored-blazer",
    description: "Impeccably tailored blazer in tropical wool blend. Sharp modern cut.",
    shopUrl: "https://shopee.co.id", tags: ["blazer", "tailored", "formal"],
  },
  {
    id: "20", name: "Heritage Hoodie", brandName: "Aero Sport Club", brandSlug: "aero-sport-club",
    price: "Rp 680,000", image: "", category: "ready-to-wear", subcategory: "hoodies", gender: "men", slug: "heritage-hoodie",
    description: "Vintage-washed hoodie with embroidered heritage logo. Relaxed athletic fit.",
    shopUrl: "https://shopee.co.id", tags: ["hoodie", "streetwear", "casual"],
  },
  // Men - Shoes
  {
    id: "21", name: "Leather Derby Shoes", brandName: "Danjyo Hiyoji", brandSlug: "danjyo-hiyoji",
    price: "Rp 2,200,000", image: "", category: "shoes", subcategory: "loafers-and-derbies", gender: "men", slug: "leather-derby-shoes",
    description: "Classic derby shoes in full-grain leather with a modern slim sole.",
    shopUrl: "https://shopee.co.id", tags: ["shoes", "derby", "leather"],
  },
  {
    id: "22", name: "Canvas Sneakers", brandName: "Aero Sport Club", brandSlug: "aero-sport-club",
    price: "Rp 750,000", image: "", category: "shoes", subcategory: "sneakers", gender: "men", slug: "canvas-sneakers-men",
    description: "Minimalist canvas sneakers with vulcanized rubber sole.",
    shopUrl: "https://shopee.co.id", tags: ["shoes", "sneakers", "casual"],
  },
  // Men - Accessories / Hats
  {
    id: "5", name: "Heritage Cap", brandName: "Aero Sport Club", brandSlug: "aero-sport-club",
    price: "Rp 450,000", image: "", category: "hats-and-gloves", gender: "men", slug: "heritage-cap",
    description: "A vintage-washed cap featuring embroidered heritage graphics.",
    shopUrl: "https://shopee.co.id", tags: ["cap", "streetwear", "casual"],
  },
  // Men - Bags
  {
    id: "23", name: "Leather Messenger Bag", brandName: "Danjyo Hiyoji", brandSlug: "danjyo-hiyoji",
    price: "Rp 3,200,000", image: "", category: "bags", subcategory: "bags-and-clutches", gender: "men", slug: "leather-messenger-bag",
    description: "Full-grain leather messenger bag with brass hardware. Fits a 14-inch laptop.",
    shopUrl: "https://shopee.co.id", tags: ["bags", "leather", "messenger"],
  },
  // Men - Jewelry
  {
    id: "24", name: "Silver Signet Ring", brandName: "Tulola", brandSlug: "tulola",
    price: "Rp 1,600,000", image: "", category: "jewelry", subcategory: "rings", gender: "men", slug: "silver-signet-ring",
    description: "Hand-carved sterling silver signet ring with Balinese wave motif.",
    shopUrl: "https://shopee.co.id", tags: ["jewelry", "ring", "silver"],
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

export const allCategories: { name: string; slug: string; gender: "women" | "men" }[] = [
  ...megaMenuCategories.women.map((c) => ({ name: c.name, slug: c.slug, gender: "women" as const })),
  ...megaMenuCategories.men.map((c) => ({ name: c.name, slug: c.slug, gender: "men" as const })),
];

// ============= Helper functions =============

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
  return featuredProducts.filter((p) => p.category === categorySlug);
}

export function getCollectionBySlug(slug: string): EditorialCollection | undefined {
  return editorialCollections.find((c) => c.slug === slug);
}

/** Filter products by gender, category slug, and optional subcategory slug */
export function filterProducts(
  gender?: string,
  categorySlug?: string,
  subcategorySlug?: string
): Product[] {
  let results = [...featuredProducts];
  if (gender) results = results.filter((p) => p.gender === gender);
  if (categorySlug) results = results.filter((p) => p.category === categorySlug);
  if (subcategorySlug) results = results.filter((p) => p.subcategory === subcategorySlug);
  return results;
}

/** Search across product name, description, brand, tags, category */
export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return featuredProducts.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.brandName.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q)) ||
      p.category.toLowerCase().includes(q) ||
      (p.subcategory && p.subcategory.toLowerCase().includes(q))
  );
}

/** Search brands */
export function searchBrands(query: string): Brand[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return brands.filter(
    (b) =>
      b.name.toLowerCase().includes(q) ||
      b.story.toLowerCase().includes(q) ||
      b.tags.some((t) => t.toLowerCase().includes(q))
  );
}

/** Get category display name from slug */
export function getCategoryName(slug: string): string {
  for (const gender of ["women", "men"] as const) {
    for (const cat of megaMenuCategories[gender]) {
      if (cat.slug === slug) return cat.name;
      const sub = cat.subcategories.find((s) => s.slug === slug);
      if (sub) return sub.name;
    }
  }
  return slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
}

export function getCompleteTheLook(product: Product): Product[] {
  const recommendations: Record<string, string[]> = {
    "ready-to-wear": ["jewelry", "shoes", "bags", "scarves-and-ties"],
    jewelry: ["ready-to-wear", "bags", "shoes"],
    shoes: ["ready-to-wear", "bags", "jewelry"],
    bags: ["ready-to-wear", "jewelry", "shoes"],
    "scarves-and-ties": ["ready-to-wear", "jewelry"],
    belts: ["ready-to-wear", "shoes"],
    "hats-and-gloves": ["ready-to-wear", "shoes"],
  };
  const targetCategories = recommendations[product.category] || ["ready-to-wear", "jewelry"];
  return featuredProducts
    .filter((p) => p.id !== product.id && targetCategories.includes(p.category))
    .slice(0, 4);
}
