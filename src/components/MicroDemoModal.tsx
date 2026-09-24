import React, { useState, useEffect } from 'react';
import { X, Play, Pause, RotateCcw, CheckCircle, ArrowRight } from 'lucide-react';
import { SystemItem } from '../types.ts';

interface MicroDemoModalProps {
  system: SystemItem | null;
  onClose: () => void;
}

export const MicroDemoModal: React.FC<MicroDemoModalProps> = ({ system, onClose }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const stepsMap: Record<string, { label: string; detail: string; visual: string }[]> = {
    seo: [
      { label: 'Query Intent Detection', detail: 'User in Sardarpura searches "showroom interior designer Jodhpur"', visual: 'SEARCH QUERY: showroom interior designer Jodhpur [Intent: Commercial Fitout]' },
      { label: 'Dedicated Pillar Routing', detail: 'Redirects to /commercial/showrooms-and-studios instead of generic home', visual: 'TARGET PAGE: The Rohan Interiors Commercial Showcase Node' },
      { label: 'Project Proof Injection', detail: '3,000 Sq Ft Sardarpura project details, photography & spatial plans', visual: 'PROOF: Sardarpura 3,000 Sq Ft Commercial Showroom Evidence' },
      { label: 'Instant Lead Conversion', detail: '1-click WhatsApp button prefills project inquiry with showroom context', visual: 'WHATSAPP CONVERSION: Lead Dispatched with Locality & Sq Ft Context' },
    ],
    funnel: [
      { label: 'Intent-Matched Landing', detail: 'Client lands on dedicated Residential Villa page with layout specs', visual: 'LANDING: 3BHK/4BHK Villa Interior Package with Material Transparency' },
      { label: 'Space Planning Filter', detail: 'Client selects "Pal Road", "Turnkey Shell-to-Styling", "₹35L+"', visual: 'QUALIFICATION: 3-step luxury preference questionnaire' },
      { label: 'Designer Lookbook Trigger', detail: 'System sends curated PDF lookbook before the call even begins', visual: 'AUTOMATED DISPATCH: Studio Lookbook delivered to client WhatsApp' },
      { label: 'Consultation Calendar Sync', detail: 'Client picks Thursday 4 PM for physical site inspection', visual: 'CONFIRMATION: Studio calendar booked + principal designer alerted' },
    ],
    presence: [
      { label: 'Entity Audit', detail: 'Standardising phone, address, and geo-coordinates across 8 channels', visual: 'AUDIT: Google Business, Maps, Instagram, Justdial, LinkedIn aligned' },
      { label: 'Geotagged Photo Dispatch', detail: 'Injecting high-res Jodhpur project images with EXIF location data', visual: 'PHOTOS: 42 Geotagged high-res images published to Google profile' },
      { label: 'Weekly Google Post Engine', detail: 'Educational posts highlighting Italian marble tips and layout wisdom', visual: 'POST: "How to choose stone countertops in Jodhpur" published' },
      { label: 'Uniform Brand Authority', detail: 'Eliminating duplicate or conflicting directory entries in Rajasthan', visual: 'STATUS: 100% NAP Consistency across local web directory networks' },
    ],
    whatsapp: [
      { label: 'Incoming Ping Received', detail: 'Client messages: "Looking for interiors for our bungalow"', visual: 'PING: New WhatsApp message received at 9:42 PM' },
      { label: '<30s Sub-Second Reply', detail: 'Automated greeting with project categorization options', visual: 'BOT: "Welcome to The Rohan Interiors. Are you building a Home or Commercial Space?"' },
      { label: 'Qualification Tree', detail: 'Client taps: [Home] -> [Pal Road] -> [2500 sq ft] -> [1-3 Months]', visual: 'EXTRACTED: Requirement tagged as High Priority Villa Inbound' },
      { label: 'CRM Pipeline Synced', detail: 'Record created automatically in Studio CRM with complete dossier', visual: 'SYNC: Lead Score 88/100 pushed to Studio Dashboard' },
    ],
    crm: [
      { label: 'Dossier Auto-Generation', detail: 'Lead cards populated with budget, floorplan stage & timeline', visual: 'DOSSIER: Vikram S. Rathore | 3BHK Pal Road | ₹35L-48L' },
      { label: 'Stage Progression', detail: 'Moves from "New Enquiry" -> "Qualified" -> "Site Survey Scheduled"', visual: 'KANBAN: Card moved to Column 3 with automatic task creation' },
      { label: 'Designer Assignment', detail: 'Senior interior architect assigned with direct WhatsApp thread link', visual: 'ASSIGNMENT: Lead architect notified on Telegram/WhatsApp' },
      { label: 'Milestone Tracking', detail: 'Tracks 2D floorplan -> 3D render presentation -> BOQ sign-off', visual: 'MILESTONE: Proposal presentation scheduled for Friday' },
    ],
    review: [
      { label: 'Handover Milestone Reached', detail: 'Physical site handover completed with happy client handshake', visual: 'MILESTONE: Project Flag: "Handover Complete & Inspected"' },
      { label: 'Delight Message Triggered', detail: 'Automated WhatsApp message congratulating client on new home', visual: 'GREETING: "Congratulations on moving into your dream home in Pal Road!"' },
      { label: '1-Tap Google Review Link', detail: 'Direct URL opens Google Maps review box with 5 stars pre-selected', visual: 'LINK: g.page/r/the-rohan-interiors/review' },
      { label: 'Social Proof Showcase', detail: '5-star review automatically ingested into website testimonial layer', visual: 'SYNDICATION: Review synced to Local SEO schema and home page' },
    ],
    content: [
      { label: 'Raw Project Capture', detail: 'Completed 3,000 sq ft Sardarpura showroom photographed & documented', visual: 'INPUT: 1 Real Project (Sardarpura Showroom, Jodhpur)' },
      { label: 'Asset Synthesis', detail: 'Extracted into case study, Instagram carousel, reel script, and blog', visual: 'GENERATION: 8 Digital Assets synthesized from one site' },
      { label: 'SEO Authority Page', detail: 'Deep commercial showroom case study ranking for local retail searches', visual: 'WEB ASSET: 1,800-word case study with floorplan drawings' },
      { label: 'Multi-Channel Syndicate', detail: 'Distributed to Google Business, Pinterest, and direct WhatsApp lookbook', visual: 'DISTRIBUTION: Multi-channel engagement without shooting new content' },
    ],
    missedcall: [
      { label: 'Missed Call Event', detail: 'Client calls studio phone while team is on active site inspection', visual: 'EVENT: Missed Call from +91 98290 XXXXX at 11:15 AM' },
      { label: 'Instant 45s WhatsApp Dispatch', detail: 'Automated polite message sent before caller tries another firm', visual: 'SMS/WA: "We noticed you tried reaching The Rohan Interiors..."' },
      { label: 'Self-Serve Scope Selection', detail: 'Caller taps [Commercial Showroom] and leaves brief requirement', visual: 'CLIENT REPLY: Selected "Commercial Showroom" near Sardarpura' },
      { label: 'Executive Team Alert', detail: 'Studio head receives instant notification with caller profile', visual: 'ALERT: "Call recovered! High-value commercial lead awaiting callback."' },
    ]
  };

  const steps = system ? (stepsMap[system.microDemoType] || stepsMap.seo) : [];

  useEffect(() => {
    if (!isPlaying || !steps.length) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2400);
    return () => clearInterval(timer);
  }, [isPlaying, steps.length]);

  if (!system) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#28151F]/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-2xl bg-[#FFF8F3] border border-[#28151F]/15 rounded-xl shadow-2xl overflow-hidden p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top hairline */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF7048] via-[#FF5C63] to-[#F43F7F]" />

        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-[#28151F]/10">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#FF7048]">SYSTEM 0{system.id}</span>
              <span className="text-[#A95C70]">·</span>
              <span className="text-xs text-[#28151F]/60 font-mono uppercase">Cinematic Micro-Demo</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif text-[#28151F] mt-1">{system.title}</h3>
            <p className="text-xs sm:text-sm text-[#A95C70] font-medium">{system.subtitle}</p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close micro-demo modal"
            className="p-1 text-[#28151F]/60 hover:text-[#28151F] rounded-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Live Simulation Screen */}
        <div className="mt-5 p-4 sm:p-5 bg-[#28151F] text-[#FFF8F3] rounded-lg shadow-inner border border-[#28151F]/30 relative overflow-hidden">
          {/* Subtle architectural grid in terminal */}
          <div className="absolute inset-0 bg-arch-grid opacity-10 pointer-events-none" />

          <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-2 relative z-10">
            <span className="text-[11px] font-mono text-[#FF7048] flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#FF7048] animate-ping" />
              SIMULATED WORKFLOW RUNTIME
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-1 text-white/70 hover:text-white transition-colors"
                title={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              </button>
              <button
                onClick={() => setActiveStep(0)}
                className="p-1 text-white/70 hover:text-white transition-colors"
                title="Restart"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Current step visual */}
          <div className="min-h-[110px] flex flex-col justify-center relative z-10">
            <div className="text-[11px] font-mono text-white/50 uppercase tracking-widest">
              Stage {activeStep + 1} of {steps.length} — {steps[activeStep]?.label}
            </div>
            <div className="text-sm sm:text-base font-serif text-[#FFE3D4] mt-1 font-medium">
              {steps[activeStep]?.detail}
            </div>
            <div className="mt-3 px-3 py-2 bg-white/5 rounded border border-white/10 text-xs font-mono text-[#FF7048] overflow-x-auto whitespace-nowrap">
              $ {steps[activeStep]?.visual}
            </div>
          </div>

          {/* Step Progress indicators */}
          <div className="grid grid-cols-4 gap-1.5 mt-4 pt-3 border-t border-white/10 relative z-10">
            {steps.map((st, i) => (
              <button
                key={i}
                onClick={() => {
                  setActiveStep(i);
                  setIsPlaying(false);
                }}
                className={`h-1.5 rounded-full transition-all ${
                  i === activeStep
                    ? 'bg-[#FF7048]'
                    : i < activeStep
                      ? 'bg-white/40'
                      : 'bg-white/10'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Strategic Takeaway */}
        <div className="mt-5 space-y-3">
          <div className="text-xs font-semibold text-[#28151F] uppercase tracking-wider">
            Operational Highlights for The Rohan Interiors
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {system.highlights.map((h, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-[#28151F]/80">
                <CheckCircle className="w-3.5 h-3.5 text-[#FF7048] shrink-0 mt-0.5" />
                <span>{h}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer info */}
        <div className="mt-6 pt-4 border-t border-[#28151F]/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-[#28151F]/60">
            Metric benchmark: <strong className="text-[#28151F]">{system.metricValue}</strong>
          </div>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2 bg-[#28151F] text-white text-xs font-medium rounded-md hover:bg-[#FF7048] transition-colors flex items-center justify-center gap-1.5"
          >
            <span>Explore System In Main Feed</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
