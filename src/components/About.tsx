import { CheckCircle, Target, Eye, Handshake, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "./ScrollAnimation";

const About = () => {
  const differentiators = [
    "We combine compliance, governance, IT, and operational process design — most consultants only do one.",
    "We work at the human level, helping real people adopt processes that fit their daily work.",
    "We speak the languages of medical offices, utilities, and regulated enterprises.",
    "We turn complex requirements into clear, usable structures."
  ];

  const values = [
    { icon: Eye, title: "Clarity", description: "Making the complex understandable" },
    { icon: Target, title: "Practicality", description: "Solutions that work in the real world" },
    { icon: Handshake, title: "Trust", description: "Building lasting partnerships" },
    { icon: Shield, title: "Accountability", description: "Taking ownership of outcomes" }
  ];

  const highlights = [
    "Policy and control design",
    "Governance frameworks",
    "IT operational maturity",
    "Staffing and responsibility modeling",
    "Audit readiness for regulated environments"
  ];

  return (
    <section className="section-padding">
      {/* Hero Section */}
      <div className="hero-about py-16 mb-16 relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, hsl(var(--slate)) 0, hsl(var(--slate)) 1px, transparent 0, transparent 50%)`,
            backgroundSize: '20px 20px'
          }}></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <ScrollAnimation className="text-center">
              <h2 className="section-title mb-6">
                Bringing Structure, Clarity, and Governance to Organizations That Need It Most
              </h2>
              <p className="section-subtitle">
                Momentum Edge Consulting was founded to help organizations operate with clarity, structure, 
                and confidence in environments where ambiguity is costly — and regulators expect discipline.
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">

          {/* Two column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            {/* About content */}
            <ScrollAnimation variant="slideLeft">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                About MEC
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Momentum Edge Consulting is a business technology and governance advisory firm with deep experience 
                in compliance-driven industries. Our work spans healthcare, utilities, and enterprise IT, 
                bringing clarity to complex environments.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                We specialize in transforming chaotic or ambiguous operational environments into well-structured, 
                compliant organizations that can confidently face any audit or regulatory review.
              </p>
              
              <div className="space-y-3">
                {highlights.map((highlight, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="w-5 h-5 text-teal mr-3 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </ScrollAnimation>

            {/* What makes us different */}
            <ScrollAnimation variant="slideRight" delay={0.2}>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                What Makes Us Different
              </h3>
              <StaggerContainer className="space-y-4" staggerDelay={0.1}>
                {differentiators.map((item, index) => (
                  <StaggerItem key={index}>
                    <motion.div 
                      className="bg-sand border border-border rounded-xl p-5"
                      whileHover={{ x: 5, backgroundColor: "hsl(var(--teal-light))", borderColor: "hsl(var(--teal))" }}
                      transition={{ duration: 0.2 }}
                    >
                      <p className="text-slate leading-relaxed">{item}</p>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </ScrollAnimation>
          </div>

          {/* Values */}
          <ScrollAnimation delay={0.2}>
            <h3 className="text-2xl font-bold text-slate-900 text-center mb-10">
              Our Values
            </h3>
            <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <StaggerItem key={index}>
                    <motion.div 
                      className="text-center"
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div 
                        className="w-14 h-14 rounded-2xl bg-teal-light flex items-center justify-center mx-auto mb-4"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <IconComponent className="w-7 h-7 text-teal-dark" />
                      </motion.div>
                      <h4 className="font-semibold text-navy mb-1">{value.title}</h4>
                      <p className="text-sm text-slate">{value.description}</p>
                    </motion.div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default About;
