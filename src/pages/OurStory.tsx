import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const OurStory = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="mx-auto max-w-3xl px-6 py-16 lg:px-12 lg:py-24">
      <h1 className="font-display text-3xl sm:text-4xl text-foreground mb-8">Our Story</h1>
      <div className="space-y-6 font-body text-base leading-relaxed text-muted-foreground">
        <p>
          ELAYA Curated was born from a simple observation: Indonesia is home to some of the most talented fashion designers and artisans in the world, yet their work often remains unseen beyond the archipelago.
        </p>
        <p>
          We set out to change that. ELAYA Curated is a discovery platform dedicated to surfacing the best of Indonesian fashion — from heritage batik houses to contemporary minimalist labels, from Balinese jewelry ateliers to Jakarta streetwear studios.
        </p>
        <p>
          Our name, "ELAYA," is inspired by the Indonesian word for beauty — a nod to the beauty we see in every hand-woven textile, every carefully stitched seam, and every designer's vision brought to life.
        </p>
        <p>
          We don't sell products. We curate stories. Every brand on our platform has been personally selected for its craftsmanship, design philosophy, and commitment to preserving Indonesian textile heritage while pushing fashion forward.
        </p>
        <p>
          When you find something you love, we connect you directly with the brand or their official retail partners. No middlemen, no markups — just a direct bridge between you and the creators.
        </p>
      </div>
    </main>
    <Footer />
  </div>
);

export default OurStory;
