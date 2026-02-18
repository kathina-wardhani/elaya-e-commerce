"use server";

import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export async function subscribeToNewsletter(
  email: string
): Promise<"success" | "duplicate" | "error"> {
  try {
    await prisma.subscriber.create({
      data: { email },
    });
    return "success";
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        return "duplicate"; // Unique constraint violation
      }
    }
    console.error("Newsletter subscription error:", error);
    return "error";
  }
}
