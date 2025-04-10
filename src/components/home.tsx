import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon, ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import QRCodeScanner from "./QRCodeScanner";
import LoginForm from "./LoginForm";
import InvestorDashboard from "./InvestorDashboard";
import TractionTimeline from "./TractionTimeline";
import FounderTeamSection from "./FounderTeamSection";
import VisionMissionSection from "./VisionMissionSection";
import TechStackDiagram from "./TechStackDiagram";
import TestimonialsSection from "./TestimonialsSection";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showQRScanner, setShowQRScanner] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // In a real implementation, you would apply the dark mode class to the document
    // document.documentElement.classList.toggle('dark');
  };

  const handleScanQR = () => {
    setShowQRScanner(true);
  };

  const handleCloseQRScanner = () => {
    setShowQRScanner(false);
  };

  const handleQRScanSuccess = (result: string) => {
    console.log("QR Code scanned:", result);
    setShowQRScanner(false);
    setShowLoginForm(true);
  };

  const handleLoginSuccess = () => {
    setShowLoginForm(false);
    setIsLoggedIn(true);
  };

  if (isLoggedIn) {
    return <InvestorDashboard />;
  }

  return (
    <div
      className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}
    >
      {/* Navigation */}
      <nav
        className={`fixed w-full z-10 ${darkMode ? "bg-gray-800" : "bg-white"} shadow-md`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-2xl font-bold">
                Frog<span className="text-green-500">8</span>
              </h1>
            </motion.div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" onClick={toggleDarkMode}>
              {darkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
            <Button
              onClick={handleScanQR}
              className="bg-green-500 hover:bg-green-600 text-white"
            >
              Scan QR to Login
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div
              className="md:w-1/2 mb-8 md:mb-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                The Future of{" "}
                <span className="text-green-500">Transit Payments</span>
              </h1>
              <p className="text-lg md:text-xl mb-6 opacity-80">
                Building India's smartest unattended payment infrastructure for
                metros.
              </p>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <Button
                  onClick={handleScanQR}
                  className="bg-green-500 hover:bg-green-600 text-white"
                >
                  Investor Access
                </Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </motion.div>
            <motion.div
              className="md:w-1/2 flex justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative w-full max-w-md">
                <img
                  src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80"
                  alt="Transit Payment System"
                  className="rounded-lg shadow-xl w-full"
                />
                <div className="absolute -bottom-5 -right-5 bg-green-500 text-white p-4 rounded-lg shadow-lg">
                  <p className="font-bold">100,000+</p>
                  <p className="text-sm">Daily Tickets</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className={`py-16 ${darkMode ? "bg-gray-800" : "bg-gray-50"}`}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Who We Are</h2>
            <div className="w-20 h-1 bg-green-500 mx-auto"></div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-lg leading-relaxed mb-6">
              Founded in 2021, Frog8 is transforming daily commutes by building
              India's smartest unattended payment infrastructure for metros.
              Partnering with BMRCL and backed by a visionary team, we
              specialize in digitizing transit with seamless, scalable
              solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              <div className="text-center">
                <h3 className="text-4xl font-bold text-green-500">2021</h3>
                <p className="mt-2">Founded</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold text-green-500">133</h3>
                <p className="mt-2">Metro Stations</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold text-green-500">5M+</h3>
                <p className="mt-2">Daily Commuters</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Do</h2>
            <div className="w-20 h-1 bg-green-500 mx-auto"></div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "WhatsApp Ticketing",
                description:
                  "100,000+ tickets issued daily through our WhatsApp-based ticketing system.",
                icon: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&q=80",
              },
              {
                title: "Ticket & Card Vending Machines",
                description:
                  "Deployed at metro stations for convenient self-service transactions.",
                icon: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=400&q=80",
              },
              {
                title: "NCMC Card Issuance",
                description:
                  "Instant, prepaid & credit National Common Mobility Cards for seamless travel.",
                icon: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=400&q=80",
              },
              {
                title: "Commuter Engagement",
                description:
                  "Trained staff to assist commuters and enhance the transit experience.",
                icon: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&q=80",
              },
              {
                title: "App Integration",
                description:
                  "Unified platform for travel and payments in a single application.",
                icon: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=400&q=80",
              },
              {
                title: "Payment Infrastructure",
                description:
                  "Seamless integration with UPI, cards, cash, QR, and wearables.",
                icon: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&q=80",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  className={`h-full ${darkMode ? "bg-gray-800 border-gray-700" : ""}`}
                >
                  <CardContent className="p-6">
                    <div className="mb-4 overflow-hidden rounded-lg">
                      <img
                        src={item.icon}
                        alt={item.title}
                        className="w-full h-48 object-cover transition-transform hover:scale-105 duration-300"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p
                      className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}
                    >
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className={`py-16 ${darkMode ? "bg-gray-800" : "bg-gray-50"}`}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Us</h2>
            <div className="w-20 h-1 bg-green-500 mx-auto"></div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <div className="space-y-6">
                {[
                  "Contracted by BMRCL",
                  "High visibility at 133 metro stations (by 2027)",
                  "5M+ daily commuters = huge captive audience",
                  "Proven expertise with WhatsApp ticketing + kiosk deployments",
                  "Seamless integration with UPI, cards, cash, QR, wearables",
                  "Strategic bank partnerships (e.g., Federal Bank)",
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <p className="ml-3 text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1517732306149-e8f829eb588a?w=800&q=80"
                alt="Metro Station"
                className="rounded-lg shadow-xl w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-lg flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">
                    Strategic Positioning
                  </h3>
                  <p>
                    Uniquely positioned at the intersection of transit and
                    fintech
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* App & Daily Driver Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Your Daily Driver
            </h2>
            <div className="w-20 h-1 bg-green-500 mx-auto mb-4"></div>
            <p className="text-lg max-w-2xl mx-auto">
              One app for travel, top-up, and transit life. Truly your daily
              driver.
            </p>
          </motion.div>
          <div className="relative max-w-4xl mx-auto">
            <div className="flex overflow-x-auto pb-8 space-x-6 snap-x snap-mandatory">
              {[
                {
                  title: "Buy tickets from home",
                  image:
                    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&q=80",
                },
                {
                  title: "Walk into metro",
                  image:
                    "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=400&q=80",
                },
                {
                  title: "Scan QR/NCMC card",
                  image:
                    "https://images.unsplash.com/photo-1622445275576-721325763afe?w=400&q=80",
                },
                {
                  title: "Top up",
                  image:
                    "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&q=80",
                },
                {
                  title: "Get offers",
                  image:
                    "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=400&q=80",
                },
                {
                  title: "Make purchases",
                  image:
                    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&q=80",
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="snap-center flex-shrink-0 w-80"
                >
                  <div
                    className={`rounded-lg overflow-hidden shadow-lg ${darkMode ? "bg-gray-800" : "bg-white"}`}
                  >
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <div className="flex items-center mb-2">
                        <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold mr-3">
                          {index + 1}
                        </div>
                        <h3 className="font-bold">{step.title}</h3>
                      </div>
                      <div className="flex justify-end mt-4">
                        {index < 5 && <ArrowRight className="text-green-500" />}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <VisionMissionSection darkMode={darkMode} />

      {/* Traction Timeline Section */}
      <TractionTimeline />

      {/* Tech Stack Diagram */}
      <TechStackDiagram />

      {/* Founder Team Section */}
      <FounderTeamSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Section */}
      <section className={`py-16 ${darkMode ? "bg-gray-900" : "bg-green-500"}`}>
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2
              className={`text-3xl md:text-4xl font-bold mb-6 ${darkMode ? "text-white" : "text-white"}`}
            >
              Ready to Transform Transit Payments?
            </h2>
            <p
              className={`text-xl mb-8 max-w-2xl mx-auto ${darkMode ? "text-gray-300" : "text-white/90"}`}
            >
              Join us in revolutionizing how millions of people pay for their
              daily commute.
            </p>
            <Button
              onClick={handleScanQR}
              size="lg"
              className={`${darkMode ? "bg-white text-gray-900" : "bg-white text-green-500"} hover:bg-opacity-90`}
            >
              Investor Access
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`py-12 ${darkMode ? "bg-gray-800 text-gray-300" : "bg-gray-100 text-gray-600"}`}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold">
                Frog<span className="text-green-500">8</span>
              </h2>
              <p className="mt-2">
                Building India's smartest transit payment infrastructure
              </p>
            </div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
              <div>
                <h3 className="font-bold mb-2">Contact</h3>
                <p>info@frog8.com</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Location</h3>
                <p>Bangalore, India</p>
              </div>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p>© 2023 Frog8. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <p>Secure Investor Portal</p>
            </div>
          </div>
        </div>
      </footer>

      {/* QR Code Scanner Modal */}
      {showQRScanner && (
        <QRCodeScanner
          isOpen={showQRScanner}
          onOpenChange={setShowQRScanner}
          onScanSuccess={handleQRScanSuccess}
        />
      )}

      {/* Login Form Modal */}
      {showLoginForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="w-full max-w-md p-6">
            <LoginForm onLoginSuccess={handleLoginSuccess} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
