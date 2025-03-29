'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const testimonials = [
  {
    name: "Sarah Chen",
    designation: "Senior Product Designer at Google",
    username: "@sarahchen",
    platform: "twitter",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    content: "Working with Satyam was an absolute pleasure. His attention to detail and creative problem-solving skills helped us create an exceptional user experience."
  },
  {
    name: "Michael Rodriguez",
    designation: "Lead Developer at Microsoft",
    username: "michaelrodriguez",
    platform: "linkedin",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    content: "Satyam's technical expertise and collaborative approach made our project a huge success. His ability to translate complex requirements into elegant solutions is remarkable."
  },
  {
    name: "Emma Thompson",
    designation: "UX Researcher at Amazon",
    username: "@emmat",
    platform: "twitter",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    content: "The way Satyam incorporates user feedback into the design process is impressive. He truly understands the importance of user-centered design."
  },
  {
    name: "David Kim",
    designation: "Product Manager at Meta",
    username: "@davidkim",
    platform: "twitter",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    content: "Satyam's innovative approach to problem-solving and his deep understanding of user psychology have been invaluable to our team."
  },
  {
    name: "Lisa Wong",
    designation: "Senior Developer at Apple",
    username: "lisawong",
    platform: "linkedin",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    content: "His technical skills combined with his creative vision have helped us create products that users love. A true asset to any team."
  },
  {
    name: "James Wilson",
    designation: "Design Director at Netflix",
    username: "@jameswilson",
    platform: "twitter",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    content: "Satyam's ability to balance aesthetics with functionality is exceptional. His work has significantly improved our user engagement metrics."
  }
];

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  const getPlatformIcon = () => {
    switch (testimonial.platform) {
      case 'twitter':
        return <FaTwitter className="w-4 h-4" />;
      case 'linkedin':
        return <FaLinkedin className="w-4 h-4" />;
      case 'github':
        return <FaGithub className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <motion.div
      className="relative group mx-4 min-w-[400px]"
      whileHover={{
        scale: 1.02,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 20
        }
      }}
    >
      {/* Card Content */}
      <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
        {/* Quote Icon */}
        <div className="absolute top-6 right-6 text-4xl text-gray-200 dark:text-gray-700">
          "
        </div>

        {/* Content */}
        <div className="space-y-6">
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            {testimonial.content}
          </p>

          {/* Author Info */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="w-16 h-16 rounded-full overflow-hidden ring-4 ring-gray-100 dark:ring-gray-700">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-1.5">
                {getPlatformIcon()}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {testimonial.designation}
              </p>
              <a
                href="#"
                className="text-sm text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
              >
                {testimonial.username}
              </a>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 rounded-full opacity-10 transform -translate-x-8 -translate-y-8" />
        <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800 rounded-full opacity-10 transform translate-x-8 translate-y-8" />
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            What People Say
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Testimonials from clients and colleagues who have worked with me on various projects.
          </p>
        </motion.div>

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
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
} 