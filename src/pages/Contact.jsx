import React from 'react';
import { Mail, Phone, MapPin, MessageSquare, ShieldCheck } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import CTASection from '../sections/CTASection';

const Contact = () => {
  return (
    <div className="w-full pt-28 pb-12 bg-[#f7f5f0] text-[#101214]">
      {/* Header */}
      <div className="text-center py-10 px-6 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-8 h-[2px] bg-[#b8893e]" />
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#b8893e]">
            Direct Technical Inquiry
          </span>
          <span className="w-8 h-[2px] bg-[#b8893e]" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#101214] mt-2 mb-4">
          Contact AM Glass Aluminium
        </h1>
        <p className="text-[#6f6b63] text-base md:text-lg max-w-2xl mx-auto">
          Connect with our engineering specialists in Dubai for technical consultations, laser site surveys, and rapid quotations.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Contact Information Cards (Spans 5 columns) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#101214] text-white rounded-2xl lg:rounded-3xl p-8 md:p-10 shadow-xl border border-white/10">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#d9b66e] block mb-1">
                Dubai Headquarters
              </span>
              <h2 className="text-2xl font-bold mb-6 text-white tracking-tight">
                Get In Touch
              </h2>

              <div className="space-y-6">
                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-2xl text-[#d9b66e] shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-[#d9b66e] uppercase tracking-wider">
                      Office &amp; Workshop
                    </h4>
                    <p className="text-neutral-200 text-sm mt-1 leading-snug">
                      SHON BUSINESS PARK, ZONE 02 BUILDING, DUBAI INVESTMENT PARK (DIP), DUBAI, UAE
                    </p>
                  </div>
                </div>

                {/* Phone Lines */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-2xl text-[#d9b66e] shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-[#d9b66e] uppercase tracking-wider">
                      Direct Phone Lines
                    </h4>
                    <div className="mt-1 space-y-1">
                      <a href="tel:+971526427235" className="block text-sm text-neutral-200 hover:text-[#d9b66e] transition-colors">
                        +971 52 642 7235
                      </a>
                      <a href="tel:+971549982498" className="block text-sm text-neutral-200 hover:text-[#d9b66e] transition-colors">
                        +971 54 998 2498
                      </a>
                      <a href="tel:+97142661822" className="block text-sm text-neutral-200 hover:text-[#d9b66e] transition-colors">
                        +971 4 266 1822
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email Lines */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-2xl text-[#d9b66e] shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-[#d9b66e] uppercase tracking-wider">
                      Official Emails
                    </h4>
                    <div className="mt-1 space-y-1">
                      <a href="mailto:info@amglassaluminum.com" className="block text-sm text-neutral-200 hover:text-[#d9b66e] transition-colors break-all">
                        info@amglassaluminum.com
                      </a>
                      <a href="mailto:amaluminumglassdubai@gmail.com" className="block text-sm text-neutral-200 hover:text-[#d9b66e] transition-colors break-all">
                        amaluminumglassdubai@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Legal Entity */}
                <div className="flex items-start gap-4 pt-4 border-t border-white/10">
                  <div className="p-3 bg-white/10 rounded-2xl text-[#d9b66e] shrink-0 mt-0.5">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-[#d9b66e] uppercase tracking-wider">
                      Commercial Entity
                    </h4>
                    <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                      Abdullah Mir Glass &amp; Aluminum Installation &amp; Maintenance L.L.C
                    </p>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Action */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <a
                  href="https://wa.me/971549982498"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider py-3.5 px-6 transition-colors shadow-lg"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp Directly</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quotation Form (Spans 7 columns) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>
      </div>

      <CTASection />
    </div>
  );
};

export default Contact;
