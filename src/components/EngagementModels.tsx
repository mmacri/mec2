import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, FileText, Calendar } from "lucide-react";

const EngagementModels = () => {
  const models = [
    {
      icon: Zap,
      title: "Compliance & Governance Assessment (QuickScan)",
      duration: "2–3 week engagement",
      description: "Perfect for small medical practices and growing firms.",
      deliverables: [
        "Baseline review",
        "Gap analysis",
        "Prioritized roadmap",
        "Summary report"
      ],
      color: "text-amber-500",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-300"
    },
    {
      icon: FileText,
      title: "Policy & Control Design Project",
      duration: "6–12 week engagement",
      description: "Comprehensive policy and governance framework development.",
      deliverables: [
        "Policies",
        "Controls",
        "Governance workflows",
        "RACI charts",
        "Process documentation"
      ],
      color: "text-teal-500",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-300"
    },
    {
      icon: Calendar,
      title: "Ongoing Advisory (Fractional Governance Leadership)",
      duration: "Monthly engagement",
      description: "Continuous governance support and improvement.",
      deliverables: [
        "Regular review sessions",
        "Governance oversight",
        "Staff training",
        "Governance meeting facilitation",
        "Continuous improvement"
      ],
      color: "text-purple-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-300"
    }
  ];

  return (
    <section id="engagement-models" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-8 heading-enhanced">
            Engagement Models
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
            Flexible engagement options designed to meet your organization where it is today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {models.map((model, index) => {
            const IconComponent = model.icon;
            return (
              <Card 
                key={index} 
                className={`feature-card group h-full border-2 ${model.borderColor} hover:shadow-2xl`}
              >
                <CardHeader className="text-center pb-4">
                  <div className={`${model.bgColor} ${model.color} mb-4 w-20 h-20 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent size={40} />
                  </div>
                  <CardTitle className="text-xl text-slate-900 font-semibold group-hover:text-teal-600 transition-colors duration-300">
                    {model.title}
                  </CardTitle>
                  <div className={`inline-block ${model.bgColor} ${model.color} px-4 py-1 rounded-full text-sm font-semibold mt-2`}>
                    {model.duration}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700 font-medium leading-relaxed text-center mb-6">
                    {model.description}
                  </CardDescription>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3 text-center">Includes:</h4>
                    <ul className="space-y-2">
                      {model.deliverables.map((deliverable, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-teal-500 mr-3 mt-1 font-bold">✓</span>
                          <span className="text-gray-600 font-medium">{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <a 
            href="mailto:momentumedgeconsulting@gmail.com?subject=Engagement Discussion&body=Hello, I would like to discuss which engagement model would be best for my organization."
            className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-semibold text-lg px-10 py-5 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg inline-flex items-center justify-center"
            style={{ boxShadow: '0 8px 24px rgba(20, 184, 166, 0.4)' }}
          >
            Discuss the Right Engagement for You
          </a>
        </div>
      </div>
    </section>
  );
};

export default EngagementModels;
