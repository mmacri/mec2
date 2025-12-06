import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const personas = [
  {
    title: "Practice Manager or Medical Director",
    description: "Bring consistency to patient intake, staff workflow, compliance documentation, and operational processes.",
    link: "/industries#medical",
    cta: "Solutions for Medical Practices"
  },
  {
    title: "Utility or Operations Leader",
    description: "Improve governance alignment, control ownership, process consistency, and readiness for oversight or inspections.",
    link: "/industries#utilities",
    cta: "Solutions for Utilities"
  },
  {
    title: "Compliance, Risk, or Security Lead",
    description: "Establish frameworks, control catalogs, workflows, and role clarity that reduce last-minute firefighting.",
    link: "/industries#compliance",
    cta: "Solutions for Compliance Teams"
  }
];

const PersonaRoutingSection = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title mb-4">If you're a...</h2>
        <p className="section-subtitle">Find the right solutions for your role</p>
      </motion.div>

      <div className="space-y-6">
        {personas.map((persona, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl border border-neutral-300 p-6 lg:p-8 hover:border-brand-teal/30 hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="lg:flex lg:items-center lg:justify-between gap-6">
              <div className="mb-4 lg:mb-0">
                <h3 className="text-xl font-semibold text-brand-navy mb-2 font-heading">
                  {persona.title}
                </h3>
                <p className="text-neutral-700">{persona.description}</p>
              </div>
              <Link
                to={persona.link}
                className="inline-flex items-center gap-2 text-brand-teal font-medium hover:text-brand-teal-dark transition-colors whitespace-nowrap"
              >
                {persona.cta}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PersonaRoutingSection;
