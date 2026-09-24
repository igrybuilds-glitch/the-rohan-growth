import React, { useState } from 'react';
import { ShieldCheck, Activity, Globe, Compass, ArrowDownRight } from 'lucide-react';

export const WebsiteCenterScene: React.FC = () => {
  const [activeChannel, setActiveChannel] = useState<string | null>('Google Maps');

  const feederChannels = [
    { name: 'Google Search', icon: 'G', detail: 'High-intent localized searches in Sardarpura, Pal Road & Ratanada' },
    { name: 'Google Maps', icon: 'M', detail: 'Local pack authority, reviews, category optimization & directions' },
    { name: 'Instagram', icon: 'IG', detail: 'Before/after project reels & showroom showcase carousels' },
    { name: 'WhatsApp', icon: 'WA', detail: 'Frictionless chat gateway with <30-second automated response' },
    { name: 'Project Pages', icon: 'PP', detail: 'Deep case studies on completed 3,000 sq ft Sardarpura showroom' },
    { name: 'Review Engine', icon: '★', detail: 'Systematic client feedback requests sent right at handover' },
    { name: 'CRM Pipeline', icon: 'CRM', detail: 'Structured tracking of client budget, timeline & floorplans' },
    { name: 'Follow-Up', icon: 'F/U', detail: 'Automated 1h, 24h, 3d, 7d, and 30-day gentle nurture touches' },
    { name: 'Retargeting', icon: 'RT', detail: 'Warm privacy-safe reminders for visitors who left after viewing projects' },
    { name: 'AI Search (GEO)', icon: 'AI', detail: 'Structured data so AI assistants recommend Rohan Interiors' },
  ];

  return (
    <section id="destination" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#28151F]/8">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="text-xs font-mono tracking-widest text-[#A95C70] uppercase">
          02. Strategic Positioning
        </span>
        <h2 className="text-2xl sm:text-4xl font-serif text-[#28151F] mt-2 tracking-tight [text-wrap:balance]">
          The website is the destination. We're improving everything that leads people to it.
        </h2>
        <p className="mt-3 text-xs sm:text-sm text-[#28151F]/70 leading-relaxed [text-wrap:balance]">
          The Rohan Interiors already has an elegant web aesthetic and compelling design portfolio. Rebuilding a functioning website is a distraction. The real exponential leverage comes from orchestrating the 10 inbound digital channels feeding into it.
        </p>
      </div>

      {/* Central Visual Architecture Diagram */}
      <div className="relative p-6 sm:p-10 bg-white/80 backdrop-blur-md border border-[#28151F]/10 rounded-2xl shadow-sm">
        {/* Background Radial Glow */}
        <div className="absolute inset-0 bg-radial from-[#FFE3D4]/40 to-transparent pointer-events-none" />

        {/* Feeder Orbit Cards Surrounding the Website */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
          {feederChannels.map((channel) => {
            const isSelected = activeChannel === channel.name;
            return (
              <button
                key={channel.name}
                onClick={() => setActiveChannel(channel.name)}
                className={`p-3 rounded-lg border text-left transition-all relative overflow-hidden group ${
                  isSelected
                    ? 'bg-[#28151F] text-white border-[#28151F] shadow-md scale-102'
                    : 'bg-[#FFF8F3] hover:bg-[#FFE3D4]/50 border-[#28151F]/10 text-[#28151F]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                    isSelected ? 'bg-[#FF7048] text-white' : 'bg-[#FFE3D4] text-[#28151F]'
                  }`}>
                    {channel.icon}
                  </span>
                  <Activity className={`w-3 h-3 ${isSelected ? 'text-[#FF7048]' : 'text-[#28151F]/30'}`} />
                </div>
                <div className="text-xs font-semibold mt-2 truncate">{channel.name}</div>
                <div className={`text-[10px] truncate mt-0.5 ${isSelected ? 'text-white/70' : 'text-[#28151F]/60'}`}>
                  Data Stream Inbound
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Channel Explainer Ribbon */}
        {activeChannel && (
          <div className="mb-8 p-3 sm:p-4 bg-[#FFE3D4]/60 border border-[#FF7048]/25 rounded-lg flex items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[#FF7048] font-bold">CURRENT STREAM:</span>
              <span className="font-semibold text-[#28151F]">{activeChannel}</span>
              <span className="text-[#28151F]/50 hidden sm:inline">—</span>
              <span className="text-[#28151F]/80 hidden sm:inline">
                {feederChannels.find(f => f.name === activeChannel)?.detail}
              </span>
            </div>
            <span className="text-[11px] font-mono text-[#A95C70] whitespace-nowrap">
              STREAMS CONNECTED →
            </span>
          </div>
        )}

        {/* Realistic Mockup of The Existing The Rohan Interiors Website */}
        <div className="relative max-w-4xl mx-auto bg-white border border-[#28151F]/20 rounded-xl shadow-xl overflow-hidden">
          {/* Browser Chrome Header */}
          <div className="bg-[#28151F] px-4 py-2.5 flex items-center justify-between text-white/80">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#FF5C63]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#FF7048]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#16A34A]" />
              <span className="ml-3 text-[11px] font-mono text-white/60">
                https://therohaninteriors.com
              </span>
            </div>

            {/* Crucial Label Requirement */}
            <div className="flex items-center gap-1.5 px-2.5 py-0.5 bg-[#FF7048] text-white text-[10px] font-mono font-bold tracking-wider rounded uppercase">
              <ShieldCheck className="w-3 h-3" />
              <span>EXISTING WEBSITE · KEEP IT.</span>
            </div>
          </div>

          {/* Website Content Mockup */}
          <div className="p-6 sm:p-8 bg-[#FFF8F3]">
            {/* Mock Nav */}
            <div className="flex items-center justify-between pb-4 border-b border-[#28151F]/10">
              <span className="font-serif text-lg text-[#28151F] font-semibold tracking-wide">
                THE ROHAN INTERIORS
              </span>
              <div className="hidden sm:flex items-center gap-5 text-xs text-[#28151F]/70 font-medium">
                <span>Residential</span>
                <span>Commercial</span>
                <span>Space Planning</span>
                <span>Turnkey Solutions</span>
                <span>Portfolio</span>
              </div>
              <span className="text-xs px-3 py-1 bg-[#28151F] text-white rounded">
                Contact Studio
              </span>
            </div>

            {/* Mock Hero Showcase */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-7 space-y-3">
                <span className="text-[10px] font-mono text-[#A95C70] tracking-widest uppercase">
                  Bespoke Spaces · Jodhpur, Rajasthan
                </span>
                <h3 className="text-xl sm:text-2xl font-serif text-[#28151F] leading-tight">
                  Crafting Timeless Living Environments & Commercial Experiences
                </h3>
                <p className="text-xs text-[#28151F]/70 leading-relaxed">
                  Design-to-execution excellence, custom furniture styling, and architectural precision tailored to contemporary Rajasthani lifestyle.
                </p>
                <div className="pt-2 flex items-center gap-3">
                  <div className="px-3 py-1.5 bg-[#FF7048] text-white text-xs font-medium rounded">
                    Explore Portfolio
                  </div>
                  <span className="text-xs font-mono text-[#28151F]/60">
                    Sardarpura Showroom Featured
                  </span>
                </div>
              </div>

              {/* Mock Project Photo Vignette */}
              <div className="md:col-span-5 bg-[#FFE3D4]/50 border border-[#28151F]/10 rounded-lg p-3 text-center">
                <div className="aspect-[4/3] bg-gradient-to-br from-[#FFE3D4] via-white to-[#FFF8F3] rounded border border-[#28151F]/10 flex flex-col items-center justify-center p-4">
                  <Compass className="w-8 h-8 text-[#FF7048] stroke-[1.5] mb-2" />
                  <span className="text-xs font-serif text-[#28151F] font-semibold">
                    3,000 Sq Ft Flagship Showroom
                  </span>
                  <span className="text-[10px] font-mono text-[#A95C70] mt-1">
                    Sardarpura, Jodhpur
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Connected Channels Inbound Bar */}
          <div className="bg-[#FFE3D4]/40 px-6 py-3 border-t border-[#28151F]/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#28151F]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse" />
              <span className="font-mono text-[11px]">Surrounding Digital Infrastructure: Active</span>
            </div>
            <div className="text-[11px] font-mono text-[#A95C70] mt-1 sm:mt-0">
              10 Inbound Channels → 1 Unified Studio Asset
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
