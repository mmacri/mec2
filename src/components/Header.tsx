import { useState, useRef, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const services = [
    { name: "Policy & Control Development", path: "/services#policy" },
    { name: "Governance & Process Design", path: "/services#governance" },
    { name: "Staffing & Responsibility Modeling", path: "/services#staffing" },
    { name: "Compliance & Audit Readiness", path: "/services#compliance" },
    { name: "IT Governance & Advisory", path: "/services#it-governance" }
  ];

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

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-slate-100">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center hover:opacity-90 transition-opacity">
            <img 
              src={logoPath}
              alt="Momentum Edge Consulting" 
              className="h-14 w-auto md:h-16 lg:h-20 object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const fallback = document.createElement('div');
                fallback.innerHTML = '<span class="text-xl font-bold text-slate-900">Momentum Edge</span>';
                e.currentTarget.parentNode?.appendChild(fallback);
              }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="nav-link">Home</Link>
            
            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="nav-link flex items-center"
              >
                Services
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white shadow-xl rounded-xl border border-slate-100 overflow-hidden animate-fade-up">
                  <div className="p-2">
                    {services.map((service, idx) => (
                      <a
                        key={idx}
                        href={service.path}
                        onClick={handleServiceClick}
                        className="block px-4 py-3 text-sm text-slate-600 hover:text-teal-600 hover:bg-slate-50 rounded-lg transition-colors"
                      >
                        {service.name}
                      </a>
                    ))}
                    <div className="border-t border-slate-100 mt-2 pt-2">
                      <Link 
                        to="/services"
                        onClick={handleServiceClick}
                        className="block px-4 py-3 text-sm font-medium text-teal-600 hover:bg-teal-50 rounded-lg transition-colors"
                      >
                        View All Services →
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link to="/industries" className="nav-link">Who We Serve</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
            
            <a 
              href="mailto:momentumedgeconsulting@gmail.com?subject=Assessment Request"
              className="bg-teal-500 hover:bg-teal-600 text-white font-medium px-6 py-2.5 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Request Assessment
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6 text-slate-600" /> : <Menu className="w-6 h-6 text-slate-600" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-6 animate-fade-up">
            <div className="flex flex-col space-y-1 pt-4 border-t border-slate-100">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="px-4 py-3 text-slate-600 hover:text-teal-600 hover:bg-slate-50 rounded-lg font-medium">
                Home
              </Link>
              <Link to="/services" onClick={() => setIsMenuOpen(false)} className="px-4 py-3 text-slate-600 hover:text-teal-600 hover:bg-slate-50 rounded-lg font-medium">
                Services
              </Link>
              <Link to="/industries" onClick={() => setIsMenuOpen(false)} className="px-4 py-3 text-slate-600 hover:text-teal-600 hover:bg-slate-50 rounded-lg font-medium">
                Who We Serve
              </Link>
              <Link to="/about" onClick={() => setIsMenuOpen(false)} className="px-4 py-3 text-slate-600 hover:text-teal-600 hover:bg-slate-50 rounded-lg font-medium">
                About
              </Link>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="px-4 py-3 text-slate-600 hover:text-teal-600 hover:bg-slate-50 rounded-lg font-medium">
                Contact
              </Link>
              <a 
                href="mailto:momentumedgeconsulting@gmail.com?subject=Assessment Request"
                onClick={() => setIsMenuOpen(false)}
                className="mx-4 mt-4 bg-teal-500 text-white font-medium py-3 rounded-lg text-center"
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
