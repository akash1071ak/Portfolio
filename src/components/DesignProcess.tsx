import React, { useState } from 'react';
import {
  Sparkles,
  Heart,
  Target,
  Lightbulb,
  Layers,
  CheckCircle,
  ArrowRight,
  FileCheck
} from 'lucide-react';
import { designProcessSteps } from '../data/portfolioData';

export const DesignProcess: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const stepIcons: Record<string, React.ElementType> = {
    Heart,
    Target,
    Lightbulb,
    Layers,
    CheckCircle
  };

  const currentStep = designProcessSteps[activeStepIndex];
  const CurrentIcon = stepIcons[currentStep.icon] || Lightbulb;

  return (
    <section id="process" className="py-24 relative overflow-hidden bg-[#0A0E18]">
      
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary-950/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-secondary-500/10 border border-secondary-500/20 text-xs font-semibold uppercase tracking-wider text-secondary-300">
            <Sparkles className="w-3.5 h-3.5" />
            Human-Centered Methodology
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight">
            My End-to-End{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">
              Design Process
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            How I transform ambiguous real-world friction into intuitive, validated, and developer-ready product interfaces.
          </p>
        </div>

        {/* Stepper Navigation Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 mb-10 max-w-4xl mx-auto">
          {designProcessSteps.map((step, idx) => {
            const Icon = stepIcons[step.icon] || Lightbulb;
            const isSelected = activeStepIndex === idx;

            return (
              <button
                key={step.stepNumber}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-3.5 rounded-2xl border transition-all text-left flex flex-col justify-between ${
                  isSelected
                    ? 'bg-gradient-to-b from-primary-900/60 to-[#121B2F] border-primary-500/70 shadow-lg shadow-primary-950/60'
                    : 'bg-white/[0.02] border-white/5 hover:bg-white/[0.05]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`font-mono text-xs font-bold ${isSelected ? 'text-primary-300' : 'text-slate-500'}`}>
                    {step.stepNumber}
                  </span>
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-secondary-400' : 'text-slate-400'}`} />
                </div>
                <span className={`text-xs sm:text-sm font-heading font-bold ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                  {step.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Step Deep-Dive Showcase Card */}
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-white/10 max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Stage description */}
            <div className="md:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-primary-600 to-secondary-600 p-[1px] shadow-lg shadow-primary-600/30">
                  <div className="w-full h-full bg-[#111827] rounded-[15px] flex items-center justify-center text-primary-300">
                    <CurrentIcon className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <span className="text-xs font-mono font-semibold text-primary-400 uppercase tracking-widest block">
                    Phase {currentStep.stepNumber}
                  </span>
                  <h3 className="text-2xl font-heading font-bold text-white">
                    {currentStep.title} — <span className="text-slate-300 text-lg font-normal">{currentStep.subtitle}</span>
                  </h3>
                </div>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {currentStep.description}
              </p>

              {/* Activities pills */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-semibold text-secondary-400 uppercase tracking-wider block">
                  Core Activities & Methods
                </span>
                <div className="flex flex-wrap gap-2">
                  {currentStep.activities.map((act) => (
                    <span
                      key={act}
                      className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-medium text-slate-200"
                    >
                      {act}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Tangible Deliverables Card */}
            <div className="md:col-span-5 bg-[#141E33] border border-white/10 rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400">
                <FileCheck className="w-4 h-4" />
                <span>Phase Deliverables</span>
              </div>

              <div className="space-y-2.5">
                {currentStep.deliverables.map((deliv, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200 bg-slate-900/50 p-2.5 rounded-xl border border-white/5">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 shrink-0"></div>
                    <span>{deliv}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                <span>Next Phase:</span>
                <button
                  onClick={() => setActiveStepIndex((prev) => (prev + 1) % designProcessSteps.length)}
                  className="text-primary-300 hover:text-white font-semibold flex items-center gap-1 transition-colors"
                >
                  <span>Continue</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
