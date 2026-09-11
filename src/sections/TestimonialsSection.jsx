import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: 'The aluminium slimline doors transformed our villa completely. Sound insulation is remarkable and the finish is top notch.',
    author: 'Tariq Mehmood',
    role: 'Villa Owner, ',
    rating: 5,
  },
  {
    quote: 'Delivered 4 floors of double-glazed curtain wall facade on exact schedule. Engineering precision and team professionalism were commendable.',
    author: 'Engr. Imran Khan',
    role: 'Project Director, ',
    rating: 5,
  },
  {
    quote: 'Clean frameless glass shower cubicles and decorative mirrors installed with immaculate detail. Highly satisfied with their service.',
    author: 'Dr. Ayesha Siddiqui',
    role: 'Interior Designer',
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-[#f7f7f8] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-[2.5px] text-[#f5b041]">
            Client Reviews
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-neutral-900 tracking-tight">
            Trusted by Architects &amp; Homeowners
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-neutral-200/80 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex gap-1 mb-4 text-[#f5b041]">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-neutral-700 text-sm leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>
              </div>
              <div className="pt-4 border-t border-neutral-100">
                <h4 className="font-bold text-neutral-900 text-sm">{t.author}</h4>
                <p className="text-xs text-neutral-500 mt-0.5">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
