'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import PreOrderModal from './PreOrderModal';

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]"
    >
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(#0066FF 1px, transparent 1px), linear-gradient(90deg, #0066FF 1px, transparent 1px)',
            backgroundSize: '100px 100px',
          }}
        />
      </div>

      {/* Gradient Glows - Subtle */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-primary-cyan/8 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:pr-8"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-6"
              >
                <div className="w-2 h-2 rounded-full bg-primary-cyan animate-pulse" />
                <span className="text-sm font-medium text-primary-cyan">Advanced Safety Technology</span>
              </motion.div>

              <motion.h1
                className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-[1.05]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <span className="bg-gradient-to-r from-primary via-primary-cyan to-primary bg-clip-text text-transparent">
                  StayAwake
                </span>
                <br />
                <span className="text-white">Band</span>
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl text-gray-400 mb-8 leading-relaxed max-w-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Intelligent drowsiness detection with progressive alert technology. 
                Stay alert. Stay safe. Stay in control.
              </motion.p>

              <motion.div
                className="mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="group relative px-8 py-4 bg-gradient-to-r from-primary to-primary-cyan rounded-lg font-semibold text-white overflow-hidden"
                >
                  <span className="relative z-10">Learn More</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-cyan to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </motion.div>

              {/* Stats */}
              <motion.div
                className="grid grid-cols-3 gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                {[
                  { value: '24h', label: 'Battery Life' },
                  { value: '98%', label: 'Accuracy' },
                  { value: 'IP67', label: 'Water Resistant' },
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-cyan bg-clip-text text-transparent mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right: Product Visual */}
            <motion.div
              className="relative lg:-ml-12"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative aspect-square max-w-3xl mx-auto lg:mx-0">
                {/* Enhanced Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary-cyan/30 rounded-full blur-3xl animate-pulse" />
                
                {/* Spotlight Effect */}
                <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/40 rounded-full" />
                
                {/* Product Container with Border */}
                <div className="relative w-full h-full rounded-3xl border border-primary-cyan/20 bg-gradient-to-br from-primary/5 to-primary-cyan/5 backdrop-blur-sm p-8 shadow-2xl shadow-primary-cyan/10">
                  {/* Inner Glow Border */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-primary-cyan/10 blur-sm" />
                  
                  {/* Product Image */}
                  <motion.div
                    className="relative w-full h-full"
                    animate={{ 
                      rotateY: [0, 5, 0, -5, 0],
                      rotateX: [0, -2, 0, 2, 0]
                    }}
                    transition={{ 
                      duration: 8, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Image
                      src="/images/HeroSectionPic1.png"
                      alt="StayAwake Band - Premium Smartwatch"
                      fill
                      className="object-contain drop-shadow-[0_0_50px_rgba(0,217,255,0.3)]"
                      priority
                    />
                  </motion.div>
                </div>

                {/* Floating Stats */}
                <motion.div
                  className="absolute -top-4 -right-4 px-4 py-3 rounded-xl border border-white/10 bg-black/80 backdrop-blur-sm"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="text-xs text-gray-400">Heart Rate</div>
                  <div className="text-lg font-bold text-primary-cyan">72 BPM</div>
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -left-4 px-4 py-3 rounded-xl border border-white/10 bg-black/80 backdrop-blur-sm"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity }}
                >
                  <div className="text-xs text-gray-400">Alert Level</div>
                  <div className="text-lg font-bold text-accent">Active</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2 cursor-pointer"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-sm text-gray-400">Scroll to explore</span>
          <svg
            className="w-6 h-6 text-primary-cyan"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>

      <PreOrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
