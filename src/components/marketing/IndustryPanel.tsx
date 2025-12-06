import { ReactNode } from "react";
import { motion } from "framer-motion";
import { LucideIcon, CheckCircle } from "lucide-react";

interface IndustryPanelProps {
  icon: LucideIcon;
  title: string;
  description: string;
  solutions: string[];
}

const IndustryPanel = ({ icon: Icon, title, description, solutions }: IndustryPanelProps) => {
  return (
    <motion.div
      className="bg-white rounded-xl border border-neutral-300 overflow-hidden h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-brand-soft-teal p-6 border-b border-neutral-300">
        <div className="flex items-center gap-4">
          <div className="icon-container">
            <Icon className="w-6 h-6 text-brand-teal" />
          </div>
          <h3 className="text-xl font-semibold text-brand-navy">{title}</h3>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-neutral-700 mb-6">{description}</p>
        
        <ul className="space-y-3">
          {solutions.map((solution, index) => (
            <li key={index} className="flex items-start gap-3 text-neutral-700">
              <CheckCircle className="w-5 h-5 text-brand-teal mt-0.5 flex-shrink-0" />
              <span>{solution}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default IndustryPanel;
