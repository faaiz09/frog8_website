import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Calendar,
  Download,
  Send,
  PhoneCall,
  FileText,
  Smartphone,
  Check,
  Loader2,
} from "lucide-react";

const InvestorCTA = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formType, setFormType] = useState<"call" | "deck" | "sandbox">("call");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccessMessage(true);

      // Reset after showing success message
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    }, 1500);
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Interested in Joining the Journey?
          </h2>
          <div className="w-20 h-1 bg-green-500 mx-auto mb-4"></div>
          <p className="text-lg max-w-2xl mx-auto text-muted-foreground">
            Connect with our team to explore investment opportunities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Dialog>
            <DialogTrigger asChild>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="cursor-pointer"
                onClick={() => setFormType("call")}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 flex flex-col items-center text-center h-full">
                    <div className="w-16 h-16 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center mb-4">
                      <PhoneCall className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Book a Call</h3>
                    <p className="text-muted-foreground mb-6">
                      Schedule a call with our founding team to discuss
                      investment opportunities
                    </p>
                    <Button className="mt-auto">
                      <Calendar className="h-4 w-4 mr-2" />
                      Schedule Now
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </DialogTrigger>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="cursor-pointer"
              onClick={() => setFormType("deck")}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center h-full">
                  <div className="w-16 h-16 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center mb-4">
                    <FileText className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Investor Deck</h3>
                  <p className="text-muted-foreground mb-6">
                    Download our detailed investor presentation with financial
                    projections
                  </p>
                  <DialogTrigger asChild>
                    <Button className="mt-auto">
                      <Download className="h-4 w-4 mr-2" />
                      Request Deck
                    </Button>
                  </DialogTrigger>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="cursor-pointer"
              onClick={() => setFormType("sandbox")}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center h-full">
                  <div className="w-16 h-16 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center mb-4">
                    <Smartphone className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Sandbox Access</h3>
                  <p className="text-muted-foreground mb-6">
                    Try our platform with sandbox access to experience the
                    technology firsthand
                  </p>
                  <DialogTrigger asChild>
                    <Button className="mt-auto">
                      <Send className="h-4 w-4 mr-2" />
                      Request Access
                    </Button>
                  </DialogTrigger>
                </CardContent>
              </Card>
            </motion.div>

            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>
                  {formType === "call"
                    ? "Schedule a Call"
                    : formType === "deck"
                      ? "Request Investor Deck"
                      : "Request Sandbox Access"}
                </DialogTitle>
                <DialogDescription>
                  {formType === "call"
                    ? "Please provide your details to schedule a call with our team."
                    : formType === "deck"
                      ? "Complete the form to receive our detailed investor presentation."
                      : "Fill in your information to get access to our sandbox environment."}
                </DialogDescription>
              </DialogHeader>

              {showSuccessMessage ? (
                <div className="py-6 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <Check className="h-8 w-8 text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Thank You!</h3>
                  <p className="text-center text-muted-foreground">
                    {formType === "call"
                      ? "We'll be in touch shortly to confirm your call."
                      : formType === "deck"
                        ? "The investor deck will be sent to your email shortly."
                        : "You'll receive sandbox access credentials via email soon."}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First name</Label>
                      <Input id="first-name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last name</Label>
                      <Input id="last-name" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder={
                        formType === "call"
                          ? "Please suggest a few convenient times for a call."
                          : "Any specific information you're looking for?"
                      }
                      className="min-h-[100px]"
                    />
                  </div>

                  <DialogFooter className="mt-6">
                    <Button
                      type="submit"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                          Submitting...
                        </>
                      ) : formType === "call" ? (
                        "Schedule Call"
                      ) : formType === "deck" ? (
                        "Request Deck"
                      ) : (
                        "Request Access"
                      )}
                    </Button>
                  </DialogFooter>
                </form>
              )}
            </DialogContent>
          </Dialog>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-4">
            For direct inquiries, contact our investment relations team
          </p>
          <a
            href="mailto:investors@frog8.com"
            className="text-green-500 hover:text-green-600 font-bold"
          >
            investors@frog8.com
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default InvestorCTA;
