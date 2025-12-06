import { CheckCircle } from "lucide-react";

const About = () => {
  const differentiators = [
    "We combine compliance, governance, IT, and operational process design — most consultants only do one.",
    "We work at the human level, helping real people adopt processes that fit their daily work.",
    "We speak the languages of medical offices, utilities, and regulated enterprises.",
    "We turn complex requirements into clear, usable structures."
  ];

  const highlights = [
    "Policy and control design",
    "Governance frameworks",
    "IT operational maturity",
    "Staffing and responsibility modeling",
    "ServiceNow, VMware, and enterprise technology advisory",
    "Audit readiness for regulated environments"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-8 heading-enhanced">
              Bringing Clarity and Operational Confidence to Regulated Organizations
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
              Momentum Edge Consulting was founded to help organizations operate with clarity, structure, 
              and confidence in environments where ambiguity is costly — and regulators expect discipline.
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium mt-6">
              We work with organizations that must function at a high operational standard, 
              even without the headcount of large enterprises.
            </p>
          </div>

          {/* What Makes Us Different */}
          <div className="mb-16">
            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-8 text-center heading-enhanced">
              What Makes Us Different
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {differentiators.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-start bg-teal-50 border border-teal-100 p-6 rounded-xl group hover:shadow-lg transition-all duration-300"
                >
                  <CheckCircle className="text-teal-500 mr-4 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" size={24} />
                  <span className="text-gray-700 font-medium leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* About MEC */}
          <div className="bg-slate-900 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-center">
              About Momentum Edge Consulting
            </h3>
            <p className="text-lg text-gray-300 mb-8 text-center max-w-3xl mx-auto leading-relaxed">
              Momentum Edge Consulting is a business technology and governance advisory firm with deep experience 
              in compliance-driven industries. Our work spans healthcare, utilities, and enterprise IT, 
              bringing clarity to complex environments and helping organizations operate with confidence.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {highlights.map((highlight, index) => (
                <div 
                  key={index}
                  className="flex items-center bg-white/10 rounded-lg p-4 group hover:bg-white/15 transition-all duration-300"
                >
                  <span className="text-teal-400 mr-3 font-bold">✓</span>
                  <span className="font-medium">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
