import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface OutcomeCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const OutcomeCard = ({ icon: Icon, title, description }: OutcomeCardProps) => {
  return (
    <motion.div
      className="bg-white rounded-xl border border-neutral-300 p-6 text-center"
      whileHover={{ y: -4, borderColor: "hsl(173, 73%, 28%)" }}
      transition={{ duration: 0.2 }}
    >
      <div className="icon-container mx-auto mb-4">
        <Icon className="w-6 h-6 text-brand-teal" />
      </div>
      <h4 className="text-lg font-semibold text-brand-navy mb-2">{title}</h4>
      <p className="text-neutral-700 text-sm">{description}</p>
    </motion.div>
  );
};

export default OutcomeCard;
