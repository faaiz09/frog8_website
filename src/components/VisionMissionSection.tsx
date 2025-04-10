import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Target, Compass } from "lucide-react";

interface VisionMissionProps {
  darkMode?: boolean;
}

const VisionMissionSection = ({ darkMode = false }: VisionMissionProps) => {
  return (
    <section className={`py-16 ${darkMode ? "bg-gray-800" : "bg-gray-50"}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Vision & Mission
          </h2>
          <div className="w-20 h-1 bg-green-500 mx-auto mb-4"></div>
          <p className="text-lg max-w-2xl mx-auto text-muted-foreground">
            Our long-term vision for transforming urban mobility in India
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card
              className={`h-full ${darkMode ? "bg-gray-700 border-gray-600" : ""}`}
            >
              <CardContent className="p-6 flex flex-col items-center text-center h-full">
                <div className="w-16 h-16 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center mb-4">
                  <Lightbulb className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Vision</h3>
                <p
                  className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}
                >
                  To become the default digital wallet for urban India's
                  commuters — integrating payments, transit, rewards, and
                  identity into one seamless experience.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card
              className={`h-full ${darkMode ? "bg-gray-700 border-gray-600" : ""}`}
            >
              <CardContent className="p-6 flex flex-col items-center text-center h-full">
                <div className="w-16 h-16 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center mb-4">
                  <Target className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Mission</h3>
                <p
                  className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}
                >
                  To build India's smartest unattended payment infrastructure
                  for public transit, making daily commutes faster, easier, and
                  more connected for millions of Indians.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card
              className={`h-full ${darkMode ? "bg-gray-700 border-gray-600" : ""}`}
            >
              <CardContent className="p-6 flex flex-col items-center text-center h-full">
                <div className="w-16 h-16 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center mb-4">
                  <Compass className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Long-Term Play</h3>
                <p
                  className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}
                >
                  Beyond metro ticketing, we're building a comprehensive urban
                  mobility platform that will connect buses, taxis,
                  micro-mobility, and eventually become the financial operating
                  system for all urban transportation.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 p-6 border border-green-500/20 rounded-lg bg-green-500/5 text-center max-w-3xl mx-auto"
        >
          <h3 className="text-xl font-bold mb-3 text-green-500">2030 Vision</h3>
          <p className="text-lg">
            "By 2030, Frog8 will power 500M+ monthly transit transactions across
            10+ Indian cities, becoming the backbone of India's urban mobility
            payment infrastructure."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
