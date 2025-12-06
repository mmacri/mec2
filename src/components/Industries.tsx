import { Hospital, Zap, Building2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "./ScrollAnimation";

const Industries = () => {
  const industries = [
    {
      icon: Hospital,
      title: "Medical Practices",
      subtitle: "Healthcare Groups & Dental Offices",
      image: "linear-gradient(135deg, hsl(3 62% 95%) 0%, hsl(3 62% 90%) 100%)",
      iconColor: "text-destructive",
      painPoints: [
        "Policies outdated or missing",
        "Roles and responsibilities unclear",
        "Front office chaos",
        "Audits and inspections looming",
        "Documentation weak"
      ],
      solutions: [
        "Written policies tailored to practice operations",
        "Clear workflows and staff responsibilities",
        "Controls around patient data and HIPAA",
        "Governance accountability structures"
      ],
      cta: "Book a Practice Assessment"
    },
    {
      icon: Zap,
      title: "Utilities & Critical Infrastructure",
      subtitle: "Power, Water & Essential Services",
      image: "linear-gradient(135deg, hsl(40 100% 95%) 0%, hsl(40 100% 88%) 100%)",
      iconColor: "text-warning",
      painPoints: [
        "Governance and controls inconsistent",
        "Audit gaps and findings",
        "Documentation not aligned with reality",
        "Operational ambiguity"
      ],
      solutions: [
        "Governance frameworks for regulated utilities",
        "Control design and evidence processes",
        "Process documentation and training",
        "Comprehensive audit preparation"
      ],
      cta: "Request a Utility Governance Review"
    },
    {
      icon: Building2,
      title: "Compliance-Driven Firms",
      subtitle: "Professional & Growing Organizations",
      image: "linear-gradient(135deg, hsl(var(--teal-light)) 0%, hsl(176 47% 85%) 100%)",
      iconColor: "text-teal",
      painPoints: [
        "No formal governance in place",
        "Fast growth creating chaos",
        "Undefined roles and responsibilities",
        "Client audits raising concerns"
      ],
      solutions: [
        "Responsibility modeling and RACI",
        "Policies and controls development",
        "Operational structure design",
        "IT governance alignment"
      ],
      cta: "Schedule a Consultation"
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-6">
        <ScrollAnimation className="text-center mb-16">
          <h2 className="section-title">Who We Serve</h2>
          <p className="section-subtitle">
            We work with organizations that must operate at a high standard — 
            even without the headcount of large enterprises.
          </p>
        </ScrollAnimation>

        <StaggerContainer className="space-y-12 max-w-5xl mx-auto" staggerDelay={0.15}>
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <StaggerItem key={index}>
                <motion.div 
                  className="rounded-3xl overflow-hidden border border-border transition-all duration-300"
                  whileHover={{ y: -6, boxShadow: "0 25px 50px -12px hsla(var(--navy), 0.1)" }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-5">
                    <motion.div 
                      className="lg:col-span-2 p-10 flex flex-col justify-center items-center text-center"
                      style={{ background: industry.image }}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div 
                        className="w-20 h-20 rounded-2xl bg-background/80 backdrop-blur flex items-center justify-center mb-6 shadow-lg"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <IconComponent className={`w-10 h-10 ${industry.iconColor}`} />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-navy mb-2">{industry.title}</h3>
                      <p className="text-slate">{industry.subtitle}</p>
                    </motion.div>
                    
                    <div className="lg:col-span-3 p-10 bg-background">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <div>
                          <h4 className="text-sm font-bold text-destructive uppercase tracking-wide mb-4">Common Pain Points</h4>
                          <ul className="space-y-2">
                            {industry.painPoints.map((point, idx) => (
                              <motion.li 
                                key={idx} 
                                className="flex items-start text-sm text-slate"
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.05 * idx }}
                                viewport={{ once: true }}
                              >
                                <span className="text-destructive mr-2">•</span>
                                {point}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-teal uppercase tracking-wide mb-4">What We Solve</h4>
                          <ul className="space-y-2">
                            {industry.solutions.map((solution, idx) => (
                              <motion.li 
                                key={idx} 
                                className="flex items-start text-sm text-navy"
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.05 * idx }}
                                viewport={{ once: true }}
                              >
                                <span className="text-teal mr-2">✓</span>
                                {solution}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <motion.a 
                        href="mailto:momentumedgeconsulting@gmail.com?subject=Industry Assessment Request"
                        className="inline-flex items-center text-teal font-medium hover:text-teal-dark transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        {industry.cta}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Industries;
