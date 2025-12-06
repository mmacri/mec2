import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Shield, Cloud, Cog, Users, BarChart3, Brain, HeartHandshake } from "lucide-react";

const Expertise = () => {
  const expertiseAreas = [
    {
      icon: Target,
      title: "Strategic Technology Leadership",
      description: "CIO-level strategic planning and technology roadmap development",
      skills: [
        "Technology strategy and multi-year roadmap planning",
        "IT budget optimization and investment planning",
        "Digital transformation and modernization strategies",
        "Executive reporting and board-level presentations",
        "Vendor evaluation and procurement advisory"
      ],
      color: "text-teal"
    },
    {
      icon: Shield,
      title: "Cybersecurity & Compliance",
      description: "Enterprise-grade security and regulatory compliance expertise",
      skills: [
        "HIPAA, SOC 2, NIST, and ISO 27001 compliance",
        "Risk assessment and security framework development",
        "Incident response planning and management",
        "Security awareness training and governance",
        "Vulnerability assessment and penetration testing coordination"
      ],
      color: "text-destructive"
    },
    {
      icon: Cloud,
      title: "Cloud & Infrastructure",
      description: "Modern cloud architecture and infrastructure optimization",
      skills: [
        "Multi-cloud strategy and architecture design",
        "Office 365/Microsoft 365 implementation and optimization",
        "AWS, Azure, and Google Cloud platform expertise",
        "Hybrid cloud and on-premises integration",
        "Backup, disaster recovery, and business continuity"
      ],
      color: "text-teal-dark"
    },
    {
      icon: Brain,
      title: "AI & Emerging Technologies",
      description: "Responsible AI implementation and governance frameworks",
      skills: [
        "AI strategy development and opportunity assessment",
        "Custom AI application development and integration",
        "AI governance frameworks and ethical guidelines",
        "Compliance with emerging AI regulations (EU AI Act)",
        "Automation and workflow optimization strategies"
      ],
      color: "text-navy"
    },
    {
      icon: Cog,
      title: "Healthcare IT Specialization",
      description: "Deep expertise in medical and dental practice technology",
      skills: [
        "HIPAA compliance audits and implementation",
        "EHR/EMR system optimization and integration",
        "Dental practice management solutions",
        "Patient data security and privacy protection",
        "Telehealth infrastructure and secure communications"
      ],
      color: "text-success"
    },
    {
      icon: Users,
      title: "Partner Enablement & GTM",
      description: "Strategic partnership development and go-to-market expertise",
      skills: [
        "Partner program development and enablement frameworks",
        "Channel strategy and go-to-market planning",
        "Technical enablement and solution training programs",
        "Partner portal development and digital enablement",
        "Joint business planning and revenue acceleration"
      ],
      color: "text-warning"
    },
    {
      icon: BarChart3,
      title: "IT Operations & Management",
      description: "Comprehensive IT operations and service management",
      skills: [
        "IT service management (ITSM) framework implementation",
        "Help desk and support organization design",
        "IT asset management and lifecycle planning",
        "Performance monitoring and optimization",
        "Change management and process improvement"
      ],
      color: "text-slate"
    },
    {
      icon: HeartHandshake,
      title: "Small Business IT Solutions",
      description: "Tailored technology solutions for growing businesses",
      skills: [
        "Office setup and technology deployment",
        "Remote work solutions and secure connectivity",
        "Small office network design and implementation",
        "Vendor coordination and relationship management",
        "Growth-oriented IT planning and scalability"
      ],
      color: "text-teal"
    }
  ];

  return (
    <section id="expertise" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl lg:text-5xl font-bold text-navy mb-8 heading-enhanced">
              Deep Technical Expertise Across Technology Domains
            </h2>
            <p className="text-lg lg:text-xl text-slate max-w-4xl mx-auto leading-relaxed font-medium">
              25+ years of hands-on experience delivering strategic technology solutions across healthcare, 
              small business, and enterprise environments with proven results and measurable outcomes.
            </p>
          </div>

          {/* Expertise Areas */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
            {expertiseAreas.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <Card key={index} className="card-professional group h-full border-border hover:border-teal/50">
                  <CardHeader className="text-center pb-4">
                    <div className={`${area.color} mb-4 flex justify-center`}>
                      <IconComponent size={48} className="group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <CardTitle className="text-xl text-navy mb-3 font-semibold group-hover:text-teal transition-colors duration-300">
                      {area.title}
                    </CardTitle>
                    <CardDescription className="text-slate font-medium leading-relaxed">
                      {area.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-2">
                      {area.skills.map((skill, skillIndex) => (
                        <li key={skillIndex} className="flex items-start">
                          <span className="text-teal mr-2 mt-1 font-bold text-xs">✓</span>
                          <span className="text-sm font-medium text-slate leading-relaxed">{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-sand rounded-xl p-8 max-w-4xl mx-auto border border-border">
              <h3 className="text-2xl font-bold text-navy mb-4">Ready to Leverage This Expertise?</h3>
              <p className="text-slate mb-6 leading-relaxed">
                Get a complimentary technology assessment and discover how our deep expertise 
                can accelerate your business growth and optimize your technology investments.
              </p>
              <a 
                href="mailto:momentumedgeconsulting@gmail.com?subject=Expertise Consultation Request&body=Hello, I would like to schedule a consultation to discuss how your expertise can help with my specific technology challenges."
                className="cta-primary inline-flex items-center justify-center"
              >
                Schedule Expert Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
