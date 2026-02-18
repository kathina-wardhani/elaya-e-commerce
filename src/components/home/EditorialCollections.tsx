"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useAllCollections } from "@/hooks/use-supabase-data";

export const EditorialCollections = () => {
  const { data: collections = [], isLoading, error } = useAllCollections();
  return (
    <section className="px-6 pb-16 lg:px-12 lg:pb-24">
      {isLoading && <div className="text-center py-16">Loading collections...</div>}
      {error && <div className="text-center py-16 text-red-500">Failed to load collections</div>}
      {!isLoading && !error && (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {collections.map((col) => (
            <Link
              key={col.id}
              href={`/collection/${col.slug}`}
              className="group relative aspect-[3/4] overflow-hidden"
            >
              <img
                src={col.image || "/placeholder.jpg"}
                alt={col.name}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 p-6 sm:p-8">
                <p className="font-body text-[10px] tracking-[0.2em] text-primary-foreground/70 mb-1">
                  {col.tag}
                </p>
                <h3 className="font-display text-xl italic font-medium text-primary-foreground sm:text-2xl mb-4">
                  {col.name}
                </h3>
                <span className="inline-flex items-center gap-2 bg-background px-5 py-3 font-body text-xs font-medium tracking-wider text-foreground transition-colors group-hover:bg-secondary">
                  {col.button_text}
                  <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
};
