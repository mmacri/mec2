import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import EngagementModels from "@/components/EngagementModels";
import PageTransition from "@/components/PageTransition";

const faqData = [
  {
    question: "What is Policy & Control Development?",
    answer: "We create policies and controls that reflect the way your organization actually works — not templates copied from the internet. Deliverables include policies in plain language, control catalogs with owners and evidence expectations, and mapping to regulatory frameworks."
  },
  {
    question: "How does Governance & Process Design help my organization?",
    answer: "Organizations need more than documents — they need structure that defines how work gets done. We provide process flows, SOPs, RACI charts, committee structures, and decision-rights definitions to eliminate unclear workflows and ad-hoc governance."
  },
  {
    question: "What is included in Compliance & Audit Readiness services?",
    answer: "We prepare your organization for any regulatory review with evidence plans, maturity assessments, audit packets, and mock audit sessions to ensure you're fully prepared for upcoming audits."
  },
  {
    question: "Do you provide IT Governance services?",
    answer: "Yes, we provide technology governance for small and mid-size regulated organizations including access and change governance, system responsibility structures, technology process documentation, and IT roadmap alignment."
  },
  {
    question: "What engagement models do you offer?",
    answer: "We offer flexible engagement models including project-based consulting for defined deliverables, ongoing advisory retainers for continuous support, and assessment engagements to identify gaps and create roadmaps."
  }
];

const ServicesPage = () => {
  useEffect(() => {
    // Add FAQ structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqData.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    });
    script.id = 'faq-structured-data';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('faq-structured-data');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-8">
          <Services />
          <EngagementModels />
        </div>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default ServicesPage;
