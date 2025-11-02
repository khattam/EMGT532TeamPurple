'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { designObjectives } from '@/lib/content';

const colorMap: { [key: string]: { from: string; to: string; glow: string } } = {
  safety: { from: '#0066FF', to: '#00D4FF', glow: 'rgba(0, 102, 255, 0.3)' },
  comfort: { from: '#EC4899', to: '#F472B6', glow: 'rgba(236, 72, 153, 0.3)' },
  'ease-of-use': { from: '#10B981', to: '#34D399', glow: 'rgba(16, 185, 129, 0.3)' },
  durability: { from: '#F59E0B', to: '#FBBF24', glow: 'rgba(245, 158, 11, 0.3)' },
  'daily-usability': { from: '#8B5CF6', to: '#A78BFA', glow: 'rgba(139, 92, 246, 0.3)' },
  affordability: { from: '#EF4444', to: '#F87171', glow: 'rgba(239, 68, 68, 0.3)' },
};

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
    <section id="objectives" className="min-h-screen py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
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
            Design <span className="gradient-text">Objectives</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            Built with purpose. Designed for you. Every detail matters.
          </motion.p>
        </motion.div>

        {/* Flip Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {designObjectives.map((objective, index) => {
            const isFlipped = flippedCards.has(objective.id);
            const colors = colorMap[objective.id];

            return (
              <motion.div
                key={objective.id}
                initial={{ opacity: 0, y: 50 }}
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
                  {/* Front Side */}
                  <div
                    className="absolute inset-0 rounded-2xl p-6 flex flex-col items-center justify-center text-center"
                    style={{
                      backfaceVisibility: 'hidden',
                      background: `linear-gradient(135deg, ${colors.from}, ${colors.to})`,
                      boxShadow: `0 20px 60px ${colors.glow}`,
                    }}
                  >
                    <motion.div
                      className="text-6xl mb-4"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                    >
                      {objective.icon === 'shield' && '🛡️'}
                      {objective.icon === 'heart' && '💖'}
                      {objective.icon === 'zap' && '⚡'}
                      {objective.icon === 'award' && '🏆'}
                      {objective.icon === 'sun' && '☀️'}
                      {objective.icon === 'dollar-sign' && '💎'}
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {objective.title}
                    </h3>
                    <p className="text-white/80 text-sm">Click to learn more</p>
                  </div>

                  {/* Back Side */}
                  <div
                    className="absolute inset-0 rounded-2xl p-6 flex items-center justify-center text-center"
                    style={{
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                      background: `linear-gradient(135deg, ${colors.to}, ${colors.from})`,
                      boxShadow: `0 20px 60px ${colors.glow}`,
                    }}
                  >
                    <p className="text-white leading-relaxed">
                      {objective.description}
                    </p>
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
