import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Hospital, Zap, Building2 } from "lucide-react";

const Industries = () => {
  const industries = [
    {
      icon: Hospital,
      title: "Medical Practices",
      painPoints: [
        "Policies outdated",
        "Roles unclear",
        "Front office chaos",
        "Audits and inspections coming",
        "Documentation weak"
      ],
      solutions: [
        "Written policies",
        "Clear workflows",
        "Staffing clarity",
        "Controls around patient data",
        "Governance accountability"
      ],
      color: "text-red-500",
      bgColor: "bg-red-50",
      borderColor: "border-red-200"
    },
    {
      icon: Zap,
      title: "Utilities & Critical Infrastructure",
      painPoints: [
        "Governance and controls inconsistent",
        "Audit gaps",
        "Documentation not aligned with reality",
        "Operational ambiguity"
      ],
      solutions: [
        "Governance frameworks",
        "Control design",
        "Evidence processes",
        "Process documentation",
        "Audit preparation"
      ],
      color: "text-amber-500",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200"
    },
    {
      icon: Building2,
      title: "Compliance-Driven Professional Firms",
      painPoints: [
        "No formal governance",
        "Fast growth → chaos",
        "Undefined roles",
        "Client audits"
      ],
      solutions: [
        "Responsibility modeling",
        "Policies",
        "Controls",
        "Operational structure",
        "IT governance alignment"
      ],
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    }
  ];

  return (
    <section id="industries" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-8 heading-enhanced">
              Who We Serve
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
              We work with organizations that must operate at a high standard — 
              even without the headcount of large enterprises.
            </p>
          </div>

          {/* Industries Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <Card key={index} className={`feature-card group h-full ${industry.bgColor} ${industry.borderColor}`}>
                  <CardHeader className="pb-4 text-center">
                    <div className={`${industry.color} mb-4 flex justify-center`}>
                      <IconComponent size={56} className="group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <CardTitle className="text-xl text-slate-900 group-hover:text-teal-600 transition-colors duration-300 font-semibold">
                      {industry.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-3">Pain Points</h4>
                        <ul className="space-y-2">
                          {industry.painPoints.map((point, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-red-500 mr-2 mt-1 font-bold text-sm">•</span>
                              <span className="text-sm text-gray-700 leading-relaxed">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-3">What We Solve</h4>
                        <ul className="space-y-2">
                          {industry.solutions.map((solution, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-teal-500 mr-2 mt-1 font-bold text-sm">✓</span>
                              <span className="text-sm text-gray-700 leading-relaxed">{solution}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-slate-900 rounded-xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Bring Structure to Your Organization?</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Request an assessment tailored to your industry's unique challenges and regulatory requirements.
              </p>
              <a 
                href="mailto:momentumedgeconsulting@gmail.com?subject=Industry-Specific Assessment Request&body=Hello, I would like to request an assessment tailored to my industry's needs."
                className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-semibold text-lg px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg inline-flex items-center justify-center"
              >
                Request an Industry Assessment
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
