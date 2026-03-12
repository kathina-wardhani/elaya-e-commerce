import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/Providers";

export const metadata: Metadata = {
  title: "ELAYA Curated — Discover Indonesian Fashion",
  description:
    "Curated discovery platform for Indonesia's finest fashion brands. Explore editorial collections, designer stories, and timeless style.",
  authors: [{ name: "ELAYA Curated" }],
  openGraph: {
    title: "ELAYA Curated — Discover Indonesian Fashion",
    description: "Curated discovery platform for Indonesia's finest fashion brands.",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
