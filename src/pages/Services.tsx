import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroServices from "@/components/marketing/HeroServices";
import PrimaryCTASection from "@/components/marketing/PrimaryCTASection";
import SectionWrapper from "@/components/ui/SectionWrapper";
import PageTransition from "@/components/PageTransition";
import useScrollToHash from "@/hooks/useScrollToHash";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { FileText, Settings, Users, ClipboardCheck, Monitor, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const serviceDetails = [
  {
    id: "policy",
    icon: FileText,
    title: "Policy & Control Design",
    description: "Policies written for real teams with clear control objectives and evidence expectations built-in.",
    bullets: [
      "Policies written for real teams",
      "Clear control objectives",
      "Evidence expectations built-in"
    ],
    outcomes: [
      "Staff actually read and follow policies",
      "Controls that match how work gets done",
      "Clear evidence requirements for audits"
    ]
  },
  {
    id: "workflow",
    icon: Settings,
    title: "Workflow & Process Design",
    description: "SOPs aligned to daily operations with handoff mapping and repeatable, scalable workflows.",
    bullets: [
      "SOPs aligned to daily operations",
      "Handoff mapping",
      "Repeatable, scalable workflows"
    ],
    outcomes: [
      "Consistent processes across teams",
      "Clear handoffs between roles",
      "Reduced operational confusion"
    ]
  },
  {
    id: "staffing",
    icon: Users,
    title: "Staffing & Responsibility Modeling",
    description: "RACI design with ownership clarity and role definition that matches real needs.",
    bullets: [
      "RACI design",
      "Ownership clarity",
      "Role definition that matches real needs"
    ],
    outcomes: [
      "Everyone knows their responsibilities",
      "No gaps in coverage",
      "Clear accountability at every step"
    ]
  },
  {
    id: "compliance",
    icon: ClipboardCheck,
    title: "Compliance & Readiness Support",
    description: "Gap analysis, documentation cleanup, and preparation for audits or inspections.",
    bullets: [
      "Gap analysis",
      "Documentation cleanup",
      "Preparation for audits or inspections"
    ],
    outcomes: [
      "Know your compliance posture before auditors do",
      "Evidence ready when needed",
      "Audits without surprises"
    ]
  },
  {
    id: "it-governance",
    icon: Monitor,
    title: "Operational IT Governance",
    description: "Decision rights, change oversight, and governance alignment across teams.",
    bullets: [
      "Decision rights",
      "Change oversight",
      "Governance alignment across teams"
    ],
    outcomes: [
      "Clear technology ownership",
      "Controlled, documented changes",
      "IT aligned with business governance"
    ]
  }
];

const ServicesPage = () => {
  useScrollToHash();

  return (
    <PageTransition>
      <SEO 
        title="Services"
        description="Governance consulting services including policy development, workflow design, compliance readiness, and IT governance. Practical solutions for regulated organizations."
        canonical="/services"
      />
      <div className="min-h-screen bg-background">
        <Header />
        
        <HeroServices />

        <SectionWrapper variant="default">
          <div className="text-center mb-16">
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Our Services
            </motion.h2>
            <motion.p 
              className="section-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Comprehensive governance solutions designed for real-world operations
            </motion.p>
          </div>

          <div className="space-y-16">
            {serviceDetails.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                className="scroll-mt-32"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className={`grid lg:grid-cols-2 gap-8 items-start ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}>
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="icon-container">
                        <service.icon className="w-6 h-6 text-brand-teal" />
                      </div>
                      <h3 className="text-2xl font-bold text-brand-navy font-heading">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-lg text-neutral-700 mb-6">{service.description}</p>
                    
                    <h4 className="text-lg font-semibold text-brand-navy mb-4">What We Do</h4>
                    <ul className="space-y-3 mb-8">
                      {service.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-3 text-neutral-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-teal mt-2 flex-shrink-0" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={`bg-brand-soft-teal rounded-xl p-8 ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}>
                    <h4 className="text-lg font-semibold text-brand-navy mb-6">
                      Outcomes You Can Expect
                    </h4>
                    <ul className="space-y-4">
                      {service.outcomes.map((outcome, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-brand-teal mt-0.5 flex-shrink-0" />
                          <span className="text-neutral-700">{outcome}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 pt-6 border-t border-brand-teal/20">
                      <a
                        href={`mailto:momentumedgeconsulting@gmail.com?subject=Inquiry about ${service.title}`}
                        className="inline-flex items-center gap-2 text-brand-teal font-medium hover:text-brand-teal-dark transition-colors"
                      >
                        Learn how this works →
                      </a>
                    </div>
                  </div>
                </div>

                {index < serviceDetails.length - 1 && (
                  <div className="border-b border-neutral-200 mt-16" />
                )}
              </motion.div>
            ))}
          </div>
        </SectionWrapper>

        <PrimaryCTASection />

        <Footer />
      </div>
    </PageTransition>
  );
};

export default ServicesPage;
