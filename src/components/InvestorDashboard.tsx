import React, { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  BarChart,
  LineChart,
  PieChart,
  Download,
  Calendar,
  Users,
  Ticket,
  CreditCard,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";
import CustomerJourneyAnimation from "./CustomerJourneyAnimation";
import InteractiveDemo from "./InteractiveDemo";
import InvestorCTA from "./InvestorCTA";

interface MetricCardProps {
  title: string;
  value: string;
  description: string;
  icon: React.ReactNode;
  trend?: string;
  trendDirection?: "up" | "down";
}

const MetricCard = ({
  title,
  value,
  description,
  icon,
  trend,
  trendDirection = "up",
}: MetricCardProps) => (
  <Card className="bg-background">
    <CardHeader className="flex flex-row items-center justify-between pb-2">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
      <div className="h-4 w-4 text-muted-foreground">{icon}</div>
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
      <p className="text-xs text-muted-foreground">{description}</p>
      {trend && (
        <div
          className={`mt-2 flex items-center text-xs ${trendDirection === "up" ? "text-green-500" : "text-red-500"}`}
        >
          {trendDirection === "up" ? (
            <TrendingUp className="mr-1 h-3 w-3" />
          ) : (
            <TrendingUp className="mr-1 h-3 w-3 rotate-180" />
          )}
          {trend}
        </div>
      )}
    </CardContent>
  </Card>
);

const InvestorDashboard = () => {
  const [activeTab, setActiveTab] = useState("ridership");

  // Track user interactions for analytics
  useEffect(() => {
    // This would be replaced with actual analytics tracking in production
    console.log(`Dashboard tab changed to: ${activeTab}`);

    // Track viewing time
    const startTime = new Date();

    return () => {
      const endTime = new Date();
      const viewTimeSeconds = (endTime.getTime() - startTime.getTime()) / 1000;
      console.log(
        `User viewed ${activeTab} tab for ${viewTimeSeconds} seconds`,
      );
    };
  }, [activeTab]);

  // Animation variants for charts
  const chartVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="container mx-auto p-4 md:p-6 bg-background">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">Investor Dashboard</h1>
          <p className="text-muted-foreground">
            Track Frog8's growth metrics and deployment progress
          </p>
        </div>
        <div className="flex space-x-2 mt-4 md:mt-0">
          <Button variant="outline" size="sm">
            <Calendar className="mr-2 h-4 w-4" />
            Last 30 Days
          </Button>
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export Data
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <MetricCard
          title="Daily Ridership"
          value="1.2M"
          description="Average daily metro users"
          icon={<Users className="h-4 w-4" />}
          trend="+12% from last month"
          trendDirection="up"
        />
        <MetricCard
          title="Tickets Sold"
          value="100K+"
          description="Daily WhatsApp tickets"
          icon={<Ticket className="h-4 w-4" />}
          trend="+8% from last month"
          trendDirection="up"
        />
        <MetricCard
          title="NCMC Cards"
          value="45K"
          description="Cards issued to date"
          icon={<CreditCard className="h-4 w-4" />}
          trend="+15% from last month"
          trendDirection="up"
        />
        <MetricCard
          title="Stations Live"
          value="42"
          description="Out of 133 planned stations"
          icon={<TrendingUp className="h-4 w-4" />}
          trend="+5 new stations this month"
          trendDirection="up"
        />
      </div>

      <Tabs
        defaultValue="ridership"
        className="w-full"
        onValueChange={setActiveTab}
      >
        <TabsList className="grid grid-cols-4 mb-6">
          <TabsTrigger value="ridership">Ridership Growth</TabsTrigger>
          <TabsTrigger value="ticketing">Ticketing Volumes</TabsTrigger>
          <TabsTrigger value="deployment">Deployment Timeline</TabsTrigger>
          <TabsTrigger value="journey">Customer Journey</TabsTrigger>
        </TabsList>

        <TabsContent value="ridership">
          <Card>
            <CardHeader>
              <CardTitle>Ridership Growth Trends</CardTitle>
              <CardDescription>
                Monthly ridership growth across Bangalore Metro lines
              </CardDescription>
            </CardHeader>
            <CardContent>
              <motion.div
                variants={chartVariants}
                initial="hidden"
                animate="visible"
                className="h-[400px] w-full flex items-center justify-center bg-muted/20 rounded-md"
              >
                <div className="flex flex-col items-center text-muted-foreground">
                  <LineChart className="h-16 w-16 mb-2" />
                  <p>Ridership Growth Chart</p>
                  <p className="text-xs">Showing 5M+ daily commuters by 2027</p>
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ticketing">
          <Card>
            <CardHeader>
              <CardTitle>Ticketing Volume Analysis</CardTitle>
              <CardDescription>
                Distribution of ticket types and payment methods
              </CardDescription>
            </CardHeader>
            <CardContent>
              <motion.div
                variants={chartVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
                  <div className="flex flex-col items-center text-muted-foreground">
                    <BarChart className="h-16 w-16 mb-2" />
                    <p>Ticket Type Distribution</p>
                    <p className="text-xs">
                      WhatsApp, NCMC, QR, Single Journey
                    </p>
                  </div>
                </div>
                <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
                  <div className="flex flex-col items-center text-muted-foreground">
                    <PieChart className="h-16 w-16 mb-2" />
                    <p>Payment Method Breakdown</p>
                    <p className="text-xs">UPI, Cards, Cash, Wallet</p>
                  </div>
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="deployment">
          <Card>
            <CardHeader>
              <CardTitle>Station Deployment Timeline</CardTitle>
              <CardDescription>
                Rollout schedule for 133 metro stations by 2027
              </CardDescription>
            </CardHeader>
            <CardContent>
              <motion.div
                variants={chartVariants}
                initial="hidden"
                animate="visible"
                className="h-[400px] w-full flex items-center justify-center bg-muted/20 rounded-md"
              >
                <div className="flex flex-col items-center text-muted-foreground">
                  <Calendar className="h-16 w-16 mb-2" />
                  <p>Deployment Timeline</p>
                  <p className="text-xs">
                    42 stations live, 91 planned by 2027
                  </p>
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="journey">
          <CustomerJourneyAnimation />
        </TabsContent>
      </Tabs>

      <div className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Comparison with Delhi Metro Growth</CardTitle>
            <CardDescription>
              Benchmarking against India's largest metro system
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full flex items-center justify-center bg-muted/20 rounded-md">
              <div className="flex flex-col items-center text-muted-foreground">
                <LineChart className="h-16 w-16 mb-2" />
                <p>Comparative Growth Analysis</p>
                <p className="text-xs">
                  Bangalore vs Delhi Metro adoption rates
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Interactive Demo Section */}
      <div className="mt-12">
        <InteractiveDemo />
      </div>

      {/* Investor CTA Section */}
      <div className="mt-12">
        <InvestorCTA />
      </div>
    </div>
  );
};

export default InvestorDashboard;
