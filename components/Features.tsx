'use client';

import { motion } from 'framer-motion';
import { FileText, Linkedin, Mail, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: FileText,
    title: 'Resume Analysis',
    description: 'ATS score, structure feedback, keyword gaps, and bullet rewrites with metrics-focused suggestions',
    highlights: ['ATS compatibility check', 'Section-by-section review', 'Rewritten bullets with impact'],
  },
  {
    icon: Linkedin,
    title: 'LinkedIn Optimizer',
    description: 'Headline variations, About section draft, experience descriptions, and top skills to pin',
    highlights: ['5 headline options', 'Complete About section', 'Post ideas to start'],
  },
  {
    icon: Mail,
    title: 'Cover Letter Generator',
    description: 'Tailored cover letters matching your resume and target role with tone customization',
    highlights: ['3 tone variants', 'Role-specific content', 'Instant download'],
  },
  {
    icon: TrendingUp,
    title: 'Growth Roadmap',
    description: 'Identify skill gaps, project ideas, certification suggestions, and 30-day action plan',
    highlights: ['Missing skills list', 'Project recommendations', 'Learning pathway'],
  },
];

export function Features() {
  return (
    <section className="py-24 px-4 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Everything You Need</h2>
          <p className="text-xl text-gray-400">Four powerful modules to boost your job search</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass glass-hover rounded-2xl p-8"
              >
                <div className="flex gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-gray-400 mb-4">{feature.description}</p>
                    
                    {/* Highlights */}
                    <ul className="space-y-2">
                      {feature.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                          <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
