"use client";
import React from 'react';
import { motion } from 'framer-motion';
import DownloadButton from '@/components/DownloadButton';
import Image from 'next/image';

export default function Internship() {
  return (
    <section className="py-12 bg-white min-h-screen">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">My Internship Experience</h1>
        <p className="mt-3 text-base text-gray-600 sm:text-lg">A three-month journey in a professional IT environment</p>
      </motion.div>

      {/* Company Section */}
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-3"
        >
          <h2 className="text-xl font-semibold text-gray-800 sm:text-2xl">About the Company</h2>
          <p className="text-gray-600 text-sm leading-relaxed sm:text-base">
          Remmicom has established itself as a leading provider of innovative IT solutions tailored for Flemish local governments, serving over 200 small, medium, and large administrations across Flanders.
          Specializing in user-friendly software and hardware solutions, Remmicom supports municipalities and public welfare organizations with back-office systems, infrastructure, and cloud-based technologies. With a commitment to innovation,
          the company collaborates closely with the Flemish government to drive digital transformation, enhancing citizen services through platforms like Mijn Burgerprofiel. Known for its personalized approach, exceptional customer service, 
          and flexible solutions, Remmicom employs over 100 professionals and maintains a strong focus on employee well-being, work-life balance, and continuous growth, ensuring its position as a trusted partner in public sector IT.
          </p>
        </motion.div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <img
            src="/images/remmicom_logo.jpg"
            alt="Company Building"
            className="rounded-lg shadow-lg max-h-48 object-cover w-full sm:max-h-56"
          />
        </motion.div>
      </div>

      {/* Overview Section */}
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-3"
        >
          <h2 className="text-xl font-semibold text-gray-800 sm:text-2xl">Overview</h2>
          <p className="text-gray-600 text-sm leading-relaxed sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac orci condimentum,
            venenatis nunc sit amet, dapibus odio. Integer luctus risus ut eros faucibus, eu egestas
            purus convallis.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed sm:text-base">
            Sed quis arcu non lorem consequat vulputate. Praesent vitae magna eget nisl sollicitudin
            placerat. Nulla facilisi.
          </p>
        </motion.div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <img
            src="/images/internship_overview.png"
            alt="Internship Overview"
            className="rounded-lg shadow-lg max-h-48 object-cover w-full sm:max-h-56"
          />
        </motion.div>
      </div>

      {/* Project Details Section */}
      <div className="container mx-auto px-4 mb-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-5"
        >
          <h2 className="text-xl font-semibold text-gray-800 sm:text-2xl">Project Details</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-3"
          >
            <p className="text-gray-600 text-sm leading-relaxed sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie purus at
              mauris pretium, vitae consectetur nisl volutpat.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed sm:text-base">
              Mauris non facilisis urna. Ut elementum sem sit amet massa consectetur, vitae auctor
              nisl interdum.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-3"
          >
            <Image
              src="/images/project_screenshot1.png"
              alt="Project Screenshot 1"
              width={800}
              height={400}
              className="rounded-lg shadow-md object-cover h-40 w-full sm:h-44"
            />
            <Image
              src="/images/project_screenshot2.png"
              alt="Project Screenshot 2"
              width={800}
              height={400}
              className="rounded-lg shadow-md object-cover h-40 w-full sm:h-44"
            />

          </motion.div>
        </div>
      </div>

      {/* Reflection Section */}
      <div className="container mx-auto px-4 mb-12">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-3 text-center"
        >
          <h2 className="text-xl font-semibold text-gray-800 sm:text-2xl">Key Learnings</h2>
          <p className="text-gray-600 text-sm leading-relaxed sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisi eu
            consectetur consectetur, nisl nisl aliquet nisl, eu consequat nunc nisl eu nisl.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed sm:text-base">
            Vivamus vitae magna vel justo vehicula facilisis non et sapien. Maecenas consequat,
            purus nec ultricies volutpat, quam nisi aliquet leo, vitae ullamcorper velit urna id leo.
          </p>
        </motion.div>
      </div>

      {/* Download Section */}
      <div className="container mx-auto px-4 text-center mb-12">
        <DownloadButton href="/documents/internship_reflection.pdf" label="Download Detailed Report" />
      </div>
    </section>
  );
}