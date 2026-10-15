import React from 'react';
import { MapPin, Layers, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { verifiedProjects } from '../data/projects';
import DashboardDemo from '../sections/DashboardDemo';
import CTASection from '../sections/CTASection';
import AccentBanner from '../sections/AccentBanner';

const Projects = () => {
  return (
    <div className="w-full pt-28 bg-[#f7f5f0] text-[#101214]">
      {/* Page Header */}
      <div className="text-center py-12 px-6 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-8 h-[2px] bg-[#b8893e]" />
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#b8893e]">
            Documented Portfolio
          </span>
          <span className="w-8 h-[2px] bg-[#b8893e]" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#101214] mt-2 mb-4">
          Featured Projects &amp; Installations
        </h1>
        <p className="text-[#6f6b63] text-base md:text-lg max-w-2xl mx-auto">
          Explore our documented architectural glass and aluminium installations across luxury communities in Dubai.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {verifiedProjects.map((project) => (
            <div
              key={project.id}
              className="group overflow-hidden rounded-2xl lg:rounded-3xl bg-white border border-[#ece5dc] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-[16/11] overflow-hidden bg-neutral-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center rounded-full bg-[#101214]/80 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#d9b66e] backdrop-blur-md border border-[#b8893e]/30">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-[#b8893e] mb-2 font-medium">
                    <MapPin className="h-3.5 w-3.5 shrink-0" />
                    <span>{project.location}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#101214] mb-2 group-hover:text-[#b8893e] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#252525] leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#ece5dc] flex items-center justify-between text-xs text-[#6f6b63]">
                  <div className="flex items-center gap-2 truncate pr-2">
                    <Layers className="h-3.5 w-3.5 text-[#b8893e] shrink-0" />
                    <span className="truncate">{project.scope}</span>
                  </div>
                  <Link
                    to="/contact"
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#101214] text-white hover:bg-[#b8893e] hover:text-[#101214] transition-colors"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <DashboardDemo />
      <AccentBanner />
      <CTASection />
    </div>
  );
};

export default Projects;
