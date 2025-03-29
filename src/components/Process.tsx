'use client';

import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Research & Discovery',
    description: 'Understanding user needs, market trends, and project requirements through comprehensive research.',
    icon: '🔍',
    color: 'from-blue-500 to-blue-600',
    darkColor: 'from-blue-600 to-blue-700'
  },
  {
    title: 'Ideation & Sketching',
    description: 'Generating ideas and creating quick sketches to explore different design directions.',
    icon: '✏️',
    color: 'from-purple-500 to-purple-600',
    darkColor: 'from-purple-600 to-purple-700'
  },
  {
    title: 'Wireframing',
    description: 'Creating low-fidelity wireframes to establish the basic structure and layout.',
    icon: '📐',
    color: 'from-green-500 to-green-600',
    darkColor: 'from-green-600 to-green-700'
  },
  {
    title: 'Prototyping',
    description: 'Building interactive prototypes to test user flows and interactions.',
    icon: '🎯',
    color: 'from-orange-500 to-orange-600',
    darkColor: 'from-orange-600 to-orange-700'
  },
  {
    title: 'Visual Design',
    description: 'Developing the final visual design with attention to typography, color, and spacing.',
    icon: '🎨',
    color: 'from-pink-500 to-pink-600',
    darkColor: 'from-pink-600 to-pink-700'
  },
  {
    title: 'Testing & Iteration',
    description: 'Conducting user testing and refining the design based on feedback.',
    icon: '🔄',
    color: 'from-indigo-500 to-indigo-600',
    darkColor: 'from-indigo-600 to-indigo-700'
  },
];

function ProcessCard({ step, index }: { step: typeof steps[0], index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative group"
      whileHover={{
        scale: 1.05,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 20
        }
      }}
    >
      {/* Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${step.color} dark:${step.darkColor} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
      
      {/* Card Content */}
      <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
        {/* Icon Container */}
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-xl transform rotate-3" />
          <div className="relative text-4xl transform -rotate-3">
            {step.icon}
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            {step.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {step.description}
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-full opacity-10 transform translate-x-8 -translate-y-8" />
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-full opacity-10 transform -translate-x-8 translate-y-8" />
      </div>
    </motion.div>
  );
}

export default function Process() {
  return (
    <section id="process" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Design Process
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A systematic approach to creating exceptional user experiences through thoughtful design and careful consideration of user needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <ProcessCard key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
} 