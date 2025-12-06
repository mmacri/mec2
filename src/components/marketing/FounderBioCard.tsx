import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";

const FounderBioCard = () => {
  return (
    <motion.div
      className="bg-white rounded-xl border border-neutral-300 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="lg:flex">
        <div className="lg:w-1/3 bg-brand-soft-teal p-8 flex items-center justify-center">
          <div className="w-32 h-32 rounded-full bg-brand-navy flex items-center justify-center">
            <span className="text-4xl font-bold text-white font-heading">ME</span>
          </div>
        </div>
        
        <div className="lg:w-2/3 p-8">
          <span className="tag mb-4 inline-block">Founder & Principal</span>
          <h3 className="text-2xl font-semibold text-brand-navy mb-2 font-heading">Mike</h3>
          <p className="text-brand-teal font-medium mb-4">Momentum Edge Consulting</p>
          
          <p className="text-neutral-700 mb-6 leading-relaxed">
            A strategist with deep experience in utilities, healthcare, ServiceNow, VMware, 
            and organizational clarity. Expert in developing policies, controls, governance 
            structures, responsibilities, IT alignment, and audit readiness for regulated organizations.
          </p>
          
          <div className="flex gap-4">
            <a 
              href="mailto:momentumedgeconsulting@gmail.com"
              className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center hover:bg-brand-soft-teal transition-colors"
            >
              <Mail className="w-5 h-5 text-brand-navy" />
            </a>
            <a 
              href="#"
              className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center hover:bg-brand-soft-teal transition-colors"
            >
              <Linkedin className="w-5 h-5 text-brand-navy" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FounderBioCard;
