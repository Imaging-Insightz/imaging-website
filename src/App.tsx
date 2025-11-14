import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import LiverInsightz from "./pages/products/LiverInsightz";
import KidneyInsightz from "./pages/products/KidneyInsightz";
import RadioGenomics from "./pages/products/RadioGenomics";
import Events from "./pages/Events";
import Careers from "./pages/Careers";
import RequestDemo from "./pages/RequestDemo";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/liver" element={<LiverInsightz />} />
          <Route path="/products/kidney" element={<KidneyInsightz />} />
          <Route path="/products/radiogenomics" element={<RadioGenomics />} />
          <Route path="/events" element={<Events />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/demo" element={<RequestDemo />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
