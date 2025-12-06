import { Search, Layers, UserCheck, RefreshCw } from "lucide-react";

const HowWeWork = () => {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Baseline & Discovery",
      description: "We observe how your organization actually operates and identify the gaps that matter."
    },
    {
      number: "02",
      icon: Layers,
      title: "Structure & Design",
      description: "Policies, controls, roles, processes, committees, evidence practices — built around your exact needs."
    },
    {
      number: "03",
      icon: UserCheck,
      title: "Implement & Train",
      description: "We work directly with staff to adopt new workflows and expectations."
    },
    {
      number: "04",
      icon: RefreshCw,
      title: "Sustain & Improve",
      description: "Quarterly reviews, audit prep, evidence guidance, and ongoing advisory."
    }
  ];

  return (
    <section className="section-padding gradient-navy text-white relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            How We Work
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Our proven methodology ensures sustainable results and lasting operational clarity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div 
                key={index}
                className="relative animate-fade-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="text-teal-400 text-sm font-bold tracking-widest mb-4">
                    STEP {step.number}
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center mb-5">
                    <IconComponent className="w-6 h-6 text-teal-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {/* Connector line */}
                {index < 3 && (
                  <div className="process-connector"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
