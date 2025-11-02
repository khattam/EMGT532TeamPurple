// Content Data Models
export interface DesignObjective {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface FunctionalRequirement {
  id: string;
  title: string;
  description: string;
  details: string[];
  image: string;
}

export interface TechnicalSpec {
  id: string;
  category: string;
  title: string;
  description: string;
  specs: { label: string; value: string }[];
}

export interface AppFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

// Analytics Data Models
export interface AnalyticsEvent {
  id: string;
  timestamp: number;
  sessionId: string;
  eventType: 'pageview' | 'scroll' | 'click' | 'bounce' | 'exit';
  data: {
    timeOnPage?: number;
    scrollDepth?: number;
    ctaId?: string;
    deviceType: 'mobile' | 'tablet' | 'desktop';
    viewport: { width: number; height: number };
    userAgent: string;
    referrer?: string;
  };
}

export interface StoredEvent {
  id: string;
  sessionId: string;
  timestamp: number;
  eventType: string;
  timeOnPage?: number;
  scrollDepth?: number;
  ctaId?: string;
  deviceType: string;
  viewport: { width: number; height: number };
  userAgent: string;
  referrer?: string;
  bounced: boolean;
}

export interface Session {
  id: string;
  startTime: number;
  endTime?: number;
  events: string[];
  converted: boolean;
}

export interface DailyAggregate {
  date: string;
  totalVisits: number;
  totalBounces: number;
  avgTimeOnPage: number;
  scrollDepthDistribution: { [key: string]: number };
  ctaClicks: { [ctaId: string]: number };
  deviceBreakdown: { mobile: number; tablet: number; desktop: number };
  conversions: number;
}
