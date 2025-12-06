import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroIndustries from "@/components/marketing/HeroIndustries";
import ProblemSolutionSection from "@/components/marketing/ProblemSolutionSection";
import PrimaryCTASection from "@/components/marketing/PrimaryCTASection";
import SectionWrapper from "@/components/ui/SectionWrapper";
import PageTransition from "@/components/PageTransition";
import useScrollToHash from "@/hooks/useScrollToHash";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Stethoscope, Zap, Building } from "lucide-react";

const medicalProblems = [
  { text: "Policies outdated or written in compliance jargon no one reads" },
  { text: "Staff unclear on workflow ownership and task handoffs" },
  { text: "Audits cause stress and last-minute scrambling" },
  { text: "Documentation scattered across systems, often out of date" }
];

const medicalSolutions = [
  { text: "Patient intake flow clarification and optimization" },
  { text: "Responsibility mapping across providers, front office, billing" },
  { text: "Policy updates — clinical and administrative SOPs" },
  { text: "Compliance and audit readiness embedded into operations" }
];

const utilityProblems = [
  { text: "Control gaps identified during inspections, not before" },
  { text: "Governance structures inconsistent across departments" },
  { text: "Documentation not aligned with actual operations" },
  { text: "Stress around regulatory inspections and audits" }
];

const utilitySolutions = [
  { text: "Governance frameworks aligned with operational reality" },
  { text: "Control catalogs mapped to regulatory requirements" },
  { text: "Evidence management process design" },
  { text: "Maturity assessment and audit preparation" }
];

const complianceProblems = [
  { text: "Policies exist but don't reflect how work actually gets done" },
  { text: "Control ownership unclear or undocumented" },
  { text: "Staff responsibilities overlap or have gaps" },
  { text: "Technology processes disconnected from governance" }
];

const complianceSolutions = [
  { text: "Policy and control alignment with actual workflows" },
  { text: "Responsibility design and RACI clarity" },
  { text: "SOPs for key operational processes" },
  { text: "IT governance clarity and technology ownership" }
];

const IndustriesPage = () => {
  useScrollToHash();
  
  return (
    <PageTransition>
      <SEO 
        title="Industries We Serve"
        description="Specialized governance consulting for healthcare, utilities, and compliance-driven organizations. We understand your industry's unique regulatory challenges."
        canonical="/industries"
      />
      <div className="min-h-screen bg-background">
        <Header />
        
        <HeroIndustries />

        {/* Medical Practices */}
        <SectionWrapper id="medical" variant="default">
          <div className="mb-12">
            <motion.div
              className="flex items-center gap-4 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="icon-container">
                <Stethoscope className="w-6 h-6 text-brand-teal" />
              </div>
              <h2 className="text-3xl font-bold text-brand-navy font-heading">
                Medical Practices & Doctor's Offices
              </h2>
            </motion.div>
            <motion.p
              className="text-neutral-700 text-lg max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Healthcare operations face unique challenges — balancing patient care with 
              regulatory compliance, managing diverse staff roles, and maintaining documentation 
              that actually reflects how your practice works.
            </motion.p>
          </div>

          <ProblemSolutionSection
            problems={medicalProblems}
            solutions={medicalSolutions}
            industryContext="Common challenges in medical practices"
          />
        </SectionWrapper>

        {/* Utilities */}
        <SectionWrapper id="utilities" variant="soft-teal">
          <div className="mb-12">
            <motion.div
              className="flex items-center gap-4 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="icon-container">
                <Zap className="w-6 h-6 text-brand-teal" />
              </div>
              <h2 className="text-3xl font-bold text-brand-navy font-heading">
                Utilities & Critical Infrastructure
              </h2>
            </motion.div>
            <motion.p
              className="text-neutral-700 text-lg max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Utility organizations operate under intense regulatory scrutiny. Your governance 
              structures need to be as reliable as your infrastructure — clear, documented, 
              and aligned with both operations and compliance requirements.
            </motion.p>
          </div>

          <ProblemSolutionSection
            problems={utilityProblems}
            solutions={utilitySolutions}
            industryContext="Common challenges in utilities and infrastructure"
          />
        </SectionWrapper>

        {/* Compliance-Driven Firms */}
        <SectionWrapper id="compliance" variant="default">
          <div className="mb-12">
            <motion.div
              className="flex items-center gap-4 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="icon-container">
                <Building className="w-6 h-6 text-brand-teal" />
              </div>
              <h2 className="text-3xl font-bold text-brand-navy font-heading">
                Compliance-Driven Firms
              </h2>
            </motion.div>
            <motion.p
              className="text-neutral-700 text-lg max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              For organizations where compliance is non-negotiable — financial services, 
              government contractors, and regulated industries — governance isn't optional. 
              It's the foundation everything else is built on.
            </motion.p>
          </div>

          <ProblemSolutionSection
            problems={complianceProblems}
            solutions={complianceSolutions}
            industryContext="Common challenges in compliance-driven organizations"
          />
        </SectionWrapper>

        <PrimaryCTASection 
          headline="Ready to Strengthen Your Organization's Governance?"
          subheadline="Let's discuss how we can help your specific industry challenges."
        />

        <Footer />
      </div>
    </PageTransition>
  );
};

export default IndustriesPage;
