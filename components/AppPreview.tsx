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
    <section id="app" className="min-h-screen py-32 relative overflow-hidden bg-[#0a0a0a]">
      {/* Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-20 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-primary to-primary-cyan bg-clip-text text-transparent">Companion</span> App
          </h2>
          <p className="text-xl text-gray-400">
            Complete control at your fingertips. iOS & Android.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
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
                <div className="relative h-full bg-gradient-to-br from-primary/10 to-secondary/10 p-6">
                  <div className="text-center mt-8">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/30 to-primary-cyan/30 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full border-4 border-primary" />
                    </div>
                    <p className="text-xs text-gray-500">
                      App interface: Dashboard with metrics, device controls, 
                      shock intensity slider, real-time monitoring
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Features & Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Features */}
            <div className="space-y-6 mb-12">
              {appFeatures.map((feature, i) => (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-primary-cyan/20 flex items-center justify-center flex-shrink-0">
                    <div className="w-5 h-5 rounded bg-gradient-to-br from-primary to-primary-cyan" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">{feature.title}</h3>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
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
