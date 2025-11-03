'use client';

import { useState } from 'react';

export default function MetricsPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

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
          
          <p className="text-xs text-gray-500 text-center mt-6">
            Password: stayawake2024
          </p>
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
          {/* Instructions */}
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
            <h2 className="text-xl font-bold text-white mb-4">📊 View Full Analytics</h2>
            <p className="text-gray-400 mb-4">
              To access detailed analytics and metrics:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-300">
              <li>Go to your Vercel dashboard</li>
              <li>Select your project: <span className="text-primary-cyan">stayawakemkhattar</span></li>
              <li>Click on the "Analytics" tab</li>
              <li>View real-time visitor data, page views, and performance metrics</li>
            </ol>
            <a
              href="https://vercel.com/dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-6 py-3 bg-gradient-to-r from-primary to-primary-cyan rounded-lg font-semibold text-white hover:opacity-90 transition-opacity"
            >
              Open Vercel Dashboard →
            </a>
          </div>

          {/* Quick Stats Placeholder */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
              <div className="text-sm text-gray-400 mb-2">Total Visitors</div>
              <div className="text-3xl font-bold text-primary-cyan">-</div>
              <div className="text-xs text-gray-500 mt-2">Enable analytics in Vercel</div>
            </div>
            
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
              <div className="text-sm text-gray-400 mb-2">Page Views</div>
              <div className="text-3xl font-bold text-primary-cyan">-</div>
              <div className="text-xs text-gray-500 mt-2">Enable analytics in Vercel</div>
            </div>
            
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
              <div className="text-sm text-gray-400 mb-2">Avg. Performance</div>
              <div className="text-3xl font-bold text-primary-cyan">-</div>
              <div className="text-xs text-gray-500 mt-2">Enable Speed Insights</div>
            </div>
          </div>

          {/* Enable Analytics Instructions */}
          <div className="p-6 rounded-2xl border border-primary/20 bg-primary/5">
            <h3 className="text-lg font-bold text-white mb-3">🚀 Enable Analytics</h3>
            <p className="text-gray-300 mb-3">
              To start collecting data:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-300 text-sm">
              <li>Go to your Vercel project settings</li>
              <li>Navigate to "Analytics" section</li>
              <li>Click "Enable Analytics"</li>
              <li>Data will start appearing within 24 hours</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
