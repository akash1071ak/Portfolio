import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Sparkles, ExternalLink, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenCaseStudy: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onOpenCaseStudy }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Case Study', onClick: () => onOpenCaseStudy('vehicle-repair-assistant') },
    { label: 'Skills', href: '#skills' },
    { label: 'Process', href: '#process' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav py-3 shadow-lg shadow-black/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Akash G - Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary-600 via-secondary-500 to-accent-500 p-[2px] shadow-md shadow-primary-600/30 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#0B0F19] rounded-[10px] flex items-center justify-center">
                <span className="font-heading font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-primary-300">
                  AG
                </span>
              </div>
            </div>
            <div className="hidden sm:block">
              <span className="font-heading font-bold tracking-tight text-white block text-base leading-tight">
                {personalInfo.name}
              </span>
              <span className="text-xs text-secondary-400 font-medium tracking-wide flex items-center gap-1.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                UI/UX Designer
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#131B2E]/60 border border-white/5 rounded-full px-4 py-1.5 backdrop-blur-md">
            {navLinks.map((item, index) => (
              item.onClick ? (
                <button
                  key={index}
                  onClick={item.onClick}
                  className="px-3.5 py-1.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-full transition-all duration-200"
                >
                  {item.label}
                </button>
              ) : (
                <a
                  key={index}
                  href={item.href}
                  className="px-3.5 py-1.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-full transition-all duration-200"
                >
                  {item.label}
                </a>
              )
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-200 hover:border-primary-500/40"
            >
              <FileText className="w-4 h-4 text-secondary-400" />
              <span>Resume</span>
            </button>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-500 hover:to-secondary-500 shadow-md shadow-primary-600/30 hover:shadow-primary-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <Sparkles className="w-4 h-4" />
              <span>Hire Me</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenResume}
              className="p-2 rounded-lg bg-white/5 text-slate-300 hover:text-white border border-white/10"
              title="Resume"
            >
              <FileText className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 text-slate-300 hover:text-white border border-white/10 focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-nav border-b border-white/10 px-4 pt-3 pb-6 mt-3 space-y-2 animate-fadeIn">
          <div className="flex flex-col space-y-1">
            {navLinks.map((item, index) => (
              item.onClick ? (
                <button
                  key={index}
                  onClick={() => {
                    item.onClick!();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-white/5 hover:text-primary-400"
                >
                  {item.label}
                </button>
              ) : (
                <a
                  key={index}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-white/5 hover:text-primary-400"
                >
                  {item.label}
                </a>
              )
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                onOpenResume();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 bg-white/5 border border-white/10"
            >
              <FileText className="w-4 h-4 text-secondary-400" />
              <span>View Full Resume</span>
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-primary-600 to-secondary-600"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Akash</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
