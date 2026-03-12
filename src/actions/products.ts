"use server";

import { prisma } from "@/lib/prisma";

export async function getFeaturedProducts(limit = 8) {
  const products = await prisma.product.findMany({
    include: {
      brand: {
        select: { id: true, name: true, slug: true },
      },
      category: {
        select: { id: true, name: true, slug: true, gender: true, parentId: true },
      },
    },
    orderBy: { createdAt: "desc" },
    take: limit,
  });

  return products;
}

export async function getProductBySlug(slug: string) {
  const product = await prisma.product.findUnique({
    where: { slug },
    include: {
      brand: {
        select: { id: true, name: true, slug: true },
      },
      category: {
        select: { id: true, name: true, slug: true, gender: true, parentId: true },
      },
    },
  });

  return product;
}

export async function getProductsByGenderCategory(
  gender?: string,
  categorySlug?: string,
  subcategorySlug?: string
) {
  let categoryIds: string[] = [];

  if (subcategorySlug && categorySlug && gender) {
    const subCat = await prisma.category.findFirst({
      where: { slug: subcategorySlug, gender },
      select: { id: true },
    });
    if (subCat) categoryIds = [subCat.id];
  } else if (categorySlug && gender) {
    const parentCat = await prisma.category.findFirst({
      where: { slug: categorySlug, gender, parentId: null },
      select: { id: true },
    });

    if (parentCat) {
      const children = await prisma.category.findMany({
        where: { parentId: parentCat.id },
        select: { id: true },
      });
      categoryIds = [parentCat.id, ...children.map((c) => c.id)];
    } else {
      const directCat = await prisma.category.findFirst({
        where: { slug: categorySlug, gender },
        select: { id: true },
      });
      if (directCat) categoryIds = [directCat.id];
    }
  } else if (gender) {
    const genderCats = await prisma.category.findMany({
      where: { gender },
      select: { id: true },
    });
    categoryIds = genderCats.map((c) => c.id);
  }

  const products = await prisma.product.findMany({
    where: categoryIds.length > 0 ? { categoryId: { in: categoryIds } } : undefined,
    include: {
      brand: { select: { id: true, name: true, slug: true } },
      category: { select: { id: true, name: true, slug: true, gender: true, parentId: true } },
    },
    orderBy: { createdAt: "desc" },
  });

  return products;
}

export async function getProductsByBrand(brandId: string) {
  const products = await prisma.product.findMany({
    where: { brandId },
    include: {
      brand: { select: { id: true, name: true, slug: true } },
      category: { select: { id: true, name: true, slug: true, gender: true, parentId: true } },
    },
    orderBy: { createdAt: "desc" },
  });

  return products;
}

export async function searchProducts(query: string) {
  const products = await prisma.product.findMany({
    where: {
      OR: [
        { name: { contains: query, mode: "insensitive" } },
        { description: { contains: query, mode: "insensitive" } },
      ],
    },
    include: {
      brand: { select: { id: true, name: true, slug: true } },
      category: { select: { id: true, name: true, slug: true, gender: true, parentId: true } },
    },
  });

  return products;
}
