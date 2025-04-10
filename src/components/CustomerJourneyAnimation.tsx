import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ChevronRight,
  ChevronLeft,
  Home,
  QrCode,
  CreditCard,
  Smartphone,
  ShoppingBag,
  Tag,
} from "lucide-react";

interface JourneyStep {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

interface CustomerJourneyAnimationProps {
  autoPlay?: boolean;
  interval?: number;
}

const CustomerJourneyAnimation = ({
  autoPlay = false,
  interval = 5000,
}: CustomerJourneyAnimationProps) => {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  const journeySteps: JourneyStep[] = [
    {
      id: "buy-tickets",
      title: "Buy Tickets from Home",
      description:
        "Purchase metro tickets directly from your home using WhatsApp or the Frog8 app. Quick, paperless, and convenient.",
      icon: <Home className="h-6 w-6" />,
      image:
        "https://images.unsplash.com/photo-1616469829581-73993eb86b02?w=800&q=80",
    },
    {
      id: "enter-metro",
      title: "Enter the Metro",
      description:
        "Walk into any metro station with your digital ticket ready on your phone. No need to stand in queues.",
      icon: <ChevronRight className="h-6 w-6" />,
      image:
        "https://images.unsplash.com/photo-1565043534407-2db36dc4b4b7?w=800&q=80",
    },
    {
      id: "scan-qr",
      title: "Scan QR/NCMC Card",
      description:
        "Simply scan your QR code or tap your NCMC card at the gate for instant access. Fast and contactless.",
      icon: <QrCode className="h-6 w-6" />,
      image:
        "https://images.unsplash.com/photo-1598291286794-d417e2fdd54e?w=800&q=80",
    },
    {
      id: "top-up",
      title: "Top Up Your Account",
      description:
        "Easily add funds to your NCMC card or Frog8 wallet using UPI, cards, or cash at our kiosks.",
      icon: <CreditCard className="h-6 w-6" />,
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
    },
    {
      id: "get-offers",
      title: "Receive Personalized Offers",
      description:
        "Get exclusive deals and discounts based on your travel patterns and preferences.",
      icon: <Tag className="h-6 w-6" />,
      image:
        "https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=800&q=80",
    },
    {
      id: "make-purchases",
      title: "Make Purchases",
      description:
        "Use your Frog8 wallet for shopping at partner stores in and around metro stations.",
      icon: <ShoppingBag className="h-6 w-6" />,
      image:
        "https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?w=800&q=80",
    },
  ];

  React.useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isPlaying) {
      timer = setInterval(() => {
        setActiveStep((prev) =>
          prev === journeySteps.length - 1 ? 0 : prev + 1,
        );
      }, interval);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isPlaying, interval, journeySteps.length]);

  const handleNext = () => {
    setActiveStep((prev) => (prev === journeySteps.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveStep((prev) => (prev === 0 ? journeySteps.length - 1 : prev - 1));
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-background p-6 rounded-xl">
      <h2 className="text-3xl font-bold text-center mb-8">
        Your Daily Transit Journey
      </h2>
      <p className="text-center text-muted-foreground mb-8">
        One app for travel, top-up, and transit life. Truly your daily driver.
      </p>

      <div className="relative overflow-hidden rounded-xl mb-8">
        <motion.div
          key={activeStep}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="aspect-video w-full"
        >
          <img
            src={journeySteps[activeStep].image}
            alt={journeySteps[activeStep].title}
            className="w-full h-full object-cover rounded-xl"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
            <h3 className="text-white text-2xl font-bold">
              {journeySteps[activeStep].title}
            </h3>
            <p className="text-white/80 mt-2">
              {journeySteps[activeStep].description}
            </p>
          </div>
        </motion.div>

        <Button
          variant="outline"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background"
          onClick={handlePrev}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background"
          onClick={handleNext}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex justify-center mb-8">
        <Button variant="outline" onClick={togglePlayPause} className="mx-auto">
          {isPlaying ? "Pause Animation" : "Auto Play"}
        </Button>
      </div>

      <Tabs
        defaultValue={journeySteps[activeStep].id}
        value={journeySteps[activeStep].id}
        className="w-full"
      >
        <TabsList className="grid grid-cols-3 md:grid-cols-6 w-full">
          {journeySteps.map((step, index) => (
            <TabsTrigger
              key={step.id}
              value={step.id}
              onClick={() => setActiveStep(index)}
              className="flex flex-col items-center gap-1 py-2"
            >
              {step.icon}
              <span className="text-xs hidden md:inline">
                {step.title.split(" ")[0]}
              </span>
            </TabsTrigger>
          ))}
        </TabsList>
        {journeySteps.map((step) => (
          <TabsContent key={step.id} value={step.id} className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold">{step.title}</h4>
                    <p className="text-muted-foreground mt-2">
                      {step.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>

      <div className="mt-8 text-center">
        <p className="text-sm text-muted-foreground">
          Experience the future of transit payments with Frog8. Seamless,
          secure, and smart.
        </p>
      </div>
    </div>
  );
};

export default CustomerJourneyAnimation;
