import React from 'react';

const techStack = [
  {
    name: '',
    color: '#FF5D01',
    icon: (
      <img 
        src="/images/Gemini_Generated_Image_5gnyq55gnyq55gny.jpeg" 
        alt="Astro Icon" 
        className="h-full w-full object-cover rounded-xl transition-all duration-300 grayscale group-hover:grayscale-0 group-hover:scale-105"
      />
    ),
  },
  {
    name: '',
    color: '#61DAFB',
    icon: (
      <img 
        src="/images/Gemini_Generated_Image_wmobyewmobyewmob.jpeg" 
        alt="React Icon" 
        className="h-full w-full object-cover rounded-xl transition-all duration-300 grayscale group-hover:grayscale-0 group-hover:scale-105"
      />
    ),
  },
  {
    name: '',
    color: '#000000',
    icon: (
      <img 
        src="/images/Gemini_Generated_Image_rejnnzrejnnzrejn.jpeg" 
        alt="Next.js Icon" 
        className="h-full w-full object-cover rounded-xl transition-all duration-300 grayscale group-hover:grayscale-0 group-hover:scale-105"
      />
    ),
  },
  {
    name: '',
    color: '#3178C6',
    icon: (
      <img 
        src="/images/Gemini_Generated_Image_eln47heln47heln4.jpeg" 
        alt="TypeScript Icon" 
        className="h-full w-full object-cover rounded-xl transition-all duration-300 grayscale group-hover:grayscale-0 group-hover:scale-105"
      />
    ),
  },
  {
    name: '',
    color: '#646CFF',
    icon: (
      <img 
        src="/images/Gemini_Generated_Image_wgsxv6wgsxv6wgsx.jpeg" 
        alt="Vite Icon" 
        className="h-full w-full object-cover rounded-xl transition-all duration-300 grayscale group-hover:grayscale-0 group-hover:scale-105"
      />
    ),
  },
];

// Continuous marquee loop ke liye array duplicate kiya gaya hai
const marqueeItems = [...techStack, ...techStack];

const TechStackGrid = () => {
  return (
    <section id="stack" className="relative overflow-hidden pt-24 pb-32 md:pt-32 md:pb-48">
      <div className="mx-auto max-w-5xl px-6">
        <div>
          <p className="text-center text-xs font-medium uppercase tracking-[2.5px] text-foreground/75">
            Built With
          </p>
          <h2 className="mt-5 text-center font-display text-3xl font-bold tracking-tight md:text-5xl">
            <span className="inline-block">Our </span>{' '}
            <span className="inline-block">Trusted </span>{' '}
            <span className="inline-block">Partners</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-center text-base leading-relaxed text-foreground/75 md:text-lg">
            Building lasting partnerships through quality, reliability, and trusted service.
          </p>
        </div>

        <div className="mt-14 flex justify-center">
          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex w-max animate-marquee gap-6 md:gap-10 hover:[animation-play-state:paused]">
              {marqueeItems.map((tech, index) => (
                <div key={index} className="group flex shrink-0 flex-col items-center gap-3 cursor-pointer">
                  <div
                    className="flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-2xl md:rounded-3xl bg-white shadow-sm border border-border/30 p-2 transition-all duration-300 group-hover:scale-110 group-hover:border-transparent"
                    style={{
                      '--hover-color': tech.color,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = tech.color;
                      e.currentTarget.style.boxShadow = `0 10px 25px -5px ${tech.color}40`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '';
                      e.currentTarget.style.boxShadow = '';
                    }}
                  >
                    {tech.icon}
                  </div>
                  <span 
                    className="text-xs md:text-sm font-semibold text-foreground/75 transition-colors duration-300"
                    style={{ color: undefined }}
                    onMouseEnter={(e) => e.currentTarget.style.color = tech.color}
                    onMouseLeave={(e) => e.currentTarget.style.color = ''}
                  >
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackGrid;