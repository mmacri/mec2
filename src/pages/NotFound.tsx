import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import SEO from "@/components/SEO";

const NotFound = () => {
  return (
    <>
      <SEO 
        title="Page Not Found"
        description="The page you're looking for doesn't exist or has been moved."
        noindex={true}
      />
      <div className="min-h-screen bg-brand-soft-blue flex items-center justify-center px-6">
      <motion.div 
        className="text-center max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-8">
          <span className="text-8xl font-bold text-brand-navy font-heading">404</span>
        </div>
        
        <h1 className="text-2xl font-bold text-brand-navy mb-4 font-heading">
          Page Not Found
        </h1>
        
        <p className="text-neutral-700 mb-8">
          The page you're looking for doesn't exist or has been moved. 
          Let's get you back on track.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="cta-primary">
            <Home className="w-5 h-5 mr-2 inline" />
            Back to Home
          </Link>
          <Link to="/contact" className="cta-secondary">
            <ArrowLeft className="w-5 h-5 mr-2 inline" />
            Contact Us
          </Link>
        </div>
      </motion.div>
    </div>
    </>
  );
};

export default NotFound;
