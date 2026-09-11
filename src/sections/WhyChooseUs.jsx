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
    <section className="py-20 md:py-28 bg-[#0b0f19] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#f5b041]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f5b041]/10 border border-[#f5b041]/30 text-[#f5b041] text-xs font-bold uppercase tracking-[2.5px] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Why Choose Us</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Engineered For Excellence. <br />
            <span className="text-[#f5b041]">Built To Last Decades.</span>
          </h2>

          <p className="mt-4 text-neutral-300 text-base md:text-lg">
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
                className="group relative bg-neutral-900/60 backdrop-blur-xl p-7 rounded-2xl border border-white/10 hover:border-[#f5b041]/60 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_40px_rgba(245,176,65,0.15)] transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between"
              >
                {/* Subtle top card glow */}
                <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-white/20 group-hover:via-[#f5b041]/70 to-transparent transition-all duration-300" />

                <div>
                  {/* Top Bar: Icon + Stat Pill */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-black/60 border border-[#f5b041]/30 flex items-center justify-center text-[#f5b041] shadow-[0_0_15px_rgba(245,176,65,0.15)] group-hover:bg-[#f5b041] group-hover:text-black group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-6 h-6 stroke-[2.2]" />
                    </div>

                    <span className="text-[11px] font-mono font-bold tracking-wider px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300 group-hover:border-[#f5b041]/40 group-hover:text-[#f5b041]">
                      {r.stat}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-[#f5b041] transition-colors">
                    {r.title}
                  </h3>

                  <p className="text-neutral-300 text-sm leading-relaxed">
                    {r.desc}
                  </p>
                </div>

                {/* Bottom Tag */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-semibold text-neutral-400 group-hover:text-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-[#f5b041]" />
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
