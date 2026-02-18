"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const OurMission = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="mx-auto max-w-3xl px-6 py-16 lg:px-12 lg:py-24">
      <h1 className="font-display text-3xl sm:text-4xl text-foreground mb-8">Our Mission</h1>
      <div className="space-y-6 font-body text-base leading-relaxed text-muted-foreground">
        <p>
          Our mission is to elevate Indonesian fashion on the global stage by giving independent designers and heritage brands the visibility they deserve.
        </p>
        <h2 className="font-display text-xl text-foreground pt-4">What We Believe</h2>
        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong className="text-foreground">Craftsmanship matters.</strong> In a world of fast fashion, we champion brands that take the time to create with care — hand-dyeing fabrics, weaving textiles, and perfecting every detail.
          </li>
          <li>
            <strong className="text-foreground">Stories connect us.</strong> Behind every brand is a founder with a vision, a community of artisans, and a cultural heritage worth sharing.
          </li>
          <li>
            <strong className="text-foreground">Discovery should be delightful.</strong> We design our platform to feel like browsing a beautifully curated magazine, not a cluttered marketplace.
          </li>
          <li>
            <strong className="text-foreground">Direct connections work best.</strong> We believe in connecting you directly to the brands you love, without unnecessary intermediaries.
          </li>
        </ul>
        <h2 className="font-display text-xl text-foreground pt-4">Our Commitment</h2>
        <p>
          We are committed to featuring only brands that align with our values of quality, authenticity, and cultural preservation. Every brand on ELAYA Curated has been personally reviewed and selected by our editorial team.
        </p>
      </div>
    </main>
    <Footer />
  </div>
);

export default OurMission;
