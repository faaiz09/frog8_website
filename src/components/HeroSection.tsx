import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useTheme } from '@/components/theme-provider';

const HeroSection = () => {
  const { theme } = useTheme();
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    referralCode: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-frog8-primary/20 to-frog8-secondary/20" />
      
      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-frog8-primary to-frog8-secondary bg-clip-text text-transparent">
                Digital Wallets
              </span>
              <br />
              for Commuters
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Revolutionizing transit payments in India with smart, seamless solutions.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-frog8-primary to-frog8-secondary text-white hover:opacity-90"
              onClick={() => setShowLoginForm(true)}
            >
              Get Started
            </Button>
          </motion.div>

          {/* Right side - QR Code and Login Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl flex flex-col items-center bg-opacity-80 backdrop-blur-md">
              <img 
                src="/raahi_card.jpg" 
                alt="Raahi Card - Digital Transit Payment Solution" 
                className="h-48 w-auto mb-4 object-contain border-4 border-gray-300 shadow-md"
                width={192}
                height={192}
                loading="eager"
              />
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Seamless Payments</h3>
              <p className="text-center text-gray-700 dark:text-gray-300 leading-relaxed">
                Experience the future of transit payments with our secure and efficient digital wallet solutions.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 