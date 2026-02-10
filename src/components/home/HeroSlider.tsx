import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";

const slides = [
  {
    id: "1",
    title: "End of Year Collection",
    subtitle: "Discover handcrafted pieces from Indonesia's finest designers",
    cta: "EXPLORE NOW",
    image: hero1,
    link: "/category/new",
  },
  {
    id: "2",
    title: "Fashion Week Highlights",
    subtitle: "Behind the scenes of our latest collection",
    cta: "EXPLORE NOW",
    image: hero2,
    link: "/category/featured",
  },
];

export const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative w-full overflow-hidden" style={{ height: "85vh" }}>
      {slides.map((s, i) => (
        <div
          key={s.id}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <img src={s.image} alt={s.title} className="h-full w-full object-cover" />
          <div className="absolute inset-0" style={{ background: "hsla(var(--hero-overlay))" }} />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-16 lg:px-20">
        <h1 className="font-display text-4xl italic font-medium text-primary-foreground sm:text-5xl lg:text-6xl mb-2 max-w-2xl">
          {slide.title}
        </h1>
        <p className="font-body text-sm text-primary-foreground/80 mb-8 max-w-md">
          {slide.subtitle}
        </p>

        <div className="flex items-end justify-between">
          {/* Dots */}
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  i === current ? "w-12 bg-primary-foreground" : "w-3 bg-primary-foreground/40"
                }`}
              />
            ))}
          </div>

          {/* CTA */}
          <Link
            to={slide.link}
            className="hidden sm:flex items-center gap-2 bg-background px-8 py-4 font-body text-xs font-medium tracking-widest text-foreground transition-colors hover:bg-secondary"
          >
            {slide.cta}
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
