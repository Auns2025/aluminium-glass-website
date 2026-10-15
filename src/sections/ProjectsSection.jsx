import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Sparkles, MapPin, Layers, CheckCircle2 } from 'lucide-react';
import { verifiedProjects } from '../data/projects';

const ProjectsSection = () => {
  const [selectedProjectId, setSelectedProjectId] = useState(verifiedProjects[0].id);

  const dominantProject = verifiedProjects.find((p) => p.id === selectedProjectId) || verifiedProjects[0];
  const supportingProjects = verifiedProjects.filter((p) => p.id !== dominantProject.id).slice(0, 2);

  return (
    <section id="projects" className="relative overflow-hidden bg-[#f7f5f0] py-20 lg:py-28 text-[#101214] border-t border-[#ece5dc]">
      <div className="absolute left-10 top-1/3 w-96 h-96 rounded-full bg-[#b8893e]/5 blur-[140px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#b8893e]/30 bg-[#b8893e]/10 px-3 py-1 text-xs font-bold uppercase tracking-[2px] text-[#b8893e]">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Documented Projects Portfolio</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#101214] leading-[1.15]">
              Featured <span className="bg-gradient-to-r from-[#a87830] via-[#d9b66e] to-[#b8893e] bg-clip-text text-transparent">Installations</span>
            </h2>
          </div>

          <Link
            to="/projects"
            className="inline-flex items-center gap-2.5 rounded-full border border-[#d9d1c2] bg-white px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#101214] transition-all duration-300 hover:border-[#b8893e] hover:bg-[#b8893e] hover:text-[#101214] shadow-sm"
          >
            <span>Explore All 5 Documented Projects</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Project Selector Pills for Gallery Interaction */}
        <div className="mb-8 flex flex-wrap gap-2.5">
          {verifiedProjects.map((p) => (
            <button
              key={p.id}
              onClick={() => setSelectedProjectId(p.id)}
              className={`cursor-pointer rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300 ${
                selectedProjectId === p.id
                  ? 'bg-[#101214] text-[#f7f5f0] shadow-md scale-105'
                  : 'border border-[#e7e0d6] bg-white text-[#252525] hover:border-[#b8893e]'
              }`}
            >
              {p.title}
            </button>
          ))}
        </div>

        {/* Client Required Layout: One Dominant Project Photograph & Two Supporting Photographs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Dominant Project Card (Spans 7 columns on Desktop) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="group relative overflow-hidden rounded-2xl lg:rounded-3xl border border-[#ece5dc] bg-[#101214] shadow-[0_15px_35px_rgba(16,18,20,0.08)] flex-1 min-h-[400px] lg:min-h-[500px]">
              <img
                src={dominantProject.image}
                alt={dominantProject.title}
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101214] via-[#101214]/50 to-transparent" />

              {/* Status and Category Badges */}
              <div className="absolute top-5 left-5 right-5 flex flex-wrap items-center justify-between gap-2 z-10">
                <span className="inline-flex items-center rounded-full border border-[#b8893e]/40 bg-[#101214]/85 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#d9b66e] backdrop-blur-md">
                  {dominantProject.category}
                </span>

                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-[#101214]/80 px-3 py-1 text-[10px] font-medium !text-neutral-300 backdrop-blur-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#b8893e]" />
                  <span>Illustrative Reference · Awaiting Photo Sign-off</span>
                </span>
              </div>

              {/* Information at bottom */}
              <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 z-10">
                <div className="flex items-center gap-2 text-xs text-[#d9b66e] mb-1 font-medium">
                  <MapPin className="h-3.5 w-3.5 shrink-0" />
                  <span>{dominantProject.location}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold !text-white leading-snug">
                  {dominantProject.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm !text-neutral-300 max-w-xl line-clamp-2">
                  {dominantProject.description}
                </p>

                <div className="mt-4 pt-3.5 border-t border-white/15 flex flex-wrap items-center justify-between gap-3 text-xs !text-neutral-300">
                  <div className="flex items-center gap-2">
                    <Layers className="h-3.5 w-3.5 text-[#d9b66e] shrink-0" />
                    <span className="font-semibold !text-white">Verified Scope: {dominantProject.scope}</span>
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#d9b66e] hover:!text-white transition-colors"
                  >
                    <span>Inquire Project Scope</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Two Supporting Project Cards (Spans 5 columns on Desktop) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {supportingProjects.map((sup) => (
              <div
                key={sup.id}
                onClick={() => setSelectedProjectId(sup.id)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl lg:rounded-3xl border border-[#ece5dc] bg-[#101214] shadow-[0_10px_25px_rgba(16,18,20,0.06)] flex-1 min-h-[230px] transition-all duration-300 hover:border-[#b8893e]/60"
              >
                <img
                  src={sup.image}
                  alt={sup.title}
                  className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101214] via-[#101214]/50 to-transparent" />

                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center rounded-full border border-white/20 bg-[#101214]/80 px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#d9b66e] backdrop-blur-md">
                    {sup.category}
                  </span>
                </div>

                <div className="absolute bottom-0 inset-x-0 p-5 z-10">
                  <div className="flex items-center gap-1.5 text-[11px] text-[#d9b66e] mb-1">
                    <MapPin className="h-3 w-3 shrink-0" />
                    <span>{sup.location}</span>
                  </div>
                  <h4 className="text-lg font-bold !text-white group-hover:text-[#d9b66e] transition-colors">
                    {sup.title}
                  </h4>
                  <div className="mt-2 pt-2 border-t border-white/10 flex items-center justify-between text-xs !text-neutral-300">
                    <span className="truncate text-[11px] !text-neutral-200">Scope: {sup.scope}</span>
                    <span className="text-[11px] font-mono text-[#d9b66e] shrink-0 pl-2">Select →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Verified Scope & Project Documentation Audit Banner */}
        <div className="mt-8 rounded-2xl bg-white border border-[#ece5dc] p-5 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-[#b8893e]/10 text-[#b8893e] shrink-0 mt-0.5">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#101214]">
                    Verified Scope &amp; Project Documentation
                  </h4>
                  <span className="inline-block px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-[#b8893e]/15 text-[#b8893e]">
                    Approved Scopes
                  </span>
                </div>
                <p className="text-xs text-[#6f6b63] mt-1 leading-relaxed">
                  Project locations (<span className="text-[#101214] font-medium">Palm Jumeirah, Umme Saqeem, Arabian Ranches, Jumeirah Golf, Donna Tower</span>) and architectural scopes are verified from client documentation. Individual project photography mappings are marked as illustrative until final client on-site asset sign-off.
                </p>
              </div>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#d9d1c2] text-xs font-semibold text-[#101214] hover:border-[#b8893e] hover:text-[#b8893e] transition-colors whitespace-nowrap self-start sm:self-center"
            >
              <span>Consult Engineering Team</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;