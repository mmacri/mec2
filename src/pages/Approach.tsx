import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ApproachTimeline from "@/components/marketing/ApproachTimeline";
import PrimaryCTASection from "@/components/marketing/PrimaryCTASection";
import SectionWrapper from "@/components/ui/SectionWrapper";
import PageTransition from "@/components/PageTransition";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Target, Users, Lightbulb, CheckCircle, ArrowRight, FileCheck, MessageSquare, Settings, BarChart } from "lucide-react";
import { Link } from "react-router-dom";

const principles = [
  {
    icon: Target,
    title: "Practical Over Theoretical",
    description: "We focus on what works in your specific environment, not generic frameworks that look good on paper but fail in practice."
  },
  {
    icon: Users,
    title: "Human-Centered Design",
    description: "Governance only works if people follow it. We design for adoption, not just compliance."
  },
  {
    icon: Lightbulb,
    title: "Clarity Before Complexity",
    description: "Simple, understandable structures that scale with your organization."
  },
  {
    icon: CheckCircle,
    title: "Sustainable Change",
    description: "We help embed governance into daily operations for lasting impact, not just a one-time fix."
  }
];

const engagementPhases = [
  {
    phase: "01",
    title: "Discovery Call",
    duration: "30 minutes",
    icon: MessageSquare,
    description: "We start with a focused conversation to understand your current state, challenges, and goals.",
    deliverables: [
      "Initial assessment of your situation",
      "Identification of priority areas",
      "Clear next steps and recommendations"
    ]
  },
  {
    phase: "02",
    title: "Assessment & Analysis",
    duration: "1-2 weeks",
    icon: BarChart,
    description: "Deep dive into your existing policies, processes, and pain points to identify gaps and opportunities.",
    deliverables: [
      "Current-state documentation",
      "Gap analysis and prioritization",
      "Recommendations roadmap"
    ]
  },
  {
    phase: "03",
    title: "Design & Development",
    duration: "4-8 weeks",
    icon: Settings,
    description: "We create tailored governance structures, policies, and processes aligned with your operations.",
    deliverables: [
      "Custom policies and procedures",
      "Process documentation",
      "Role and responsibility clarity"
    ]
  },
  {
    phase: "04",
    title: "Implementation & Handoff",
    duration: "2-4 weeks",
    icon: FileCheck,
    description: "Support your team in adopting new structures with training, guidance, and adjustment.",
    deliverables: [
      "Implementation support",
      "Staff training and guidance",
      "Documentation handoff"
    ]
  }
];

const ApproachPage = () => {
  return (
    <PageTransition>
      <SEO 
        title="Our Approach"
        description="Learn how Momentum Edge Consulting works with regulated organizations. Our practical, step-by-step approach delivers sustainable governance structures."
        canonical="/approach"
      />
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
                How We Work With You
              </motion.h1>
              
              <motion.p
                className="text-lg lg:text-xl text-neutral-700 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                A practical, structured process designed for regulated organizations. 
                From discovery to implementation, we partner with your team to deliver 
                sustainable governance.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Our Guiding Principles */}
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
            <motion.p 
              className="section-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              What sets our approach apart
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                className="flex gap-4 p-6 bg-white rounded-xl border border-neutral-300 hover:border-brand-teal/30 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="icon-container flex-shrink-0">
                  <principle.icon className="w-5 h-5 text-brand-teal" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-brand-navy mb-2">{principle.title}</h3>
                  <p className="text-neutral-700 text-sm leading-relaxed">{principle.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>

        {/* Engagement Process */}
        <SectionWrapper variant="soft-blue">
          <div className="text-center mb-16">
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              What to Expect
            </motion.h2>
            <motion.p 
              className="section-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              A step-by-step engagement model designed for clarity and outcomes
            </motion.p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {engagementPhases.map((phase, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl border border-neutral-300 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/3 bg-brand-soft-teal p-6 lg:p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-3xl font-bold text-brand-teal font-heading">{phase.phase}</span>
                      <phase.icon className="w-8 h-8 text-brand-teal" />
                    </div>
                    <h3 className="text-xl font-bold text-brand-navy mb-2">{phase.title}</h3>
                    <span className="text-sm text-neutral-600 bg-white/50 px-3 py-1 rounded-full inline-block w-fit">
                      {phase.duration}
                    </span>
                  </div>
                  <div className="lg:w-2/3 p-6 lg:p-8">
                    <p className="text-neutral-700 mb-6">{phase.description}</p>
                    <h4 className="text-sm font-semibold text-brand-navy uppercase mb-3">What You Get</h4>
                    <ul className="space-y-2">
                      {phase.deliverables.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-neutral-700 text-sm">
                          <CheckCircle className="w-4 h-4 text-brand-teal mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>

        {/* 5-Step Timeline */}
        <SectionWrapper variant="default">
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
              How governance transformation unfolds
            </motion.p>
          </div>

          <ApproachTimeline />
        </SectionWrapper>

        {/* Ready to Start */}
        <SectionWrapper variant="soft-teal">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-navy mb-6 font-heading">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-neutral-700 mb-8">
              Every engagement starts with a 30-minute discovery call. 
              No commitment, no sales pitch — just a focused conversation about your challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:momentumedgeconsulting@gmail.com?subject=Discovery Call Request"
                className="cta-primary"
              >
                Request a Discovery Call
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </a>
              <Link
                to="/services"
                className="cta-secondary"
              >
                Explore Our Services
              </Link>
            </div>
          </motion.div>
        </SectionWrapper>

        <PrimaryCTASection 
          headline="Questions About How We Work?"
          subheadline="We're happy to explain our process and discuss your specific situation."
        />

        <Footer />
      </div>
    </PageTransition>
  );
};

export default ApproachPage;
