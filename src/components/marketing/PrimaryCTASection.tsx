import { motion } from "framer-motion";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton";

interface PrimaryCTASectionProps {
  headline?: string;
  subheadline?: string;
}

const PrimaryCTASection = ({ 
  headline = "Ready to Bring Order, Clarity, and Accountability to Your Organization?",
  subheadline = "Let's build a governance foundation that gives you confidence."
}: PrimaryCTASectionProps) => {
  return (
    <section className="hero-cta-strip py-20 lg:py-28">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 font-heading">
            {headline}
          </h2>
          <p className="text-neutral-300 text-lg mb-10">
            {subheadline}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:momentumedgeconsulting@gmail.com?subject=Strategy Session Request"
              className="cta-teal"
            >
              Schedule a Strategy Session
            </a>
            <a
              href="mailto:momentumedgeconsulting@gmail.com?subject=Governance Assessment Request"
              className="inline-flex items-center justify-center font-semibold px-8 py-4 rounded-lg transition-all duration-300 border-2 border-white text-white hover:bg-white hover:text-brand-navy"
            >
              Request a Governance Assessment
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrimaryCTASection;
