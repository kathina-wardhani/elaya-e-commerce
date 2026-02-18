"use server";

import { prisma } from "@/lib/prisma";

export async function getAllBrands() {
  const brands = await prisma.brand.findMany({
    orderBy: { name: "asc" },
  });

  return brands;
}

export async function getBrandBySlug(slug: string) {
  const brand = await prisma.brand.findUnique({
    where: { slug },
  });

  return brand;
}

export async function searchBrands(query: string) {
  const brands = await prisma.brand.findMany({
    where: {
      name: {
        contains: query,
        mode: "insensitive",
      },
    },
  });

  return brands;
}
