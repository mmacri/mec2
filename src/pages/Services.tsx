import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroServices from "@/components/marketing/HeroServices";
import PrimaryCTASection from "@/components/marketing/PrimaryCTASection";
import SectionWrapper from "@/components/ui/SectionWrapper";
import PageTransition from "@/components/PageTransition";
import useScrollToHash from "@/hooks/useScrollToHash";
import { motion } from "framer-motion";
import { FileText, Shield, Users, ClipboardCheck, Monitor, CheckCircle, Cloud, Server, Settings, Briefcase } from "lucide-react";
import { useEffect } from "react";

const serviceDetails = [
  {
    id: "policy",
    icon: FileText,
    title: "Policy & Control Development",
    description: "Policies written for people, not auditors. Controls tied to workflows and systems.",
    details: [
      "Policy gap analysis and inventory",
      "Policy writing in plain language",
      "Control design tied to actual workflows",
      "Evidence expectations clarified",
      "Policy lifecycle and update process"
    ],
    outcomes: [
      "Staff actually read and follow policies",
      "Controls that match how work gets done",
      "Clear evidence requirements for audits"
    ]
  },
  {
    id: "governance",
    icon: Shield,
    title: "Governance & Process Design",
    description: "SOPs, RACI matrices, decision rights, and escalation paths.",
    details: [
      "Standard operating procedure development",
      "RACI matrix design and documentation",
      "Decision rights frameworks",
      "Escalation path design",
      "Exception handling processes"
    ],
    outcomes: [
      "Clear accountability at every step",
      "Faster, more confident decision-making",
      "Consistent processes across teams"
    ]
  },
  {
    id: "staffing",
    icon: Users,
    title: "Staffing & Responsibility Modeling",
    description: "Role clarity, gap analysis, and handoff design.",
    details: [
      "Responsibility mapping and documentation",
      "Coverage gap identification",
      "Handoff and transition design",
      "Cross-training recommendations",
      "Succession planning support"
    ],
    outcomes: [
      "Everyone knows their responsibilities",
      "No gaps in coverage",
      "Smooth handoffs between roles"
    ]
  },
  {
    id: "compliance",
    icon: ClipboardCheck,
    title: "Compliance & Audit Readiness",
    description: "Maturity assessments, control gap maps, and mock audits.",
    details: [
      "Current-state maturity assessment",
      "Control gap identification and prioritization",
      "Evidence preparation and organization",
      "Mock audit facilitation",
      "Remediation planning and tracking"
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
    title: "IT Governance & Advisory",
    description: "Access governance, change management, technology ownership.",
    details: [
      "Access control framework design",
      "Change management process development",
      "Technology ownership models",
      "IT policy alignment with operations",
      "Vendor governance support"
    ],
    outcomes: [
      "Clear technology ownership",
      "Controlled, documented changes",
      "IT aligned with business governance"
    ]
  }
];

const extendedServices = [
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    description: "Cloud migration, VMware solutions, and infrastructure modernization"
  },
  {
    icon: Server,
    title: "ServiceNow Solutions",
    description: "Implementation, optimization, and workflow automation"
  },
  {
    icon: Settings,
    title: "IT Remediation Advisory",
    description: "Technical remediation planning for regulatory compliance"
  },
  {
    icon: Briefcase,
    title: "CIO Advisory Services",
    description: "Strategic IT leadership and technology roadmap development"
  }
];

const faqData = [
  {
    question: "What is Policy & Control Development?",
    answer: "We create policies and controls that reflect the way your organization actually works — not templates copied from the internet."
  },
  {
    question: "How does Governance & Process Design help my organization?",
    answer: "Organizations need more than documents — they need structure that defines how work gets done. We provide SOPs, RACI charts, and decision-rights definitions."
  },
  {
    question: "What is included in Compliance & Audit Readiness services?",
    answer: "We prepare your organization for any regulatory review with evidence plans, maturity assessments, and mock audit sessions."
  },
  {
    question: "Do you provide IT Governance services?",
    answer: "Yes, we provide technology governance including access governance, change management, and IT process documentation."
  },
  {
    question: "Do you offer IT and cloud services?",
    answer: "Yes, we partner with clients on cloud migrations, VMware solutions, ServiceNow implementations, and provide CIO advisory services for organizations needing strategic IT leadership."
  }
];

const ServicesPage = () => {
  useScrollToHash();
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqData.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    });
    script.id = 'faq-structured-data';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('faq-structured-data');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <PageTransition>
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
                      {service.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-3 text-neutral-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-teal mt-2 flex-shrink-0" />
                          {detail}
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

        {/* Extended IT Services Section */}
        <SectionWrapper variant="neutral" id="technology">
          <div className="text-center mb-12">
            <motion.span
              className="inline-block px-4 py-1.5 bg-brand-teal/10 text-brand-teal text-sm font-medium rounded-full mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Extended Capabilities
            </motion.span>
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Technology & IT Advisory
            </motion.h2>
            <motion.p 
              className="section-subtitle max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Beyond governance, we provide hands-on technology expertise to help you modernize infrastructure and achieve regulatory compliance.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {extendedServices.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-background rounded-xl p-6 border border-neutral-200 hover:border-brand-teal/30 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="icon-container mb-4">
                  <service.icon className="w-6 h-6 text-brand-teal" />
                </div>
                <h3 className="text-lg font-semibold text-brand-navy mb-2">{service.title}</h3>
                <p className="text-sm text-neutral-600">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-10 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-neutral-600 mb-4">
              Need technology support alongside governance work?
            </p>
            <a
              href="mailto:momentumedgeconsulting@gmail.com?subject=IT & Technology Services Inquiry"
              className="inline-flex items-center gap-2 text-brand-teal font-medium hover:text-brand-teal-dark transition-colors"
            >
              Let's discuss your technology needs →
            </a>
          </motion.div>
        </SectionWrapper>

        <PrimaryCTASection />

        <Footer />
      </div>
    </PageTransition>
  );
};

export default ServicesPage;
