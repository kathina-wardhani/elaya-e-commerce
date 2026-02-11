import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const Terms = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="mx-auto max-w-3xl px-6 py-16 lg:px-12 lg:py-24">
      <h1 className="font-display text-3xl sm:text-4xl text-foreground mb-8">Terms of Service</h1>
      <div className="space-y-6 font-body text-sm leading-relaxed text-muted-foreground">
        <p className="text-xs uppercase tracking-widest">Last updated: February 2026</p>

        <h2 className="font-display text-lg text-foreground pt-2">1. About ELAYA Curated</h2>
        <p>ELAYA Curated is a curated discovery platform for Indonesian fashion brands. We do not sell products, process payments, or fulfill orders. All transactions occur on third-party websites operated by the respective brands or their authorized retailers.</p>

        <h2 className="font-display text-lg text-foreground pt-2">2. Use of the Platform</h2>
        <p>By accessing ELAYA Curated, you agree to use the platform for personal, non-commercial purposes. You may browse brands, read editorial content, and follow outbound links to purchase products from third-party stores.</p>

        <h2 className="font-display text-lg text-foreground pt-2">3. Outbound Links</h2>
        <p>Our platform contains links to external websites. ELAYA Curated is not responsible for the content, privacy practices, or terms of service of third-party websites. Any purchases you make are governed by the terms of the respective retailer.</p>

        <h2 className="font-display text-lg text-foreground pt-2">4. Intellectual Property</h2>
        <p>All content on ELAYA Curated — including text, images, logos, and design — is the property of ELAYA Curated or its content partners. You may not reproduce, distribute, or use any content without prior written permission.</p>

        <h2 className="font-display text-lg text-foreground pt-2">5. Newsletter</h2>
        <p>By subscribing to our newsletter, you consent to receiving periodic emails about new brands, collections, and editorial features. You may unsubscribe at any time.</p>

        <h2 className="font-display text-lg text-foreground pt-2">6. Changes to Terms</h2>
        <p>We reserve the right to update these terms at any time. Continued use of the platform constitutes acceptance of any changes.</p>

        <h2 className="font-display text-lg text-foreground pt-2">7. Contact</h2>
        <p>For questions about these terms, please contact us at hello@elayacurated.com.</p>
      </div>
    </main>
    <Footer />
  </div>
);

export default Terms;
