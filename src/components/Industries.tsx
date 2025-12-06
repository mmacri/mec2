import { Hospital, Zap, Building2, ArrowRight } from "lucide-react";

const Industries = () => {
  const industries = [
    {
      icon: Hospital,
      title: "Medical Practices",
      subtitle: "Healthcare Groups & Dental Offices",
      image: "linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%)",
      painPoints: [
        "Policies outdated or missing",
        "Roles and responsibilities unclear",
        "Front office chaos",
        "Audits and inspections looming",
        "Documentation weak"
      ],
      solutions: [
        "Written policies tailored to practice operations",
        "Clear workflows and staff responsibilities",
        "Controls around patient data and HIPAA",
        "Governance accountability structures"
      ],
      cta: "Book a Practice Assessment"
    },
    {
      icon: Zap,
      title: "Utilities & Critical Infrastructure",
      subtitle: "Power, Water & Essential Services",
      image: "linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)",
      painPoints: [
        "Governance and controls inconsistent",
        "Audit gaps and findings",
        "Documentation not aligned with reality",
        "Operational ambiguity"
      ],
      solutions: [
        "Governance frameworks for regulated utilities",
        "Control design and evidence processes",
        "Process documentation and training",
        "Comprehensive audit preparation"
      ],
      cta: "Request a Utility Governance Review"
    },
    {
      icon: Building2,
      title: "Compliance-Driven Firms",
      subtitle: "Professional & Growing Organizations",
      image: "linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)",
      painPoints: [
        "No formal governance in place",
        "Fast growth creating chaos",
        "Undefined roles and responsibilities",
        "Client audits raising concerns"
      ],
      solutions: [
        "Responsibility modeling and RACI",
        "Policies and controls development",
        "Operational structure design",
        "IT governance alignment"
      ],
      cta: "Schedule a Consultation"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="section-title">Who We Serve</h2>
          <p className="section-subtitle">
            We work with organizations that must operate at a high standard — 
            even without the headcount of large enterprises.
          </p>
        </div>

        <div className="space-y-12 max-w-5xl mx-auto">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <div 
                key={index}
                className="rounded-3xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-5">
                  {/* Left - Visual */}
                  <div 
                    className="lg:col-span-2 p-10 flex flex-col justify-center items-center text-center"
                    style={{ background: industry.image }}
                  >
                    <div className="w-20 h-20 rounded-2xl bg-white/80 backdrop-blur flex items-center justify-center mb-6 shadow-lg">
                      <IconComponent className="w-10 h-10 text-slate-700" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{industry.title}</h3>
                    <p className="text-slate-600">{industry.subtitle}</p>
                  </div>
                  
                  {/* Right - Content */}
                  <div className="lg:col-span-3 p-10 bg-white">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h4 className="text-sm font-bold text-red-500 uppercase tracking-wide mb-4">Common Pain Points</h4>
                        <ul className="space-y-2">
                          {industry.painPoints.map((point, idx) => (
                            <li key={idx} className="flex items-start text-sm text-slate-600">
                              <span className="text-red-400 mr-2">•</span>
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-teal-600 uppercase tracking-wide mb-4">What We Solve</h4>
                        <ul className="space-y-2">
                          {industry.solutions.map((solution, idx) => (
                            <li key={idx} className="flex items-start text-sm text-slate-700">
                              <span className="text-teal-500 mr-2">✓</span>
                              {solution}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <a 
                      href="mailto:momentumedgeconsulting@gmail.com?subject=Industry Assessment Request"
                      className="inline-flex items-center text-teal-600 font-medium hover:text-teal-700 transition-colors"
                    >
                      {industry.cta}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Industries;
