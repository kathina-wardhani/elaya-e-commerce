import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ProductDetail from "./pages/ProductDetail";
import BrandDetail from "./pages/BrandDetail";
import CategoryListing from "./pages/CategoryListing";
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
          <Route path="/product/:slug" element={<ProductDetail />} />
          <Route path="/products/:slug" element={<ProductDetail />} />
          <Route path="/brand/:slug" element={<BrandDetail />} />
          <Route path="/brands/:slug" element={<BrandDetail />} />
          <Route path="/category/:slug" element={<CategoryListing />} />
          <Route path="/category/:gender/:slug" element={<CategoryListing />} />
          <Route path="/categories/:slug" element={<CategoryListing />} />
          <Route path="/collection/:slug" element={<CollectionPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
