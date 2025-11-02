'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { functionalRequirements } from '@/lib/content';

const iconMap: { [key: string]: string } = {
  'sleepiness-detection': '👁️',
  'shock-mechanism': '⚡',
  display: '📱',
  charging: '🔋',
};

export default function FunctionalRequirements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="features" className="min-h-screen py-24 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(0, 102, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 102, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
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
            Key <span className="gradient-text">Features</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            Cutting-edge technology that keeps you alert and in control
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {functionalRequirements.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 * index, duration: 0.6 }}
            >
              <motion.div
                className="glass rounded-3xl overflow-hidden cursor-pointer h-full"
                whileHover={{ scale: 1.02 }}
                onClick={() => setExpandedId(expandedId === feature.id ? null : feature.id)}
              >
                {/* Image Placeholder */}
                <div className="relative h-64 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="text-6xl mb-4">{iconMap[feature.id] || '✨'}</div>
                    <p className="text-gray-400 text-xs">
                      IMAGE NEEDED: {feature.id === 'sleepiness-detection' && 'Close-up of wearable device sensors glowing blue, detecting heart rate. Futuristic medical visualization overlay showing biometric data. Dark background with blue accent lighting.'}
                      {feature.id === 'shock-mechanism' && 'Wearable device with visible electrical arc effect (safe, controlled). Progressive intensity visualization with 5 levels shown as glowing bars. Dynamic, energetic composition.'}
                      {feature.id === 'display' && 'Detailed view of the OLED display showing colorful interface. Touch interaction visualization. Crisp, vibrant colors against dark device body.'}
                      {feature.id === 'charging' && 'USB-C charging cable connecting to device. Glowing battery indicator. Clean, modern product shot with soft lighting.'}
                    </p>
                  </div>
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-white">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400">
                        {feature.description}
                      </p>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedId === feature.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-primary-cyan text-2xl"
                    >
                      ↓
                    </motion.div>
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
                        <div className="pt-4 border-t border-white/10">
                          <ul className="space-y-3">
                            {feature.details.map((detail, i) => (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-start gap-3"
                              >
                                <span className="text-primary-cyan mt-1">✓</span>
                                <span className="text-gray-300">{detail}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
        >
          {[
            { label: 'Detection Accuracy', value: '98%' },
            { label: 'Response Time', value: '<100ms' },
            { label: 'Sensor Types', value: '6+' },
            { label: 'Customizable', value: '100%' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="glass rounded-2xl p-6 text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
