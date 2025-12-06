import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FounderBioCard from "@/components/marketing/FounderBioCard";
import PartnerOrgStrip from "@/components/marketing/PartnerOrgStrip";
import PrimaryCTASection from "@/components/marketing/PrimaryCTASection";
import SectionWrapper from "@/components/ui/SectionWrapper";
import PageTransition from "@/components/PageTransition";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Target, Users, Shield, Lightbulb } from "lucide-react";
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

const AboutPage = () => {
  return (
    <PageTransition>
      <SEO 
        title="About Us"
        description="Learn about Momentum Edge Consulting's mission to bring structure and clarity to regulated organizations. Meet our leadership and see our values."
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
                Experience that brings structure to complex environments
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
                To bring clarity, consistency, and sustainable structure to regulated organizations — 
                medical practices, utilities, and compliance-driven firms — so they can operate 
                confidently, improve operational consistency, and focus on what they do best.
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
                    <h3 className="text-lg font-semibold text-brand-navy mb-1 font-heading">{value.title}</h3>
                    <p className="text-neutral-700 text-sm">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </SectionWrapper>

        {/* Leadership */}
        <SectionWrapper variant="soft-blue">
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
        <SectionWrapper variant="default">
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
        <SectionWrapper variant="soft-teal">
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
          headline="Ready to work together?"
          subheadline="Let's discuss how Momentum Edge can help your organization."
        />

        <Footer />
      </div>
    </PageTransition>
  );
};

export default AboutPage;
