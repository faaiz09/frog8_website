import React from 'react';
import HeroSection from './HeroSection';
import WhoWeAre from './WhoWeAre';
import WhatWeDo from './WhatWeDo';
import InvestorDashboard from './InvestorDashboard';
import WhyUs from './WhyUs';
import CallToAction from './CallToAction';

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <WhoWeAre />
      <WhatWeDo />
      <WhyUs />
      <InvestorDashboard />
      <CallToAction />
    </div>
  );
};

export default Home;
