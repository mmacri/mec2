import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { ScrollAnimation } from "./ScrollAnimation";

const HomeCTA = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-slate-50 via-teal-50/30 to-white relative overflow-hidden">
      {/* Animated abstract shapes */}
      <motion.div 
        className="absolute top-0 right-0 w-72 h-72 bg-teal-100 rounded-full opacity-30 blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 20, 0],
          y: [0, -20, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-96 h-96 bg-slate-100 rounded-full opacity-50 blur-3xl"
        animate={{ 
          scale: [1, 1.1, 1],
          x: [0, -20, 0],
          y: [0, 20, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <ScrollAnimation variant="scale" className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
            Ready to Bring Clarity and Confidence to Your Organization?
          </h2>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Every regulated organization can operate with confidence. Let's discuss how we can help you achieve operational clarity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a 
              href="mailto:momentumedgeconsulting@gmail.com?subject=Governance Assessment Request&body=Hello, I would like to request a governance and compliance assessment."
              className="cta-primary group"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Request an Assessment
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </motion.a>
            <motion.a 
              href="mailto:momentumedgeconsulting@gmail.com?subject=Advisory Discussion&body=Hello, I would like to speak with an advisor about my organization's governance needs."
              className="cta-secondary"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Talk to an Advisor
            </motion.a>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default HomeCTA;
