import { KeywordIntent, BenchmarkBusiness, CrmLead, SystemItem } from '../types.ts';

export const JODHPUR_KEYWORDS: KeywordIntent[] = [
  {
    query: 'interior designer in Jodhpur',
    area: 'All Jodhpur',
    volumeLabel: 'High Local Intent',
    intent: 'General interior firm discovery & portfolio review',
    targetPage: '/interiors-jodhpur (Primary City Pillar)',
    projectExample: 'Luxury Villa & Commercial Showcases',
    ctaAction: 'WhatsApp Direct Portfolio Dispatch'
  },
  {
    query: 'home interior designer Jodhpur',
    area: 'Residential',
    volumeLabel: 'High Value',
    intent: '3BHK/4BHK Full Home Interior Execution',
    targetPage: '/residential/luxury-homes-jodhpur',
    projectExample: 'Bespoke Turnkey Residential Residence',
    ctaAction: 'Instant Material & Estimate Consultation'
  },
  {
    query: 'luxury interior designer Jodhpur',
    area: 'Heritage & Prime',
    volumeLabel: 'High Ticket',
    intent: 'Architectural craftsmanship, premium marble & teakwood millwork',
    targetPage: '/luxury/architectural-residences',
    projectExample: 'Palatial Private Residence, Ratanada',
    ctaAction: 'Schedule In-Person Principal Designer Review'
  },
  {
    query: 'commercial interior designer Jodhpur',
    area: 'Business Hubs',
    volumeLabel: 'Commercial Intent',
    intent: 'Retail, corporate office, boutique showroom fit-out',
    targetPage: '/commercial/showrooms-and-studios',
    projectExample: '3,000 Sq Ft Showroom, Sardarpura',
    ctaAction: 'Download Commercial Capability Deck'
  },
  {
    query: 'interior designer near Sardarpura',
    area: 'Sardarpura',
    volumeLabel: 'Hyper-Local Intent',
    intent: 'Proximity-driven client seeking reputable local studio',
    targetPage: '/areas/sardarpura-interior-design',
    projectExample: 'Sardarpura Commercial & Residential Vignettes',
    ctaAction: 'Direct Studio Visit Navigation via WhatsApp'
  },
  {
    query: 'home interiors Pal Road Jodhpur',
    area: 'Pal Road',
    volumeLabel: 'New Development',
    intent: 'New villa & modern apartment interior turnkey solutions',
    targetPage: '/areas/pal-road-home-interiors',
    projectExample: 'Contemporary Pal Road Duplex Execution',
    ctaAction: 'Request On-Site Layout Assessment'
  },
  {
    query: 'turnkey interior design Jodhpur',
    area: 'Comprehensive',
    volumeLabel: 'High Intent',
    intent: 'End-to-end design, procurement, fabrication & handover',
    targetPage: '/services/turnkey-interior-solutions',
    projectExample: 'Complete Shell-to-Styling Handover Project',
    ctaAction: 'Review Turnkey Scope & Milestones'
  },
  {
    query: 'modular kitchen designer Jodhpur',
    area: 'Specialized',
    volumeLabel: 'Specific Need',
    intent: 'German hardware, bespoke acrylic/lacquered cabinetry',
    targetPage: '/services/bespoke-kitchen-design',
    projectExample: 'Island Kitchen with Quartz Countertops',
    ctaAction: 'Book Kitchen 3D Layout Consultation'
  },
  {
    query: 'office interior designer Jodhpur',
    area: 'Corporate',
    volumeLabel: 'B2B Priority',
    intent: 'Ergonomic workspace, executive cabins, acoustic planning',
    targetPage: '/commercial/executive-offices',
    projectExample: 'Corporate Head Office, Light Industrial Area',
    ctaAction: 'Request Space Planning Draft'
  },
  {
    query: 'showroom interior designer Jodhpur',
    area: 'Retail',
    volumeLabel: 'Showcase Project',
    intent: 'Brand storytelling, curated display fixtures, traffic flow',
    targetPage: '/commercial/retail-experience-centres',
    projectExample: '3,000 Sq Ft Flagship Showroom, Sardarpura',
    ctaAction: 'WhatsApp Video Walkthrough Dispatch'
  }
];

export const JODHPUR_BENCHMARKS: BenchmarkBusiness[] = [
  {
    name: 'The Rohan Interiors',
    locality: 'Jodhpur, Rajasthan',
    reviewCount: 42,
    rating: 4.9,
    highlight: 'Personalized craftsmanship & turnkey execution focus'
  },
  {
    name: 'High Rise Architects & Interiors',
    locality: 'Sardarpura, Jodhpur',
    reviewCount: 88,
    rating: 4.8,
    highlight: 'Architectural scale & civic planning benchmark'
  },
  {
    name: 'Notion Design Associates',
    locality: 'Pal Road, Jodhpur',
    reviewCount: 64,
    rating: 4.7,
    highlight: 'Contemporary residential studio presence'
  },
  {
    name: 'Vinayak Decor',
    locality: 'Station Road, Jodhpur',
    reviewCount: 110,
    rating: 4.6,
    highlight: 'Retail materials & interior furnishing footprint'
  },
  {
    name: 'Architect\'s ERA',
    locality: 'Ratanada, Jodhpur',
    reviewCount: 35,
    rating: 4.8,
    highlight: 'Boutique architectural practice'
  }
];

