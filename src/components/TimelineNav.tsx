import React from 'react';
import { TimelineStage } from '../types.ts';

interface TimelineNavProps {
  currentStage: TimelineStage;
  onSelectStage: (stage: TimelineStage) => void;
  progressPercent: number;
}

const STAGES: { stage: TimelineStage; label: string; number: string; targetId: string }[] = [
  { stage: '01 DISCOVER', label: 'Discover', number: '01', targetId: 'opening' },
  { stage: '02 SEARCH', label: 'Search', number: '02', targetId: 'seo-engine' },
  { stage: '03 CAPTURE', label: 'Capture', number: '03', targetId: 'whatsapp-funnel' },
  { stage: '04 QUALIFY', label: 'Qualify', number: '04', targetId: 'crm-pipeline' },
  { stage: '05 FOLLOW UP', label: 'Follow Up', number: '05', targetId: 'follow-up' },
  { stage: '06 CONVERT', label: 'Convert', number: '06', targetId: 'growth-os' },
  { stage: '07 RETAIN', label: 'Retain', number: '07', targetId: 'review-engine' },
  { stage: '08 SCALE', label: 'Scale', number: '08', targetId: 'eight-systems' },
];

export const TimelineNav: React.FC<TimelineNavProps> = ({
  currentStage,
  onSelectStage,
  progressPercent,
}) => {
  return (
    <aside 
      aria-label="Presentation timeline" 
      className="fixed bottom-0 left-0 right-0 z-40 bg-[#FFF8F3]/95 backdrop-blur-md border-t border-[#28151F]/10 shadow-lg py-2.5 px-3 sm:px-6 transition-all"
    >
      <div className="max-w-7xl mx-auto">
        {/* Progress rail */}
        <div className="w-full bg-[#FFE3D4] h-1 rounded-full overflow-hidden mb-2">
          <div 
            className="bg-gradient-to-r from-[#FF7048] via-[#FF5C63] to-[#F43F7F] h-full transition-all duration-300 ease-out"
            style={{ width: `${Math.min(100, Math.max(0, progressPercent))}%` }}
          />
        </div>

        {/* Stages list */}
        <div className="flex items-center justify-between gap-1 overflow-x-auto no-scrollbar py-0.5">
          {STAGES.map((s, idx) => {
            const isActive = currentStage === s.stage;
            const isCompleted = idx < STAGES.findIndex(item => item.stage === currentStage);

            return (
              <button
                key={s.stage}
                onClick={() => {
                  onSelectStage(s.stage);
                  const el = document.getElementById(s.targetId);
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className={`flex items-center gap-1.5 px-2 py-1 rounded transition-all text-left group shrink-0 ${
                  isActive 
                    ? 'bg-[#28151F] text-[#FFF8F3]' 
                    : isCompleted
                      ? 'text-[#28151F] hover:bg-[#FFE3D4]/50'
                      : 'text-[#28151F]/50 hover:text-[#28151F]'
                }`}
              >
                <span className={`text-[10px] font-mono tracking-tight ${isActive ? 'text-[#FF7048] font-bold' : 'text-[#A95C70]'}`}>
                  {s.number}
                </span>
                <span className="text-xs font-medium tracking-wide uppercase whitespace-nowrap hidden md:inline">
                  {s.label}
                </span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF7048] animate-pulse ml-0.5 hidden sm:inline-block" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
};
