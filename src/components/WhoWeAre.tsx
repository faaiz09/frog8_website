import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const WhoWeAre = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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
    <section className="py-20 bg-gradient-to-b from-background to-frog8-primary/5">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-frog8-primary to-frog8-secondary bg-clip-text text-transparent"
          >
            Who We Are
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12"
          >
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-muted-foreground mb-6"
            >
              Frog8 is a fintech innovator at the forefront of transforming urban travel through smart payment solutions. Founded in 2021, we've been pioneering the future of transit payments in India.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
            >
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-frog8-primary">Our Journey</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-frog8-accent mr-2">✓</span>
                    <span>Founded in 2021 with a vision to revolutionize transit payments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-frog8-accent mr-2">✓</span>
                    <span>Strategic partnership with BMRCL (Bangalore Metro)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-frog8-accent mr-2">✓</span>
                    <span>Leading innovation in digital ticketing and payment solutions</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-frog8-primary">Our Mission</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-frog8-accent mr-2">✓</span>
                    <span>Simplify urban commuting through seamless digital payments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-frog8-accent mr-2">✓</span>
                    <span>Create a frictionless transit experience for millions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-frog8-accent mr-2">✓</span>
                    <span>Build India's most advanced transit payment infrastructure</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              <div className="bg-frog8-primary/10 dark:bg-frog8-primary/20 p-6 rounded-xl">
                <h4 className="text-2xl font-bold text-frog8-primary mb-2">2021</h4>
                <p className="text-muted-foreground">Year Founded</p>
              </div>
              <div className="bg-frog8-secondary/10 dark:bg-frog8-secondary/20 p-6 rounded-xl">
                <h4 className="text-2xl font-bold text-frog8-secondary mb-2">5M+</h4>
                <p className="text-muted-foreground">Daily Commuters</p>
              </div>
              <div className="bg-frog8-accent/10 dark:bg-frog8-accent/20 p-6 rounded-xl">
                <h4 className="text-2xl font-bold text-frog8-accent mb-2">133</h4>
                <p className="text-muted-foreground">Metro Stations</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeAre; 