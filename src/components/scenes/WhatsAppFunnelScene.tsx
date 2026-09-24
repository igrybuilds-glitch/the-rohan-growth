import React, { useState } from 'react';
import { MessageSquare, Check, CheckCheck, Send, Sparkles, ArrowRight, User, Building, Database } from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  time: string;
  buttons?: string[];
}

export const WhatsAppFunnelScene: React.FC = () => {
  const [step, setStep] = useState(1);
  const [selectedType, setSelectedType] = useState<string>('HOME');
  const [selectedStage, setSelectedStage] = useState<string>('NEW CONSTRUCTION');
  const [selectedSize, setSelectedSize] = useState<string>('2000–4000 SQ FT');
  const [selectedTimeline, setSelectedTimeline] = useState<string>('1–3 months');
  const [selectedAction, setSelectedAction] = useState<string | null>(null);

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'm1',
      sender: 'user',
      text: "Hi, I'm looking for interiors for my new home in Jodhpur.",
      time: '10:42 AM'
    },
    {
      id: 'm2',
      sender: 'bot',
      text: "Absolutely. I'd love to understand your project better. What type of space are you planning?",
      time: '10:42 AM',
      buttons: ['HOME', 'COMMERCIAL', 'SHOWROOM', 'OFFICE', 'OTHER']
    }
  ]);

  const handleSelectType = (type: string) => {
    setSelectedType(type);
    setStep(2);
    setMessages(prev => [
      ...prev,
      { id: `u-${Date.now()}`, sender: 'user', text: type, time: '10:43 AM' },
      {
        id: `b-${Date.now()}`,
        sender: 'bot',
        text: 'What stage is your project at?',
        time: '10:43 AM',
        buttons: ['NEW CONSTRUCTION', 'RENOVATION', 'PLANNING', 'READY TO START']
      }
    ]);
  };

  const handleSelectStage = (stg: string) => {
    setSelectedStage(stg);
    setStep(3);
    setMessages(prev => [
      ...prev,
      { id: `u-${Date.now()}`, sender: 'user', text: stg, time: '10:43 AM' },
      {
        id: `b-${Date.now()}`,
        sender: 'bot',
        text: 'Approximate project size?',
        time: '10:43 AM',
        buttons: ['<1000 SQ FT', '1000–2000 SQ FT', '2000–4000 SQ FT', '4000+ SQ FT']
      }
    ]);
  };

  const handleSelectSize = (sz: string) => {
    setSelectedSize(sz);
    setStep(4);
    setMessages(prev => [
      ...prev,
      { id: `u-${Date.now()}`, sender: 'user', text: sz, time: '10:44 AM' },
      {
        id: `b-${Date.now()}`,
        sender: 'bot',
        text: 'When would you like to start?',
        time: '10:44 AM',
        buttons: ['Immediately', '1–3 months', '3–6 months', 'Just exploring']
      }
    ]);
  };

  const handleSelectTimeline = (tm: string) => {
    setSelectedTimeline(tm);
    setStep(5);
    setMessages(prev => [
      ...prev,
      { id: `u-${Date.now()}`, sender: 'user', text: tm, time: '10:44 AM' },
      {
        id: `b-${Date.now()}`,
        sender: 'bot',
        text: 'Wonderful. Would you like a personalized design consultation with our principal interior architect?',
        time: '10:45 AM',
        buttons: ['BOOK A CALL', 'REQUEST SITE VISIT']
      }
    ]);
  };

  const handleSelectAction = (act: string) => {
    setSelectedAction(act);
    setStep(6);
    setMessages(prev => [
      ...prev,
      { id: `u-${Date.now()}`, sender: 'user', text: act, time: '10:45 AM' },
      {
        id: `b-${Date.now()}`,
        sender: 'bot',
        text: 'Perfect! Your inquiry dossier has been delivered directly to the senior design desk. We will reach out on this number within 15 minutes.',
        time: '10:45 AM'
      }
    ]);
  };

  const handleResetChat = () => {
    setStep(1);
    setSelectedAction(null);
    setMessages([
      {
        id: 'm1',
        sender: 'user',
        text: "Hi, I'm looking for interiors for my new home in Jodhpur.",
        time: '10:42 AM'
      },
      {
        id: 'm2',
        sender: 'bot',
        text: "Absolutely. I'd love to understand your project better. What type of space are you planning?",
        time: '10:42 AM',
        buttons: ['HOME', 'COMMERCIAL', 'SHOWROOM', 'OFFICE', 'OTHER']
      }
    ]);
  };

  return (
    <section id="whatsapp-funnel" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#28151F]/8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#A95C70] uppercase">
            <span>07. Instant WhatsApp Funnel</span>
            <span aria-hidden="true" className="text-[#28151F]/30">·</span>
            <span className="text-[#28151F]/70">Proposed WhatsApp Funnel</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif text-[#28151F] mt-2 tracking-tight max-w-2xl [text-wrap:balance]">
            Respond in 30 seconds. Qualify scope. Eliminate lead fatigue.
          </h2>
        </div>

        <button
          onClick={handleResetChat}
          className="text-xs font-mono text-[#FF7048] hover:underline self-start md:self-auto shrink-0"
        >
          Reset Interactive Chat Simulation ↺
        </button>
      </div>

      {/* Grid: Interactive WhatsApp Phone Simulator on Left, Realtime CRM Extraction on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* WhatsApp Phone Mockup Container */}
        <div className="lg:col-span-6 bg-[#EFEAE2] border border-[#28151F]/15 rounded-2xl shadow-xl overflow-hidden flex flex-col h-[560px]">
          {/* WhatsApp Header Bar */}
          <div className="bg-[#075E54] text-white px-4 py-3 flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center font-serif text-sm font-bold">
                RI
              </div>
              <div>
                <div className="text-sm font-semibold leading-tight">The Rohan Interiors</div>
                <div className="text-[10px] text-white/80 font-mono flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                  <span>Verified Business · Online</span>
                </div>
              </div>
            </div>

            <div className="text-[10px] font-mono bg-white/10 px-2 py-0.5 rounded">
              AUTORESPONDER
            </div>
          </div>

          {/* Chat Messages Body with WhatsApp pattern background */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#EFEAE2] relative">
            <div className="text-center my-1">
              <span className="text-[10px] font-mono bg-[#FFF8F3]/90 text-[#28151F]/60 px-2.5 py-0.5 rounded-full shadow-2xs">
                TODAY · HIGH-INTENT LEAD INBOUND
              </span>
            </div>

            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-lg px-3.5 py-2 text-xs shadow-2xs relative ${
                    msg.sender === 'user'
                      ? 'bg-[#DCF8C6] text-[#28151F] rounded-tr-none'
                      : 'bg-white text-[#28151F] rounded-tl-none'
                  }`}
                >
                  <p className="leading-relaxed">{msg.text}</p>
                  <div className="flex items-center justify-end gap-1 mt-1 text-[9px] text-[#28151F]/50 font-mono">
                    <span>{msg.time}</span>
                    {msg.sender === 'user' && <CheckCheck className="w-3 h-3 text-[#34B7F1]" />}
                  </div>
                </div>

                {/* Interactive Action Buttons */}
                {msg.buttons && (
                  <div className="mt-2 flex flex-wrap gap-1.5 max-w-[90%]">
                    {msg.buttons.map((btn) => (
                      <button
                        key={btn}
                        onClick={() => {
                          if (step === 1) handleSelectType(btn);
                          else if (step === 2) handleSelectStage(btn);
                          else if (step === 3) handleSelectSize(btn);
                          else if (step === 4) handleSelectTimeline(btn);
                          else if (step === 5) handleSelectAction(btn);
                        }}
                        className="px-2.5 py-1 bg-white hover:bg-[#FFE3D4] text-[#28151F] border border-[#28151F]/15 rounded-md text-[11px] font-medium transition-colors shadow-2xs"
                      >
                        {btn}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* WhatsApp Input Bar */}
          <div className="bg-[#F0F0F0] px-3 py-2 flex items-center gap-2 border-t border-[#28151F]/10">
            <input
              type="text"
              readOnly
              value={step < 6 ? "Select an option above to test qualification flow..." : "Lead qualified & synced to Studio CRM."}
              className="flex-1 bg-white border border-[#28151F]/10 rounded-full px-4 py-1.5 text-xs text-[#28151F]/70 outline-none"
            />
            <div className="w-8 h-8 rounded-full bg-[#075E54] text-white flex items-center justify-center shrink-0">
              <Send className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>

        {/* Realtime Studio CRM Sync Display on Right */}
        <div className="lg:col-span-6 bg-[#28151F] text-[#FFF8F3] rounded-2xl p-6 sm:p-7 shadow-xl border border-[#28151F]/30 space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono text-[#FF7048]">
            <span className="flex items-center gap-1.5">
              <Database className="w-3.5 h-3.5" />
              LIVE DATASTREAM INTO STUDIO CRM
            </span>
            <span>AUTO-PARSED</span>
          </div>

          {/* Dossier Card */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-white/50 uppercase">Extracted Lead Dossier</span>
                <h4 className="text-base font-serif text-[#FFE3D4] font-medium">Jodhpur Inbound Client</h4>
              </div>
              <span className="px-2 py-0.5 bg-[#FF7048] text-white text-[10px] font-mono font-bold rounded">
                SCORE: {step >= 5 ? '92 / 100' : '75 / 100'}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs font-mono pt-2 border-t border-white/10">
              <div>
                <span className="text-white/50 block text-[10px]">PROJECT TYPE</span>
                <span className="text-white font-medium">{selectedType}</span>
              </div>
              <div>
                <span className="text-white/50 block text-[10px]">PROJECT STAGE</span>
                <span className="text-white font-medium">{selectedStage}</span>
              </div>
              <div>
                <span className="text-white/50 block text-[10px]">APPROXIMATE SIZE</span>
                <span className="text-white font-medium">{selectedSize}</span>
              </div>
              <div>
                <span className="text-white/50 block text-[10px]">TIMELINE</span>
                <span className="text-white font-medium">{selectedTimeline}</span>
              </div>
            </div>

            {selectedAction && (
              <div className="p-3 bg-[#FF7048]/20 border border-[#FF7048]/40 rounded-lg text-xs">
                <span className="text-[10px] font-mono text-[#FF7048] block mb-0.5 font-bold">
                  NEXT ACTION AUTOMATION
                </span>
                <span className="text-white">
                  {selectedAction === 'BOOK A CALL' ? '15-Minute Principal Designer Call Slot Reserved' : 'On-Site Layout Inspection Brief Sent to Site Architect'}
                </span>
              </div>
            )}
          </div>

          {/* Value Proposition bullets */}
          <div className="space-y-2 text-xs text-white/75">
            <div className="flex items-start gap-2">
              <Check className="w-4 h-4 text-[#FF7048] shrink-0 mt-0.5" />
              <span><strong>Zero Manual Entry:</strong> Project type, timeline, and scale recorded before team picks up the phone.</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="w-4 h-4 text-[#FF7048] shrink-0 mt-0.5" />
              <span><strong>Respectful Disqualification:</strong> Casual inquiries filtered politely; serious clients fast-tracked.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
