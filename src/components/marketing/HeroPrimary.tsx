import { motion } from "framer-motion";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton";

const HeroPrimary = () => {
  return (
    <section className="hero-home min-h-[85vh] flex items-center relative overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 pattern-dots opacity-50" />
      
      <div className="container mx-auto px-6 py-20 lg:py-28 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-brand-navy mb-6 leading-tight font-heading">
              Clarity, Structure, and Compliance for Regulated Organizations
            </h1>
          </motion.div>
          
          <motion.p
            className="text-lg lg:text-xl text-neutral-700 mb-10 leading-relaxed max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            We help medical practices, utilities, and compliance-driven firms design the policies, 
            controls, governance structures, and operational processes needed to operate confidently 
            and pass audits without surprises.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <PrimaryButton href="mailto:momentumedgeconsulting@gmail.com?subject=Strategy Session Request">
              Schedule a Strategy Session
            </PrimaryButton>
            <SecondaryButton to="/services">
              Explore How We Work
            </SecondaryButton>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-brand-teal/10 rounded-full blur-3xl" />
      <div className="absolute right-20 bottom-1/4 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl" />
    </section>
  );
};

export default HeroPrimary;
