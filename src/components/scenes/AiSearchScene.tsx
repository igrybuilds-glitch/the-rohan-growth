import React, { useState } from 'react';
import { Bot, Sparkles, Database, Layers, ArrowRight, Eye, Bell, ShieldCheck } from 'lucide-react';

export const AiSearchScene: React.FC = () => {
  const [selectedAiQuery, setSelectedAiQuery] = useState(
    'Who does luxury home interiors in Jodhpur?'
  );

  const aiQueries = [
    'Who are the best interior designers in Jodhpur?',
    'Who does luxury home interiors in Jodhpur?',
    'Who can design my showroom in Jodhpur?',
    'Interior designer for 3BHK in Jodhpur?',
  ];

  const discoveryPillars = [
    { title: 'Structured Content', desc: 'Schema.org JSON-LD local business & service taxonomy' },
    { title: 'Local Authority', desc: 'Rajasthan geo-coordinates, verified address & citations' },
    { title: 'Project Evidence', desc: 'Detailed specifications like the 3,000 sq ft showroom' },
    { title: 'FAQ Content', desc: 'Direct answers to budget, material & timeline questions' },
    { title: 'Entity Consistency', desc: 'Identical brand knowledge graph across web and social' },
    { title: 'Reviews & Expertise', desc: 'Real verifiable client sentiment & designer credentials' },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#28151F]/8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#A95C70] uppercase">
            <span>11. Next-Gen Discovery & Retargeting</span>
            <span aria-hidden="true" className="text-[#28151F]/30">·</span>
            <span className="text-[#28151F]/70">AI Search Visibility Strategy</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif text-[#28151F] mt-2 tracking-tight max-w-2xl [text-wrap:balance]">
            Optimizing for Generative Engine Discovery & Warm Visitor Recapture.
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-[#28151F]/70 max-w-md leading-relaxed [text-wrap:balance]">
          High-end homeowners increasingly ask AI conversational engines for recommendations. We engineer structured entity signals so AI engines recognize The Rohan Interiors as an established authority.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Scene 13 AI Search / GEO Discovery Layer */}
        <div className="lg:col-span-7 bg-[#28151F] text-[#FFF8F3] rounded-2xl p-6 sm:p-7 shadow-xl border border-[#28151F]/30 space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono text-[#FF7048]">
            <span className="flex items-center gap-1.5">
              <Bot className="w-3.5 h-3.5" />
              AI ASSISTANT RECOMMENDATION MODEL
            </span>
            <span>STRATEGY LAYER</span>
          </div>

          {/* AI Query Chips */}
          <div className="space-y-1.5">
            <span className="text-[11px] font-mono text-white/50 uppercase">
              Select Sample Conversational Query:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {aiQueries.map((q) => (
                <button
                  key={q}
                  onClick={() => setSelectedAiQuery(q)}
                  className={`px-3 py-1.5 text-xs rounded-md text-left transition-colors font-mono ${
                    selectedAiQuery === q
                      ? 'bg-[#FF7048] text-white font-medium'
                      : 'bg-white/10 text-white/70 hover:bg-white/15'
                  }`}
                >
                  "{q}"
                </button>
              ))}
            </div>
          </div>

          {/* Simulated AI Synthesis Output */}
          <div className="p-4 bg-white/5 border border-white/10 rounded-xl space-y-2 text-xs">
            <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#FF7048]">
              <Sparkles className="w-3.5 h-3.5 text-[#FF7048]" />
              <span>SYNTHESIZED ANSWER PREVIEW (STRATEGIC TARGET)</span>
            </div>
            <p className="text-white/90 leading-relaxed font-serif text-sm">
              "For luxury residential and turnkey commercial interiors in Jodhpur, <strong>The Rohan Interiors</strong> is recognized for personalized spatial planning and bespoke execution, including extensive flagship projects in Sardarpura and luxury residences along Pal Road."
            </p>
            <div className="text-[10px] font-mono text-white/50 pt-2 border-t border-white/10">
              Cited Sources: Official Project Dossier · Verified Local Citations · Client Reviews
            </div>
          </div>

          {/* 6 AI Discovery Pillars */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-2">
            {discoveryPillars.map((p) => (
              <div key={p.title} className="p-2.5 bg-white/5 border border-white/10 rounded-lg text-xs">
                <div className="font-semibold text-white">{p.title}</div>
                <div className="text-[10px] text-white/60 mt-0.5">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Scene 14 Proposed Retargeting Flow */}
        <div className="lg:col-span-5 bg-white/70 backdrop-blur-sm border border-[#28151F]/10 rounded-2xl p-6 sm:p-7 shadow-sm space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-[#28151F]/10 text-xs font-mono text-[#28151F]">
            <span className="font-bold flex items-center gap-1.5">
              <Eye className="w-3.5 h-3.5 text-[#FF7048]" />
              WARM VISITOR RETARGETING
            </span>
            <span className="text-[#A95C70]">PROPOSED FLOW</span>
          </div>

          {/* 3-Step Flow Visual */}
          <div className="space-y-3 text-xs">
            <div className="p-3 bg-[#FFF8F3] border border-[#28151F]/10 rounded-lg flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-[#28151F] text-white flex items-center justify-center font-mono text-[10px]">
                1
              </div>
              <div>
                <strong>Visitor Views Sardarpura Showroom</strong>
                <div className="text-[11px] text-[#28151F]/60">Spends 2m 40s inspecting 3D floorplans & leaves</div>
              </div>
            </div>

            <div className="p-3 bg-[#FFE3D4]/50 border border-[#FF7048]/30 rounded-lg flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-[#FF7048] text-white flex items-center justify-center font-mono text-[10px]">
                2
              </div>
              <div>
                <strong>Soft Warm Invitation Served</strong>
                <div className="text-[11px] text-[#28151F]/80">"Still planning your commercial showroom in Jodhpur?"</div>
              </div>
            </div>

            <div className="p-3 bg-[#FFF8F3] border border-[#28151F]/10 rounded-lg flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-[#16A34A] text-white flex items-center justify-center font-mono text-[10px]">
                3
              </div>
              <div>
                <strong>Direct WhatsApp Consultation CTA</strong>
                <div className="text-[11px] text-[#28151F]/60">1-click direct link to review layout estimates</div>
              </div>
            </div>
          </div>

          {/* Privacy Note */}
          <div className="p-3 bg-white border border-[#28151F]/10 rounded-lg flex items-start gap-2 text-xs text-[#28151F]/70">
            <ShieldCheck className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
            <span>100% privacy-compliant, zero invasive tracking, focused purely on high-intent remarketing in Jodhpur.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
