import React, { useState } from 'react';
import { Search, MapPin, ArrowRight, MessageSquare, ExternalLink, Sparkles } from 'lucide-react';
import { JODHPUR_KEYWORDS } from '../../data/mockData.ts';
import { KeywordIntent } from '../../types.ts';

export const LocalSeoScene: React.FC = () => {
  const [selectedKeyword, setSelectedKeyword] = useState<KeywordIntent>(JODHPUR_KEYWORDS[0]);
  const [activeAreaFilter, setActiveAreaFilter] = useState<string>('ALL');

  const localities = ['ALL', 'SARDARPURA', 'PAL ROAD', 'RATANADA', 'PRATAP NAGAR', 'CHOPASNI', 'PAOTA'];

  const filteredKeywords = activeAreaFilter === 'ALL'
    ? JODHPUR_KEYWORDS
    : JODHPUR_KEYWORDS.filter(k => 
        k.query.toLowerCase().includes(activeAreaFilter.toLowerCase()) || 
        k.area.toLowerCase().includes(activeAreaFilter.toLowerCase())
      );

  return (
    <section id="seo-engine" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#28151F]/8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#A95C70] uppercase">
            <span>03. Local SEO Command Center</span>
            <span aria-hidden="true" className="text-[#28151F]/30">·</span>
            <span className="text-[#28151F]/70">Illustrative Search Visualisation</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif text-[#28151F] mt-2 tracking-tight max-w-2xl [text-wrap:balance]">
            Don't just have a beautiful website. Build pages around what people are actually searching for.
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-[#28151F]/70 max-w-md leading-relaxed [text-wrap:balance]">
          High-intent home owners and showroom builders in Jodhpur search with explicit local and functional intent. A single homepage cannot address all these diverse search intentions.
        </p>
      </div>

      {/* Locality Selector Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-3 mb-6">
        <span className="text-xs font-mono text-[#A95C70] mr-2 shrink-0 flex items-center gap-1">
          <MapPin className="w-3.5 h-3.5 text-[#FF7048]" />
          JODHPUR NODES:
        </span>
        {localities.map((area) => (
          <button
            key={area}
            onClick={() => setActiveAreaFilter(area)}
            className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider rounded-md transition-colors shrink-0 ${
              activeAreaFilter === area
                ? 'bg-[#28151F] text-[#FFF8F3] shadow-xs'
                : 'bg-white hover:bg-[#FFE3D4]/50 border border-[#28151F]/10 text-[#28151F]/70'
            }`}
          >
            {area}
          </button>
        ))}
      </div>

      {/* Main Command Center Grid: Queries List on Left, Interactive Simulation Flow on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Search Demand Map / Query List */}
        <div className="lg:col-span-5 bg-white/70 backdrop-blur-sm border border-[#28151F]/10 rounded-xl p-4 sm:p-5 shadow-sm space-y-2">
          <div className="flex items-center justify-between pb-3 border-b border-[#28151F]/10 text-xs font-mono text-[#28151F]/70">
            <span className="flex items-center gap-1.5 font-bold text-[#28151F]">
              <Search className="w-3.5 h-3.5 text-[#FF7048]" />
              HIGH-INTENT JODHPUR QUERIES
            </span>
            <span>{filteredKeywords.length} NODES</span>
          </div>

          <div className="space-y-1.5 max-h-[460px] overflow-y-auto pr-1">
            {filteredKeywords.map((kw) => {
              const isSelected = selectedKeyword.query === kw.query;
              return (
                <button
                  key={kw.query}
                  onClick={() => setSelectedKeyword(kw)}
                  className={`w-full text-left p-3 rounded-lg border transition-all flex items-center justify-between group ${
                    isSelected
                      ? 'bg-[#28151F] text-white border-[#28151F] shadow-sm'
                      : 'bg-[#FFF8F3] hover:bg-[#FFE3D4]/50 border-[#28151F]/10 text-[#28151F]'
                  }`}
                >
                  <div>
                    <div className="text-xs font-medium tracking-tight">
                      "{kw.query}"
                    </div>
                    <div className={`text-[10px] font-mono mt-0.5 ${isSelected ? 'text-[#FFE3D4]' : 'text-[#A95C70]'}`}>
                      {kw.area} · {kw.volumeLabel}
                    </div>
                  </div>
                  <ArrowRight className={`w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 ${
                    isSelected ? 'text-[#FF7048]' : 'text-[#28151F]/30'
                  }`} />
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: The 5-Step Intent-to-Lead Engine */}
        <div className="lg:col-span-7 bg-[#28151F] text-[#FFF8F3] rounded-xl p-6 sm:p-7 shadow-xl border border-[#28151F]/30 relative overflow-hidden">
          {/* Subtle architectural ambient line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF7048] via-[#FF5C63] to-[#F43F7F]" />

          {/* Simulated Google Search Box */}
          <div className="bg-white/10 border border-white/15 rounded-lg p-3 flex items-center gap-3">
            <Search className="w-4 h-4 text-[#FF7048]" />
            <div className="flex-1 font-mono text-xs sm:text-sm text-white truncate">
              google.com/search?q={encodeURIComponent(selectedKeyword.query)}
            </div>
            <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest hidden sm:inline">
              LIVE SEARCH INTENT
            </span>
          </div>

          {/* Interactive Conversion Architecture Chain */}
          <div className="mt-6 space-y-4">
            {/* Step 1: Search Intent */}
            <div className="p-3.5 bg-white/5 border border-white/10 rounded-lg">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#FF7048] block mb-1">
                STEP 01 · DETECTED CLIENT INTENT
              </span>
              <p className="text-xs sm:text-sm text-[#FFE3D4] font-medium">
                {selectedKeyword.intent}
              </p>
            </div>

            {/* Step 2: Target Page */}
            <div className="p-3.5 bg-white/5 border border-white/10 rounded-lg">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#FF7048] block mb-1">
                STEP 02 · INTENT-DEDICATED LANDING URL
              </span>
              <div className="flex items-center justify-between text-xs sm:text-sm text-white font-mono">
                <span className="text-[#FF7048]">{selectedKeyword.targetPage}</span>
                <ExternalLink className="w-3.5 h-3.5 text-white/50" />
              </div>
            </div>

            {/* Step 3: Real Project Evidence */}
            <div className="p-3.5 bg-white/5 border border-white/10 rounded-lg">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#FF7048] block mb-1">
                STEP 03 · ADJACENT PROJECT PROOF
              </span>
              <p className="text-xs sm:text-sm text-white font-serif">
                {selectedKeyword.projectExample}
              </p>
              <span className="text-[10px] font-mono text-white/50 mt-1 block">
                Evidence: Real photos, floorplan diagrams, and client handover notes.
              </span>
            </div>

            {/* Step 4: WhatsApp CTA */}
            <div className="p-3.5 bg-[#FF7048]/15 border border-[#FF7048]/30 rounded-lg flex items-center justify-between gap-3">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#FF7048] block mb-0.5">
                  STEP 04 · HIGH-CONVERSION CTA
                </span>
                <span className="text-xs sm:text-sm font-semibold text-white">
                  {selectedKeyword.ctaAction}
                </span>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center shrink-0 shadow-sm">
                <MessageSquare className="w-4 h-4 text-white" />
              </div>
            </div>

            {/* Step 5: Qualified Lead Result */}
            <div className="pt-2 flex items-center justify-between text-xs font-mono text-white/70 border-t border-white/10">
              <span className="flex items-center gap-1.5 text-[#16A34A]">
                <Sparkles className="w-3.5 h-3.5 text-[#16A34A]" />
                END STATE: High-Ticket Lead Directed Into Studio CRM
              </span>
              <span className="text-white/40">Zero Leakage</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
