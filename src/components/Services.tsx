import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, GitBranch, Users, ClipboardCheck, Monitor } from "lucide-react";

const Services = () => {
  const services = [
    {
      id: "policy",
      title: "Policy & Control Development",
      description: "We create policies and controls that reflect the way your organization actually works — not templates copied from the internet.",
      icon: FileText,
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      deliverables: [
        "Policies in plain language",
        "Control catalogs with owners, frequency, evidence expectations",
        "Mapping to regulatory or operational frameworks"
      ]
    },
    {
      id: "governance",
      title: "Governance & Process Design",
      description: "Organizations need more than documents — they need structure.",
      icon: GitBranch,
      color: "text-teal-500",
      bgColor: "bg-teal-50",
      deliverables: [
        "Process flows",
        "Standard Operating Procedures (SOPs)",
        "RACI charts",
        "Committee structures",
        "Decision-rights definitions"
      ]
    },
    {
      id: "staffing",
      title: "Staffing & Responsibility Modeling",
      description: "Clarifying who does what eliminates risk and frustration.",
      icon: Users,
      color: "text-purple-500",
      bgColor: "bg-purple-50",
      deliverables: [
        "Role definitions",
        "RACI models",
        "Gap and overlap analysis",
        "Responsibility alignment matrix"
      ]
    },
    {
      id: "compliance",
      title: "Compliance & Audit Readiness",
      description: "We prepare your organization for any regulatory review.",
      icon: ClipboardCheck,
      color: "text-orange-500",
      bgColor: "bg-orange-50",
      deliverables: [
        "Evidence plans",
        "Maturity assessments",
        "Audit packets",
        "Remediation plans",
        "Mock audit sessions"
      ]
    },
    {
      id: "it-governance",
      title: "IT Governance & Advisory",
      description: "Technology governance for small and mid-size regulated organizations.",
      icon: Monitor,
      color: "text-indigo-500",
      bgColor: "bg-indigo-50",
      deliverables: [
        "Access and change governance",
        "System responsibility structures",
        "Technology process documentation",
        "IT roadmap alignment"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-8 heading-enhanced">
            Our Services
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
            We help regulated organizations build the policies, controls, governance structures, 
            and operational processes they need to operate with confidence.
          </p>
        </div>

        <div className="space-y-8 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                id={service.id}
                className="feature-card group overflow-hidden"
              >
                <div className="flex flex-col lg:flex-row">
                  <div className={`${service.bgColor} p-8 lg:w-1/3 flex flex-col items-center justify-center`}>
                    <div className={`${service.color} mb-4`}>
                      <IconComponent size={64} className="group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <CardTitle className="text-xl text-slate-900 text-center font-semibold group-hover:text-teal-600 transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                  </div>
                  <div className="p-8 lg:w-2/3">
                    <CardDescription className="text-gray-700 font-medium leading-relaxed text-lg mb-6">
                      {service.description}
                    </CardDescription>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-4">Deliverables:</h4>
                      <ul className="space-y-2">
                        {service.deliverables.map((deliverable, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-teal-500 mr-3 mt-1 font-bold">✓</span>
                            <span className="text-gray-600 font-medium">{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <div className="bg-slate-900 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Bring Clarity to Your Organization?</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Request a governance and compliance assessment to identify opportunities for improvement 
              and create a roadmap for operational confidence.
            </p>
            <a 
              href="mailto:momentumedgeconsulting@gmail.com?subject=Governance %26 Compliance Assessment Request&body=Hello, I would like to request a governance and compliance assessment."
              className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-semibold text-lg px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg inline-flex items-center justify-center"
              style={{ boxShadow: '0 8px 24px rgba(20, 184, 166, 0.4)' }}
            >
              Request an Assessment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
