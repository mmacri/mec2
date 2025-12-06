import { useState, useRef, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const services = [
    { name: "Policy & Control Development", path: "/services#policy" },
    { name: "Governance & Process Design", path: "/services#governance" },
    { name: "Staffing & Responsibility Modeling", path: "/services#staffing" },
    { name: "Compliance & Audit Readiness", path: "/services#compliance" },
    { name: "IT Governance & Advisory", path: "/services#it-governance" }
  ];

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Industries", path: "/industries" },
    { name: "Approach", path: "/approach" },
    { name: "About", path: "/about" },
    { name: "Resources", path: "/resources" },
    { name: "Contact", path: "/contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  const handleServiceClick = () => {
    setIsServicesOpen(false);
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white shadow-md py-2" 
          : "bg-white/95 backdrop-blur-sm py-3"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <img 
              src="/mec-logo.png"
              alt="Momentum Edge Consulting" 
              className="h-12 w-auto"
            />
            <div className="hidden sm:block">
              <span className="text-lg font-bold text-brand-navy font-heading">
                Momentum Edge
              </span>
              <span className="block text-xs text-neutral-500 -mt-0.5">Consulting</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link 
              to="/" 
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive("/") 
                  ? "text-brand-teal bg-brand-soft-teal" 
                  : "text-neutral-700 hover:text-brand-teal hover:bg-neutral-100"
              }`}
            >
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive("/services") 
                    ? "text-brand-teal bg-brand-soft-teal" 
                    : "text-neutral-700 hover:text-brand-teal hover:bg-neutral-100"
                }`}
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white shadow-xl rounded-xl border border-neutral-200 overflow-hidden z-50">
                  <div className="p-2">
                    <Link 
                      to="/services"
                      onClick={handleServiceClick}
                      className="block px-4 py-3 text-sm font-semibold text-brand-navy hover:bg-neutral-50 rounded-lg"
                    >
                      All Services
                    </Link>
                    <div className="border-t border-neutral-100 my-1" />
                    {services.map((service, idx) => (
                      <Link
                        key={idx}
                        to={service.path}
                        onClick={handleServiceClick}
                        className="block px-4 py-2.5 text-sm text-neutral-700 hover:text-brand-teal hover:bg-neutral-50 rounded-lg transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {navLinks.slice(1).map((link) => (
              <Link 
                key={link.path}
                to={link.path} 
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.path) 
                    ? "text-brand-teal bg-brand-soft-teal" 
                    : "text-neutral-700 hover:text-brand-teal hover:bg-neutral-100"
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <a 
              href="mailto:momentumedgeconsulting@gmail.com?subject=Strategy Session Request"
              className="ml-4 cta-primary text-sm px-6 py-2.5"
            >
              Schedule a Strategy Session
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg text-neutral-700 hover:bg-neutral-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-6 border-t border-neutral-200 pt-4">
            <div className="flex flex-col gap-1">
              <Link 
                to="/" 
                onClick={() => setIsMenuOpen(false)} 
                className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                  isActive("/") ? "text-brand-teal bg-brand-soft-teal" : "text-neutral-700 hover:bg-neutral-100"
                }`}
              >
                Home
              </Link>
              <Link 
                to="/services" 
                onClick={() => setIsMenuOpen(false)} 
                className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                  isActive("/services") ? "text-brand-teal bg-brand-soft-teal" : "text-neutral-700 hover:bg-neutral-100"
                }`}
              >
                Services
              </Link>
              {navLinks.slice(1).map((link) => (
                <Link 
                  key={link.path}
                  to={link.path} 
                  onClick={() => setIsMenuOpen(false)} 
                  className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                    isActive(link.path) ? "text-brand-teal bg-brand-soft-teal" : "text-neutral-700 hover:bg-neutral-100"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a 
                href="mailto:momentumedgeconsulting@gmail.com?subject=Strategy Session Request"
                onClick={() => setIsMenuOpen(false)}
                className="mt-4 cta-primary text-center"
              >
                Schedule a Strategy Session
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
