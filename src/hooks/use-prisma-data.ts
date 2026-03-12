"use client";

import { useQuery } from "@tanstack/react-query";
import {
  getFeaturedProducts,
  getProductBySlug,
  getProductsByGenderCategory,
  getProductsByBrand,
  searchProducts,
} from "@/actions/products";
import { getAllBrands, getBrandBySlug, searchBrands } from "@/actions/brands";

// ============= Types =============

export interface ProductWithBrand {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  priceMin: any | null;
  priceMax: any | null;
  externalUrl: string;
  brandId: string | null;
  categoryId: string | null;
  createdAt: Date | null;
  brand?: {
    id: string;
    name: string;
    slug: string;
  } | null;
  category?: {
    id: string;
    name: string;
    slug: string;
    gender: string;
    parentId: string | null;
  } | null;
  tags?: string[];
}

export interface BrandRow {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  story: string | null;
  foundedYear: number | null;
  location: string | null;
  createdAt: Date | null;
}

// ============= Format helpers =============

export function formatPrice(min: any | null, max: any | null): string {
  if (!min && !max) return "";
  const minNum = min ? Number(min) : 0;
  const maxNum = max ? Number(max) : 0;
  const fmt = (n: number) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(n);
  if (minNum && maxNum && minNum !== maxNum) return `${fmt(minNum)} – ${fmt(maxNum)}`;
  return fmt(minNum || maxNum || 0);
}

// ============= Hooks =============

export function useFeaturedProducts(limit = 8) {
  return useQuery({
    queryKey: ["products", "featured", limit],
    queryFn: () => getFeaturedProducts(limit),
  });
}

export function useProductsByGenderCategory(
  gender?: string,
  categorySlug?: string,
  subcategorySlug?: string
) {
  return useQuery({
    queryKey: ["products", "filter", gender, categorySlug, subcategorySlug],
    queryFn: () => getProductsByGenderCategory(gender, categorySlug, subcategorySlug),
  });
}

export function useProductBySlug(slug: string | undefined) {
  return useQuery({
    queryKey: ["product", slug],
    enabled: !!slug,
    queryFn: () => getProductBySlug(slug!),
  });
}

export function useCompleteTheLook(product: ProductWithBrand | null | undefined) {
  return useQuery({
    queryKey: ["complete-the-look", product?.id],
    enabled: !!product?.category,
    queryFn: async () => {
      if (!product?.category) return [];
      const catSlug = product.category.slug;
      const recommendations: Record<string, string[]> = {
        "ready-to-wear": ["jewelry", "shoes", "bags", "scarves-and-ties"],
        jewelry: ["ready-to-wear", "bags", "shoes"],
        shoes: ["ready-to-wear", "bags", "jewelry"],
        bags: ["ready-to-wear", "jewelry", "shoes"],
        "scarves-and-ties": ["ready-to-wear", "jewelry"],
        belts: ["ready-to-wear", "shoes"],
        "hats-and-gloves": ["ready-to-wear", "shoes"],
      };
      const targetSlugs = recommendations[catSlug] || ["ready-to-wear", "jewelry"];

      // This is simplified - in production you'd create a server action for this
      const allProducts = await getFeaturedProducts(100);
      return allProducts
        .filter((p) => p.category && targetSlugs.includes(p.category.slug) && p.id !== product.id)
        .slice(0, 4);
    },
  });
}

export function useAllBrands() {
  return useQuery({
    queryKey: ["brands", "all"],
    queryFn: () => getAllBrands(),
  });
}

export function useBrandBySlug(slug: string | undefined) {
  return useQuery({
    queryKey: ["brand", slug],
    enabled: !!slug,
    queryFn: () => getBrandBySlug(slug!),
  });
}

export function useProductsByBrand(brandId: string | undefined) {
  return useQuery({
    queryKey: ["products", "brand", brandId],
    enabled: !!brandId,
    queryFn: () => getProductsByBrand(brandId!),
  });
}

export function useSearchProducts(query: string) {
  return useQuery({
    queryKey: ["search", "products", query],
    enabled: query.length > 0,
    queryFn: () => searchProducts(query),
  });
}

export function useSearchBrands(query: string) {
  return useQuery({
    queryKey: ["search", "brands", query],
    enabled: query.length > 0,
    queryFn: () => searchBrands(query),
  });
}
