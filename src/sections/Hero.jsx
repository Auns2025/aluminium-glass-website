import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Gem,
  ShieldCheck,
  Settings,
  Building2,
  ArrowRight,
} from "lucide-react";

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.defaultMuted = true;
      video.muted = true;
      video.play().catch(() => {
        // Autoplay handled
      });
    }
  }, []);

  return (
    // Removed outer padding (px-3 pb-3 pt-2) so the video touches the edges
    <section className="relative flex min-h-screen w-full items-center justify-center bg-[#101214] text-[#101214]">
      {/* Removed inner rounding, borders, and fixed heights to make it full screen */}
      <div className="relative flex h-screen w-full overflow-hidden bg-[#101214]">
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            src="/images/logo-animation.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="h-full w-full scale-100 object-cover object-center md:object-[68%_center]"
          >
            <source src="/images/logo-animation.mp4" type="video/mp4" />
            <source src="/images/logo animation.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#101214]/90 via-[#101214]/55 to-[#101214]/35 md:to-[#101214]/25" />
          <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/45 via-transparent to-black/65" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-10 pt-28 sm:px-10 sm:pt-32 lg:px-16">
          <div className="max-w-2xl lg:max-w-3xl">
            <div className="mb-5 flex items-center gap-3 animate-fade-in-up animation-delay-100">
              <span className="inline-block h-[2px] w-8 rounded-full bg-[#d9b66e] sm:w-12" />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#f7f5f0]/80 sm:text-xs md:text-sm">
                Premium Quality | Expert Craftsmanship | On Time Delivery
              </span>
            </div>

            <h1 className="text-4xl font-bold leading-[0.95] tracking-[-0.04em] text-white drop-shadow-md sm:text-5xl md:text-6xl lg:text-[4.8rem] animate-fade-in-up animation-delay-200">
              Custom Glass &amp; Aluminium
              <span className="mt-2 block bg-gradient-to-r from-[#d9b66e] via-[#f9d889] to-[#b8893e] bg-clip-text text-transparent">
                Solutions for Your Space
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-base font-normal leading-relaxed !text-white sm:mt-5 sm:text-lg md:text-xl animate-fade-in-up animation-delay-300">
              Elegant, functional, and precision-crafted glass and aluminium solutions for residential, commercial, and industrial spaces.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 pt-2 sm:grid-cols-4 sm:gap-5 md:gap-6 animate-fade-in-up animation-delay-400">
              <div className="flex items-center gap-3 group">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#d9b66e]/40 bg-[#b8893e]/10 text-[#d9b66e] transition-all duration-300 group-hover:bg-[#d9b66e] group-hover:text-[#101214]">
                  <Gem className="h-5 w-5 stroke-[2.2]" />
                </div>
                <div className="text-xs font-semibold leading-tight text-neutral-100 sm:text-sm">
                  Modern <br />
                  <span className="text-neutral-300">Designs</span>
                </div>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#d9b66e]/40 bg-[#b8893e]/10 text-[#d9b66e] transition-all duration-300 group-hover:bg-[#d9b66e] group-hover:text-[#101214]">
                  <ShieldCheck className="h-5 w-5 stroke-[2.2]" />
                </div>
                <div className="text-xs font-semibold leading-tight text-neutral-100 sm:text-sm">
                  Durable <br />
                  <span className="text-neutral-300">&amp; Reliable</span>
                </div>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#d9b66e]/40 bg-[#b8893e]/10 text-[#d9b66e] transition-all duration-300 group-hover:bg-[#d9b66e] group-hover:text-[#101214]">
                  <Settings className="h-5 w-5 stroke-[2.2]" />
                </div>
                <div className="text-xs font-semibold leading-tight text-neutral-100 sm:text-sm">
                  Professional <br />
                  <span className="text-neutral-300">Installation</span>
                </div>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#d9b66e]/40 bg-[#b8893e]/10 text-[#d9b66e] transition-all duration-300 group-hover:bg-[#d9b66e] group-hover:text-[#101214]">
                  <Building2 className="h-5 w-5 stroke-[2.2]" />
                </div>
                <div className="text-xs font-semibold leading-tight text-neutral-100 sm:text-sm">
                  Residential &amp; <br />
                  <span className="text-neutral-300">Commercial</span>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4 sm:mt-10 sm:gap-5 animate-fade-in-up animation-delay-500">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#a87830] via-[#d9b66e] to-[#b8893e] px-8 py-3.5 text-sm font-bold text-[#101214] shadow-[0_10px_25px_rgba(184,137,62,0.32)] transition-all duration-300 hover:scale-[1.02] sm:px-9 sm:py-4 sm:text-base"
              >
                <span>Let&apos;s Talk</span>
                <ArrowRight className="h-4 w-4 stroke-[2.5]" />
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2.5 rounded-full border border-white/40 bg-[#101214]/60 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(0,0,0,0.25)] backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:bg-white hover:text-[#101214] sm:px-8 sm:py-4 sm:text-base"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="h-4 w-4 stroke-[2.5]" />
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