import React from 'react';
import { Calendar, ArrowUp, Sparkles, Compass } from 'lucide-react';

interface ConclusionSceneProps {
  onOpenBooking: () => void;
  onExploreTop: () => void;
}

export const ConclusionScene: React.FC<ConclusionSceneProps> = ({
  onOpenBooking,
  onExploreTop,
}) => {
  const transformationPillars = [
    { title: 'More Relevant Discovery', desc: 'Targeted homeowners in Sardarpura, Pal Road & Ratanada' },
    { title: 'Higher Quality Enquiries', desc: 'Budget, floorplan size & timeline pre-qualified' },
    { title: 'Sub-30s Response Speed', desc: 'Instant WhatsApp greeting & design lookbook dispatch' },
    { title: 'Structured Follow-Up', desc: 'Zero leads lost over 30 to 90-day consideration windows' },
    { title: 'High-Margin Projects Won', desc: 'Consistent commercial showroom & luxury villa opportunities' },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#28151F]/8 relative overflow-hidden">
      {/* Decorative Warm Marble Radiance */}
      <div className="absolute inset-0 bg-marble-glow opacity-80 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Outward Transformation Architecture Visualization */}
        <div className="mb-12 p-6 sm:p-8 bg-white/85 backdrop-blur-md border border-[#28151F]/10 rounded-2xl shadow-sm">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#A95C70] block mb-2">
            14. Final System Synthesis
          </span>
          <h3 className="text-xl sm:text-3xl font-serif text-[#28151F] font-semibold [text-wrap:balance]">
            One Unified Digital Asset Radiating Across Jodhpur
          </h3>

          {/* Connected Flow Diagram */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-5 gap-3">
            {transformationPillars.map((tp, idx) => (
              <div
                key={idx}
                className="p-3.5 bg-[#FFF8F3] border border-[#28151F]/10 rounded-xl text-center flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono text-[#FF7048] font-bold block mb-1">
                    0{idx + 1}
                  </span>
                  <div className="text-xs font-semibold text-[#28151F] leading-snug">
                    {tp.title}
                  </div>
                </div>
                <div className="text-[10px] text-[#28151F]/60 mt-2 font-mono">
                  {tp.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* The Mandatory Climactic Typography */}
        <div className="space-y-4 my-12">
          <p className="text-2xl sm:text-4xl lg:text-5xl font-serif text-[#28151F] leading-tight tracking-tight">
            "THE WEBSITE DOESN'T NEED TO CHANGE."
          </p>
          <p className="text-3xl sm:text-5xl lg:text-6xl font-serif text-[#FF7048] leading-tight tracking-tight font-medium">
            "THE SYSTEM AROUND IT CAN."
          </p>
        </div>

        {/* Brand Lockup */}
        <div className="pt-6 border-t border-[#28151F]/10 max-w-md mx-auto">
          <div className="text-base sm:text-lg font-serif text-[#28151F] tracking-tight">
            THE ROHAN INTERIORS <span className="text-[#A95C70] font-sans font-light">×</span> IGRYBUILDS
          </div>
          <p className="text-xs sm:text-sm text-[#28151F]/70 mt-1 font-normal">
            Building the digital growth system behind an already strong interior brand.
          </p>
        </div>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-7 py-3.5 bg-[#28151F] hover:bg-[#FF7048] text-white text-xs sm:text-sm font-medium rounded-md transition-all shadow-md flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Book a 15-Minute Strategy Call</span>
          </button>

          <button
            onClick={onExploreTop}
            className="w-full sm:w-auto px-6 py-3.5 bg-[#FFE3D4]/80 hover:bg-[#FFE3D4] text-[#28151F] border border-[#28151F]/10 text-xs sm:text-sm font-medium rounded-md transition-colors flex items-center justify-center gap-2"
          >
            <ArrowUp className="w-4 h-4 text-[#FF7048]" />
            <span>Explore The System From Top</span>
          </button>
        </div>

        {/* Footer Disclaimer & Metadata */}
        <div className="mt-16 text-[11px] font-mono text-[#28151F]/50 space-y-1">
          <div>Prepared exclusively for The Rohan Interiors · Jodhpur, Rajasthan</div>
          <div>Digital Architecture & Automation by IGRYBUILDS · All Performance Metrics Demonstrative</div>
        </div>
      </div>
    </section>
  );
};
