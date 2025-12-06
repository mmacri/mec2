import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import EngagementModels from "@/components/EngagementModels";
import PageTransition from "@/components/PageTransition";

const ServicesPage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
        <Header />
        <div className="pt-8">
          <Services />
          <EngagementModels />
        </div>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default ServicesPage;
