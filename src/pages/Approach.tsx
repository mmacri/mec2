import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ApproachTimeline from "@/components/marketing/ApproachTimeline";
import PrimaryCTASection from "@/components/marketing/PrimaryCTASection";
import SectionWrapper from "@/components/ui/SectionWrapper";
import PageTransition from "@/components/PageTransition";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Target, Users, Lightbulb, CheckCircle, ArrowRight } from "lucide-react";
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

const ApproachPage = () => {
  return (
    <PageTransition>
      <SEO 
        title="Our Approach"
        description="Learn how Momentum Edge Consulting works with regulated organizations. A practical, human-centered approach to operational clarity."
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
                A practical, human-centered approach to operational clarity
              </motion.h1>
              
              <motion.p
                className="text-lg lg:text-xl text-neutral-700 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                From discovery to implementation, we partner with your team to deliver 
                sustainable governance structures that work in the real world.
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
                  <h3 className="text-lg font-semibold text-brand-navy mb-2 font-heading">{principle.title}</h3>
                  <p className="text-neutral-700 text-sm leading-relaxed">{principle.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>

        {/* 4-Step Timeline */}
        <SectionWrapper variant="soft-blue">
          <div className="text-center mb-16">
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              How We Work
            </motion.h2>
            <motion.p 
              className="section-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              A step-by-step process designed for clarity and outcomes
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
              Every engagement starts with a focused conversation about your challenges.
              No commitment, no sales pitch — just clarity on how we can help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:momentumedgeconsulting@gmail.com?subject=Strategy Call Request"
                className="cta-primary"
              >
                Schedule a Strategy Call
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
          headline="Questions about how we work?"
          subheadline="We're happy to explain our process and discuss your specific situation."
        />

        <Footer />
      </div>
    </PageTransition>
  );
};

export default ApproachPage;
