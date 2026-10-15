import React from 'react';
import Hero from '../sections/Hero';
import AboutSection from '../sections/AboutSection';
import ServicesSection from '../sections/ServicesSection';
import SectorsSection from '../sections/SectorsSection';
import AccentBanner from '../sections/AccentBanner';
import WhyChooseUs from '../sections/WhyChooseUs';
import StatsCounter from '../sections/StatsCounter';
import ProjectsSection from '../sections/ProjectsSection';
import DashboardDemo from '../sections/DashboardDemo';
import CapabilitiesSection from '../sections/CapabilitiesSection';
import ProcessSection from '../sections/ProcessSection';
import TestimonialsSection from '../sections/TestimonialsSection';
import PartnersSection from '../sections/PartnersSection';
import CTASection from '../sections/CTASection';

const Home = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section - Approved and Locked */}
      <Hero />
      
      {/* Improved About Section */}
      <AboutSection />
      
      {/* All 10 Services in Asymmetric Editorial Grid */}
      <ServicesSection />
      
      {/* Client Requested Sectors Section */}
      <SectorsSection />
      
      {/* Architectural Banner (Old Branding Removed) */}
      <AccentBanner />
      
      {/* Six Capability Pillars */}
      <WhyChooseUs />
      
      {/* Standards & Verified Commitments */}
      <StatsCounter />
      
      {/* Documented Featured Projects (1 Dominant + 2 Supporting) */}
      <ProjectsSection />
      
      {/* Project Specification Preview */}
      <DashboardDemo />
      
      {/* Client Requested 5 Capabilities Section */}
      <CapabilitiesSection />
      
      {/* 4-Step Process Section */}
      <ProcessSection />
      
      {/* Reviews & Satisfaction */}
      <TestimonialsSection />
      
      {/* Verified Partner Logos */}
      <PartnersSection />
      
      {/* Dark Cinematic Final CTA (#101214) */}
      <CTASection />
    </div>
  );
};

export default Home;
