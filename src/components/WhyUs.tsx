import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, Shield, Zap, ThumbsUp, Users } from 'lucide-react';

const WhyUs = () => {
  const reasons = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Time Saving",
      description: "Save precious minutes every day with quick tap-and-go payments that eliminate queues and ticket counters."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure Transactions",
      description: "Bank-grade security protocols protect your data and money with every transaction you make."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Seamless Experience",
      description: "Enjoy a consistent payment experience across all transit systems throughout India."
    },
    {
      icon: <ThumbsUp className="h-6 w-6" />,
      title: "User-Friendly",
      description: "Intuitive interface designed for users of all ages and tech-comfort levels."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Wide Acceptance",
      description: "Accepted across major transit networks in metropolitan and tier-2 cities across India."
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Reliable Service",
      description: "99.9% uptime ensures your payments always go through, even during peak hours."
    }
  ];

  return (
    <section id="why-us" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-frog8-primary/10 via-background to-frog8-secondary/10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-frog8-primary/10 border border-frog8-primary/20 text-frog8-primary text-sm font-medium mb-4">
            <ThumbsUp className="h-4 w-4 mr-2" />
            Our Advantages
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why Choose <span className="bg-gradient-to-r from-frog8-primary to-frog8-secondary bg-clip-text text-transparent">Frog8</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We're not just another payment solution. Discover the unique advantages that make Frog8 the preferred choice for commuters across India.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:border-frog8-primary/20 group"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-frog8-primary/10 p-3 rounded-lg text-frog8-primary flex-shrink-0 group-hover:bg-frog8-primary/20 transition-colors duration-300">
                  {reason.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-frog8-primary transition-colors duration-300">{reason.title}</h3>
                  <p className="text-muted-foreground">{reason.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-frog8-primary/20 to-frog8-secondary/20 p-8 rounded-2xl backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4">Trusted by Commuters Across India</h3>
            <div className="flex flex-wrap justify-center gap-8 items-center">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="text-4xl font-bold text-frog8-primary mb-2">
                    {i === 1 ? '1M+' : i === 2 ? '50+' : i === 3 ? '15+' : i === 4 ? '99.9%' : '24/7'}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {i === 1 ? 'Active Users' : i === 2 ? 'Transit Partners' : i === 3 ? 'Cities Covered' : i === 4 ? 'Uptime' : 'Support'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;