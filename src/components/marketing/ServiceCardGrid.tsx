import { motion } from "framer-motion";
import { FileText, Settings, Users, ClipboardCheck, Monitor } from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Policy & Control Design",
    bullets: [
      "Policies written for real teams",
      "Clear control objectives",
      "Evidence expectations built-in"
    ]
  },
  {
    icon: Settings,
    title: "Workflow & Process Design",
    bullets: [
      "SOPs aligned to daily operations",
      "Handoff mapping",
      "Repeatable, scalable workflows"
    ]
  },
  {
    icon: Users,
    title: "Staffing & Responsibility Modeling",
    bullets: [
      "RACI design",
      "Ownership clarity",
      "Role definition that matches real needs"
    ]
  },
  {
    icon: ClipboardCheck,
    title: "Compliance & Readiness Support",
    bullets: [
      "Gap analysis",
      "Documentation cleanup",
      "Preparation for audits or inspections"
    ]
  },
  {
    icon: Monitor,
    title: "Operational IT Governance",
    bullets: [
      "Decision rights",
      "Change oversight",
      "Governance alignment across teams"
    ]
  }
];

const ServiceCardGrid = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service, index) => (
        <motion.div
          key={index}
          className="card-professional h-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ y: -4 }}
        >
          <div className="icon-container mb-6">
            <service.icon className="w-6 h-6 text-brand-teal" />
          </div>
          
          <h3 className="text-xl font-semibold text-brand-navy mb-4 font-heading">
            {service.title}
          </h3>
          
          <ul className="space-y-2">
            {service.bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-neutral-700">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-teal mt-2 flex-shrink-0" />
                {bullet}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
};

export default ServiceCardGrid;
