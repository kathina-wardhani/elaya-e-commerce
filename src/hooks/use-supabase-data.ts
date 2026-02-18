"use client";

import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

// ============= Types =============

export interface ProductWithBrand {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  price_min: number | null;
  price_max: number | null;
  external_url: string;
  images?: string[] | null;
  main_image?: string | null;
  gender?: string | null;
  material?: string | null;
  size_range?: string | null;
  is_featured?: boolean | null;
  updated_at?: string | null;
  brand_id: string | null;
  category_id: string | null;
  created_at: string | null;
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
    parent_id: string | null;
  } | null;
  tags?: string[];
}

export interface BrandRow {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  story: string | null;
  founded_year: number | null;
  location: string | null;
  main_image: string | null;
  created_at: string | null;
}

export interface CategoryRow {
  id: string;
  name: string;
  slug: string;
  gender: string;
  parent_id: string | null;
  created_at: string | null;
}

export interface CategoryTreeItem {
  id: string;
  name: string;
  slug: string;
  subcategories: { id: string; name: string; slug: string }[];
}

export interface CollectionRow {
  id: string;
  name: string;
  slug: string;
  tag: string | null;
  description: string | null;
  image: string | null;
  button_text: string | null;
  created_at: string | null;
}

// ============= Format helpers =============

export function formatPrice(min: number | null, max: number | null): string {
  if (!min && !max) return "";
  const fmt = (n: number) =>
    new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(n);
  if (min && max && min !== max) return `${fmt(min)} – ${fmt(max)}`;
  return fmt(min || max || 0);
}

// ============= Hooks =============

export function useFeaturedProducts(limit = 8, onlyFeatured = false) {
  return useQuery({
    queryKey: ["products", "featured", limit, onlyFeatured],
    queryFn: async () => {
      let query = supabase
        .from("products")
        .select("*, brands!products_brand_id_fkey(id, name, slug), categories!products_category_id_fkey(id, name, slug, gender, parent_id)")
        .order("created_at", { ascending: false });
      if (onlyFeatured) {
        query = query.eq("is_featured", true);
      }
      const { data, error } = await query.limit(limit);
      if (error) throw error;
      return (data || []).map((p: any) => ({
        ...p,
        brand: p.brands,
        category: p.categories,
      })) as ProductWithBrand[];
    },
  });
}

export function useProductsByGenderCategory(
  gender?: string,
  categorySlug?: string,
  subcategorySlug?: string
) {
  return useQuery({
    queryKey: ["products", "filter", gender, categorySlug, subcategorySlug],
    queryFn: async () => {
      // Step 1: Find category IDs to filter by
      let categoryIds: string[] = [];

      if (subcategorySlug && categorySlug && gender) {
        // Find the exact subcategory
        const { data: subCat } = await supabase
          .from("categories")
          .select("id")
          .eq("slug", subcategorySlug)
          .eq("gender", gender)
          .limit(1);
        if (subCat && subCat.length > 0) {
          categoryIds = [subCat[0].id];
        }
      } else if (categorySlug && gender) {
        // Find the parent category and all its children
        const { data: parentCat } = await supabase
          .from("categories")
          .select("id")
          .eq("slug", categorySlug)
          .eq("gender", gender)
          .is("parent_id", null)
          .limit(1);

        if (parentCat && parentCat.length > 0) {
          const parentId = parentCat[0].id;
          // Get children too
          const { data: children } = await supabase
            .from("categories")
            .select("id")
            .eq("parent_id", parentId);
          categoryIds = [parentId, ...(children || []).map((c) => c.id)];
        } else {
          // Maybe it IS a child category directly
          const { data: directCat } = await supabase
            .from("categories")
            .select("id")
            .eq("slug", categorySlug)
            .eq("gender", gender)
            .limit(1);
          if (directCat && directCat.length > 0) {
            categoryIds = [directCat[0].id];
          }
        }
      } else if (gender) {
        // Get ALL categories for this gender
        const { data: genderCats } = await supabase
          .from("categories")
          .select("id")
          .eq("gender", gender);
        if (genderCats) {
          categoryIds = genderCats.map((c) => c.id);
        }
      }

      // Step 2: Fetch products
      let query = supabase
        .from("products")
        .select("*, brands!products_brand_id_fkey(id, name, slug), categories!products_category_id_fkey(id, name, slug, gender, parent_id)")
        .order("created_at", { ascending: false });

      if (categoryIds.length > 0) {
        query = query.in("category_id", categoryIds);
      }

      const { data, error } = await query;
      if (error) throw error;
      return (data || []).map((p: any) => ({
        ...p,
        brand: p.brands,
        category: p.categories,
      })) as ProductWithBrand[];
    },
  });
}

