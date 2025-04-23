"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';

export default function HomePage() {
  return (
    <section className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-16">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto text-center mb-8"
      >
        <h1 className="text-4xl font-extrabold mb-3 sm:text-5xl">
          Welcome to <span className="text-yellow-400">Milan's Portfolio</span>
        </h1>
        <p className="text-base font-light mb-6 sm:text-lg">
          Showcasing my journey, skills, and projects that bring ideas to life.
        </p>
        <div className="flex justify-center space-x-3">
          <Link href="/projects">
            <motion.a
              className="bg-yellow-400 text-gray-900 py-2 px-5 rounded-lg font-medium shadow-lg hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 transition-all text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Projects
            </motion.a>
          </Link>
          <DownloadButton href="/documents/Milan_CV.pdf" label="Download My CV" />
        </div>
      </motion.div>

      {/* Highlights Section */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-700 text-white rounded-lg shadow-md p-5 text-center"
        >
          <h3 className="text-xl font-semibold mb-2 sm:text-2xl">Creative Solutions</h3>
          <p className="text-xs sm:text-sm">
            I specialize in building creative, functional, and visually stunning applications that
            solve real-world problems.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-700 text-white rounded-lg shadow-md p-5 text-center"
        >
          <h3 className="text-xl font-semibold mb-2 sm:text-2xl">Tech Expertise</h3>
          <p className="text-xs sm:text-sm">
            With proficiency in modern frameworks like React, Next.js, and Tailwind CSS, I deliver
            top-notch solutions.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-700 text-white rounded-lg shadow-md p-5 text-center"
        >
          <h3 className="text-xl font-semibold mb-2 sm:text-2xl">Continuous Growth</h3>
          <p className="text-xs sm:text-sm">
            Always learning and exploring new technologies to stay ahead in this fast-evolving
            industry.
          </p>
        </motion.div>
      </div>

      {/* Call to Action Section */}
      <div className="container mx-auto text-center mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-3 sm:text-3xl">Let's Collaborate!</h2>
          <p className="text-base font-light mb-6 sm:text-lg">
            Looking for innovative solutions or a passionate developer for your next project?
            Let's make it happen together.
          </p>
          <Link href="/contact">
            <motion.a
              className="bg-yellow-400 text-gray-900 py-2 px-5 rounded-lg font-medium shadow-lg hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 transition-all text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}