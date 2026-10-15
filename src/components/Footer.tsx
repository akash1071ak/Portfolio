import React from 'react';
import { ArrowUp, Sparkles, Heart, Linkedin, Mail, Phone } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
  onOpenCaseStudy: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume, onOpenCaseStudy }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080C14] border-t border-white/5 py-14 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/5">
          
          {/* Brand & Summary */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary-600 to-accent-500 p-[2px]">
                <div className="w-full h-full bg-[#0B0F19] rounded-[10px] flex items-center justify-center font-heading font-bold text-white text-base">
                  AG
                </div>
              </div>
              <div>
                <span className="font-heading font-bold text-white block text-base">
                  {personalInfo.name}
                </span>
                <span className="text-xs text-primary-400 font-medium">
                  UI/UX Designer • Chennai
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              {personalInfo.tagline}
            </p>

            <div className="flex items-center gap-3 pt-1">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`}
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-300 block">
              Quick Navigation
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs text-slate-400">
              <a href="#about" className="hover:text-primary-400 transition-colors">About Akash</a>
              <a href="#projects" className="hover:text-primary-400 transition-colors">Projects & Works</a>
              <button onClick={() => onOpenCaseStudy('vehicle-repair-assistant')} className="text-left hover:text-primary-400 transition-colors">Vehicle Repair App</button>
              <a href="#interactive-demo" className="hover:text-primary-400 transition-colors">Live UX Prototype</a>
              <a href="#skills" className="hover:text-primary-400 transition-colors">Skills Matrix</a>
              <a href="#process" className="hover:text-primary-400 transition-colors">Design Process</a>
              <a href="#experience" className="hover:text-primary-400 transition-colors">Experience</a>
              <button onClick={onOpenResume} className="text-left hover:text-primary-400 transition-colors">ATS Resume</button>
            </div>
          </div>

          {/* Availability Status */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-300 block">
              Availability
            </span>
            <div className="bg-[#121A2C] p-4 rounded-2xl border border-white/5 space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-xs font-bold text-white">Actively Interviewing</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-normal">
                Seeking Full-time & Internship UI/UX, Product Design, and Interaction Design opportunities.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} Akash G. Crafted with user empathy and precision.</span>
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
