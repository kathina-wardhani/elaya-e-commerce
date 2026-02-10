import { Instagram, Facebook, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-footer text-footer-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand + Newsletter */}
          <div>
            <h3 className="font-display text-xl italic mb-3">ELAYA Curated</h3>
            <p className="font-body text-sm leading-relaxed opacity-70 mb-6">
              Subscribe to discover new Indonesian brands and curated collections.
            </p>
            <input
              type="email"
              placeholder="Your email address"
              className="mb-3 w-full border border-footer-foreground/20 bg-transparent px-4 py-3 font-body text-sm text-footer-foreground placeholder:text-footer-foreground/40 outline-none"
            />
            <button className="w-full border border-footer-foreground/40 bg-transparent px-4 py-3 font-body text-xs font-medium tracking-widest text-footer-foreground transition-colors hover:bg-footer-foreground/10">
              SUBSCRIBE
            </button>
          </div>

          {/* Discover */}
          <div>
            <h4 className="font-body text-xs font-semibold tracking-widest mb-4 uppercase">Discover</h4>
            <div className="space-y-2 font-body text-sm opacity-70">
              <p className="cursor-pointer hover:opacity-100 transition-opacity">New Arrivals</p>
              <p className="cursor-pointer hover:opacity-100 transition-opacity">Women</p>
              <p className="cursor-pointer hover:opacity-100 transition-opacity">Men</p>
              <p className="cursor-pointer hover:opacity-100 transition-opacity">All Brands</p>
            </div>
          </div>

          {/* Information */}
          <div>
            <h4 className="font-body text-xs font-semibold tracking-widest mb-4 uppercase">Information</h4>
            <div className="space-y-2 font-body text-sm opacity-70">
              <p className="cursor-pointer hover:opacity-100 transition-opacity">Our Story</p>
              <p className="cursor-pointer hover:opacity-100 transition-opacity">Our Mission</p>
              <p className="cursor-pointer hover:opacity-100 transition-opacity">Terms of Service</p>
              <p className="cursor-pointer hover:opacity-100 transition-opacity">Privacy Policy</p>
            </div>
          </div>

          {/* Contact */}
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

      {/* Bottom bar */}
      <div className="border-t border-footer-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-4 text-xs font-body opacity-50 sm:flex-row lg:px-12">
          <p>COPYRIGHT © 2025 ELAYA CURATED. ALL RIGHTS RESERVED.</p>
          <p>Celebrating Indonesian craftsmanship and contemporary design</p>
        </div>
      </div>
    </footer>
  );
};
