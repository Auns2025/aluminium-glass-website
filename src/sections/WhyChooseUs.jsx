import React from 'react';
import { 
  ShieldCheck, 
  Cpu, 
  Zap, 
  Flame, 
  Sparkles, 
  Layers, 
  CheckCircle2 
} from 'lucide-react';

const pillars = [
  {
    icon: Cpu,
    title: 'Precision CNC Fabrication',
    desc: 'Advanced automated profile milling and cutting ensuring micron-level accuracy and seamless joint assembly.',
    tag: 'Automated Precision',
  },
  {
    icon: ShieldCheck,
    title: 'Certified Architectural Glazing',
    desc: 'Impact-resistant tempered, laminated, and double-glazed units complying with rigorous UAE structural safety codes.',
    tag: 'Safety & Structural',
  },
  {
    icon: Zap,
    title: 'Thermal & Acoustic Insulation',
    desc: 'Multi-chambered thermal break profiles engineered to minimize heat transfer and isolate external urban noise.',
    tag: 'Energy Efficient',
  },
  {
    icon: Flame,
    title: 'Civil Defense Approved Partitions',
    desc: 'Certified fire-rated glass partitions engineered to meet Dubai Civil Defense standards for safety and compliance.',
    tag: 'Regulatory Compliance',
  },
  {
    icon: Layers,
    title: 'Architectural Powder & Anodized Finishes',
    desc: 'High-micron architectural coatings formulated for UV stability, corrosion resistance, and coastal durability.',
    tag: 'Long-term Durability',
  },
  {
    icon: Sparkles,
    title: 'Dedicated Project Supervision',
    desc: 'From initial laser site survey to final handover, every installation is managed by experienced technical directors.',
    tag: 'On-Time Handover',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative overflow-hidden bg-[#f7f5f0] py-20 lg:py-28 text-[#101214]">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#b8893e]/5 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-[#b8893e]/5 blur-[140px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#b8893e]/30 bg-[#b8893e]/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[2.5px] text-[#b8893e]">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Capability Pillars</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#101214] leading-[1.15]">
            Engineered For Excellence. <br />
            <span className="bg-gradient-to-r from-[#a87830] via-[#d9b66e] to-[#b8893e] bg-clip-text text-transparent">
              Built To Last Decades.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#252525] max-w-2xl mx-auto">
            AM Glass Aluminium integrates precision manufacturing with certified glazing standards to deliver enduring structural integrity and contemporary aesthetics.
          </p>
        </div>

        {/* Six Capability Pillars Grid: 3x2 on desktop, 2x3 on tablet, 1x6 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-between rounded-2xl border border-[#ece5dc] bg-white p-7 lg:p-8 shadow-[0_10px_30px_rgba(16,18,20,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#b8893e]/50 hover:shadow-[0_20px_40px_rgba(184,137,62,0.1)]"
              >
                {/* Champagne gold subtle top accent line */}
                <div className="absolute left-8 right-8 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#b8893e]/60 to-transparent" />

                <div>
                  {/* Icon & Index Number */}
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#b8893e]/30 bg-[#b8893e]/10 text-[#b8893e] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#b8893e] group-hover:text-[#101214]">
                      <Icon className="h-5 w-5 stroke-[2.2]" />
                    </div>

                    <span className="font-mono text-xs font-bold tracking-widest text-[#6f6b63] uppercase">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="mb-2.5 text-lg font-bold text-[#101214] transition-colors group-hover:text-[#b8893e]">
                    {pillar.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-[#252525]">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-2 border-t border-[#ece5dc] pt-4 text-xs font-semibold text-[#6f6b63]">
                  <CheckCircle2 className="h-4 w-4 text-[#b8893e]" />
                  <span>{pillar.tag}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
