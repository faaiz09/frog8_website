import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CreditCard, Smartphone, Wallet, Zap, ArrowRight, ChevronRight, Clock, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const WhatWeDo = () => {
  const [activeTab, setActiveTab] = useState("card");
  
  const features = [
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "Digital Transit Cards",
      description: "Contactless payment cards that work across all transit systems, eliminating the need for cash or multiple cards."
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile Wallet",
      description: "Manage your transit payments, track expenses, and reload your balance from anywhere using our intuitive mobile app."
    },
    {
      icon: <Wallet className="h-6 w-6" />,
      title: "Unified Payment System",
      description: "One account for all your transit needs - buses, metros, trains, and more with automatic fare calculation."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Instant Transactions",
      description: "Lightning-fast payment processing with no delays, even during peak hours or in areas with limited connectivity."
    }
  ];

  const benefits = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Save Time",
      description: "No more waiting in long queues for tickets. Tap and go with our digital payment solutions."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Enhanced Security",
      description: "Advanced encryption and authentication protocols keep your money and data safe."
    }
  ];

  return (
    <section id="what-we-do" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-tl from-frog8-primary/5 via-background to-frog8-secondary/5" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(0deg,transparent,white,transparent)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-frog8-primary/10 border border-frog8-primary/20 text-frog8-primary text-sm font-medium mb-4">
              <Zap className="h-4 w-4 mr-2" />
              Our Solutions
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What We <span className="bg-gradient-to-r from-frog8-primary to-frog8-secondary bg-clip-text text-transparent">Do</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              We're building the next generation of transit payment solutions that make commuting easier, faster, and more convenient for everyone.
            </p>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-4 group"
                >
                  <div className="bg-frog8-primary/10 p-3 rounded-lg text-frog8-primary flex-shrink-0 group-hover:bg-frog8-primary/20 transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-frog8-primary transition-colors duration-300">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10"
            >
              <Button 
                className="bg-frog8-primary hover:bg-frog8-primary-dark text-white group"
              >
                Explore All Solutions
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-frog8-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-frog8-secondary/10 rounded-full blur-3xl"></div>
            
            <Tabs defaultValue="card" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-3 mb-6">
                <TabsTrigger value="card">Card</TabsTrigger>
                <TabsTrigger value="app">Mobile App</TabsTrigger>
                <TabsTrigger value="history">History</TabsTrigger>
              </TabsList>
              
              <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-frog8-primary/10 to-frog8-secondary/10 rounded-full blur-2xl -mr-20 -mt-20"></div>
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10"
                  >
                    <TabsContent value="card" className="mt-0">
                      <div className="flex justify-between items-center mb-8">
                        <h3 className="text-xl font-bold">Raahi Wallet</h3>
                        <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                          Active
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-frog8-primary to-frog8-secondary p-1 rounded-2xl mb-6">
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-4">
                          <img 
                            src="/raahi_card.jpg" 
                            alt="Raahi Card" 
                            className="w-full h-auto rounded-lg shadow-md"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Balance</span>
                          <span className="font-bold text-xl">₹1,250.00</span>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Card Number</span>
                          <span className="font-mono">•••• •••• •••• 4289</span>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Status</span>
                          <span className="text-green-600 font-medium">Active</span>
                        </div>
                        
                        <div className="pt-4 flex space-x-3">
                          <Button className="flex-1 bg-frog8-primary hover:bg-frog8-primary-dark">
                            Add Money
                          </Button>
                          <Button variant="outline" className="flex-1 border-frog8-primary/20 text-frog8-primary hover:bg-frog8-primary/5">
                            View History
                          </Button>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="app" className="mt-0">
                      <div className="flex justify-between items-center mb-8">
                        <h3 className="text-xl font-bold">Mobile Application</h3>
                        <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                          Available Now
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-frog8-primary to-frog8-secondary p-1 rounded-2xl mb-6">
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 flex justify-center">
                          <img 
                            src="/app-mockup.png" 
                            alt="Frog8 Mobile App" 
                            className="h-64 object-contain"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = "https://placehold.co/300x600/frog8-primary/white?text=Frog8+App";
                            }}
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                          <Zap className="h-5 w-5 text-frog8-primary" />
                          <div>
                            <h4 className="font-medium">Real-time Balance Updates</h4>
                            <p className="text-sm text-muted-foreground">Track your spending instantly</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                          <Shield className="h-5 w-5 text-frog8-primary" />
                          <div>
                            <h4 className="font-medium">Secure Authentication</h4>
                            <p className="text-sm text-muted-foreground">Biometric and PIN protection</p>
                          </div>
                        </div>
                        
                        <div className="pt-4 flex space-x-3">
                          <Button className="flex-1 bg-frog8-primary hover:bg-frog8-primary-dark">
                            Download App
                          </Button>
                          <Button variant="outline" className="flex-1 border-frog8-primary/20 text-frog8-primary hover:bg-frog8-primary/5">
                            Learn More
                          </Button>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="history" className="mt-0">
                      <div className="flex justify-between items-center mb-8">
                        <h3 className="text-xl font-bold">Transaction History</h3>
                        <div className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">
                          Last 7 Days
                        </div>
                      </div>
                      
                      <div className="space-y-4 mb-6">
                        {[
                          { date: "Today, 9:30 AM", title: "Metro Line 1", amount: "-₹25.00", type: "debit" },
                          { date: "Yesterday, 6:15 PM", title: "Bus Route 42", amount: "-₹15.00", type: "debit" },
                          { date: "Yesterday, 10:00 AM", title: "Wallet Recharge", amount: "+₹500.00", type: "credit" },
                          { date: "Jun 15, 8:45 AM", title: "Metro Line 3", amount: "-₹30.00", type: "debit" },
                        ].map((transaction, index) => (
                          <div key={index} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                            <div className="flex items-center space-x-3">
                              <div className={`p-2 rounded-full ${transaction.type === 'credit' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                                {transaction.type === 'credit' ? 
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                                  </svg> : 
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                                  </svg>
                                }
                              </div>
                              <div>
                                <h4 className="font-medium">{transaction.title}</h4>
                                <p className="text-xs text-muted-foreground">{transaction.date}</p>
                              </div>
                            </div>
                            <span className={`font-medium ${transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'}`}>
                              {transaction.amount}
                            </span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="pt-4 flex space-x-3">
                        <Button className="flex-1 bg-frog8-primary hover:bg-frog8-primary-dark">
                          View All Transactions
                        </Button>
                        <Button variant="outline" className="flex-1 border-frog8-primary/20 text-frog8-primary hover:bg-frog8-primary/5">
                          Download Statement
                        </Button>
                      </div>
                    </TabsContent>
                  </motion.div>
                </AnimatePresence>
              </div>
            </Tabs>
            
            <div className="mt-8 flex justify-center">
              <div className="flex space-x-2">
                {["card", "app", "history"].map((tab, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(tab)}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${activeTab === tab ? 'bg-frog8-primary' : 'bg-gray-300 dark:bg-gray-600'}`}
                    aria-label={`Switch to ${tab} tab`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-24 text-center"
        >
          <h3 className="text-2xl font-bold mb-8">Trusted by Transit Operators Across India</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                <img 
                  src={`/clients/client-${i}.png`} 
                  alt={`Partners ${i}`} 
                  className="h-12 w-auto object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://placehold.co/200x80/gray/white?text=Partner+${i}`;
                  }}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDo;