import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Stethoscope, Zap, Building, ArrowRight } from "lucide-react";

const industries = [
  {
    icon: Stethoscope,
    title: "Doctor's Offices & Medical Practices",
    description: "Reduce chaos, improve handoffs, and put structure behind workflows, responsibilities, and documentation.",
    link: "/industries#medical",
    cta: "View Healthcare Solutions"
  },
  {
    icon: Zap,
    title: "Utilities & Critical Infrastructure",
    description: "Strengthen governance, tighten control ownership, and improve operational consistency across IT and operations.",
    link: "/industries#utilities",
    cta: "View Utility Solutions"
  },
  {
    icon: Building,
    title: "Compliance-Driven Firms",
    description: "Build repeatable processes, clear roles, and practical controls that support everyday operations.",
    link: "/industries#compliance",
    cta: "View Compliance Solutions"
  }
];

const WhoWeHelpSection = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-8">
      {industries.map((industry, index) => (
        <motion.div
          key={index}
          className="card-professional h-full flex flex-col"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ y: -4 }}
        >
          <div className="icon-container mb-6">
            <industry.icon className="w-6 h-6 text-brand-teal" />
          </div>
          
          <h3 className="text-xl font-semibold text-brand-navy mb-3 font-heading">
            {industry.title}
          </h3>
          
          <p className="text-neutral-700 mb-6 flex-grow">
            {industry.description}
          </p>
          
          <Link
            to={industry.link}
            className="inline-flex items-center gap-2 text-brand-teal font-medium hover:text-brand-teal-dark transition-colors"
          >
            {industry.cta}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default WhoWeHelpSection;
