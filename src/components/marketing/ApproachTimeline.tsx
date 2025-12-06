import { motion } from "framer-motion";
import { Search, PenTool, Users, RefreshCw } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Discovery & Mapping",
    description: "Understand policies, workflows, systems, and current pain points"
  },
  {
    icon: PenTool,
    number: "02",
    title: "Design What Will Work",
    description: "Design roles, processes, controls, and documentation that match operations"
  },
  {
    icon: Users,
    number: "03",
    title: "Align & Train",
    description: "Help teams adopt the new structure through training, clarity, and documentation"
  },
  {
    icon: RefreshCw,
    number: "04",
    title: "Sustain & Improve",
    description: "Optional ongoing support for evolving requirements"
  }
];

const ApproachTimeline = () => {
  return (
    <div className="relative">
      {/* Desktop timeline line */}
      <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-brand-teal/20 -translate-y-1/2" />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
          >
            {/* Desktop dot */}
            <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-brand-teal border-4 border-white shadow-md z-10" />
            
            <div className="bg-white rounded-xl p-6 border border-neutral-300 hover:border-brand-teal/30 hover:shadow-lg transition-all duration-300 h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-brand-soft-teal flex items-center justify-center">
                  <step.icon className="w-6 h-6 text-brand-teal" />
                </div>
                <span className="text-2xl font-bold text-brand-teal font-heading">{step.number}</span>
              </div>
              
              <h3 className="text-lg font-semibold text-brand-navy mb-2 font-heading">
                {step.title}
              </h3>
              <p className="text-neutral-700 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ApproachTimeline;
