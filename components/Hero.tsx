'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-bg-dark via-bg-dark-gray to-bg-dark" />
        
        {/* Animated Mesh Gradient */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full opacity-30"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, #0066FF 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, #00D4FF 0%, transparent 50%)',
              'radial-gradient(circle at 50% 80%, #8B5CF6 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, #0066FF 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        />

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary-cyan rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4 px-4 py-2 glass rounded-full text-sm text-primary-cyan"
            >
              Revolutionary Wearable Technology
            </motion.div>

            <motion.h1
              className="text-6xl md:text-8xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="gradient-text">Stay</span>
              <br />
              <span className="text-white">Awake</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-400 mb-8 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Advanced drowsiness detection meets progressive shock technology.
              Stay alert, stay safe, stay in control.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-primary to-primary-cyan rounded-full text-white font-semibold text-lg relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Get Early Access</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary-cyan to-primary"
                  initial={{ x: '100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              <motion.button
                className="px-8 py-4 glass rounded-full text-white font-semibold text-lg border border-white/20 hover:border-primary-cyan transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Watch Demo
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-6 mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div>
                <div className="text-3xl font-bold gradient-text">24h</div>
                <div className="text-sm text-gray-400">Battery Life</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">5</div>
                <div className="text-sm text-gray-400">Alert Levels</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">IP67</div>
                <div className="text-sm text-gray-400">Water Resistant</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Product Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* 3D Transform Container */}
            <motion.div
              className="relative w-full aspect-square"
              whileHover={{ scale: 1.05, rotateY: 5, rotateX: 5 }}
              transition={{ duration: 0.3 }}
              style={{ perspective: 1000 }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary-cyan/30 blur-3xl rounded-full" />
              
              {/* Product Image Placeholder */}
              <div className="relative w-full h-full glass rounded-3xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">⌚</div>
                  <p className="text-gray-400 text-sm">
                    IMAGE NEEDED: Sleek smartwatch-style wearable device with a modern design.
                    Dark silicone band, circular OLED display showing subtle blue interface.
                    Floating in space with dramatic lighting. High-tech, premium feel.
                    Perspective: 3/4 view, slightly tilted. Style: Product photography,
                    clean background with gradient lighting.
                  </p>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 glass rounded-2xl p-4"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="text-2xl">⚡</div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 glass rounded-2xl p-4"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                <div className="text-2xl">❤️</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
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
    </section>
  );
}
