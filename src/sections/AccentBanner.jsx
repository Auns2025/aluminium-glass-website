import React, { useEffect, useRef, useState } from "react";

const AccentBanner = () => {
  const sectionRef = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const scrollAmount = Math.max(0, -rect.top * 0.3);
      setOffset(scrollAmount);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen w-full bg-[#030303] p-3 sm:p-5 lg:p-6">
      <div className="relative h-[calc(100vh-1.5rem)] w-full overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl sm:h-[calc(100vh-2.5rem)] sm:rounded-[2.5rem]">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/images/making-windows-bird-friendly-with-saflex-r-flysafe-3d_2.jpg"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1800&auto=format&fit=crop";
            }}
            alt="AM Glass Aluminium Architectural Facade"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-[120%] w-full scale-[1.15] object-cover object-center"
            style={{ transform: `translate3d(0, ${offset}px, 0) scale(1.15)` }}
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />

        <div
          className="absolute bottom-6 right-6 z-10 max-w-[14rem] text-right text-xs font-medium uppercase leading-relaxed text-white/80 md:bottom-10 md:right-10 md:text-sm"
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