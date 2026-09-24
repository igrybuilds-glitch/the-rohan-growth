/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { TimelineStage, SystemItem } from './types.ts';
import { Header } from './components/Header.tsx';
import { TimelineNav } from './components/TimelineNav.tsx';
import { ArchitecturalBackground } from './components/ArchitecturalBackground.tsx';
import { StrategyModal } from './components/StrategyModal.tsx';
import { MicroDemoModal } from './components/MicroDemoModal.tsx';
import { HeroScene } from './components/scenes/HeroScene.tsx';
import { WebsiteCenterScene } from './components/scenes/WebsiteCenterScene.tsx';
import { LocalSeoScene } from './components/scenes/LocalSeoScene.tsx';
import { AuthorityEngineScene } from './components/scenes/AuthorityEngineScene.tsx';
import { GoogleMapsScene } from './components/scenes/GoogleMapsScene.tsx';
import { PresenceGridScene } from './components/scenes/PresenceGridScene.tsx';
import { WhatsAppFunnelScene } from './components/scenes/WhatsAppFunnelScene.tsx';
import { CrmPipelineScene } from './components/scenes/CrmPipelineScene.tsx';
import { FollowUpScene } from './components/scenes/FollowUpScene.tsx';
import { ReviewEngineScene } from './components/scenes/ReviewEngineScene.tsx';
import { AiSearchScene } from './components/scenes/AiSearchScene.tsx';
import { GrowthOsDashboard } from './components/scenes/GrowthOsDashboard.tsx';
import { EightSystemsGrid } from './components/scenes/EightSystemsGrid.tsx';
import { ConclusionScene } from './components/scenes/ConclusionScene.tsx';

const STAGES: { stage: TimelineStage; id: string }[] = [
  { stage: '01 DISCOVER', id: 'opening' },
  { stage: '02 SEARCH', id: 'seo-engine' },
  { stage: '03 CAPTURE', id: 'whatsapp-funnel' },
  { stage: '04 QUALIFY', id: 'crm-pipeline' },
  { stage: '05 FOLLOW UP', id: 'follow-up' },
  { stage: '06 CONVERT', id: 'growth-os' },
  { stage: '07 RETAIN', id: 'review-engine' },
  { stage: '08 SCALE', id: 'eight-systems' },
];

export default function App() {
  const [currentStage, setCurrentStage] = useState<TimelineStage>('01 DISCOVER');
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [progressPercent, setProgressPercent] = useState<number>(12.5);
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [selectedSystem, setSelectedSystem] = useState<SystemItem | null>(null);

  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Synchronize active stage on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollFraction = docHeight > 0 ? scrollY / docHeight : 0;
      setProgressPercent(Math.min(100, Math.max(10, scrollFraction * 100)));

      // Find current section in viewport
      for (let i = STAGES.length - 1; i >= 0; i--) {
        const el = document.getElementById(STAGES[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.45) {
            setCurrentStage(STAGES[i].stage);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-tour player: advances stage every 11 seconds (approx ~90s total presentation)
  useEffect(() => {
    if (!isPlaying) {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
      return;
    }

    autoPlayTimerRef.current = setInterval(() => {
      setCurrentStage((prevStage) => {
        const curIdx = STAGES.findIndex((s) => s.stage === prevStage);
        const nextIdx = (curIdx + 1) % STAGES.length;
        const nextStageObj = STAGES[nextIdx];

        const el = document.getElementById(nextStageObj.id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }

        if (nextIdx === STAGES.length - 1) {
          // If reached final stage in autoplay, stop autoplay after finishing
          setTimeout(() => setIsPlaying(false), 8000);
        }

        return nextStageObj.stage;
      });
    }, 11000);

    return () => {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    };
  }, [isPlaying]);

  // Keyboard navigation: Space to Play/Pause, Esc to close modals
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
        return;
      }
      if (e.code === 'Space') {
        e.preventDefault();
        setIsPlaying((prev) => !prev);
      } else if (e.code === 'Escape') {
        setIsBookingOpen(false);
        setSelectedSystem(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleStartTour = () => {
    setIsPlaying(true);
    const destinationEl = document.getElementById('destination');
    if (destinationEl) {
      destinationEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResetTour = () => {
    setIsPlaying(false);
    setCurrentStage('01 DISCOVER');
    setProgressPercent(12.5);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExploreOs = () => {
    const el = document.getElementById('growth-os');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#FFF8F3] text-[#28151F] selection:bg-[#FFE3D4] selection:text-[#FF7048] pb-24 font-sans antialiased overflow-x-hidden">
      {/* Living Atmospheric Architectural Background */}
      <ArchitecturalBackground />

      {/* 3-Zone Sticky Header */}
      <Header
        isPlaying={isPlaying}
        onTogglePlay={() => setIsPlaying(!isPlaying)}
        onReset={handleResetTour}
        onOpenBooking={() => setIsBookingOpen(true)}
        currentStageNumber={STAGES.findIndex(s => s.stage === currentStage) + 1}
      />

      {/* Main Narrative Flow across 18 Scenes */}
      <main className="space-y-4">
        {/* Scene 01: Opening & Architectural Floorplan to Digital Pipeline */}
        <HeroScene
          onStartDemo={handleStartTour}
          onExploreOs={handleExploreOs}
        />

        {/* Scene 02: Why We Are Not Touching The Website */}
        <WebsiteCenterScene />

        {/* Scene 03: Local SEO Command Center (Search Demand Map) */}
        <LocalSeoScene />

        {/* Scene 04 & 12: Authority Engine (3,000 Sq Ft Sardarpura Showroom) */}
        <AuthorityEngineScene />

        {/* Scene 05 & 16: Google Maps & Local Presence Engine */}
        <GoogleMapsScene />

        {/* Scene 06: Online Presence Control Center */}
        <PresenceGridScene />

        {/* Scene 07: WhatsApp Lead Funnel Simulator */}
        <WhatsAppFunnelScene />

        {/* Scene 08: Lead Qualification System (Live 6-Stage CRM Pipeline) */}
        <CrmPipelineScene />

        {/* Scene 09 & 10: Follow-Up Automation & Missed Call Recovery */}
        <FollowUpScene />

        {/* Scene 11: Review & Reputation Engine */}
        <ReviewEngineScene />

        {/* Scene 13 & 14: AI Search (GEO/AEO) & Retargeting Engine */}
        <AiSearchScene />

        {/* Scene 15: One Dashboard (ROHAN DIGITAL GROWTH OS) */}
        <GrowthOsDashboard />

        {/* Scene 17: The 8 Systems (Floating Clickable Cards) */}
        <EightSystemsGrid onSelectSystem={(sys) => setSelectedSystem(sys)} />

        {/* Scene 18 & Grand Finale */}
        <ConclusionScene
          onOpenBooking={() => setIsBookingOpen(true)}
          onExploreTop={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      </main>

      {/* Persistent Bottom Timeline (01 DISCOVER → 08 SCALE) */}
      <TimelineNav
        currentStage={currentStage}
        onSelectStage={(stg) => setCurrentStage(stg)}
        progressPercent={progressPercent}
      />

      {/* 15-Minute Strategy Booking Modal */}
      <StrategyModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />

      {/* 4–6s Cinematic Micro-Demo Modal */}
      <MicroDemoModal
        system={selectedSystem}
        onClose={() => setSelectedSystem(null)}
      />
    </div>
  );
}
