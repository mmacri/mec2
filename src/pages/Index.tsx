import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroPrimary from "@/components/marketing/HeroPrimary";
import ServiceCard from "@/components/marketing/ServiceCard";
import IndustryPanel from "@/components/marketing/IndustryPanel";
import ApproachTimeline from "@/components/marketing/ApproachTimeline";
import PrimaryCTASection from "@/components/marketing/PrimaryCTASection";
import SectionWrapper from "@/components/ui/SectionWrapper";
import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";
import { 
  FileText, Shield, Users, ClipboardCheck, Monitor,
  Stethoscope, Zap, Building,
  AlertTriangle, HelpCircle, FileX, Clock, FolderX
} from "lucide-react";

const painPoints = [
  { icon: AlertTriangle, text: "Unclear policies and inconsistent procedures" },
  { icon: Shield, text: "Control gaps discovered too late" },
  { icon: HelpCircle, text: "Staff uncertain about who owns what" },
  { icon: Clock, text: "Audit stress, last-minute scrambling" },
  { icon: FolderX, text: "Documentation that doesn't match real workflows" }
];

const services = [
  {
    icon: FileText,
    title: "Policy & Control Development",
    description: "Policies written for people, not auditors. Controls tied to workflows and systems.",
    bullets: [
      "Healthcare: HIPAA-aligned policies, clinical SOPs",
      "Utilities: Operational policies, safety controls",
      "All: Evidence expectations clarified"
    ],
    link: "/services#policy"
  },
  {
    icon: Shield,
    title: "Governance & Process Design",
    description: "SOPs, RACI matrices, decision rights, and escalation paths.",
    bullets: [
      "Standardized operating procedures",
      "Clear decision-making frameworks",
      "Escalation and exception handling"
    ],
    link: "/services#governance"
  },
  {
    icon: Users,
    title: "Staffing & Responsibility Modeling",
    description: "Role clarity, gap analysis, and handoff design.",
    bullets: [
      "Responsibility mapping across teams",
      "Coverage gap identification",
      "Handoff and transition design"
    ],
    link: "/services#staffing"
  },
  {
    icon: ClipboardCheck,
    title: "Compliance & Audit Readiness",
    description: "Maturity assessments, control gap maps, and mock audits.",
    bullets: [
      "Current-state maturity assessment",
      "Control gap identification",
      "Evidence preparation and mock audits"
    ],
    link: "/services#compliance"
  },
  {
    icon: Monitor,
    title: "IT Governance & Advisory",
    description: "Access governance, change management, technology ownership.",
    bullets: [
      "Access control frameworks",
      "Change management processes",
      "Technology ownership models"
    ],
    link: "/services#it-governance"
  }
];

const industries = [
  {
    icon: Stethoscope,
    title: "Medical Practices & Doctor's Offices",
    description: "Practical governance for healthcare operations — from patient intake to compliance documentation.",
    solutions: [
      "Policies and SOPs written in plain language",
      "Roles clarified across providers, MAs, front office",
      "Workflows stabilized — scheduling, patient intake, task handoffs",
      "Compliance embedded into daily operations"
    ]
  },
  {
    icon: Zap,
    title: "Utilities & Critical Infrastructure",
    description: "Governance frameworks built for operational reality and regulatory expectations.",
    solutions: [
      "Governance aligned with operational reality",
      "Controls mapped to internal or regulatory frameworks",
      "Evidence expectations defined and repeatable",
      "Risk insights and readiness for inspections"
    ]
  },
  {
    icon: Building,
    title: "Compliance-Driven Firms",
    description: "Structured support for organizations where compliance is non-negotiable.",
    solutions: [
      "Policy and control clarity",
      "Workflow consistency",
      "Staffing and responsibility modeling",
      "Technology processes aligned with governance"
    ]
  }
];

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero */}
        <HeroPrimary />

        {/* Why Organizations Hire Us */}
        <SectionWrapper variant="default">
          <div className="text-center mb-16">
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Why Organizations Hire Us
            </motion.h2>
            <motion.p 
              className="section-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Common challenges that bring organizations to Momentum Edge
            </motion.p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {painPoints.map((point, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 p-6 bg-white rounded-xl border border-neutral-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0">
                  <point.icon className="w-5 h-5 text-red-500" />
                </div>
                <p className="text-neutral-700">{point.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="bg-brand-soft-teal rounded-xl p-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-brand-navy font-medium max-w-3xl mx-auto">
              Momentum Edge modernizes and structures the operational foundation of organizations 
              that cannot afford ambiguity.
            </p>
          </motion.div>
        </SectionWrapper>

        {/* What We Do */}
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
              Comprehensive governance services tailored to your industry
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>
        </SectionWrapper>

        {/* Who We Serve */}
        <SectionWrapper variant="default">
          <div className="text-center mb-16">
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Who We Serve
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

          <div className="grid lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <IndustryPanel key={index} {...industry} />
            ))}
          </div>
        </SectionWrapper>

        {/* How We Work */}
        <SectionWrapper variant="soft-blue">
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
              A structured, practical approach to governance transformation
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
