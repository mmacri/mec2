import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const NewsletterSignupStrip = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you!",
      description: "You've been added to our newsletter.",
    });
    setEmail("");
  };

  return (
    <motion.div
      className="bg-brand-soft-blue rounded-xl p-8 lg:p-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="lg:flex lg:items-center lg:justify-between gap-8">
        <div className="mb-6 lg:mb-0">
          <div className="flex items-center gap-3 mb-3">
            <Mail className="w-6 h-6 text-brand-teal" />
            <h3 className="text-xl font-semibold text-brand-navy font-heading">
              Stay Updated
            </h3>
          </div>
          <p className="text-neutral-700">
            Get practical governance insights delivered to your inbox.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="flex gap-3 flex-1 max-w-md">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent"
          />
          <button
            type="submit"
            className="cta-primary px-6 py-3"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default NewsletterSignupStrip;
