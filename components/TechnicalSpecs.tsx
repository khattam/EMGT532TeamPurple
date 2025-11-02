'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { technicalSpecs } from '@/lib/content';

export default function TechnicalSpecs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="specs" className="min-h-screen py-32 relative overflow-hidden bg-black">
      {/* Gradient Glow */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-20 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Technical <span className="bg-gradient-to-r from-primary to-primary-cyan bg-clip-text text-transparent">Specifications</span>
          </h2>
          <p className="text-xl text-gray-400">
            Engineered for performance. Built to last.
          </p>
        </motion.div>

        {/* Specs Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {technicalSpecs.map((spec, index) => {
            const isExpanded = expandedId === spec.id;

            return (
              <motion.div
                key={spec.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * index }}
              >
                <div
                  className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm overflow-hidden cursor-pointer hover:border-primary/50 transition-all"
                  onClick={() => setExpandedId(isExpanded ? null : spec.id)}
                >
                  {/* Header */}
                  <div className="p-6 flex items-center justify-between">
                    <div className="flex-1">
                      <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-primary/20 to-primary-cyan/20 text-primary-cyan text-xs font-semibold mb-3">
                        {spec.category}
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{spec.title}</h3>
                      <p className="text-gray-400 text-sm">{spec.description}</p>
                    </div>

                    <motion.svg
                      className="w-6 h-6 text-primary-cyan ml-4 flex-shrink-0"
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </motion.svg>
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
                          <div className="grid md:grid-cols-2 gap-4">
                            {spec.specs.map((item, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex justify-between items-center p-4 rounded-lg bg-white/5 border border-white/5"
                              >
                                <span className="text-gray-400 text-sm">{item.label}</span>
                                <span className="font-semibold">{item.value}</span>
                              </motion.div>
                            ))}
                          </div>

                          {/* Progress Bar for Battery/Durability */}
                          {(spec.id === 'battery' || spec.id === 'wristband') && (
                            <div className="mt-6">
                              <div className="flex justify-between text-sm mb-2">
                                <span className="text-gray-400">
                                  {spec.id === 'battery' ? 'Performance Rating' : 'Durability Rating'}
                                </span>
                                <span className="text-primary-cyan font-semibold">95%</span>
                              </div>
                              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                <motion.div
                                  className="h-full bg-gradient-to-r from-primary to-primary-cyan"
                                  initial={{ width: 0 }}
                                  animate={{ width: '95%' }}
                                  transition={{ duration: 1, delay: 0.5 }}
                                />
                              </div>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
