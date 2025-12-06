import { CheckCircle, Target, Eye, Handshake, Shield } from "lucide-react";

const About = () => {
  const differentiators = [
    "We combine compliance, governance, IT, and operational process design — most consultants only do one.",
    "We work at the human level, helping real people adopt processes that fit their daily work.",
    "We speak the languages of medical offices, utilities, and regulated enterprises.",
    "We turn complex requirements into clear, usable structures."
  ];

  const values = [
    { icon: Eye, title: "Clarity", description: "Making the complex understandable" },
    { icon: Target, title: "Practicality", description: "Solutions that work in the real world" },
    { icon: Handshake, title: "Trust", description: "Building lasting partnerships" },
    { icon: Shield, title: "Accountability", description: "Taking ownership of outcomes" }
  ];

  const highlights = [
    "Policy and control design",
    "Governance frameworks",
    "IT operational maturity",
    "Staffing and responsibility modeling",
    "Audit readiness for regulated environments"
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20 animate-fade-up">
            <h2 className="section-title mb-6">
              Bringing Structure, Clarity, and Governance to Organizations That Need It Most
            </h2>
            <p className="section-subtitle">
              Momentum Edge Consulting was founded to help organizations operate with clarity, structure, 
              and confidence in environments where ambiguity is costly — and regulators expect discipline.
            </p>
          </div>

          {/* Two column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            {/* About content */}
            <div className="animate-fade-up">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                About MEC
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Momentum Edge Consulting is a business technology and governance advisory firm with deep experience 
                in compliance-driven industries. Our work spans healthcare, utilities, and enterprise IT, 
                bringing clarity to complex environments.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                We specialize in transforming chaotic or ambiguous operational environments into well-structured, 
                compliant organizations that can confidently face any audit or regulatory review.
              </p>
              
              <div className="space-y-3">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-teal-500 mr-3 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* What makes us different */}
            <div className="animate-fade-up animate-fade-up-delay-2">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                What Makes Us Different
              </h3>
              <div className="space-y-4">
                {differentiators.map((item, index) => (
                  <div 
                    key={index}
                    className="bg-slate-50 border border-slate-100 rounded-xl p-5"
                  >
                    <p className="text-slate-700 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="animate-fade-up animate-fade-up-delay-3">
            <h3 className="text-2xl font-bold text-slate-900 text-center mb-10">
              Our Values
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-14 h-14 rounded-2xl bg-teal-50 flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-7 h-7 text-teal-600" />
                    </div>
                    <h4 className="font-semibold text-slate-900 mb-1">{value.title}</h4>
                    <p className="text-sm text-slate-500">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
