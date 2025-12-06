import { useState, useRef, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  
  const isHomePage = location.pathname === "/";

  const services = [
    { name: "Policy & Control Development", path: "/services#policy" },
    { name: "Governance & Process Design", path: "/services#governance" },
    { name: "Staffing & Responsibility Modeling", path: "/services#staffing" },
    { name: "Compliance & Audit Readiness", path: "/services#compliance" },
    { name: "IT Governance & Advisory", path: "/services#it-governance" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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

  const handleServiceClick = () => {
    setIsServicesOpen(false);
    setIsMenuOpen(false);
  };

  const logoPath = "/mec-logo.png";
  
  // Always show solid header for professional appearance
  // Only use transparent on homepage hero before scroll
  const showTransparent = isHomePage && !isScrolled && !isMenuOpen;

  return (
    <header 
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        showTransparent 
          ? "bg-navy/90 backdrop-blur-md border-white/10" 
          : "bg-white shadow-md border-slate-200"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center hover:opacity-90 transition-opacity">
            <div className={`rounded-lg transition-all duration-300 ${
              showTransparent ? "bg-white/95 px-3 py-1 shadow-sm" : ""
            }`}>
              <img 
                src={logoPath}
                alt="Momentum Edge Consulting" 
                className="h-14 w-auto md:h-16 lg:h-20 object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fallback = document.createElement('div');
                  fallback.innerHTML = `<span class="text-xl font-bold text-navy">Momentum Edge</span>`;
                  e.currentTarget.parentNode?.appendChild(fallback);
                }}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-medium text-sm tracking-wide transition-colors duration-200 ${
                showTransparent 
                  ? "text-white hover:text-teal-light" 
                  : "text-navy hover:text-teal"
              }`}
            >
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`flex items-center font-medium text-sm tracking-wide transition-colors duration-200 ${
                  showTransparent 
                    ? "text-white hover:text-teal-light" 
                    : "text-navy hover:text-teal"
                }`}
              >
                Services
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white shadow-2xl rounded-xl border border-slate-200 overflow-hidden z-50">
                  <div className="p-2">
                    {services.map((service, idx) => (
                      <a
                        key={idx}
                        href={service.path}
                        onClick={handleServiceClick}
                        className="block px-4 py-3 text-sm text-slate hover:text-teal hover:bg-teal-light/50 rounded-lg transition-colors"
                      >
                        {service.name}
                      </a>
                    ))}
                    <div className="border-t border-slate-200 mt-2 pt-2">
                      <Link 
                        to="/services"
                        onClick={handleServiceClick}
                        className="block px-4 py-3 text-sm font-medium text-teal hover:bg-teal-light rounded-lg transition-colors"
                      >
                        View All Services →
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/industries" 
              className={`font-medium text-sm tracking-wide transition-colors duration-200 ${
                showTransparent 
                  ? "text-white hover:text-teal-light" 
                  : "text-navy hover:text-teal"
              }`}
            >
              Who We Serve
            </Link>
            <Link 
              to="/about" 
              className={`font-medium text-sm tracking-wide transition-colors duration-200 ${
                showTransparent 
                  ? "text-white hover:text-teal-light" 
                  : "text-navy hover:text-teal"
              }`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`font-medium text-sm tracking-wide transition-colors duration-200 ${
                showTransparent 
                  ? "text-white hover:text-teal-light" 
                  : "text-navy hover:text-teal"
              }`}
            >
              Contact
            </Link>
            
            <a 
              href="mailto:momentumedgeconsulting@gmail.com?subject=Assessment Request"
              className={`font-medium px-6 py-2.5 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md ${
                showTransparent 
                  ? "bg-teal hover:bg-teal-dark text-white" 
                  : "bg-teal hover:bg-teal-dark text-white"
              }`}
            >
              Request Assessment
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              showTransparent 
                ? "text-white hover:bg-white/10" 
                : "text-navy hover:bg-slate-100"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-6 bg-white rounded-b-xl shadow-lg">
            <div className="flex flex-col space-y-1 pt-4 border-t border-slate-200">
              <Link 
                to="/" 
                onClick={() => setIsMenuOpen(false)} 
                className="px-4 py-3 text-navy hover:text-teal hover:bg-teal-light/30 rounded-lg font-medium"
              >
                Home
              </Link>
              <Link 
                to="/services" 
                onClick={() => setIsMenuOpen(false)} 
                className="px-4 py-3 text-navy hover:text-teal hover:bg-teal-light/30 rounded-lg font-medium"
              >
                Services
              </Link>
              <Link 
                to="/industries" 
                onClick={() => setIsMenuOpen(false)} 
                className="px-4 py-3 text-navy hover:text-teal hover:bg-teal-light/30 rounded-lg font-medium"
              >
                Who We Serve
              </Link>
              <Link 
                to="/about" 
                onClick={() => setIsMenuOpen(false)} 
                className="px-4 py-3 text-navy hover:text-teal hover:bg-teal-light/30 rounded-lg font-medium"
              >
                About
              </Link>
              <Link 
                to="/contact" 
                onClick={() => setIsMenuOpen(false)} 
                className="px-4 py-3 text-navy hover:text-teal hover:bg-teal-light/30 rounded-lg font-medium"
              >
                Contact
              </Link>
              <a 
                href="mailto:momentumedgeconsulting@gmail.com?subject=Assessment Request"
                onClick={() => setIsMenuOpen(false)}
                className="mx-4 mt-4 bg-teal hover:bg-teal-dark text-white font-medium py-3 rounded-lg text-center transition-colors"
              >
                Request Assessment
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;