import React from 'react';
import ServicesSection from '../sections/ServicesSection';
import CapabilitiesSection from '../sections/CapabilitiesSection';
import StatsCounter from '../sections/StatsCounter';
import CTASection from '../sections/CTASection';

const Services = () => {
  return (
    <div className="w-full pt-28 bg-[#f7f5f0] text-[#101214]">
      {/* Page Header */}
      <div className="text-center py-12 px-6 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-8 h-[2px] bg-[#b8893e]" />
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#b8893e]">
            Official Scope of Services
          </span>
          <span className="w-8 h-[2px] bg-[#b8893e]" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#101214] mt-2 mb-4">
          Complete Aluminium &amp; Glass Disciplines
        </h1>
        <p className="text-[#6f6b63] text-base md:text-lg max-w-2xl mx-auto">
          We provide end-to-end design, precision CNC fabrication, and master installation services across all ten specialized architectural disciplines.
        </p>
      </div>

      <ServicesSection />
      <CapabilitiesSection />
      <StatsCounter />
      <CTASection />
    </div>
  );
};

export default Services;
