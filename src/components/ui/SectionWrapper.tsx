import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: ReactNode;
  variant?: "default" | "hero-home" | "hero-industries" | "hero-services" | "cta-strip" | "soft-teal" | "soft-blue" | "neutral";
  className?: string;
  id?: string;
}

const SectionWrapper = ({ children, variant = "default", className, id }: SectionWrapperProps) => {
  const variantClasses = {
    "default": "bg-background",
    "hero-home": "hero-home",
    "hero-industries": "hero-industries",
    "hero-services": "hero-services",
    "cta-strip": "hero-cta-strip",
    "soft-teal": "bg-soft-teal",
    "soft-blue": "bg-soft-blue",
    "neutral": "bg-neutral-50"
  };

  return (
    <section 
      id={id}
      className={cn(
        "section-padding",
        variantClasses[variant],
        className
      )}
    >
      <div className="container mx-auto px-6">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
