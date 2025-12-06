import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Policy & Control Development", path: "/services#policy" },
    { name: "Governance & Process Design", path: "/services#governance" },
    { name: "Compliance & Audit Readiness", path: "/services#compliance" },
    { name: "IT Governance & Advisory", path: "/services#it-governance" }
  ];

  const industries = [
    { name: "Medical Practices", path: "/industries" },
    { name: "Utilities & Infrastructure", path: "/industries" },
    { name: "Compliance-Driven Firms", path: "/industries" }
  ];

  return (
    <footer className="footer-bg py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-white mb-4">Momentum Edge Consulting</h3>
            <p className="text-slate-400 leading-relaxed mb-6">
              Clarity. Structure. Compliance. Confidence.
            </p>
            <p className="text-slate-500 text-sm leading-relaxed">
              Helping regulated organizations design policies, controls, and governance structures 
              for operational confidence.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="footer-heading">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
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
              {industries.map((industry, index) => (
                <li key={index}>
                  <Link to={industry.path} className="footer-link">
                    {industry.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-heading">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/about" className="footer-link">About</Link></li>
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-500 text-sm mb-4 md:mb-0">
              © {currentYear} Momentum Edge Consulting. All rights reserved.
            </p>
            <a 
              href="mailto:momentumedgeconsulting@gmail.com"
              className="text-slate-400 hover:text-teal-400 transition-colors text-sm"
            >
              momentumedgeconsulting@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
