import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ErrorBoundary } from "react-error-boundary";
import Index from "./pages/Index";
import ServicesPage from "./pages/Services";
import IndustriesPage from "./pages/Industries";
import ApproachPage from "./pages/Approach";
import AboutPage from "./pages/About";
import ResourcesPage from "./pages/Resources";
import ContactPage from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => {
  console.error("Application error:", error);
  return (
    <div className="min-h-screen bg-brand-soft-blue flex items-center justify-center p-6">
      <div className="text-center max-w-md">
        <h1 className="text-2xl font-bold text-brand-navy mb-4">Something went wrong</h1>
        <p className="text-neutral-700 mb-6">{error.message}</p>
        <button
          onClick={resetErrorBoundary}
          className="cta-primary"
        >
          Try again
        </button>
      </div>
    </div>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/approach" element={<ApproachPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  const isGitHubPages = window.location.hostname === 'mmacri.github.io';
  const basename = isGitHubPages ? "/mec2" : undefined;
  
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onError={(error) => console.error("Error boundary caught:", error)}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter basename={basename}>
            <AnimatedRoutes />
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default App;
