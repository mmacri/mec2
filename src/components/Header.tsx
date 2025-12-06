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
    handleScroll(); // Check initial position
    
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
  
  // Dynamic styles based on scroll and page
  const isTransparent = isHomePage && !isScrolled && !isMenuOpen;
  
  const headerClasses = isTransparent
    ? "bg-transparent border-transparent"
    : "bg-white/95 backdrop-blur-sm shadow-sm border-slate-100";
  
  const navLinkClasses = isTransparent
    ? "text-white/90 hover:text-white"
    : "text-slate hover:text-teal";
  
  const logoFilter = isTransparent ? "brightness-0 invert" : "";
  
  const menuButtonClasses = isTransparent
    ? "text-white hover:bg-white/10"
    : "text-slate hover:bg-slate-100";
  
  const ctaClasses = isTransparent
    ? "bg-white/20 hover:bg-white/30 text-white border border-white/30"
    : "bg-teal hover:bg-teal-dark text-white";

  return (
    <header className={`sticky top-0 z-50 border-b transition-all duration-300 ${headerClasses}`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center hover:opacity-90 transition-opacity">
            <img 
              src={logoPath}
              alt="Momentum Edge Consulting" 
              className={`h-14 w-auto md:h-16 lg:h-20 object-contain transition-all duration-300 ${logoFilter}`}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const fallback = document.createElement('div');
                fallback.innerHTML = `<span class="text-xl font-bold ${isTransparent ? 'text-white' : 'text-navy'}">Momentum Edge</span>`;
                e.currentTarget.parentNode?.appendChild(fallback);
              }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className={`font-medium text-sm tracking-wide transition-colors duration-200 ${navLinkClasses}`}>Home</Link>
            
            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`flex items-center font-medium text-sm tracking-wide transition-colors duration-200 ${navLinkClasses}`}
              >
                Services
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white shadow-xl rounded-xl border border-border overflow-hidden animate-fade-up">
                  <div className="p-2">
                    {services.map((service, idx) => (
                      <a
                        key={idx}
                        href={service.path}
                        onClick={handleServiceClick}
                        className="block px-4 py-3 text-sm text-slate hover:text-teal hover:bg-sand rounded-lg transition-colors"
                      >
                        {service.name}
                      </a>
                    ))}
                    <div className="border-t border-border mt-2 pt-2">
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

            <Link to="/industries" className={`font-medium text-sm tracking-wide transition-colors duration-200 ${navLinkClasses}`}>Who We Serve</Link>
            <Link to="/about" className={`font-medium text-sm tracking-wide transition-colors duration-200 ${navLinkClasses}`}>About</Link>
            <Link to="/contact" className={`font-medium text-sm tracking-wide transition-colors duration-200 ${navLinkClasses}`}>Contact</Link>
            
            <a 
              href="mailto:momentumedgeconsulting@gmail.com?subject=Assessment Request"
              className={`font-medium px-6 py-2.5 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md ${ctaClasses}`}
            >
              Request Assessment
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${menuButtonClasses}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-6 animate-fade-up bg-white rounded-b-xl">
            <div className="flex flex-col space-y-1 pt-4 border-t border-border">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="px-4 py-3 text-slate hover:text-teal hover:bg-sand rounded-lg font-medium">
                Home
              </Link>
              <Link to="/services" onClick={() => setIsMenuOpen(false)} className="px-4 py-3 text-slate hover:text-teal hover:bg-sand rounded-lg font-medium">
                Services
              </Link>
              <Link to="/industries" onClick={() => setIsMenuOpen(false)} className="px-4 py-3 text-slate hover:text-teal hover:bg-sand rounded-lg font-medium">
                Who We Serve
              </Link>
              <Link to="/about" onClick={() => setIsMenuOpen(false)} className="px-4 py-3 text-slate hover:text-teal hover:bg-sand rounded-lg font-medium">
                About
              </Link>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="px-4 py-3 text-slate hover:text-teal hover:bg-sand rounded-lg font-medium">
                Contact
              </Link>
              <a 
                href="mailto:momentumedgeconsulting@gmail.com?subject=Assessment Request"
                onClick={() => setIsMenuOpen(false)}
                className="mx-4 mt-4 bg-teal text-white font-medium py-3 rounded-lg text-center"
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