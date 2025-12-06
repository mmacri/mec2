import { motion } from "framer-motion";
import { Search, Map, PenTool, Rocket, RefreshCw } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Discovery & Baseline Assessment",
    description: "We assess your current policies, controls, roles, and workflows to understand where you are today."
  },
  {
    icon: Map,
    number: "02",
    title: "Gap Map & Risk Priorities",
    description: "We identify gaps, risks, and quick wins — prioritizing what matters most for compliance and operations."
  },
  {
    icon: PenTool,
    number: "03",
    title: "Design & Alignment",
    description: "We design policies, controls, governance structures, and workflows — aligned to your industry and team."
  },
  {
    icon: Rocket,
    number: "04",
    title: "Implementation & Training",
    description: "We roll out changes with your team, ensuring everyone understands their responsibilities."
  },
  {
    icon: RefreshCw,
    number: "05",
    title: "Ongoing Governance & Optimization",
    description: "We help you sustain and improve your governance posture over time through reviews and updates."
  }
];

const ApproachTimeline = () => {
  return (
    <div className="relative">
      {/* Timeline line - desktop only */}
      <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-neutral-300 -translate-x-1/2" />
      
      <div className="space-y-12 lg:space-y-0">
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            className={`relative lg:flex lg:items-center lg:gap-12 ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Content */}
            <div className={`lg:w-5/12 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
              <div className={`bg-white rounded-xl border border-neutral-300 p-6 ${
                index % 2 === 0 ? "lg:mr-0" : "lg:ml-0"
              }`}>
                <div className={`flex items-center gap-4 mb-4 ${
                  index % 2 === 0 ? "lg:flex-row-reverse" : ""
                }`}>
                  <div className="icon-container">
                    <step.icon className="w-5 h-5 text-brand-teal" />
                  </div>
                  <span className="text-brand-gold font-bold text-lg">{step.number}</span>
                </div>
                <h3 className={`text-lg font-semibold text-brand-navy mb-2 ${
                  index % 2 === 0 ? "lg:text-right" : "lg:text-left"
                }`}>
                  {step.title}
                </h3>
                <p className={`text-neutral-700 text-sm ${
                  index % 2 === 0 ? "lg:text-right" : "lg:text-left"
                }`}>
                  {step.description}
                </p>
              </div>
            </div>
            
            {/* Center dot - desktop only */}
            <div className="hidden lg:flex lg:w-2/12 justify-center">
              <div className="w-4 h-4 rounded-full bg-brand-teal border-4 border-white shadow-md" />
            </div>
            
            {/* Spacer */}
            <div className="hidden lg:block lg:w-5/12" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ApproachTimeline;
