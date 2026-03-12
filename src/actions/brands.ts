"use server";

import { prisma } from "@/lib/prisma";

function formatBrand(brand: {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  story: string | null;
  founded_year: number | null;
  location: string | null;
  main_image: string | null;
  created_at: Date | null;
}) {
  return {
    id: brand.id,
    name: brand.name,
    slug: brand.slug,
    description: brand.description,
    story: brand.story,
    foundedYear: brand.founded_year,
    founded_year: brand.founded_year,
    location: brand.location,
    mainImage: brand.main_image,
    main_image: brand.main_image,
    createdAt: brand.created_at,
    created_at: brand.created_at,
  };
}

export async function getAllBrands() {
  const brands = await prisma.brands.findMany({
    orderBy: { name: "asc" },
  });

  return brands.map(formatBrand);
}

export async function getBrandBySlug(slug: string) {
  const brand = await prisma.brands.findUnique({
    where: { slug },
  });

  return brand ? formatBrand(brand) : null;
}

export async function searchBrands(query: string) {
  const brands = await prisma.brands.findMany({
    where: {
      name: {
        contains: query,
        mode: "insensitive",
      },
    },
  });

  return brands.map(formatBrand);
}
