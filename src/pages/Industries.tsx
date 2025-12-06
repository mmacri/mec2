import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroIndustries from "@/components/marketing/HeroIndustries";
import PrimaryCTASection from "@/components/marketing/PrimaryCTASection";
import SectionWrapper from "@/components/ui/SectionWrapper";
import PageTransition from "@/components/PageTransition";
import useScrollToHash from "@/hooks/useScrollToHash";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Stethoscope, Zap, Building, AlertTriangle, CheckCircle } from "lucide-react";

const medicalPainPoints = [
  "Inconsistent workflows",
  "Staff uncertainty",
  "Compliance documentation gaps",
  "Unclear ownership"
];

const medicalSolutions = [
  "SOPs aligned to daily operations",
  "Process mapping and handoff clarity",
  "Policy documentation in plain language",
  "RACI and responsibility modeling"
];

const utilityPainPoints = [
  "Inconsistent control ownership",
  "Operational silos",
  "Documentation challenges",
  "Regulatory oversight pressure"
];

const utilitySolutions = [
  "Control mapping and catalog development",
  "Governance frameworks for IT/OT",
  "Workflows and documentation systems",
  "Gap and readiness assessments"
];

const compliancePainPoints = [
  "Spreadsheets everywhere",
  "No single control set",
  "Unclear roles",
  "Reactive compliance"
];

const complianceSolutions = [
  "Control library design",
  "Responsibility modeling",
  "Workflow formalization",
  "Reporting clarity"
];

interface IndustrySectionProps {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  painPoints: string[];
  solutions: string[];
  variant: "default" | "soft-teal";
}

const IndustrySection = ({ id, icon: Icon, title, description, painPoints, solutions, variant }: IndustrySectionProps) => (
  <SectionWrapper id={id} variant={variant}>
    <div className="mb-12">
      <motion.div
        className="flex items-center gap-4 mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="icon-container">
          <Icon className="w-6 h-6 text-brand-teal" />
        </div>
        <h2 className="text-3xl font-bold text-brand-navy font-heading">
          {title}
        </h2>
      </motion.div>
      <motion.p
        className="text-neutral-700 text-lg max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        {description}
      </motion.p>
    </div>

    <div className="grid lg:grid-cols-2 gap-8">
      {/* Pain Points */}
      <motion.div
        className="bg-white rounded-xl border border-neutral-300 p-8"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="text-lg font-semibold text-brand-navy mb-6 flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-red-500" />
          Common Pain Points
        </h3>
        <ul className="space-y-3">
          {painPoints.map((point, index) => (
            <li key={index} className="flex items-start gap-3 text-neutral-700">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
              {point}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Solutions */}
      <motion.div
        className="bg-brand-soft-teal rounded-xl p-8"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="text-lg font-semibold text-brand-navy mb-6 flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-brand-teal" />
          How We Help
        </h3>
        <ul className="space-y-3">
          {solutions.map((solution, index) => (
            <li key={index} className="flex items-start gap-3 text-neutral-700">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-teal mt-2 flex-shrink-0" />
              {solution}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  </SectionWrapper>
);

const IndustriesPage = () => {
  useScrollToHash();
  
  return (
    <PageTransition>
      <SEO 
        title="Who We Help - Industries"
        description="Specialized governance consulting for healthcare, utilities, and compliance-driven organizations. We understand your industry's unique regulatory challenges."
        canonical="/industries"
      />
      <div className="min-h-screen bg-background">
        <Header />
        
        <HeroIndustries />

        <IndustrySection
          id="medical"
          icon={Stethoscope}
          title="Healthcare & Doctor's Offices"
          description="Healthcare operations face unique challenges — balancing patient care with regulatory compliance, managing diverse staff roles, and maintaining documentation that actually reflects how your practice works."
          painPoints={medicalPainPoints}
          solutions={medicalSolutions}
          variant="default"
        />

        <IndustrySection
          id="utilities"
          icon={Zap}
          title="Utilities & Critical Infrastructure"
          description="Utility organizations operate under intense regulatory scrutiny. Your governance structures need to be as reliable as your infrastructure — clear, documented, and aligned with both operations and compliance requirements."
          painPoints={utilityPainPoints}
          solutions={utilitySolutions}
          variant="soft-teal"
        />

        <IndustrySection
          id="compliance"
          icon={Building}
          title="Compliance-Driven Firms"
          description="For organizations where compliance is non-negotiable — financial services, government contractors, and regulated industries — governance isn't optional. It's the foundation everything else is built on."
          painPoints={compliancePainPoints}
          solutions={complianceSolutions}
          variant="default"
        />

        <PrimaryCTASection 
          headline="Ready to strengthen your organization's governance?"
          subheadline="Let's discuss how we can help your specific industry challenges."
        />

        <Footer />
      </div>
    </PageTransition>
  );
};

export default IndustriesPage;
