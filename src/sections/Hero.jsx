import React from "react";
import { Link } from "react-router-dom";
import {
  Gem,
  ShieldCheck,
  Settings,
  Building2,
  ArrowRight,
} from "lucide-react";

const Hero = () => {
  return (
    // Outer Container: Top padding drastically reduced to move hero up
    <section className="relative min-h-screen w-full  text-white pt-2 sm:pt-3 px-3 sm:px-5 lg:px-6 pb-3 sm:pb-5 flex items-center justify-center">
      
      {/* The Rounded Banner Card */}
      <div className="relative w-full h-[calc(100vh-1rem)] sm:h-[calc(100vh-1.5rem)] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl flex items-center">
        
        {/* Background Building Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/Gemini_Generated_Image_bq1cuebq1cuebq1c.jpeg"
            onError={(e) => {
              e.currentTarget.src =
                "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop";
            }}
            alt="Modern Glass and Aluminum Architecture"
            className="w-full h-full object-cover object-right md:object-center transform scale-100 animate-fade-in-scale"
          />

          {/* Deep Dark Left Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#070d18] via-[#070d18]/90 md:via-[#070d18]/80 to-transparent z-[1]" />
          
          {/* Top/Bottom Subtle Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60 z-[1]" />
          
          {/* Diagonal Golden Line */}
          <div 
            className="hidden md:block absolute top-0 bottom-0 left-[48%] lg:left-[45%] w-[3px] bg-gradient-to-b from-transparent via-[#f5b041]/60 to-transparent transform -skew-x-[22deg] z-[2] opacity-75 shadow-[0_0_15px_rgba(245,176,65,0.6)]"
          />
        </div>

        {/* Content Inside Banner Card */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-20 sm:pt-24 pb-10">
          <div className="max-w-2xl lg:max-w-3xl">

            {/* Tagline */}
            <div className="flex items-center gap-3 mb-5 animate-fade-in-up animation-delay-100">
              <span className="inline-block h-[3px] w-8 sm:w-12 bg-[#f5b041] rounded-full shadow-[0_0_10px_rgba(245,176,65,0.8)]" />
              <span className="text-[11px] sm:text-xs md:text-sm font-bold tracking-[0.2em] sm:tracking-[0.25em] text-neutral-200 uppercase">
                PREMIUM QUALITY | EXPERT CRAFTSMANSHIP | ON TIME DELIVERY
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.85rem] font-extrabold text-white tracking-tight leading-[1.12] drop-shadow-md animate-fade-in-up animation-delay-200">
              Custom Glass &amp; Aluminum{" "}
              <span className="text-[#f5b041] relative inline-block drop-shadow-[0_0_20px_rgba(245,176,65,0.35)]">
                Solutions
              </span>{" "}
              for Your Space
            </h1>

            {/* Description */}
            <p className="mt-4 sm:mt-5 text-base sm:text-lg md:text-xl text-neutral-300 font-normal leading-relaxed max-w-xl animate-fade-in-up animation-delay-300">
              Elegant, functional, and precision-crafted glass and aluminum solutions for residential, commercial, and industrial spaces.
            </p>

            {/* 4 Feature Badges */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5 md:gap-6 pt-2 animate-fade-in-up animation-delay-400">
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-xl bg-[#f5b041]/10 border border-[#f5b041]/30 flex items-center justify-center text-[#f5b041] group-hover:bg-[#f5b041] group-hover:text-black transition-all duration-300 shadow-[0_0_12px_rgba(245,176,65,0.15)]">
                  <Gem className="w-5 h-5 stroke-[2.2]" />
                </div>
                <div className="text-xs sm:text-sm font-semibold text-neutral-100 leading-tight">
                  Modern <br />
                  <span className="text-neutral-300 font-medium">Designs</span>
                </div>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-xl bg-[#f5b041]/10 border border-[#f5b041]/30 flex items-center justify-center text-[#f5b041] group-hover:bg-[#f5b041] group-hover:text-black transition-all duration-300 shadow-[0_0_12px_rgba(245,176,65,0.15)]">
                  <ShieldCheck className="w-5 h-5 stroke-[2.2]" />
                </div>
                <div className="text-xs sm:text-sm font-semibold text-neutral-100 leading-tight">
                  Durable <br />
                  <span className="text-neutral-300 font-medium">&amp; Reliable</span>
                </div>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-xl bg-[#f5b041]/10 border border-[#f5b041]/30 flex items-center justify-center text-[#f5b041] group-hover:bg-[#f5b041] group-hover:text-black transition-all duration-300 shadow-[0_0_12px_rgba(245,176,65,0.15)]">
                  <Settings className="w-5 h-5 stroke-[2.2]" />
                </div>
                <div className="text-xs sm:text-sm font-semibold text-neutral-100 leading-tight">
                  Professional <br />
                  <span className="text-neutral-300 font-medium">Installation</span>
                </div>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-xl bg-[#f5b041]/10 border border-[#f5b041]/30 flex items-center justify-center text-[#f5b041] group-hover:bg-[#f5b041] group-hover:text-black transition-all duration-300 shadow-[0_0_12px_rgba(245,176,65,0.15)]">
                  <Building2 className="w-5 h-5 stroke-[2.2]" />
                </div>
                <div className="text-xs sm:text-sm font-semibold text-neutral-100 leading-tight">
                  Residential &amp; <br />
                  <span className="text-neutral-300 font-medium">Commercial</span>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 sm:gap-5 animate-fade-in-up animation-delay-500">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 sm:px-9 sm:py-4 rounded-full bg-[#f5b041] text-[#070b12] font-bold text-sm sm:text-base shadow-[0_10px_25px_rgba(245,176,65,0.35)] hover:bg-[#e09e35] hover:shadow-[0_12px_30px_rgba(245,176,65,0.5)] hover:scale-[1.02] active:scale-98 transition-all duration-300"
              >
                <span>Let's Talk</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:px-8 sm:py-4 rounded-full bg-neutral-900/60 backdrop-blur-md border border-white/40 text-white font-semibold text-sm sm:text-base shadow-[0_8px_20px_rgba(0,0,0,0.3)] hover:bg-white hover:text-black hover:border-white hover:scale-[1.02] active:scale-98 transition-all duration-300"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </Link>
            </div>

          </div>
        </div>

        {/* Glow Line */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#f5b041]/40 to-transparent pointer-events-none" />
      </div>
    </section>
  );
};

export default Hero;