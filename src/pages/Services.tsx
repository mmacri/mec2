import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import EngagementModels from "@/components/EngagementModels";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-8">
        <Services />
        <EngagementModels />
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;
