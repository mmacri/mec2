import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import PageTransition from "@/components/PageTransition";

const ContactPage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-8">
          <Contact />
        </div>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default ContactPage;
