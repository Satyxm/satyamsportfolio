'use client';

import React from 'react';
import { motion } from 'framer-motion';
import TechnologyCrawler from './TechnologyCrawler';

const processSteps = [
  {
    title: "Requirements Analysis",
    description: "Understanding project goals, user needs, and technical constraints through thorough research.",
    icon: "💡",
    color: 'from-blue-500 to-blue-600',
    darkColor: 'from-blue-600 to-blue-700'
  },
  {
    title: "Planning & Architecture",
    description: "Designing system architecture, choosing technologies, and outlining key features.",
    icon: "📝",
    color: 'from-purple-500 to-purple-600',
    darkColor: 'from-purple-600 to-purple-700'
  },
  {
    title: "Wireframing & Pseudocode",
    description: "Drafting flowcharts, wireframes, and writing pseudocode to map out logic.",
    icon: "📜",
    color: 'from-green-500 to-green-600',
    darkColor: 'from-green-600 to-green-700'
  },
  {
    title: "Development & Implementation",
    description: "Writing and structuring code while following best practices and coding standards.",
    icon: "⚙️",
    color: 'from-orange-500 to-orange-600',
    darkColor: 'from-orange-600 to-orange-700'
  },
  {
    title: "Testing & Debugging",
    description: "Running unit tests, fixing bugs, and optimizing performance for a robust solution.",
    icon: "🔬",
    color: 'from-pink-500 to-pink-600',
    darkColor: 'from-pink-600 to-pink-700'
  },
  {
    title: "Review & Iteration",
    description: "Conducting code reviews, gathering feedback, and refining the code for maintainability.",
    icon: "🔁",
    color: 'from-indigo-500 to-indigo-600',
    darkColor: 'from-indigo-600 to-indigo-700'
  }
];

function ProcessCard({ step, index }: { step: typeof processSteps[0], index: number }) {
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
      <div className={`absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
      
      {/* Card Content */}
      <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
        {/* Icon Container */}
        <div className="relative mb-6 sm:mb-8">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-xl transform rotate-3" />
          <div className="relative text-3xl sm:text-4xl transform -rotate-3">
            {step.icon}
          </div>
        </div>

        {/* Content */}
        <div className="space-y-3 sm:space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
            {step.title}
          </h3>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
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
    <section className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            Programming Process
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
            A systematic approach to building robust and scalable applications through careful planning, clean code, and thorough testing.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {processSteps.map((step, index) => (
            <ProcessCard key={index} step={step} index={index} />
          ))}
        </div>

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-20 mt-16 sm:mt-24"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            Modern Tech Stack
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
            Leveraging cutting-edge technologies to build scalable and performant applications.
          </p>
        </motion.div>

        {/* Technology Crawler */}
        <TechnologyCrawler />
      </div>
    </section>
  );
} 