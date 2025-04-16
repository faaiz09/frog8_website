import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const CallToAction = () => {
  return (
    <section id="call-to-action" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-frog8-primary/20 to-frog8-secondary/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.2),rgba(255,255,255,0))]" />
      
      {/* Animated Shapes */}
      <motion.div
        className="absolute top-20 -right-20 w-80 h-80 bg-frog8-primary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 45, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute bottom-20 -left-20 w-80 h-80 bg-frog8-secondary/15 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -45, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 dark:border-gray-700/20 overflow-hidden">
          <div className="absolute top-0 right-0 w-60 h-60 bg-gradient-to-br from-frog8-primary/20 to-frog8-secondary/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
          
          <div className="relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10"
            >
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-frog8-primary/10 border border-frog8-primary/20 text-frog8-primary text-sm font-medium mb-4">
                <Send className="h-4 w-4 mr-2" />
                Get Started Today
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to <span className="bg-gradient-to-r from-frog8-primary to-frog8-secondary bg-clip-text text-transparent">Transform</span> Your Transit Experience?
              </h2>
              
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Join thousands of commuters who are already enjoying the benefits of Frog8's digital wallet solutions. Sign up now to get early access.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-md mx-auto"
            >
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <Input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="h-12 bg-white dark:bg-gray-800 border-frog8-primary/20 focus:border-frog8-primary focus:ring-1 focus:ring-frog8-primary/30"
                />
                <Button 
                  className="h-12 bg-gradient-to-r from-frog8-primary to-frog8-secondary text-white hover:opacity-90 whitespace-nowrap"
                >
                  Get Early Access
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              <div className="text-center text-sm text-muted-foreground">
                By signing up, you agree to our <a href="#" className="text-frog8-primary hover:underline">Terms of Service</a> and <a href="#" className="text-frog8-primary hover:underline">Privacy Policy</a>.
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
            >
              {[
                { label: "Active Users", value: "1M+" },
                { label: "Transit Partners", value: "50+" },
                { label: "Cities Covered", value: "15+" },
                { label: "Customer Satisfaction", value: "98%" }
              ].map((stat, index) => (
                <div key={index} className="p-4">
                  <div className="text-2xl md:text-3xl font-bold text-frog8-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6 text-center"
            >
              <div className="flex items-center space-x-4">
                <a href="#" className="transition-transform hover:scale-105">
                  <img 
                    src="/app-store-badge.png" 
                    alt="Download on App Store" 
                    className="h-12 object-contain" 
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg";
                      target.onerror = null;
                    }}
                  />
                </a>
                <a href="#" className="transition-transform hover:scale-105">
                  <img 
                    src="/google-play-badge.png" 
                    alt="Get it on Google Play" 
                    className="h-12 object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png";
                      target.onerror = null;
                    }}
                  />
                </a>
              </div>
              <div className="text-sm text-muted-foreground">
                Download our mobile app to manage your wallet on the go
              </div>
            </motion.div>
          </div>
        </div>
        
        <div className="mt-16 text-center text-sm text-muted-foreground">
          <div className="mb-4">
            <img src="/F8_Logo.png" alt="Frog8 Logo" className="h-10 mx-auto" />
          </div>
          <div className="mb-4 flex flex-wrap justify-center gap-6">
            <a href="#" className="hover:text-frog8-primary transition-colors">Home</a>
            <a href="#" className="hover:text-frog8-primary transition-colors">About Us</a>
            <a href="#" className="hover:text-frog8-primary transition-colors">Solutions</a>
            <a href="#" className="hover:text-frog8-primary transition-colors">Investors</a>
            <a href="#" className="hover:text-frog8-primary transition-colors">Contact</a>
            <a href="#" className="hover:text-frog8-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-frog8-primary transition-colors">Terms of Service</a>
          </div>
          <div>
            © {new Date().getFullYear()} Frog8 Technologies. All rights reserved.
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;