import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const audienceChips = [
  { label: "For Doctor's Offices", href: "/industries#medical" },
  { label: "For Utilities & Critical Infrastructure", href: "/industries#utilities" },
  { label: "For Compliance & Risk Teams", href: "/industries#compliance" }
];

const HeroPrimary = () => {
  return (
    <section className="hero-home py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 pattern-dots opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Audience Chips */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {audienceChips.map((chip, index) => (
              <Link
                key={index}
                to={chip.href}
                className="tag hover:bg-brand-teal hover:text-white transition-colors cursor-pointer"
              >
                {chip.label}
              </Link>
            ))}
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-4xl lg:text-5xl xl:text-6xl font-bold text-brand-navy mb-6 font-heading leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Clarity, consistency, and confident operations for regulated teams
          </motion.h1>
          
          {/* Subheadline */}
          <motion.p
            className="text-lg lg:text-xl text-neutral-700 leading-relaxed mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Momentum Edge Consulting helps doctor's offices, utilities, and compliance-driven 
            organizations put structure around policies, workflows, controls, and responsibilities 
            so teams can operate smoothly and confidently.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a
              href="mailto:momentumedgeconsulting@gmail.com?subject=Strategy Call Request"
              className="cta-primary"
            >
              Schedule a Strategy Call
            </a>
            <Link
              to="/industries"
              className="cta-secondary"
            >
              See Solutions for Your Industry
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroPrimary;
