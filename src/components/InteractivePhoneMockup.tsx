import React, { useState } from 'react';
import {
  Smartphone,
  AlertTriangle,
  Navigation,
  ShieldCheck,
  Phone,
  Clock,
  Wrench,
  CheckCircle2,
  RefreshCw,
  Sparkles,
  MapPin,
  ChevronRight,
  BatteryCharging
} from 'lucide-react';

export const InteractivePhoneMockup: React.FC = () => {
  // Screen state: 1 = Map Home, 2 = Issue Diagnosis & Cost, 3 = Live Tracking Dispatch
  const [activeScreen, setActiveScreen] = useState<1 | 2 | 3>(1);
  const [selectedIssue, setSelectedIssue] = useState<string>('flat_tire');

  const issues = [
    { id: 'flat_tire', label: 'Flat Tire / Puncture', price: '$25 - $35', time: '10-15 mins', icon: Wrench },
    { id: 'battery', label: 'Battery / No Start', price: '$30 - $45', time: '15-20 mins', icon: BatteryCharging },
    { id: 'chain', label: 'Broken Chain / Brakes', price: '$40 - $60', time: '20-30 mins', icon: AlertTriangle },
  ];

  const currentIssueObj = issues.find(i => i.id === selectedIssue) || issues[0];

  return (
    <section id="interactive-demo" className="py-20 relative overflow-hidden bg-[#0D121F]/80 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-secondary-500/10 border border-secondary-500/20 text-xs font-semibold uppercase tracking-wider text-secondary-300">
            <Sparkles className="w-3.5 h-3.5" />
            Interactive UX Prototype
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight">
            Test the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-secondary-300 to-accent-400">
              Vehicle Repair Assistant
            </span>{' '}
            in Real Time
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Click directly on the mobile screen below to experience the 2-tap emergency roadside dispatch flow designed in Figma.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-5xl mx-auto">
          
          {/* Left Column: Interactive State Controls & Explanations */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-semibold text-primary-400 uppercase tracking-widest block">
                Prototype Walkthrough
              </span>
              <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white">
                Solving the #1 Roadside Fear: Opaque Pricing & Panic
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Traditional breakdown assistance requires lengthy calls and haggling. FixGo replaces that with instant GPS discovery, upfront repair ranges, and live tracking.
              </p>
            </div>

            {/* Step navigation tabs */}
            <div className="space-y-3">
              {[
                {
                  step: 1,
                  title: "Step 1: Emergency SOS Trigger",
                  desc: "One-touch breakdown trigger detecting GPS location automatically without confusing menus."
                },
                {
                  step: 2,
                  title: "Step 2: Transparent Cost Estimation",
                  desc: "Select the breakdown symptom to view verified parts + labor estimate upfront before dispatch."
                },
                {
                  step: 3,
                  title: "Step 3: Live Mechanic Routing & Verification",
                  desc: "Live ETA, mechanic background rating, vehicle details, and direct masked calling."
                }
              ].map((s) => (
                <button
                  key={s.step}
                  onClick={() => setActiveScreen(s.step as 1 | 2 | 3)}
                  className={`w-full text-left p-4 rounded-2xl transition-all duration-200 border flex items-start gap-3.5 ${
                    activeScreen === s.step
                      ? 'bg-primary-950/40 border-primary-500/50 shadow-lg shadow-primary-950/50'
                      : 'bg-white/[0.02] border-white/5 hover:bg-white/[0.04]'
                  }`}
                >
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${
                    activeScreen === s.step
                      ? 'bg-primary-500 text-white'
                      : 'bg-slate-800 text-slate-400'
                  }`}>
                    0{s.step}
                  </div>
                  <div>
                    <h4 className={`text-sm font-semibold ${activeScreen === s.step ? 'text-white' : 'text-slate-300'}`}>
                      {s.title}
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {s.desc}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            <div className="pt-2 flex items-center gap-3 text-xs text-slate-400">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Tested with 10+ users
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4 text-secondary-400" /> 38-second task completion
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Phone Device Simulator */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-[310px] sm:w-[340px] h-[640px] bg-slate-950 rounded-[48px] p-3 shadow-2xl border-[4px] border-slate-700/80 shadow-primary-950/80">
              
              {/* Dynamic Island / Camera Notch */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-30 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-900 ml-auto mr-3 border border-slate-800"></div>
              </div>

              {/* Inner Screen Display */}
              <div className="w-full h-full bg-[#0F172A] rounded-[38px] overflow-hidden flex flex-col relative text-white select-none">
                
                {/* Status Bar */}
                <div className="pt-3 px-6 pb-2 flex items-center justify-between text-[11px] text-slate-300 font-medium z-20">
                  <span>9:41</span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px]">5G</span>
                    <div className="w-5 h-2.5 border border-slate-300 rounded-sm p-[1px] flex items-center">
                      <div className="w-full h-full bg-white rounded-2xs"></div>
                    </div>
                  </div>
                </div>

                {/* ================= SCREEN 1: MAP HOME ================= */}
                {activeScreen === 1 && (
                  <div className="flex-1 flex flex-col justify-between p-4 relative animate-fadeIn">
                    {/* Simulated Map Background */}
                    <div className="absolute inset-0 bg-[#121B2D] opacity-90 overflow-hidden">
                      {/* Grid lines simulating streets */}
                      <svg className="w-full h-full opacity-25" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M 0,20 L 100,25 M 20,0 L 30,100 M 0,70 L 100,65 M 70,0 L 65,100 M 10,40 L 90,45" stroke="#7C3AED" strokeWidth="1.5" fill="none" />
                        <circle cx="50" cy="50" r="14" fill="#7C3AED" fillOpacity="0.15" />
                        <circle cx="50" cy="50" r="4" fill="#38BDF8" />
                        {/* Mechanic pin 1 */}
                        <circle cx="35" cy="30" r="3" fill="#A855F7" />
                        {/* Mechanic pin 2 */}
                        <circle cx="75" cy="40" r="3" fill="#A855F7" />
                      </svg>
                    </div>

                    {/* App Header */}
                    <div className="relative z-10 space-y-2">
                      <div className="flex items-center justify-between bg-slate-900/80 backdrop-blur-md p-2.5 rounded-2xl border border-white/10">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-lg bg-primary-600 flex items-center justify-center font-bold text-xs">
                            Fix
                          </div>
                          <div>
                            <span className="text-xs font-bold block leading-none">FixGo Roadside</span>
                            <span className="text-[10px] text-emerald-400">GPS Active • Tharamani</span>
                          </div>
                        </div>
                        <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-[10px]">
                          AG
                        </div>
                      </div>
                    </div>

                    {/* Bottom Action Sheet */}
                    <div className="relative z-10 space-y-3 bg-[#162032]/95 backdrop-blur-md p-4 rounded-3xl border border-white/10 shadow-xl">
                      {/* Big SOS Button */}
                      <button
                        onClick={() => setActiveScreen(2)}
                        className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-red-600 via-rose-600 to-pink-600 hover:from-red-500 hover:to-rose-500 font-bold text-sm text-white flex items-center justify-center gap-2 shadow-lg shadow-red-600/40 animate-pulse transition-all"
                      >
                        <AlertTriangle className="w-4 h-4" />
                        <span>EMERGENCY BREAKDOWN SOS</span>
                      </button>

                      <div className="text-center">
                        <span className="text-[10px] text-slate-400">
                          Tap to auto-dispatch nearest certified mechanic
                        </span>
                      </div>

                      {/* Nearby Mechanics Preview */}
                      <div className="pt-2 border-t border-white/5 space-y-1.5">
                        <span className="text-[10px] font-semibold text-slate-300 uppercase tracking-wider block">
                          3 Mechanics Nearby (within 3km)
                        </span>
                        <div
                          onClick={() => setActiveScreen(2)}
                          className="flex items-center justify-between p-2 rounded-xl bg-slate-900/60 border border-white/5 cursor-pointer hover:border-primary-500/40"
                        >
                          <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded-lg bg-primary-600/20 text-primary-400 flex items-center justify-center">
                              <Wrench className="w-3.5 h-3.5" />
                            </div>
                            <div>
                              <span className="text-xs font-medium block">Ramesh FastFix</span>
                              <span className="text-[10px] text-slate-400">1.2 km away • 4.9 ★</span>
                            </div>
                          </div>
                          <span className="text-[11px] text-secondary-400 font-semibold">
                            Select
                          </span>
                        </div>
                      </div>

                    </div>
                  </div>
                )}

                {/* ================= SCREEN 2: DIAGNOSIS & COST ESTIMATE ================= */}
                {activeScreen === 2 && (
                  <div className="flex-1 flex flex-col justify-between p-4 relative animate-fadeIn bg-[#111827]">
                    
                    {/* Header */}
                    <div className="space-y-1 pt-1">
                      <div className="flex items-center justify-between">
                        <button
                          onClick={() => setActiveScreen(1)}
                          className="text-xs text-slate-400 hover:text-white"
                        >
                          ← Back
                        </button>
                        <span className="text-xs font-bold text-primary-400">Step 2 of 3</span>
                      </div>
                      <h4 className="font-heading font-bold text-base text-white">
                        What seems to be the issue?
                      </h4>
                      <p className="text-[11px] text-slate-400">
                        Transparent pricing calculated before you confirm.
                      </p>
                    </div>

                    {/* Symptoms selection list */}
                    <div className="space-y-2 my-auto">
                      {issues.map((item) => {
                        const Icon = item.icon;
                        const isSelected = selectedIssue === item.id;
                        return (
                          <div
                            key={item.id}
                            onClick={() => setSelectedIssue(item.id)}
                            className={`p-3 rounded-2xl border cursor-pointer transition-all ${
                              isSelected
                                ? 'bg-primary-950/60 border-primary-500 shadow-md shadow-primary-900/40'
                                : 'bg-slate-900/50 border-white/5 hover:border-white/20'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2.5">
                                <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                                  isSelected ? 'bg-primary-500 text-white' : 'bg-slate-800 text-slate-400'
                                }`}>
                                  <Icon className="w-4 h-4" />
                                </div>
                                <div>
                                  <span className="text-xs font-semibold block text-white">{item.label}</span>
                                  <span className="text-[10px] text-slate-400">Est. Arrival: {item.time}</span>
                                </div>
                              </div>
                              <div className="text-right">
                                <span className="text-xs font-bold text-emerald-400 block">{item.price}</span>
                                <span className="text-[9px] text-slate-400">Parts + Labor</span>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Cost Breakdown & Confirmation */}
                    <div className="space-y-3 bg-[#182338] p-3.5 rounded-2xl border border-white/10">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-400">Estimated Total:</span>
                        <span className="font-bold text-emerald-400 text-sm">{currentIssueObj.price}</span>
                      </div>
                      <p className="text-[10px] text-slate-400 flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-secondary-400" />
                        Guaranteed transparent pricing with zero surprise charges.
                      </p>
                      <button
                        onClick={() => setActiveScreen(3)}
                        className="w-full py-3 rounded-xl bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-500 hover:to-secondary-500 font-bold text-xs text-white flex items-center justify-center gap-2 shadow-lg shadow-primary-600/30"
                      >
                        <span>Dispatch Verified Mechanic</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>

                  </div>
                )}

                {/* ================= SCREEN 3: LIVE TRACKING & DISPATCH ================= */}
                {activeScreen === 3 && (
                  <div className="flex-1 flex flex-col justify-between p-4 relative animate-fadeIn bg-[#111827]">
                    
                    {/* Live Dispatch Status */}
                    <div className="space-y-2 pt-1">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                          </span>
                          <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wide">
                            Mechanic Dispatched
                          </span>
                        </div>
                        <span className="text-xs font-bold text-white bg-slate-800 px-2 py-0.5 rounded-full">
                          ETA: 7 Mins
                        </span>
                      </div>
                      <h4 className="font-heading font-bold text-base text-white">
                        Help is on the way!
                      </h4>
                    </div>

                    {/* Animated Map Route Preview */}
                    <div className="h-36 rounded-2xl bg-[#162136] border border-white/10 relative overflow-hidden flex items-center justify-center">
                      <svg className="w-full h-full opacity-40 absolute" viewBox="0 0 100 60">
                        <path d="M 10,50 Q 50,10 90,30" stroke="#EC4899" strokeWidth="2.5" fill="none" strokeDasharray="3 3" />
                        <circle cx="10" cy="50" r="4" fill="#38BDF8" />
                        <circle cx="90" cy="30" r="4" fill="#10B981" />
                      </svg>
                      <div className="relative z-10 text-center space-y-1">
                        <div className="w-9 h-9 rounded-full bg-primary-600 flex items-center justify-center mx-auto shadow-lg animate-bounce">
                          <Navigation className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-[11px] font-bold text-slate-200 block">
                          Distance: 1.1 km
                        </span>
                      </div>
                    </div>

                    {/* Mechanic Profile Details */}
                    <div className="bg-[#182338] p-3.5 rounded-2xl border border-white/10 space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className="w-10 h-10 rounded-xl bg-purple-900 border border-purple-500 flex items-center justify-center font-bold text-xs text-white">
                            RK
                          </div>
                          <div>
                            <div className="flex items-center gap-1">
                              <span className="text-xs font-bold text-white">Ramesh Kumar</span>
                              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                            </div>
                            <span className="text-[10px] text-slate-400">Bajaj & Hero Specialist • 4.9 ★</span>
                          </div>
                        </div>
                        <a
                          href="tel:+919003973056"
                          className="w-8 h-8 rounded-full bg-emerald-600 hover:bg-emerald-500 flex items-center justify-center text-white"
                          title="Call Mechanic"
                        >
                          <Phone className="w-3.5 h-3.5" />
                        </a>
                      </div>

                      <div className="text-[10px] text-slate-300 bg-slate-900/60 p-2 rounded-xl flex justify-between">
                        <span>Selected Service:</span>
                        <span className="font-semibold text-white">{currentIssueObj.label}</span>
                      </div>

                      <button
                        onClick={() => setActiveScreen(1)}
                        className="w-full py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 text-[11px] font-medium flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <RefreshCw className="w-3 h-3 text-secondary-400" />
                        <span>Reset Prototype Demo</span>
                      </button>
                    </div>

                  </div>
                )}

                {/* Home Indicator Bar */}
                <div className="pb-2 pt-1 flex justify-center">
                  <div className="w-24 h-1 bg-slate-600 rounded-full"></div>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
