'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface PreOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PreOrderModal({ isOpen, onClose }: PreOrderModalProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone: string) => {
    const re = /^\+?[\d\s-()]+$/;
    return phone.length >= 10 && re.test(phone);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Simulate submission
    setIsSubmitted(true);
    setTimeout(() => {
      onClose();
      setIsSubmitted(false);
      setFormData({ firstName: '', lastName: '', email: '', phone: '' });
      setErrors({});
    }, 2000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: '' });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              className="glass rounded-3xl p-8 max-w-md w-full relative"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
              >
                ✕
              </button>

              {!isSubmitted ? (
                <>
                  <h2 className="text-3xl font-bold mb-2">Pre-Order Now</h2>
                  <p className="text-gray-400 mb-6">
                    Reserve your StayAwake Band and get exclusive launch pricing
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <input
                          type="text"
                          placeholder="First Name"
                          value={formData.firstName}
                          onChange={(e) => handleChange('firstName', e.target.value)}
                          className={`w-full px-4 py-3 bg-white/5 border ${errors.firstName ? 'border-red-500' : 'border-white/10'
                            } rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary-cyan transition-colors`}
                        />
                        {errors.firstName && (
                          <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
                        )}
                      </div>
                      <div>
                        <input
                          type="text"
                          placeholder="Last Name"
                          value={formData.lastName}
                          onChange={(e) => handleChange('lastName', e.target.value)}
                          className={`w-full px-4 py-3 bg-white/5 border ${errors.lastName ? 'border-red-500' : 'border-white/10'
                            } rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary-cyan transition-colors`}
                        />
                        {errors.lastName && (
                          <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <input
                        type="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        className={`w-full px-4 py-3 bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/10'
                          } rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary-cyan transition-colors`}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        className={`w-full px-4 py-3 bg-white/5 border ${errors.phone ? 'border-red-500' : 'border-white/10'
                          } rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary-cyan transition-colors`}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                      )}
                    </div>

                    <motion.button
                      type="submit"
                      className="w-full px-8 py-4 bg-gradient-to-r from-primary to-primary-cyan rounded-xl text-white font-semibold text-lg"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Reserve Your Band
                    </motion.button>
                  </form>

                  <p className="text-xs text-gray-500 text-center mt-4">
                    No payment required. We'll contact you when available.
                  </p>
                </>
              ) : (
                <motion.div
                  className="text-center py-8"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="text-6xl mb-4">✓</div>
                  <h3 className="text-2xl font-bold mb-2">You're on the list!</h3>
                  <p className="text-gray-400">
                    We'll notify you when the StayAwake Band is ready to ship.
                  </p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
