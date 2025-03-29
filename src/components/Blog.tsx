'use client';

import React from 'react';
import { motion } from 'framer-motion';

const blogs = [
  {
    title: "The Future of AGI: A Developer's Perspective",
    excerpt: "Exploring the intersection of artificial intelligence and human consciousness, and what it means for the future of software development.",
    readTime: "5 min read",
    date: "March 15, 2024",
    tags: ["AI", "AGI", "Future Tech", "Development"],
    author: "Satyam Singh",
    content: `
      As a developer deeply immersed in the world of artificial intelligence, I've been fascinated by the ongoing discussions about Artificial General Intelligence (AGI). Today, I want to share my thoughts on where we're heading and what it means for developers like us.

      ## The Current State of AI

      We're living in an era where Large Language Models (LLMs) have become increasingly sophisticated. Models like GPT-4 have shown remarkable capabilities in understanding and generating human-like text. But are we really close to AGI? Let's break this down.

      ## Understanding AGI vs. Current AI

      Current AI systems, including the most advanced LLMs, are what we call "narrow AI." They excel at specific tasks but lack the general intelligence that humans possess. AGI, on the other hand, would be capable of understanding, learning, and applying knowledge across a wide range of domains, similar to human intelligence.

      ## The Role of Developers

      As developers, we're at the forefront of this technological revolution. Our work in creating and improving AI systems shapes the future of technology. But with great power comes great responsibility. We need to consider:

      - Ethical implications of AI development
      - The importance of responsible AI practices
      - The role of human oversight in AI systems
      - The future of human-AI collaboration

      ## Looking Forward

      While we're making significant progress in AI, true AGI remains a distant goal. However, this doesn't mean we should stop pushing boundaries. As developers, we have a crucial role in:

      1. Building robust AI systems
      2. Ensuring ethical AI development
      3. Creating tools that augment human capabilities
      4. Maintaining human-centric development practices

      ## Conclusion

      The journey towards AGI is complex and filled with challenges. As developers, we have the opportunity to shape this future responsibly. Let's continue to innovate while keeping ethical considerations at the forefront of our work.

      What are your thoughts on the future of AGI? Let's discuss in the comments below!
    `
  },
  {
    title: "Understanding Large Language Models: A Technical Deep Dive",
    excerpt: "A comprehensive look at how LLMs work, their limitations, and their potential impact on software development.",
    readTime: "7 min read",
    date: "March 10, 2024",
    tags: ["LLM", "Machine Learning", "Technical", "AI"],
    author: "Satyam Singh",
    content: `
      Large Language Models (LLMs) have revolutionized the way we think about artificial intelligence. In this technical deep dive, I'll explore the inner workings of these fascinating systems.

      ## The Architecture of LLMs

      At their core, LLMs are based on the transformer architecture, which uses self-attention mechanisms to process and understand text. This architecture has proven to be incredibly effective for natural language processing tasks.

      ## Key Components

      1. **Tokenization**: Breaking down text into manageable pieces
      2. **Embedding**: Converting tokens into numerical representations
      3. **Attention Mechanism**: Understanding relationships between words
      4. **Transformer Layers**: Processing information through multiple layers

      ## Technical Challenges

      Developing and working with LLMs presents several challenges:

      - Computational requirements
      - Training data quality and quantity
      - Model optimization
      - Deployment considerations

      ## Best Practices

      When working with LLMs, it's important to follow certain best practices:

      - Proper prompt engineering
      - Efficient token usage
      - Error handling
      - Performance optimization

      ## Future Developments

      The field of LLMs is rapidly evolving. Some exciting developments include:

      - Multimodal models
      - Improved efficiency
      - Better reasoning capabilities
      - Enhanced safety measures

      ## Conclusion

      LLMs represent a significant step forward in AI technology. As developers, understanding these systems is crucial for building the next generation of applications.

      Let me know if you have any questions about specific aspects of LLMs!
    `
  }
];

function BlogCard({ blog }: { blog: typeof blogs[0] }) {
  return (
    <motion.article
      className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 mb-4 sm:mb-6 border border-gray-200 dark:border-gray-700"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mb-4">
        <div className="flex items-center space-x-2 text-sm">
          <span className="text-gray-500">{blog.readTime}</span>
          <span className="text-gray-300">•</span>
          <span className="text-gray-500">{blog.date}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {blog.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
        {blog.title}
      </h2>
      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
        {blog.excerpt}
      </p>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm sm:text-base font-bold">
            {blog.author[0]}
          </div>
          <span className="text-sm text-gray-600 dark:text-gray-300">{blog.author}</span>
        </div>
        <button className="text-sm sm:text-base text-blue-500 hover:text-blue-600 transition-colors font-medium">
          Read more →
        </button>
      </div>
    </motion.article>
  );
}

export default function Blog() {
  return (
    <section id="blog" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 scroll-mt-16">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6 sm:space-y-8"
        >
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
              Blog
            </h1>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
              Thoughts, insights, and technical deep dives into the world of software development and technology.
            </p>
          </div>
          
          <div className="grid gap-4 sm:gap-6">
            {blogs.map((blog, index) => (
              <BlogCard key={index} blog={blog} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 