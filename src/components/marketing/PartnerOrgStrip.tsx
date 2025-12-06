import { motion } from "framer-motion";

const PartnerOrgStrip = () => {
  return (
    <motion.div
      className="bg-neutral-50 rounded-xl border border-neutral-300 p-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        <p className="text-neutral-500 text-sm uppercase tracking-wider mb-6">
          Strategic Collaboration
        </p>
        
        <div className="flex items-center justify-center gap-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-brand-navy font-heading">IDMA3</div>
            <p className="text-sm text-neutral-700 mt-2">
              Collaboration for GRC Expertise
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PartnerOrgStrip;
