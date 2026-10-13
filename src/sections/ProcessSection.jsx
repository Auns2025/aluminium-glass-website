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
    <section className="relative overflow-hidden bg-[#f7f5f0] py-20 text-[#101214] md:py-28">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d9b66e]/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-10">
        <div className="mx-auto mb-16 max-w-3xl text-center sm:mb-20">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#d9b66e]/30 bg-[#d9b66e]/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[2.5px] text-[#b8893e]">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Seamless Execution</span>
          </div>

          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#101214] md:text-5xl">
            Our 4-Step <span className="bg-gradient-to-r from-[#a87830] via-[#d9b66e] to-[#b8893e] bg-clip-text text-transparent">Precision Process</span>
          </h2>

          <p className="mt-4 text-base text-[#252525] md:text-lg">
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
                  className="group relative flex flex-col justify-between rounded-3xl border border-[#ece5dc] bg-white p-7 shadow-[0_12px_30px_rgba(16,18,20,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-[#d9b66e]/60 hover:shadow-[0_20px_45px_rgba(184,137,62,0.1)]"
                >
                  <div>
                    <div className="mb-6 flex items-center justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#d9b66e]/30 bg-[#d9b66e]/10 text-[#b8893e] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#b8893e] group-hover:text-[#101214]">
                        <Icon className="h-7 w-7 stroke-[2.2]" />
                      </div>

                      <span className="text-2xl font-black font-mono text-[#d9d1c2] transition-colors duration-300 group-hover:text-[#b8893e]">
                        {s.step}
                      </span>
                    </div>

                    <div className="mb-2">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#b8893e]">
                        {s.time}
                      </span>
                    </div>

                    <h3 className="mb-3 text-lg font-bold text-[#101214] transition-colors group-hover:text-[#b8893e] sm:text-xl">
                      {s.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-[#252525]">
                      {s.desc}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-[#ece5dc] pt-4 text-xs font-semibold text-[#6f6b63] transition-colors group-hover:text-[#101214]">
                    <span>Precision Standard</span>
                    <ArrowRight className="h-4 w-4 text-[#b8893e] transition-transform group-hover:translate-x-1" />
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
