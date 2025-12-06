import { FileText, GitBranch, Shield } from "lucide-react";

const WhyHireUs = () => {
  const pillars = [
    {
      icon: FileText,
      title: "Policies & Controls",
      description: "Clear, practical policies that people understand and auditors trust."
    },
    {
      icon: GitBranch,
      title: "Processes",
      description: "Defined workflows and responsibilities that eliminate ambiguity."
    },
    {
      icon: Shield,
      title: "Governance",
      description: "Structures and oversight that ensure accountability and compliance."
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="section-title">
              Why Organizations Hire Us
            </h2>
            <p className="section-subtitle">
              Organizations don't fail audits because they're careless — they fail because their 
              policies, processes, and responsibilities aren't clearly defined or consistently followed.
            </p>
          </div>
          
          {/* Three pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {pillars.map((pillar, index) => {
              const IconComponent = pillar.icon;
              return (
                <div 
                  key={index}
                  className="card-professional text-center animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="icon-container bg-teal-50 mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-600">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
          
          {/* Bottom statement */}
          <div className="text-center animate-fade-up animate-fade-up-delay-3">
            <div className="inline-block bg-gradient-to-r from-slate-50 to-teal-50 rounded-2xl p-8 border border-teal-100">
              <p className="text-xl text-slate-700 font-medium">
                Momentum Edge specializes in bringing <span className="text-slate-900 font-semibold">order</span>, 
                <span className="text-slate-900 font-semibold"> clarity</span>, and 
                <span className="text-slate-900 font-semibold"> structure</span> to environments where ambiguity creates risk.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHireUs;
