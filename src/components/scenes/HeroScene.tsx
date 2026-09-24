import React from 'react';
import { Compass, Sparkles, ChevronDown } from 'lucide-react';

interface HeroSceneProps {
  onStartDemo: () => void;
  onExploreOs: () => void;
}

export const HeroScene: React.FC<HeroSceneProps> = ({ onStartDemo, onExploreOs }) => {
  return (
    <section id="opening" className="relative min-h-[90vh] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-16 overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Editorial Subtitle / Trust Kicker without static pill enclosure */}
        <div className="flex items-center gap-2 text-xs font-mono text-[#A95C70] mb-6 tracking-wider">
          <Compass className="w-3.5 h-3.5 text-[#FF7048]" />
          <span>THE ROHAN INTERIORS · JODHPUR</span>
          <span aria-hidden="true" className="text-[#28151F]/30">·</span>
          <span className="text-[#28151F]/80">PREPARED BY IGRYBUILDS</span>
        </div>

        {/* Central Proposition */}
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-[#28151F] leading-[1.12] tracking-tight [text-wrap:balance]">
            An already strong brand doesn’t need another website.
          </h1>
          <p className="text-2xl sm:text-4xl lg:text-5xl font-serif text-[#FF7048] leading-[1.15] tracking-tight font-medium [text-wrap:balance]">
            It needs a stronger digital growth engine.
          </p>
        </div>

        <p className="mt-6 max-w-2xl text-sm sm:text-base text-[#28151F]/75 font-normal leading-relaxed [text-wrap:balance]">
          The Rohan Interiors already possesses exceptional craftsmanship and an established portfolio in Jodhpur. This interactive demonstration shows how we engineer the high-precision machinery around your existing digital presence.
        </p>

        {/* Interactive Architectural Floorplan → Digital Pipeline Graphic */}
        <div className="w-full mt-10 p-5 sm:p-7 bg-white/80 backdrop-blur-md border border-[#28151F]/10 rounded-2xl shadow-sm relative overflow-hidden">
          <div className="text-left flex items-center justify-between pb-3 mb-4 border-b border-[#28151F]/8 text-xs font-mono text-[#A95C70]">
            <span className="flex items-center gap-1.5 text-[#28151F]">
              <Sparkles className="w-3.5 h-3.5 text-[#FF7048]" />
              01. ARCHITECTURAL FLOW TO REVENUE PIPELINE
            </span>
            <span className="hidden sm:inline">SCALE: 1:50 · JODHPUR RESIDENTIAL & COMMERCIAL</span>
          </div>

          {/* SVG Floorplan with traveling luminous energy line */}
          <div className="relative w-full aspect-[21/9] min-h-[170px] max-h-[260px] bg-[#FFF8F3] border border-[#28151F]/10 rounded-xl p-3 sm:p-4 overflow-hidden flex items-center justify-center">
            <svg 
              viewBox="0 0 900 300" 
              className="w-full h-full text-[#28151F]" 
              fill="none" 
              stroke="currentColor"
            >
              {/* Floorplan architectural room outlines */}
              <rect x="50" y="40" width="220" height="220" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.25" strokeDasharray="3 3" />
              <rect x="270" y="40" width="340" height="130" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.25" />
              <rect x="270" y="170" width="340" height="90" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.25" />
              <rect x="610" y="40" width="240" height="220" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.25" strokeDasharray="3 3" />

              {/* Room labels */}
              <text x="160" y="155" textAnchor="middle" fill="#28151F" fillOpacity="0.4" fontSize="12" fontFamily="JetBrains Mono">RESIDENTIAL LIVING</text>
              <text x="440" y="110" textAnchor="middle" fill="#28151F" fillOpacity="0.4" fontSize="12" fontFamily="JetBrains Mono">CENTRAL ATRIUM & COURTYARD</text>
              <text x="440" y="220" textAnchor="middle" fill="#28151F" fillOpacity="0.4" fontSize="12" fontFamily="JetBrains Mono">BESPOKE MILLWORK / KITCHEN</text>
              <text x="730" y="155" textAnchor="middle" fill="#28151F" fillOpacity="0.4" fontSize="12" fontFamily="JetBrains Mono">SHOWROOM SUITE</text>

              {/* The Traveling Luminous Pipeline Line */}
              <path
                d="M 60 150 L 220 150 L 320 110 L 480 110 L 580 215 L 700 215 L 840 150"
                stroke="#FF7048"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="drop-shadow-[0_2px_8px_rgba(255,112,72,0.5)]"
              />

              {/* Pipeline Nodes */}
              {[
                { x: 60, y: 150, label: 'SEARCH' },
                { x: 220, y: 150, label: 'ENQUIRY' },
                { x: 320, y: 110, label: 'WHATSAPP' },
                { x: 480, y: 110, label: 'QUALIFICATION' },
                { x: 580, y: 215, label: 'FOLLOW-UP' },
                { x: 840, y: 150, label: 'PROJECT' },
              ].map((node, i) => (
                <g key={i}>
                  <circle cx={node.x} cy={node.y} r="8" fill="#FFF8F3" stroke="#FF7048" strokeWidth="3" />
                  <circle cx={node.x} cy={node.y} r="3" fill="#28151F" />
                  <text 
                    x={node.x} 
                    y={node.y > 150 ? node.y + 24 : node.y - 14} 
                    textAnchor="middle" 
                    fill="#28151F" 
                    fontSize="11" 
                    fontWeight="600"
                    fontFamily="Plus Jakarta Sans"
                    letterSpacing="0.05em"
                  >
                    {node.label}
                  </text>
                </g>
              ))}
            </svg>
          </div>

          {/* Pipeline flow description footer */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs font-mono text-[#28151F]/70">
            <span className="text-[#FF7048] font-bold">SEARCH</span>
            <span>→</span>
            <span className="text-[#28151F]">ENQUIRY</span>
            <span>→</span>
            <span className="text-[#28151F]">WHATSAPP</span>
            <span>→</span>
            <span className="text-[#28151F]">QUALIFICATION</span>
            <span>→</span>
            <span className="text-[#28151F]">FOLLOW-UP</span>
            <span>→</span>
            <span className="text-[#FF7048] font-bold">PROJECT WON</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
          <button
            onClick={onStartDemo}
            className="w-full sm:w-auto px-6 py-3 text-xs sm:text-sm font-medium text-white bg-[#28151F] hover:bg-[#FF7048] rounded-md transition-all shadow-md flex items-center justify-center gap-2 group"
          >
            <span>Start Interactive Growth Tour</span>
            <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </button>

          <button
            onClick={onExploreOs}
            className="w-full sm:w-auto px-6 py-3 text-xs sm:text-sm font-medium text-[#28151F] bg-[#FFE3D4]/80 hover:bg-[#FFE3D4] border border-[#28151F]/10 rounded-md transition-colors"
          >
            Inspect Rohan Digital OS
          </button>
        </div>
      </div>
    </section>
  );
};
