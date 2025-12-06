import { ArrowRight } from "lucide-react";

const HomeCTA = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-slate-50 via-teal-50/30 to-white relative overflow-hidden">
      {/* Abstract shapes */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-teal-100 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-100 rounded-full opacity-50 blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
            Ready to Bring Clarity and Confidence to Your Organization?
          </h2>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Every regulated organization can operate with confidence. Let's discuss how we can help you achieve operational clarity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:momentumedgeconsulting@gmail.com?subject=Governance Assessment Request&body=Hello, I would like to request a governance and compliance assessment."
              className="cta-primary group"
            >
              Request an Assessment
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a 
              href="mailto:momentumedgeconsulting@gmail.com?subject=Advisory Discussion&body=Hello, I would like to speak with an advisor about my organization's governance needs."
              className="cta-secondary"
            >
              Talk to an Advisor
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCTA;
