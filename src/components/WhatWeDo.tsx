import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const WhatWeDo = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeTab, setActiveTab] = useState('whatsapp');

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

  const features = [
    {
      id: 'whatsapp',
      title: 'WhatsApp Ticketing',
      description: '100,000+ tickets issued daily through our WhatsApp-based ticketing system.',
      icon: '💬',
      stats: {
        dailyTickets: '100,000+',
        userSatisfaction: '98%',
        responseTime: '< 2s',
      },
    },
    {
      id: 'kiosks',
      title: 'Self-Service Kiosks',
      description: 'Deployed at metro stations for convenient self-service transactions.',
      icon: '🖥️',
      stats: {
        stations: '133',
        dailyUsers: '50,000+',
        uptime: '99.9%',
      },
    },
    {
      id: 'ncmc',
      title: 'NCMC Card Solutions',
      description: 'Real-time card issuance and top-ups for seamless travel.',
      icon: '💳',
      stats: {
        cardsIssued: '1M+',
        dailyTopups: '25,000+',
        acceptance: '100%',
      },
    },
    {
      id: 'app',
      title: 'Mobile App Integration',
      description: 'Unified platform for travel and payments in a single application.',
      icon: '📱',
      stats: {
        downloads: '500K+',
        activeUsers: '200K+',
        rating: '4.8/5',
      },
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-frog8-primary/5 to-background">
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
            What We Do
          </motion.h2>

          <motion.div variants={itemVariants} className="mt-12">
            <Tabs
              defaultValue="whatsapp"
              className="w-full"
              onValueChange={setActiveTab}
            >
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
                {features.map((feature) => (
                  <TabsTrigger
                    key={feature.id}
                    value={feature.id}
                    className="data-[state=active]:bg-frog8-primary/10 data-[state=active]:text-frog8-primary"
                  >
                    <span className="text-2xl mr-2">{feature.icon}</span>
                    {feature.title}
                  </TabsTrigger>
                ))}
              </TabsList>

              {features.map((feature) => (
                <TabsContent key={feature.id} value={feature.id}>
                  <Card className="border-none shadow-xl">
                    <CardContent className="p-6 md:p-8">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                      >
                        <div>
                          <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                          <p className="text-muted-foreground text-lg">
                            {feature.description}
                          </p>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                          {Object.entries(feature.stats).map(([key, value]) => (
                            <div
                              key={key}
                              className="bg-frog8-primary/5 dark:bg-frog8-primary/10 p-4 rounded-lg text-center"
                            >
                              <div className="text-2xl font-bold text-frog8-primary">
                                {value}
                              </div>
                              <div className="text-sm text-muted-foreground capitalize">
                                {key.replace(/([A-Z])/g, ' $1').trim()}
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDo; 