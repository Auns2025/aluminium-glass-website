import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Eye, Sliders, Layers, ShieldCheck } from "lucide-react";

const previewTabs = [
  {
    id: "sliding",
    name: "Sliding & Bifold Systems",
    category: "Fenestration",
    heading: "Slimline 20mm Panoramic Sliding Doors",
    description: "Ultra-minimal sightlines engineered with thermal break aluminium framing, whisper-quiet stainless steel rollers, and flush threshold integration.",
    specs: [
      { label: "Sightline Width", value: "20mm Minimalist" },
      { label: "Glass Configuration", value: "28mm Double Glazed Low-E" },
      { label: "Acoustic Rating", value: "Up to 38 dB" },
      { label: "Finish Coating", value: "25µ Anodized / Powder Coated" },
    ],
    image: "/images/Modern Villa Poolside at Dusk.png",
    details: "Configured for luxury beachfront villas and modern indoor-outdoor living.",
  },
  {
    id: "curtain-wall",
    name: "Structural Curtain Wall",
    category: "Exterior Envelope",
    heading: "High-Performance Unitized Facade Systems",
    description: "Engineered commercial facade glazing designed for extreme UAE wind loads, structural thermal barrier performance, and seamless glass corners.",
    specs: [
      { label: "System Type", value: "Unitized & Stick Facade" },
      { label: "Glass Specification", value: "32mm Solar Reflective IGU" },
      { label: "Wind Load Rating", value: "Exceeds Dubai Municipality Specs" },
      { label: "Thermal U-Value", value: "U ≤ 1.4 W/m²K" },
    ],
    image: "/images/making-windows-bird-friendly-with-saflex-r-flysafe-3d_2.jpg",
    details: "Precision fabricated in the UAE for high-rise commercial and luxury residential towers.",
  },
  {
    id: "partitions",
    name: "Acoustic Glass Partitions",
    category: "Interior Architecture",
    heading: "Frameless Double-Glazed Office Dividers",
    description: "Acoustic-rated modular glass partition walls with concealed aluminium perimeter channels, integrated sliding glass doors, and privacy acoustic interlayers.",
    specs: [
      { label: "Acoustic Rating", value: "Sound Insulation to 44 dB" },
      { label: "Glass Type", value: "10mm + 12mm Acoustic Laminated" },
      { label: "Channel Profile", value: "Minimal 25mm Recessed Base" },
      { label: "Hardware Finish", value: "Champagne Gold / Matte Obsidian" },
    ],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop",
    details: "Designed for executive boardroom confidentiality and bright, open-plan workspaces.",
  },
  {
    id: "finishes",
    name: "Finishes & Glazing Palette",
    category: "Material Studio",
    heading: "Architectural Material & Color Selection",
    description: "Explore our range of certified architectural finishes from brushed champagne gold and obsidian anodizing to solar-reflective and low-iron crystal glass.",
    specs: [
      { label: "Approved Gold", value: "Champagne Gold (#B8893E)" },
      { label: "Dark Architectural", value: "Obsidian Black (#101214)" },
      { label: "Glass Clarity", value: "Low-Iron Ultra Clear (99% Tr.)" },
      { label: "Warranty Standard", value: "10-Year Coated Surface Integrity" },
    ],
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop",
    details: "Formulated for severe coastal UV exposure and high-humidity resistance in the UAE.",
  },
];

