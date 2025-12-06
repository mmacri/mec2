import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface TextLinkProps {
  children: ReactNode;
  href?: string;
  to?: string;
  showArrow?: boolean;
  className?: string;
}

const TextLink = ({ children, href, to, showArrow = true, className }: TextLinkProps) => {
  const baseClasses = cn(
    "inline-flex items-center gap-2 text-brand-teal font-medium hover:text-brand-teal-dark transition-colors",
    className
  );

  const content = (
    <>
      {children}
      {showArrow && <ArrowRight className="w-4 h-4" />}
    </>
  );

  if (href) {
    return <a href={href} className={baseClasses}>{content}</a>;
  }

  if (to) {
    return <Link to={to} className={baseClasses}>{content}</Link>;
  }

  return <span className={baseClasses}>{content}</span>;
};

export default TextLink;
