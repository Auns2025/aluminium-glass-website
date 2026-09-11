import React from 'react';
import ServicesSection from '../sections/ServicesSection';
import CTASection from '../sections/CTASection';
import StatsCounter from '../sections/StatsCounter';

const Services = () => {
  return (
    <div className="w-full pt-20">
      <div className="text-center py-12 px-6 max-w-4xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-[#f5b041]">Our Specialization</span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-900 mt-2 mb-4">
          Complete Aluminium &amp; Glass Services
        </h1>
        <p className="text-neutral-600 text-lg">
          We provide end-to-end design, custom fabrication, and installation services with premium quality assurance.
        </p>
      </div>

      <ServicesSection />
      <StatsCounter />
      <CTASection />
    </div>
  );
};

export default Services;
