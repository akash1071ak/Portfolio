import React, { useState } from 'react';
import {
  X,
  Printer,
  Copy,
  Check,
  Download,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  ExternalLink
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const resumeText = `
AKASH G
UI/UX Designer
Tharamani, Chennai | +91-9003973056 | ak.akash1071@gmail.com | linkedin.com/in/akash-g-90039ak | behance.net/yourusername

PROFESSIONAL SUMMARY
Creative and user-focused fresher with a strong foundation in user-centered design, wireframing, and prototyping. Skilled in conducting user research, building design systems, and creating high-fidelity interactive prototypes using Figma and Adobe XD. Passionate about solving real user problems through intuitive, accessible, and visually engaging interfaces. Seeking a UI/UX Designer role to contribute to end-to-end product design.

TECHNICAL SKILLS
• Design Tools: Figma, Adobe XD, Sketch (basic), Adobe Photoshop, Adobe Illustrator
• Prototyping & Wireframing: Low & High-Fidelity Wireframes, Interactive Prototypes, Design Systems
• UX Research: User Interviews, Surveys, Personas, User Journey Mapping, Usability Testing, Card Sorting
• Concepts: Design Thinking, Information Architecture, Accessibility (WCAG basics), Responsive Design
• Programming & Tech: Python, HTML5, CSS3, JavaScript

ACADEMIC PROJECTS
Vehicle Repair Assistant | UI/UX Project
• Designed a user-friendly mobile application for on-demand bike repair assistance.
• Conducted user research to identify riders' pain points and emergency roadside needs.
• Created user personas, empathy maps, user flows, and wireframes to improve user experience.
• Designed an intuitive interface for finding nearby mechanics using GPS-based location services.
• Focused on quick service booking, mechanic verification, live tracking, and transparent repair cost estimates.

INTERNSHIP EXPERIENCE
UI/UX Design Intern | Login 360, Chennai (July 2026 - Oct 2026)
• Collaborated with product managers and developers to design user flows for a new feature module.
• Created wireframes and high-fidelity mockups in Figma, maintaining consistency with the existing design system.
• Conducted usability testing with 10+ users and incorporated feedback into final designs.

Python Programming Intern | Codsoft, Chennai (Oct 2025 - Nov 2025)
• Completed practical Python programming assignments as part of an internship program.
• Applied programming fundamentals, conditional statements, loops, functions, and problem-solving techniques.
• Developed and tested Python-based solutions for assigned tasks, improving debugging and logical thinking skills.

EDUCATION
• Bachelor of Computer Application (BCA) | Aug 2023 – May 2026
  St. Peter's Institute of Higher Education and Research | CGPA: 6.7 / 10
• Higher Secondary Certificate (12th Grade) | May 2023
  Rural Institute of Open Schooling | Percentage: 62.5%

CERTIFICATIONS
• UI/UX Course | Login 360, Chennai
• UI/UX Design Specialization | Coursera

ACHIEVEMENTS & EXTRA-CURRICULAR
• Finalist, College-Level UI/UX Design Hackathon, 2025
• Active member, College Design/HCI Club
  `.trim();

  const handleCopy = () => {
    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6 animate-fadeIn">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-[#0F172A] border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Top Control Bar */}
        <div className="p-4 sm:p-5 bg-[#131C31] border-b border-white/10 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-400"></span>
            <span className="font-heading font-bold text-white text-base">
              Akash G — Official Resume
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-slate-300 hover:text-white transition-colors"
              title="Copy Plain Text"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-primary-600 hover:bg-primary-500 font-semibold text-xs text-white shadow-md shadow-primary-600/30 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white flex items-center justify-center ml-1 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Formatted ATS-Ready Resume Document */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-white text-slate-900 font-sans text-xs sm:text-sm leading-normal selection:bg-purple-200">
          
          {/* Resume Header */}
          <div className="text-center pb-6 border-b-2 border-slate-900 space-y-1.5">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-wide uppercase font-heading text-slate-900">
              AKASH G
            </h1>
            <p className="text-sm font-bold text-purple-700 tracking-wider uppercase">
              UI/UX Designer
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-slate-600 pt-1">
              <span>Tharamani, Chennai</span>
              <span>•</span>
              <a href="tel:+919003973056" className="text-slate-900 hover:underline">+91-9003973056</a>
              <span>•</span>
              <a href="mailto:ak.akash1071@gmail.com" className="text-slate-900 hover:underline">ak.akash1071@gmail.com</a>
              <span>•</span>
              <a href="https://linkedin.com/in/akash-g-90039ak" target="_blank" rel="noreferrer" className="text-purple-700 hover:underline">linkedin.com/in/akash-g-90039ak</a>
              <span>•</span>
              <a href="https://behance.net/yourusername" target="_blank" rel="noreferrer" className="text-purple-700 hover:underline">behance.net/yourusername</a>
            </div>
          </div>

          {/* Section: Professional Summary */}
          <div className="py-4 border-b border-slate-200 space-y-1.5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-400 pb-0.5">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-slate-700 text-xs leading-relaxed text-justify">
              Creative and user-focused fresher with a strong foundation in user-centered design, wireframing, and prototyping. Skilled in conducting user research, building design systems, and creating high-fidelity interactive prototypes using Figma and Adobe XD. Passionate about solving real user problems through intuitive, accessible, and visually engaging interfaces. Seeking a UI/UX Designer role to contribute to end-to-end product design.
            </p>
          </div>

          {/* Section: Technical Skills */}
          <div className="py-4 border-b border-slate-200 space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-400 pb-0.5">
              TECHNICAL SKILLS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-xs text-slate-800">
              <p><strong>Design Tools:</strong> Figma, Adobe XD, Sketch (basic), Adobe Photoshop, Adobe Illustrator</p>
              <p><strong>Prototyping & Wireframing:</strong> Low & High-Fidelity Wireframes, Interactive Prototypes, Design Systems</p>
              <p><strong>UX Research:</strong> User Interviews, Surveys, Personas, User Journey Mapping, Usability Testing, Card Sorting</p>
              <p><strong>Concepts:</strong> Design Thinking, Information Architecture, Accessibility (WCAG basics), Responsive Design</p>
              <p className="sm:col-span-2"><strong>Programming Foundations:</strong> Python, HTML5, CSS3, JavaScript</p>
            </div>
          </div>

          {/* Section: Academic Projects */}
          <div className="py-4 border-b border-slate-200 space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-400 pb-0.5">
              ACADEMIC PROJECTS
            </h2>
            <div className="space-y-1.5">
              <div className="flex justify-between items-baseline">
                <h3 className="font-bold text-xs text-slate-900">Vehicle Repair Assistant | UI/UX Project</h3>
                <span className="text-[11px] text-slate-500 font-medium">Academic Project</span>
              </div>
              <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-slate-700">
                <li>Designed a user-friendly mobile application for on-demand bike repair assistance.</li>
                <li>Conducted user research to identify riders' pain points and emergency roadside needs.</li>
                <li>Created user personas, empathy maps, user flows, and wireframes to improve user experience.</li>
                <li>Designed an intuitive interface for finding nearby mechanics using GPS-based location services.</li>
                <li>Focused on quick service booking, mechanic verification, live tracking, and transparent repair cost estimates.</li>
              </ul>
            </div>
          </div>

          {/* Section: Internships */}
          <div className="py-4 border-b border-slate-200 space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-400 pb-0.5">
              INTERNSHIP EXPERIENCE
            </h2>

            {/* Login 360 */}
            <div className="space-y-1">
              <div className="flex justify-between items-baseline">
                <h3 className="font-bold text-xs text-slate-900">UI/UX Design Intern — Login 360, Chennai</h3>
                <span className="text-[11px] text-slate-500 font-medium">July 2026 – Oct 2026</span>
              </div>
              <ul className="list-disc list-outside ml-4 space-y-0.5 text-xs text-slate-700">
                <li>Collaborated with product managers and developers to design user flows for a new feature module.</li>
                <li>Created wireframes and high-fidelity mockups in Figma, maintaining consistency with the existing design system.</li>
                <li>Conducted usability testing with 10+ users and incorporated feedback into final designs.</li>
              </ul>
            </div>

            {/* Codsoft */}
            <div className="space-y-1">
              <div className="flex justify-between items-baseline">
                <h3 className="font-bold text-xs text-slate-900">Python Programming Intern — Codsoft, Chennai</h3>
                <span className="text-[11px] text-slate-500 font-medium">Oct 2025 – Nov 2025</span>
              </div>
              <ul className="list-disc list-outside ml-4 space-y-0.5 text-xs text-slate-700">
                <li>Completed practical Python programming assignments as part of an internship program.</li>
                <li>Applied programming fundamentals, conditional statements, loops, functions, and problem-solving techniques.</li>
                <li>Developed and tested Python-based solutions for assigned tasks, improving debugging and logical thinking skills.</li>
              </ul>
            </div>
          </div>

          {/* Section: Education */}
          <div className="py-4 border-b border-slate-200 space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-400 pb-0.5">
              EDUCATION
            </h2>
            <div className="space-y-1.5">
              <div className="flex justify-between items-baseline">
                <span className="font-bold text-xs text-slate-900">Bachelor of Computer Application (BCA)</span>
                <span className="text-[11px] text-slate-500">Aug 2023 – May 2026</span>
              </div>
              <p className="text-xs text-slate-700">
                St. Peter's Institute of Higher Education and Research | <strong>CGPA: 6.7 / 10</strong>
              </p>

              <div className="flex justify-between items-baseline pt-1">
                <span className="font-bold text-xs text-slate-900">Higher Secondary Certificate (12th Grade)</span>
                <span className="text-[11px] text-slate-500">May 2023</span>
              </div>
              <p className="text-xs text-slate-700">
                Rural Institute of Open Schooling | <strong>Percentage: 62.5%</strong>
              </p>
            </div>
          </div>

          {/* Section: Certifications & Achievements */}
          <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-400 pb-0.5">
                CERTIFICATIONS
              </h2>
              <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-slate-700">
                <li>UI/UX Course | Login 360, Chennai</li>
                <li>UI/UX Design Specialization | Coursera</li>
              </ul>
            </div>

            <div className="space-y-1.5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-400 pb-0.5">
                ACHIEVEMENTS & EXTRA-CURRICULAR
              </h2>
              <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-slate-700">
                <li>Finalist, College-Level UI/UX Design Hackathon, 2025</li>
                <li>Active member, College Design/HCI Club</li>
              </ul>
            </div>
          </div>

        </div>

        {/* Modal Bottom Bar */}
        <div className="p-3 bg-[#131C31] border-t border-white/10 text-center shrink-0">
          <span className="text-xs text-slate-400">
            Formatted strictly according to resume specifications • Press Escape to exit
          </span>
        </div>

      </div>
    </div>
  );
};
