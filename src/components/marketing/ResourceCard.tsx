import { motion } from "framer-motion";
import { FileText, Download } from "lucide-react";
import TextLink from "@/components/ui/TextLink";
import Tag from "@/components/ui/Tag";

interface ResourceCardProps {
  title: string;
  description: string;
  category: string;
  downloadLink?: string;
}

const ResourceCard = ({ title, description, category, downloadLink }: ResourceCardProps) => {
  return (
    <motion.div
      className="card-professional h-full flex flex-col"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="icon-container flex-shrink-0">
          <FileText className="w-5 h-5 text-brand-teal" />
        </div>
        <Tag>{category}</Tag>
      </div>
      
      <h3 className="text-lg font-semibold text-brand-navy mb-3">{title}</h3>
      <p className="text-neutral-700 text-sm mb-6 flex-grow">{description}</p>
      
      {downloadLink ? (
        <a 
          href={downloadLink}
          className="inline-flex items-center gap-2 text-brand-teal font-medium hover:text-brand-teal-dark transition-colors"
        >
          <Download className="w-4 h-4" />
          Download Resource
        </a>
      ) : (
        <TextLink to="/contact">Learn More</TextLink>
      )}
    </motion.div>
  );
};

export default ResourceCard;
