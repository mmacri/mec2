import { motion } from "framer-motion";
import { FileText, Download, BookOpen, ListChecks, FileSpreadsheet } from "lucide-react";
import TextLink from "@/components/ui/TextLink";
import Tag from "@/components/ui/Tag";

interface ResourceCardProps {
  title: string;
  description: string;
  category: string;
  type?: string;
  downloadLink?: string;
}

const getTypeIcon = (type?: string) => {
  switch (type) {
    case "Template":
      return FileSpreadsheet;
    case "Checklist":
      return ListChecks;
    case "Article":
      return BookOpen;
    default:
      return FileText;
  }
};

const ResourceCard = ({ title, description, category, type, downloadLink }: ResourceCardProps) => {
  const TypeIcon = getTypeIcon(type);
  
  return (
    <motion.div
      className="card-professional h-full flex flex-col"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex items-center gap-3">
          <div className="icon-container flex-shrink-0">
            <TypeIcon className="w-5 h-5 text-brand-teal" />
          </div>
          <Tag>{category}</Tag>
        </div>
        {type && (
          <span className="text-xs text-neutral-500 bg-neutral-100 px-2 py-1 rounded">
            {type}
          </span>
        )}
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
        <a 
          href="mailto:momentumedgeconsulting@gmail.com?subject=Resource Request"
          className="inline-flex items-center gap-2 text-brand-teal font-medium hover:text-brand-teal-dark transition-colors"
        >
          Request Access →
        </a>
      )}
    </motion.div>
  );
};

export default ResourceCard;
