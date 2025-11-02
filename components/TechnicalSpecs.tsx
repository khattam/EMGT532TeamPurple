'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { technicalSpecs } from '@/lib/content';

export default function TechnicalSpecs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const categories = Array.from(new Set(technicalSpecs.map(spec => spec.category)));

  return (
    <section id="specs" className="min-h-screen py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary-pink/10 rounded-full blur-3xl" />
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
            Technical <span className="gradient-text">Specifications</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            Engineered for performance. Built to last.
          </motion.p>
        </motion.div>

        {/* Specs Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {technicalSpecs.map((spec, index) => {
            const isExpanded = expandedId === spec.id;
            
            return (
              <motion.div
                key={spec.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * index }}
              >
                <motion.div
                  className="glass rounded-2xl overflow-hidden cursor-pointer"
                  whileHover={{ scale: 1.01 }}
                  onClick={() => setExpandedId(isExpanded ? null : spec.id)}
                >
                  {/* Header */}
                  <div className="p-6 flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-3 py-1 bg-primary/20 text-primary-cyan text-xs rounded-full">
                          {spec.category}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {spec.title}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {spec.description}
                      </p>
                    </div>
                    
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-primary-cyan text-3xl ml-4"
                    >
                      ↓
                    </motion.div>
                  </div>

                  {/* Expandable Content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 border-t border-white/10 pt-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {spec.specs.map((item, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex justify-between items-center p-4 bg-white/5 rounded-xl"
                              >
                                <span className="text-gray-400">{item.label}</span>
                                <span className="text-white font-semibold">{item.value}</span>
                              </motion.div>
                            ))}
                          </div>

                          {/* Progress Bar for Battery/Durability */}
                          {(spec.id === 'battery' || spec.id === 'wristband') && (
                            <motion.div
                              className="mt-6"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.3 }}
                            >
                              <div className="flex justify-between text-sm mb-2">
                                <span className="text-gray-400">
                                  {spec.id === 'battery' ? 'Battery Performance' : 'Durability Rating'}
                                </span>
                                <span className="text-primary-cyan font-semibold">
                                  {spec.id === 'battery' ? '95%' : '3+ Years'}
                                </span>
                              </div>
                              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                <motion.div
                                  className="h-full bg-gradient-to-r from-primary to-primary-cyan"
                                  initial={{ width: 0 }}
                                  animate={{ width: '95%' }}
                                  transition={{ duration: 1, delay: 0.5 }}
                                />
                              </div>
                            </motion.div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Category Pills */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
        >
          {categories.map((category, i) => (
            <motion.div
              key={category}
              className="px-6 py-3 glass rounded-full text-sm"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1 + i * 0.1 }}
            >
              {category}
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2 }}
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-primary to-primary-cyan rounded-full text-white font-semibold text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Full Specifications
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
