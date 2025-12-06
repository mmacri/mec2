import { Search, Layers, UserCheck, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "./ScrollAnimation";

const HowWeWork = () => {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Baseline & Discovery",
      description: "We observe how your organization actually operates and identify the gaps that matter."
    },
    {
      number: "02",
      icon: Layers,
      title: "Structure & Design",
      description: "Policies, controls, roles, processes, committees, evidence practices — built around your exact needs."
    },
    {
      number: "03",
      icon: UserCheck,
      title: "Implement & Train",
      description: "We work directly with staff to adopt new workflows and expectations."
    },
    {
      number: "04",
      icon: RefreshCw,
      title: "Sustain & Improve",
      description: "Quarterly reviews, audit prep, evidence guidance, and ongoing advisory."
    }
  ];

  return (
    <section className="section-padding bg-navy relative overflow-hidden">
      {/* Animated background pattern */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 30, repeat: Infinity, repeatType: "reverse" }}
      >
        <svg width="100%" height="100%">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#3AAFA9" strokeWidth="0.5"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </motion.div>
      
      {/* Teal overlay */}
      <div className="absolute inset-0 bg-teal/5 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <ScrollAnimation className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            How We Work
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Our proven methodology ensures sustainable results and lasting operational clarity.
          </p>
        </ScrollAnimation>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto" staggerDelay={0.12}>
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <StaggerItem key={index}>
                <motion.div 
                  className="relative h-full"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:border-teal/30 transition-all duration-300 h-full">
                    <motion.div 
                      className="text-teal text-sm font-bold tracking-widest mb-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      STEP {step.number}
                    </motion.div>
                    <motion.div 
                      className="w-12 h-12 rounded-xl bg-teal/20 flex items-center justify-center mb-5"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                    >
                      <IconComponent className="w-6 h-6 text-teal" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Connector line */}
                  {index < 3 && (
                    <motion.div 
                      className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-teal/50 to-transparent"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ delay: 0.5 + index * 0.15, duration: 0.4 }}
                    />
                  )}
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default HowWeWork;
