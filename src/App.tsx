import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ProductDetail from "./pages/ProductDetail";
import BrandDetail from "./pages/BrandDetail";
import BrandsListing from "./pages/BrandsListing";
import GenderListing from "./pages/GenderListing";
import SearchPage from "./pages/SearchPage";
import CollectionPage from "./pages/CollectionPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* Product */}
          <Route path="/product/:slug" element={<ProductDetail />} />
          <Route path="/products/:slug" element={<ProductDetail />} />
          {/* Brands */}
          <Route path="/brands" element={<BrandsListing />} />
          <Route path="/brand/:slug" element={<BrandDetail />} />
          <Route path="/brands/:slug" element={<BrandDetail />} />
          {/* Gender / Category / Subcategory */}
          <Route path="/women" element={<GenderListing />} />
          <Route path="/women/:category" element={<GenderListing />} />
          <Route path="/women/:category/:subcategory" element={<GenderListing />} />
          <Route path="/men" element={<GenderListing />} />
          <Route path="/men/:category" element={<GenderListing />} />
          <Route path="/men/:category/:subcategory" element={<GenderListing />} />
          {/* Search */}
          <Route path="/search" element={<SearchPage />} />
          {/* Collections */}
          <Route path="/collection/:slug" element={<CollectionPage />} />
          {/* Legacy routes */}
          <Route path="/category/:slug" element={<GenderListing />} />
          <Route path="/category/:gender/:slug" element={<GenderListing />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
