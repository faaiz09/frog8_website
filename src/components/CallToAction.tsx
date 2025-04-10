import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const CallToAction = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-frog8-secondary/5 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-frog8-primary/10 to-frog8-secondary/10 rounded-2xl p-8 md:p-12 text-center"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-frog8-primary to-frog8-secondary bg-clip-text text-transparent"
            >
              Join the Journey
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-muted-foreground mb-8"
            >
              Back India's next fintech growth story and be part of the transit payment revolution.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
            >
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="company">Company</Label>
                <Input
                  id="company"
                  type="text"
                  placeholder="Enter your company"
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone"
                  className="mt-2"
                />
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-frog8-primary to-frog8-secondary text-white hover:opacity-90"
              >
                Schedule a Meeting
              </Button>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-sm text-muted-foreground mt-6"
            >
              Our team will get back to you within 24 hours to discuss investment opportunities.
            </motion.p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
            <div>
              <h3 className="text-2xl font-bold text-frog8-primary mb-2">$10M+</h3>
              <p className="text-muted-foreground">Series A Target</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-frog8-primary mb-2">3x</h3>
              <p className="text-muted-foreground">Revenue Growth</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-frog8-primary mb-2">2024</h3>
              <p className="text-muted-foreground">Next Funding Round</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction; 