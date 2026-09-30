import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: 'Abdullah Mir Glass & Aluminium delivered an outstanding experience from start to finish. The quality of the aluminium windows and doors they installed completely transformed our home.',
    author: 'Sarah Al-Farsi',
    // role: 'Villa Owner, ',
    rating: 5,
  },
  {
    quote: 'We trusted Abdullah Mir Glass & Aluminium with our office glass partitions, and we couldn’t be happier with the results. The project was completed on time, and the quality of the materials is exceptional.',
    author: 'Ahmed Al-Baker',
    // role: 'Project Director, ',
    rating: 5,
  },
  {
    quote: 'The custom-made glass shower enclosure was exactly what we envisioned for our bathroom renovation. We highly recommend their services – excellent craftsmanship and customer service!',
    author: 'Emily Jacobs',
    // role: 'Interior Designer',
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
