import React from 'react';
import { Ruler, FileCode2, Cpu, HardHat, Sparkles, ArrowRight } from 'lucide-react';

const steps = [
  {
    step: '01',
    icon: Ruler,
    title: 'Survey & Laser Measurement',
    desc: 'On-site digital laser scanning, structural opening assessment, and client design alignment.',
    phase: 'Phase 01',
  },
  {
    step: '02',
    icon: FileCode2,
    title: 'Engineering & Shop Drawings',
    desc: 'Detailed CAD shop drawings, thermal insulation calculations, wind-load ratings, and submittals.',
    phase: 'Phase 02',
  },
  {
    step: '03',
    icon: Cpu,
    title: 'Precision CNC Fabrication',
    desc: 'Automated profile milling, glass tempering, hermetic double-glazing sealing, and pre-assembly QC.',
    phase: 'Phase 03',
  },
  {
    step: '04',
    icon: HardHat,
    title: 'Master On-Site Installation',
    desc: 'Certified master technicians execute structural mechanical fixing, silicone weatherproofing, and handover.',
    phase: 'Phase 04',
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="relative overflow-hidden bg-[#101214] py-20 lg:py-28 !text-white border-t border-white/10">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#b8893e]/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mx-auto mb-16 max-w-3xl text-center sm:mb-20">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#b8893e]/40 bg-[#b8893e]/15 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[2.5px] text-[#d9b66e]">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Workflow Protocol</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight !text-white leading-[1.15]">
            Our 4-Step <span className="bg-gradient-to-r from-[#a87830] via-[#d9b66e] to-[#b8893e] bg-clip-text text-transparent">Precision Process</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg !text-white max-w-2xl mx-auto">
            From initial digital site survey to final architectural handover, each project follows a disciplined sequence engineered for precision.
          </p>
        </div>

        {/* Desktop: Horizontal Flow with Connecting Timeline / Mobile: Vertical Timeline */}
        <div className="relative">
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-[52px] left-[8%] right-[8%] h-[2px] bg-gradient-to-r from-[#b8893e]/20 via-[#b8893e]/80 to-[#b8893e]/20 z-0" />

          {/* Mobile Vertical Continuous Line */}
          <div className="block lg:hidden absolute top-6 bottom-6 left-[31px] w-[2px] bg-[#b8893e]/40 z-0" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 relative z-10">
            {steps.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div
                  key={idx}
                  className="group relative flex flex-col justify-between rounded-2xl lg:rounded-3xl border border-white/10 bg-[#16181b] p-6 sm:p-7 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-1 hover:border-[#b8893e]/60 hover:bg-[#1a1d21] hover:shadow-[0_20px_40px_rgba(184,137,62,0.15)] h-full"
                >
                  <div>
                    {/* Icon and Step Number */}
                    <div className="mb-5 flex items-center justify-between">
                      <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl border border-[#b8893e]/30 bg-[#b8893e]/10 text-[#d9b66e] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#b8893e] group-hover:text-[#101214]">
                        <Icon className="h-6 w-6 stroke-[2.2]" />
                      </div>

                      <span className="font-mono text-2xl font-black text-white/20 transition-colors duration-300 group-hover:text-[#d9b66e]">
                        {s.step}
                      </span>
                    </div>

                    <div className="mb-2">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#d9b66e]">
                        {s.phase}
                      </span>
                    </div>

                    <h3 className="mb-2.5 text-lg font-bold !text-white transition-colors group-hover:text-[#d9b66e] sm:text-xl">
                      {s.title}
                    </h3>

                    <p className="text-xs sm:text-sm leading-relaxed !text-white">
                      {s.desc}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-3.5 text-xs font-semibold !text-white transition-colors group-hover:text-white">
                    <span>UAE Execution</span>
                    <ArrowRight className="h-4 w-4 text-[#d9b66e] transition-transform group-hover:translate-x-1" />
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