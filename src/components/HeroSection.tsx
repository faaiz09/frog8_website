import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useTheme } from '@/components/theme-provider';
import { ArrowRight, Sparkles } from 'lucide-react';

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
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-frog8-primary/10 via-background to-frog8-primary/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.15),rgba(255,255,255,0))]" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      {/* Animated Shapes */}
      <motion.div
        className="absolute top-20 -left-20 w-96 h-96 bg-frog8-primary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 45, 0],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute bottom-20 -right-20 w-96 h-96 bg-frog8-secondary/15 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -45, 0],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      
      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left space-y-8"
          >
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-frog8-primary/10 border border-frog8-primary/20 text-frog8-primary text-sm font-medium mb-2">
              <Sparkles className="h-4 w-4 mr-2" />
              Transforming Transit Payments
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-frog8-primary to-frog8-secondary bg-clip-text text-transparent">
                Digital Wallets
              </span>
              <br />
              for Commuters
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-xl">
              Revolutionizing transit payments in India with smart, seamless solutions that make your daily commute hassle-free.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-frog8-primary to-frog8-secondary text-white hover:opacity-90 h-14 px-8 text-lg font-medium shadow-lg shadow-frog8-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-frog8-primary/30"
                onClick={() => setShowLoginForm(true)}
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="border-frog8-primary/20 text-frog8-primary hover:bg-frog8-primary/5 h-14 px-8 text-lg font-medium transition-all duration-300"
              >
                Learn More
              </Button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start space-x-6 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                    <img 
                      src={`/avatar-${i}.jpg`} 
                      alt="User" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=User+${i}&background=random`;
                      }}
                    />
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <p className="font-semibold">1,000+ users</p>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-1 text-gray-500">4.9/5</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Card Display */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center items-center"
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-frog8-primary/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-frog8-secondary/10 rounded-full blur-xl"></div>
              
              {/* Card container with 3D effect */}
              <motion.div 
                className="bg-white/90 dark:bg-gray-800/90 p-8 rounded-3xl shadow-2xl backdrop-blur-md border border-white/20 dark:border-gray-700/20 relative overflow-hidden"
                whileHover={{ 
                  rotateY: 5, 
                  rotateX: -5,
                  scale: 1.02,
                  transition: { duration: 0.5 }
                }}
              >
                {/* Gradient overlay */}
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-frog8-primary/20 to-frog8-secondary/20 rounded-full blur-3xl"></div>
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <img 
                      src="/F8_Logo.png" 
                      alt="Frog8 Logo" 
                      className="h-10 w-auto"
                    />
                    <div className="bg-gradient-to-r from-frog8-primary to-frog8-secondary p-0.5 rounded-full">
                      <div className="bg-white dark:bg-gray-800 rounded-full p-1.5">
                        <Sparkles className="h-5 w-5 text-frog8-primary" />
                      </div>
                    </div>
                  </div>
                  
                  <img 
                    src="/raahi_card.jpg" 
                    alt="Raahi Card - Digital Transit Payment Solution" 
                    className="h-56 w-auto mx-auto mb-6 object-contain rounded-xl shadow-lg border-2 border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl hover:scale-105"
                    width={224}
                    height={224}
                    loading="eager"
                  />
                  
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">Seamless Payments</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    Experience the future of transit payments with our secure and efficient digital wallet solutions.
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span className="text-sm font-medium">Active Status</span>
                    </div>
                    <Button 
                      variant="ghost" 
                      className="text-frog8-primary hover:bg-frog8-primary/10"
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;