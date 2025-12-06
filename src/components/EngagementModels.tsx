import { Zap, FileText, Calendar, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "./ScrollAnimation";

const EngagementModels = () => {
  const models = [
    {
      icon: Zap,
      title: "Governance & Compliance Assessment",
      subtitle: "QuickScan",
      duration: "2–3 weeks",
      description: "Perfect for small medical practices and growing firms that need a clear starting point.",
      deliverables: [
        "Baseline review",
        "Gap analysis",
        "Prioritized roadmap",
        "Summary report"
      ],
      highlight: false
    },
    {
      icon: FileText,
      title: "Policy & Control Design Project",
      subtitle: "Comprehensive",
      duration: "6–12 weeks",
      description: "Full governance framework development for organizations ready to formalize operations.",
      deliverables: [
        "Complete policies",
        "Control catalog",
        "Governance workflows",
        "RACI charts",
        "Process documentation"
      ],
      highlight: true
    },
    {
      icon: Calendar,
      title: "Ongoing Advisory",
      subtitle: "Fractional Leadership",
      duration: "Monthly",
      description: "Continuous governance support for organizations that need sustained improvement.",
      deliverables: [
        "Regular review sessions",
        "Governance oversight",
        "Staff training",
        "Continuous improvement"
      ],
      highlight: false
    }
  ];

  return (
    <section className="section-padding hero-engagement">
      <div className="container mx-auto px-6">
        <ScrollAnimation className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">Engagement Models</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Flexible engagement options designed to meet your organization where it is today.
          </p>
        </ScrollAnimation>

        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto" staggerDelay={0.15}>
          {models.map((model, index) => {
            const IconComponent = model.icon;
            return (
              <StaggerItem key={index}>
                <motion.div 
                  className={`relative rounded-2xl p-8 transition-all duration-300 h-full ${
                    model.highlight 
                      ? 'bg-white text-navy shadow-2xl lg:scale-105' 
                      : 'bg-white/10 backdrop-blur-sm border border-white/20 text-white'
                  }`}
                  whileHover={{ 
                    y: -8, 
                    boxShadow: model.highlight 
                      ? "0 30px 60px -12px hsla(var(--navy), 0.35)" 
                      : "0 25px 50px -12px hsla(var(--navy), 0.25)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {model.highlight && (
                    <motion.div 
                      className="absolute -top-4 left-1/2 -translate-x-1/2"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5, type: "spring" }}
                    >
                      <span className="bg-teal text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">
                        MOST POPULAR
                      </span>
                    </motion.div>
                  )}
                  
                  <motion.div 
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                      model.highlight ? 'bg-teal-light' : 'bg-white/20'
                    }`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <IconComponent className={`w-7 h-7 ${model.highlight ? 'text-teal-dark' : 'text-teal-light'}`} />
                  </motion.div>
                  
                  <div className="mb-2">
                    <span className={`text-xs font-bold uppercase tracking-wider ${
                      model.highlight ? 'text-teal' : 'text-teal-light'
                    }`}>
                      {model.subtitle}
                    </span>
                  </div>
                  
                  <h3 className={`text-xl font-bold mb-2 ${model.highlight ? 'text-navy' : 'text-white'}`}>
                    {model.title}
                  </h3>
                  
                  <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${
                    model.highlight ? 'bg-sand text-slate' : 'bg-white/10 text-white/90'
                  }`}>
                    {model.duration}
                  </div>
                  
                  <p className={`mb-6 ${model.highlight ? 'text-slate' : 'text-white/70'}`}>
                    {model.description}
                  </p>
                  
                  <div>
                    <div className={`text-sm font-semibold uppercase tracking-wide mb-3 ${
                      model.highlight ? 'text-navy' : 'text-white'
                    }`}>
                      Includes:
                    </div>
                    <ul className="space-y-2">
                      {model.deliverables.map((item, idx) => (
                        <motion.li 
                          key={idx} 
                          className="flex items-start"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * idx }}
                        >
                          <span className={`mr-2 ${model.highlight ? 'text-teal' : 'text-teal-light'}`}>✓</span>
                          <span className={model.highlight ? 'text-slate' : 'text-white/70'}>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <ScrollAnimation delay={0.3} className="text-center mt-16">
          <motion.a 
            href="mailto:momentumedgeconsulting@gmail.com?subject=Engagement Discussion"
            className="inline-flex items-center justify-center font-semibold px-8 py-4 rounded-xl transition-all duration-300 bg-white text-navy hover:bg-teal-light shadow-lg hover:shadow-xl group"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Discuss the Right Engagement for You
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </motion.a>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default EngagementModels;