export const INITIAL_CRM_LEADS: CrmLead[] = [
  {
    id: 'lead-1',
    name: 'Vikram S. Rathore',
    projectType: '3BHK Luxury Residence',
    location: 'Pal Road, Jodhpur',
    budgetRange: '₹35L – ₹48L',
    timeline: '2 months',
    requirement: 'Turnkey Living, Master Suite & Modular Kitchen',
    stage: 'qualified',
    score: 88,
    receivedAt: '12m ago'
  },
  {
    id: 'lead-2',
    name: 'Boutique Jewellers',
    projectType: 'Retail Showroom (2,400 sq ft)',
    location: 'Sardarpura 9th C Road',
    budgetRange: '₹55L – ₹70L',
    timeline: 'Ready to start',
    requirement: 'Security display fixtures, luxury ambient lighting',
    stage: 'consultation',
    score: 94,
    receivedAt: '45m ago'
  },
  {
    id: 'lead-3',
    name: 'Dr. Ananya Mathur',
    projectType: 'Bespoke Penthouse Villa',
    location: 'Ratanada, Jodhpur',
    budgetRange: '₹40L – ₹60L',
    timeline: '1–3 months',
    requirement: 'Full interior architecture & custom furniture styling',
    stage: 'site_visit',
    score: 82,
    receivedAt: '2h ago'
  },
  {
    id: 'lead-4',
    name: 'Sanjay Jain',
    projectType: 'Duplex Renovation',
    location: 'Pratap Nagar, Jodhpur',
    budgetRange: '₹22L – ₹30L',
    timeline: 'Planning',
    requirement: 'Living area revamp, space planning & lighting',
    stage: 'new',
    score: 74,
    receivedAt: '3h ago'
  },
  {
    id: 'lead-5',
    name: 'Mehta Textiles Experience Studio',
    projectType: 'Commercial Showroom',
    location: 'Industrial Area Phase 2',
    budgetRange: '₹45L – ₹65L',
    timeline: 'Immediate',
    requirement: 'Fabric display gallery & executive lounge',
    stage: 'proposal',
    score: 91,
    receivedAt: '1d ago'
  },
  {
    id: 'lead-6',
    name: 'Col. K.P. Singh',
    projectType: 'Independent Villa Interior',
    location: 'Shastri Nagar, Jodhpur',
    budgetRange: '₹50L – ₹75L',
    timeline: 'Completed Agreement',
    requirement: 'Full turnkey execution & bespoke woodwork',
    stage: 'won',
    score: 96,
    receivedAt: '3d ago'
  }
];

