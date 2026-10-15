import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  ArrowRight,
  FileText,
  MapPin,
  Linkedin,
  Mail,
  Phone,
  Layers,
  Smartphone,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  onOpenCaseStudy: (id: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenCaseStudy }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect for roles
  useEffect(() => {
    const currentRole = personalInfo.roles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText.length === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden">
      {/* Background Glows & Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-primary-600/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-accent-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-40 bg-secondary-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Bio */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-primary-950/80 to-secondary-950/80 border border-primary-500/30 backdrop-blur-md shadow-inner">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-primary-200">
                {personalInfo.status}
              </span>
            </div>

            {/* Main Greeting & Name */}
            <div className="space-y-2">
              <p className="text-sm sm:text-base font-medium text-slate-400 flex items-center justify-center lg:justify-start gap-2">
                <span>Hello, I am</span>
                <span className="text-slate-200 font-semibold">{personalInfo.name}</span>
                <span className="text-slate-500">•</span>
                <span className="inline-flex items-center gap-1 text-slate-400 text-xs sm:text-sm">
                  <MapPin className="w-3.5 h-3.5 text-primary-400" />
                  {personalInfo.location}
                </span>
              </p>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-white leading-[1.12]">
                Designing products users{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-secondary-300 to-accent-400">
                  love to use.
                </span>
              </h1>
            </div>

            {/* Typewriter Dynamic Role */}
            <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start">
              <span className="text-lg sm:text-2xl font-heading font-semibold text-slate-300">
                Specializing in{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 to-pink-400 border-b-2 border-secondary-400/60 pb-0.5">
                  {displayText}
                </span>
                <span className="animate-pulse text-primary-400 ml-1 font-mono">|</span>
              </span>
            </div>

            {/* Summary Paragraph */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {personalInfo.summary}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <button
                onClick={() => onOpenCaseStudy('vehicle-repair-assistant')}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-primary-600 via-purple-600 to-secondary-600 hover:from-primary-500 hover:to-secondary-500 shadow-lg shadow-primary-600/30 hover:shadow-primary-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <Sparkles className="w-5 h-5 text-amber-300" />
                <span>Vehicle Repair Case Study</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#interactive-demo"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-secondary-500/50 transition-all duration-200 backdrop-blur-sm"
              >
                <Smartphone className="w-4 h-4 text-secondary-400" />
                <span>Test Live Mobile Prototype</span>
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-800/80 border border-slate-700/60 transition-all duration-200"
              >
                <FileText className="w-4 h-4 text-slate-400" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Social & Contact Badges */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs sm:text-sm text-slate-400">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 hover:border-primary-500/40 text-slate-300 hover:text-white transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 hover:border-primary-500/40 text-slate-300 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-emerald-400" />
                <span>{personalInfo.email}</span>
              </a>

              <a
                href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 hover:border-primary-500/40 text-slate-300 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>{personalInfo.phone}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Visual Showcase Card */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-full max-w-md">
              
              {/* Outer Decorative Gradient Border */}
              <div className="relative rounded-3xl p-[2px] bg-gradient-to-b from-primary-500/60 via-secondary-500/30 to-accent-500/40 shadow-2xl shadow-primary-950/80">
                <div className="rounded-[22px] bg-[#111827] overflow-hidden p-6 sm:p-7 relative">
                  
                  {/* Subtle Inner Glow */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-primary-600/15 rounded-full blur-2xl pointer-events-none" />

                  {/* Profile & Avatar Header */}
                  <div className="flex items-center gap-4 pb-5 border-b border-white/10">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-primary-600 to-accent-500 p-[2px] shadow-lg shadow-primary-600/40">
                        <div className="w-full h-full rounded-[14px] bg-slate-900 overflow-hidden flex items-center justify-center">
                          {/* Avatar icon / representation */}
                          <div className="w-full h-full bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-950 flex items-center justify-center text-2xl font-bold font-heading text-white">
                            AG
                          </div>
                        </div>
                      </div>
                      <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-[#111827] flex items-center justify-center">
                        <CheckCircle2 className="w-3 h-3 text-slate-950" />
                      </span>
                    </div>

                    <div>
                      <h3 className="font-heading font-bold text-lg text-white">
                        {personalInfo.name}
                      </h3>
                      <p className="text-xs text-primary-300 font-medium">
                        UI/UX & Product Designer (Fresher)
                      </p>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        BCA Candidate • St. Peter's Institute
                      </p>
                    </div>
                  </div>

                  {/* Highlighted Project Spotlight Preview */}
                  <div className="my-5 rounded-2xl bg-[#1A2234] border border-white/10 p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-secondary-400 flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5" />
                        Flagship UX Case Study
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-primary-500/20 text-primary-300 text-[10px] font-medium border border-primary-500/30">
                        Mobile App
                      </span>
                    </div>

                    <h4 className="font-heading font-bold text-white text-base">
                      Vehicle Repair Assistant (FixGo)
                    </h4>
                    <p className="text-xs text-slate-300 line-clamp-2">
                      On-demand bike breakdown SOS with live GPS mechanic routing, verified technician badges, and transparent pricing.
                    </p>

                    {/* Metric Pills */}
                    <div className="grid grid-cols-3 gap-2 pt-1">
                      <div className="bg-slate-900/60 rounded-xl p-2 text-center border border-white/5">
                        <span className="block text-xs font-bold text-white">&lt; 40s</span>
                        <span className="text-[10px] text-slate-400">SOS Booking</span>
                      </div>
                      <div className="bg-slate-900/60 rounded-xl p-2 text-center border border-white/5">
                        <span className="block text-xs font-bold text-emerald-400">92%</span>
                        <span className="text-[10px] text-slate-400">Task Success</span>
                      </div>
                      <div className="bg-slate-900/60 rounded-xl p-2 text-center border border-white/5">
                        <span className="block text-xs font-bold text-secondary-300">10+</span>
                        <span className="text-[10px] text-slate-400">User Tests</span>
                      </div>
                    </div>

                    <button
                      onClick={() => onOpenCaseStudy('vehicle-repair-assistant')}
                      className="w-full mt-2 py-2 px-3 rounded-xl bg-primary-600/20 hover:bg-primary-600/30 border border-primary-500/40 text-primary-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <span>Read Complete Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Core Design Tools Tag Bar */}
                  <div className="space-y-2">
                    <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider block">
                      Core Design Toolstack
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {['Figma', 'Adobe XD', 'User Research', 'Design Systems', 'Wireframing', 'WCAG'].map((tool) => (
                        <span
                          key={tool}
                          className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-slate-300"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

              {/* Floating Badge 1: Top Right */}
              <div className="absolute -top-4 -right-4 bg-[#1E293B]/90 border border-primary-500/40 rounded-2xl p-2.5 shadow-xl backdrop-blur-md hidden sm:flex items-center gap-2 animate-float-slow">
                <div className="w-8 h-8 rounded-xl bg-primary-600/30 flex items-center justify-center text-primary-300 font-bold text-xs">
                  Fig
                </div>
                <div>
                  <span className="block text-[11px] font-bold text-white">Figma Master</span>
                  <span className="text-[10px] text-slate-400">Auto-Layout & Variants</span>
                </div>
              </div>

              {/* Floating Badge 2: Bottom Left */}
              <div className="absolute -bottom-5 -left-4 bg-[#1E293B]/90 border border-secondary-500/40 rounded-2xl p-2.5 shadow-xl backdrop-blur-md hidden sm:flex items-center gap-2 animate-float-delayed">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[11px] font-bold text-white">Login 360 Intern</span>
                  <span className="text-[10px] text-slate-400">UI Flows & User Testing</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
