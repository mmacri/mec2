import { Link } from "react-router-dom";
import { Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Policy & Control Development", path: "/services#policy" },
    { name: "Governance & Process Design", path: "/services#governance" },
    { name: "Staffing & Responsibility Modeling", path: "/services#staffing" },
    { name: "Compliance & Audit Readiness", path: "/services#compliance" },
    { name: "IT Governance & Advisory", path: "/services#it-governance" },
    { name: "Technology Advisory", path: "/services#technology" }
  ];

  const industries = [
    { name: "Medical Practices", path: "/industries#medical" },
    { name: "Utilities & Infrastructure", path: "/industries#utilities" },
    { name: "Compliance-Driven Firms", path: "/industries#compliance" }
  ];

  const company = [
    { name: "Home", path: "/" },
    { name: "Our Approach", path: "/approach" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" }
  ];

  const resources = [
    { name: "Governance Insights", path: "/resources" },
    { name: "Case Studies", path: "/about#approach" }
  ];

  return (
    <footer className="footer-bg py-16 lg:py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <span className="text-xl font-bold text-white font-heading">
                Momentum Edge Consulting
              </span>
            </Link>
            <p className="text-neutral-300 text-sm leading-relaxed mb-4">
              Clarity. Structure. Compliance. Confidence.
            </p>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              Helping regulated organizations design policies, controls, and governance 
              structures for operational confidence.
            </p>
            <a
              href="mailto:momentumedgeconsulting@gmail.com?subject=Strategy Session Request"
              className="cta-teal text-sm px-5 py-2.5"
            >
              Schedule a Strategy Session
            </a>
          </div>

          {/* Services */}
          <div>
            <h4 className="footer-heading">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.path}>
                  <Link to={service.path} className="footer-link">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="footer-heading">Who We Serve</h4>
            <ul className="space-y-2">
              {industries.map((industry) => (
                <li key={industry.path}>
                  <Link to={industry.path} className="footer-link">
                    {industry.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="footer-heading mt-6">Resources</h4>
            <ul className="space-y-2">
              {resources.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="footer-link">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Contact */}
          <div>
            <h4 className="footer-heading">Company</h4>
            <ul className="space-y-2 mb-6">
              {company.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="footer-link">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="footer-heading">Contact</h4>
            <a 
              href="mailto:momentumedgeconsulting@gmail.com"
              className="footer-link flex items-start gap-2 text-xs"
            >
              <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>momentumedgeconsulting<br/>@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-400 text-sm">
              © {currentYear} Momentum Edge Consulting. All rights reserved.
            </p>
            <p className="text-neutral-500 text-sm">
              Strategic collaboration with IDMA3 for GRC expertise
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
