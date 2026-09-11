import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Sparkles, MapPin, Layers } from 'lucide-react';

const projects = [
  {
    title: 'Crystal Tower Structural Glazing',
    category: 'Commercial',
    location: 'Business Bay',
    spec: 'Curtain Wall Facade & Spandrel',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'Minimalist Slimline Sliding Villa',
    category: 'Residential',
    location: 'Jumeirah Lakes Towers',
    spec: 'Ultra-slim 20mm Sightline Glass',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'Acoustic Soundproof Glass Offices',
    category: 'Corporate',
    location: 'Emaar Properties',
    spec: 'Double Glazed Acoustic Partitioning',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop',
  },
];

const categories = ['All Projects', 'Commercial', 'Residential', 'Corporate'];

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState('All Projects');

  const filteredProjects =
    activeTab === 'All Projects'
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <section className="py-20 md:py-28 bg-[#070b12] text-white relative overflow-hidden">
      {/* Ambient background light */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#f5b041]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">
        
        {/* Header and Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f5b041]/10 border border-[#f5b041]/30 text-[#f5b041] text-xs font-bold uppercase tracking-[2px] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Portfolio Showcase</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              Featured <span className="text-[#f5b041]">Masterpieces</span>
            </h2>
          </div>

          <Link
            to="/projects"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white/10 hover:bg-[#f5b041] hover:text-black border border-white/20 text-white font-semibold text-sm transition-all duration-300"
          >
            <span>Explore All Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2.5 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeTab === cat
                  ? 'bg-[#f5b041] text-black shadow-[0_0_20px_rgba(245,176,65,0.4)] scale-105'
                  : 'bg-neutral-900/80 text-neutral-300 border border-white/10 hover:border-white/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Unique Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {filteredProjects.map((p, idx) => (
            <Link
              key={idx}
              to="/projects"
              className="group relative overflow-hidden rounded-3xl bg-neutral-900 border border-white/10 shadow-[0_15px_35px_rgba(0,0,0,0.6)] hover:border-[#f5b041]/60 hover:shadow-[0_20px_45px_rgba(245,176,65,0.2)] transition-all duration-500 hover:-translate-y-2 flex flex-col"
            >
              {/* Image with Zoom */}
              <div className="aspect-[4/3.2] overflow-hidden bg-neutral-950 relative">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent opacity-90 group-hover:opacity-75 transition-opacity" />

                {/* Category Pill Top Left */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[#f5b041] text-xs font-bold tracking-wider uppercase">
                    {p.category}
                  </span>
                </div>

                {/* Circular Action Arrow Top Right */}
                <div className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-[#f5b041] group-hover:text-black group-hover:border-[#f5b041] transition-all duration-300 group-hover:scale-110">
                  <ArrowUpRight className="w-5 h-5 stroke-[2.2]" />
                </div>
              </div>

              {/* Card Details Body */}
              <div className="p-6 bg-gradient-to-b from-neutral-900 to-neutral-950 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#f5b041] transition-colors leading-snug">
                    {p.title}
                  </h3>

                  <div className="mt-3 flex items-center gap-2 text-xs text-neutral-400">
                    <MapPin className="w-3.5 h-3.5 text-[#f5b041] shrink-0" />
                    <span>{p.location}</span>
                  </div>
                </div>

                {/* Specs Box */}
                <div className="mt-5 pt-3 border-t border-white/10 flex items-center gap-2 text-xs font-medium text-neutral-300">
                  <Layers className="w-3.5 h-3.5 text-[#f5b041] shrink-0" />
                  <span className="truncate">{p.spec}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
