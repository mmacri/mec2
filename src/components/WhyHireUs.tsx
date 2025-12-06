const WhyHireUs = () => {
  const painPoints = [
    "Roles are unclear",
    "Processes are inconsistent",
    "Policies are outdated or hard to follow",
    "Controls are incomplete or not mapped to real risks",
    "Governance structures exist \"in name only\"",
    "Required documentation doesn't reflect reality",
    "Teams rely on tribal knowledge instead of defined workflows"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-8 heading-enhanced">
            Why Organizations Hire Us
          </h2>
          <p className="text-lg lg:text-xl text-gray-700 mb-10 leading-relaxed font-medium">
            Organizations rarely struggle because of a lack of effort — they struggle because:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 text-left">
            {painPoints.map((point, index) => (
              <div 
                key={index}
                className="flex items-start bg-red-50 border border-red-100 p-4 rounded-lg"
              >
                <span className="text-red-500 mr-3 mt-0.5 font-bold">•</span>
                <span className="text-gray-700 font-medium">{point}</span>
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-8 border border-teal-200">
            <p className="text-xl lg:text-2xl text-teal-800 font-semibold">
              We help clients move from <span className="text-red-600">chaos</span> → <span className="text-teal-600">clarity</span>, 
              <span className="text-red-600"> ambiguity</span> → <span className="text-teal-600">structure</span>, 
              and <span className="text-red-600"> risk</span> → <span className="text-teal-600">confidence</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHireUs;
