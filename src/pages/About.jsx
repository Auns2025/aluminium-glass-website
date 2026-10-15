import React from 'react';
import { ShieldCheck, Award, Users, CheckCircle2 } from 'lucide-react';
import CapabilitiesSection from '../sections/CapabilitiesSection';
import SectorsSection from '../sections/SectorsSection';
import StatsCounter from '../sections/StatsCounter';
import PartnersSection from '../sections/PartnersSection';
import CTASection from '../sections/CTASection';

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'UAE Precision Manufacturing',
      desc: 'Top-grade architectural aluminium profiles and safety-certified tempered glass processed in our UAE facility.',
    },
    {
      icon: ShieldCheck,
      title: 'Structural Safety & Compliance',
      desc: 'Every opening, joint, and gasket is engineered to withstand extreme Middle Eastern heat and severe wind loads.',
    },
    {
      icon: Users,
      title: 'Dedicated Engineering Supervision',
      desc: 'From initial laser site survey to final authority handover, experienced technical directors oversee every milestone.',
    },
  ];

  return (
    <div className="w-full pt-28 pb-12 bg-[#f7f5f0] text-[#101214]">
      {/* Hero Banner */}
      <section className="px-6 py-14 text-center max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-8 h-[2px] bg-[#b8893e]" />
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#b8893e]">
            About AM Glass Aluminium
          </span>
          <span className="w-8 h-[2px] bg-[#b8893e]" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-[#101214] tracking-tight mb-6">
          Architectural Glass &amp; Aluminium Engineering
        </h1>
        <p className="text-base md:text-lg text-[#6f6b63] max-w-3xl mx-auto leading-relaxed">
          AM Glass Aluminium is a premier UAE contractor and fabricator specializing in high-performance aluminium window systems, curtain walls, slimline sliding doors, and architectural interior glasscraft.
        </p>
      </section>

      {/* Story & Vision */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-white rounded-2xl lg:rounded-3xl p-8 md:p-12 shadow-sm border border-[#ece5dc]">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#b8893e]">
              Engineering Discipline
            </span>
            <h2 className="text-3xl font-bold text-[#101214] mt-2 mb-6 leading-tight">
              Transforming spaces with sleek aluminium and crystal-clear glazing.
            </h2>
            <p className="text-[#252525] mb-4 leading-relaxed text-sm sm:text-base">
              Operating with advanced automated machinery in the UAE, our technical teams combine architectural refinement with rigorous structural engineering.
            </p>
            <p className="text-[#6f6b63] mb-6 leading-relaxed text-sm">
              Whether executing acoustic-insulated double glazed partitions for corporate towers, panoramic bifold doors for private villas, or unitized curtain walls, we deliver precision finishing on time.
            </p>

            <div className="space-y-3">
              {[
                'Guaranteed structural durability and warranty',
                'Certified safety tempered and laminated glass',
                'In-house CNC fabrication and assembly',
                'Civil Defense approved fire-rated systems'
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-[#101214] text-sm font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#b8893e] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-[#101214] shadow-xl border border-[#ece5dc]">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1400&auto=format&fit=crop"
              alt="AM Glass Aluminium Architectural Glazing"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-14">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#101214]">Pillars of Craftsmanship</h2>
          <p className="text-[#6f6b63] mt-2 text-sm sm:text-base">Setting industry standards in UAE architectural metal and glass</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <div key={v.title} className="bg-white p-8 rounded-2xl border border-[#ece5dc] shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-[#b8893e]/15 flex items-center justify-center text-[#b8893e] mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#101214] mb-2">{v.title}</h3>
                <p className="text-[#252525] text-sm leading-relaxed">{v.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Capabilities Section */}
      <CapabilitiesSection />

      {/* Sectors Section */}
      <SectorsSection />

      {/* Stats Counter */}
      <StatsCounter />

      {/* Partners / Tech */}
      <PartnersSection />

      {/* CTA */}
      <CTASection />
    </div>
  );
};

export default About;
