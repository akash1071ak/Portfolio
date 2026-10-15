import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  ExternalLink,
  Send,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  FileText
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface ContactProps {
  onOpenResume: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenResume }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    if (status === 'error') setStatus('idle');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('error');
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#0A0E18]">
      
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-600/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-xs font-semibold uppercase tracking-wider text-primary-300">
            <Sparkles className="w-3.5 h-3.5" />
            Let's Collaborate
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight">
            Ready to Build Something{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">
              Extraordinary?
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            I am actively looking for UI/UX Designer, Product Designer, and Visual Design roles. Let's discuss how I can contribute to your team.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-5xl mx-auto">
          
          {/* Left Column: Direct Contact Cards & Socials */}
          <div className="lg:col-span-5 space-y-5">
            <div className="glass-card rounded-3xl p-6 sm:p-7 border border-white/10 space-y-5">
              <h3 className="font-heading font-bold text-xl text-white">
                Contact Details
              </h3>

              <div className="space-y-4">
                {/* Email */}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/5 transition-all text-slate-300 hover:text-white group"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary-600/20 text-primary-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-medium text-slate-400 block">Direct Email</span>
                    <span className="text-sm font-semibold truncate block">{personalInfo.email}</span>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`}
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/5 transition-all text-slate-300 hover:text-white group"
                >
                  <div className="w-10 h-10 rounded-xl bg-secondary-600/20 text-secondary-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-medium text-slate-400 block">Call / WhatsApp</span>
                    <span className="text-sm font-semibold truncate block">{personalInfo.phone}</span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 text-slate-300">
                  <div className="w-10 h-10 rounded-xl bg-accent-500/20 text-accent-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-medium text-slate-400 block">Location</span>
                    <span className="text-sm font-semibold block">{personalInfo.location}</span>
                  </div>
                </div>
              </div>

              {/* Profiles & Actions */}
              <div className="pt-3 border-t border-white/5 space-y-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">
                  Design & Professional Profiles
                </span>

                <div className="grid grid-cols-2 gap-2.5">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-blue-600/10 hover:bg-blue-600/20 border border-blue-500/20 text-xs font-semibold text-blue-300 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  </a>

                  <a
                    href={personalInfo.behance}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-purple-600/10 hover:bg-purple-600/20 border border-purple-500/20 text-xs font-semibold text-purple-300 transition-colors"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Behance</span>
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  </a>
                </div>

                <button
                  onClick={onOpenResume}
                  className="w-full mt-2 py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <FileText className="w-4 h-4 text-secondary-400" />
                  <span>View & Download ATS Resume</span>
                </button>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-7 sm:p-8 border border-white/10">
              <h3 className="font-heading font-bold text-xl text-white mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill in the details below to discuss interview opportunities, product design projects, or design reviews.
              </p>

              {status === 'success' ? (
                <div className="p-8 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-center space-y-3 animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-heading font-bold text-lg text-white">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto">
                    Thank you for reaching out. I have received your message and will respond to your email shortly.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-3 px-4 py-2 rounded-xl bg-white/5 text-xs text-slate-300 hover:text-white"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {status === 'error' && (
                    <div className="p-3 rounded-xl bg-red-950/40 border border-red-500/30 flex items-center gap-2.5 text-xs text-red-300">
                      <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-medium text-slate-300">
                        Your Name <span className="text-primary-400">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Priya Sharma"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 text-white text-sm focus:outline-none focus:border-primary-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-medium text-slate-300">
                        Your Email <span className="text-primary-400">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. recruiter@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 text-white text-sm focus:outline-none focus:border-primary-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="text-xs font-medium text-slate-300">
                      Opportunity / Role
                    </label>
                    <input
                      id="subject"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. UI/UX Designer Opening at XYZ Tech"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 text-white text-sm focus:outline-none focus:border-primary-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-medium text-slate-300">
                      Message <span className="text-primary-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi Akash, we came across your Vehicle Repair Assistant case study and would love to connect..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 text-white text-sm focus:outline-none focus:border-primary-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-500 hover:to-secondary-500 font-semibold text-white text-sm shadow-lg shadow-primary-600/30 flex items-center justify-center gap-2 transition-all disabled:opacity-50"
                  >
                    {status === 'sending' ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message to Akash</span>
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
