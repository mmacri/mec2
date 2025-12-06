import { motion } from "framer-motion";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton";
import { Link } from "react-router-dom";
import { Stethoscope, Zap, Building } from "lucide-react";

const targetAudiences = [
  { icon: Stethoscope, label: "Medical Practices", path: "/industries#medical" },
  { icon: Zap, label: "Utilities", path: "/industries#utilities" },
  { icon: Building, label: "Compliance-Driven Firms", path: "/industries#compliance" }
];

const HeroPrimary = () => {
  return (
    <section className="hero-home min-h-[85vh] flex items-center relative overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 pattern-dots opacity-50" />
      
      <div className="container mx-auto px-6 py-20 lg:py-28 relative z-10">
        <div className="max-w-4xl">
          {/* Target audience chips */}
          <motion.div
            className="flex flex-wrap gap-2 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {targetAudiences.map((audience, index) => (
              <Link
                key={index}
                to={audience.path}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-neutral-200 rounded-full text-sm text-neutral-700 hover:border-brand-teal hover:text-brand-teal transition-colors"
              >
                <audience.icon className="w-4 h-4" />
                {audience.label}
              </Link>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-brand-navy mb-6 leading-tight font-heading">
              Audit-Ready Policies & Governance for Regulated Organizations
            </h1>
          </motion.div>
          
          <motion.p
            className="text-lg lg:text-xl text-neutral-700 mb-8 leading-relaxed max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We help medical practices, utilities, and compliance-driven firms design clear policies, 
            controls, and governance structures — so you can <strong>operate with confidence</strong> and 
            <strong> pass audits without surprises</strong>.
          </motion.p>

          {/* Value proposition chips */}
          <motion.div
            className="flex flex-wrap gap-3 mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <span className="px-4 py-2 bg-brand-soft-teal text-brand-teal text-sm font-medium rounded-lg">
              ✓ Clear Policies
            </span>
            <span className="px-4 py-2 bg-brand-soft-teal text-brand-teal text-sm font-medium rounded-lg">
              ✓ Defined Roles
            </span>
            <span className="px-4 py-2 bg-brand-soft-teal text-brand-teal text-sm font-medium rounded-lg">
              ✓ Audit Confidence
            </span>
            <span className="px-4 py-2 bg-brand-soft-teal text-brand-teal text-sm font-medium rounded-lg">
              ✓ Sustainable Compliance
            </span>
          </motion.div>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <PrimaryButton href="mailto:momentumedgeconsulting@gmail.com?subject=Free Governance Assessment Request">
              Request Free Assessment
            </PrimaryButton>
            <SecondaryButton to="/approach">
              See How We Work
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
