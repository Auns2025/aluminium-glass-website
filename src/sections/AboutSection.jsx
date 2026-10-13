import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Factory, PenTool, ShieldCheck, Flame, Shield } from 'lucide-react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const features = [
    { icon: <Factory className="w-5 h-5" />, title: 'UAE Based Manufacturing Facility', subtitle: 'With Advanced German Machinery' },
    { icon: <PenTool className="w-5 h-5" />, title: 'In House Design and Engineering', subtitle: 'Team Delivering Modern Customized Solutions' },
    { icon: <ShieldCheck className="w-5 h-5" />, title: 'Automated Production Ensuring Speed,', subtitle: 'Consistency and Quality' },
    { icon: <Flame className="w-5 h-5" />, title: 'Fire Rated Partitions Approved by', subtitle: 'Civil Defense Directorate' },
    { icon: <Shield className="w-5 h-5" />, title: 'Strong Focus on Safety,', subtitle: 'Compliance and Durability' },
  ];

  const performanceMetrics = [
    { label: 'PREFAB MANUFACTURING QUALITY', value: 100 },
    { label: 'SAFETY & REGULATORY STANDARDS', value: 100 },
    { label: 'ON-TIME PROJECT EXECUTION', value: 100 },
    { label: 'PRECISION MODULAR FABRICATION', value: 100 },
  ];

  return (
    <section ref={sectionRef} className="py-14 md:py-20 bg-white overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Beige container with consistent padding */}
        <div className="bg-[#f4ebd9] rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl relative">
          
          {/* TOP SECTION - Aligned header and image */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-10 lg:mb-12">
            
            {/* Left Content */}
            <div 
              className={`lg:col-span-7 transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
              }`}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold tracking-tight leading-[1.15] text-[#1a1a1a]">
                Your Trusted Partner in <br />
                <span className="text-[#c49a45]">Aluminium &amp; Glass</span> Solutions
              </h2>
              <p className="mt-4 text-[#4a4a4a] leading-relaxed text-sm sm:text-base max-w-2xl">
                We are a leading manufacturer of premium aluminium and architectural glass solutions in the UAE, operating across Sharjah, Abu Dhabi, and other UAE regions. We deliver durable, energy-efficient, and professionally installed systems designed for fast execution and long-term performance.
              </p>
            </div>

            {/* Right Image - Aligned to match text height */}
            <div 
              className={`lg:col-span-5 relative transition-all duration-1000 ease-out delay-200 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
              }`}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] bg-neutral-200 border border-[#e0d5c0]">
                <img
                  src="/images/Gemini_Generated_Image_39478m39478m3947.jpeg"
                  alt="Aluminium and Glass fabrication"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="w-full h-px bg-[#e0d5c0]/80 mb-10 lg:mb-12" />

          {/* BOTTOM SECTION - Features & Metrics */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Features */}
            <div 
              className={`lg:col-span-7 transition-all duration-1000 ease-out delay-300 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
              }`}
            >
              <div className="space-y-0">
                {features.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-start gap-4 py-4 border-b border-[#e0d5c0]/70 last:border-0"
                  >
                    <div className="text-[#c49a45] mt-0.5 shrink-0">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-sm text-[#1a1a1a] leading-snug">{item.title}</p>
                      <p className="text-xs text-[#5a5a5a] mt-1 leading-relaxed">{item.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#c49a45] text-white font-semibold text-xs uppercase tracking-wider hover:bg-[#b08838] transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Metrics */}
            <div 
              className={`lg:col-span-5 lg:sticky lg:top-8 transition-all duration-1000 ease-out delay-500 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
              }`}
            >
              <div className="bg-[#fdf8f0] border border-[#e0d5c0] rounded-2xl p-6 sm:p-7 shadow-sm">
                <h3 className="text-base font-bold text-[#1a1a1a] mb-6 flex items-start gap-2 leading-snug">
                  <span>Our Commitment to Quality &amp; Performance</span>
                  <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-[#c49a45] text-white text-[10px] shrink-0 mt-0.5">✓</span>
                </h3>
                
                <div className="space-y-5">
                  {performanceMetrics.map((metric, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between items-baseline text-[10px] font-bold text-[#5a5a5a] uppercase tracking-wider mb-2">
                        <span className="pr-2">{metric.label}</span>
                        <span className="text-[#c49a45] shrink-0">{metric.value}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-[#e8dcc8] rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r from-[#c49a45] to-[#d9b66e] rounded-full transition-all duration-[2000ms] ease-out ${
                            isVisible ? 'w-full' : 'w-0'
                          }`}
                          style={{ transitionDelay: `${800 + idx * 200}ms` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;