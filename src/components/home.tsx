import React from "react";
import HeroSection from "./HeroSection";
import WhoWeAre from "./WhoWeAre";
import WhatWeDo from "./WhatWeDo";
import InvestorDashboard from "./InvestorDashboard";
import WhyUs from "./WhyUs";
import CallToAction from "./CallToAction";
import FounderTeamSection from "@/components/FounderTeamSection";
import TechStackDiagram from "@/components/TechStackDiagram";
import CustomerJourneyAnimation from "@/components/CustomerJourneyAnimation";
const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <WhoWeAre />
      <FounderTeamSection />
      <WhatWeDo />
      <WhyUs />
      <TechStackDiagram />
      <CustomerJourneyAnimation />
      {/* <InvestorDashboard /> */}
      <CallToAction />
    </div>
  );
};

export default Home;
