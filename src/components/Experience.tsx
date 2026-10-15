import React from 'react';
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#0A0F1D]/60 border-t border-white/5">
      
      {/* Background radial accent */}
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-primary-900/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-secondary-500/10 border border-secondary-500/20 text-xs font-semibold uppercase tracking-wider text-secondary-300">
            <Sparkles className="w-3.5 h-3.5" />
            Industry Experience
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight">
            Internships & Professional{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">
              Contributions
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Hands-on product design and software development internships with verified team collaboration.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto space-y-8 relative">
          
          {/* Vertical connecting line for desktop */}
          <div className="absolute top-6 bottom-6 left-8 w-0.5 bg-gradient-to-b from-primary-500 via-secondary-500 to-transparent hidden md:block" />

          {experienceData.map((item, index) => (
            <div
              key={item.id}
              className="relative md:pl-20 group"
            >
              {/* Timeline marker icon */}
              <div className="hidden md:flex absolute left-4 -translate-x-1/2 top-6 w-9 h-9 rounded-full bg-[#111827] border-2 border-primary-500 items-center justify-center text-primary-300 shadow-md shadow-primary-500/30 group-hover:scale-110 transition-transform">
                <Briefcase className="w-4 h-4" />
              </div>

              {/* Experience Card */}
              <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-primary-500/30 transition-all duration-300 space-y-4">
                
                {/* Header details */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/5">
                  <div>
                    <div className="flex items-center gap-2.5">
                      <span className="px-2.5 py-0.5 rounded-full bg-primary-500/20 text-primary-300 text-xs font-semibold">
                        {item.type}
                      </span>
                      <h3 className="text-xl font-heading font-bold text-white">
                        {item.role}
                      </h3>
                    </div>
                    <span className="text-sm font-semibold text-secondary-400 block mt-1">
                      {item.company}
                    </span>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs text-slate-400 gap-1">
                    <span className="flex items-center gap-1.5 text-slate-300 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-secondary-400" />
                      {item.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Key Achievements Bullet Points */}
                <div className="space-y-2 pt-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">
                    Key Contributions & Impact
                  </span>
                  <div className="space-y-2">
                    {item.achievements.map((ach, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{ach}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="pt-3 border-t border-white/5 flex flex-wrap gap-1.5">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-xs font-medium text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
