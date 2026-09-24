import React, { useState } from 'react';
import { LayoutDashboard, TrendingUp, Cpu, Network, Zap, CheckCircle2, ArrowUpRight } from 'lucide-react';

export const GrowthOsDashboard: React.FC = () => {
  const [isSystemConnected, setIsSystemConnected] = useState(true);

  const metricsDisconnected = [
    { label: 'SEARCH VISIBILITY', value: '4 Local Nodes', note: 'Standard brand queries only', status: 'Isolated' },
    { label: 'LOCAL PRESENCE', value: 'Google Maps Only', note: 'Occasional photo updates', status: 'Unsynced' },
    { label: 'WEBSITE VISITS', value: '380 / mo', note: 'Direct referrals & business card', status: 'Passive' },
    { label: 'WHATSAPP LEADS', value: '12 / mo', note: 'Unstructured personal inbox', status: 'Manual' },
    { label: 'QUALIFIED LEADS', value: '4 / mo', note: 'No preliminary qualification', status: 'Unfiltered' },
    { label: 'FOLLOW-UPS', value: 'Ad-hoc', note: 'Dependent on personal memory', status: 'Fragmented' },
    { label: 'CONSULTATIONS', value: '2 / mo', note: 'Scheduled via phone calls', status: 'Traditional' },
    { label: 'PROJECT OPPORTUNITIES', value: '1–2 Wins', note: 'Variable project pipeline', status: 'Word-of-mouth' },
  ];

  const metricsConnected = [
    { label: 'SEARCH VISIBILITY', value: '35+ High Intent Nodes', note: 'Sardarpura, Pal Road, Ratanada', status: 'Dominant' },
    { label: 'LOCAL PRESENCE', value: '8 Channels Aligned', note: '100% NAP citation sync', status: 'Synchronized' },
    { label: 'WEBSITE VISITS', value: '1,450 / mo', note: 'Intent-directed project traffic', status: 'Targeted' },
    { label: 'WHATSAPP LEADS', value: '48 / mo', note: '<30s auto-qualification', status: 'Automated' },
    { label: 'QUALIFIED LEADS', value: '26 / mo', note: 'Budget & timeline vetted', status: 'High-Ticket' },
    { label: 'FOLLOW-UPS', value: '100% Cadence', note: '0m, 1h, 24h, 3d, 7d, 30d flow', status: 'Systematic' },
    { label: 'CONSULTATIONS', value: '14 / mo', note: 'Calendar-synced site reviews', status: 'High-Conversion' },
    { label: 'PROJECT OPPORTUNITIES', value: 'Consistent Flow', note: 'Vetted high-margin projects', status: 'Predictable' },
  ];

  const activeMetrics = isSystemConnected ? metricsConnected : metricsDisconnected;

  return (
    <section id="growth-os" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#28151F]/8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#A95C70] uppercase">
            <span>12. Central Command Architecture</span>
            <span aria-hidden="true" className="text-[#28151F]/30">·</span>
            <span className="text-[#28151F]/70">Comparative Model</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif text-[#28151F] mt-2 tracking-tight max-w-2xl [text-wrap:balance]">
            Rohan Digital Growth Operating System
          </h2>
        </div>

        {/* The Mandatory Interactive Toggle */}
        <div className="bg-[#28151F] p-1 rounded-lg flex items-center gap-1 self-start md:self-auto shrink-0 shadow-sm">
          <button
            onClick={() => setIsSystemConnected(false)}
            className={`px-3 py-2 text-xs font-mono rounded-md transition-all ${
              !isSystemConnected
                ? 'bg-white text-[#28151F] font-bold shadow-xs'
                : 'text-white/70 hover:text-white'
            }`}
          >
            CURRENT DIGITAL ASSETS
          </button>
          <button
            onClick={() => setIsSystemConnected(true)}
            className={`px-3 py-2 text-xs font-mono rounded-md transition-all flex items-center gap-1.5 ${
              isSystemConnected
                ? 'bg-[#FF7048] text-white font-bold shadow-xs'
                : 'text-white/70 hover:text-white'
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            <span>CONNECTED GROWTH SYSTEM</span>
          </button>
        </div>
      </div>

      {/* Main OS Visual Canvas */}
      <div className="bg-white/80 backdrop-blur-md border border-[#28151F]/10 rounded-2xl p-6 sm:p-8 shadow-sm relative overflow-hidden">
        {/* Subtle decorative glow when connected */}
        {isSystemConnected && (
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#FF7048]/15 via-[#F43F7F]/10 to-transparent blur-2xl pointer-events-none rounded-full" />
        )}

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-6 border-b border-[#28151F]/10 text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className={`w-2.5 h-2.5 rounded-full ${isSystemConnected ? 'bg-[#16A34A] animate-pulse' : 'bg-[#D97706]'}`} />
            <span className="font-bold text-[#28151F]">
              SYSTEM ARCHITECTURE STATE: {isSystemConnected ? 'FULLY SYNCHRONIZED ENGINE' : 'SILOED ASSETS'}
            </span>
          </div>
          <span className="text-[#A95C70]">
            ALL VALUES ILLUSTRATIVE DEMO DATA
          </span>
        </div>

        {/* 8 Live-Style Telemetry Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {activeMetrics.map((metric, i) => (
            <div
              key={metric.label}
              className={`p-4 rounded-xl border transition-all ${
                isSystemConnected
                  ? 'bg-[#FFF8F3] border-[#28151F]/10 hover:border-[#FF7048]/50 shadow-xs'
                  : 'bg-white border-[#28151F]/8 opacity-85'
              }`}
            >
              <div className="flex items-center justify-between text-[10px] font-mono text-[#A95C70]">
                <span>STAGE 0{i + 1}</span>
                <span className={`px-1.5 py-0.5 rounded text-[9px] font-bold ${
                  isSystemConnected ? 'bg-[#FFE3D4] text-[#28151F]' : 'bg-gray-100 text-gray-600'
                }`}>
                  {metric.status}
                </span>
              </div>

              <div className="text-xs font-mono font-semibold text-[#28151F] mt-2">
                {metric.label}
              </div>

              <div className="text-xl sm:text-2xl font-serif text-[#28151F] mt-1 font-bold tabular-nums">
                {metric.value}
              </div>

              <div className="text-[11px] text-[#28151F]/60 mt-1 truncate">
                {metric.note}
              </div>

              <div className="mt-3 pt-2 border-t border-[#28151F]/6 flex items-center justify-between text-[10px] font-mono text-[#28151F]/40">
                <span>DEMO TELEMETRY</span>
                <ArrowUpRight className="w-3 h-3 text-[#FF7048]" />
              </div>
            </div>
          ))}
        </div>

        {/* Pipeline Convergence Chart / Narrative Banner */}
        <div className="mt-6 p-4 bg-[#28151F] text-white rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <Cpu className="w-5 h-5 text-[#FF7048] shrink-0" />
            <div>
              <div className="font-semibold text-[#FFE3D4]">
                {isSystemConnected
                  ? 'The Flywheel Effect: Discovery, WhatsApp Response, CRM & Reviews Operating in Harmony'
                  : 'Assets Function Separately: The existing website receives traffic, but follow-up & qualification remain manual'}
              </div>
              <div className="text-white/60 text-[11px] mt-0.5">
                {isSystemConnected
                  ? 'Zero lead leakage. Instant qualification. High-margin commercial & residential consultations.'
                  : 'Switch toggle to "CONNECTED GROWTH SYSTEM" above to visualize synchronization.'}
              </div>
            </div>
          </div>
          <span className="text-[11px] font-mono text-[#FF7048] shrink-0 font-bold">
            IGRYBUILDS ARCHITECTURE
          </span>
        </div>
      </div>
    </section>
  );
};
