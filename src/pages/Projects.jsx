import React from 'react';
import DashboardDemo from '../sections/DashboardDemo';
import CTASection from '../sections/CTASection';
import AccentBanner from '../sections/AccentBanner';

const projectsList = [
  {
    title: 'Commercial Plaza Curtain Wall',
    category: 'Curtain Wall & Facade',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
    location: 'Clifton, Karachi',
  },
  {
    title: 'Luxury Villa Slimline Sliding Doors',
    category: 'Aluminium Doors & Windows',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    location: 'DHA Phase 8, Karachi',
  },
  {
    title: 'Corporate Office Glass Partitions',
    category: 'Acoustic Glass Walls',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop',
    location: 'I.I. Chundrigar Road, Karachi',
  },
  {
    title: 'Modern Shower Enclosures & Railings',
    category: 'Interior Glass Works',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop',
    location: 'Gulshan-e-Iqbal, Karachi',
  },
];

const Projects = () => {
  return (
    <div className="w-full pt-28">
      <div className="text-center py-10 px-6 max-w-4xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-[#f5b041]">Portfolio</span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-900 mt-2 mb-4">
          Featured Projects &amp; Installations
        </h1>
        <p className="text-neutral-600 text-lg">
          Take a look at some of our completed architectural glass and aluminum installations.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsList.map((project, idx) => (
            <div key={idx} className="group overflow-hidden rounded-2xl bg-white border border-neutral-200/70 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="aspect-[16/10] overflow-hidden bg-neutral-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#f5b041]">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-neutral-900 mt-1 mb-2 group-hover:text-[#f5b041] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-neutral-500">{project.location}</p>
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
