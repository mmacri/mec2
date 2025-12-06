import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroPrimary from "@/components/marketing/HeroPrimary";
import WhoWeHelpSection from "@/components/marketing/WhoWeHelpSection";
import ServiceCardGrid from "@/components/marketing/ServiceCardGrid";
import PersonaRoutingSection from "@/components/marketing/PersonaRoutingSection";
import CaseSnippetGrid from "@/components/marketing/CaseSnippetGrid";
import ApproachTimeline from "@/components/marketing/ApproachTimeline";
import PrimaryCTASection from "@/components/marketing/PrimaryCTASection";
import SectionWrapper from "@/components/ui/SectionWrapper";
import PageTransition from "@/components/PageTransition";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <PageTransition>
      <SEO 
        title="Governance & Compliance Consulting"
        description="Momentum Edge Consulting helps doctor's offices, utilities, and compliance-driven organizations put structure around policies, workflows, controls, and responsibilities."
        canonical="/"
      />
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero */}
        <HeroPrimary />

        {/* Who We Help */}
        <SectionWrapper variant="default">
          <div className="text-center mb-16">
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Who We Help
            </motion.h2>
            <motion.p 
              className="section-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Specialized support for regulated industries
            </motion.p>
          </div>

          <WhoWeHelpSection />
        </SectionWrapper>

        {/* Services Overview */}
        <SectionWrapper variant="soft-teal">
          <div className="text-center mb-16">
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              What We Do
            </motion.h2>
            <motion.p 
              className="section-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Comprehensive governance services designed for real-world operations
            </motion.p>
          </div>

          <ServiceCardGrid />
        </SectionWrapper>

        {/* Persona Routing */}
        <SectionWrapper variant="default">
          <PersonaRoutingSection />
        </SectionWrapper>

        {/* Case Studies */}
        <SectionWrapper variant="soft-blue">
          <div className="text-center mb-16">
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Real Results
            </motion.h2>
            <motion.p 
              className="section-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              See how we've helped organizations like yours
            </motion.p>
          </div>

          <CaseSnippetGrid />
        </SectionWrapper>

        {/* How We Work */}
        <SectionWrapper variant="default">
          <div className="text-center mb-16">
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              How We Work
            </motion.h2>
            <motion.p 
              className="section-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              A practical, structured approach to governance transformation
            </motion.p>
          </div>

          <ApproachTimeline />
        </SectionWrapper>

        {/* Final CTA */}
        <PrimaryCTASection />

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;
