import React from 'react';
import { Star, HeartHandshake, KeyRound, MessageSquare, ShieldCheck, ArrowRight } from 'lucide-react';

export const ReviewEngineScene: React.FC = () => {
  const steps = [
    { title: 'Delighted Client', detail: 'Flawless site completion & quality audit', icon: HeartHandshake },
    { title: 'Project Handover', detail: 'Keys delivered & final styling walk-through', icon: KeyRound },
    { title: 'Review Request', detail: 'Automated celebratory note with direct 5-star link', icon: MessageSquare },
    { title: 'Google Review', detail: 'Authentic testimonial added to Google Business profile', icon: Star },
    { title: 'Local Authority', detail: 'Higher map visibility & organic search trust', icon: ShieldCheck },
  ];

  return (
    <section id="review-engine" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#28151F]/8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="text-xs font-mono tracking-widest text-[#A95C70] uppercase">
          10. Reputation & Social Proof
        </span>
        <h2 className="text-2xl sm:text-4xl font-serif text-[#28151F] mt-2 tracking-tight [text-wrap:balance]">
          Ask at the right moment: Turn client satisfaction into permanent market equity.
        </h2>
        <p className="mt-3 text-xs sm:text-sm text-[#28151F]/70 leading-relaxed [text-wrap:balance]">
          The Rohan Interiors already maintains a high-integrity reputation in Jodhpur. Systematic review requests triggered immediately upon project handover capitalize on maximum client delight.
        </p>
      </div>

      {/* Visual Sequence Chain */}
      <div className="bg-white/70 backdrop-blur-sm border border-[#28151F]/10 rounded-2xl p-6 sm:p-8 shadow-sm">
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
          {steps.map((st, i) => {
            const Icon = st.icon;
            return (
              <div
                key={i}
                className="p-4 bg-[#FFF8F3] border border-[#28151F]/10 rounded-xl flex flex-col justify-between text-center relative group hover:border-[#FF7048]/40 transition-all"
              >
                <div>
                  <div className="w-9 h-9 rounded-full bg-[#FFE3D4] text-[#FF7048] flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono text-[#A95C70] uppercase block">
                    STAGE 0{i + 1}
                  </span>
                  <h3 className="text-xs font-semibold text-[#28151F] mt-1">{st.title}</h3>
                  <p className="text-[11px] text-[#28151F]/60 mt-1 leading-relaxed">
                    {st.detail}
                  </p>
                </div>

                {i < steps.length - 1 && (
                  <div className="hidden sm:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <div className="w-6 h-6 rounded-full bg-[#28151F] text-white flex items-center justify-center text-[10px]">
                      →
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Real Trigger Sample Ribbon */}
        <div className="mt-8 p-4 bg-[#FFE3D4]/50 border border-[#28151F]/10 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Star className="w-5 h-5 text-[#FF7048] fill-[#FF7048] shrink-0" />
            <div className="text-xs text-[#28151F]">
              <strong>Handover Automation Trigger:</strong> "We loved crafting your Jodhpur residence! Would you take 30 seconds to share your experience on our Google profile?"
            </div>
          </div>
          <span className="text-[11px] font-mono text-[#FF7048] font-bold whitespace-nowrap">
            1-TAP DIRECT REVIEW URL
          </span>
        </div>
      </div>
    </section>
  );
};
