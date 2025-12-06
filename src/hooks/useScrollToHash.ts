import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      // Small delay to ensure DOM is ready after page transition
      const timer = setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          const headerOffset = 100; // Account for fixed header
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 100);

      return () => clearTimeout(timer);
    } else {
      // Scroll to top when navigating to a page without hash
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);
};

export default useScrollToHash;