export const THE_8_SYSTEMS: SystemItem[] = [
  {
    id: 1,
    title: 'SEO Growth Engine',
    subtitle: 'Local SEO + Technical SEO + Project Pages + AI Discovery',
    description: 'Build hyper-targeted pages around Jodhpur localities (Sardarpura, Pal Road, Ratanada) and client search intents instead of relying on a single homepage.',
    highlights: ['Hyper-local neighborhood landing nodes', 'Structured schema markup for architects', 'Keyword clusters mapped to real portfolio work', 'AEO entity readiness for AI search assistants'],
    metricLabel: 'Search Keyword Coverage',
    metricValue: '35+ High Intent Nodes',
    microDemoType: 'seo'
  },
  {
    id: 2,
    title: 'Conversion Funnels',
    subtitle: 'Service-Specific Inbound Pathways',
    description: 'Transform passive visitors into high-intent enquiries with dedicated paths for residential villas, turnkey interiors, and luxury retail showrooms.',
    highlights: ['Visual project proof above the fold', 'Frictionless WhatsApp lead gateways', 'Zero complex multi-page PDF barriers', 'Interactive space planning questionnaire'],
    metricLabel: 'Enquiry Intent Match',
    metricValue: '100% Segmented',
    microDemoType: 'funnel'
  },
  {
    id: 3,
    title: 'Online Presence Control',
    subtitle: 'Unified Local Entity & Brand Synchronisation',
    description: 'Synchronise Google Business Profile, Instagram, Maps, Justdial, and directories with identical phone, address, portfolio photos, and service taxonomies.',
    highlights: ['Consistent NAP citations across Indian directories', 'Weekly Google Business updates featuring real projects', 'High-resolution geotagged project photos', 'Uniform luxury brand voice'],
    metricLabel: 'Entity Consistency',
    metricValue: 'Unified Across 8 Channels',
    microDemoType: 'presence'
  },
  {
    id: 4,
    title: 'WhatsApp Sales Automation',
    subtitle: 'Sub-60-Second Instant Qualification Funnel',
    description: 'When high-net-worth clients message on WhatsApp, greet them instantly, collect project type, square footage, stage, and schedule design calls automatically.',
    highlights: ['Instant warm greeting 24/7', 'Self-service qualification options (Home, Office, Showroom)', 'Direct CRM synchronization with zero manual entry', 'Calendar booking link for site visits'],
    metricLabel: 'Response Latency',
    metricValue: '< 30 Seconds',
    microDemoType: 'whatsapp'
  },
  {
    id: 5,
    title: 'Lead CRM & Pipeline Management',
    subtitle: 'Zero Enquiries Lost in Personal Inboxes',
    description: 'A structured visual pipeline tracking leads from first message to signed design contract. Every team member sees client stage, budget, and follow-up notes.',
    highlights: ['Kanban board organized by interior stages', 'Automated qualification scores (1–100)', 'Milestone notifications for design consultations', 'Centralized client project history'],
    metricLabel: 'Pipeline Transparency',
    metricValue: 'Full Visibility',
    microDemoType: 'crm'
  },
  {
    id: 6,
    title: 'Review & Referral Engine',
    subtitle: 'Systematic Reputation Building at Handover',
    description: 'Ask for Google reviews at the exact moment of maximum client delight—right after flawless project completion and styling handover.',
    highlights: ['Automated handover celebratory message', 'Single-tap direct Google review link', 'Video testimonial prompts for luxury villas', 'Private feedback loop for operational refinement'],
    metricLabel: 'Review Request Cadence',
    metricValue: 'Triggered at Handover',
    microDemoType: 'review'
  },
  {
    id: 7,
    title: 'Project Content Engine',
    subtitle: 'Turn 1 Finished Project into 8+ Marketing Assets',
    description: 'Extract maximum digital leverage from completed work, such as the 3,000 sq ft Sardarpura showroom, transforming one project into reels, articles, case studies, and carousels.',
    highlights: ['Architectural case study writeups', 'Instagram educational carousel scripts', 'Google Business photo posts with location context', 'Direct WhatsApp shareable portfolio PDF'],
    metricLabel: 'Content Multiplier',
    metricValue: '1 Project → 8 Digital Assets',
    microDemoType: 'content'
  },
  {
    id: 8,
    title: 'Missed-Call & Follow-Up Automation',
    subtitle: 'Salvaging High-Value Opportunities Instantly',
    description: 'If a client calls while the design team is on a construction site, an automated WhatsApp instantly engages them, captures requirements, and notifies the team.',
    highlights: ['Instant fallback SMS / WhatsApp within 45s', 'Polite requirement gathering while memory is fresh', 'Automated 1h, 24h, 3d, 7d reminder sequences', 'Executive notification ping with lead details'],
    metricLabel: 'Call Recovery Rate',
    metricValue: 'Instant Engagement',
    microDemoType: 'missedcall'
  }
];

export const FOLLOWUP_TIMELINE = [
  {
    time: '0 MIN',
    trigger: 'Instant Inbound Confirmation',
    channel: 'WhatsApp Notification',
    message: 'Thank you for reaching out to The Rohan Interiors. Our design studio has received your project details for the 3BHK Residence on Pal Road. Here is our curated Lookbook while a lead designer reviews your space planning request.'
  },
  {
    time: '1 HOUR',
    trigger: 'Designer Touchpoint',
    channel: 'Personalized Dispatch',
    message: 'Hi Vikram, this is Rohan from the studio. We have completed multiple turnkey residential projects near Pal Road and would love to walk you through sample layouts. Are you free tomorrow at 4 PM for a brief design discussion?'
  },
  {
    time: '24 HOURS',
    trigger: 'Inspiration & Space Assessment',
    channel: 'Portfolio Context',
    message: 'Sharing a quick 3D walkthrough of a recently completed contemporary apartment with custom fluted panelling similar to your aesthetic preferences.'
  },
  {
    time: '3 DAYS',
    trigger: 'Commercial / Material Proof',
    channel: 'Material Transparency',
    message: 'Quick note on material selection: we ensure 100% calibrated marine-grade plywood and certified hardware for all our custom millwork in Jodhpur.'
  },
  {
    time: '7 DAYS',
    trigger: 'Site Visit Confirmation',
    channel: 'Direct Invitation',
    message: 'We are conducting site surveys in Pal Road this Thursday. Would you like our principal designer to drop by your site for a 20-minute physical space review?'
  },
  {
    time: '30 DAYS',
    trigger: 'Long-Term Studio Journal',
    channel: 'Nurture Stream',
    message: 'Monthly Studio Dispatch: 5 Architectural Trends shaping modern Jodhpur homes this season.'
  }
];
