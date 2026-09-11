import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import CTASection from '../sections/CTASection';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Aluminium Windows & Doors',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full pt-28 pb-12">
      <div className="text-center py-10 px-6 max-w-4xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-[#f5b041]">Get in Touch</span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-900 mt-2 mb-4">
          Contact Us For Free Quotations &amp; Site Visits
        </h1>
        <p className="text-neutral-600 text-lg">
          Have a project in mind? Contact our team for technical consultations and rapid pricing estimates.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-neutral-900 text-white rounded-3xl p-8 md:p-10 shadow-xl">
              <h2 className="text-2xl font-bold mb-6 text-white">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-2xl text-[#f5b041]">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-neutral-400 uppercase tracking-wider">Office &amp; Workshop</h4>
                    <p className="text-white text-base mt-1">SHON BUSINESS PARK, ZONE 02 BUILDING, DUBAI INVESTMENT PARK (DIP) UNITED ARAB EMIRATES DUBAI</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-2xl text-[#f5b041]">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-neutral-400 uppercase tracking-wider">Call / WhatsApp</h4>
                    <p className="text-white text-base mt-1">+971526427235</p>
                    <p className="text-neutral-400 text-sm">+971549982498</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-2xl text-[#f5b041]">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-neutral-400 uppercase tracking-wider">Email Address</h4>
                    <p className="text-white text-base mt-1">amaluminumglassdubai@gmail.com</p>
                    <p className="text-neutral-400 text-sm">sales@aluminiumglass.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-2xl text-[#f5b041]">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-neutral-400 uppercase tracking-wider">Working Hours</h4>
                    <p className="text-white text-base mt-1">Monday - Saturday: 8:00 AM - 5:00 PM</p>
                    <p className="text-neutral-400 text-sm">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-neutral-200/80">
            <h2 className="text-2xl font-bold text-neutral-900 mb-2">Send Us an Inquiry</h2>
            <p className="text-neutral-600 text-sm mb-8">Fill out this quick form and our engineer will reach out within 24 hours.</p>

            {submitted ? (
              <div className="p-8 bg-emerald-50 rounded-2xl border border-emerald-200 text-center">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-emerald-900">Thank You!</h3>
                <p className="text-emerald-700 text-sm mt-1">Your inquiry has been received. We will get back to you shortly.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-2 bg-emerald-600 text-white rounded-full text-sm font-semibold hover:bg-emerald-700"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ali Ahmed"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#f5b041] focus:border-transparent text-sm bg-neutral-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="0300-1234567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#f5b041] focus:border-transparent text-sm bg-neutral-50/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="ali@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#f5b041] focus:border-transparent text-sm bg-neutral-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                      Service Needed
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#f5b041] focus:border-transparent text-sm bg-neutral-50/50"
                    >
                      <option>Aluminium Windows &amp; Doors</option>
                      <option>Glass &amp; Mirror Works</option>
                      <option>Automatic Sliding Doors</option>
                      <option>Curtain Wall &amp; Structural Glazing</option>
                      <option>Shower Enclosures &amp; Partitions</option>
                      <option>Steel Fabrication</option>
                      <option>Other Custom Solution</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                    Project Details / Requirements *
                  </label>
                  <textarea
                    rows="4"
                    required
                    placeholder="Tell us about the size, dimensions, location, or any specific requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#f5b041] focus:border-transparent text-sm bg-neutral-50/50"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 bg-[#f5b041] text-[#05060a] font-bold text-sm rounded-xl uppercase tracking-wider hover:bg-[#e09e35] transition-colors flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  <span>Submit Inquiry</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <CTASection />
    </div>
  );
};

export default Contact;
