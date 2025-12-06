import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyHireUs from "@/components/WhyHireUs";
import WhatWeDo from "@/components/WhatWeDo";
import WhoWeServe from "@/components/WhoWeServe";
import HowWeWork from "@/components/HowWeWork";
import HomeCTA from "@/components/HomeCTA";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { ErrorBoundary } from "react-error-boundary";

const PageErrorFallback = ({ error }: { error: Error }) => {
  console.error("Index page error:", error);
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Page Error</h1>
        <p className="text-gray-600">Please refresh the page</p>
      </div>
    </div>
  );
};

const Index = () => {
  return (
    <ErrorBoundary FallbackComponent={PageErrorFallback}>
      <PageTransition>
        <div className="min-h-screen bg-background">
          <Header />
          <Hero />
          <WhyHireUs />
          <WhatWeDo />
          <WhoWeServe />
          <HowWeWork />
          <HomeCTA />
          <Footer />
        </div>
      </PageTransition>
    </ErrorBoundary>
  );
};

export default Index;
