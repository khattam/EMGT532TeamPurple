'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { appFeatures } from '@/lib/content';

const iconMap: { [key: string]: string } = {
  settings: '⚙️',
  activity: '📊',
  bell: '🔔',
  cloud: '☁️',
};

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
    <section id="app" className="min-h-screen py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-bg-dark via-bg-dark-gray to-bg-dark" />
      </div>

      <div className="container mx-auto px-4" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            Companion <span className="gradient-text">App</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            Complete control at your fingertips. Available for iOS and Android.
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left: Phone Mockup */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative mx-auto w-full max-w-sm">
              {/* Phone Frame */}
              <div className="relative aspect-[9/19] glass rounded-[3rem] p-4 border-8 border-white/10">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-bg-dark rounded-b-3xl" />
                
                {/* Screen Content */}
                <div className="relative h-full bg-gradient-to-br from-primary/20 to-secondary/20 rounded-[2rem] overflow-hidden">
                  {/* App Screenshot Placeholder */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <div className="text-4xl mb-4">📱</div>
                    <p className="text-gray-400 text-xs">
                      IMAGE NEEDED: Mobile app interface screenshot showing:
                      - Dashboard with drowsiness metrics and graphs
                      - Device connection status indicator
                      - Shock intensity slider (5 levels)
                      - Real-time heart rate display
                      - Sleep analytics charts
                      Modern UI with dark theme, blue/cyan accents
                      Clean, minimalist design
                    </p>
                  </div>

                  {/* Animated Screen Transitions */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary-cyan to-accent"
                    animate={{ scaleX: [0, 1, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-8 -right-8 glass rounded-2xl p-4"
                animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="text-3xl">📊</div>
              </motion.div>

              <motion.div
                className="absolute -bottom-8 -left-8 glass rounded-2xl p-4"
                animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 3.5, repeat: Infinity }}
              >
                <div className="text-3xl">⚡</div>
              </motion.div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl -z-10" />
            </div>
          </motion.div>

          {/* Right: Features & Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* App Features */}
            <div className="space-y-6 mb-12">
              {appFeatures.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <motion.div
                    className="text-3xl"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                  >
                    {iconMap[feature.icon] || '✨'}
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* App Store Badges */}
            <motion.div
              className="flex flex-wrap gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
            >
              <motion.div
                className="glass rounded-xl px-6 py-3 flex items-center gap-3 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-2xl">🍎</span>
                <div>
                  <div className="text-xs text-gray-400">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </motion.div>

              <motion.div
                className="glass rounded-xl px-6 py-3 flex items-center gap-3 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-2xl">🤖</span>
                <div>
                  <div className="text-xs text-gray-400">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Email Signup Form */}
            <motion.div
              className="glass rounded-2xl p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1 }}
            >
              <h3 className="text-xl font-bold mb-2">Get Launch Notifications</h3>
              <p className="text-gray-400 text-sm mb-4">
                Be the first to know when the app launches
              </p>
              
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary-cyan transition-colors"
                  required
                />
                <motion.button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-primary to-primary-cyan rounded-xl text-white font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isSubmitted ? '✓' : 'Notify Me'}
                </motion.button>
              </form>

              {isSubmitted && (
                <motion.p
                  className="text-accent text-sm mt-3"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Thanks! We'll notify you at launch.
                </motion.p>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
