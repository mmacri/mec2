import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Expertise from "@/components/Expertise";
import PageTransition from "@/components/PageTransition";

const ExpertisePage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-8">
          <Expertise />
        </div>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default ExpertisePage;
