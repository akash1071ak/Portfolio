import React from 'react';
import {
  Compass,
  Code2,
  Users2,
  Palette,
  CheckCircle,
  GraduationCap,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const About: React.FC = () => {
  const principles = [
    {
      icon: Users2,
      title: "Human-Centered Empathy",
      description: "Design begins with understanding people, not drawing shapes. I uncover raw friction points through interviews, personas, and usability observation."
    },
    {
      icon: Palette,
      title: "Design Systems Thinking",
      description: "I build scalable component libraries with rigorous auto-layout, atomic tokens, and accessible contrast ratios that keep product teams unified."
    },
    {
      icon: Code2,
      title: "Developer Feasibility",
      description: "With a computer application (BCA) foundation and Python experience, I design interfaces that are realistic to code and effortless to hand off."
    },
    {
      icon: Compass,
      title: "Iterative Validation",
      description: "Assumptions are tested early. Having tested UI prototypes with 10+ real users at Login 360, I refine designs based on measurable clarity and completion rates."
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary-900/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-xs font-semibold uppercase tracking-wider text-primary-300">
            <Sparkles className="w-3.5 h-3.5" />
            About Akash G
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight">
            Turning user pain into{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">
              seamless experiences.
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            A fresher UI/UX Designer combining structured design thinking with a technical mindset to craft intuitive, accessible, and high-impact digital products.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: Detailed Bio & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card rounded-3xl p-8 space-y-6">
              <h3 className="font-heading font-bold text-2xl text-white">
                Design Philosophy & Career Objective
              </h3>
              
              <blockquote className="border-l-4 border-primary-500 pl-4 py-1 italic text-slate-200 text-lg">
                "{personalInfo.philosophy}"
              </blockquote>

              <p className="text-slate-300 leading-relaxed text-base">
                I am a user-focused designer pursuing my Bachelor of Computer Application (BCA) at St. Peter's Institute of Higher Education and Research in Chennai. My journey in product design is rooted in the conviction that digital tools should relieve anxiety rather than create it.
              </p>

              <p className="text-slate-300 leading-relaxed text-base">
                During my UI/UX Design internship at <strong className="text-white font-semibold">Login 360</strong>, I worked directly with product managers and engineers to define user flows, design high-fidelity components, and run usability tests with 10+ real users. Complementing this, my technical internship in Python programming at <strong className="text-white font-semibold">Codsoft</strong> gave me an understanding of code constraints, state logic, and engineering handoffs.
              </p>

              <div className="pt-2">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-secondary-400 mb-3">
                  What I Bring to Product Teams
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "End-to-End Design Process (Research to Mockup)",
                    "Figma Mastery (Components, Variants, Auto-Layout)",
                    "Empathetic User Research & Usability Testing",
                    "Design System Architecture & WCAG Accessibility",
                    "Cross-Functional Collaboration with Developers",
                    "Continuous Problem-Solving Mindset"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Stats & Academic Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {personalInfo.stats.map((stat, i) => (
                <div
                  key={i}
                  className="glass-card rounded-2xl p-5 text-center border border-white/5 hover:border-primary-500/30 transition-all duration-300"
                >
                  <span className="block font-heading font-extrabold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-300">
                    {stat.value}
                  </span>
                  <span className="text-xs font-medium text-slate-400 mt-1 block">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Academic Snapshot Card */}
            <div className="glass-card rounded-3xl p-6 border border-white/5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary-600/20 border border-primary-500/30 flex items-center justify-center text-primary-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-white text-base">
                    Academic Background
                  </h4>
                  <p className="text-xs text-slate-400">
                    Computer Applications & HCI Focus
                  </p>
                </div>
              </div>

              <div className="space-y-3 pt-2 text-sm border-t border-white/5">
                <div>
                  <span className="font-semibold text-slate-200 block">
                    Bachelor of Computer Application (BCA)
                  </span>
                  <span className="text-xs text-primary-300">
                    St. Peter's Institute of Higher Education and Research (2023 – 2026)
                  </span>
                  <span className="text-xs text-slate-400 block mt-0.5">
                    CGPA: 6.7 / 10 • Chennai, India
                  </span>
                </div>

                <div className="pt-2">
                  <span className="font-semibold text-slate-200 block">
                    Higher Secondary Certificate (12th Grade)
                  </span>
                  <span className="text-xs text-slate-400">
                    Rural Institute of Open Schooling (May 2023) • 62.5%
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Core Principles 4-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="glass-card glass-card-hover rounded-2xl p-6 space-y-3 border border-white/5"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-primary-600/30 to-secondary-600/20 border border-primary-500/30 flex items-center justify-center text-primary-300">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-bold text-lg text-white">
                  {p.title}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {p.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
