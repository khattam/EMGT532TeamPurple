'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';

const features = [
  {
    id: 'sleepiness-detection',
    title: 'Drowsiness Detection',
    description: 'Advanced AI-powered sensors monitor your alertness levels in real-time',
    image: '/images/DrowsinessDetected.png',
    details: [
      'Multi-sensor fusion technology',
      'Real-time biometric analysis',
      'Predictive drowsiness alerts',
      'Adaptive learning algorithms'
    ]
  },
  {
    id: 'heart-rate',
    title: 'Heart Rate Monitoring',
    description: 'Continuous heart rate tracking with medical-grade accuracy',
    image: '/images/newH.png',
    details: [
      '24/7 continuous monitoring',
      'Abnormal heart rate alerts',
      'Heart rate variability analysis',
      'Stress level detection'
    ]
  },
  {
    id: 'sleep-tracking',
    title: 'Sleep Tracking',
    description: 'Comprehensive sleep analysis to optimize your rest and recovery',
    image: '/images/SleepTracking.png',
    details: [
      'Sleep stage detection (REM, deep, light)',
      'Sleep quality scoring',
      'Smart wake-up alarms',
      'Sleep pattern insights'
    ]
  },
  {
    id: 'charging',
    title: 'Fast Charging',
    description: 'Quick and convenient charging for all-day use',
    image: '/images/Charging 169.png',
    details: [
      'USB-C fast charging',
      'Full charge in under 2 hours',
      '24+ hour battery life',
      'Low battery alerts'
    ]
  }
];

export default function FunctionalRequirements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="features" className="min-h-screen py-32 relative overflow-hidden bg-[#0a0a0a]">
      {/* Subtle Grid */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(#0066FF 1px, transparent 1px), linear-gradient(90deg, #0066FF 1px, transparent 1px)',
            backgroundSize: '100px 100px',
          }}
        />
      </div>

      <div className="container mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-20 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-primary to-primary-cyan bg-clip-text text-transparent">Key</span> Features
          </h2>
          <p className="text-xl text-gray-400">
            Advanced technology designed to keep you alert and safe
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              <div
                className="group relative h-full rounded-2xl border border-white/20 bg-gradient-to-br from-white/[0.08] to-transparent backdrop-blur-sm overflow-hidden cursor-pointer hover:border-primary/60 transition-all"
                onClick={() => setExpandedId(expandedId === feature.id ? null : feature.id)}
              >
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary-cyan/0 group-hover:from-primary/5 group-hover:to-primary-cyan/5 transition-all" />

                {/* Content */}
                <div className="relative p-6">
                  {/* Feature Image */}
                  <div className="relative w-full aspect-video mb-6 rounded-xl overflow-hidden bg-black/40">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-400 mb-4">{feature.description}</p>

                  {/* Expand Indicator */}
                  <div className="flex items-center gap-2 text-sm text-primary-cyan">
                    <span>Learn more</span>
                    <motion.svg
                      className="w-4 h-4"
                      animate={{ rotate: expandedId === feature.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </div>

                  {/* Expandable Details */}
                  <AnimatePresence>
                    {expandedId === feature.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-6 mt-6 border-t border-white/10">
                          <ul className="space-y-3">
                            {feature.details.map((detail, i) => (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-start gap-3"
                              >
                                <div className="w-1.5 h-1.5 rounded-full bg-primary-cyan mt-2" />
                                <span className="text-gray-300">{detail}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          {[
            { value: '98%', label: 'Detection Accuracy' },
            { value: '<100ms', label: 'Response Time' },
            { value: '6+', label: 'Sensor Types' },
            { value: '100%', label: 'Customizable' },
          ].map((stat, i) => (
            <div key={i} className="text-center p-6 rounded-xl border border-white/10 bg-white/5">
              <div className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-cyan bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
