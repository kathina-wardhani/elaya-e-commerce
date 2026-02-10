import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import editorialParty from "@/assets/editorial-party.jpg";
import editorialCasual from "@/assets/editorial-casual.jpg";
import editorialOffice from "@/assets/editorial-office.jpg";
import editorialGala from "@/assets/editorial-gala.jpg";

const collections = [
  { id: "1", tag: "NEW YEAR PARTY", title: "Sparkle & Shine", cta: "Party Szn Incoming", image: editorialParty, slug: "sparkle-and-shine" },
  { id: "2", tag: "HANG OUT", title: "Keep It Chill", cta: "Weekend Vibes", image: editorialCasual, slug: "keep-it-chill" },
  { id: "3", tag: "OFFICE ATTIRE", title: "Power Dressing", cta: "Boss Mode On", image: editorialOffice, slug: "power-dressing" },
  { id: "4", tag: "GALA", title: "Make an Entrance", cta: "Red Carpet Ready", image: editorialGala, slug: "make-an-entrance" },
];

export const EditorialCollections = () => {
  return (
    <section className="px-6 pb-16 lg:px-12 lg:pb-24">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {collections.map((col) => (
          <Link
            key={col.id}
            to={`/collection/${col.slug}`}
            className="group relative aspect-[3/4] overflow-hidden"
          >
            <img
              src={col.image}
              alt={col.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

            <div className="absolute bottom-0 left-0 p-6 sm:p-8">
              <p className="font-body text-[10px] tracking-[0.2em] text-primary-foreground/70 mb-1">
                {col.tag}
              </p>
              <h3 className="font-display text-xl italic font-medium text-primary-foreground sm:text-2xl mb-4">
                {col.title}
              </h3>
              <span className="inline-flex items-center gap-2 bg-background px-5 py-3 font-body text-xs font-medium tracking-wider text-foreground transition-colors group-hover:bg-secondary">
                {col.cta}
                <ArrowRight className="h-3 w-3" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
