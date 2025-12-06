import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Policy & Control Development", path: "/services#policy" },
    { name: "Governance & Process Design", path: "/services#governance" },
    { name: "Staffing & Responsibility Modeling", path: "/services#staffing" },
    { name: "Compliance & Audit Readiness", path: "/services#compliance" },
    { name: "IT Governance & Advisory", path: "/services#it-governance" }
  ];

  const industries = [
    { name: "Medical Practices", path: "/industries#medical" },
    { name: "Utilities & Infrastructure", path: "/industries#utilities" },
    { name: "Compliance-Driven Firms", path: "/industries#compliance" }
  ];

  const company = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Approach", path: "/approach" },
    { name: "Resources", path: "/resources" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <footer className="footer-bg py-16 lg:py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <span className="text-xl font-bold text-white font-heading">
                Momentum Edge Consulting
              </span>
            </Link>
            <p className="text-neutral-300 text-sm leading-relaxed mb-6">
              Clarity. Structure. Compliance. Confidence.
            </p>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Helping regulated organizations design policies, controls, and governance 
              structures for operational confidence.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="footer-heading">Services</h4>
            <ul className="space-y-3">
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
            <ul className="space-y-3">
              {industries.map((industry) => (
                <li key={industry.path}>
                  <Link to={industry.path} className="footer-link">
                    {industry.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="footer-heading mt-8">Company</h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="footer-link">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="footer-heading">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="mailto:momentumedgeconsulting@gmail.com"
                  className="footer-link flex items-start gap-3"
                >
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>momentumedgeconsulting@gmail.com</span>
                </a>
              </li>
            </ul>

            <div className="mt-8">
              <a
                href="mailto:momentumedgeconsulting@gmail.com?subject=Strategy Session Request"
                className="cta-teal text-sm px-6 py-3"
              >
                Schedule a Strategy Session
              </a>
            </div>
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
