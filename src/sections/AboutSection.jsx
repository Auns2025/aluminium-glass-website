import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Award, Sparkles } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    '15+ years of architectural glass & metal engineering',
    'Certified thermal break & acoustic soundproof glass',
    'Custom CNC precision fabrication for high-end projects',
    'Turnkey delivery from CAD drawings to final site handover',
  ];

  return (
    <section className="py-20 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Media Card (Narrower, sleeker proportion) */}
          <div className="lg:col-span-5 relative group">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/4.2] max-w-[420px] mx-auto bg-neutral-900 border border-neutral-200">
              <img
                src="/images/Gemini_Generated_Image_39478m39478m3947.jpeg"
                alt="Aluminium fabrication works"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-5 -right-3 sm:-right-5 bg-neutral-950 text-white p-5 sm:p-6 rounded-2xl shadow-2xl border border-neutral-800 backdrop-blur-xl animate-float">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#f5b041]/20 flex items-center justify-center text-[#f5b041]">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-[#f5b041] leading-none">15+</p>
                  <p className="text-[11px] text-neutral-300 uppercase tracking-wider font-semibold mt-1">Years Excellence</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-7 lg:pl-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f5b041]/10 border border-[#f5b041]/30 text-[#e09e35] text-xs font-bold uppercase tracking-[2px] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About Our Company</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight leading-tight">
              Pioneering Modern Aluminium &amp; Structural Glass
            </h2>

            <p className="mt-4 text-neutral-600 leading-relaxed text-base sm:text-lg">
              We specialize in custom architectural glass installations, sound-insulated aluminium windows, curtain walls, slim-profile sliding systems, and luxury commercial entrance facades.
            </p>

            <div className="mt-6 space-y-3">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 group">
                  <CheckCircle2 className="w-5 h-5 text-[#f5b041] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="text-sm sm:text-base font-medium text-neutral-800">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-neutral-900 text-white font-semibold text-sm hover:bg-[#f5b041] hover:text-black hover:shadow-lg transition-all duration-300"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
