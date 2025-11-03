'use client';

import { useState, useEffect } from 'react';

interface AnalyticsData {
  uniqueUsers: number;
  totalPageViews: number;
  avgDuration: number;
  activeNow: number;
  clicksByElement: Array<[string, number]>;
  viewsByPage: Array<[string, number]>;
  chartData: Array<{
    date: string;
    users: number;
    pageViews: number;
  }>;
}

export default function MetricsPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      fetchAnalytics();
    }
  }, [isAuthenticated]);

  const fetchAnalytics = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/analytics');
      if (response.ok) {
        const data = await response.json();
        setAnalytics(data);
      }
    } catch (err) {
      console.error('Failed to fetch analytics:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple password check - you can change this password
    if (password === 'stayawake2024') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect password');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-6">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Analytics Dashboard</h1>
            <p className="text-gray-400">Enter password to view metrics</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full px-4 py-3 bg-black border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-cyan transition-colors"
              />
              {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
            </div>
            
            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-primary to-primary-cyan rounded-lg font-semibold text-white hover:opacity-90 transition-opacity"
            >
              Access Dashboard
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-white">Analytics Dashboard</h1>
          <button
            onClick={() => setIsAuthenticated(false)}
            className="px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            Logout
          </button>
        </div>

        <div className="space-y-6">
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-cyan"></div>
              <p className="text-gray-400 mt-4">Loading analytics...</p>
            </div>
          ) : analytics ? (
            <>
              {/* Real-time Stats */}
              <div className="grid md:grid-cols-4 gap-6">
                <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
                  <div className="text-sm text-gray-400 mb-2">Active Now</div>
                  <div className="text-3xl font-bold text-green-400">{analytics.activeNow}</div>
                  <div className="text-xs text-gray-500 mt-2">Live visitors</div>
                </div>

                <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
                  <div className="text-sm text-gray-400 mb-2">Unique Visitors</div>
                  <div className="text-3xl font-bold text-primary-cyan">{analytics.uniqueUsers.toLocaleString()}</div>
                  <div className="text-xs text-gray-500 mt-2">All time</div>
                </div>
                
                <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
                  <div className="text-sm text-gray-400 mb-2">Page Views</div>
                  <div className="text-3xl font-bold text-primary-cyan">{analytics.totalPageViews.toLocaleString()}</div>
                  <div className="text-xs text-gray-500 mt-2">All time</div>
                </div>
                
                <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
                  <div className="text-sm text-gray-400 mb-2">Avg. Session</div>
                  <div className="text-3xl font-bold text-primary-cyan">{Math.floor(analytics.avgDuration / 60)}m</div>
                  <div className="text-xs text-gray-500 mt-2">{analytics.avgDuration % 60}s average</div>
                </div>
              </div>

              {/* Top Pages */}
              <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
                <h2 className="text-xl font-bold text-white mb-4">📄 Top Pages</h2>
                <div className="space-y-2">
                  {analytics.viewsByPage.map(([page, views], idx) => (
                    <div key={idx} className="flex items-center justify-between py-2 border-b border-white/5">
                      <span className="text-gray-300">{page}</span>
                      <span className="text-primary-cyan font-semibold">{views} views</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Top Clicks */}
              <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
                <h2 className="text-xl font-bold text-white mb-4">🖱️ Most Clicked Elements</h2>
                <div className="space-y-2">
                  {analytics.clicksByElement.map(([element, clicks], idx) => (
                    <div key={idx} className="flex items-center justify-between py-2 border-b border-white/5">
                      <span className="text-gray-300 text-sm font-mono truncate">{element}</span>
                      <span className="text-primary-cyan font-semibold">{clicks} clicks</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Chart Data */}
              <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
                <h2 className="text-xl font-bold text-white mb-4">📈 Daily Traffic (Last 30 Days)</h2>
                <div className="space-y-2 max-h-96 overflow-y-auto">
                  {analytics.chartData.slice().reverse().map((day, idx) => (
                    <div key={idx} className="flex items-center justify-between py-2 border-b border-white/5">
                      <span className="text-gray-400 text-sm">{new Date(day.date).toLocaleDateString()}</span>
                      <div className="flex gap-4">
                        <span className="text-primary-cyan">{day.users} users</span>
                        <span className="text-gray-500">{day.pageViews} views</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={fetchAnalytics}
                className="px-6 py-3 bg-gradient-to-r from-primary to-primary-cyan rounded-lg font-semibold text-white hover:opacity-90 transition-opacity"
              >
                Refresh Data
              </button>
            </>
          ) : (
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
              <h2 className="text-xl font-bold text-white mb-4">⚠️ Analytics Not Configured</h2>
              <p className="text-gray-400">
                Please configure the Google Analytics API credentials to view data.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
