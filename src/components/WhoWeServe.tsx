import { Hospital, Zap, Building2 } from "lucide-react";
import { Link } from "react-router-dom";

const WhoWeServe = () => {
  const audiences = [
    {
      icon: Hospital,
      title: "Medical Practices",
      subtitle: "Healthcare Groups & Dental Offices",
      description: "We help offices build policies, controls, workflows, and staff responsibilities that support patient care and minimize compliance risk.",
      color: "from-red-500/10 to-red-500/5",
      iconColor: "text-red-500",
      borderColor: "border-red-200"
    },
    {
      icon: Zap,
      title: "Utilities & Critical Infrastructure",
      subtitle: "Power, Water & Essential Services",
      description: "We support governance, control frameworks, evidence processes, and readiness for inspections and audits.",
      color: "from-amber-500/10 to-amber-500/5",
      iconColor: "text-amber-500",
      borderColor: "border-amber-200"
    },
    {
      icon: Building2,
      title: "Compliance-Driven Firms",
      subtitle: "Professional & Growing Organizations",
      description: "We help organizations create structure, clarity, and governance as they scale.",
      color: "from-blue-500/10 to-blue-500/5",
      iconColor: "text-blue-500",
      borderColor: "border-blue-200"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="section-title">
            Who We Serve
          </h2>
          <p className="section-subtitle">
            We work with organizations that must operate at a high standard — 
            even without the headcount of large enterprises.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {audiences.map((audience, index) => {
            const IconComponent = audience.icon;
            return (
              <div 
                key={index}
                className={`relative overflow-hidden rounded-3xl border ${audience.borderColor} bg-gradient-to-b ${audience.color} p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fade-up`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className={`w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 ${audience.iconColor}`}>
                  <IconComponent className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-1">
                  {audience.title}
                </h3>
                <p className="text-sm text-slate-500 mb-4">
                  {audience.subtitle}
                </p>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {audience.description}
                </p>
                <Link 
                  to="/industries" 
                  className="text-teal-600 font-medium text-sm hover:text-teal-700 transition-colors inline-flex items-center"
                >
                  Learn more →
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;
