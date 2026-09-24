import React from 'react';
import { Play, Pause, RotateCcw, Calendar } from 'lucide-react';

interface HeaderProps {
  isPlaying: boolean;
  onTogglePlay: () => void;
  onReset: () => void;
  onOpenBooking: () => void;
  currentStageNumber: number;
}

export const Header: React.FC<HeaderProps> = ({
  isPlaying,
  onTogglePlay,
  onReset,
  onOpenBooking,
}) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#FFF8F3]/90 backdrop-blur-md border-b border-[#28151F]/8 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#opening" 
          className="text-base sm:text-lg font-serif tracking-tight text-[#28151F] hover:text-[#FF7048] transition-colors whitespace-nowrap"
        >
          THE ROHAN INTERIORS <span className="text-[#A95C70] font-sans font-light">×</span> IGRYBUILDS
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs tracking-wider uppercase font-medium text-[#28151F]/70">
          <a href="#destination" className="hover:text-[#28151F] hover:underline underline-offset-8 transition-colors">
            Architecture
          </a>
          <a href="#seo-engine" className="hover:text-[#28151F] hover:underline underline-offset-8 transition-colors">
            Search Demand
          </a>
          <a href="#whatsapp-funnel" className="hover:text-[#28151F] hover:underline underline-offset-8 transition-colors">
            WhatsApp Funnel
          </a>
          <a href="#crm-pipeline" className="hover:text-[#28151F] hover:underline underline-offset-8 transition-colors">
            Pipeline CRM
          </a>
          <a href="#growth-os" className="hover:text-[#28151F] hover:underline underline-offset-8 transition-colors">
            Growth OS
          </a>
          <a href="#eight-systems" className="hover:text-[#28151F] hover:underline underline-offset-8 transition-colors">
            8 Systems
          </a>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onTogglePlay}
            aria-label={isPlaying ? 'Pause interactive tour' : 'Play interactive tour'}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#28151F] bg-[#FFE3D4]/70 hover:bg-[#FFE3D4] border border-[#28151F]/10 rounded-md transition-colors whitespace-nowrap"
          >
            {isPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5 text-[#FF7048]" />
                <span className="hidden sm:inline">Pause Tour</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 text-[#FF7048] fill-[#FF7048]" />
                <span className="hidden sm:inline">Auto Demo</span>
              </>
            )}
          </button>

          <button
            onClick={onReset}
            title="Restart from beginning"
            aria-label="Restart tour"
            className="p-1.5 text-[#28151F]/60 hover:text-[#28151F] hover:bg-[#FFE3D4]/50 rounded-md transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={onOpenBooking}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-white bg-[#28151F] hover:bg-[#FF7048] rounded-md transition-all shadow-xs whitespace-nowrap"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Strategy Call</span>
          </button>
        </div>
      </div>
    </header>
  );
};
