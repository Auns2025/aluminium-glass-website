import React from 'react';
import Hero from '../sections/Hero';
import AboutSection from '../sections/AboutSection';
import ServicesSection from '../sections/ServicesSection';
import AccentBanner from '../sections/AccentBanner';
import WhyChooseUs from '../sections/WhyChooseUs';
import StatsCounter from '../sections/StatsCounter';
import ProjectsSection from '../sections/ProjectsSection';
import DashboardDemo from '../sections/DashboardDemo';
import ProcessSection from '../sections/ProcessSection';
import TestimonialsSection from '../sections/TestimonialsSection';
import PartnersSection from '../sections/PartnersSection';
import CTASection from '../sections/CTASection';

const Home = () => {
  return (
    <div className="w-full overflow-hidden">
      <Hero />
      
      <AboutSection />
      <ServicesSection />
      <AccentBanner />
      <WhyChooseUs />
      <StatsCounter />
      <ProjectsSection />
      <DashboardDemo />
      <ProcessSection />
      <TestimonialsSection />
      <PartnersSection />
      <CTASection />
    </div>
  );
};

export default Home;

