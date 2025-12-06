import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, FileText, GitBranch, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "./ScrollAnimation";

const Hero = () => {
  return (
    <section className="relative hero-home overflow-hidden">
      {/* Subtle grid pattern - adjusted for dark background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsla(178, 50%, 46%, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, hsla(178, 50%, 46%, 0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      {/* Abstract governance shapes - teal on dark */}
      <motion.div 
        className="absolute top-20 right-0 w-96 h-96 opacity-20"
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <rect x="20" y="20" width="60" height="40" rx="4" fill="none" stroke="#3AAFA9" strokeWidth="1.5"/>
          <rect x="120" y="20" width="60" height="40" rx="4" fill="none" stroke="#3AAFA9" strokeWidth="1.5"/>
          <rect x="70" y="100" width="60" height="40" rx="4" fill="none" stroke="#3AAFA9" strokeWidth="1.5"/>
          <line x1="50" y1="60" x2="50" y2="80" stroke="#3AAFA9" strokeWidth="1.5"/>
          <line x1="50" y1="80" x2="100" y2="80" stroke="#3AAFA9" strokeWidth="1.5"/>
          <line x1="100" y1="80" x2="100" y2="100" stroke="#3AAFA9" strokeWidth="1.5"/>
          <line x1="150" y1="60" x2="150" y2="80" stroke="#3AAFA9" strokeWidth="1.5"/>
          <line x1="150" y1="80" x2="100" y2="80" stroke="#3AAFA9" strokeWidth="1.5"/>
          <rect x="20" y="160" width="160" height="30" rx="4" fill="none" stroke="#3AAFA9" strokeWidth="1.5"/>
          <line x1="100" y1="140" x2="100" y2="160" stroke="#3AAFA9" strokeWidth="1.5"/>
        </svg>
      </motion.div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto py-24 lg:py-36">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left content */}
            <div>
              <ScrollAnimation delay={0}>
                <motion.div 
                  className="inline-flex items-center bg-teal/20 text-teal-light px-4 py-2 rounded-full text-sm font-medium mb-8 border border-teal/30"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.span 
                    className="w-2 h-2 bg-teal rounded-full mr-2"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  Governance & Compliance Advisory
                </motion.div>
              </ScrollAnimation>
              
              <ScrollAnimation delay={0.1}>
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-8 leading-tight">
                  Clarity, Structure, and Compliance for{" "}
                  <span className="text-teal">Regulated Organizations</span>
                </h1>
              </ScrollAnimation>
              
              <ScrollAnimation delay={0.2}>
                <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                  Momentum Edge Consulting helps medical practices, utilities, and compliance-driven organizations 
                  design the policies, controls, governance models, and operational processes needed to operate 
                  with confidence and withstand regulatory scrutiny.
                </p>
              </ScrollAnimation>
              
              <ScrollAnimation delay={0.3}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a 
                    href="mailto:momentumedgeconsulting@gmail.com?subject=Governance Assessment Request&body=Hello, I would like to request a governance and compliance assessment."
                    className="cta-primary group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Request a Governance Assessment
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </motion.a>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Link to="/services" className="cta-secondary">
                      Explore How We Work
                    </Link>
                  </motion.div>
                </div>
              </ScrollAnimation>
            </div>

            {/* Right visual - Governance Diagram */}
            <ScrollAnimation variant="slideRight" delay={0.2} className="hidden lg:block">
              <div className="relative">
                {/* Main card */}
                <motion.div 
                  className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <StaggerContainer className="grid grid-cols-3 gap-4 mb-8">
                    {[
                      { icon: FileText, label: "Policies" },
                      { icon: GitBranch, label: "Processes" },
                      { icon: Shield, label: "Governance" }
                    ].map((item, i) => (
                      <StaggerItem key={i}>
                        <motion.div 
                          className="text-center p-4 bg-white/10 rounded-xl border border-white/10"
                          whileHover={{ scale: 1.05, backgroundColor: "rgba(58, 175, 169, 0.2)" }}
                        >
                          <item.icon className="w-8 h-8 text-teal mx-auto mb-2" />
                          <span className="text-xs font-medium text-white/80">{item.label}</span>
                        </motion.div>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                  
                  {/* Flowchart visualization */}
                  <div className="relative h-48">
                    <svg viewBox="0 0 300 150" className="w-full h-full">
                      <motion.rect 
                        x="10" y="55" width="80" height="40" rx="6" 
                        fill="rgba(217, 83, 79, 0.2)" stroke="#D9534F" strokeWidth="1.5"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                      />
                      <motion.text 
                        x="50" y="80" textAnchor="middle" className="text-xs" fill="#D9534F" fontWeight="500"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                      >Chaos</motion.text>
                      
                      <motion.line 
                        x1="95" y1="75" x2="125" y2="75" stroke="#3AAFA9" strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ delay: 0.7, duration: 0.4 }}
                      />
                      
                      <motion.rect 
                        x="130" y="45" width="80" height="60" rx="6" 
                        fill="rgba(58, 175, 169, 0.2)" stroke="#3AAFA9" strokeWidth="2"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 }}
                      />
                      <motion.text 
                        x="170" y="70" textAnchor="middle" className="text-xs" fill="#3AAFA9" fontWeight="600"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9 }}
                      >MEC</motion.text>
                      <motion.text 
                        x="170" y="90" textAnchor="middle" className="text-[10px]" fill="#3AAFA9"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                      >Advisory</motion.text>
                      
                      <motion.line 
                        x1="215" y1="75" x2="245" y2="75" stroke="#3AAFA9" strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ delay: 1.1, duration: 0.4 }}
                      />
                      
                      <motion.rect 
                        x="250" y="55" width="80" height="40" rx="6" 
                        fill="rgba(58, 175, 169, 0.3)" stroke="#2F918E" strokeWidth="1.5"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.2 }}
                      />
                      <motion.text 
                        x="290" y="80" textAnchor="middle" className="text-xs" fill="#DEF2F1" fontWeight="500"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.3 }}
                      >Clarity</motion.text>
                    </svg>
                  </div>
                </motion.div>
                
                {/* Floating accent elements */}
                <motion.div 
                  className="absolute -top-4 -right-4 w-24 h-24 bg-teal/30 rounded-full"
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div 
                  className="absolute -bottom-6 -left-6 w-32 h-32 bg-white/10 rounded-full"
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
