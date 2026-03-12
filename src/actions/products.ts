"use server";

import { prisma } from "@/lib/prisma";

type ProductRecord = {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  price_min: unknown | null;
  price_max: unknown | null;
  external_url: string;
  brand_id: string | null;
  category_id: string | null;
  images: string[];
  main_image: string | null;
  gender: string | null;
  material: string | null;
  size_range: string | null;
  is_featured: boolean;
  created_at: Date | null;
  updated_at: Date;
  brands?: {
    id: string;
    name: string;
    slug: string;
  } | null;
  categories?: {
    id: string;
    name: string;
    slug: string;
    gender: string;
    parent_id: string | null;
  } | null;
  product_tag_map?: Array<{
    product_tags: {
      name: string;
      slug: string;
    };
  }>;
};

function formatProduct(product: ProductRecord) {
  return {
    id: product.id,
    name: product.name,
    slug: product.slug,
    description: product.description,
    priceMin: product.price_min,
    priceMax: product.price_max,
    price_min: product.price_min,
    price_max: product.price_max,
    externalUrl: product.external_url,
    external_url: product.external_url,
    brandId: product.brand_id,
    brand_id: product.brand_id,
    categoryId: product.category_id,
    category_id: product.category_id,
    images: product.images,
    mainImage: product.main_image,
    main_image: product.main_image,
    gender: product.gender,
    material: product.material,
    sizeRange: product.size_range,
    size_range: product.size_range,
    isFeatured: product.is_featured,
    is_featured: product.is_featured,
    createdAt: product.created_at,
    created_at: product.created_at,
    updatedAt: product.updated_at,
    updated_at: product.updated_at,
    brand: product.brands
      ? {
          id: product.brands.id,
          name: product.brands.name,
          slug: product.brands.slug,
        }
      : null,
    category: product.categories
      ? {
          id: product.categories.id,
          name: product.categories.name,
          slug: product.categories.slug,
          gender: product.categories.gender,
          parentId: product.categories.parent_id,
          parent_id: product.categories.parent_id,
        }
      : null,
    tags: product.product_tag_map?.map((entry) => entry.product_tags.name) ?? [],
  };
}

export async function getFeaturedProducts(limit = 8) {
  const products = await prisma.products.findMany({
    include: {
      brands: {
        select: { id: true, name: true, slug: true },
      },
      categories: {
        select: { id: true, name: true, slug: true, gender: true, parent_id: true },
      },
      product_tag_map: {
        include: {
          product_tags: {
            select: { name: true, slug: true },
          },
        },
      },
    },
    orderBy: { created_at: "desc" },
    take: limit,
  });

  return products.map(formatProduct);
}

export async function getProductBySlug(slug: string) {
  const product = await prisma.products.findUnique({
    where: { slug },
    include: {
      brands: {
        select: { id: true, name: true, slug: true },
      },
      categories: {
        select: { id: true, name: true, slug: true, gender: true, parent_id: true },
      },
      product_tag_map: {
        include: {
          product_tags: {
            select: { name: true, slug: true },
          },
        },
      },
    },
  });

  return product ? formatProduct(product) : null;
}

export async function getProductsByGenderCategory(
  gender?: string,
  categorySlug?: string,
  subcategorySlug?: string
) {
  let categoryIds: string[] = [];

  if (subcategorySlug && categorySlug && gender) {
    const subCat = await prisma.categories.findFirst({
      where: { slug: subcategorySlug, gender },
      select: { id: true },
    });
    if (subCat) categoryIds = [subCat.id];
  } else if (categorySlug && gender) {
    const parentCat = await prisma.categories.findFirst({
      where: { slug: categorySlug, gender, parent_id: null },
      select: { id: true },
    });

    if (parentCat) {
      const children = await prisma.categories.findMany({
        where: { parent_id: parentCat.id },
        select: { id: true },
      });
      categoryIds = [parentCat.id, ...children.map((c) => c.id)];
    } else {
      const directCat = await prisma.categories.findFirst({
        where: { slug: categorySlug, gender },
        select: { id: true },
      });
      if (directCat) categoryIds = [directCat.id];
    }
  } else if (gender) {
    const genderCats = await prisma.categories.findMany({
      where: { gender },
      select: { id: true },
    });
    categoryIds = genderCats.map((c) => c.id);
  }

  const products = await prisma.products.findMany({
    where: categoryIds.length > 0 ? { category_id: { in: categoryIds } } : undefined,
    include: {
      brands: { select: { id: true, name: true, slug: true } },
      categories: { select: { id: true, name: true, slug: true, gender: true, parent_id: true } },
      product_tag_map: {
        include: {
          product_tags: {
            select: { name: true, slug: true },
          },
        },
      },
    },
    orderBy: { created_at: "desc" },
  });

  return products.map(formatProduct);
}

export async function getProductsByBrand(brandId: string) {
  const products = await prisma.products.findMany({
    where: { brand_id: brandId },
    include: {
      brands: { select: { id: true, name: true, slug: true } },
      categories: { select: { id: true, name: true, slug: true, gender: true, parent_id: true } },
      product_tag_map: {
        include: {
          product_tags: {
            select: { name: true, slug: true },
          },
        },
      },
    },
    orderBy: { created_at: "desc" },
  });

  return products.map(formatProduct);
}

export async function searchProducts(query: string) {
  const products = await prisma.products.findMany({
    where: {
      OR: [
        { name: { contains: query, mode: "insensitive" } },
        { description: { contains: query, mode: "insensitive" } },
      ],
    },
    include: {
      brands: { select: { id: true, name: true, slug: true } },
      categories: { select: { id: true, name: true, slug: true, gender: true, parent_id: true } },
      product_tag_map: {
        include: {
          product_tags: {
            select: { name: true, slug: true },
          },
        },
      },
    },
  });

  return products.map(formatProduct);
}
