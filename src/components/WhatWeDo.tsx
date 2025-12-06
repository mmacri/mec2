import { FileText, GitBranch, Users, ClipboardCheck, Monitor } from "lucide-react";
import { motion } from "framer-motion";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "./ScrollAnimation";

const WhatWeDo = () => {
  const services = [
    {
      icon: FileText,
      title: "Policy & Control Development",
      description: "Practical, plain-language policies and controls that people understand — and auditors trust."
    },
    {
      icon: GitBranch,
      title: "Governance & Process Design",
      description: "Clear decision rights, workflows, RACI charts, and committee structures that stabilize operations."
    },
    {
      icon: Users,
      title: "Staffing & Responsibility Modeling",
      description: "Define who does what, eliminate overlaps, remove gaps, and align work with regulatory expectations."
    },
    {
      icon: ClipboardCheck,
      title: "Compliance & Audit Readiness",
      description: "Evidence plans, maturity assessments, documentation cleanup, mock audits, and readiness reviews."
    },
    {
      icon: Monitor,
      title: "IT Governance Advisory",
      description: "Practical guidance on IT processes, system responsibilities, access governance, and operational alignment."
    }
  ];

  return (
    <section className="section-padding bg-sand">
      <div className="container mx-auto px-6">
        <ScrollAnimation className="text-center mb-16">
          <h2 className="section-title">
            What We Do
          </h2>
          <p className="section-subtitle">
            Five core services designed to bring clarity and operational confidence to your organization.
          </p>
        </ScrollAnimation>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto" staggerDelay={0.08}>
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <StaggerItem key={index} className={index === 4 ? 'lg:col-start-2' : ''}>
                <motion.div 
                  className="card-professional group h-full"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="icon-container bg-teal-light group-hover:bg-teal/20 mb-6 transition-colors"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                  >
                    <IconComponent className="w-7 h-7 text-teal-dark" />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-navy mb-3 group-hover:text-teal transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate text-sm leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default WhatWeDo;
