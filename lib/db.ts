// In-memory storage for analytics (resets on deployment)
// For production, consider using Vercel KV, Redis, or a database

export interface StoredEvent {
  userId: string;
  sessionId: string;
  event: string;
  page?: string;
  element?: string;
  timestamp: number;
  duration?: number;
}

// In-memory storage
let events: StoredEvent[] = [];

export function saveEvent(event: StoredEvent) {
  try {
    events.push(event);
    // Keep only last 10000 events to prevent memory issues
    if (events.length > 10000) {
      events = events.slice(-10000);
    }
  } catch (error) {
    console.error('Error saving event:', error);
  }
}

export function getAnalytics() {
  try {

    // Calculate metrics
    const uniqueUsers = new Set(events.map(e => e.userId)).size;
    const totalPageViews = events.filter(e => e.event === 'pageview').length;
    
    // Calculate average session duration
    const sessions = events.filter(e => e.event === 'session_end');
    const avgDuration = sessions.length > 0
      ? sessions.reduce((sum, s) => sum + (s.duration || 0), 0) / sessions.length
      : 0;

    // Get click data
    const clicks = events.filter(e => e.event === 'click');
    const clicksByElement = clicks.reduce((acc, click) => {
      const el = click.element || 'unknown';
      acc[el] = (acc[el] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    // Get page views by page
    const pageViews = events.filter(e => e.event === 'pageview');
    const viewsByPage = pageViews.reduce((acc, view) => {
      const page = view.page || 'unknown';
      acc[page] = (acc[page] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    // Active users (last 5 minutes)
    const fiveMinutesAgo = Date.now() - 5 * 60 * 1000;
    const recentEvents = events.filter(e => e.timestamp > fiveMinutesAgo);
    const activeNow = new Set(recentEvents.map(e => e.userId)).size;

    // Daily stats (last 30 days)
    const thirtyDaysAgo = Date.now() - 30 * 24 * 60 * 60 * 1000;
    const recentPageViews = events.filter(e => 
      e.event === 'pageview' && e.timestamp > thirtyDaysAgo
    );

    const dailyStats = recentPageViews.reduce((acc, view) => {
      const date = new Date(view.timestamp).toISOString().split('T')[0];
      if (!acc[date]) {
        acc[date] = { users: new Set(), views: 0 };
      }
      acc[date].users.add(view.userId);
      acc[date].views++;
      return acc;
    }, {} as Record<string, { users: Set<string>, views: number }>);

    const chartData = Object.entries(dailyStats).map(([date, data]) => ({
      date,
      users: data.users.size,
      pageViews: data.views,
    })).sort((a, b) => a.date.localeCompare(b.date));

    return {
      uniqueUsers,
      totalPageViews,
      avgDuration: Math.round(avgDuration / 1000), // Convert to seconds
      activeNow,
      clicksByElement: Object.entries(clicksByElement)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10),
      viewsByPage: Object.entries(viewsByPage)
        .sort((a, b) => b[1] - a[1]),
      chartData,
    };
  } catch (error) {
    console.error('Error reading analytics:', error);
    return {
      uniqueUsers: 0,
      totalPageViews: 0,
      avgDuration: 0,
      activeNow: 0,
      clicksByElement: [],
      viewsByPage: [],
      chartData: [],
    };
  }
}
