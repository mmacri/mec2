import { FileText, GitBranch, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "./ScrollAnimation";

const WhyHireUs = () => {
  const pillars = [
    {
      icon: FileText,
      title: "Policies & Controls",
      description: "Clear, practical policies that people understand and auditors trust."
    },
    {
      icon: GitBranch,
      title: "Processes",
      description: "Defined workflows and responsibilities that eliminate ambiguity."
    },
    {
      icon: Shield,
      title: "Governance",
      description: "Structures and oversight that ensure accountability and compliance."
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <ScrollAnimation className="text-center mb-16">
            <h2 className="section-title">
              Why Organizations Hire Us
            </h2>
            <p className="section-subtitle">
              Organizations don't fail audits because they're careless — they fail because their 
              policies, processes, and responsibilities aren't clearly defined or consistently followed.
            </p>
          </ScrollAnimation>
          
          {/* Three pillars */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {pillars.map((pillar, index) => {
              const IconComponent = pillar.icon;
              return (
                <StaggerItem key={index}>
                  <motion.div 
                    className="card-professional text-center h-full"
                    whileHover={{ y: -8, boxShadow: "0 20px 40px -12px hsla(var(--teal), 0.2)" }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div 
                      className="icon-container bg-teal-light mx-auto mb-6"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <IconComponent className="w-8 h-8 text-teal-dark" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-navy mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-slate">
                      {pillar.description}
                    </p>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
          
          {/* Bottom statement */}
          <ScrollAnimation delay={0.3} variant="scale">
            <div className="inline-block w-full bg-gradient-to-r from-sand to-teal-light rounded-2xl p-8 border border-teal/20">
              <p className="text-xl text-slate font-medium text-center">
                Momentum Edge specializes in bringing <span className="text-navy font-semibold">order</span>, 
                <span className="text-navy font-semibold"> clarity</span>, and 
                <span className="text-navy font-semibold"> structure</span> to environments where ambiguity creates risk.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default WhyHireUs;
