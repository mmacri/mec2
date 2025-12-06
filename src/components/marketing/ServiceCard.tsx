import { ReactNode } from "react";
import { motion } from "framer-motion";
import TextLink from "@/components/ui/TextLink";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  bullets: string[];
  link?: string;
}

const ServiceCard = ({ icon: Icon, title, description, bullets, link }: ServiceCardProps) => {
  return (
    <motion.div
      className="card-professional h-full flex flex-col"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <div className="icon-container mb-6">
        <Icon className="w-6 h-6 text-brand-teal" />
      </div>
      
      <h3 className="text-xl font-semibold text-brand-navy mb-3">{title}</h3>
      <p className="text-neutral-700 mb-4">{description}</p>
      
      <ul className="space-y-2 mb-6 flex-grow">
        {bullets.map((bullet, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-neutral-700">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-teal mt-2 flex-shrink-0" />
            {bullet}
          </li>
        ))}
      </ul>
      
      {link && (
        <TextLink to={link}>
          Learn how this works
        </TextLink>
      )}
    </motion.div>
  );
};

export default ServiceCard;
