import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Hospital, Zap, Building2 } from "lucide-react";

const WhoWeServe = () => {
  const audiences = [
    {
      icon: Hospital,
      title: "Medical Practices & Healthcare Groups",
      description: "We help offices build policies, controls, workflows, and staff responsibilities that support patient care and minimize compliance risk.",
      color: "text-red-500",
      bgColor: "bg-red-50",
      borderColor: "border-red-200"
    },
    {
      icon: Zap,
      title: "Utilities & Critical Infrastructure",
      description: "We support governance, control frameworks, evidence processes, and readiness for inspections and audits.",
      color: "text-amber-500",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200"
    },
    {
      icon: Building2,
      title: "Compliance-Driven Firms & Growing Organizations",
      description: "We help organizations create structure, clarity, and governance as they scale.",
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-8 heading-enhanced">
            Who We Serve
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {audiences.map((audience, index) => {
            const IconComponent = audience.icon;
            return (
              <Card 
                key={index} 
                className={`feature-card group h-full ${audience.bgColor} ${audience.borderColor}`}
              >
                <CardHeader className="text-center pb-4">
                  <div className={`${audience.color} mb-4 flex justify-center`}>
                    <IconComponent size={56} className="group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <CardTitle className="text-xl text-slate-900 font-semibold group-hover:text-teal-600 transition-colors duration-300">
                    {audience.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-700 font-medium leading-relaxed text-base">
                    {audience.description}
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

export default WhoWeServe;
