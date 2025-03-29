'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaTwitter, FaDiscord, FaLinkedin } from 'react-icons/fa';

const socialLinks = [
  {
    name: 'GitHub',
    icon: FaGithub,
    url: 'https://github.com',
    color: 'hover:text-gray-900 dark:hover:text-white'
  },
  {
    name: 'Twitter',
    icon: FaTwitter,
    url: 'https://twitter.com',
    color: 'hover:text-blue-400'
  },
  {
    name: 'Discord',
    icon: FaDiscord,
    url: 'https://discord.com',
    color: 'hover:text-indigo-500'
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    url: 'https://linkedin.com',
    color: 'hover:text-blue-600'
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Social Links Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-16"
        >
          <div className="relative">
            {/* Blurred gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-100/50 to-gray-200/50 dark:from-gray-800/50 dark:to-gray-900/50 backdrop-blur-lg rounded-2xl -z-10" />
            
            {/* Social icons dock */}
            <div className="flex justify-center space-x-6 sm:space-x-8 p-4 sm:p-6">
              {[
                {
                  name: 'LinkedIn',
                  icon: FaLinkedin,
                  url: 'https://linkedin.com/in/satyams-in',
                  color: 'hover:text-blue-600'
                },
                {
                  name: 'GitHub',
                  icon: FaGithub,
                  url: 'https://github.com/satyxm',
                  color: 'hover:text-gray-900 dark:hover:text-white'
                },
                {
                  name: 'Twitter',
                  icon: FaTwitter,
                  url: 'https://twitter.com/satyamtwts',
                  color: 'hover:text-blue-400'
                },
                {
                  name: 'Discord',
                  icon: FaDiscord,
                  url: 'https://discord.com/users/satyam4834',
                  color: 'hover:text-indigo-500'
                }
              ].map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-2xl sm:text-3xl transition-all duration-300 ${social.color}`}
                  whileHover={{ 
                    scale: 1.2, 
                    y: -10,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 15
                    }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Contact Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Get in Touch</h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
            Let's discuss your next project or just say hello
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-4 sm:space-y-6 bg-white/80 dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.1)] backdrop-blur-lg border border-white/20 dark:border-gray-700"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1.5 sm:mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:border-transparent"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1.5 sm:mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:border-transparent"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1.5 sm:mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:border-transparent"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full sm:w-auto mx-auto block px-6 sm:px-8 py-2.5 sm:py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors text-sm sm:text-base"
          >
            Send Message
          </button>
        </motion.form>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 text-center"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-sm sm:text-base text-center text-gray-600 dark:text-gray-400 mt-6 sm:mt-8"
          >
            © {new Date().getFullYear()} Satyam Singh. All rights reserved.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
} 