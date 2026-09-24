import React, { useState } from 'react';
import { Layers, FileText, Share2, Instagram, MessageCircle, MapPin, Sparkles, Check, ArrowRight } from 'lucide-react';

export const AuthorityEngineScene: React.FC = () => {
  const [activeAssetIndex, setActiveAssetIndex] = useState(0);

  const assets = [
    {
      title: 'SEO Project Case Study Page',
      channel: 'Dedicated Website Pillar',
      format: 'Longform Architectural Case Study',
      description: 'A dedicated 1,500-word indexable URL detailing spatial zoning, retail traffic flow, and material palettes for 3,000 sq ft showrooms in Sardarpura.',
      distribution: 'therohaninteriors.com/projects/sardarpura-showroom-jodhpur',
      icon: FileText
    },
    {
      title: 'Google Business Profile Showcase',
      channel: 'Google Maps & Local Knowledge Graph',
      format: 'Geotagged Photo + Project Description',
      description: 'High-resolution photography with EXIF geotags in Sardarpura, boosting map pack ranking when local business owners search for retail interior designers.',
      distribution: 'Google Maps Business Listing · Weekly Update',
      icon: MapPin
    },
    {
      title: 'Instagram Carousel & Design Breakdown',
      channel: 'Social Authority',
      format: '10-Slide Architectural Process Carousel',
      description: 'Slide 1: The Raw Shell; Slides 2-6: Lighting tracks, Italian marble reception, display fixtures; Slide 10: Client handover celebration.',
      distribution: '@therohaninteriors · Instagram & Threads',
      icon: Instagram
    },
    {
      title: 'Short Video / Reel Concept',
      channel: 'Reels & Video Discovery',
      format: '45-Second Architectural Walkthrough',
      description: 'Cinematic camera pan across textured walls and custom fluted panelling, highlighting how design elevates retail customer dwell time.',
      distribution: 'Instagram Reels + YouTube Shorts',
      icon: Share2
    },
    {
      title: 'Educational Interior Guide',
      channel: 'Blog & Editorial Authority',
      format: 'Expert Article',
      description: '"How We Engineered Traffic Flow for a 3,000 Sq Ft Jodhpur Showroom" — educating prospective business owners on commercial interior planning.',
      distribution: 'Studio Journal & Medium',
      icon: Layers
    },
    {
      title: 'Structured FAQ & AEO Schema Layer',
      channel: 'AI Search (Perplexity / Gemini / ChatGPT)',
      format: 'JSON-LD Schema Markup',
      description: 'Structured entity data confirming The Rohan Interiors as the verified designer of commercial showrooms in Sardarpura, Jodhpur.',
      distribution: 'Search Engine Entity Graph',
      icon: Sparkles
    },
    {
      title: 'Direct WhatsApp Lookbook PDF Node',
      channel: 'Direct Sales Enablement',
      format: '2-Page Curated Project Brief',
      description: 'When a new commercial client reaches out on WhatsApp, this project card dispatches automatically as proof of craftsmanship.',
      distribution: 'Automated WhatsApp Inbound Attachment',
      icon: MessageCircle
    },
    {
      title: 'Before / After Handover Story',
      channel: 'Client Trust & Testimonial',
      format: 'Transformation Story Node',
      description: 'Side-by-side architectural plans and finished execution, demonstrating zero variance between 3D design and final on-site delivery.',
      distribution: 'Client Presentation Deck & Social Proof Layer',
      icon: Check
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#28151F]/8">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="text-xs font-mono tracking-widest text-[#A95C70] uppercase">
          04. Asset Multiplier Architecture
        </span>
        <h2 className="text-2xl sm:text-4xl font-serif text-[#28151F] mt-2 tracking-tight [text-wrap:balance]">
          One real project can become an entire digital asset.
        </h2>
        <p className="mt-3 text-xs sm:text-sm text-[#28151F]/70 leading-relaxed [text-wrap:balance]">
          Your best marketing material already exists inside your projects. By systematizing project documentation from real work—like the <strong>3,000 sq ft Sardarpura showroom</strong>—we multiply one completion into eight continuous client acquisition assets.
        </p>
      </div>

      {/* The Transformation Engine Canvas */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/80 backdrop-blur-md border border-[#28151F]/10 rounded-2xl p-6 sm:p-8 shadow-sm">
        {/* Left Column: The Single Real Project Origin */}
        <div className="lg:col-span-5 bg-[#FFE3D4]/50 border border-[#28151F]/10 rounded-xl p-5 sm:p-6 space-y-4">
          <div className="flex items-center justify-between text-xs font-mono text-[#A95C70]">
            <span>RAW SOURCE ASSET</span>
            <span className="text-[#FF7048] font-bold">1 REAL PROJECT</span>
          </div>

          <div className="bg-white border border-[#28151F]/10 rounded-lg p-5 shadow-xs space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#A95C70] block">
              REAL PROJECT CONTEXT · JODHPUR
            </span>
            <h3 className="text-lg font-serif text-[#28151F] font-semibold">
              3,000 Sq Ft Commercial Showroom
            </h3>
            <div className="text-xs text-[#28151F]/70 space-y-1">
              <div><strong>Location:</strong> Sardarpura, Jodhpur</div>
              <div><strong>Scope:</strong> Space planning, custom display millwork, lighting architecture</div>
              <div><strong>Source:</strong> Existing Rohan social & project documentation</div>
            </div>

            <div className="pt-3 border-t border-[#28151F]/8 flex items-center justify-between text-[11px] font-mono text-[#FF7048]">
              <span>Transformation Multiplier</span>
              <span className="font-bold">1 → 8 Digital Assets</span>
            </div>
          </div>

          <div className="text-xs text-[#28151F]/70 leading-relaxed">
            Instead of simply posting one photo and moving on, the digital engine translates the engineering and architectural wisdom of this project across eight separate search and trust touchpoints.
          </div>
        </div>

        {/* Center Connection Arrow for Desktop */}
        <div className="hidden lg:flex lg:col-span-1 justify-center">
          <div className="w-10 h-10 rounded-full bg-[#28151F] text-white flex items-center justify-center shadow-md">
            <ArrowRight className="w-4 h-4 text-[#FF7048]" />
          </div>
        </div>

        {/* Right Column: Interactive 8-Asset Synthesizer */}
        <div className="lg:col-span-6 space-y-3">
          <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-[#28151F]/10">
            <span className="font-bold text-[#28151F]">SYNTHESIZED ASSET SUITE</span>
            <span className="text-[#A95C70]">SELECT TO INSPECT DETAILS</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {assets.map((asset, idx) => {
              const Icon = asset.icon;
              const isSelected = activeAssetIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveAssetIndex(idx)}
                  className={`p-3 rounded-lg border text-left transition-all flex items-start gap-2.5 ${
                    isSelected
                      ? 'bg-[#28151F] text-white border-[#28151F] shadow-sm'
                      : 'bg-[#FFF8F3] hover:bg-[#FFE3D4]/50 border-[#28151F]/10 text-[#28151F]'
                  }`}
                >
                  <Icon className={`w-4 h-4 shrink-0 mt-0.5 ${isSelected ? 'text-[#FF7048]' : 'text-[#A95C70]'}`} />
                  <div className="min-w-0">
                    <div className="text-xs font-semibold truncate">{asset.title}</div>
                    <div className={`text-[10px] font-mono truncate ${isSelected ? 'text-white/70' : 'text-[#28151F]/60'}`}>
                      {asset.channel}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Asset Deep Dive Box */}
          <div className="mt-4 p-4 bg-[#28151F] text-[#FFF8F3] rounded-lg border border-[#28151F]/30">
            <div className="flex items-center justify-between text-xs font-mono text-[#FF7048] mb-1">
              <span>ACTIVE ASSET SPECIFICATION</span>
              <span>FORMAT: {assets[activeAssetIndex].format}</span>
            </div>
            <h4 className="text-sm font-serif text-[#FFE3D4] font-medium">
              {assets[activeAssetIndex].title}
            </h4>
            <p className="text-xs text-white/80 mt-1.5 leading-relaxed">
              {assets[activeAssetIndex].description}
            </p>
            <div className="mt-3 pt-2 border-t border-white/10 text-[10px] font-mono text-white/60 truncate">
              DEPLOYMENT: {assets[activeAssetIndex].distribution}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
