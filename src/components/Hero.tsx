import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, FileText, GitBranch, Shield } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-teal-50/30 overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 pattern-grid"></div>
      
      {/* Abstract governance shapes */}
      <div className="absolute top-20 right-0 w-96 h-96 opacity-10">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <rect x="20" y="20" width="60" height="40" rx="4" fill="none" stroke="#14b8a6" strokeWidth="1.5"/>
          <rect x="120" y="20" width="60" height="40" rx="4" fill="none" stroke="#14b8a6" strokeWidth="1.5"/>
          <rect x="70" y="100" width="60" height="40" rx="4" fill="none" stroke="#14b8a6" strokeWidth="1.5"/>
          <line x1="50" y1="60" x2="50" y2="80" stroke="#14b8a6" strokeWidth="1.5"/>
          <line x1="50" y1="80" x2="100" y2="80" stroke="#14b8a6" strokeWidth="1.5"/>
          <line x1="100" y1="80" x2="100" y2="100" stroke="#14b8a6" strokeWidth="1.5"/>
          <line x1="150" y1="60" x2="150" y2="80" stroke="#14b8a6" strokeWidth="1.5"/>
          <line x1="150" y1="80" x2="100" y2="80" stroke="#14b8a6" strokeWidth="1.5"/>
          <rect x="20" y="160" width="160" height="30" rx="4" fill="none" stroke="#14b8a6" strokeWidth="1.5"/>
          <line x1="100" y1="140" x2="100" y2="160" stroke="#14b8a6" strokeWidth="1.5"/>
        </svg>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto py-24 lg:py-36">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left content */}
            <div className="animate-fade-up">
              <div className="inline-flex items-center bg-teal-50 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
                <span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
                Governance & Compliance Advisory
              </div>
              
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-8 leading-tight">
                Clarity, Structure, and Compliance for{" "}
                <span className="text-teal-600">Regulated Organizations</span>
              </h1>
              
              <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                Momentum Edge Consulting helps medical practices, utilities, and compliance-driven organizations 
                design the policies, controls, governance models, and operational processes needed to operate 
                with confidence and withstand regulatory scrutiny.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="mailto:momentumedgeconsulting@gmail.com?subject=Governance Assessment Request&body=Hello, I would like to request a governance and compliance assessment."
                  className="cta-primary group"
                >
                  Request a Governance Assessment
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </a>
                <Link to="/services" className="cta-secondary">
                  Explore How We Work
                </Link>
              </div>
            </div>

            {/* Right visual - Governance Diagram */}
            <div className="animate-fade-up animate-fade-up-delay-2 hidden lg:block">
              <div className="relative">
                {/* Main card */}
                <div className="bg-white rounded-3xl p-8 shadow-2xl border border-slate-100">
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="text-center p-4 bg-slate-50 rounded-xl">
                      <FileText className="w-8 h-8 text-teal-500 mx-auto mb-2" />
                      <span className="text-xs font-medium text-slate-600">Policies</span>
                    </div>
                    <div className="text-center p-4 bg-slate-50 rounded-xl">
                      <GitBranch className="w-8 h-8 text-teal-500 mx-auto mb-2" />
                      <span className="text-xs font-medium text-slate-600">Processes</span>
                    </div>
                    <div className="text-center p-4 bg-slate-50 rounded-xl">
                      <Shield className="w-8 h-8 text-teal-500 mx-auto mb-2" />
                      <span className="text-xs font-medium text-slate-600">Governance</span>
                    </div>
                  </div>
                  
                  {/* Flowchart visualization */}
                  <div className="relative h-48">
                    <svg viewBox="0 0 300 150" className="w-full h-full">
                      {/* Chaos to Clarity flow */}
                      <rect x="10" y="55" width="80" height="40" rx="6" fill="#fef2f2" stroke="#fca5a5" strokeWidth="1.5"/>
                      <text x="50" y="80" textAnchor="middle" className="text-xs" fill="#dc2626" fontWeight="500">Chaos</text>
                      
                      <line x1="95" y1="75" x2="125" y2="75" stroke="#14b8a6" strokeWidth="2" markerEnd="url(#arrowhead)"/>
                      
                      <rect x="130" y="45" width="80" height="60" rx="6" fill="#f0fdfa" stroke="#14b8a6" strokeWidth="2"/>
                      <text x="170" y="70" textAnchor="middle" className="text-xs" fill="#0f766e" fontWeight="600">MEC</text>
                      <text x="170" y="90" textAnchor="middle" className="text-[10px]" fill="#0f766e">Advisory</text>
                      
                      <line x1="215" y1="75" x2="245" y2="75" stroke="#14b8a6" strokeWidth="2" markerEnd="url(#arrowhead)"/>
                      
                      <rect x="250" y="55" width="80" height="40" rx="6" fill="#f0fdfa" stroke="#0d9488" strokeWidth="1.5"/>
                      <text x="290" y="80" textAnchor="middle" className="text-xs" fill="#0d9488" fontWeight="500">Clarity</text>
                      
                      <defs>
                        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                          <polygon points="0 0, 10 3.5, 0 7" fill="#14b8a6"/>
                        </marker>
                      </defs>
                    </svg>
                  </div>
                </div>
                
                {/* Floating accent elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-teal-100 rounded-full opacity-50 animate-float"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-slate-100 rounded-full opacity-50 animate-float" style={{ animationDelay: '2s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