export function useProductsByCategory(slug: string | undefined) {
  return useQuery({
    queryKey: ["products", "category", slug],
    enabled: !!slug,
    queryFn: async () => {
      // Find all categories with this slug (both men and women)
      const { data: cats } = await supabase
        .from("categories")
        .select("id")
        .eq("slug", slug!);

      if (!cats || cats.length === 0) return [];

      const categoryIds = cats.map((c) => c.id);

      // Fetch products from all categories with this slug
      const { data, error } = await supabase
        .from("products")
        .select("*, brands!products_brand_id_fkey(id, name, slug), categories!products_category_id_fkey(id, name, slug, gender, parent_id)")
        .in("category_id", categoryIds)
        .order("created_at", { ascending: false });

      if (error) throw error;
      return (data || []).map((p: any) => ({
        ...p,
        brand: p.brands,
        category: p.categories,
      })) as ProductWithBrand[];
    },
  });
}

export function useCategoryTree(gender?: string) {
  return useQuery({
    queryKey: ["categories", "tree", gender],
    enabled: !!gender,
    queryFn: async () => {
      const { data, error } = await supabase
        .from("categories")
        .select("*")
        .eq("gender", gender!)
        .order("name", { ascending: true });
      if (error) throw error;
      const rows = (data || []) as CategoryRow[];
      const byParent: Record<string, CategoryRow[]> = {};
      rows.forEach((row) => {
        const key = row.parent_id || "root";
        if (!byParent[key]) byParent[key] = [];
        byParent[key]!.push(row);
      });
      const top = byParent["root"] || [];
      return top.map((parent) => ({
        id: parent.id,
        name: parent.name,
        slug: parent.slug,
        subcategories: (byParent[parent.id] || []).map((child) => ({
          id: child.id,
          name: child.name,
          slug: child.slug,
        })),
      })) as CategoryTreeItem[];
    },
  });
}

export function useAllCategories() {
  return useQuery({
    queryKey: ["categories", "all"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("categories")
        .select("*")
        .order("name", { ascending: true });
      if (error) throw error;
      return (data || []) as CategoryRow[];
    },
  });
}

export function useProductBySlug(slug: string | undefined) {
  return useQuery({
    queryKey: ["product", slug],
    enabled: !!slug,
    queryFn: async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*, brands!products_brand_id_fkey(id, name, slug), categories!products_category_id_fkey(id, name, slug, gender, parent_id)")
        .eq("slug", slug!)
        .maybeSingle();
      if (error) throw error;
      if (!data) return null;
      // Fetch tags
      const { data: tagMap } = await supabase
        .from("product_tag_map")
        .select("tag_id, product_tags(name)")
        .eq("product_id", data.id);
      const tags = (tagMap || []).map((t: any) => t.product_tags?.name).filter(Boolean);
      return {
        ...data,
        brand: (data as any).brands,
        category: (data as any).categories,
        tags,
      } as ProductWithBrand;
    },
  });
}

export function useCompleteTheLook(product: ProductWithBrand | null | undefined) {
  return useQuery({
    queryKey: ["complete-the-look", product?.id],
    enabled: !!product,
    queryFn: async () => {
      if (!product?.category) return [];
      const catSlug = product.category.slug;
      // Map category to complementary categories
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
      // Find category IDs for target slugs
      const { data: targetCats } = await supabase
        .from("categories")
        .select("id")
        .in("slug", targetSlugs);
      if (!targetCats || targetCats.length === 0) return [];
      const ids = targetCats.map((c) => c.id);
      const { data, error } = await supabase
        .from("products")
        .select("*, brands!products_brand_id_fkey(id, name, slug), categories!products_category_id_fkey(id, name, slug, gender, parent_id)")
        .in("category_id", ids)
        .neq("id", product.id)
        .limit(4);
      if (error) throw error;
      return (data || []).map((p: any) => ({
        ...p,
        brand: p.brands,
        category: p.categories,
      })) as ProductWithBrand[];
    },
  });
}