const DashboardDemo = () => {
  const [activeTabId, setActiveTabId] = useState("sliding");
  const activeTab = previewTabs.find((t) => t.id === activeTabId) || previewTabs[0];

  return (
    <section className="relative overflow-hidden bg-[#101214] py-20 lg:py-28 !text-white border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        
        {/* Section Heading */}
        <div className="mb-14 text-center max-w-3xl mx-auto">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#b8893e]/40 bg-[#b8893e]/15 px-3.5 py-1 text-xs font-bold uppercase tracking-[2px] text-[#d9b66e]">
            <Eye className="h-3.5 w-3.5" />
            <span>Concept Preview Studio</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight !text-white leading-[1.15]">
            Explore your project <br />
            <span className="bg-gradient-to-r from-[#a87830] via-[#d9b66e] to-[#b8893e] bg-clip-text text-transparent">
              before we build it.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base !text-white leading-relaxed">
            Preview your architectural concept before production begins. Review system sightlines, acoustic ratings, profile finishes, and engineering specifications.
          </p>
        </div>

        {/* Interactive Concept Preview Suite */}
        <div className="relative mx-auto max-w-6xl rounded-2xl lg:rounded-3xl border border-white/10 bg-[#16181b] shadow-[0_25px_60px_rgba(0,0,0,0.6)] overflow-hidden">
          
          {/* Top Interface Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 bg-[#121316] px-6 py-4">
            {/* System Title */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              </div>
              <span className="font-mono text-xs !text-white font-medium tracking-wider pl-2 border-l border-white/15">
                amglassaluminium.com / concept-studio
              </span>
            </div>

            {/* Status Indicator */}
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#d9b66e] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#d9b66e]" />
              </span>
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#d9b66e]">
                Pre-Production Specification Tool
              </span>
            </div>
          </div>

          {/* Interactive Configuration Tabs */}
          <div className="border-b border-white/10 bg-[#16181b] px-6 py-3 overflow-x-auto [scrollbar-width:none]">
            <div className="flex items-center gap-2 min-w-max">
              {previewTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTabId(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                    activeTabId === tab.id
                      ? "bg-[#b8893e] text-[#101214] shadow-sm"
                      : "!text-white hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Sliders className="w-3.5 h-3.5" />
                  <span>{tab.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Preview Canvas: 2-Column Responsive Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8 lg:p-10 items-center">
            
            {/* Left: Realistic Architectural Visual Viewport (Spans 7 cols) */}
            <div className="lg:col-span-7">
              <div className="relative aspect-[16/11] rounded-2xl overflow-hidden border border-white/10 bg-[#101214] shadow-md group">
                <img
                  src={activeTab.image}
                  alt={activeTab.heading}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101214]/85 via-transparent to-black/30" />

                {/* Micro Category Overlay */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#101214]/90 backdrop-blur-md px-3.5 py-1 text-[10px] font-bold uppercase tracking-widest text-[#d9b66e] border border-[#b8893e]/30">
                    <Layers className="w-3 h-3" />
                    <span>{activeTab.category}</span>
                  </span>
                </div>

                {/* Bottom Architectural Caption */}
                <div className="absolute bottom-4 left-4 right-4 z-10 !text-white">
                  <p className="text-xs !text-white font-medium leading-snug">
                    {activeTab.details}
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Technical Specification Panel (Spans 5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase font-bold tracking-[0.2em] text-[#d9b66e] block mb-1">
                  Technical Configuration
                </span>
                <h3 className="text-2xl font-bold !text-white leading-snug tracking-tight">
                  {activeTab.heading}
                </h3>
                <p className="mt-3 text-xs sm:text-sm !text-white leading-relaxed">
                  {activeTab.description}
                </p>

                {/* Spec Matrix */}
                <div className="mt-6 space-y-2.5">
                  {activeTab.specs.map((s, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-3 rounded-xl bg-[#121316] border border-white/10 text-xs"
                    >
                      <span className="!text-white font-medium">{s.label}</span>
                      <span className="!text-white font-bold font-mono">{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold !text-white tracking-wider block">
                    Custom Sizing Available
                  </span>
                  <span className="text-xs font-semibold text-[#d9b66e]">
                    Precision Shop Drawings
                  </span>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#b8893e] px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#101214] shadow-md transition-all duration-300 hover:bg-white hover:text-[#101214]"
                >
                  <span>Request Specs</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>

            </div>

          </div>

          {/* Bottom Transparency Notice regarding 3D BIM integration */}
          <div className="border-t border-white/10 bg-[#121316] px-6 py-3 text-[11px] !text-white flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#d9b66e] shrink-0" />
              <span>Architectural Concept Preview · Digital engineering consultation tool for client review.</span>
            </div>
            <span className="font-mono text-[#d9b66e] font-semibold text-[10px]">
              AM Engineering Suite
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default DashboardDemo;