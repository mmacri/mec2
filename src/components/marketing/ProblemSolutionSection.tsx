import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle } from "lucide-react";

interface Problem {
  text: string;
}

interface Solution {
  text: string;
}

interface ProblemSolutionSectionProps {
  problems: Problem[];
  solutions: Solution[];
  industryContext?: string;
}

const ProblemSolutionSection = ({ problems, solutions, industryContext }: ProblemSolutionSectionProps) => {
  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Problems */}
      <motion.div
        className="bg-white rounded-xl border border-neutral-300 p-8"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center">
            <AlertTriangle className="w-5 h-5 text-red-500" />
          </div>
          <h3 className="text-xl font-semibold text-brand-navy font-heading">Common Pain Points</h3>
        </div>
        
        {industryContext && (
          <p className="text-neutral-500 text-sm mb-4">{industryContext}</p>
        )}
        
        <ul className="space-y-3">
          {problems.map((problem, index) => (
            <li key={index} className="flex items-start gap-3 text-neutral-700">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
              {problem.text}
            </li>
          ))}
        </ul>
      </motion.div>
      
      {/* Solutions */}
      <motion.div
        className="bg-brand-soft-teal rounded-xl border border-brand-teal/20 p-8"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-brand-teal/10 flex items-center justify-center">
            <CheckCircle className="w-5 h-5 text-brand-teal" />
          </div>
          <h3 className="text-xl font-semibold text-brand-navy font-heading">How We Help</h3>
        </div>
        
        <ul className="space-y-3">
          {solutions.map((solution, index) => (
            <li key={index} className="flex items-start gap-3 text-neutral-700">
              <CheckCircle className="w-5 h-5 text-brand-teal mt-0.5 flex-shrink-0" />
              {solution.text}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default ProblemSolutionSection;
