import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';

const WhyUs = () => {
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

  const advantages = [
    {
      title: 'Exclusive BMRCL Partnership',
      description: 'Contracted by BMRCL for kiosk deployment across all metro stations.',
      icon: '🤝',
      stats: {
        stations: '133',
        coverage: '100%',
        partnership: 'Long-term',
      },
    },
    {
      title: 'Massive User Base',
      description: 'Access to 5M+ daily commuters by 2026, creating a huge captive audience.',
      icon: '👥',
      stats: {
        dailyUsers: '5M+',
        growth: '25% YoY',
        retention: '85%',
      },
    },
    {
      title: 'Strategic Partnerships',
      description: 'Strong relationships with leading banks and financial institutions.',
      icon: '🏦',
      stats: {
        partners: '10+',
        coverage: 'Pan-India',
        integration: 'Seamless',
      },
    },
    {
      title: 'Proven Execution',
      description: 'Successfully deployed and managed large-scale transit payment solutions.',
      icon: '✅',
      stats: {
        uptime: '99.9%',
        satisfaction: '95%',
        scale: 'Enterprise',
      },
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-frog8-secondary/5">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-frog8-primary to-frog8-secondary bg-clip-text text-transparent"
          >
            Why Choose Frog8
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto"
          >
            We're uniquely positioned at the intersection of transit and fintech, with a proven track record and strategic advantages.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="h-full border-none shadow-xl hover:shadow-2xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-4xl">{advantage.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{advantage.title}</h3>
                        <p className="text-muted-foreground mb-4">
                          {advantage.description}
                        </p>
                        <div className="grid grid-cols-3 gap-4">
                          {Object.entries(advantage.stats).map(([key, value]) => (
                            <div
                              key={key}
                              className="bg-frog8-primary/5 dark:bg-frog8-primary/10 p-3 rounded-lg text-center"
                            >
                              <div className="text-lg font-bold text-frog8-primary">
                                {value}
                              </div>
                              <div className="text-xs text-muted-foreground capitalize">
                                {key.replace(/([A-Z])/g, ' $1').trim()}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-12 bg-gradient-to-r from-frog8-primary/10 to-frog8-secondary/10 rounded-2xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Transit Payments?</h3>
            <p className="text-muted-foreground mb-6">
              Join us in revolutionizing how millions of people pay for their daily commute.
            </p>
            <button className="bg-gradient-to-r from-frog8-primary to-frog8-secondary text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
              Get in Touch
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs; 