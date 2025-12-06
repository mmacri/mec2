import { Hospital, Zap, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "./ScrollAnimation";

const WhoWeServe = () => {
  const audiences = [
    {
      icon: Hospital,
      title: "Medical Practices",
      subtitle: "Healthcare Groups & Dental Offices",
      description: "We help offices build policies, controls, workflows, and staff responsibilities that support patient care and minimize compliance risk.",
      color: "from-destructive/10 to-destructive/5",
      iconColor: "text-destructive",
      borderColor: "border-destructive/20",
      hoverBorder: "hover:border-destructive/40"
    },
    {
      icon: Zap,
      title: "Utilities & Critical Infrastructure",
      subtitle: "Power, Water & Essential Services",
      description: "We support governance, control frameworks, evidence processes, and readiness for inspections and audits.",
      color: "from-warning/10 to-warning/5",
      iconColor: "text-warning",
      borderColor: "border-warning/20",
      hoverBorder: "hover:border-warning/40"
    },
    {
      icon: Building2,
      title: "Compliance-Driven Firms",
      subtitle: "Professional & Growing Organizations",
      description: "We help organizations create structure, clarity, and governance as they scale.",
      color: "from-teal/10 to-teal/5",
      iconColor: "text-teal",
      borderColor: "border-teal/20",
      hoverBorder: "hover:border-teal/40"
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-6">
        <ScrollAnimation className="text-center mb-16">
          <h2 className="section-title">
            Who We Serve
          </h2>
          <p className="section-subtitle">
            We work with organizations that must operate at a high standard — 
            even without the headcount of large enterprises.
          </p>
        </ScrollAnimation>

        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto" staggerDelay={0.15}>
          {audiences.map((audience, index) => {
            const IconComponent = audience.icon;
            return (
              <StaggerItem key={index}>
                <motion.div 
                  className={`relative overflow-hidden rounded-3xl border ${audience.borderColor} ${audience.hoverBorder} bg-gradient-to-b ${audience.color} p-8 transition-all duration-300 h-full`}
                  whileHover={{ y: -8, boxShadow: "0 25px 50px -12px hsla(var(--navy), 0.1)" }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className={`w-14 h-14 rounded-2xl bg-background shadow-sm flex items-center justify-center mb-6 ${audience.iconColor}`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <IconComponent className="w-7 h-7" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-navy mb-1">
                    {audience.title}
                  </h3>
                  <p className="text-sm text-slate-muted mb-4">
                    {audience.subtitle}
                  </p>
                  <p className="text-slate leading-relaxed mb-6">
                    {audience.description}
                  </p>
                  <motion.div whileHover={{ x: 5 }}>
                    <Link 
                      to="/industries" 
                      className="text-teal font-medium text-sm hover:text-teal-dark transition-colors inline-flex items-center"
                    >
                      Learn more →
                    </Link>
                  </motion.div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default WhoWeServe;
