import { Search, Layers, UserCheck, RefreshCw } from "lucide-react";

const HowWeWork = () => {
  const steps = [
    {
      number: "1",
      icon: Search,
      title: "Baseline & Discovery",
      description: "We observe how your organization actually operates and identify the gaps that matter.",
      color: "from-blue-500 to-blue-600"
    },
    {
      number: "2",
      icon: Layers,
      title: "Structure the Framework",
      description: "Policies, controls, roles, processes, committees, evidence practices — built around your exact needs.",
      color: "from-teal-500 to-teal-600"
    },
    {
      number: "3",
      icon: UserCheck,
      title: "Implement & Train",
      description: "We work directly with staff to adopt new workflows and expectations.",
      color: "from-purple-500 to-purple-600"
    },
    {
      number: "4",
      icon: RefreshCw,
      title: "Sustain & Improve",
      description: "Quarterly reviews, audit prep, evidence guidance, and ongoing advisory.",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8">
            How We Work
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Our proven methodology ensures sustainable results and lasting operational clarity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div 
                key={index}
                className="relative group"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 h-full border border-white/20 hover:bg-white/15 transition-all duration-300 hover:-translate-y-2">
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent size={28} className="text-white" />
                  </div>
                  <div className="text-sm font-bold text-teal-400 mb-2">Step {step.number}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{step.description}</p>
                </div>
                
                {/* Connector line for desktop */}
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-teal-500/50 to-transparent"></div>
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
