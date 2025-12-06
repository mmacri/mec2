import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/ui/SectionWrapper";
import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";
import { Mail, Clock, CheckCircle, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const industries = [
  "Medical Practice / Healthcare",
  "Utilities / Infrastructure",
  "Financial Services",
  "Government / Public Sector",
  "Other Compliance-Driven"
];

const whatHappensNext = [
  "We'll review your submission within 1 business day",
  "Schedule a 30-minute discovery call at your convenience",
  "Provide initial recommendations tailored to your situation",
  "Outline potential next steps with no obligation"
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    industry: "",
    description: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = encodeURIComponent(`Contact from ${formData.name} - ${formData.organization}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Organization: ${formData.organization}\n` +
      `Email: ${formData.email}\n` +
      `Industry: ${formData.industry}\n\n` +
      `Description of Need:\n${formData.description}`
    );
    
    window.location.href = `mailto:momentumedgeconsulting@gmail.com?subject=${subject}&body=${body}`;
    
    toast({
      title: "Opening email client",
      description: "Your message details have been prepared.",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

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
                Let's Build a Clear, Sustainable Governance Model
              </motion.h1>
              
              <motion.p
                className="text-lg lg:text-xl text-neutral-700 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Tell us about your organization and the challenges you're facing. 
                We'll get back to you within one business day.
              </motion.p>
            </div>
          </div>
        </section>

        <SectionWrapper variant="default">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Form */}
              <motion.div
                className="lg:col-span-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-brand-navy mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                        placeholder="John Smith"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-brand-navy mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                        placeholder="john@organization.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="organization" className="block text-sm font-medium text-brand-navy mb-2">
                        Organization *
                      </label>
                      <input
                        type="text"
                        id="organization"
                        name="organization"
                        required
                        value={formData.organization}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                        placeholder="Acme Healthcare"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="industry" className="block text-sm font-medium text-brand-navy mb-2">
                        Industry *
                      </label>
                      <select
                        id="industry"
                        name="industry"
                        required
                        value={formData.industry}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent bg-white"
                      >
                        <option value="">Select your industry</option>
                        {industries.map((industry) => (
                          <option key={industry} value={industry}>{industry}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-brand-navy mb-2">
                      Description of Your Governance Needs *
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      required
                      rows={5}
                      value={formData.description}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent resize-none"
                      placeholder="Tell us about your current challenges, upcoming audits, or governance goals..."
                    />
                  </div>

                  <button type="submit" className="cta-primary w-full md:w-auto">
                    Submit Request
                    <ArrowRight className="w-5 h-5 ml-2 inline" />
                  </button>
                </form>
              </motion.div>

              {/* Sidebar */}
              <motion.div
                className="lg:col-span-1"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="bg-brand-soft-teal rounded-xl p-6 sticky top-32">
                  <h3 className="text-lg font-semibold text-brand-navy mb-6 font-heading">
                    What Happens Next?
                  </h3>
                  
                  <ul className="space-y-4 mb-8">
                    {whatHappensNext.map((step, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-brand-teal mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-neutral-700">{step}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="border-t border-brand-teal/20 pt-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Clock className="w-5 h-5 text-brand-teal" />
                      <span className="text-sm font-medium text-brand-navy">Response Time</span>
                    </div>
                    <p className="text-sm text-neutral-700">
                      We typically respond within 1 business day.
                    </p>
                  </div>

                  <div className="mt-6 pt-6 border-t border-brand-teal/20">
                    <div className="flex items-center gap-3 mb-4">
                      <Mail className="w-5 h-5 text-brand-teal" />
                      <span className="text-sm font-medium text-brand-navy">Prefer Email?</span>
                    </div>
                    <a 
                      href="mailto:momentumedgeconsulting@gmail.com"
                      className="text-sm text-brand-teal hover:text-brand-teal-dark"
                    >
                      momentumedgeconsulting@gmail.com
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </SectionWrapper>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default ContactPage;
