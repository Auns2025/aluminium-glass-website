import React from 'react';
import { ShieldCheck, Clock, Zap, Award, CheckCircle2, Sparkles } from 'lucide-react';

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Certified Impact Safety Glass',
    desc: 'High-impact tempered and acoustic laminated glass meeting international structural safety codes.',
    stat: '100% Safety',
    tag: 'Grade A Tempered',
  },
  {
    icon: Award,
    title: 'Precision Aluminium Profiles',
    desc: 'Extruded high-grade architectural aluminium with 25-micron anodic and powder coat protection.',
    stat: '0.01mm Precision',
    tag: 'CNC Engineered',
  },
  {
    icon: Clock,
    title: 'Guaranteed On-Time Delivery',
    desc: 'Real-time timeline tracking and dedicated project managers ensuring zero installation delays.',
    stat: '99.8% On-Time',
    tag: 'Strict Handover',
  },
  {
    icon: Zap,
    title: 'Thermal & Acoustic Glazing',
    desc: 'Dual and triple-sealed thermal break profiles engineered to slash energy bills and mute exterior noise.',
    stat: 'Up to 45dB',
    tag: 'Noise Reduction',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative overflow-hidden bg-[#f7f5f0] py-20 text-[#101214] md:py-28">
      <div className="absolute right-1/4 top-0 h-96 w-96 rounded-full bg-[#d9b66e]/10 blur-[140px]" />
      <div className="absolute bottom-0 left-1/4 h-96 w-96 rounded-full bg-[#b8893e]/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-10">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#d9b66e]/30 bg-[#d9b66e]/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[2.5px] text-[#b8893e]">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Why Choose Us</span>
          </div>

          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#101214] md:text-5xl">
            Engineered For Excellence. <br />
            <span className="bg-gradient-to-r from-[#a87830] via-[#d9b66e] to-[#b8893e] bg-clip-text text-transparent">Built To Last Decades.</span>
          </h2>

          <p className="mt-4 text-base text-[#252525] md:text-lg">
            We merge cutting-edge architectural metal fabrication with certified glazing standards to deliver unmatched aesthetic and structural strength.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {reasons.map((r, idx) => {
            const Icon = r.icon;
            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-between rounded-2xl border border-[#ece5dc] bg-white p-7 shadow-[0_10px_30px_rgba(16,18,20,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-[#d9b66e]/60 hover:shadow-[0_20px_40px_rgba(184,137,62,0.08)]"
              >
                <div className="absolute left-8 right-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#d9b66e]/70 to-transparent" />

                <div>
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#d9b66e]/30 bg-[#d9b66e]/10 text-[#b8893e] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#b8893e] group-hover:text-[#101214]">
                      <Icon className="h-6 w-6 stroke-[2.2]" />
                    </div>

                    <span className="rounded-full border border-[#ece5dc] bg-[#f7f5f0] px-2.5 py-1 text-[11px] font-mono font-bold tracking-wider text-[#252525]">
                      {r.stat}
                    </span>
                  </div>

                  <h3 className="mb-2.5 text-lg font-bold text-[#101214] transition-colors group-hover:text-[#b8893e]">
                    {r.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-[#252525]">
                    {r.desc}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-2 border-t border-[#ece5dc] pt-4 text-xs font-semibold text-[#6f6b63] group-hover:text-[#101214]">
                  <CheckCircle2 className="h-4 w-4 text-[#b8893e]" />
                  <span>{r.tag}</span>
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
