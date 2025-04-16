import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, TrendingUp, Shield } from 'lucide-react';

const WhoWeAre = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="who-we-are" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-frog8-primary/5 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.div variants={fadeIn} className="inline-flex items-center px-3 py-1.5 rounded-full bg-frog8-primary/10 border border-frog8-primary/20 text-frog8-primary text-sm font-medium mb-4">
            <Users className="h-4 w-4 mr-2" />
            About Frog8
          </motion.div>
          
          <motion.h2 
            variants={fadeIn}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Who We <span className="bg-gradient-to-r from-frog8-primary to-frog8-secondary bg-clip-text text-transparent">Are</span>
          </motion.h2>
          
          <motion.p 
            variants={fadeIn}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            Frog8 is a pioneering fintech company dedicated to revolutionizing transit payments across India. 
            We combine cutting-edge technology with user-centric design to create seamless payment solutions.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Award className="h-10 w-10 text-frog8-primary" />,
              title: "Our Mission",
              description: "To simplify transit payments for millions of commuters through innovative digital wallet solutions that save time and reduce hassle."
            },
            {
              icon: <TrendingUp className="h-10 w-10 text-frog8-primary" />,
              title: "Our Vision",
              description: "To become the leading transit payment platform in India, connecting commuters, transit operators, and businesses in a seamless ecosystem."
            },
            {
              icon: <Shield className="h-10 w-10 text-frog8-primary" />,
              title: "Our Values",
              description: "Innovation, reliability, security, and customer-centricity guide everything we do as we transform the transit payment landscape."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.6, delay: 0.1 * index } 
                }
              }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:border-frog8-primary/20 group"
            >
              <div className="bg-frog8-primary/10 rounded-xl p-4 inline-flex mb-6 group-hover:bg-frog8-primary/20 transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-frog8-primary transition-colors duration-300">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;