'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <footer className="relative overflow-hidden bg-[#0a0a0a] border-t border-white/10">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">StayAwake Band</h3>
            <p className="text-gray-400 mb-6">
              Revolutionary drowsiness detection technology that keeps you alert and safe.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {['T', 'L', 'I', 'Y'].map((letter, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center hover:border-primary-cyan hover:bg-primary/10 transition-all text-sm font-semibold"
                >
                  {letter}
                </a>
              ))}
            </div>
          </div>

          {/* Product Column */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              {['Features', 'Specifications', 'Pricing', 'FAQ', 'Support'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-primary-cyan transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {['About Us', 'Careers', 'Press Kit', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-primary-cyan transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-gray-400 text-sm mb-4">
              Get the latest news and updates delivered to your inbox.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary-cyan transition-colors"
                required
              />
              <motion.button
                type="submit"
                className="w-full px-4 py-3 bg-gradient-to-r from-primary to-primary-cyan rounded-xl text-white font-semibold"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitted ? 'Subscribed!' : 'Subscribe'}
              </motion.button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2025 StayAwake Band. All rights reserved. Medhansh Khattar.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-primary-cyan transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-primary-cyan transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-primary-cyan transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
