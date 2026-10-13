import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const DashboardDemo = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="text-xs font-medium uppercase tracking-[2.5px] text-neutral-700/75">
            Project Preview
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-neutral-900 md:text-5xl">
            <span>Explore your project</span>
            <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-[#a87830] via-[#d9b66e] to-[#b8893e] bg-clip-text text-transparent">
              {" "}before we build it.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-neutral-700/75">
            Preview your project concept before production begins. Explore
            designs, materials, finishes, and project details in one place.
          </p>
        </div>

        {/* Preview */}
        <div className="relative mx-auto max-w-5xl">
          {/* Glow - Updated to gold tones */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -inset-6 -z-10 rounded-[32px] opacity-60 blur-3xl"
            style={{
              background:
                "radial-gradient(50% 70% at 30% 40%, rgba(217,182,110,0.22), transparent 70%), radial-gradient(50% 70% at 80% 60%, rgba(184,137,62,0.16), transparent 70%)",
            }}
          />

          {/* Browser Window */}
          <Link
            to="/projects"
            aria-label="View project preview"
            className="relative block overflow-hidden rounded-2xl bg-[#eff1f5] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.18)] ring-1 ring-black/10 transition-transform duration-300 hover:-translate-y-1"
          >
            {/* Browser Header */}
            <div className="flex items-center gap-2 border-b border-black/10 bg-[#e4e6ea] px-4 py-2.5">
              {/* Browser Dots */}
              <span className="flex items-center gap-1.5">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57] ring-1 ring-[#e0443e]/30" />
                <span className="h-3 w-3 rounded-full bg-[#febc2e] ring-1 ring-[#d89c1f]/30" />
                <span className="h-3 w-3 rounded-full bg-[#28c840] ring-1 ring-[#1fa030]/30" />
              </span>

              {/* URL */}
              <span
                className="ml-3 flex items-center gap-1.5 text-[9px] uppercase tracking-[2px] text-neutral-700/75"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inset-0 animate-ping rounded-full bg-emerald-500 opacity-70" />
                  <span className="relative block h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </span>

                aluminium-glass / preview
              </span>

              {/* Launch Text */}
              <span
                className="ml-auto text-[9px] uppercase tracking-[1.5px] text-neutral-700/75"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                Click to view →
              </span>
            </div>

            {/* Preview Image */}
            <div className="bg-[#eff1f5] p-1 md:p-2">
              <div
                className="relative w-full overflow-hidden rounded-lg bg-white shadow-[0_8px_24px_-8px_rgba(0,0,0,0.15)]"
                style={{
                  aspectRatio: "2914 / 1496",
                }}
              >
                <picture>
                  <img
                    src="/Gemini_Generated_Image_ezxh8vezxh8vezxh.jpeg"
                    onError={(e) => {
                      e.currentTarget.src = "/images/Gemini_Generated_Image_ezxh8vezxh8vezxh(1).jpeg";
                    }}
                    alt="Aluminium and Glass project preview"
                    width="2400"
                    height="1233"
                    loading="eager"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover object-top"
                  />
                </picture>
              </div>
            </div>
          </Link>
        </div>

        {/* CTA - Updated to gold theme */}
        <div className="mt-10 flex flex-col items-center gap-3">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#a87830] via-[#d9b66e] to-[#b8893e] px-10 py-4 text-sm font-bold uppercase tracking-wider text-[#101214] shadow-[0_8px_24px_rgba(184,137,62,0.35)] transition-all duration-300 hover:scale-[1.02]"
          >
            View Our Projects
            <ArrowUpRight
              className="h-4 w-4"
              strokeWidth={2.5}
            />
          </Link>

          <p className="text-xs text-neutral-700/75">
            Explore our work · Aluminium · Glass · Custom Solutions
          </p>
        </div>
      </div>
    </section>
  );
};

export default DashboardDemo;