export function useAllBrands() {
  return useQuery({
    queryKey: ["brands", "all"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("brands")
        .select("*")
        .order("name", { ascending: true });
      if (error) throw error;
      return (data || []) as BrandRow[];
    },
  });
}

export function useAllCollections() {
  return useQuery({
    queryKey: ["collections", "all"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("collections")
        .select("*")
        .order("created_at", { ascending: true });
      if (error) throw error;
      return (data || []) as CollectionRow[];
    },
  });
}

export function useCollectionBySlug(slug: string | undefined) {
  return useQuery({
    queryKey: ["collections", slug],
    enabled: !!slug,
    queryFn: async () => {
      const { data, error } = await supabase
        .from("collections")
        .select("*")
        .eq("slug", slug!)
        .maybeSingle();
      if (error) throw error;
      return data as CollectionRow | null;
    },
  });
}

export function useProductsByCollection(collectionId: string | undefined) {
  return useQuery({
    queryKey: ["collections", collectionId, "products"],
    enabled: !!collectionId,
    queryFn: async () => {
      if (!collectionId) return [];
      const { data, error } = await supabase
        .from("collection_product_map")
        .select(
          "product_id, products:products(*, brands!products_brand_id_fkey(id, name, slug), categories!products_category_id_fkey(id, name, slug, gender, parent_id))"
        )
        .eq("collection_id", collectionId);
      if (error) throw error;
      return (data || []).map((row: any) => ({
        ...row.products,
        brand: row.products?.brands,
        category: row.products?.categories,
      })) as ProductWithBrand[];
    },
  });
}

export function useBrandBySlug(slug: string | undefined) {
  return useQuery({
    queryKey: ["brand", slug],
    enabled: !!slug,
    queryFn: async () => {
      const { data, error } = await supabase
        .from("brands")
        .select("*")
        .eq("slug", slug!)
        .maybeSingle();
      if (error) throw error;
      return data as BrandRow | null;
    },
  });
}

export function useProductsByBrand(brandId: string | undefined) {
  return useQuery({
    queryKey: ["products", "brand", brandId],
    enabled: !!brandId,
    queryFn: async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*, brands!products_brand_id_fkey(id, name, slug), categories!products_category_id_fkey(id, name, slug, gender, parent_id)")
        .eq("brand_id", brandId!)
        .order("created_at", { ascending: false });
      if (error) throw error;
      return (data || []).map((p: any) => ({
        ...p,
        brand: p.brands,
        category: p.categories,
      })) as ProductWithBrand[];
    },
  });
}

export function useSearchProducts(query: string) {
  return useQuery({
    queryKey: ["search", "products", query],
    enabled: query.length > 0,
    queryFn: async () => {
      const q = `%${query}%`;
      const { data, error } = await supabase
        .from("products")
        .select("*, brands!products_brand_id_fkey(id, name, slug), categories!products_category_id_fkey(id, name, slug, gender, parent_id)")
        .or(`name.ilike.${q},description.ilike.${q}`);
      if (error) throw error;
      return (data || []).map((p: any) => ({
        ...p,
        brand: p.brands,
        category: p.categories,
      })) as ProductWithBrand[];
    },
  });
}

export function useSearchBrands(query: string) {
  return useQuery({
    queryKey: ["search", "brands", query],
    enabled: query.length > 0,
    queryFn: async () => {
      const q = `%${query}%`;
      const { data, error } = await supabase
        .from("brands")
        .select("*")
        .ilike("name", q);
      if (error) throw error;
      return (data || []) as BrandRow[];
    },
  });
}

export function useCategories(gender?: string) {
  return useQuery({
    queryKey: ["categories", gender],
    queryFn: async () => {
      let query = supabase.from("categories").select("*").order("name");
      if (gender) query = query.eq("gender", gender);
      const { data, error } = await query;
      if (error) throw error;
      return (data || []) as CategoryRow[];
    },
  });
}

export async function subscribeEmail(email: string): Promise<"success" | "duplicate" | "error"> {
  const { error } = await supabase.from("subscribers").insert([{ email }]);
  if (error) {
    if (error.code === "23505") return "duplicate"; // unique violation
    console.error("Subscribe error:", error);
    return "error";
  }
  return "success";
}
