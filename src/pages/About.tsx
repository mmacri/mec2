import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FounderBioCard from "@/components/marketing/FounderBioCard";
import PartnerOrgStrip from "@/components/marketing/PartnerOrgStrip";
import PrimaryCTASection from "@/components/marketing/PrimaryCTASection";
import SectionWrapper from "@/components/ui/SectionWrapper";
import PageTransition from "@/components/PageTransition";
import useScrollToHash from "@/hooks/useScrollToHash";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Target, Users, Shield, Lightbulb, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  {
    icon: Target,
    title: "Clarity",
    description: "We cut through complexity to deliver clear, actionable governance structures."
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We work alongside your team, not above them. Your expertise + our methodology."
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "We tell you what you need to hear, not what you want to hear."
  },
  {
    icon: Lightbulb,
    title: "Practicality",
    description: "Every recommendation is designed to work in your real-world environment."
  }
];

const caseStudies = [
  {
    industry: "Healthcare",
    type: "Multi-Physician Practice",
    challenge: "A multi-physician practice struggling with inconsistent patient intake processes and unclear staff responsibilities.",
    solution: "Mapped workflows, clarified roles with RACI, developed plain-language SOPs.",
    outcome: "Reduced patient wait times, clear accountability, audit-ready documentation.",
    metrics: ["40% reduction in patient wait times", "100% role clarity across staff", "Audit-ready in 6 weeks"]
  },
  {
    industry: "Utilities",
    type: "Regional Utility Provider",
    challenge: "A utility company facing an upcoming regulatory inspection with scattered documentation and undefined control ownership.",
    solution: "Conducted gap assessment, developed control catalog, established evidence management process.",
    outcome: "Passed inspection with no major findings, established ongoing governance rhythm.",
    metrics: ["Zero major audit findings", "30+ controls documented", "Sustainable governance model"]
  }
];

const AboutPage = () => {
  useScrollToHash();
  
  return (
    <PageTransition>
      <SEO 
        title="About Us"
        description="Learn about Momentum Edge Consulting's mission to modernize governance for regulated organizations. Meet our leadership and see real client outcomes."
        canonical="/about"
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
                Bringing Structure and Clarity to Regulated Teams
              </motion.h1>
              
              <motion.p
                className="text-lg lg:text-xl text-neutral-700 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                We help organizations that can't afford governance failures build the 
                structures they need to operate with confidence.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <SectionWrapper variant="default">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="bg-brand-soft-blue rounded-xl p-8 lg:p-12 text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl lg:text-3xl font-bold text-brand-navy mb-6 font-heading">
                Our Mission
              </h2>
              <p className="text-lg text-neutral-700 leading-relaxed">
                To modernize and structure the operational foundation of regulated organizations — 
                medical practices, utilities, and compliance-driven firms — so they can operate 
                confidently, pass audits without surprises, and focus on what they do best.
              </p>
            </motion.div>

            <motion.h2 
              className="section-title text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Our Values
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="flex gap-4 p-6 bg-white rounded-xl border border-neutral-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="icon-container flex-shrink-0">
                    <value.icon className="w-5 h-5 text-brand-teal" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-brand-navy mb-1">{value.title}</h3>
                    <p className="text-neutral-700 text-sm">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </SectionWrapper>

        {/* Case Studies */}
        <SectionWrapper variant="soft-blue">
          <div className="text-center mb-16">
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Real Results for Real Organizations
            </motion.h2>
            <motion.p 
              className="section-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              See how we've helped organizations like yours
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
                  <div className="flex items-center justify-between">
                    <span className="tag">{study.industry}</span>
                    <span className="text-sm text-neutral-600">{study.type}</span>
                  </div>
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
                    <p className="text-brand-teal font-medium mb-3">{study.outcome}</p>
                    <div className="flex flex-wrap gap-2">
                      {study.metrics.map((metric, i) => (
                        <span key={i} className="inline-flex items-center gap-1 text-xs bg-brand-soft-teal text-brand-navy px-3 py-1 rounded-full">
                          <CheckCircle className="w-3 h-3 text-brand-teal" />
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>

        {/* Leadership */}
        <SectionWrapper variant="default">
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              className="section-title text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Leadership
            </motion.h2>

            <FounderBioCard />
          </div>
        </SectionWrapper>

        {/* Partners */}
        <SectionWrapper variant="soft-teal">
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              className="section-title text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Strategic Partnerships
            </motion.h2>

            <PartnerOrgStrip />
          </div>
        </SectionWrapper>

        {/* Link to Approach */}
        <SectionWrapper variant="default">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-brand-navy mb-4 font-heading">
              Want to Know How We Work?
            </h2>
            <p className="text-neutral-700 mb-6">
              Learn about our step-by-step engagement process and what to expect.
            </p>
            <Link to="/approach" className="cta-secondary inline-flex items-center gap-2">
              View Our Approach →
            </Link>
          </motion.div>
        </SectionWrapper>

        <PrimaryCTASection 
          headline="Ready to Work Together?"
          subheadline="Let's discuss how Momentum Edge can help your organization."
        />

        <Footer />
      </div>
    </PageTransition>
  );
};

export default AboutPage;
