import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, PieChart, BarChart, DollarSign, ArrowRight, LineChart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const InvestorDashboard = () => {
  return (
    <section id="investor-dashboard" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-frog8-primary/5 via-background to-frog8-secondary/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-frog8-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-frog8-secondary/10 rounded-full blur-3xl"></div>
              
              <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-frog8-primary/10 to-frog8-secondary/10 rounded-full blur-2xl -mr-20 -mt-20"></div>
                
                <div className="relative z-10">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold">Investor Dashboard</h3>
                    <div className="bg-frog8-primary/10 text-frog8-primary px-3 py-1 rounded-full text-xs font-medium">
                      Live Data
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {[
                      { title: "Total Investment", value: "₹2.5M", icon: <DollarSign className="h-5 w-5" />, change: "+12.5%" },
                      { title: "Current Value", value: "₹3.8M", icon: <TrendingUp className="h-5 w-5" />, change: "+52%" },
                      { title: "Monthly Returns", value: "₹45K", icon: <BarChart className="h-5 w-5" />, change: "+8.3%" },
                      { title: "Portfolio Growth", value: "32%", icon: <PieChart className="h-5 w-5" />, change: "+5.2%" }
                    ].map((item, index) => (
                      <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700">
                        <div className="flex justify-between items-start mb-2">
                          <span className="text-sm text-muted-foreground">{item.title}</span>
                          <div className="bg-frog8-primary/10 p-1.5 rounded-lg text-frog8-primary">
                            {item.icon}
                          </div>
                        </div>
                        <div className="text-xl font-bold mb-1">{item.value}</div>
                        <div className="text-xs text-green-600 flex items-center">
                          <TrendingUp className="h-3 w-3 mr-1" />
                          {item.change}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 mb-6">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="font-medium">Investment Growth</h4>
                      <div className="text-xs text-muted-foreground">Last 12 months</div>
                    </div>
                    <div className="h-40 flex items-end space-x-2">
                      {[35, 45, 30, 50, 40, 60, 55, 65, 70, 75, 85, 90].map((height, index) => (
                        <div key={index} className="flex-1 flex flex-col items-center">
                          <div 
                            className="w-full bg-gradient-to-t from-frog8-primary to-frog8-secondary rounded-t-sm"
                            style={{ height: `${height}%` }}
                          ></div>
                          <div className="text-xs mt-1 text-muted-foreground">
                            {['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'][index]}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <Button className="flex-1 bg-frog8-primary hover:bg-frog8-primary-dark">
                      View Full Dashboard
                    </Button>
                    <Button variant="outline" className="flex-1 border-frog8-primary/20 text-frog8-primary hover:bg-frog8-primary/5">
                      Download Report
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-frog8-primary/10 border border-frog8-primary/20 text-frog8-primary text-sm font-medium mb-4">
              <LineChart className="h-4 w-4 mr-2" />
              For Investors
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Track Your <span className="bg-gradient-to-r from-frog8-primary to-frog8-secondary bg-clip-text text-transparent">Investment</span> Growth
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              Our comprehensive investor dashboard provides real-time insights into your investment performance, helping you make informed decisions.
            </p>
            
            <div className="space-y-6 mb-10">
              {[
                {
                  title: "Real-time Analytics",
                  description: "Monitor your investment performance with live data updates and comprehensive analytics."
                },
                {
                  title: "Detailed Reports",
                  description: "Access monthly and quarterly reports with in-depth analysis of your investment growth."
                },
                {
                  title: "Secure Access",
                  description: "Bank-grade security ensures your financial data remains protected at all times."
                },
                {
                  title: "Expert Insights",
                  description: "Receive personalized recommendations from our financial experts to optimize your returns."
                }
              ].map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <div className="bg-frog8-primary/10 p-1 rounded-full text-frog8-primary flex-shrink-0 mt-1">
                    <CheckIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <Button 
              className="bg-frog8-primary hover:bg-frog8-primary-dark text-white group"
            >
              Access Investor Portal
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// CheckIcon component
const CheckIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="3" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default InvestorDashboard;
