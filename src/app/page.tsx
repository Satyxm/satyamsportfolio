'use client';

import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Blog from '@/components/Blog';

export default function Home() {
  return (
    <main className="bg-white dark:bg-gray-900">
      <Navigation />
      <Hero />
      <About />
      <Portfolio />
      <Process />
      <Blog />
      <Testimonials />
      <Contact />
    </main>
  );
} 