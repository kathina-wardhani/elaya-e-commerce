import { useState } from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail } from "lucide-react";
import { subscribeEmail } from "@/hooks/use-supabase-data";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribeStatus, setSubscribeStatus] = useState<"idle" | "success" | "duplicate" | "error" | "invalid">("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setSubscribeStatus("invalid");
      return;
    }
    setIsSubmitting(true);
    const result = await subscribeEmail(trimmed);
    setSubscribeStatus(result);
    if (result === "success") setEmail("");
    setIsSubmitting(false);
  };

  return (
    <footer className="bg-footer text-footer-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-display text-xl italic mb-3">ELAYA Curated</h3>
            <p className="font-body text-sm leading-relaxed opacity-70 mb-6">
              Subscribe to discover new Indonesian brands and curated collections.
            </p>
            <form onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setSubscribeStatus("idle"); }}
                className="mb-3 w-full border border-footer-foreground/20 bg-transparent px-4 py-3 font-body text-sm text-footer-foreground placeholder:text-footer-foreground/40 outline-none"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full border border-footer-foreground/40 bg-transparent px-4 py-3 font-body text-xs font-medium tracking-widest text-footer-foreground transition-colors hover:bg-footer-foreground/10 disabled:opacity-50"
              >
                {isSubmitting ? "SUBSCRIBING..." : "SUBSCRIBE"}
              </button>
            </form>
            {subscribeStatus === "success" && (
              <p className="mt-2 font-body text-xs text-accent-foreground">Thank you for subscribing!</p>
            )}
            {subscribeStatus === "duplicate" && (
              <p className="mt-2 font-body text-xs text-muted-foreground">You're already subscribed.</p>
            )}
            {subscribeStatus === "invalid" && (
              <p className="mt-2 font-body text-xs text-destructive">Please enter a valid email address.</p>
            )}
            {subscribeStatus === "error" && (
              <p className="mt-2 font-body text-xs text-destructive">Something went wrong. Please try again.</p>
            )}
          </div>

          <div>
            <h4 className="font-body text-xs font-semibold tracking-widest mb-4 uppercase">Discover</h4>
            <div className="space-y-2 font-body text-sm opacity-70">
              <Link to="/women" className="block hover:opacity-100 transition-opacity">Women</Link>
              <Link to="/men" className="block hover:opacity-100 transition-opacity">Men</Link>
              <Link to="/brands" className="block hover:opacity-100 transition-opacity">All Brands</Link>
            </div>
          </div>

          <div>
            <h4 className="font-body text-xs font-semibold tracking-widest mb-4 uppercase">Information</h4>
            <div className="space-y-2 font-body text-sm opacity-70">
              <Link to="/our-story" className="block hover:opacity-100 transition-opacity">Our Story</Link>
              <Link to="/our-mission" className="block hover:opacity-100 transition-opacity">Our Mission</Link>
              <Link to="/terms" className="block hover:opacity-100 transition-opacity">Terms of Service</Link>
              <Link to="/privacy" className="block hover:opacity-100 transition-opacity">Privacy Policy</Link>
            </div>
          </div>

          <div>
            <h4 className="font-body text-xs font-semibold tracking-widest mb-4 uppercase">Get in Touch</h4>
            <div className="space-y-2 font-body text-sm opacity-70 mb-6">
              <p>hello@elayacurated.com</p>
            </div>
            <div className="flex gap-3">
              <div className="flex h-9 w-9 items-center justify-center border border-footer-foreground/30 transition-colors hover:bg-footer-foreground/10 cursor-pointer">
                <Instagram className="h-4 w-4" />
              </div>
              <div className="flex h-9 w-9 items-center justify-center border border-footer-foreground/30 transition-colors hover:bg-footer-foreground/10 cursor-pointer">
                <Facebook className="h-4 w-4" />
              </div>
              <div className="flex h-9 w-9 items-center justify-center border border-footer-foreground/30 transition-colors hover:bg-footer-foreground/10 cursor-pointer">
                <Mail className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-footer-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-4 text-xs font-body opacity-50 sm:flex-row lg:px-12">
          <p>COPYRIGHT © 2025 ELAYA CURATED. ALL RIGHTS RESERVED.</p>
          <p>Celebrating Indonesian craftsmanship and contemporary design</p>
        </div>
      </div>
    </footer>
  );
};
