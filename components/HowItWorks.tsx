'use client';

import { motion } from 'framer-motion';
import { Upload, CreditCard, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Upload,
    title: 'Upload Resume',
    description: 'Drop your PDF or Docx file and enter your email address',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: CreditCard,
    title: 'Pay ₹20',
    description: 'Secure PayU checkout with UPI, cards, or wallets',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Rocket,
    title: 'Get Report',
    description: 'Instant AI analysis + email delivery with full breakdown',
    color: 'from-green-500 to-emerald-500',
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-gray-400">Three simple steps to transform your career documents</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection lines for desktop */}
          <div className="hidden md:block absolute top-24 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <div className="glass glass-hover rounded-2xl p-8 text-center h-full">
                  {/* Icon */}
                  <div className="relative inline-flex items-center justify-center mb-6">
                    <div className={`absolute inset-0 bg-gradient-to-r ${step.color} rounded-full blur-xl opacity-50`} />
                    <div className={`relative w-20 h-20 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                  </div>

                  {/* Step number */}
                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-sm font-bold mb-4">
                    {index + 1}
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
