// ============= Interfaces (kept for mega menu structure only) =============

export interface CategoryItem {
  name: string;
  slug: string;
  subcategories: { name: string; slug: string }[];
}

// ============= Category hierarchy (structural navigation data) =============

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
