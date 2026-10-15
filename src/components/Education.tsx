import React from 'react';
import { GraduationCap, Calendar, MapPin, CheckCircle2, Sparkles, BookOpen } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-primary-950/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-xs font-semibold uppercase tracking-wider text-primary-300">
            <Sparkles className="w-3.5 h-3.5" />
            Academic Foundation
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight">
            Education & Academic{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">
              Milestones
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Formal grounding in computer applications, human-computer interaction, and computational thinking.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {educationData.map((edu) => (
            <div
              key={edu.id}
              className="glass-card rounded-3xl p-8 border border-white/10 hover:border-primary-500/30 transition-all duration-300 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-primary-600/30 to-secondary-600/20 border border-primary-500/30 flex items-center justify-center text-primary-300">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-secondary-500/10 border border-secondary-500/20 text-xs font-bold text-secondary-300">
                    {edu.score}
                  </span>
                </div>

                <div>
                  <h3 className="font-heading font-bold text-xl text-white">
                    {edu.degree}
                  </h3>
                  <p className="text-sm font-semibold text-secondary-400 mt-1">
                    {edu.institution}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 pt-1">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    {edu.period}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    {edu.location}
                  </span>
                </div>

                {/* Highlights */}
                <div className="pt-2 space-y-2 border-t border-white/5">
                  {edu.highlights.map((hl, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{hl}</span>
                    </div>
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
