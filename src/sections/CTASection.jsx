import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MessageSquare, ArrowRight, MapPin } from 'lucide-react';

const CTASection = () => {
  return (
    <section
      id="contact-cta"
      className="relative overflow-hidden bg-[#101214] py-24 lg:py-32 !text-white border-t border-white/10"
    >
      {/* Subtle architectural atmosphere with dark overlay */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1800&auto=format&fit=crop"
          alt="Architectural Glass Engineering"
          className="w-full h-full object-cover object-center filter grayscale"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#101214] via-[#101214]/90 to-[#101214]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 sm:px-8 text-center">
        
        {/* Restrained Champagne-Gold Accent */}
        <div className="inline-flex items-center gap-2 mb-6">
          <span className="w-8 h-[2px] bg-[#b8893e]" />
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#d9b66e]">
            Start Your Project
          </span>
          <span className="w-8 h-[2px] bg-[#b8893e]" />
        </div>

        {/* Required Client Heading: Large Elegant Serif Heading */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight !text-white leading-[1.1] max-w-4xl mx-auto font-display">
          Let's Create Something Exceptional.
        </h2>

        {/* Short, professional supporting text based on approved services */}
        <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg !text-white leading-relaxed font-sans">
          From luxury villa sliding systems and structural glass partitions to commercial curtain walls, our engineering team in Dubai is ready to realize your architectural vision.
        </p>

        {/* Primary and Secondary Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-5">
          {/* Primary Button: Request a Quote */}
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#a87830] via-[#d9b66e] to-[#b8893e] px-9 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#101214] shadow-[0_10px_30px_rgba(184,137,62,0.35)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_15px_40px_rgba(184,137,62,0.5)]"
          >
            <span>Request a Quote</span>
            <ArrowRight className="h-4 w-4 stroke-[2.5]" />
          </Link>

          {/* Direct WhatsApp Consultation */}
          <a
            href="https://wa.me/971549982498"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md px-8 py-4 text-xs sm:text-sm font-semibold uppercase tracking-wider !text-white transition-all duration-300 hover:bg-white hover:text-[#101214] hover:border-white"
          >
            <MessageSquare className="h-4 w-4 text-[#d9b66e]" />
            <span>WhatsApp Us</span>
          </a>
        </div>

        {/* Approved Direct Contact Strip */}
        <div className="mt-14 pt-10 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs !text-white">
          <a
            href="tel:+971526427235"
            className="flex items-center gap-2 hover:text-[#d9b66e] transition-colors !text-white"
          >
            <Phone className="h-4 w-4 text-[#d9b66e]" />
            <span className="font-semibold !text-white">+971 52 642 7235</span>
          </a>

          <a
            href="tel:+971549982498"
            className="flex items-center gap-2 hover:text-[#d9b66e] transition-colors !text-white"
          >
            <Phone className="h-4 w-4 text-[#d9b66e]" />
            <span className="font-semibold !text-white">+971 54 998 2498</span>
          </a>

          <a
            href="mailto:info@amglassaluminum.com"
            className="flex items-center gap-2 hover:text-[#d9b66e] transition-colors !text-white"
          >
            <Mail className="h-4 w-4 text-[#d9b66e]" />
            <span className="font-semibold !text-white">info@amglassaluminum.com</span>
          </a>

          <div className="flex items-center gap-2 !text-white">
            <MapPin className="h-4 w-4 text-[#d9b66e]" />
            <span className="!text-white">Dubai, United Arab Emirates</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CTASection;