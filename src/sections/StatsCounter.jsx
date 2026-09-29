import { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: 50,
    suffix: "+",
    label: "Projects Completed",
  },
  {
    value: 40,
    suffix: "+",
    label: "Satisfied Clients",
  },
  {
    value: 100,
    suffix: "%",
    label: "Staff",
  },
];

const StatsCounter = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));
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

          const duration = 1800;
          const startTime = performance.now();

          const animate = (currentTime) => {
            const progress = Math.min(
              (currentTime - startTime) / duration,
              1
            );

            const easedProgress = 1 - Math.pow(1 - progress, 3);

            setCounts(
              stats.map((stat) =>
                Math.floor(stat.value * easedProgress)
              )
            );

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);

          observer.disconnect();
        }
      },
      {
        threshold: 0.25,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#f7f7f8] pb-14 pt-40 md:pb-20 md:pt-56"
    >
      <div className="mx-auto max-w-4xl px-6">
        {/* Testimonial */}
        <blockquote className="mx-auto mb-10 max-w-4xl text-center md:mb-14">
          <p className="text-balance text-xl font-medium leading-[1.25] tracking-tight text-neutral-900 md:text-3xl lg:text-4xl">
            “The quality and finishing were outstanding. They
            understood exactly what I wanted and delivered beautiful
            glass and aluminum work with excellent craftsmanship.
            Highly recommended!”
          </p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-neutral-900/20" />

            <span
              className="text-[10px] font-medium uppercase tracking-[0.25em] text-neutral-700/75 md:text-xs"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              Projects Delivered
            </span>

            <span className="h-px w-10 bg-neutral-900/20" />
          </div>
        </blockquote>

        {/* Stats */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <div key={stat.label}>
              <div className="group/stat relative rounded-2xl border border-neutral-200/80 bg-white p-6 text-left shadow-sm transition-all duration-300 hover:border-[#f5b041]/50 hover:shadow-xl sm:p-8 md:p-10">
                <div className="flex items-center gap-5 sm:block">
                  <span className="shrink-0 font-mono text-3xl font-extrabold text-neutral-900 transition-colors duration-300 group-hover/stat:text-[#f5b041] sm:text-4xl md:text-5xl">
                    <span className="tabular-nums">
                      {counts[index]}
                      {stat.suffix}
                    </span>
                  </span>

                  <p className="text-base font-semibold leading-snug text-neutral-600 sm:mt-3 sm:text-sm md:text-base">
                    {stat.label}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-[22vh] opacity-0 transition-opacity duration-700 ease-out"
        style={{
          background:
            "linear-gradient(to bottom, transparent, #ffffff)",
        }}
      />
    </section>
  );
};

export default StatsCounter;