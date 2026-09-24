import React, { useState } from 'react';
import { Clock, PhoneMissed, MessageSquare, ArrowRight, CheckCircle2, BellRing, Sparkles } from 'lucide-react';
import { FOLLOWUP_TIMELINE } from '../../data/mockData.ts';

export const FollowUpScene: React.FC = () => {
  const [selectedTimelineIndex, setSelectedTimelineIndex] = useState(0);
  const [missedCallSimulated, setMissedCallSimulated] = useState(false);
  const [missedCallStep, setMissedCallStep] = useState(0);

  const handleSimulateMissedCall = () => {
    setMissedCallSimulated(true);
    setMissedCallStep(1);
    setTimeout(() => setMissedCallStep(2), 800);
    setTimeout(() => setMissedCallStep(3), 1600);
    setTimeout(() => setMissedCallStep(4), 2400);
  };

  return (
    <section id="follow-up" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#28151F]/8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#A95C70] uppercase">
            <span>09. Follow-Up & Call Recovery</span>
            <span aria-hidden="true" className="text-[#28151F]/30">·</span>
            <span className="text-[#28151F]/70">Proposed Automation</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif text-[#28151F] mt-2 tracking-tight max-w-2xl [text-wrap:balance]">
            Because a great enquiry shouldn't disappear just because nobody followed up.
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-[#28151F]/70 max-w-md leading-relaxed [text-wrap:balance]">
          High-end interior projects have a 30 to 90-day consideration cycle in Jodhpur. Automated multi-touch sequences ensure you stay top of mind with zero manual chasing.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Scene 09 Follow-Up Automation Timeline */}
        <div className="lg:col-span-6 bg-white/70 backdrop-blur-sm border border-[#28151F]/10 rounded-xl p-5 sm:p-6 shadow-sm space-y-4">
          <div className="flex items-center justify-between text-xs font-mono pb-3 border-b border-[#28151F]/10">
            <span className="font-bold text-[#28151F] flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#FF7048]" />
              NURTURE CADENCE (0 MIN → 30 DAYS)
            </span>
            <span className="text-[#A95C70]">SELECT TIME INTERVAL</span>
          </div>

          {/* Time Scrubber Buttons */}
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5">
            {FOLLOWUP_TIMELINE.map((item, idx) => {
              const isSelected = selectedTimelineIndex === idx;
              return (
                <button
                  key={item.time}
                  onClick={() => setSelectedTimelineIndex(idx)}
                  className={`py-2 px-1 text-center rounded text-xs font-mono transition-all ${
                    isSelected
                      ? 'bg-[#28151F] text-white font-bold shadow-xs'
                      : 'bg-[#FFF8F3] hover:bg-[#FFE3D4]/50 border border-[#28151F]/10 text-[#28151F]'
                  }`}
                >
                  {item.time}
                </button>
              );
            })}
          </div>

          {/* WhatsApp Message Preview Card */}
          <div className="mt-4 p-4 bg-[#EFEAE2] border border-[#28151F]/10 rounded-xl space-y-3">
            <div className="flex items-center justify-between text-[11px] font-mono text-[#075E54]">
              <span className="font-bold flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5" />
                AUTOMATED DISPATCH AT {FOLLOWUP_TIMELINE[selectedTimelineIndex].time}
              </span>
              <span>{FOLLOWUP_TIMELINE[selectedTimelineIndex].trigger}</span>
            </div>

            <div className="bg-white p-3.5 rounded-lg shadow-2xs text-xs text-[#28151F] leading-relaxed border border-[#28151F]/5">
              {FOLLOWUP_TIMELINE[selectedTimelineIndex].message}
            </div>

            <div className="text-[10px] font-mono text-[#28151F]/60 flex items-center justify-between">
              <span>Channel: WhatsApp Business Cloud</span>
              <span className="text-[#16A34A] font-medium">Automatic Trigger</span>
            </div>
          </div>
        </div>

        {/* Right Column: Scene 10 Missed Call Recovery Simulator */}
        <div className="lg:col-span-6 bg-[#28151F] text-[#FFF8F3] rounded-xl p-6 sm:p-7 shadow-xl border border-[#28151F]/30 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono text-[#FF7048]">
            <span className="flex items-center gap-1.5">
              <PhoneMissed className="w-3.5 h-3.5" />
              MISSED CALL SALVAGE PROTOCOL
            </span>
            <span>SUB-45s RECOVERY</span>
          </div>

          <p className="text-xs text-white/80 leading-relaxed">
            When design directors are on an active site survey, missed incoming calls from prospective clients risk turning to competitors. The proposed recovery system catches the caller immediately.
          </p>

          <button
            onClick={handleSimulateMissedCall}
            className="w-full py-2.5 px-4 bg-[#FF7048] hover:bg-[#FF5C63] text-white text-xs font-semibold rounded-md transition-colors flex items-center justify-center gap-2 shadow-sm"
          >
            <BellRing className="w-3.5 h-3.5" />
            <span>Simulate Missed Studio Call</span>
          </button>

          {/* Interactive Step-by-Step Recovery Simulation */}
          <div className="space-y-2 pt-2">
            {[
              { step: 1, title: 'Missed Call Detected', detail: 'Inbound ring ended after 25s without answer' },
              { step: 2, title: 'Instant Alert & WhatsApp Ping', detail: '"We noticed you tried reaching The Rohan Interiors. How can we help?"' },
              { step: 3, title: 'Caller Selects Category', detail: '[HOME] [OFFICE] [SHOP] [COMMERCIAL] [OTHER]' },
              { step: 4, title: 'Senior Architect Notified', detail: 'High-priority notification ping sent to studio head for callback' },
            ].map((st) => {
              const isPastOrCurrent = missedCallStep >= st.step;
              return (
                <div
                  key={st.step}
                  className={`p-2.5 rounded-lg border text-xs transition-all ${
                    isPastOrCurrent
                      ? 'bg-white/10 border-white/20 text-white'
                      : 'bg-white/5 border-white/5 text-white/40'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">{st.step}. {st.title}</span>
                    {isPastOrCurrent && <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A]" />}
                  </div>
                  <div className="text-[11px] text-white/60 mt-0.5">{st.detail}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
