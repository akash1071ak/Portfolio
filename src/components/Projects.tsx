import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  ExternalLink,
  Smartphone,
  Layers,
  Award,
  CheckCircle2,
  SlidersHorizontal
} from 'lucide-react';
import { projects } from '../data/portfolioData';
import { Project } from '../types/portfolio';

interface ProjectsProps {
  onOpenCaseStudy: (id: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenCaseStudy }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Mobile UX/UI', 'Design System', 'Academic UX'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-secondary-900/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-xs font-semibold uppercase tracking-wider text-primary-300">
              <Sparkles className="w-3.5 h-3.5" />
              Featured Design Works
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight">
              Selected UI/UX{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">
                Projects & Case Studies
              </span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Showcasing human-centered problem solving, rigorous Figma prototyping, usability testing, and design system governance.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-[#121A2C] p-1.5 rounded-2xl border border-white/5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-md shadow-primary-600/30'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Loop over filtered projects */}
          {filteredProjects.map((project, index) => {
            const isFlagship = project.id === 'vehicle-repair-assistant';
            
            return (
              <div
                key={project.id}
                className={`${
                  isFlagship ? 'lg:col-span-12' : 'lg:col-span-6'
                } glass-card rounded-3xl overflow-hidden border border-white/10 hover:border-primary-500/30 transition-all duration-300 flex flex-col group`}
              >
                {/* Flagship Hero Card Layout */}
                {isFlagship ? (
                  <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                    
                    {/* Visual Preview Side */}
                    <div className="lg:col-span-6 bg-gradient-to-br from-[#162137] via-[#0F172A] to-[#1A1830] p-6 sm:p-10 relative overflow-hidden flex items-center justify-center min-h-[380px]">
                      
                      {/* Decorative elements */}
                      <div className="absolute -top-10 -left-10 w-44 h-44 bg-primary-600/20 rounded-full blur-3xl pointer-events-none" />
                      <div className="absolute -bottom-10 -right-10 w-44 h-44 bg-accent-500/20 rounded-full blur-3xl pointer-events-none" />

                      {/* Mockup Presentation */}
                      <div className="relative z-10 w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl border border-white/15 group-hover:scale-[1.02] transition-transform duration-500">
                        <div className="bg-slate-900/90 p-4 border-b border-white/10 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                          </div>
                          <span className="text-[11px] font-mono text-slate-400">FixGo • Figma Prototype</span>
                        </div>
                        <div className="p-6 bg-[#0E1526] space-y-4">
                          <div className="flex items-center justify-between">
                            <span className="px-2.5 py-1 rounded-lg bg-red-500/20 text-red-300 border border-red-500/30 text-xs font-bold">
                              SOS Emergency Trigger
                            </span>
                            <span className="text-xs text-slate-400">GPS Live Sync</span>
                          </div>
                          <h5 className="font-heading font-bold text-white text-lg">
                            Roadside Emergency Dispatch UI
                          </h5>
                          <div className="h-28 rounded-xl bg-slate-900 border border-white/5 p-3 flex flex-col justify-between">
                            <div className="flex justify-between items-center text-xs">
                              <span className="text-slate-400">Nearby Mechanic:</span>
                              <span className="text-emerald-400 font-semibold">1.2 km away</span>
                            </div>
                            <div className="text-xs text-slate-300 font-medium">
                              Estimated Labor + Parts: <span className="text-white font-bold">$25 - $35</span>
                            </div>
                            <div className="w-full bg-primary-600 text-white rounded-lg py-1.5 text-center text-xs font-bold">
                              Auto-Match Verified Mechanic
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>

                    {/* Details Side */}
                    <div className="lg:col-span-6 p-8 sm:p-10 space-y-6 flex flex-col justify-between">
                      <div className="space-y-4">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="px-3 py-1 rounded-full bg-primary-500/20 text-primary-300 border border-primary-500/30 text-xs font-semibold">
                            Flagship Case Study
                          </span>
                          <span className="px-3 py-1 rounded-full bg-white/5 text-slate-400 border border-white/5 text-xs font-medium">
                            {project.category}
                          </span>
                        </div>

                        <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white">
                          {project.title}
                        </h3>

                        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                          {project.tagline}
                        </p>

                        <div className="space-y-2 pt-2">
                          <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                            Problem Solved
                          </div>
                          <p className="text-xs sm:text-sm text-slate-300">
                            {project.problemStatement}
                          </p>
                        </div>

                        {/* Metric Highlights */}
                        <div className="grid grid-cols-3 gap-3 pt-2">
                          {project.metrics.map((m, idx) => (
                            <div key={idx} className="bg-slate-900/60 rounded-2xl p-3 border border-white/5 text-center">
                              <span className="block font-heading font-bold text-base sm:text-lg text-secondary-300">
                                {m.value}
                              </span>
                              <span className="text-[11px] text-slate-400 block mt-0.5">
                                {m.label}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Tools tags */}
                        <div className="flex flex-wrap gap-1.5 pt-2">
                          {project.tools.map((t) => (
                            <span
                              key={t}
                              className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-xs text-slate-300"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action buttons */}
                      <div className="pt-4 flex flex-wrap items-center gap-3">
                        <button
                          onClick={() => onOpenCaseStudy(project.caseStudyId || 'vehicle-repair-assistant')}
                          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-500 hover:to-secondary-500 font-semibold text-white text-sm shadow-md shadow-primary-600/30 transition-all hover:scale-[1.02]"
                        >
                          <Sparkles className="w-4 h-4" />
                          <span>View Comprehensive Case Study</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>

                        <a
                          href="#interactive-demo"
                          className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 text-sm font-medium transition-colors"
                        >
                          <Smartphone className="w-4 h-4 text-secondary-400" />
                          <span>Test Interactive Prototype</span>
                        </a>
                      </div>

                    </div>

                  </div>
                ) : (
                  /* Standard Card Layout */
                  <div className="p-7 space-y-5 flex flex-col justify-between h-full">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-1 rounded-full bg-white/5 text-slate-400 border border-white/5 text-xs font-medium">
                          {project.category}
                        </span>
                        <span className="text-xs font-semibold text-secondary-400">
                          {project.timeline}
                        </span>
                      </div>

                      <h3 className="font-heading font-bold text-xl sm:text-2xl text-white">
                        {project.title}
                      </h3>

                      <p className="text-slate-300 text-sm leading-relaxed">
                        {project.overview}
                      </p>

                      {/* Metric pills */}
                      <div className="grid grid-cols-3 gap-2 pt-1">
                        {project.metrics.map((m, idx) => (
                          <div key={idx} className="bg-slate-900/60 rounded-xl p-2.5 border border-white/5 text-center">
                            <span className="block font-bold text-sm text-secondary-300">{m.value}</span>
                            <span className="text-[10px] text-slate-400">{m.label}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tools tags */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.tools.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 rounded-lg bg-white/5 border border-white/5 text-xs text-slate-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                      <span>Role: <strong className="text-slate-200">{project.role}</strong></span>
                      <span className="text-primary-400 flex items-center gap-1 font-medium">
                        Verified Outcome <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      </span>
                    </div>

                  </div>
                )}

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
