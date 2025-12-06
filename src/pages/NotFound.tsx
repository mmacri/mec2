import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
        <Header />
        <div className="flex items-center justify-center bg-gray-50 py-20">
          <div className="text-center max-w-md mx-auto px-6">
            <h1 className="text-6xl font-bold text-slate-900 mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-slate-700 mb-4">Page Not Found</h2>
            <p className="text-slate-600 mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <div className="space-y-4">
              <Link 
                to="/" 
                className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg inline-block"
              >
                Return to Home
              </Link>
              <div>
                <Link to="/services" className="text-teal-600 hover:text-teal-700 mx-2">Services</Link>
                <span className="text-slate-400">|</span>
                <Link to="/about" className="text-teal-600 hover:text-teal-700 mx-2">About</Link>
                <span className="text-slate-400">|</span>
                <Link to="/contact" className="text-teal-600 hover:text-teal-700 mx-2">Contact</Link>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default NotFound;
