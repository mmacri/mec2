import { Zap, FileText, Calendar, ArrowRight } from "lucide-react";

const EngagementModels = () => {
  const models = [
    {
      icon: Zap,
      title: "Governance & Compliance Assessment",
      subtitle: "QuickScan",
      duration: "2–3 weeks",
      description: "Perfect for small medical practices and growing firms that need a clear starting point.",
      deliverables: [
        "Baseline review",
        "Gap analysis",
        "Prioritized roadmap",
        "Summary report"
      ],
      highlight: false
    },
    {
      icon: FileText,
      title: "Policy & Control Design Project",
      subtitle: "Comprehensive",
      duration: "6–12 weeks",
      description: "Full governance framework development for organizations ready to formalize operations.",
      deliverables: [
        "Complete policies",
        "Control catalog",
        "Governance workflows",
        "RACI charts",
        "Process documentation"
      ],
      highlight: true
    },
    {
      icon: Calendar,
      title: "Ongoing Advisory",
      subtitle: "Fractional Leadership",
      duration: "Monthly",
      description: "Continuous governance support for organizations that need sustained improvement.",
      deliverables: [
        "Regular review sessions",
        "Governance oversight",
        "Staff training",
        "Continuous improvement"
      ],
      highlight: false
    }
  ];

  return (
    <section className="section-padding bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="section-title">Engagement Models</h2>
          <p className="section-subtitle">
            Flexible engagement options designed to meet your organization where it is today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {models.map((model, index) => {
            const IconComponent = model.icon;
            return (
              <div 
                key={index}
                className={`relative rounded-2xl p-8 transition-all duration-300 animate-fade-up ${
                  model.highlight 
                    ? 'bg-slate-900 text-white shadow-2xl scale-105' 
                    : 'bg-white border border-slate-200 hover:shadow-xl hover:border-teal-200'
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {model.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-teal-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                  model.highlight ? 'bg-teal-500/20' : 'bg-teal-50'
                }`}>
                  <IconComponent className={`w-7 h-7 ${model.highlight ? 'text-teal-400' : 'text-teal-600'}`} />
                </div>
                
                <div className="mb-2">
                  <span className={`text-xs font-bold uppercase tracking-wider ${
                    model.highlight ? 'text-teal-400' : 'text-teal-600'
                  }`}>
                    {model.subtitle}
                  </span>
                </div>
                
                <h3 className={`text-xl font-bold mb-2 ${model.highlight ? 'text-white' : 'text-slate-900'}`}>
                  {model.title}
                </h3>
                
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${
                  model.highlight ? 'bg-white/10 text-white' : 'bg-slate-100 text-slate-600'
                }`}>
                  {model.duration}
                </div>
                
                <p className={`mb-6 ${model.highlight ? 'text-slate-300' : 'text-slate-600'}`}>
                  {model.description}
                </p>
                
                <div>
                  <div className={`text-sm font-semibold uppercase tracking-wide mb-3 ${
                    model.highlight ? 'text-white' : 'text-slate-900'
                  }`}>
                    Includes:
                  </div>
                  <ul className="space-y-2">
                    {model.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className={`mr-2 ${model.highlight ? 'text-teal-400' : 'text-teal-500'}`}>✓</span>
                        <span className={model.highlight ? 'text-slate-300' : 'text-slate-600'}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16 animate-fade-up">
          <a 
            href="mailto:momentumedgeconsulting@gmail.com?subject=Engagement Discussion"
            className="cta-primary group"
          >
            Discuss the Right Engagement for You
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default EngagementModels;
