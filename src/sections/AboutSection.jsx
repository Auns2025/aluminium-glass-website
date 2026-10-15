import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      title: 'UAE Precision Manufacturing',
      desc: 'Advanced automated fabrication ensuring strict dimensional tolerances and consistency.',
    },
    {
      title: 'In-House Technical Engineering',
      desc: 'Bespoke design, wind-load calculation, and shop drawings for architectural compliance.',
    },
    {
      title: 'Certified Architectural Safety',
      desc: 'High-impact tempered, acoustic laminated, and Civil Defense approved glazing systems.',
    },
    {
      title: 'End-to-End Execution in Dubai',
      desc: 'Seamless project coordination from digital laser survey to flawless on-site installation.',
    },
  ];

  return (
    <section id="about" className="relative w-full bg-[#f7f5f0] py-20 lg:py-28 overflow-hidden text-[#101214]">
      {/* Subtle architectural ambient background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#b8893e]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Premium Split-Screen Composition: 55% Photo / 45% Ivory Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Mobile: Image First (order-1), Desktop: 55% column (col-span-7) */}
          <div className="order-1 lg:order-1 lg:col-span-7 relative">
            <div className="relative overflow-hidden rounded-2xl lg:rounded-3xl shadow-[0_20px_50px_rgba(16,18,20,0.12)] border border-[#ece5dc] aspect-[4/3] lg:aspect-[16/12] bg-[#101214]">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop"
                alt="Architectural Glass & Aluminium installations in Dubai"
                className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101214]/60 via-transparent to-transparent pointer-events-none" />

              {/* Restrained Champagne Gold Architectural Micro-Badge */}
              <div className="absolute bottom-6 left-6 right-6 sm:right-auto z-10 bg-[#101214]/85 backdrop-blur-md border border-[#b8893e]/40 py-3 px-5 rounded-xl text-white shadow-xl">
  <div className="flex items-center gap-3">
    <div className="w-2 h-2 rounded-full bg-[#b8893e]" />
    <div>
      <p className="text-[10px] uppercase font-bold tracking-[0.2em] !text-white">
        Crafted For Modern Spaces
      </p>
      <p className="text-xs font-medium !text-white mt-0.5">
        Dubai &amp; UAE Architectural Glazing
      </p>
    </div>
  </div>
</div>
            </div>
          </div>

          {/* Mobile: Content Second (order-2), Desktop: 45% Content Panel (col-span-5) */}
          <div className="order-2 lg:order-2 lg:col-span-5 flex flex-col justify-center">
            {/* Restrained champagne gold label */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-[2px] bg-[#b8893e]" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#b8893e]">
                About AM Glass Aluminium
              </span>
            </div>

            {/* Required Client Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-[1.12] tracking-[-0.03em] text-[#101214]">
              Architectural Glass &amp; Aluminium, Crafted for Modern Spaces.
            </h2>

            <p className="mt-5 text-base sm:text-lg leading-relaxed text-[#252525]">
              AM Glass Aluminium is a trusted UAE-based provider of precision architectural aluminium and high-specification glass systems. Operating across Dubai and neighboring emirates, we deliver durable, energy-efficient, and aesthetically refined glazing solutions designed for long-term structural excellence.
            </p>

            {/* Clean Typographic Capability Highlights */}
            <div className="mt-8 space-y-4 pt-4 border-t border-[#d9d1c2]/60">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#b8893e]/15 text-[#b8893e]">
                    <CheckCircle2 className="h-4 w-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#101214] leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-[#6f6b63] mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2.5 rounded-full bg-[#101214] px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-[#f7f5f0] shadow-md transition-all duration-300 hover:bg-[#b8893e] hover:text-[#101214]"
              >
                <span>Read Full Story</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border border-[#d9d1c2] bg-transparent px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#101214] transition-all duration-300 hover:border-[#b8893e] hover:text-[#b8893e]"
              >
                <span>View Capabilities</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;