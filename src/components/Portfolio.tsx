'use client';

import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'E-commerce Redesign',
    category: 'UI/UX Design',
    description: 'Complete redesign of an e-commerce platform focusing on user experience and conversion optimization.',
    image: '/projects/ecommerce.jpg'
  },
  {
    title: 'Mobile Banking App',
    category: 'Product Design',
    description: 'Design system and user interface for a modern mobile banking application.',
    image: '/projects/banking.jpg'
  },
  {
    title: 'Healthcare Dashboard',
    category: 'Data Visualization',
    description: 'Complex dashboard design for healthcare professionals to monitor patient data.',
    image: '/projects/healthcare.jpg'
  },
  {
    title: 'Social Media Platform',
    category: 'Interaction Design',
    description: 'New social media platform focusing on meaningful connections and privacy.',
    image: '/projects/social.jpg'
  },
  {
    title: 'Fitness Tracking App',
    category: 'Mobile Design',
    description: 'Intuitive fitness tracking application with personalized workout plans and progress monitoring.',
    image: '/projects/fitness.jpg'
  },
  {
    title: 'Real Estate Website',
    category: 'Web Design',
    description: 'Modern real estate platform with advanced search and virtual tour capabilities.',
    image: '/projects/realestate.jpg'
  }
];

function ProjectCard({ project }: { project: typeof projects[0] }) {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 mx-4 min-w-[350px]"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Card Border */}
      <div className="absolute inset-0 border-2 border-gray-200 dark:border-gray-700 rounded-2xl" />
      
      {/* Project Image */}
      <div className="relative h-[250px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600">
          <div className="absolute inset-0 flex items-center justify-center text-gray-400">
            Project Image
          </div>
        </div>
      </div>

      {/* Project Details */}
      <div className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <span className="px-3 py-1 text-sm font-medium bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full">
            {project.category}
          </span>
          <div className="flex space-x-2">
            <div className="w-2 h-2 rounded-full bg-red-500" />
            <div className="w-2 h-2 rounded-full bg-yellow-500" />
            <div className="w-2 h-2 rounded-full bg-green-500" />
          </div>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
          {project.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  return (
    <section id="work" className="py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Selected Work
        </motion.h2>
        
        <div className="relative overflow-hidden">
          <motion.div
            className="flex space-x-4"
            animate={{
              x: [-1000, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...projects, ...projects].map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
} 