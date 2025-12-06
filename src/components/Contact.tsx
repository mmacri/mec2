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
    defaultValues: {
      challenges: []
    }
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
    const challengesList = data.challenges.join(", ");
    const body = encodeURIComponent(
      `Name: ${data.name}\n` +
      `Organization: ${data.organization}\n` +
      `Email: ${data.email}\n\n` +
      `Current Challenges:\n${challengesList}\n\n` +
      `Desired Outcome:\n${data.outcome}`
    );
    
    window.location.href = `mailto:momentumedgeconsulting@gmail.com?subject=${subject}&body=${body}`;
    
    toast({
      title: "Opening your email client...",
      description: "Your message has been prepared. Please send the email to complete your request.",
    });
    
    reset();
    setSelectedChallenges([]);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6 heading-enhanced">
              Let's Bring Clarity and Confidence to Your Organization
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Tell us about your current challenges and what you'd like to achieve.
            </p>
          </div>

          {/* Contact Form */}
          <Card className="bg-white rounded-xl p-8 lg:p-10 shadow-lg border border-gray-200">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="text-base font-semibold">Name *</Label>
                  <Input 
                    id="name"
                    {...register("name")}
                    placeholder="Your name"
                    className="mt-2 h-12"
                  />
                  {errors.name && (
                    <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="organization" className="text-base font-semibold">Organization *</Label>
                  <Input 
                    id="organization"
                    {...register("organization")}
                    placeholder="Your organization"
                    className="mt-2 h-12"
                  />
                  {errors.organization && (
                    <p className="text-sm text-red-500 mt-1">{errors.organization.message}</p>
                  )}
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="text-base font-semibold">Email *</Label>
                <Input 
                  id="email"
                  type="email"
                  {...register("email")}
                  placeholder="your.email@organization.com"
                  className="mt-2 h-12"
                />
                {errors.email && (
                  <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <Label className="text-base font-semibold mb-4 block">What are your current challenges? * (select all that apply)</Label>
                <Controller
                  name="challenges"
                  control={control}
                  render={({ field }) => (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {challenges.map((challenge) => (
                        <div 
                          key={challenge}
                          className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200 hover:border-teal-300 hover:bg-teal-50/50 transition-all duration-200"
                        >
                          <Checkbox
                            id={challenge}
                            checked={selectedChallenges.includes(challenge)}
                            onCheckedChange={(checked) => {
                              handleChallengeToggle(challenge, checked as boolean);
                              if (checked) {
                                field.onChange([...field.value, challenge]);
                              } else {
                                field.onChange(field.value.filter((c: string) => c !== challenge));
                              }
                            }}
                          />
                          <label 
                            htmlFor={challenge}
                            className="text-sm font-medium text-gray-700 cursor-pointer flex-1"
                          >
                            {challenge}
                          </label>
                        </div>
                      ))}
                    </div>
                  )}
                />
                {errors.challenges && (
                  <p className="text-sm text-red-500 mt-2">{errors.challenges.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="outcome" className="text-base font-semibold">What outcome do you want to achieve? *</Label>
                <Textarea 
                  id="outcome"
                  {...register("outcome")}
                  placeholder="Describe your goals — for example: 'We need to prepare for an upcoming audit' or 'We want to formalize our governance structure before scaling...'"
                  className="mt-2 min-h-[150px]"
                />
                {errors.outcome && (
                  <p className="text-sm text-red-500 mt-1">{errors.outcome.message}</p>
                )}
              </div>

              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-semibold text-lg px-8 py-6 rounded-lg transition-all duration-300 hover:scale-[1.02] shadow-lg"
              >
                Request an Assessment
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
