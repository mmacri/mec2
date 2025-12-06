import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const serviceCategories = [
    {
      title: "Core Services",
      items: [
        { name: "Policy & Control Development", path: "/services#policy" },
        { name: "Governance & Process Design", path: "/services#governance" },
        { name: "Staffing & Responsibility Modeling", path: "/services#staffing" }
      ]
    },
    {
      title: "Compliance & IT",
      items: [
        { name: "Compliance & Audit Readiness", path: "/services#compliance" },
        { name: "IT Governance & Advisory", path: "/services#it-governance" }
      ]
    }
  ];

  // Close dropdown when clicking outside
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

  // Use the MEC logo
  const logoPath = "/mec-logo.png";

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-2">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 hover:opacity-90 transition-all duration-300 hover:scale-105">
              <img 
                src={logoPath}
                alt="Momentum Edge Consulting - MEC" 
                className="h-16 w-auto md:h-20 lg:h-24 object-contain"
                onError={(e) => {
                  console.error("Logo failed to load:", logoPath);
                  e.currentTarget.style.display = 'none';
                  const fallback = document.createElement('div');
                  fallback.innerHTML = '<h1 class="text-2xl font-bold text-teal-600">Momentum Edge Consulting</h1>';
                  e.currentTarget.parentNode?.appendChild(fallback);
                }}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link to="/" className="nav-link">
              Home
            </Link>
            
            {/* Services Mega Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center nav-link"
              >
                Services
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[500px] bg-white shadow-2xl rounded-lg z-50 border border-teal-100 animate-fade-in">
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-6">
                      {serviceCategories.map((category, idx) => (
                        <div key={idx}>
                          <h3 className="text-xs font-semibold text-teal-600 uppercase tracking-wide mb-3">
                            {category.title}
                          </h3>
                          <ul className="space-y-2">
                            {category.items.map((item, itemIdx) => (
                              <li key={itemIdx}>
                                <a
                                  href={item.path}
                                  onClick={handleServiceClick}
                                  className="block py-2 px-3 text-sm font-medium text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-md transition-all duration-200"
                                >
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <Link 
                        to="/services"
                        onClick={handleServiceClick}
                        className="text-sm font-semibold text-teal-600 hover:text-teal-700 flex items-center"
                      >
                        View All Services →
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link to="/industries" className="nav-link">
              Who We Serve
            </Link>
            <Link to="/about" className="nav-link">
              About
            </Link>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
            
            <a 
              href="mailto:momentumedgeconsulting@gmail.com?subject=Assessment Request&body=Hello, I would like to request a governance and compliance assessment."
              className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 hover-scale shadow-lg inline-flex items-center justify-center"
              style={{ boxShadow: '0 4px 14px rgba(20, 184, 166, 0.4)' }}
            >
              Request Assessment
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-6 animate-fade-in max-h-[70vh] overflow-y-auto">
            <div className="flex flex-col space-y-3">
              <Link 
                to="/" 
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-teal-600 transition-colors duration-300 font-medium py-2"
              >
                Home
              </Link>
              
              <div>
                <Link 
                  to="/services" 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-900 font-semibold mb-2 block hover:text-teal-600 transition-colors py-2"
                >
                  All Services
                </Link>
                
                {serviceCategories.map((category, idx) => (
                  <div key={idx} className="mb-3">
                    <p className="text-xs font-semibold text-teal-600 uppercase tracking-wide mb-2 pl-4">
                      {category.title}
                    </p>
                    {category.items.map((item, itemIdx) => (
                      <a
                        key={itemIdx}
                        href={item.path}
                        onClick={handleServiceClick}
                        className="block py-2 pl-6 text-sm font-medium text-gray-600 hover:text-teal-600 hover:bg-teal-50 rounded transition-colors duration-300"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                ))}
              </div>
              
              <Link 
                to="/industries" 
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-teal-600 transition-colors duration-300 font-medium py-2"
              >
                Who We Serve
              </Link>
              <Link 
                to="/about" 
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-teal-600 transition-colors duration-300 font-medium py-2"
              >
                About
              </Link>
              <Link 
                to="/contact" 
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-teal-600 transition-colors duration-300 font-medium py-2"
              >
                Contact
              </Link>
              
              <a 
                href="mailto:momentumedgeconsulting@gmail.com?subject=Assessment Request&body=Hello, I would like to request a governance and compliance assessment."
                onClick={() => setIsMenuOpen(false)}
                className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-semibold w-full py-3 rounded-lg transition-all duration-300 shadow-lg mt-4 text-center inline-block"
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
