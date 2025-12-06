import { FileText, GitBranch, Users, ClipboardCheck, Monitor } from "lucide-react";

const WhatWeDo = () => {
  const services = [
    {
      icon: FileText,
      title: "Policy & Control Development",
      description: "Practical, plain-language policies and controls that people understand — and auditors trust."
    },
    {
      icon: GitBranch,
      title: "Governance & Process Design",
      description: "Clear decision rights, workflows, RACI charts, and committee structures that stabilize operations."
    },
    {
      icon: Users,
      title: "Staffing & Responsibility Modeling",
      description: "Define who does what, eliminate overlaps, remove gaps, and align work with regulatory expectations."
    },
    {
      icon: ClipboardCheck,
      title: "Compliance & Audit Readiness",
      description: "Evidence plans, maturity assessments, documentation cleanup, mock audits, and readiness reviews."
    },
    {
      icon: Monitor,
      title: "IT Governance Advisory",
      description: "Practical guidance on IT processes, system responsibilities, access governance, and operational alignment."
    }
  ];

  return (
    <section className="section-padding bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="section-title">
            What We Do
          </h2>
          <p className="section-subtitle">
            Five core services designed to bring clarity and operational confidence to your organization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className={`card-professional group animate-fade-up ${index === 4 ? 'lg:col-start-2' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="icon-container bg-teal-50 group-hover:bg-teal-100 mb-6 transition-colors">
                  <IconComponent className="w-7 h-7 text-teal-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-teal-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
