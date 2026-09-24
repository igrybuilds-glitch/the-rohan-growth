import React, { useState } from 'react';
import { MapPin, Star, Building2, CheckCircle2 } from 'lucide-react';
import { JODHPUR_BENCHMARKS } from '../../data/mockData.ts';

export const GoogleMapsScene: React.FC = () => {
  const [selectedFirm, setSelectedFirm] = useState(JODHPUR_BENCHMARKS[0]);

  const optimizationFlow = [
    { step: '01', title: 'Google Business Profile', desc: 'Verified local listing with exact physical address' },
    { step: '02', title: 'Category Structure', desc: 'Primary: Interior Designer · Secondary: Architecture & Space Planning' },
    { step: '03', title: 'Services Catalog', desc: 'Turnkey residential, commercial fit-outs, modular kitchens' },
    { step: '04', title: 'Project Photos', desc: 'Regular uploads of geotagged, high-res Jodhpur project imagery' },
    { step: '05', title: 'Location Signals', desc: 'Local schema and neighborhood coordinates in Jodhpur' },
    { step: '06', title: 'Review Footprint', desc: 'Systematic client reviews collected at project handover' },
    { step: '07', title: 'Google Posts', desc: 'Weekly design tips, behind-the-scenes progress, and trends' },
    { step: '08', title: 'Citations & NAP', desc: 'Uniform Name, Address, Phone across web directories' },
    { step: '09', title: 'Consistent Data', desc: 'Zero conflicting addresses or hours across all profiles' },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#28151F]/8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#A95C70] uppercase">
            <span>05. Local Presence Engine</span>
            <span aria-hidden="true" className="text-[#28151F]/30">·</span>
            <span className="text-[#28151F]/70">Current Local-Search Snapshot</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif text-[#28151F] mt-2 tracking-tight max-w-2xl [text-wrap:balance]">
            Turn local visibility into an ongoing system instead of a one-time setup.
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-[#28151F]/70 max-w-md leading-relaxed [text-wrap:balance]">
          Strong design studios compete on more than aesthetics. They compete for attention, credibility, and immediate response speed across Google Maps.
        </p>
      </div>

      {/* Grid: Interactive Jodhpur Map & Benchmark Footprints on Left, Optimization Architecture on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Jodhpur Local Search Snapshot */}
        <div className="lg:col-span-6 bg-white/80 backdrop-blur-md border border-[#28151F]/10 rounded-xl p-5 shadow-sm space-y-4">
          <div className="flex items-center justify-between text-xs font-mono pb-3 border-b border-[#28151F]/10">
            <span className="font-bold text-[#28151F] flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#FF7048]" />
              JODHPUR LOCAL MAP NODES
            </span>
            <span className="text-[#A95C70]">BENCHMARK FOOTPRINTS</span>
          </div>

          {/* Interactive Stylized Jodhpur Map Graphic */}
          <div className="relative w-full aspect-[16/10] bg-[#FFF8F3] border border-[#28151F]/10 rounded-lg overflow-hidden flex items-center justify-center p-4">
            {/* Architectural contours & Roads of Jodhpur */}
            <svg viewBox="0 0 500 320" className="w-full h-full text-[#28151F]/20">
              {/* Roads / Arteries: Pal Road, Chopasni, Mandore Road, Residency Road */}
              <path d="M 40 180 Q 250 160 460 140" stroke="currentColor" strokeWidth="2.5" fill="none" strokeDasharray="4 2" />
              <path d="M 220 30 Q 240 170 260 290" stroke="currentColor" strokeWidth="2.5" fill="none" strokeDasharray="4 2" />
              <path d="M 80 80 Q 240 170 420 250" stroke="currentColor" strokeWidth="1.5" fill="none" />
              <circle cx="250" cy="165" r="90" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" fill="none" />

              {/* Area Labels */}
              <text x="140" y="110" fontSize="10" fontFamily="JetBrains Mono" fill="#28151F" fillOpacity="0.4">SARDARPURA</text>
              <text x="100" y="220" fontSize="10" fontFamily="JetBrains Mono" fill="#28151F" fillOpacity="0.4">PAL ROAD</text>
              <text x="320" y="100" fontSize="10" fontFamily="JetBrains Mono" fill="#28151F" fillOpacity="0.4">RATANADA</text>
              <text x="340" y="220" fontSize="10" fontFamily="JetBrains Mono" fill="#28151F" fillOpacity="0.4">PAOTA</text>

              {/* Firm Nodes */}
              {/* Rohan Interiors Pin (Prominent) */}
              <g 
                onClick={() => setSelectedFirm(JODHPUR_BENCHMARKS[0])}
                className="cursor-pointer transition-transform hover:scale-110"
              >
                <circle cx="210" cy="145" r="14" fill="#FF7048" fillOpacity="0.2" className="animate-ping" />
                <circle cx="210" cy="145" r="7" fill="#FF7048" />
                <text x="210" y="132" textAnchor="middle" fontSize="11" fontWeight="bold" fontFamily="Plus Jakarta Sans" fill="#28151F">
                  THE ROHAN INTERIORS
                </text>
              </g>

              {/* Benchmark Nodes */}
              <g 
                onClick={() => setSelectedFirm(JODHPUR_BENCHMARKS[1])}
                className="cursor-pointer transition-transform hover:scale-105"
              >
                <circle cx="160" cy="130" r="5" fill="#28151F" fillOpacity="0.6" />
                <text x="160" y="122" textAnchor="middle" fontSize="9" fontFamily="Plus Jakarta Sans" fill="#28151F" fillOpacity="0.7">High Rise</text>
              </g>

              <g 
                onClick={() => setSelectedFirm(JODHPUR_BENCHMARKS[2])}
                className="cursor-pointer transition-transform hover:scale-105"
              >
                <circle cx="120" cy="205" r="5" fill="#28151F" fillOpacity="0.6" />
                <text x="120" y="198" textAnchor="middle" fontSize="9" fontFamily="Plus Jakarta Sans" fill="#28151F" fillOpacity="0.7">Notion</text>
              </g>

              <g 
                onClick={() => setSelectedFirm(JODHPUR_BENCHMARKS[3])}
                className="cursor-pointer transition-transform hover:scale-105"
              >
                <circle cx="300" cy="160" r="5" fill="#28151F" fillOpacity="0.6" />
                <text x="300" y="152" textAnchor="middle" fontSize="9" fontFamily="Plus Jakarta Sans" fill="#28151F" fillOpacity="0.7">Vinayak</text>
              </g>

              <g 
                onClick={() => setSelectedFirm(JODHPUR_BENCHMARKS[4])}
                className="cursor-pointer transition-transform hover:scale-105"
              >
                <circle cx="340" cy="120" r="5" fill="#28151F" fillOpacity="0.6" />
                <text x="340" y="112" textAnchor="middle" fontSize="9" fontFamily="Plus Jakarta Sans" fill="#28151F" fillOpacity="0.7">Architect's ERA</text>
              </g>
            </svg>
          </div>

          {/* Benchmark Footprint Snapshot Cards */}
          <div className="space-y-2">
            <span className="text-[11px] font-mono text-[#A95C70] uppercase">
              Select Firm to View Review Footprint
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {JODHPUR_BENCHMARKS.map((firm) => {
                const isSelected = selectedFirm.name === firm.name;
                return (
                  <button
                    key={firm.name}
                    onClick={() => setSelectedFirm(firm)}
                    className={`p-2.5 rounded-lg border text-left transition-all ${
                      isSelected
                        ? 'bg-[#28151F] text-white border-[#28151F] shadow-xs'
                        : 'bg-[#FFF8F3] hover:bg-[#FFE3D4]/50 border-[#28151F]/10 text-[#28151F]'
                    }`}
                  >
                    <div className="text-xs font-semibold truncate">{firm.name}</div>
                    <div className="flex items-center gap-2 mt-1 text-[11px] font-mono">
                      <span className="flex items-center gap-0.5 text-[#FF7048]">
                        <Star className="w-3 h-3 fill-[#FF7048]" />
                        <span>{firm.rating}</span>
                      </span>
                      <span className={isSelected ? 'text-white/60' : 'text-[#28151F]/50'}>
                        ({firm.reviewCount} reviews)
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Selected Firm Detail Callout */}
          <div className="p-3 bg-[#FFE3D4]/50 border border-[#28151F]/10 rounded-lg text-xs text-[#28151F]">
            <div className="font-semibold text-[#28151F]">{selectedFirm.name}</div>
            <div className="text-[11px] text-[#28151F]/70 mt-0.5">
              Locality: {selectedFirm.locality} · Profile Focus: {selectedFirm.highlight}
            </div>
          </div>
        </div>

        {/* Right Column: The 9-Stage Ongoing Local Visibility System */}
        <div className="lg:col-span-6 bg-[#28151F] text-[#FFF8F3] rounded-xl p-6 sm:p-7 shadow-xl border border-[#28151F]/30 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono text-[#FF7048]">
            <span>LOCAL VISIBILITY ARCHITECTURE</span>
            <span>ONGOING SYSTEM</span>
          </div>

          <div className="space-y-2.5">
            {optimizationFlow.map((opt) => (
              <div key={opt.step} className="p-2.5 bg-white/5 border border-white/10 rounded-lg flex items-start gap-3 text-xs">
                <span className="font-mono text-[#FF7048] font-bold shrink-0">{opt.step}</span>
                <div>
                  <div className="font-medium text-white">{opt.title}</div>
                  <div className="text-white/70 text-[11px] mt-0.5">{opt.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Strategic Insight */}
          <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-white/80">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
              <span>Full Local Search Engine Synchronization</span>
            </span>
            <span className="text-[10px] font-mono text-[#FF7048]">PROPOSED BLUEPRINT</span>
          </div>
        </div>
      </div>
    </section>
  );
};
