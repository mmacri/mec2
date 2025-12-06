import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ApproachTimeline from "@/components/marketing/ApproachTimeline";
import ProblemSolutionSection from "@/components/marketing/ProblemSolutionSection";
import PrimaryCTASection from "@/components/marketing/PrimaryCTASection";
import SectionWrapper from "@/components/ui/SectionWrapper";
import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";
import { Target, Users, Lightbulb, CheckCircle } from "lucide-react";

const principles = [
  {
    icon: Target,
    title: "Practical Over Theoretical",
    description: "We focus on what works in your specific environment, not generic frameworks that look good on paper."
  },
  {
    icon: Users,
    title: "Human-Centered Design",
    description: "Governance only works if people follow it. We design for adoption, not just compliance."
  },
  {
    icon: Lightbulb,
    title: "Clarity Before Complexity",
    description: "We start with clear foundations before adding layers. Simple, understandable structures that scale."
  },
  {
    icon: CheckCircle,
    title: "Sustainable Change",
    description: "We don't just deliver documents — we help embed governance into daily operations for lasting impact."
  }
];

const caseStudies = [
  {
    industry: "Healthcare",
    challenge: "A multi-physician practice struggling with inconsistent patient intake processes and unclear staff responsibilities.",
    solution: "Mapped workflows, clarified roles with RACI, developed plain-language SOPs.",
    outcome: "Reduced patient wait times, clear accountability, audit-ready documentation."
  },
  {
    industry: "Utilities",
    challenge: "A utility company facing an upcoming regulatory inspection with scattered documentation and undefined control ownership.",
    solution: "Conducted gap assessment, developed control catalog, established evidence management process.",
    outcome: "Passed inspection with no major findings, established ongoing governance rhythm."
  }
];

const ApproachPage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero */}
        <section className="hero-services py-20 lg:py-28 relative overflow-hidden">
          <div className="absolute inset-0 pattern-dots opacity-30" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h1
                className="text-4xl lg:text-5xl font-bold text-brand-navy mb-6 font-heading"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                A Practical, Human-Centered Approach to Governance
              </motion.h1>
              
              <motion.p
                className="text-lg lg:text-xl text-neutral-700 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                We don't believe in governance theater — policies that exist to check boxes 
                but don't reflect how work actually gets done. Our approach is built on 
                understanding your reality first.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Guiding Principles */}
        <SectionWrapper variant="default">
          <div className="text-center mb-16">
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Our Guiding Principles
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                className="flex gap-6 p-6 bg-white rounded-xl border border-neutral-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="icon-container flex-shrink-0">
                  <principle.icon className="w-6 h-6 text-brand-teal" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-brand-navy mb-2">{principle.title}</h3>
                  <p className="text-neutral-700">{principle.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>

        {/* The 5-Step Process */}
        <SectionWrapper variant="soft-blue">
          <div className="text-center mb-16">
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Our 5-Step Process
            </motion.h2>
            <motion.p 
              className="section-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              From discovery to sustained governance excellence
            </motion.p>
          </div>

          <ApproachTimeline />
        </SectionWrapper>

        {/* Mini Case Studies */}
        <SectionWrapper variant="default">
          <div className="text-center mb-16">
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              How It Works in Practice
            </motion.h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl border border-neutral-300 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-brand-soft-teal px-6 py-4 border-b border-neutral-300">
                  <span className="tag">{study.industry}</span>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-neutral-500 uppercase mb-2">Challenge</h4>
                    <p className="text-neutral-700">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-neutral-500 uppercase mb-2">Solution</h4>
                    <p className="text-neutral-700">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-neutral-500 uppercase mb-2">Outcome</h4>
                    <p className="text-brand-teal font-medium">{study.outcome}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>

        <PrimaryCTASection 
          headline="Ready to Transform Your Governance?"
          subheadline="Let's discuss how our approach can work for your organization."
        />

        <Footer />
      </div>
    </PageTransition>
  );
};

export default ApproachPage;
