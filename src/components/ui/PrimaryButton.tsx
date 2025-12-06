import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface PrimaryButtonProps {
  children: ReactNode;
  href?: string;
  to?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
}

const PrimaryButton = ({ children, href, to, onClick, className, type = "button" }: PrimaryButtonProps) => {
  const baseClasses = cn("cta-primary", className);

  if (href) {
    return (
      <a href={href} className={baseClasses}>
        {children}
      </a>
    );
  }

  if (to) {
    return (
      <Link to={to} className={baseClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseClasses}>
      {children}
    </button>
  );
};

export default PrimaryButton;
