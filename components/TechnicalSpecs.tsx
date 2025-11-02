'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { technicalSpecs } from '@/lib/content';

export default function TechnicalSpecs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(technicalSpecs.map((spec) => spec.category)))];
  const filteredSpecs = selectedCategory === 'All' 
    ? technicalSpecs 
    : technicalSpecs.filter(spec => spec.category === selectedCategory);

  return (
    <section id="specs" className="min-h-screen py-32 relative overflow-hidden bg-[#0a0a0a]">
      {/* Gradient Glow */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-primary to-primary-cyan bg-clip-text text-transparent">Technical</span> Specifications
          </h2>
          <p className="text-xl text-gray-400">
            Engineered for performance. Built to last.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-16 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
        >
          {categories.map((category, i) => (
            <button
              key={category}
              onClick={() => {
                console.log('Clicked:', category);
                setSelectedCategory(category);
              }}
              className={`px-6 py-3 rounded-xl font-semibold transition-all cursor-pointer ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-primary to-primary-cyan text-white shadow-lg shadow-primary/50'
                  : 'border border-white/20 text-gray-400 hover:border-primary/50 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Specs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredSpecs.map((spec, index) => (
            <motion.div
              key={spec.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ delay: index * 0.1 }}
              layout
              className={`w-full ${
                filteredSpecs.length % 3 === 1 && index === filteredSpecs.length - 1
                  ? 'lg:col-start-2'
                  : ''
              }`}
            >
              <div className="h-full rounded-2xl border border-white/20 bg-gradient-to-br from-white/[0.08] to-transparent backdrop-blur-sm p-6 hover:border-primary/50 transition-all group">
                {/* Category Badge */}
                <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-primary/20 to-primary-cyan/20 text-primary-cyan text-xs font-semibold mb-4">
                  {spec.category}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary-cyan transition-colors">
                  {spec.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6">{spec.description}</p>

                {/* Specs List */}
                <div className="space-y-3">
                  {spec.specs.map((item, i) => (
                    <div key={i} className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">{item.label}</span>
                      <span className="font-semibold text-white">{item.value}</span>
                    </div>
                  ))}
                </div>


              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
