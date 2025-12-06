import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ResourceCard from "@/components/marketing/ResourceCard";
import NewsletterSignupStrip from "@/components/marketing/NewsletterSignupStrip";
import PrimaryCTASection from "@/components/marketing/PrimaryCTASection";
import SectionWrapper from "@/components/ui/SectionWrapper";
import PageTransition from "@/components/PageTransition";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";

const resources = [
  {
    title: "Checklist: Workflow consistency for medical practices",
    description: "A practical guide to identifying and addressing workflow inconsistencies in healthcare settings.",
    category: "Healthcare",
    type: "Checklist"
  },
  {
    title: "Control ownership quick-start for utilities",
    description: "A foundational guide for establishing clear control ownership in utility organizations.",
    category: "Utilities",
    type: "Guide"
  },
  {
    title: "Responsibility mapping guide for compliance teams",
    description: "Best practices for creating clear RACI matrices and responsibility models.",
    category: "Compliance",
    type: "Guide"
  }
];

const ResourcesPage = () => {
  return (
    <PageTransition>
      <SEO 
        title="Resources & Insights"
        description="Practical governance guides, templates, and insights for medical practices, utilities, and compliance-driven organizations. Free resources from Momentum Edge Consulting."
        canonical="/resources"
      />
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero */}
        <section className="hero-services py-20 lg:py-28 relative overflow-hidden">
          <div className="absolute inset-0 pattern-dots opacity-30" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h1
                className="text-4xl lg:text-5xl font-bold text-brand-navy mb-6 font-heading"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Resources & Insights
              </motion.h1>
              
              <motion.p
                className="text-lg lg:text-xl text-neutral-700 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Practical guidance for governance, compliance, and operational excellence 
                in regulated industries. Free guides, templates, and articles.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Featured Resources */}
        <SectionWrapper variant="default">
          <div className="text-center mb-16">
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Featured Resources
            </motion.h2>
            <motion.p 
              className="section-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Guides and templates to help you get started
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ResourceCard {...resource} />
              </motion.div>
            ))}
          </div>
        </SectionWrapper>

        {/* Newsletter */}
        <SectionWrapper variant="soft-teal">
          <NewsletterSignupStrip />
        </SectionWrapper>

        <PrimaryCTASection 
          headline="Need custom guidance?"
          subheadline="Our team can help you address your specific governance challenges."
        />

        <Footer />
      </div>
    </PageTransition>
  );
};

export default ResourcesPage;
