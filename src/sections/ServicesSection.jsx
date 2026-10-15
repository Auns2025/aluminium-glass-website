import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { services } from '../data/services';

const ServicesSection = () => {
  // Asymmetrical column spans for editorial architecture layout on desktop (12-column grid)
  const getColSpanClass = (index) => {
    switch (index) {
      case 0:
        return 'lg:col-span-7 aspect-[16/10]'; // Hero service
      case 1:
        return 'lg:col-span-5 aspect-[16/12]';
      case 2:
        return 'lg:col-span-4 aspect-[4/5]';
      case 3:
        return 'lg:col-span-4 aspect-[4/5]';
      case 4:
        return 'lg:col-span-4 aspect-[4/5]';
      case 5:
        return 'lg:col-span-5 aspect-[16/12]';
      case 6:
        return 'lg:col-span-7 aspect-[16/10]';
      case 7:
        return 'lg:col-span-4 aspect-[4/5]';
      case 8:
        return 'lg:col-span-4 aspect-[4/5]';
      case 9:
        return 'lg:col-span-4 aspect-[4/5]';
      default:
        return 'lg:col-span-4 aspect-[4/5]';
    }
  };

  return (
    <section id="services" className="relative w-full bg-[#f7f5f0] py-20 lg:py-28 text-[#101214] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#b8893e]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 lg:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-8 h-[2px] bg-[#b8893e]" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#b8893e]">
                Official Scope of Services
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#101214] leading-[1.15]">
              Architectural Systems, <br />
              <span className="bg-gradient-to-r from-[#a87830] via-[#d9b66e] to-[#b8893e] bg-clip-text text-transparent">
                Engineered with Distinction
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-[#6f6b63] leading-relaxed">
            From monumental structural facades to bespoke residential glasscraft, we execute all ten specialized architectural disciplines to exacting UAE standards.
          </p>
        </div>

        {/* Asymmetric Editorial Image Grid (12-column layout on desktop, 1-col on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-7">
          {services.map((item, idx) => {
            const spanClass = getColSpanClass(idx);

            return (
              <div
                key={item.id}
                className={`group relative overflow-hidden rounded-2xl lg:rounded-3xl border border-[#ece5dc] bg-[#101214] shadow-[0_12px_30px_rgba(16,18,20,0.06)] transition-all duration-500 hover:shadow-[0_25px_50px_rgba(184,137,62,0.15)] hover:border-[#b8893e]/50 ${spanClass}`}
              >
                {/* Image with subtle zoom interaction */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />

                {/* Editorial Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#101214] via-[#101214]/65 to-black/20 transition-opacity duration-300 group-hover:opacity-95" />
                <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px] group-hover:backdrop-blur-none transition-all duration-300" />

                {/* Card Header: Number & Micro-Label */}
                <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
                  <span className="text-[11px] font-mono font-bold tracking-widest text-[#d9b66e] bg-[#101214]/75 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                    {item.number}
                  </span>

                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d9b66e] bg-[#101214]/75 backdrop-blur-md px-3 py-1 rounded-full border border-[#b8893e]/30">
                    {item.label}
                  </span>
                </div>

                {/* Card Bottom: Title & Restrained Details */}
                <div className="absolute bottom-0 inset-x-0 p-6 sm:p-7 z-10 flex flex-col justify-end">
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight !text-white group-hover:text-[#d9b66e] transition-colors duration-200">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm !text-white leading-relaxed line-clamp-2">
                    {item.shortDesc}
                  </p>

                  <div className="mt-4 pt-3.5 border-t border-white/15 flex items-center justify-between text-xs font-semibold !text-white group-hover:text-white transition-colors">
                    <span className="tracking-wider uppercase text-[11px] !text-white">
                      Specification &amp; Detailing
                    </span>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 group-hover:bg-[#b8893e] group-hover:text-[#101214] !text-white transition-all duration-300">
                      <ArrowUpRight className="h-4 w-4 stroke-[2.2]" />
                    </div>
                  </div>
                </div>

                {/* Direct link anchor covering the card */}
                <Link
                  to="/contact"
                  className="absolute inset-0 z-20"
                  aria-label={`Inquire about ${item.title}`}
                />
              </div>
            );
          })}
        </div>

        {/* Section Footer CTA */}
        <div className="mt-14 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 rounded-full bg-[#101214] px-8 py-4 text-xs font-bold uppercase tracking-wider !text-white shadow-lg transition-all duration-300 hover:bg-[#b8893e] hover:text-[#101214] hover:shadow-xl"
          >
            <span>Request Full Architectural Catalog &amp; Quote</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;