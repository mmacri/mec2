import { ArrowRight } from "lucide-react";

const HomeCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-teal-600 to-cyan-600">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8">
            Every Regulated Organization Can Operate With Confidence
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:momentumedgeconsulting@gmail.com?subject=Governance %26 Compliance Assessment Request&body=Hello, I would like to request a governance and compliance assessment to discuss my organization's needs."
              className="bg-white hover:bg-gray-100 text-teal-700 font-bold text-lg px-10 py-5 rounded-lg transition-all duration-300 hover:scale-105 shadow-xl inline-flex items-center justify-center group"
            >
              Request an Assessment
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a 
              href="mailto:momentumedgeconsulting@gmail.com?subject=Governance Challenges Discussion&body=Hello, I would like to discuss my organization's governance challenges."
              className="bg-transparent hover:bg-white/10 text-white font-bold text-lg px-10 py-5 rounded-lg border-2 border-white transition-all duration-300 hover:scale-105 inline-flex items-center justify-center"
            >
              Talk Through Your Governance Challenges
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCTA;
