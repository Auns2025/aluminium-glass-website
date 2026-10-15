import { useEffect, useRef, useState } from "react";
import { ShieldCheck } from "lucide-react";

const verifiableMetrics = [
  {
    value: 10,
    suffix: "",
    label: "Official Architectural Disciplines",
    detail: "From curtain walls to bifold systems",
  },
  {
    value: 5,
    suffix: "",
    label: "Documented Dubai Key Locations",
    detail: "Palm Jumeirah to Silicon Oasis",
  },
  {
    value: 100,
    suffix: "%",
    label: "Bespoke UAE Precision Fabrication",
    detail: "CNC engineered to project specifications",
  },
];

const StatsCounter = () => {
  const [counts, setCounts] = useState(verifiableMetrics.map(() => 0));
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1600;
          const startTime = performance.now();

          const animate = (currentTime) => {
            const progress = Math.min((currentTime - startTime) / duration, 1);
            const easedProgress = 1 - Math.pow(1 - progress, 3);

            setCounts(
              verifiableMetrics.map((stat) => Math.floor(stat.value * easedProgress))
            );

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#101214] py-20 lg:py-24 border-t border-white/10 !text-white"
    >
      <div className="mx-auto max-w-5xl px-6">
        
        {/* Approved Brand Commitment Statement */}
        <blockquote className="mx-auto mb-14 max-w-4xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#b8893e]/40 bg-[#b8893e]/15 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[2.5px] text-[#d9b66e]">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Architectural Standards</span>
          </div>

          <p className="text-balance text-xl sm:text-2xl md:text-3xl font-medium leading-[1.3] tracking-tight !text-white">
            “Precision architectural engineering, certified structural safety, and uncompromising finish quality across Dubai's most demanding environments.”
          </p>

          <div className="mt-6 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#b8893e]/40" />
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#d9b66e]">
              AM Glass Aluminium · Dubai UAE
            </span>
            <span className="h-px w-10 bg-[#b8893e]/40" />
          </div>
        </blockquote>

        {/* Verifiable Capabilities Counter Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {verifiableMetrics.map((stat, index) => (
            <div key={stat.label}>
              <div className="group/stat relative rounded-2xl border border-white/10 bg-[#16181b] p-6 sm:p-8 text-left shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-[#b8893e]/50 hover:bg-[#1a1d21]">
                <span className="shrink-0 font-mono text-4xl sm:text-5xl font-black !text-white transition-colors duration-300 group-hover/stat:text-[#d9b66e]">
                  <span className="tabular-nums">
                    {counts[index]}
                    {stat.suffix}
                  </span>
                </span>

                <h3 className="mt-3 text-base font-bold !text-white leading-snug">
                  {stat.label}
                </h3>

                <p className="mt-1 text-xs !text-white leading-relaxed">
                  {stat.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StatsCounter;