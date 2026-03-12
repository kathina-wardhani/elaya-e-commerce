"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const Privacy = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="mx-auto max-w-3xl px-6 py-16 lg:px-12 lg:py-24">
      <h1 className="font-display text-3xl sm:text-4xl text-foreground mb-8">Privacy Policy</h1>
      <div className="space-y-6 font-body text-sm leading-relaxed text-muted-foreground">
        <p className="text-xs uppercase tracking-widest">Last updated: February 2026</p>

        <h2 className="font-display text-lg text-foreground pt-2">1. Information We Collect</h2>
        <p>ELAYA Curated collects minimal personal information. When you subscribe to our newsletter, we collect your email address. We may also collect anonymous analytics data to improve the platform experience.</p>

        <h2 className="font-display text-lg text-foreground pt-2">2. How We Use Your Information</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>To send you newsletter updates about new brands and collections</li>
          <li>To improve platform functionality and user experience</li>
          <li>To track outbound clicks for editorial analytics (anonymized)</li>
        </ul>

        <h2 className="font-display text-lg text-foreground pt-2">3. What We Don't Do</h2>
        <p>We do not sell, rent, or share your personal information with third parties for marketing purposes. We do not process payments or store financial information.</p>

        <h2 className="font-display text-lg text-foreground pt-2">4. Third-Party Links</h2>
        <p>When you click on outbound links to purchase products, you will be directed to third-party websites with their own privacy policies. We encourage you to review their policies before making a purchase.</p>

        <h2 className="font-display text-lg text-foreground pt-2">5. Cookies</h2>
        <p>We use essential cookies to ensure the platform functions correctly. We may use analytics cookies to understand how visitors interact with the platform. You can disable cookies in your browser settings.</p>

        <h2 className="font-display text-lg text-foreground pt-2">6. Data Retention</h2>
        <p>Newsletter subscriber data is retained until you unsubscribe. Analytics data is retained in anonymized form.</p>

        <h2 className="font-display text-lg text-foreground pt-2">7. Your Rights</h2>
        <p>You have the right to access, correct, or delete your personal data at any time by contacting us at hello@elayacurated.com.</p>

        <h2 className="font-display text-lg text-foreground pt-2">8. Contact</h2>
        <p>For privacy-related inquiries, please reach out to hello@elayacurated.com.</p>
      </div>
    </main>
    <Footer />
  </div>
);

export default Privacy;
