import React from 'react';
import { Trophy, Users, Sparkles, CheckCircle2 } from 'lucide-react';
import { achievementsData } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-xs font-semibold uppercase tracking-wider text-primary-300">
            <Trophy className="w-3.5 h-3.5" />
            Extracurricular & Honors
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight">
            Design Hackathons &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">
              Community
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Active engagement in the broader design and HCI community.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {achievementsData.map((item) => (
            <div
              key={item.id}
              className="glass-card rounded-3xl p-7 border border-white/10 hover:border-primary-500/30 transition-all duration-300 space-y-4"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <Trophy className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-secondary-300">
                  {item.year}
                </span>
              </div>

              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-primary-400 block mb-1">
                  {item.tag}
                </span>
                <h3 className="font-heading font-bold text-lg text-white">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  {item.organization}
                </p>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed border-t border-white/5 pt-3">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
