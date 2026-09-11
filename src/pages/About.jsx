import React from 'react';
import { ShieldCheck, Award, Users, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import StatsCounter from '../sections/StatsCounter';
import PartnersSection from '../sections/PartnersSection';
import CTASection from '../sections/CTASection';

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Premium Quality',
      desc: 'We utilize top-grade aluminium alloys and tempered glass engineered to withstand extreme climates and heavy daily use.',
    },
    {
      icon: ShieldCheck,
      title: 'Precision Craftsmanship',
      desc: 'Every joint, seal, and frame is measured and constructed with millimeter accuracy for flawless performance.',
    },
    {
      icon: Users,
      title: 'Dedicated Client Support',
      desc: 'From initial consultation and site survey to fabrication and post-installation warranty, we support you end-to-end.',
    },
  ];

  return (
    <div className="w-full pt-28 pb-12">
      {/* Hero Banner */}
      <section className="px-6 py-16 text-center max-w-5xl mx-auto">
        <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#f5b041] mb-3">
          About Our Company
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-neutral-900 tracking-tight mb-6">
          Architectural Glass &amp; Aluminium Engineering
        </h1>
        <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
          We are specialized fabricators and installers of modern aluminium structures, structural glazing, curtain walls, custom doors, and windows for residential and commercial spaces.
        </p>
      </section>

      {/* Story & Vision */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-white rounded-3xl p-8 md:p-14 shadow-sm border border-neutral-100">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
              Our Philosophy
            </span>
            <h2 className="text-3xl font-bold text-neutral-900 mt-2 mb-6">
              Transforming spaces with sleek aluminium and crystal-clear glass.
            </h2>
            <p className="text-neutral-600 mb-4 leading-relaxed">
              With decades of collective experience in structural glazing and precision metalwork, our team combines architectural aesthetics with robust engineering.
            </p>
            <p className="text-neutral-600 mb-6 leading-relaxed">
              Whether you are looking for sound-insulated double glazed windows, frameless shower cubicles, automatic sliding entrances, or high-rise curtain walls, we deliver unmatched finishing on time.
            </p>

            <div className="space-y-3">
              {['Guaranteed durability and warranty', 'Certified safety tempered glass', 'Custom bespoke fabrication'].map((item) => (
                <div key={item} className="flex items-center gap-3 text-neutral-800 text-sm font-medium">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-neutral-900 shadow-xl">
            <img
              src="/images/Gemini_Generated_Image_39478m39478m3947.jpeg"
              alt="Aluminium fabrication works"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-900">Why Work With Us</h2>
          <p className="text-neutral-600 mt-2">Setting standards in aluminium and glass architecture</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <div key={v.title} className="bg-white p-8 rounded-2xl border border-neutral-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-[#f5b041]/15 flex items-center justify-center text-[#f5b041] mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">{v.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Stats Counter */}
      <StatsCounter />

      {/* Partners / Tech */}
      <PartnersSection />

      {/* CTA */}
      <CTASection />
    </div>
  );
};

export default About;
