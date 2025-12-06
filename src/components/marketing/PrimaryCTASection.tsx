import { motion } from "framer-motion";

interface PrimaryCTASectionProps {
  headline?: string;
  subheadline?: string;
}

const PrimaryCTASection = ({ 
  headline = "Ready to bring clarity, consistency, and structure to your organization?",
  subheadline = "Let's discuss how we can help."
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
              href="mailto:momentumedgeconsulting@gmail.com?subject=Strategy Call Request"
              className="cta-teal"
            >
              Schedule a Strategy Call
            </a>
            <a
              href="mailto:momentumedgeconsulting@gmail.com?subject=Process & Governance Review Request"
              className="inline-flex items-center justify-center font-semibold px-8 py-4 rounded-lg transition-all duration-300 border-2 border-white text-white hover:bg-white hover:text-brand-navy"
            >
              Request a Process & Governance Review
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrimaryCTASection;
