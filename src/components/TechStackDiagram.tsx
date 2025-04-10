import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Building,
  CreditCard,
  Smartphone,
  QrCode,
  Banknote,
  Server,
  Layers,
  ArrowRight,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

interface TechNodeProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  isExpanded?: boolean;
  onToggle?: () => void;
}

const TechNode = ({
  title,
  description,
  icon,
  color,
  isExpanded = false,
  onToggle,
}: TechNodeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="w-full"
    >
      <Card className="h-full border-l-4" style={{ borderLeftColor: color }}>
        <CardContent className="p-4">
          <div className="flex items-start justify-between">
            <div className="flex items-start">
              <div
                className="p-2 rounded-md mr-3 flex-shrink-0"
                style={{ backgroundColor: `${color}20` }}
              >
                {icon}
              </div>
              <div>
                <h3 className="font-bold text-base">{title}</h3>
                {isExpanded && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-sm text-muted-foreground mt-1"
                  >
                    {description}
                  </motion.p>
                )}
              </div>
            </div>
            {onToggle && (
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0"
                onClick={onToggle}
              >
                {isExpanded ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const TechStackDiagram = () => {
  const [expandedNodes, setExpandedNodes] = useState<Record<string, boolean>>({
    bmrcl: false,
    federal: false,
    kiosk: false,
    app: false,
    payment: false,
    backend: false,
  });

  const toggleNode = (nodeId: string) => {
    setExpandedNodes((prev) => ({
      ...prev,
      [nodeId]: !prev[nodeId],
    }));
  };

  const techNodes = [
    {
      id: "bmrcl",
      title: "BMRCL Integration",
      description:
        "Direct API integration with Bangalore Metro Rail Corporation Limited for real-time ticketing, gate access control, and transaction reconciliation.",
      icon: <Building className="h-5 w-5 text-blue-600" />,
      color: "#2563eb",
    },
    {
      id: "federal",
      title: "Federal Bank / NCMC",
      description:
        "Partnership with Federal Bank for National Common Mobility Card issuance, processing, and settlement. Supports both prepaid and credit-based NCMC cards.",
      icon: <CreditCard className="h-5 w-5 text-purple-600" />,
      color: "#9333ea",
    },
    {
      id: "kiosk",
      title: "Kiosk Network",
      description:
        "Self-service Ticket & Card Vending Machines (TCVMs) deployed across metro stations. Supports cash, card, UPI payments and instant NCMC card issuance.",
      icon: <Server className="h-5 w-5 text-orange-600" />,
      color: "#ea580c",
    },
    {
      id: "app",
      title: "Frog8 App",
      description:
        "Consumer-facing mobile application for ticket purchase, card management, balance top-up, and exclusive offers. Available on Android and iOS.",
      icon: <Smartphone className="h-5 w-5 text-green-600" />,
      color: "#16a34a",
    },
    {
      id: "payment",
      title: "Payment Systems",
      description:
        "Multi-modal payment processing supporting UPI, QR codes, credit/debit cards, NCMC cards, and cash. Integrated with major payment gateways and banks.",
      icon: <Banknote className="h-5 w-5 text-red-600" />,
      color: "#dc2626",
    },
    {
      id: "backend",
      title: "Cloud Infrastructure",
      description:
        "Scalable, secure cloud infrastructure with real-time data processing, analytics, and reporting. 99.99% uptime with disaster recovery systems.",
      icon: <Layers className="h-5 w-5 text-cyan-600" />,
      color: "#0891b2",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technology Architecture
          </h2>
          <div className="w-20 h-1 bg-green-500 mx-auto mb-4"></div>
          <p className="text-lg max-w-2xl mx-auto text-muted-foreground">
            Our integrated platform connects all aspects of transit payments
          </p>
        </motion.div>

        <div className="relative mb-12 overflow-hidden">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 z-0"></div>
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-background p-4 rounded-full border-2 border-green-500 shadow-lg"
            >
              <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-green-500/10 flex items-center justify-center">
                <QrCode className="w-8 h-8 md:w-12 md:h-12 text-green-500" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="hidden md:block"
            >
              <ArrowRight className="w-8 h-8 text-green-500" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-background p-4 rounded-full border-2 border-green-500 shadow-lg"
            >
              <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-green-500/10 flex items-center justify-center">
                <Smartphone className="w-8 h-8 md:w-12 md:h-12 text-green-500" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="hidden md:block"
            >
              <ArrowRight className="w-8 h-8 text-green-500" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-background p-4 rounded-full border-2 border-green-500 shadow-lg"
            >
              <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-green-500/10 flex items-center justify-center">
                <Server className="w-8 h-8 md:w-12 md:h-12 text-green-500" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="hidden md:block"
            >
              <ArrowRight className="w-8 h-8 text-green-500" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
              className="bg-background p-4 rounded-full border-2 border-green-500 shadow-lg"
            >
              <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-green-500/10 flex items-center justify-center">
                <Building className="w-8 h-8 md:w-12 md:h-12 text-green-500" />
              </div>
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {techNodes.map((node) => (
            <TechNode
              key={node.id}
              title={node.title}
              description={node.description}
              icon={node.icon}
              color={node.color}
              isExpanded={expandedNodes[node.id]}
              onToggle={() => toggleNode(node.id)}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our modular architecture enables rapid deployment across different
            transit systems and easy integration with existing infrastructure.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackDiagram;
