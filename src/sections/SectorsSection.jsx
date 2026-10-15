import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const sectors = [
  {
    number: '01',
    title: 'Luxury Residential Villas & Estates',
    description: 'Bespoke architectural fenestration, motorized slimline sliding doors, and frameless balustrades for premier Dubai residential communities.',
  },
  {
    number: '02',
    title: 'Commercial Towers & Corporate Offices',
    description: 'Acoustic glass partitions, executive suite dividers, and automated sensor entrances meeting international structural safety codes.',
  },
  {
    number: '03',
    title: 'High-Rise Architectural Façades',
    description: 'Engineered curtain wall systems designed for rigorous wind loads, thermal reflection, and contemporary urban aesthetics.',
  },
  {
    number: '04',
    title: 'Hospitality & Luxury Resorts',
    description: 'Poolside safety glass balustrades, grand lobby glazed atrium entries, and customized decorative mirror installations.',
  },
  {
    number: '05',
    title: 'High-End Retail & Showrooms',
    description: 'Extra-clear low-iron glass storefronts, custom aluminium canopies, and automated telescopic entrance systems.',
  },
  {
    number: '06',
    title: 'Architectural Renovations & Retrofits',
    description: 'Complete villa modernization, thermal-break glazing retrofits, and replacement of legacy door/window systems.',
  },
];

const SectorsSection = () => {
  return (
    <section id="sectors" className="relative w-full bg-[#101214] py-20 lg:py-28 !text-white overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[2px] bg-[#b8893e]" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#d9b66e]">
              Industry Sectors
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight !text-white leading-[1.15]">
              Sectors We Serve
            </h2>
            <p className="max-w-md text-sm sm:text-base !text-white leading-relaxed">
              Tailored architectural aluminium and structural glass systems engineered for key development sectors across Dubai and the UAE.
            </p>
          </div>
        </div>

        {/* 6-Item Typographic Grid Accompanied By One Large Architectural Photograph */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Typographic Grid (6 Items) - Spans 7 columns on Desktop */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-7">
            {sectors.map((sector) => (
              <div
                key={sector.number}
                className="group relative flex flex-col justify-between p-6 rounded-2xl bg-[#16181b] border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-1 hover:border-[#b8893e]/60 hover:bg-[#1a1d21] hover:shadow-[0_15px_35px_rgba(184,137,62,0.12)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold tracking-widest text-[#d9b66e]">
                      {sector.number}
                    </span>
                    <span className="text-[10px] uppercase font-bold tracking-wider !text-white">
                      UAE Sector
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold !text-white leading-snug group-hover:text-[#d9b66e] transition-colors">
                    {sector.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm !text-white leading-relaxed">
                    {sector.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-semibold !text-white">
                  <span>Scope Specification</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-[#d9b66e] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            ))}
          </div>

          {/* Large Realistic Architectural Photograph - Spans 5 columns on Desktop */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-white/10 aspect-[4/5] bg-[#101214]">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1400&auto=format&fit=crop"
                alt="Architectural glazing for Dubai luxury sectors"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101214]/85 via-transparent to-black/30 pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 z-10 bg-[#101214]/90 backdrop-blur-md border border-[#b8893e]/40 p-5 rounded-2xl !text-white">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#d9b66e] block">
                  Dubai &amp; Northern Emirates
                </span>
                <p className="text-sm font-semibold !text-white mt-1 leading-snug">
                  Precision architectural fabrication delivered to commercial towers and private villas.
                </p>
                <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] text-[#d9b66e] font-medium">Bespoke Solutions</span>
                  <Link
                    to="/contact"
                    className="text-[11px] uppercase font-bold !text-white hover:text-[#d9b66e] flex items-center gap-1 transition-colors"
                  >
                    Inquire Sector Project →
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default SectorsSection;