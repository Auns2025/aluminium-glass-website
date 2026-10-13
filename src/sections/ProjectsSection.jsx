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
    <section className="relative overflow-hidden bg-[#f7f5f0] py-20 text-[#101214] md:py-28">
      <div className="absolute left-10 top-1/3 h-96 w-96 rounded-full bg-[#d9b66e]/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#d9b66e]/30 bg-[#d9b66e]/10 px-3 py-1 text-xs font-bold uppercase tracking-[2px] text-[#b8893e]">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Portfolio Showcase</span>
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight text-[#101214] md:text-5xl">
              Featured <span className="bg-gradient-to-r from-[#a87830] via-[#d9b66e] to-[#b8893e] bg-clip-text text-transparent">Masterpieces</span>
            </h2>
          </div>

          <Link
            to="/projects"
            className="inline-flex items-center gap-2.5 rounded-full border border-[#d9d1c2] bg-white px-6 py-3 text-sm font-semibold text-[#101214] transition-all duration-300 hover:border-[#b8893e] hover:bg-[#b8893e] hover:text-[#101214]"
          >
            <span>Explore All Projects</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mb-10 flex flex-wrap gap-2.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`cursor-pointer rounded-full px-5 py-2 text-xs font-semibold transition-all duration-300 sm:text-sm ${
                activeTab === cat
                  ? 'scale-105 bg-[#101214] text-[#f7f5f0] shadow-[0_10px_20px_rgba(16,18,20,0.12)]'
                  : 'border border-[#e7e0d6] bg-white text-[#252525] hover:border-[#b8893e]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
          {filteredProjects.map((p, idx) => (
            <Link
              key={idx}
              to="/projects"
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-[#ece5dc] bg-white shadow-[0_15px_35px_rgba(16,18,20,0.08)] transition-all duration-500 hover:-translate-y-2 hover:border-[#b8893e]/60"
            >
              <div className="relative aspect-[4/3.2] overflow-hidden bg-neutral-950">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#101214]/80 via-[#101214]/30 to-transparent opacity-90" />

                <div className="absolute left-4 top-4 z-10">
                  <span className="inline-flex items-center rounded-full border border-white/20 bg-black/55 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#d9b66e] backdrop-blur-md">
                    {p.category}
                  </span>
                </div>

                <div className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-[#d9b66e] group-hover:text-[#101214]">
                  <ArrowUpRight className="h-5 w-5 stroke-[2.2]" />
                </div>
              </div>

              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div>
                  <h3 className="text-xl font-bold leading-snug text-[#101214] transition-colors group-hover:text-[#b8893e]">
                    {p.title}
                  </h3>

                  <div className="mt-3 flex items-center gap-2 text-xs text-[#6f6b63]">
                    <MapPin className="h-3.5 w-3.5 shrink-0 text-[#b8893e]" />
                    <span>{p.location}</span>
                  </div>
                </div>

                <div className="mt-5 flex items-center gap-2 border-t border-[#ece5dc] pt-3 text-xs font-medium text-[#252525]">
                  <Layers className="h-3.5 w-3.5 shrink-0 text-[#b8893e]" />
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
