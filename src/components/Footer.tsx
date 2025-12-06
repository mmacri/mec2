import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-bg py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Momentum Edge Consulting</h3>
            <p className="text-gray-400 leading-relaxed mb-4 max-w-md">
              Clarity. Structure. Compliance. Confidence.
            </p>
            <p className="text-gray-400 leading-relaxed max-w-md">
              Helping healthcare practices, utilities, and regulated organizations design the policies, 
              controls, governance structures, and operational processes needed to run with confidence.
            </p>
          </div>
          <div>
            <h4 className="footer-heading">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/services#policy" className="footer-link">Policy & Control Development</Link></li>
              <li><Link to="/services#governance" className="footer-link">Governance & Process Design</Link></li>
              <li><Link to="/services#compliance" className="footer-link">Compliance & Audit Readiness</Link></li>
              <li><Link to="/services#it-governance" className="footer-link">IT Governance & Advisory</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/about" className="footer-link">About</Link></li>
              <li><Link to="/industries" className="footer-link">Who We Serve</Link></li>
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Momentum Edge Consulting. All rights reserved.
            </p>
            <a href="mailto:momentumedgeconsulting@gmail.com" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">
              momentumedgeconsulting@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
