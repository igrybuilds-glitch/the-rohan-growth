import React from 'react';
import { Play, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { THE_8_SYSTEMS } from '../../data/mockData.ts';
import { SystemItem } from '../../types.ts';

interface EightSystemsGridProps {
  onSelectSystem: (system: SystemItem) => void;
}

export const EightSystemsGrid: React.FC<EightSystemsGridProps> = ({ onSelectSystem }) => {
  return (
    <section id="eight-systems" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#28151F]/8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#A95C70] uppercase">
            <span>13. Comprehensive Engine Architecture</span>
            <span aria-hidden="true" className="text-[#28151F]/30">·</span>
            <span className="text-[#28151F]/70">Interactive Micro-Demos</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif text-[#28151F] mt-2 tracking-tight max-w-2xl [text-wrap:balance]">
            The 8 Interlocking Growth Engines
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-[#28151F]/70 max-w-md leading-relaxed [text-wrap:balance]">
          Each system is custom-engineered to plug directly into The Rohan Interiors' current operations in Jodhpur without disrupting active interior project work.
        </p>
      </div>

      {/* The 8 Floating Luxury Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {THE_8_SYSTEMS.map((system) => (
          <div
            key={system.id}
            onClick={() => onSelectSystem(system)}
            className="group p-5 bg-white/80 backdrop-blur-sm border border-[#28151F]/10 hover:border-[#FF7048] rounded-xl shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between cursor-pointer relative overflow-hidden"
          >
            {/* Subtle top indicator */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-transparent group-hover:bg-[#FF7048] transition-colors" />

            <div>
              <div className="flex items-center justify-between text-xs font-mono mb-2">
                <span className="text-[#FF7048] font-bold">0{system.id}</span>
                <span className="text-[#A95C70] text-[10px] uppercase font-mono">
                  {system.metricLabel}
                </span>
              </div>

              <h3 className="text-base font-serif text-[#28151F] font-semibold group-hover:text-[#FF7048] transition-colors leading-snug">
                {system.title}
              </h3>

              <div className="text-[11px] text-[#A95C70] font-medium mt-1">
                {system.subtitle}
              </div>

              <p className="text-xs text-[#28151F]/70 mt-3 leading-relaxed line-clamp-3">
                {system.description}
              </p>

              <div className="mt-4 pt-3 border-t border-[#28151F]/8 space-y-1.5">
                {system.highlights.slice(0, 2).map((h, i) => (
                  <div key={i} className="flex items-start gap-1.5 text-[11px] text-[#28151F]/75">
                    <CheckCircle2 className="w-3 h-3 text-[#FF7048] shrink-0 mt-0.5" />
                    <span className="truncate">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-[#28151F]/8 flex items-center justify-between text-xs font-mono">
              <span className="text-[#28151F] font-medium text-[11px]">{system.metricValue}</span>
              <button
                type="button"
                className="flex items-center gap-1 text-[#FF7048] font-bold group-hover:translate-x-0.5 transition-transform"
              >
                <span>Play Demo</span>
                <Play className="w-3 h-3 fill-[#FF7048]" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
