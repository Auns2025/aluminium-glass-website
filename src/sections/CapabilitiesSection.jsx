import React from 'react';
import { Sparkles } from 'lucide-react';

const capabilities = [
  {
    number: '01',
    title: 'Design',
    subtitle: 'Engineering & Modeling',
    description: 'Comprehensive 2D/3D shop drawings, structural wind-load simulations, thermal and acoustic modeling, and municipality-ready engineering specs.',
  },
  {
    number: '02',
    title: 'Fabrication',
    subtitle: 'UAE CNC Precision',
    description: 'In-house automated profile milling, precision glass processing, double-glazed unit assembly, and rigorous pre-assembly quality control.',
  },
  {
    number: '03',
    title: 'Installation',
    subtitle: 'Master Structural Assembly',
    description: 'Certified master technicians executing millimeter-accurate mechanical anchoring, weatherproofing, structural silicone glazing, and safety testing.',
  },
  {
    number: '04',
    title: 'Maintenance',
    subtitle: 'Lifecycle Preservation',
    description: 'Scheduled facade inspections, glass replacement, gasket renewals, hardware recalibration, and long-term performance safeguarding.',
  },
  {
    number: '05',
    title: 'Project Management',
    subtitle: 'Execution & Compliance',
    description: 'Dedicated site supervision, timeline management, health and safety compliance, and disciplined on-schedule handover across the UAE.',
  },
];

const CapabilitiesSection = () => {
  return (
    <section id="capabilities" className="relative w-full bg-[#f7f5f0] py-20 lg:py-24 text-[#101214] overflow-hidden border-t border-[#ece5dc]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#b8893e]/30 bg-[#b8893e]/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[2.5px] text-[#b8893e]">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Full-Cycle Delivery</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#101214] leading-[1.15]">
            Core Technical Capabilities
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#252525] max-w-2xl mx-auto leading-relaxed">
            From initial concept calculations to post-handover preservation, our five integrated capabilities provide end-to-end accountability.
          </p>
        </div>

        {/* Premium Horizontal / Editorial 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {capabilities.map((cap) => (
            <div
              key={cap.number}
              className="group relative flex flex-col justify-between rounded-2xl bg-white p-6 sm:p-7 border border-[#ece5dc] shadow-[0_8px_24px_rgba(16,18,20,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-[#b8893e]/50 hover:shadow-[0_16px_36px_rgba(184,137,62,0.1)]"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-[#b8893e]/40 to-transparent group-hover:via-[#b8893e] transition-colors" />

              <div>
                {/* Number & Micro-Tag */}
                <div className="flex items-baseline justify-between mb-6">
                  <span className="font-mono text-2xl font-black text-[#b8893e]">
                    {cap.number}
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#6f6b63]">
                    Phase
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#101214] group-hover:text-[#b8893e] transition-colors">
                  {cap.title}
                </h3>

                <p className="text-[11px] font-semibold uppercase tracking-wider text-[#b8893e] mt-1 mb-3">
                  {cap.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-[#252525] leading-relaxed">
                  {cap.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#ece5dc] flex items-center justify-between text-xs font-semibold text-[#6f6b63] group-hover:text-[#101214] transition-colors">
                <span>Standardized</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#b8893e]" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CapabilitiesSection;
