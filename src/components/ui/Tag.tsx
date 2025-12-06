import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TagProps {
  children: ReactNode;
  variant?: "default" | "gold" | "navy";
  className?: string;
}

const Tag = ({ children, variant = "default", className }: TagProps) => {
  const variants = {
    default: "tag",
    gold: "inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-brand-gold text-brand-navy",
    navy: "inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-brand-navy text-white"
  };

  return (
    <span className={cn(variants[variant], className)}>
      {children}
    </span>
  );
};

export default Tag;
