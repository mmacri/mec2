import { motion } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";

const FounderBioCard = () => {
  return (
    <motion.div
      className="bg-white rounded-xl border border-neutral-300 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="lg:flex">
        <div className="lg:w-1/3 bg-brand-soft-teal p-8 flex flex-col items-center justify-center">
          <div className="w-24 h-24 rounded-full bg-brand-navy flex items-center justify-center mb-4">
            <span className="text-4xl font-bold text-white font-heading">MM</span>
          </div>
          <h3 className="text-xl font-bold text-brand-navy text-center font-heading">Mike Macri</h3>
          <p className="text-neutral-600 text-center">Founder & Principal Consultant</p>
          <p className="text-brand-teal text-sm text-center mt-1">Momentum Edge Consulting</p>
          
          <div className="flex gap-4 mt-6">
            <a
              href="mailto:momentumedgeconsulting@gmail.com"
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brand-teal hover:bg-brand-teal hover:text-white transition-colors"
              aria-label="Email Mike"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brand-teal hover:bg-brand-teal hover:text-white transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="lg:w-2/3 p-8">
          <h4 className="text-lg font-semibold text-brand-navy mb-4 font-heading">
            Experience That Brings Structure to Complex Environments
          </h4>
          <p className="text-neutral-700 mb-4 leading-relaxed">
            Mike Macri brings deep experience across healthcare, utilities, governance, 
            and compliance-driven environments. His background spans policy and control design, 
            process and workflow development, staffing and responsibility modeling, and IT 
            governance advisory.
          </p>
          <p className="text-neutral-700 mb-6 leading-relaxed">
            Before founding Momentum Edge Consulting, Mike worked with organizations facing 
            complex operational and regulatory challenges — helping them move from ambiguity 
            to clarity, from reactive compliance to sustainable governance structures.
          </p>
          
          <div className="border-t border-neutral-200 pt-6">
            <h5 className="text-sm font-semibold text-neutral-500 uppercase mb-3">Areas of Expertise</h5>
            <div className="flex flex-wrap gap-2">
              {[
                "Healthcare Operations",
                "Utilities & Infrastructure",
                "Governance Design",
                "Policy & Control Development",
                "Process & Workflow Design",
                "IT Governance"
              ].map((skill, index) => (
                <span key={index} className="tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FounderBioCard;
