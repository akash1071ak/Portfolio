import React, { useState } from 'react';
import {
  Sparkles,
  Palette,
  Search,
  Wrench,
  Code,
  Sparkle,
  CheckCircle2
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const tabIcons: Record<string, React.ElementType> = {
    Palette,
    Search,
    Wrench,
    Code,
    Sparkles
  };

  const currentCategory = skillCategories[activeTab];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-primary-950/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-xs font-semibold uppercase tracking-wider text-primary-300">
            <Sparkles className="w-3.5 h-3.5" />
            Core Competencies
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight">
            Design & Technical{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">
              Skill Matrix
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Categorized proficiency backed by real project implementation, Figma systems, and usability test evaluations.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {skillCategories.map((cat, idx) => {
            const Icon = tabIcons[cat.iconName] || Palette;
            const isSelected = activeTab === idx;

            return (
              <button
                key={cat.title}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-medium transition-all ${
                  isSelected
                    ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg shadow-primary-600/30'
                    : 'bg-[#121A2C] text-slate-300 hover:text-white hover:bg-white/5 border border-white/5'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Category Description Banner */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <p className="text-slate-300 text-sm font-medium">
            {currentCategory.description}
          </p>
        </div>

        {/* Skills Progress Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {currentCategory.skills.map((skill, index) => (
            <div
              key={skill.name}
              className="glass-card rounded-2xl p-6 border border-white/5 space-y-3 hover:border-primary-500/30 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <span className="font-heading font-bold text-base text-white">
                  {skill.name}
                </span>
                <span className="font-mono text-xs font-bold text-secondary-400 bg-secondary-500/10 px-2 py-0.5 rounded-full border border-secondary-500/20">
                  {skill.level}%
                </span>
              </div>

              {/* Animated Progress Bar */}
              <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 rounded-full transition-all duration-700 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              {skill.highlight && (
                <div className="pt-1 flex items-center gap-1.5 text-xs text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{skill.highlight}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Toolstack Badge Carousel / Tag Matrix */}
        <div className="mt-16 pt-10 border-t border-white/5 max-w-4xl mx-auto text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-slate-400 block">
            Tools & Software Stack
          </span>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              { name: "Figma", desc: "Advanced Auto-Layout & Tokens" },
              { name: "Adobe XD", desc: "Interactive Prototypes" },
              { name: "Adobe Photoshop", desc: "Asset Creation" },
              { name: "Adobe Illustrator", desc: "Vector Design" },
              { name: "Sketch", desc: "Basic Symbols" },
              { name: "FigJam / Miro", desc: "Journey & Empathy Maps" },
              { name: "HTML5 / CSS3", desc: "Layout Feasibility" },
              { name: "Python", desc: "Codsoft Internship" }
            ].map((tool) => (
              <div
                key={tool.name}
                className="px-4 py-2 rounded-xl bg-slate-900/70 border border-white/5 text-slate-200 text-xs flex items-center gap-2"
              >
                <span className="font-bold text-white">{tool.name}</span>
                <span className="text-slate-500">•</span>
                <span className="text-slate-400 text-[11px]">{tool.desc}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
