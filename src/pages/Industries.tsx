import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Industries from "@/components/Industries";
import PageTransition from "@/components/PageTransition";

const IndustriesPage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
        <Header />
        <div className="pt-8">
          <Industries />
        </div>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default IndustriesPage;
