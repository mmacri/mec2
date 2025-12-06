import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, GitBranch, Users, ClipboardCheck, Monitor } from "lucide-react";

const WhatWeDo = () => {
  const pillars = [
    {
      icon: FileText,
      title: "Policy & Control Development",
      description: "Practical, plain-language policies and controls that people understand — and auditors trust.",
      color: "text-blue-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: GitBranch,
      title: "Governance & Process Design",
      description: "Clear decision rights, workflows, RACI charts, and committee structures that stabilize operations.",
      color: "text-teal-500",
      bgColor: "bg-teal-50"
    },
    {
      icon: Users,
      title: "Staffing & Responsibility Modeling",
      description: "Define who does what, eliminate overlaps, remove gaps, and align work with regulatory expectations.",
      color: "text-purple-500",
      bgColor: "bg-purple-50"
    },
    {
      icon: ClipboardCheck,
      title: "Compliance & Audit Readiness",
      description: "Evidence plans, maturity assessments, documentation cleanup, mock audits, and readiness reviews.",
      color: "text-orange-500",
      bgColor: "bg-orange-50"
    },
    {
      icon: Monitor,
      title: "Technology & IT Governance Advisory",
      description: "Practical guidance on IT processes, system responsibilities, access governance, and operational alignment.",
      color: "text-indigo-500",
      bgColor: "bg-indigo-50"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-8 heading-enhanced">
            What We Do
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            return (
              <Card 
                key={index} 
                className={`feature-card group h-full ${index === 4 ? 'lg:col-start-2' : ''}`}
              >
                <CardHeader className="text-center pb-4">
                  <div className={`${pillar.bgColor} ${pillar.color} mb-4 w-16 h-16 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent size={32} />
                  </div>
                  <CardTitle className="text-xl text-slate-900 font-semibold group-hover:text-teal-600 transition-colors duration-300">
                    {pillar.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 font-medium leading-relaxed text-base">
                    {pillar.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
