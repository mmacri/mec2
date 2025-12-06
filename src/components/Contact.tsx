import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "./ScrollAnimation";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  organization: z.string().trim().min(2, "Organization must be at least 2 characters").max(100, "Organization must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  challenges: z.array(z.string()).min(1, "Please select at least one challenge"),
  outcome: z.string().trim().min(10, "Please describe your desired outcome").max(2000, "Description must be less than 2000 characters")
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [selectedChallenges, setSelectedChallenges] = useState<string[]>([]);
  
  const { register, handleSubmit, formState: { errors }, reset, control } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { challenges: [] }
  });

  const challenges = [
    "Policies outdated or unclear",
    "Roles and responsibilities undefined",
    "Compliance gaps or audit concerns",
    "Governance structures need formalization",
    "Process documentation lacking",
    "IT governance needs improvement",
    "Preparing for regulatory inspection",
    "Other"
  ];

  const handleChallengeToggle = (challenge: string, checked: boolean) => {
    if (checked) {
      setSelectedChallenges(prev => [...prev, challenge]);
    } else {
      setSelectedChallenges(prev => prev.filter(c => c !== challenge));
    }
  };

  const onSubmit = (data: ContactFormData) => {
    const subject = encodeURIComponent("Governance & Compliance Assessment Request");
    const body = encodeURIComponent(
      `Name: ${data.name}\nOrganization: ${data.organization}\nEmail: ${data.email}\n\nCurrent Challenges:\n${data.challenges.join(", ")}\n\nDesired Outcome:\n${data.outcome}`
    );
    
    window.location.href = `mailto:momentumedgeconsulting@gmail.com?subject=${subject}&body=${body}`;
    toast({ title: "Opening your email client...", description: "Please send the email to complete your request." });
    reset();
    setSelectedChallenges([]);
  };

  return (
    <section className="section-padding bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <ScrollAnimation className="text-center mb-12">
            <h2 className="section-title mb-4">
              Let's Bring Clarity and Confidence to Your Organization
            </h2>
            <p className="text-lg text-slate-600">
              Tell us about your current challenges and what you'd like to achieve.
            </p>
          </ScrollAnimation>

          {/* Form */}
          <ScrollAnimation delay={0.2} variant="scale">
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl border-0">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <Label htmlFor="name" className="text-sm font-semibold text-slate-700">Name *</Label>
                      <Input 
                        id="name"
                        {...register("name")}
                        placeholder="Your name"
                        className="mt-2 h-12 border-slate-200 focus:border-teal-500 focus:ring-teal-500"
                      />
                      {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>}
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 }}
                    >
                      <Label htmlFor="organization" className="text-sm font-semibold text-slate-700">Organization *</Label>
                      <Input 
                        id="organization"
                        {...register("organization")}
                        placeholder="Your organization"
                        className="mt-2 h-12 border-slate-200 focus:border-teal-500 focus:ring-teal-500"
                      />
                      {errors.organization && <p className="text-sm text-red-500 mt-1">{errors.organization.message}</p>}
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Label htmlFor="email" className="text-sm font-semibold text-slate-700">Email *</Label>
                    <Input 
                      id="email"
                      type="email"
                      {...register("email")}
                      placeholder="your.email@organization.com"
                      className="mt-2 h-12 border-slate-200 focus:border-teal-500 focus:ring-teal-500"
                    />
                    {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                  >
                    <Label className="text-sm font-semibold text-slate-700 mb-4 block">
                      What are your current challenges? * <span className="font-normal text-slate-500">(select all that apply)</span>
                    </Label>
                    <Controller
                      name="challenges"
                      control={control}
                      render={({ field }) => (
                        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-3" staggerDelay={0.05}>
                          {challenges.map((challenge) => (
                            <StaggerItem key={challenge}>
                              <motion.div 
                                className={`flex items-center space-x-3 p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                                  selectedChallenges.includes(challenge) 
                                    ? 'border-teal-500 bg-teal-50' 
                                    : 'border-slate-200 hover:border-slate-300'
                                }`}
                                onClick={() => {
                                  const newChecked = !selectedChallenges.includes(challenge);
                                  handleChallengeToggle(challenge, newChecked);
                                  if (newChecked) {
                                    field.onChange([...field.value, challenge]);
                                  } else {
                                    field.onChange(field.value.filter((c: string) => c !== challenge));
                                  }
                                }}
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.99 }}
                              >
                                <Checkbox
                                  checked={selectedChallenges.includes(challenge)}
                                  className="border-slate-300 data-[state=checked]:bg-teal-500 data-[state=checked]:border-teal-500"
                                />
                                <span className="text-sm text-slate-700">{challenge}</span>
                              </motion.div>
                            </StaggerItem>
                          ))}
                        </StaggerContainer>
                      )}
                    />
                    {errors.challenges && <p className="text-sm text-red-500 mt-2">{errors.challenges.message}</p>}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Label htmlFor="outcome" className="text-sm font-semibold text-slate-700">What outcome do you want to achieve? *</Label>
                    <Textarea 
                      id="outcome"
                      {...register("outcome")}
                      placeholder="Describe your goals — for example: 'We need to prepare for an upcoming audit' or 'We want to formalize our governance structure before scaling...'"
                      className="mt-2 min-h-[140px] border-slate-200 focus:border-teal-500 focus:ring-teal-500"
                    />
                    {errors.outcome && <p className="text-sm text-red-500 mt-1">{errors.outcome.message}</p>}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                  >
                    <motion.button 
                      type="submit"
                      className="w-full cta-primary h-14 text-base group"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      Request an Assessment
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                    </motion.button>
                  </motion.div>
                </form>
              </Card>
            </motion.div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Contact;
