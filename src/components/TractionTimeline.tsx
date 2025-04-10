import React from "react";
import { motion } from "framer-motion";
import {
  Rocket,
  MessageSquare,
  Building2,
  Smartphone,
  Target,
} from "lucide-react";

interface MilestoneProps {
  year: string;
  title: string;
  icon: React.ReactNode;
  description?: string;
}

const Milestone = ({ year, title, icon, description }: MilestoneProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="flex-shrink-0 w-72 md:w-80 snap-center"
    >
      <div className="bg-background rounded-lg shadow-md p-6 h-full border border-border">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center mr-4">
            {icon}
          </div>
          <div>
            <span className="text-sm font-medium text-muted-foreground">
              {year}
            </span>
            <h3 className="font-bold text-lg">{title}</h3>
          </div>
        </div>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>
    </motion.div>
  );
};

const TractionTimeline = () => {
  const milestones: MilestoneProps[] = [
    {
      year: "2021",
      title: "Frog8 Founded",
      icon: <Rocket className="h-6 w-6" />,
      description:
        "Company established with a vision to transform transit payments",
    },
    {
      year: "2022",
      title: "WhatsApp Ticketing Launched",
      icon: <MessageSquare className="h-6 w-6" />,
      description: "First-of-its-kind WhatsApp-based ticketing system deployed",
    },
    {
      year: "2024",
      title: "First 16 Kiosks Deployed",
      icon: <Building2 className="h-6 w-6" />,
      description: "Self-service kiosks installed across key metro stations",
    },
    {
      year: "2025",
      title: "TCVM Rollout + App Integration",
      icon: <Smartphone className="h-6 w-6" />,
      description: "Ticket & Card Vending Machines with integrated mobile app",
    },
    {
      year: "2026-27",
      title: "133 Metro Stations",
      icon: <Target className="h-6 w-6" />,
      description: "Complete coverage across all Bangalore Metro stations",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
          <div className="w-20 h-1 bg-green-500 mx-auto mb-4"></div>
          <p className="text-lg max-w-2xl mx-auto text-muted-foreground">
            From founding to full metro coverage, track our growth milestones
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2 hidden md:block"></div>
          <div className="flex overflow-x-auto pb-8 space-x-6 snap-x snap-mandatory">
            {milestones.map((milestone, index) => (
              <Milestone
                key={index}
                year={milestone.year}
                title={milestone.title}
                icon={milestone.icon}
                description={milestone.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TractionTimeline;
