export type TimelineStage = 
  | '01 DISCOVER'
  | '02 SEARCH'
  | '03 CAPTURE'
  | '04 QUALIFY'
  | '05 FOLLOW UP'
  | '06 CONVERT'
  | '07 RETAIN'
  | '08 SCALE';

export interface KeywordIntent {
  query: string;
  area: string;
  volumeLabel: string;
  intent: string;
  targetPage: string;
  projectExample: string;
  ctaAction: string;
}

export interface BenchmarkBusiness {
  name: string;
  locality: string;
  reviewCount: number;
  rating: number;
  highlight: string;
}

export interface CrmLead {
  id: string;
  name: string;
  projectType: string;
  location: string;
  budgetRange: string;
  timeline: string;
  requirement: string;
  stage: 'new' | 'qualified' | 'consultation' | 'site_visit' | 'proposal' | 'won';
  score: number;
  receivedAt: string;
}

export interface SystemItem {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  metricLabel: string;
  metricValue: string;
  microDemoType: string;
}
