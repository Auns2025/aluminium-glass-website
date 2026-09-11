import React from "react";

const AccentBanner = () => {
  return (
    <section className="relative min-h-screen w-full bg-[#030303] p-3 sm:p-5 lg:p-6">
      {/* Outer Card Wrapper (Hero jaisa rounded frame) */}
      <div className="relative h-[calc(100vh-1.5rem)] sm:h-[calc(100vh-2.5rem)] w-full overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] border border-white/10 shadow-2xl">
        
        {/* Background Image */}
        <img
          src="/Gemini_Generated_Image_tm21yatm21yatm21.jpeg"
          onError={(e) => {
            e.currentTarget.src = "/images/Gemini_Generated_Image_tm21yatm21yatm21.jpeg";
          }}
          alt="Glass and Aluminum project"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Gradient Overlay (Fade effect ke liye) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

        {/* Text Positioned Right/Bottom */}
        <div
          className="absolute bottom-6 right-6 md:bottom-10 md:right-10 max-w-[14rem] text-right text-xs md:text-sm font-medium uppercase leading-relaxed text-white/80 z-10"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
          }}
        >
          <span className="block">EVERY PROJECT</span>
          <span className="block">IS CAREFULLY</span>
          <span className="block">DESIGNED, BUILT, AND</span>
          <span className="block">HANDED OVER WITH CARE.</span>
        </div>

      </div>
    </section>
  );
};

export default AccentBanner;