"use client";
import React from 'react';
import { motion } from 'framer-motion';
import DownloadButton from '@/components/DownloadButton';

export default function AboutMe() {
  return (
    <section className="py-12 bg-gray-50">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">About Me</h1>
        <p className="mt-3 text-base text-gray-600 sm:text-lg">
          Hi, I’m Milan, a passionate developer who thrives on turning ideas into reality through
          code and creativity.
        </p>
      </motion.div>

      {/* Image and Bio Section */}
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <img
            src="/images/milan_profile.png"
            alt="Milan's Portrait"
            className="rounded-full shadow-lg max-w-[200px] sm:max-w-[250px] object-cover"
          />
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h2 className="text-xl font-semibold text-gray-800 sm:text-2xl">Who I Am</h2>
          <p className="text-gray-600 text-sm leading-relaxed sm:text-base">
            I specialize in crafting web applications that are both functional and visually
            appealing. With a strong foundation in modern frameworks and a keen eye for design, I
            aim to build seamless digital experiences.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed sm:text-base">
            When I’m not coding, I enjoy exploring new technologies, contributing to open-source
            projects, and staying inspired by the ever-evolving tech world.
          </p>
        </motion.div>
      </div>

      {/* Skills Section */}
      <div className="container mx-auto px-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h2 className="text-xl font-semibold text-gray-800 sm:text-2xl">My Skills</h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <p className="text-base font-semibold text-gray-800 sm:text-lg">JavaScript</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <p className="text-base font-semibold text-gray-800 sm:text-lg">React</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <p className="text-base font-semibold text-gray-800 sm:text-lg">Next.js</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <p className="text-base font-semibold text-gray-800 sm:text-lg">Tailwind CSS</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Download CV Section */}
      <div className="container mx-auto px-4 text-center">
        <DownloadButton href="/documents/Milan_CV.pdf" label="Download My CV" />
      </div>
    </section>
  );
}