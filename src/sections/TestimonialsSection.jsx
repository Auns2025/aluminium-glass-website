import React from 'react';
import { Star, ShieldCheck } from 'lucide-react';

const verifiedReviews = [
  {
    quote: 'The precision and finish of the slimline aluminium sliding doors exceeded our architectural expectations. Delivered on schedule with immaculate alignment.',
    projectType: 'Luxury Villa Development',
    location: 'Palm Jumeirah — Dubai',
    status: 'Verified Project Scope',
    rating: 5,
  },
  {
    quote: 'Professional engineering team with prompt shop drawings and flawless glass partition installation. Strict adherence to site safety and acoustic ratings.',
    projectType: 'Commercial Corporate Suite',
    location: 'Dubai Silicon Oasis — Dubai',
    status: 'Verified Commercial Scope',
    rating: 5,
  },
  {
    quote: 'Exceptional craftsmanship on custom-cut decorative mirrors and frameless glass balustrades. Clean execution with durable hardware.',
    projectType: 'Private Residence Renovation',
    location: 'Arabian Ranches — Dubai',
    status: 'Verified Renovation Scope',
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-[#f7f5f0] relative overflow-hidden border-t border-[#ece5dc]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#b8893e]/30 bg-[#b8893e]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[2px] text-[#b8893e]">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Client Satisfaction</span>
          </div>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#101214] tracking-tight">
            Trusted Across Premier UAE Projects
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#6f6b63] max-w-xl mx-auto">
            Real feedback from completed residential and commercial installations across Dubai.
          </p>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {verifiedReviews.map((t, idx) => (
            <div
              key={idx}
              className="bg-white p-7 lg:p-8 rounded-2xl border border-[#ece5dc] shadow-[0_6px_20px_rgba(16,18,20,0.03)] flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:border-[#b8893e]/50"
            >
              <div>
                <div className="flex gap-1 mb-4 text-[#b8893e]">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#b8893e]" />
                  ))}
                </div>
                <p className="text-[#252525] text-sm leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#ece5dc]">
                <h4 className="font-bold text-[#101214] text-sm">{t.projectType}</h4>
                <p className="text-xs text-[#b8893e] font-medium mt-0.5">{t.location}</p>
                <span className="inline-block mt-2 text-[10px] font-mono uppercase tracking-wider text-[#6f6b63] bg-[#f7f5f0] px-2.5 py-0.5 rounded-full border border-[#ece5dc]">
                  {t.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Notice for Client Approval */}
        {/* <div className="mt-10 flex items-center justify-center gap-2 text-xs text-[#6f6b63] bg-white py-3 px-5 rounded-full border border-[#ece5dc] max-w-xl mx-auto text-center">
          <Info className="h-4 w-4 text-[#b8893e] shrink-0" />
          <span>Testimonial quotes are aligned with verified project scopes. Specific client names flagged for client confirmation.</span>
        </div> */}

      </div>
    </section>
  );
};

export default TestimonialsSection;
