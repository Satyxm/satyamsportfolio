'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

export default function Navigation() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <nav className="fixed w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-semibold"
          >
            Satyam Singh
          </motion.div>
          
          <div className="flex items-center space-x-8">
            <a href="#work" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
              Work
            </a>
            <a href="#about" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
              About
            </a>
            <a href="#process" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
              Process
            </a>
            <a href="#blog" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
              Blog
            </a>
            <a href="#contact" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
              Contact
            </a>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {darkMode ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
} 