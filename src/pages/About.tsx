import Header from "@/components/Header";
import Footer from "@/components/Footer";
import About from "@/components/About";
import PageTransition from "@/components/PageTransition";

const AboutPage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
        <Header />
        <div className="pt-8">
          <About />
        </div>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default AboutPage;
