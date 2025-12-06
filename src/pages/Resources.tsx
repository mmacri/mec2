import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ResourceCard from "@/components/marketing/ResourceCard";
import NewsletterSignupStrip from "@/components/marketing/NewsletterSignupStrip";
import PrimaryCTASection from "@/components/marketing/PrimaryCTASection";
import SectionWrapper from "@/components/ui/SectionWrapper";
import PageTransition from "@/components/PageTransition";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { FileText, Download, ExternalLink } from "lucide-react";

const resources = [
  {
    title: "10 Common Governance Gaps in Medical Practices",
    description: "A practical guide to identifying and addressing the most frequent governance challenges in healthcare settings.",
    category: "Healthcare",
    type: "Guide"
  },
  {
    title: "Utility Control Framework Starter Template",
    description: "A foundational template for building control catalogs aligned with regulatory requirements in the utilities sector.",
    category: "Utilities",
    type: "Template"
  },
  {
    title: "How to Write Policies People Actually Follow",
    description: "Best practices for creating clear, actionable policies that staff will read, understand, and implement.",
    category: "All Industries",
    type: "Article"
  },
  {
    title: "Audit Readiness Checklist",
    description: "A comprehensive checklist to ensure your organization is prepared for regulatory audits and inspections.",
    category: "Compliance",
    type: "Checklist"
  },
  {
    title: "RACI Matrix Template for Healthcare",
    description: "A ready-to-use template for defining roles and responsibilities in medical practice operations.",
    category: "Healthcare",
    type: "Template"
  },
  {
    title: "5 Signs Your Organization Needs Governance Help",
    description: "Key indicators that your organization would benefit from structured governance support.",
    category: "All Industries",
    type: "Article"
  }
];

const upcomingResources = [
  "Compliance Calendar for Utilities",
  "IT Governance Quick-Start Guide",
  "Policy Lifecycle Management Framework",
  "Evidence Collection Best Practices"
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

        {/* Coming Soon */}
        <SectionWrapper variant="soft-teal">
          <div className="max-w-3xl mx-auto">
            <motion.div
              className="text-center mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">Coming Soon</h2>
              <p className="section-subtitle">More resources in development</p>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl p-8 border border-neutral-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="grid sm:grid-cols-2 gap-4">
                {upcomingResources.map((resource, index) => (
                  <div key={index} className="flex items-center gap-3 text-neutral-700">
                    <FileText className="w-5 h-5 text-brand-teal" />
                    <span>{resource}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-neutral-500 mt-6 text-center">
                Sign up below to be notified when new resources are available.
              </p>
            </motion.div>
          </div>
        </SectionWrapper>

        {/* Newsletter */}
        <SectionWrapper variant="default">
          <NewsletterSignupStrip />
        </SectionWrapper>

        <PrimaryCTASection 
          headline="Need Custom Guidance?"
          subheadline="Our team can help you address your specific governance challenges."
        />

        <Footer />
      </div>
    </PageTransition>
  );
};

export default ResourcesPage;
