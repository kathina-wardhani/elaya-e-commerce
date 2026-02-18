import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Example API route using Prisma
// Access at: /api/products

export async function GET() {
  try {
    const products = await prisma.products.findMany({
      include: {
        brands: true,
        categories: true,
      },
      take: 10,
    });

    return NextResponse.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
  }
}
