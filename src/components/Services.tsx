import { FileText, GitBranch, Users, ClipboardCheck, Monitor, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "./ScrollAnimation";

const Services = () => {
  const services = [
    {
      id: "policy",
      icon: FileText,
      title: "Policy & Control Development",
      problem: "Policies that are outdated, unclear, or disconnected from actual operations.",
      solution: "We create policies and controls that reflect the way your organization actually works — not templates copied from the internet.",
      deliverables: [
        "Policies in plain language",
        "Control catalogs with owners, frequency, evidence expectations",
        "Mapping to regulatory or operational frameworks"
      ]
    },
    {
      id: "governance",
      icon: GitBranch,
      title: "Governance & Process Design",
      problem: "Unclear decision rights, ad-hoc workflows, and governance that exists only on paper.",
      solution: "Organizations need more than documents — they need structure that defines how work gets done.",
      deliverables: [
        "Process flows and SOPs",
        "RACI charts",
        "Committee structures",
        "Decision-rights definitions"
      ]
    },
    {
      id: "staffing",
      icon: Users,
      title: "Staffing & Responsibility Modeling",
      problem: "Role confusion, overlapping duties, and gaps in accountability.",
      solution: "Clarifying who does what eliminates risk and frustration.",
      deliverables: [
        "Role definitions",
        "RACI models",
        "Gap and overlap analysis",
        "Responsibility alignment matrix"
      ]
    },
    {
      id: "compliance",
      icon: ClipboardCheck,
      title: "Compliance & Audit Readiness",
      problem: "Upcoming audits with incomplete documentation and unclear evidence.",
      solution: "We prepare your organization for any regulatory review.",
      deliverables: [
        "Evidence plans",
        "Maturity assessments",
        "Audit packets",
        "Mock audit sessions"
      ]
    },
    {
      id: "it-governance",
      icon: Monitor,
      title: "IT Governance & Advisory",
      problem: "IT operations without clear governance, ownership, or documentation.",
      solution: "Technology governance for small and mid-size regulated organizations.",
      deliverables: [
        "Access and change governance",
        "System responsibility structures",
        "Technology process documentation",
        "IT roadmap alignment"
      ]
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <ScrollAnimation className="text-center mb-16">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            We help regulated organizations build the policies, controls, governance structures, 
            and operational processes they need to operate with confidence.
          </p>
        </ScrollAnimation>

        <StaggerContainer className="space-y-8 max-w-5xl mx-auto" staggerDelay={0.1}>
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <StaggerItem key={index}>
                <motion.div 
                  id={service.id}
                  className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-teal-200 transition-all duration-300"
                  whileHover={{ y: -4, boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.1)" }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3">
                    <motion.div 
                      className="bg-slate-50 p-8 flex flex-col justify-center items-center text-center"
                      whileHover={{ backgroundColor: "#f0fdfa" }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div 
                        className="w-16 h-16 rounded-2xl bg-teal-100 flex items-center justify-center mb-4"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <IconComponent className="w-8 h-8 text-teal-600" />
                      </motion.div>
                      <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
                    </motion.div>
                    
                    <div className="lg:col-span-2 p-8">
                      <div className="mb-6">
                        <div className="text-sm font-semibold text-red-500 uppercase tracking-wide mb-2">The Problem</div>
                        <p className="text-slate-600">{service.problem}</p>
                      </div>
                      <div className="mb-6">
                        <div className="text-sm font-semibold text-teal-600 uppercase tracking-wide mb-2">Our Solution</div>
                        <p className="text-slate-700 font-medium">{service.solution}</p>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-3">Deliverables</div>
                        <div className="flex flex-wrap gap-2">
                          {service.deliverables.map((deliverable, idx) => (
                            <motion.span 
                              key={idx}
                              className="inline-flex items-center bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm"
                              whileHover={{ scale: 1.05, backgroundColor: "#ccfbf1" }}
                            >
                              {deliverable}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <ScrollAnimation delay={0.3} className="text-center mt-16">
          <motion.div 
            className="bg-slate-900 rounded-2xl p-10 max-w-3xl mx-auto"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
            <p className="text-slate-300 mb-8">
              Request a governance and compliance assessment to identify opportunities and create a roadmap.
            </p>
            <motion.a 
              href="mailto:momentumedgeconsulting@gmail.com?subject=Governance Assessment Request"
              className="cta-primary group"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Request an Assessment
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </motion.a>
          </motion.div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Services;
