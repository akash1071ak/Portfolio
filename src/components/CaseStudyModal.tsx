import React, { useState, useEffect } from 'react';
import {
  X,
  Sparkles,
  Users,
  Compass,
  Layers,
  CheckCircle2,
  Clock,
  ArrowRight,
  ShieldCheck,
  Smartphone,
  Quote,
  Lightbulb,
  AlertCircle
} from 'lucide-react';
import { caseStudies } from '../data/portfolioData';

interface CaseStudyModalProps {
  caseStudyId: string | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ caseStudyId, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'research' | 'journey' | 'decisions' | 'testing'>('overview');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (caseStudyId) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [caseStudyId, onClose]);

  if (!caseStudyId) return null;

  const data = caseStudies[caseStudyId] || caseStudies['vehicle-repair-assistant'];

  const tabs = [
    { id: 'overview', label: '1. Overview & Problem', icon: Lightbulb },
    { id: 'research', label: '2. Research & Personas', icon: Users },
    { id: 'journey', label: '3. Journey & Flows', icon: Compass },
    { id: 'decisions', label: '4. Design Decisions', icon: Layers },
    { id: 'testing', label: '5. Usability & Learnings', icon: CheckCircle2 },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6 animate-fadeIn">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-5xl bg-[#0F172A] border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Header Bar */}
        <div className="p-5 sm:p-6 bg-[#131C31] border-b border-white/10 flex items-center justify-between shrink-0">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full bg-primary-500/20 text-primary-300 text-xs font-semibold">
                {data.clientOrContext}
              </span>
              <span className="text-xs text-slate-400">• {data.duration}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-white">
              {data.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs Bar */}
        <div className="flex items-center gap-1 overflow-x-auto p-2 bg-[#0C1221] border-b border-white/5 shrink-0 scrollbar-none">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-primary-600 text-white shadow-md shadow-primary-600/30'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1 text-slate-300">
          
          {/* TAB 1: OVERVIEW & PROBLEM */}
          {activeTab === 'overview' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="glass-card rounded-2xl p-6 border border-white/5 space-y-3">
                <h3 className="font-heading font-bold text-xl text-white">
                  Project Background
                </h3>
                <p className="text-sm leading-relaxed text-slate-300">
                  {data.background}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-red-950/20 border border-red-500/20 rounded-2xl p-6 space-y-3">
                  <div className="flex items-center gap-2 text-red-400 font-semibold text-sm">
                    <AlertCircle className="w-4 h-4" />
                    <span>The User Problem</span>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {data.userProblem}
                  </p>
                </div>

                <div className="bg-emerald-950/20 border border-emerald-500/20 rounded-2xl p-6 space-y-3">
                  <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>The Business & UX Goal</span>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {data.businessGoal}
                  </p>
                </div>
              </div>

              {/* Role & Tooling */}
              <div className="glass-card rounded-2xl p-6 border border-white/5 space-y-3">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-secondary-400">
                  My Contribution & Toolset
                </h4>
                <p className="text-sm text-white font-medium">
                  {data.role}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {data.tools.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-200">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: RESEARCH & PERSONAS */}
          {activeTab === 'research' && (
            <div className="space-y-6 animate-fadeIn">
              {/* Research Insights */}
              <div className="space-y-4">
                <h3 className="font-heading font-bold text-xl text-white">
                  Quantitative & Qualitative Insights
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {data.researchInsights.map((insight, idx) => (
                    <div key={idx} className="glass-card rounded-2xl p-5 border border-white/5 space-y-2">
                      <span className="font-heading font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-pink-400 block">
                        {insight.stat}
                      </span>
                      <h4 className="font-semibold text-sm text-white">{insight.title}</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">{insight.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Personas */}
              <div className="space-y-4">
                <h3 className="font-heading font-bold text-xl text-white">
                  Target User Personas
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {data.personas.map((persona, idx) => (
                    <div key={idx} className="glass-card rounded-2xl p-6 border border-white/5 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-purple-900/60 border border-purple-500/40 flex items-center justify-center font-bold text-base text-white">
                          {persona.name.charAt(0)}
                        </div>
                        <div>
                          <h4 className="font-heading font-bold text-white text-base">{persona.name}</h4>
                          <span className="text-xs text-secondary-400">{persona.role}</span>
                        </div>
                      </div>

                      <blockquote className="text-xs italic text-slate-300 border-l-2 border-primary-500 pl-3 py-1">
                        "{persona.quote}"
                      </blockquote>

                      <p className="text-xs text-slate-400 leading-relaxed">{persona.bio}</p>

                      <div className="space-y-2 text-xs">
                        <div>
                          <span className="font-semibold text-emerald-400 block mb-1">Key Goals:</span>
                          <ul className="list-disc list-inside space-y-0.5 text-slate-300">
                            {persona.goals.map((g, i) => <li key={i}>{g}</li>)}
                          </ul>
                        </div>
                        <div className="pt-1">
                          <span className="font-semibold text-rose-400 block mb-1">Frustrations:</span>
                          <ul className="list-disc list-inside space-y-0.5 text-slate-300">
                            {persona.frustrations.map((f, i) => <li key={i}>{f}</li>)}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: JOURNEY & FLOWS */}
          {activeTab === 'journey' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="space-y-3">
                <h3 className="font-heading font-bold text-xl text-white">
                  User Journey & Emotional Timeline
                </h3>
                <p className="text-xs sm:text-sm text-slate-400">
                  Tracking the user's emotional state from initial breakdown panic to relief after mechanic verification.
                </p>
              </div>

              {/* Journey Stepper */}
              <div className="space-y-3">
                {data.userJourney.map((step, idx) => (
                  <div key={idx} className="glass-card rounded-2xl p-4 border border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-lg bg-primary-600/30 text-primary-300 flex items-center justify-center font-mono text-xs font-bold">
                        0{idx + 1}
                      </span>
                      <div>
                        <span className="font-heading font-bold text-white text-sm block">{step.phase}</span>
                        <span className="text-xs text-slate-300">{step.action}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                      <span className="text-xs italic text-slate-400">"{step.thought}"</span>
                      <span className={`px-2.5 py-1 rounded-full text-[11px] font-semibold uppercase ${
                        step.emotion === 'happy' || step.emotion === 'relieved'
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                          : step.emotion === 'frustrated'
                          ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                          : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                      }`}>
                        {step.emotion}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Wireframe Iteration Notes */}
              <div className="glass-card rounded-2xl p-6 border border-white/5 space-y-3">
                <h4 className="font-heading font-bold text-base text-white">
                  Wireframing & Information Architecture Iterations
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300 list-disc list-inside">
                  {data.wireframeNotes.map((note, i) => (
                    <li key={i} className="leading-relaxed">{note}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* TAB 4: DESIGN DECISIONS */}
          {activeTab === 'decisions' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="space-y-3">
                <h3 className="font-heading font-bold text-xl text-white">
                  Intentional Design Decisions
                </h3>
                <p className="text-xs sm:text-sm text-slate-400">
                  Every button, color choice, and spacing token was defended with user testing evidence and cognitive ergonomics.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {data.designDecisions.map((item, idx) => (
                  <div key={idx} className="glass-card rounded-2xl p-6 border border-white/5 space-y-3 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="w-8 h-8 rounded-xl bg-secondary-600/20 text-secondary-300 flex items-center justify-center font-bold text-xs">
                        #{idx + 1}
                      </div>
                      <h4 className="font-heading font-bold text-base text-white">
                        {item.decision}
                      </h4>
                    </div>
                    <div className="bg-slate-900/60 p-3.5 rounded-xl border border-white/5">
                      <span className="text-[11px] font-semibold text-primary-400 uppercase tracking-wider block mb-1">
                        UX Rationale
                      </span>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {item.rationale}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: USABILITY TESTING & LEARNINGS */}
          {activeTab === 'testing' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="space-y-3">
                <h3 className="font-heading font-bold text-xl text-white">
                  Usability Testing Validation
                </h3>
                <p className="text-xs sm:text-sm text-slate-400">
                  Moderated usability tests conducted with 12 everyday bike commuters in Chennai.
                </p>
              </div>

              {/* Metrics cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {data.usabilityTesting.map((test, idx) => (
                  <div key={idx} className="glass-card rounded-2xl p-6 border border-white/5 space-y-3">
                    <span className="text-xs font-semibold text-secondary-400 uppercase tracking-wider block">
                      {test.metric}
                    </span>
                    <span className="font-heading font-bold text-2xl text-emerald-400 block">
                      {test.result}
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {test.insight}
                    </p>
                  </div>
                ))}
              </div>

              {/* Key learnings */}
              <div className="glass-card rounded-2xl p-6 border border-white/5 space-y-4">
                <h4 className="font-heading font-bold text-lg text-white flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-amber-400" />
                  Key Takeaways for Future Product Design
                </h4>
                <div className="space-y-2.5">
                  {data.keyLearnings.map((learning, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{learning}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer Bar */}
        <div className="p-4 sm:p-5 bg-[#131C31] border-t border-white/10 flex items-center justify-between shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs sm:text-sm font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
          >
            Close Case Study
          </button>

          <a
            href="#interactive-demo"
            onClick={onClose}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-500 hover:to-secondary-500 shadow-md shadow-primary-600/30 transition-transform active:scale-95"
          >
            <Smartphone className="w-4 h-4" />
            <span>Try Interactive Prototype</span>
          </a>
        </div>

      </div>
    </div>
  );
};
