'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { appFeatures } from '@/lib/content';

export default function AppPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="app" className="min-h-screen py-20 relative overflow-hidden bg-[#0a0a0a]">
      {/* Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-primary to-primary-cyan bg-clip-text text-transparent">Companion</span> App
          </h2>
          <p className="text-xl text-gray-400">
            Complete control at your fingertips. iOS & Android.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Left: Phone Mockup */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative mx-auto w-full max-w-sm">
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl" />
              
              {/* Phone Frame */}
              <div className="relative aspect-[9/19] rounded-[3rem] border-8 border-white/10 bg-black overflow-hidden">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-3xl z-10" />
                
                {/* Screen */}
                <div className="relative h-full bg-[#0a0a0a] flex flex-col">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center text-xs text-white/60 px-6 py-3">
                    <span className="font-semibold">9:41</span>
                    <div className="flex gap-1 items-center">
                      <svg className="w-4 h-3" fill="white" opacity="0.6"><rect width="16" height="10" rx="2"/><rect x="18" y="3" width="2" height="4" rx="1"/></svg>
                    </div>
                  </div>

                  {/* App Title */}
                  <div className="text-center py-2">
                    <h1 className="text-white font-bold text-base">StayAwake Band</h1>
                  </div>

                  {/* Content */}
                  <div className="flex-1 px-4 pb-16 overflow-hidden">
                    {/* Alertness Gauge Card */}
                    <div className="mb-3 p-4 rounded-2xl border border-primary-cyan/30 bg-gradient-to-br from-primary/5 to-primary-cyan/5">
                      <div className="text-center">
                        <div className="text-[10px] text-gray-400 mb-1 uppercase tracking-wide">Alertness Level:</div>
                        <div className="relative w-24 h-24 mx-auto mb-2">
                          <svg className="w-full h-full transform -rotate-90">
                            <circle cx="48" cy="48" r="42" stroke="#1a1a1a" strokeWidth="5" fill="none" />
                            <circle cx="48" cy="48" r="42" stroke="#00D9FF" strokeWidth="5" fill="none" 
                              strokeDasharray="264" strokeDashoffset="34" strokeLinecap="round" />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-3xl font-black text-primary-cyan">87%</span>
                          </div>
                        </div>
                        <div className="inline-block px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-[10px] font-bold uppercase tracking-wide">
                          Active
                        </div>
                      </div>
                    </div>

                    {/* Key Metrics Header */}
                    <h2 className="text-white font-bold text-xs mb-2">Key Metrics</h2>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-2 gap-2 mb-3">
                      <div className="p-3 rounded-xl bg-[#1a1a1a] border border-white/10">
                        <div className="text-xl mb-1">💙</div>
                        <div className="text-xl font-bold text-primary-cyan mb-0.5">72 <span className="text-xs font-normal">BPM</span></div>
                        <div className="text-[10px] text-gray-500">Normal</div>
                      </div>
                      <div className="p-3 rounded-xl bg-[#1a1a1a] border border-white/10">
                        <div className="text-xl mb-1">🌙</div>
                        <div className="text-xl font-bold text-blue-400 mb-0.5">7h 30m</div>
                        <div className="text-[10px] text-gray-500">Sleep: 94%</div>
                      </div>
                      <div className="p-3 rounded-xl bg-[#1a1a1a] border border-white/10">
                        <div className="text-xl mb-1">⚡</div>
                        <div className="text-sm font-bold text-orange-400 mb-0.5">Alert:</div>
                        <div className="text-xs text-orange-400">Medium</div>
                      </div>
                      <div className="p-3 rounded-xl bg-[#1a1a1a] border border-white/10">
                        <div className="text-xl mb-1">🔋</div>
                        <div className="text-xl font-bold text-green-400 mb-0.5">18h</div>
                        <div className="text-[10px] text-gray-500">remaining</div>
                      </div>
                    </div>

                    {/* Shock Settings Card */}
                    <div className="p-3 rounded-2xl bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/30">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-base">⚠️</span>
                        <h3 className="text-[11px] font-bold text-white uppercase tracking-wide">Shock Intensity</h3>
                      </div>
                      <div className="flex justify-between text-[9px] text-gray-400 mb-1.5 px-0.5">
                        <span>Off</span>
                        <span>Low</span>
                        <span className="text-primary-cyan font-bold">Med</span>
                        <span>High</span>
                        <span>Max</span>
                      </div>
                      <div className="h-1 bg-white/10 rounded-full mb-2 relative">
                        <div className="absolute left-0 top-0 h-full w-1/2 bg-gradient-to-r from-primary to-primary-cyan rounded-full" />
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-primary-cyan rounded-full border-2 border-white shadow-lg" />
                      </div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] text-gray-300">Auto-adjust</span>
                        <div className="w-8 h-4 bg-primary-cyan rounded-full relative">
                          <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full shadow" />
                        </div>
                      </div>
                      <div className="text-[9px] text-gray-500">Vibration → Sound → Shock</div>
                    </div>
                  </div>

                  {/* Bottom Navigation */}
                  <div className="absolute bottom-0 left-0 right-0 bg-[#0a0a0a] border-t border-white/10 px-6 py-3">
                    <div className="flex justify-around items-center">
                      <div className="flex flex-col items-center gap-1">
                        <svg className="w-5 h-5 text-primary-cyan" fill="currentColor" viewBox="0 0 20 20"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/></svg>
                        <span className="text-[9px] text-primary-cyan font-medium">Home</span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20"><path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/></svg>
                        <span className="text-[9px] text-gray-500">Stats</span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/></svg>
                        <span className="text-[9px] text-gray-500">Settings</span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/></svg>
                        <span className="text-[9px] text-gray-500">History</span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/></svg>
                        <span className="text-[9px] text-gray-500">Profile</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Features & Form */}
          <motion.div
            className="pt-8 lg:-ml-8"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Features */}
            <div className="space-y-5 mb-12">
              {appFeatures.map((feature, i) => (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-primary-cyan/20 border border-primary-cyan/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-primary-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="flex-1 pt-0.5">
                    <h3 className="text-lg font-bold text-white mb-1.5 leading-tight">{feature.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Email Signup */}
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
              <h3 className="text-lg font-bold mb-2">Get Launch Notifications</h3>
              <p className="text-sm text-gray-400 mb-4">
                Be first to know when the app launches
              </p>
              
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-black border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-cyan transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-primary to-primary-cyan rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  {isSubmitted ? '✓' : 'Notify'}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
