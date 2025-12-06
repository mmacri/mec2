import { motion } from "framer-motion";

const HeroServices = () => {
  return (
    <section className="hero-services py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 pattern-dots opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-brand-navy mb-6 font-heading">
              Services Built for Real-World Operations
            </h1>
          </motion.div>
          
          <motion.p
            className="text-lg lg:text-xl text-neutral-700 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Governance, policies, and controls designed for how your organization 
            actually works — not how a template says it should.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default HeroServices;
