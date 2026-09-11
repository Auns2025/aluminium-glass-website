import React from 'react';
import { Ruler, FileCode2, Cpu, HardHat, Sparkles, ArrowRight } from 'lucide-react';

const steps = [
  {
    step: '01',
    icon: Ruler,
    title: 'Consultation & Laser Survey',
    desc: 'Our engineers conduct on-site digital laser measurements, structural load checks, and client design reviews.',
    time: 'Step 1: Survey',
  },
  {
    step: '02',
    icon: FileCode2,
    title: 'CAD Engineering & Spec',
    desc: 'We draft exact shop drawings, thermal insulation calculations, wind-load ratings, and 3D architectural mockups.',
    time: 'Step 2: Engineering',
  },
  {
    step: '03',
    icon: Cpu,
    title: 'CNC Factory Fabrication',
    desc: 'Aluminium profiles are CNC precision-milled, tempered, anodized, and double-glazed units are certified in-house.',
    time: 'Step 3: Manufacturing',
  },
  {
    step: '04',
    icon: HardHat,
    title: 'On-Site Master Installation',
    desc: 'Certified master technicians execute flawless structural installation, acoustic sealing, and safety handover.',
    time: 'Step 4: Completion',
  },
];

const ProcessSection = () => {
  return (
    <section className="py-20 md:py-28 bg-[#0b0f19] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#f5b041]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f5b041]/10 border border-[#f5b041]/30 text-[#f5b041] text-xs font-bold uppercase tracking-[2.5px] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Seamless Execution</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Our 4-Step <span className="text-[#f5b041]">Precision Process</span>
          </h2>

          <p className="mt-4 text-neutral-300 text-base md:text-lg">
            From initial laser site measurement to final architectural handover, our rigorous 4-step workflow guarantees perfection.
          </p>
        </div>

        {/* Unique Timeline Flow */}
        <div className="relative">
          {/* Glowing Connecting Line for Desktop */}
          <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-[#f5b041]/20 via-[#f5b041]/60 to-[#f5b041]/20 z-0" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 relative z-10">
            {steps.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div
                  key={idx}
                  className="group relative bg-neutral-900/70 backdrop-blur-xl p-7 rounded-3xl border border-white/10 hover:border-[#f5b041]/60 shadow-[0_12px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_45px_rgba(245,176,65,0.18)] transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between"
                >
                  {/* Top: Illuminated Step Circle + Time Badge */}
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-black/70 border border-[#f5b041]/40 flex items-center justify-center text-[#f5b041] shadow-[0_0_20px_rgba(245,176,65,0.2)] group-hover:bg-[#f5b041] group-hover:text-black group-hover:scale-110 transition-all duration-300">
                        <Icon className="w-7 h-7 stroke-[2.2]" />
                      </div>

                      <span className="text-2xl font-black font-mono text-white/20 group-hover:text-[#f5b041] transition-colors duration-300">
                        {s.step}
                      </span>
                    </div>

                    <div className="mb-2">
                      <span className="text-[10px] font-mono font-bold tracking-widest text-[#f5b041] uppercase">
                        {s.time}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-[#f5b041] transition-colors">
                      {s.title}
                    </h3>

                    <p className="text-neutral-300 text-sm leading-relaxed">
                      {s.desc}
                    </p>
                  </div>

                  {/* Bottom Indicator */}
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-neutral-400 group-hover:text-white transition-colors">
                    <span>Precision Standard</span>
                    <ArrowRight className="w-4 h-4 text-[#f5b041] transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProcessSection;
