import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSlider } from "@/components/home/HeroSlider";
import { ShopByCategory } from "@/components/home/ShopByCategory";
import { EditorialCollections } from "@/components/home/EditorialCollections";
import { CategorySection } from "@/components/home/CategorySection";
import { BrandStories } from "@/components/home/BrandStories";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSlider />
        <ShopByCategory />
        <EditorialCollections />
        <CategorySection title="Tops" slug="tops" />
        <CategorySection title="Bottoms" slug="bottoms" />
        <BrandStories />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
