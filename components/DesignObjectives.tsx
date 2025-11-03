'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { designObjectives } from '@/lib/content';

export default function DesignObjectives() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [flippedCards, setFlippedCards] = useState<Set<string>>(new Set());

  const toggleFlip = (id: string) => {
    setFlippedCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <section id="objectives" className="min-h-screen py-32 relative overflow-hidden bg-[#0a0a0a]">
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
            <span className="bg-gradient-to-r from-primary to-primary-cyan bg-clip-text text-transparent">Design</span> Objectives
          </h2>
          <p className="text-xl text-gray-400">
            Six core principles that define every aspect of the StayAwake Band
          </p>
        </motion.div>

        {/* Objectives Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {designObjectives.map((objective, index) => {
            const isFlipped = flippedCards.has(objective.id);

            return (
              <motion.div
                key={objective.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                className="h-64"
                style={{ perspective: '1000px' }}
              >
                <motion.div
                  className="relative w-full h-full cursor-pointer"
                  onClick={() => toggleFlip(objective.id)}
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.6 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Front */}
                  <div
                    className="absolute inset-0 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm p-8 flex flex-col items-center justify-center text-center group"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <h3 className="text-2xl font-bold mb-3">{objective.title}</h3>
                    <svg 
                      className="w-5 h-5 text-gray-500 group-hover:text-primary-cyan transition-colors" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>

                  {/* Back */}
                  <div
                    className="absolute inset-0 rounded-2xl border border-primary/50 bg-gradient-to-br from-primary/10 to-primary-cyan/10 backdrop-blur-sm p-8 flex items-center justify-center text-center"
                    style={{
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                    }}
                  >
                    <p className="text-gray-300 leading-relaxed">{objective.description}</p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
