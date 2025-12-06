import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-24 lg:py-36 overflow-hidden">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 via-cyan-500/10 to-teal-500/10 animate-pulse"></div>
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 pattern-grid opacity-30"></div>
      {/* Accent glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight text-white">
              Clarity, Structure, and Compliance for{" "}
              <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent font-bold">Regulated Organizations</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-100 mb-10 leading-relaxed font-medium max-w-4xl mx-auto">
              Momentum Edge Consulting helps medical practices, utilities, and compliance-driven organizations 
              design the policies, controls, governance models, and operational processes needed to operate 
              with confidence and withstand regulatory scrutiny.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a 
                href="mailto:momentumedgeconsulting@gmail.com?subject=Governance %26 Compliance Assessment Request&body=Hello, I would like to request a governance and compliance assessment to discuss my organization's needs."
                className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-bold text-lg px-10 py-5 rounded-lg transition-all duration-300 hover:scale-105 shadow-xl inline-flex items-center justify-center group"
                style={{ boxShadow: '0 8px 24px rgba(20, 184, 166, 0.5)' }}
              >
                Request a Governance & Compliance Assessment
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <Link to="/services">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20 font-semibold text-lg px-10 py-5 hover:scale-105 transition-all duration-300"
                >
                  See How We Improve Your Operations
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
