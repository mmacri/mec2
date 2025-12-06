import { motion } from "framer-motion";

const caseStudies = [
  {
    industry: "Healthcare",
    type: "Medical Group (Regional)",
    challenge: "Inconsistent documentation and unclear responsibilities across clinical and administrative staff.",
    result: "Unified policies, clear handoffs, and workflows that reduced operational confusion and compliance risk."
  },
  {
    industry: "Utilities",
    type: "Electric Utility",
    challenge: "Fragmented control ownership and inconsistent governance practices.",
    result: "Mapped roles and controls, improved coordination between IT/OT, and reduced regulatory exposure."
  },
  {
    industry: "Compliance",
    type: "Compliance-Driven SaaS Firm",
    challenge: "Spreadsheets, unclear responsibilities, and reactive compliance posture.",
    result: "Consolidated control library, responsibility model, and predictable compliance workflow."
  }
];

const CaseSnippetGrid = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-8">
      {caseStudies.map((study, index) => (
        <motion.div
          key={index}
          className="bg-white rounded-xl border border-neutral-300 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="bg-brand-soft-teal px-6 py-4 border-b border-neutral-200">
            <div className="flex items-center justify-between">
              <span className="tag">{study.industry}</span>
              <span className="text-sm text-neutral-600">{study.type}</span>
            </div>
          </div>
          
          <div className="p-6 space-y-4">
            <div>
              <h4 className="text-sm font-semibold text-neutral-500 uppercase mb-2">Challenge</h4>
              <p className="text-neutral-700 text-sm">{study.challenge}</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-neutral-500 uppercase mb-2">Result</h4>
              <p className="text-brand-teal font-medium text-sm">{study.result}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default CaseSnippetGrid;
