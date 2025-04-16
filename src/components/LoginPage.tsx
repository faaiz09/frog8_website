import React, { useState } from "react";
import QRCode from "react-qr-code";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import {
  Loader2,
  ArrowLeft,
  Smartphone,
  Mail,
  ScanLine,
  LockKeyhole,
  Key,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Modified schema - allow either OTP or referral code
const formSchema = z
  .object({
    loginMethod: z.enum(["otp", "referral"]),
    otp: z.string().optional(),
    referralCode: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.loginMethod === "otp") {
      if (!data.otp || data.otp.length !== 6) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Please enter a valid 6-digit OTP",
          path: ["otp"],
        });
      }
    } else {
      if (!data.referralCode) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Please enter a valid referral code",
          path: ["referralCode"],
        });
      }
    }
  });

const LoginPage = ({ onLogin }: { onLogin: () => void }) => {
  const [showQR, setShowQR] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("otp");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      loginMethod: "otp",
      otp: "",
      referralCode: "",
    },
  });

  // Update the login method when tab changes
  const handleTabChange = (value) => {
    setActiveTab(value);
    form.setValue("loginMethod", value);
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    try {
      // Here you would typically verify either OTP or referral code
      console.log("Login attempt with:", values);
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call
      onLogin();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#a7d222]/10 via-background to-[#a7d222]/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.15),rgba(255,255,255,0))]" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      {/* Animated Circles */}
      <motion.div
        className="absolute top-0 -left-4 w-80 h-80 bg-[#a7d222]/10 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute top-0 -right-4 w-80 h-80 bg-[#a7d222]/20 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, -90, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute -bottom-8 left-20 w-80 h-80 bg-[#a7d222]/15 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 45, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <img
            src="/F8_Logo.png"
            alt="Frog8 Logo"
            className="h-20 drop-shadow-md"
          />
        </motion.div>

        <AnimatePresence mode="wait">
          {showQR ? (
            <motion.div
              key="qr"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, x: -100 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="w-full max-w-md"
            >
              <Card className="border border-[#a7d222]/20 shadow-xl backdrop-blur-sm bg-white/90 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#a7d222]/40 via-[#a7d222] to-[#a7d222]/40"></div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl font-bold text-center text-[#a7d222]">
                    Welcome to Frog8
                  </CardTitle>
                  <CardDescription className="text-center">
                    Scan the QR code to continue to the investor portal
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 pt-4">
                  <div className="p-6 bg-white rounded-lg shadow-inner border border-frog8-primary/10 relative">
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      animate={{ opacity: [0.3, 0.7, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <ScanLine className="w-40 h-40 text-[#a7d222]/10" />
                    </motion.div>
                    <QRCode
                      value="frog8-investor-portal"
                      size={200}
                      className="mx-auto relative z-10"
                    />
                  </div>
                  <div className="space-y-4">
                    <p className="text-center text-muted-foreground">
                      Scan this QR code with your mobile device to get your OTP
                    </p>
                    <Button
                      onClick={() => {
                        setShowQR(false);
                        setShowForm(true);
                      }}
                      className="w-full bg-frog8-primary hover:bg-[#95bd1f] h-12 text-lg font-medium transition-all duration-300 hover:shadow-md"
                    >
                      <Smartphone className="mr-2 h-5 w-5" />
                      Continue to Login
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0, scale: 0.9, x: 100 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="w-full max-w-md"
            >
              <Card className="border border-frog8-primary/20 shadow-xl backdrop-blur-sm bg-white/90 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-frog8-primary/40 via-frog8-primary to-frog8-primary/40"></div>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => {
                        setShowForm(false);
                        setShowQR(true);
                      }}
                      className="hover:bg-[#a7d222]/10 text-frog8-primary rounded-full h-9 w-9"
                    >
                      <ArrowLeft className="h-5 w-5" />
                    </Button>
                    <CardTitle className="text-2xl font-bold text-center text-frog8-primary">
                      Login
                    </CardTitle>
                    <div className="w-9" />
                  </div>
                  <CardDescription className="text-center pt-1">
                    Log in with OTP or referral code
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-2">
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <Tabs
                      defaultValue="otp"
                      value={activeTab}
                      onValueChange={handleTabChange}
                      className="w-full"
                    >
                      <TabsList className="grid w-full grid-cols-2 mb-6">
                        <TabsTrigger value="otp" className="text-sm">
                          <LockKeyhole className="h-4 w-4 mr-2" />
                          Login with OTP
                        </TabsTrigger>
                        <TabsTrigger value="referral" className="text-sm">
                          <Key className="h-4 w-4 mr-2" />
                          Login with Referral
                        </TabsTrigger>
                      </TabsList>

                      <TabsContent value="otp" className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="otp" className="text-sm font-medium">
                            OTP
                          </Label>
                          <Input
                            id="otp"
                            placeholder="Enter 6-digit OTP"
                            {...form.register("otp")}
                            className={cn(
                              "w-full h-12 text-lg bg-white border-frog8-primary/20 focus:border-frog8-primary focus:ring-1 focus:ring-frog8-primary/30 transition-all",
                              form.formState.errors.otp &&
                                "border-red-500 focus:border-red-500 focus:ring-red-500/30"
                            )}
                          />
                          {form.formState.errors.otp && (
                            <p className="text-red-500 text-sm">
                              Please enter a valid 6-digit OTP
                            </p>
                          )}
                        </div>
                      </TabsContent>

                      <TabsContent value="referral" className="space-y-4">
                        <div className="space-y-2">
                          <Label
                            htmlFor="referralCode"
                            className="text-sm font-medium"
                          >
                            Referral Code
                          </Label>
                          <Input
                            id="referralCode"
                            placeholder="Enter your referral code"
                            {...form.register("referralCode")}
                            className={cn(
                              "w-full h-12 text-lg bg-white border-frog8-primary/20 focus:border-frog8-primary focus:ring-1 focus:ring-frog8-primary/30 transition-all",
                              form.formState.errors.referralCode &&
                                "border-red-500 focus:border-red-500 focus:ring-red-500/30"
                            )}
                          />
                          {form.formState.errors.referralCode && (
                            <p className="text-red-500 text-sm">
                              Please enter a valid referral code
                            </p>
                          )}
                        </div>
                      </TabsContent>
                    </Tabs>

                    {/* Form-level errors would go here if needed */}

                    <Button
                      type="submit"
                      className="w-full bg-frog8-primary hover:bg-frog8-primary-dark h-12 text-lg font-medium transition-all duration-300 hover:shadow-md"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Verifying...
                        </>
                      ) : (
                        <>
                          <Mail className="mr-2 h-5 w-5" />
                          Log In
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-6 text-center text-sm text-muted-foreground"
        >
          © {new Date().getFullYear()} Frog8 • Secure Investor Portal
        </motion.div>
      </div>
    </div>
  );
};

export default LoginPage;
