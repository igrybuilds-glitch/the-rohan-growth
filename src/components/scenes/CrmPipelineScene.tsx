import React, { useState } from 'react';
import { Kanban, ArrowRight, UserCheck, MoveRight, ChevronRight, Clock, Star } from 'lucide-react';
import { INITIAL_CRM_LEADS } from '../../data/mockData.ts';
import { CrmLead } from '../../types.ts';

export const CrmPipelineScene: React.FC = () => {
  const [leads, setLeads] = useState<CrmLead[]>(INITIAL_CRM_LEADS);
  const [activeLeadId, setActiveLeadId] = useState<string>('lead-1');

  const stages: { key: CrmLead['stage']; title: string; count: number }[] = [
    { key: 'new', title: 'NEW ENQUIRY', count: leads.filter(l => l.stage === 'new').length },
    { key: 'qualified', title: 'QUALIFIED', count: leads.filter(l => l.stage === 'qualified').length },
    { key: 'consultation', title: 'CONSULTATION', count: leads.filter(l => l.stage === 'consultation').length },
    { key: 'site_visit', title: 'SITE VISIT', count: leads.filter(l => l.stage === 'site_visit').length },
    { key: 'proposal', title: 'PROPOSAL', count: leads.filter(l => l.stage === 'proposal').length },
    { key: 'won', title: 'WON', count: leads.filter(l => l.stage === 'won').length },
  ];

  const stageOrder: CrmLead['stage'][] = ['new', 'qualified', 'consultation', 'site_visit', 'proposal', 'won'];

  const advanceLead = (leadId: string) => {
    setLeads(prev => prev.map(l => {
      if (l.id !== leadId) return l;
      const curIdx = stageOrder.indexOf(l.stage);
      const nextStage = stageOrder[Math.min(stageOrder.length - 1, curIdx + 1)];
      return { ...l, stage: nextStage };
    }));
  };

  const rewindLead = (leadId: string) => {
    setLeads(prev => prev.map(l => {
      if (l.id !== leadId) return l;
      const curIdx = stageOrder.indexOf(l.stage);
      const prevStage = stageOrder[Math.max(0, curIdx - 1)];
      return { ...l, stage: prevStage };
    }));
  };

  const selectedLead = leads.find(l => l.id === activeLeadId) || leads[0];

  return (
    <section id="crm-pipeline" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#28151F]/8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#A95C70] uppercase">
            <span>08. Lead Qualification & Pipeline</span>
            <span aria-hidden="true" className="text-[#28151F]/30">·</span>
            <span className="text-[#28151F]/70">Illustrative Pipeline Demonstration</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif text-[#28151F] mt-2 tracking-tight max-w-2xl [text-wrap:balance]">
            Every serious Jodhpur inquiry tracked from first ping to project handover.
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-[#28151F]/70 max-w-md leading-relaxed [text-wrap:balance]">
          Enquiries no longer sit unnoticed in personal chats. Each prospect is qualified with budget, timeline, and spatial requirement before moving into the consultation pipeline.
        </p>
      </div>

      {/* Selected Lead Control Bar */}
      <div className="mb-6 p-4 bg-white/70 backdrop-blur-sm border border-[#28151F]/10 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#FFE3D4] text-[#FF7048] flex items-center justify-center font-bold font-mono text-xs">
            {selectedLead.score}
          </div>
          <div>
            <div className="text-xs font-semibold text-[#28151F] flex items-center gap-2">
              <span>{selectedLead.name}</span>
              <span className="text-[#A95C70] font-normal">({selectedLead.projectType})</span>
            </div>
            <div className="text-[11px] font-mono text-[#28151F]/60">
              Location: {selectedLead.location} · Budget: {selectedLead.budgetRange} · Timeline: {selectedLead.timeline}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
          <button
            onClick={() => rewindLead(selectedLead.id)}
            className="px-3 py-1.5 text-xs font-mono bg-white border border-[#28151F]/15 rounded-md hover:bg-[#FFE3D4] transition-colors"
          >
            ← Previous Stage
          </button>
          <button
            onClick={() => advanceLead(selectedLead.id)}
            className="px-3.5 py-1.5 text-xs font-mono bg-[#28151F] text-white hover:bg-[#FF7048] rounded-md transition-colors flex items-center gap-1.5"
          >
            <span>Advance Lead Stage</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* 6-Column Kanban Board */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {stages.map((stg) => {
          const stageLeads = leads.filter(l => l.stage === stg.key);
          return (
            <div
              key={stg.key}
              className="bg-white/50 border border-[#28151F]/10 rounded-xl p-3 flex flex-col min-h-[380px]"
            >
              {/* Column Header */}
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#28151F]/8 text-xs font-mono">
                <span className="font-semibold text-[#28151F] text-[11px]">{stg.title}</span>
                <span className="w-5 h-5 rounded-full bg-[#FFE3D4] text-[#28151F] flex items-center justify-center font-bold text-[10px]">
                  {stg.count}
                </span>
              </div>

              {/* Cards in Column */}
              <div className="space-y-2 flex-1">
                {stageLeads.map((lead) => {
                  const isSelected = lead.id === activeLeadId;
                  return (
                    <div
                      key={lead.id}
                      onClick={() => setActiveLeadId(lead.id)}
                      className={`p-3 rounded-lg border text-left cursor-pointer transition-all ${
                        isSelected
                          ? 'bg-[#28151F] text-white border-[#28151F] shadow-md'
                          : 'bg-white hover:bg-[#FFF8F3] border-[#28151F]/10 text-[#28151F]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`text-[10px] font-mono font-bold ${isSelected ? 'text-[#FF7048]' : 'text-[#A95C70]'}`}>
                          SCORE: {lead.score}
                        </span>
                        <span className={`text-[9px] font-mono ${isSelected ? 'text-white/50' : 'text-[#28151F]/40'}`}>
                          {lead.receivedAt}
                        </span>
                      </div>

                      <div className="text-xs font-semibold mt-1.5 leading-snug">
                        {lead.name}
                      </div>

                      <div className={`text-[11px] font-serif mt-1 ${isSelected ? 'text-[#FFE3D4]' : 'text-[#28151F]/70'}`}>
                        {lead.projectType}
                      </div>

                      <div className={`text-[10px] font-mono mt-2 pt-2 border-t flex items-center justify-between ${
                        isSelected ? 'border-white/10 text-white/60' : 'border-[#28151F]/8 text-[#28151F]/50'
                      }`}>
                        <span>{lead.location}</span>
                        <span>{lead.timeline}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
