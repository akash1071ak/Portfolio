import React from 'react';
import { Award, CheckCircle2, Sparkles, ExternalLink } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-[#0D1220]/60 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-secondary-500/10 border border-secondary-500/20 text-xs font-semibold uppercase tracking-wider text-secondary-300">
            <Sparkles className="w-3.5 h-3.5" />
            Verified Credentials
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight">
            UI/UX Professional{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">
              Certifications
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Specialized training in user research, design systems, and Figma prototyping.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="glass-card rounded-3xl p-7 border border-white/10 hover:border-primary-500/30 transition-all duration-300 space-y-5 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${cert.badgeColor} flex items-center justify-center text-white shadow-lg`}>
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Verified Completion
                  </span>
                </div>

                <div>
                  <h3 className="font-heading font-bold text-xl text-white">
                    {cert.title}
                  </h3>
                  <p className="text-sm font-semibold text-secondary-400 mt-1">
                    {cert.issuer}
                  </p>
                </div>

                {/* Skills tags */}
                <div className="space-y-2 pt-1 border-t border-white/5">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                    Core Competencies Validated
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skillsLearned.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-xs text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
