import {
  ArrowLeft,
  ArrowRight,
  DoorClosed,
  Sparkles,
  Layers,
  Wrench,
  ShieldAlert,
  Building,
} from "lucide-react";

const services = [
  {
    number: "01",
    image: "/images/Gemini_Generated_Image_4e3hy14e3hy14e3h.jpeg",
    title: "Aluminium Doors & Windows",
    label: "Slimline Systems",
    description: "At Abdullah Mir Glass & Aluminium, our Aluminium Doors and Windows are designed to offer a perfect combination of strength, durability, and elegance.",
    icon: DoorClosed,
  },
  {
    number: "02",
    image: "/images/Gemini_Generated_Image_idr3v2idr3v2idr3.jpeg",
    title: "Glass & Mirror Works",
    label: "Custom Glazing",
    description: "From custom mirrors to decorative glass installations, we provide high-quality craftsmanship tailored to your design vision, offering sleek, modern solutions that reflect your unique style.",
    icon: Sparkles,
  },
  {
    number: "03",
    image: "/images/Gemini_Generated_Image_ohj5lkohj5lkohj5.jpeg",
    title: "Automatic Sliding Doors",
    label: "Smart Automation",
    description: "SOur Automatic Sliding Doors combine convenience, style, and security, making them a perfect solution for high-traffic areas. Designed for smooth, effortless operation, these doors offer easy access",
    icon: Layers,
  },
  {
    number: "04",
    image: "/images/Gemini_Generated_Image_pjhskgpjhskgpjhs.jpeg",
    title: "Structural Curtain Walls",
    label: "Commercial Facades",
    description: "High-performance commercial glass facades engineered for extreme wind resistance and energy efficiency.",
    icon: Building,
  },
  {
    number: "05",
    image: "/images/Gemini_Generated_Image_2mgwqs2mgwqs2mgw.jpeg",
    title: "Steel & Metal Fabrication",
    label: "Structural Metal",
    description: "From structural frameworks to decorative elements, we provide precision-engineered steel products that ensure durability, strength, and aesthetic appeal for both residential and commercial projects.",
    icon: Wrench,
  },
  {
    number: "06",
    image: "/images/pexels-heyho-7546284.jpg",
    title: "Shower Enclosures",
    label: "Engineered Glass",
    description: "Shower Enclosures combine elegance and functionality, offering customized designs to fit any space. Crafted with precision, they add a modern touch to your bathroom.",
    icon: ShieldAlert,
  },
];

const ServicesSection = () => {
  const scrollServices = (direction) => {
    const container = document.querySelector(".core-services-scroll");
    if (!container) return;
    const amount = 380;
    container.scrollBy({
      left: direction === "next" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#f7f5f0] py-20 text-[#101214] md:py-28"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[350px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d9b66e]/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#d9b66e]/30 bg-[#d9b66e]/10 px-3 py-1 text-xs font-bold uppercase tracking-[2px] text-[#b8893e]">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Our Specialized Services</span>
        </div>

        <h2 className="text-3xl font-extrabold tracking-tight text-[#101214] md:text-5xl">
          Comprehensive Architectural <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-[#a87830] via-[#d9b66e] to-[#b8893e] bg-clip-text text-transparent">Glass &amp; Aluminium</span> Solutions
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#252525] md:text-lg">
          From new luxury installations to custom metal fabrication, our certified engineers deliver precision-crafted, secure, and enduring architectural solutions.
        </p>
      </div>

      {/* Services Carousel */}
      <div className="relative mt-12 sm:mt-16 max-w-[1600px] mx-auto">
        {/* Controls */}
        <div
          className="pointer-events-none absolute right-8 -top-14 z-20 hidden items-center gap-3 sm:flex"
          role="group"
          aria-label="Service carousel controls"
        >
          <button
            type="button"
            aria-label="Previous service"
            onClick={() => scrollServices("prev")}
            className="pointer-events-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-neutral-900/80 text-white shadow-lg backdrop-blur-xl transition-all duration-200 hover:scale-105 hover:border-[#f5b041] hover:text-[#f5b041] cursor-pointer"
          >
            <ArrowLeft className="h-5 w-5" strokeWidth={2.2} />
          </button>

          <button
            type="button"
            aria-label="Next service"
            onClick={() => scrollServices("next")}
            className="pointer-events-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-neutral-900/80 text-white shadow-lg backdrop-blur-xl transition-all duration-200 hover:scale-105 hover:border-[#f5b041] hover:text-[#f5b041] cursor-pointer"
          >
            <ArrowRight className="h-5 w-5" strokeWidth={2.2} />
          </button>
        </div>

        {/* Horizontal Scroll with Sleeker Card Width */}
        <div className="core-services-scroll flex gap-5 overflow-x-auto scroll-smooth px-6 sm:px-10 py-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.number}
                className="group/service w-[290px] sm:w-[330px] md:w-[360px] lg:w-[380px] shrink-0 cursor-pointer rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-[#f5b041]"
                role="button"
                tabIndex={0}
                aria-label={`View ${service.title}`}
              >
                {/* Card Container */}
                <div className="relative block aspect-[4/4.8] sm:aspect-[4/4.6] overflow-hidden rounded-2xl bg-neutral-950 text-left border border-white/10 transition-all duration-500 hover:border-[#f5b041]/50 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6),0_0_25px_rgba(245,176,65,0.15)] group-hover/service:-translate-y-2">
                  
                  {/* Image */}
                  <img
                    src={service.image}
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop";
                    }}
                    alt={service.title}
                    className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover/service:scale-110"
                  />

                  {/* Gradient Layers */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20 group-hover/service:via-black/70 transition-all duration-300" />
                  <div className="pointer-events-none absolute inset-0 bg-neutral-950/20 backdrop-blur-[2px] group-hover/service:backdrop-blur-none transition-all duration-500" />

                  {/* Top Content */}
                  <div className="absolute inset-x-0 top-0 flex items-start justify-between p-5 text-white z-10">
                    {/* Icon */}
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-black/50 text-[#f5b041] shadow-lg backdrop-blur-xl transition-all duration-300 group-hover/service:scale-110 group-hover/service:border-[#f5b041] group-hover/service:bg-[#f5b041] group-hover/service:text-black">
                      <Icon className="h-5 w-5" strokeWidth={2.2} />
                    </div>

                    {/* Number */}
                    <span className="inline-flex items-center rounded-full border border-white/20 bg-black/40 px-3 py-1 font-mono text-xs tracking-wider text-neutral-300 backdrop-blur-xl group-hover/service:text-white group-hover/service:border-[#f5b041]/50">
                      {service.number}
                    </span>
                  </div>

                  {/* Bottom Content */}
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 text-white z-10 flex flex-col justify-end">
                    {service.label && (
                      /* FORCED LABEL COLOR #f1ae41 */
                      <p 
                        className="text-[10px] font-bold uppercase tracking-[0.2em] mb-1.5 !text-[#f1ae41]"
                        style={{ color: '#f1ae41' }}
                      >
                        {service.label}
                      </p>
                    )}

                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover/service:text-[#f5b041] transition-colors duration-200">
                      {service.title}
                    </h3>

                    {/* FORCED WHITE DESCRIPTION */}
                    <p 
                      className="mt-2 text-xs sm:text-sm leading-relaxed line-clamp-3 !text-white"
                      style={{ color: '#ffffff' }}
                    >
                      {service.description}
                    </p>

                    <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-neutral-400 group-hover/service:text-white transition-colors">
                      <span>Explore Details</span>
                      <ArrowRight className="w-4 h-4 text-[#f5b041] transform group-hover/service:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;