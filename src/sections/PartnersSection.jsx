import React from 'react';
import { Sparkles } from 'lucide-react';

const partners = [
  {
    name: 'EMAAR',
    image: '/images/WhatsAppImage2025-01-15at17.07.533.jpeg',
    status: 'Verified Client Asset',
  },
  {
    name: 'DAMAC',
    image: '/images/WhatsAppImage2025-01-15at17.07.541.jpeg',
    status: 'Verified Client Asset',
  },
  {
    name: 'BENTLEY',
    image: '/images/WhatsAppImage2025-01-15at17.23.511-e1738435727869.jpeg',
    status: 'Verified Client Asset',
  },
  {
    name: 'GODIVA',
    image: '/images/WhatsAppImage2025-01-15at17.23.512-e1738439401206.jpeg',
    status: 'Verified Client Asset',
  },
];

// Marquee loop
const marqueeItems = [...partners, ...partners, ...partners];

const PartnersSection = () => {
  return (
    <section id="partners" className="relative overflow-hidden bg-[#101214] py-20 lg:py-24 border-t border-white/10 !text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#b8893e]/40 bg-[#b8893e]/15 px-3.5 py-1 text-xs font-bold uppercase tracking-[2px] text-[#d9b66e]">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Collaboration &amp; Trust</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight !text-white">
            Trusted Industry Relationships
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-center text-sm sm:text-base !text-white leading-relaxed">
            Delivering architectural glass and aluminium engineering across leading developers, luxury brands, and institutions.
          </p>
        </div>

        {/* Verified Logos Slider with Equal Visual Sizing */}
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] py-4">
          <div className="flex w-max animate-marquee gap-8 sm:gap-12 md:gap-16 items-center hover:[animation-play-state:paused]">
            {marqueeItems.map((partner, index) => (
              <div
                key={index}
                className="group flex shrink-0 items-center justify-center p-3 sm:p-4 rounded-2xl bg-[#16181b] border border-white/10 shadow-[0_10px_25px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-[#b8893e]/60 hover:bg-[#1c1f24] hover:shadow-[0_12px_30px_rgba(184,137,62,0.15)]"
              >
                <div className="h-10 w-28 sm:h-12 sm:w-36 flex items-center justify-center overflow-hidden rounded-xl bg-black/40">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="max-h-full max-w-full object-contain filter grayscale opacity-85 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default PartnersSection;