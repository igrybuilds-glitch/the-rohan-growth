import React, { useState } from 'react';
import { RefreshCw, CheckCircle2, ShieldCheck, Share2 } from 'lucide-react';

export const PresenceGridScene: React.FC = () => {
  const [isSynchronized, setIsSynchronized] = useState(true);
  const [isSyncing, setIsSyncing] = useState(false);

  const channels = [
    { name: 'Google Business', type: 'Local Authority', visibility: '95%', consistency: '100%', content: 'Active', conversion: 'High' },
    { name: 'Instagram', type: 'Visual Portfolio', visibility: '90%', consistency: '100%', content: 'Active', conversion: 'Direct DM' },
    { name: 'Google Maps', type: 'Hyper-Local Pack', visibility: '92%', consistency: '100%', content: 'Geotagged', conversion: 'Calls & Visits' },
    { name: 'WhatsApp', type: 'Direct Sales Pipeline', visibility: '100%', consistency: '100%', content: 'Automated', conversion: 'Qualified Leads' },
    { name: 'Website', type: 'Brand Anchor', visibility: '96%', consistency: '100%', content: 'Pillar Pages', conversion: 'Consultations' },
    { name: 'Facebook', type: 'Social Entity', visibility: '80%', consistency: '100%', content: 'Syndicated', conversion: 'Inbound' },
    { name: 'LinkedIn', type: 'B2B Commercial', visibility: '78%', consistency: '100%', content: 'Architectural', conversion: 'Commercial' },
    { name: 'Justdial', type: 'Local Directory', visibility: '85%', consistency: '100%', content: 'Verified NAP', conversion: 'Phone Calls' },
  ];

  const handleSyncTrigger = () => {
    setIsSyncing(true);
    setTimeout(() => {
      setIsSyncing(false);
      setIsSynchronized(true);
    }, 1200);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#28151F]/8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#A95C70] uppercase">
            <span>06. Presence Control Center</span>
            <span aria-hidden="true" className="text-[#28151F]/30">·</span>
            <span className="text-[#28151F]/70">Illustrative Optimisation Layer</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif text-[#28151F] mt-2 tracking-tight max-w-2xl [text-wrap:balance]">
            Your brand should feel equally credible everywhere a client discovers you.
          </h2>
        </div>

        <button
          onClick={handleSyncTrigger}
          disabled={isSyncing}
          className="flex items-center gap-2 px-4 py-2.5 bg-[#28151F] hover:bg-[#FF7048] text-white text-xs font-medium rounded-md transition-colors shadow-xs self-start md:self-auto shrink-0"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${isSyncing ? 'animate-spin text-[#FF7048]' : ''}`} />
          <span>{isSyncing ? 'Synchronizing Network...' : 'Test Network Synchronization'}</span>
        </button>
      </div>

      {/* 8-Card Digital Presence Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {channels.map((chan) => (
          <div
            key={chan.name}
            className="p-4 bg-white/70 backdrop-blur-sm border border-[#28151F]/10 rounded-xl shadow-xs hover:border-[#FF7048]/40 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#A95C70] uppercase">{chan.type}</span>
                <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse" />
              </div>
              <h3 className="text-sm font-semibold text-[#28151F] mt-1">{chan.name}</h3>

              {/* 4 Pillars per card */}
              <div className="mt-4 space-y-2 border-t border-[#28151F]/8 pt-3 text-xs font-mono">
                <div className="flex items-center justify-between text-[#28151F]/70">
                  <span>VISIBILITY</span>
                  <span className="font-bold text-[#28151F]">{chan.visibility}</span>
                </div>
                <div className="flex items-center justify-between text-[#28151F]/70">
                  <span>CONSISTENCY</span>
                  <span className="font-bold text-[#16A34A]">{chan.consistency}</span>
                </div>
                <div className="flex items-center justify-between text-[#28151F]/70">
                  <span>CONTENT</span>
                  <span className="font-bold text-[#28151F]">{chan.content}</span>
                </div>
                <div className="flex items-center justify-between text-[#28151F]/70">
                  <span>CONVERSION</span>
                  <span className="font-bold text-[#FF7048]">{chan.conversion}</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-2.5 border-t border-[#28151F]/8 flex items-center justify-between text-[10px] font-mono text-[#28151F]/50">
              <span>SYNC STATUS</span>
              <span className="text-[#16A34A] font-medium flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-[#16A34A]" />
                LOCKED
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
