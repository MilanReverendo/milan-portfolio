"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, FileText, Eye } from "lucide-react";

export default function HomePage() {
  type Highlight = {
    title: string;
    description: string;
  };

  const highlights: Highlight[] = [
    {
      title: "Creative Solutions",
      description:
        "I specialize in building creative, functional, and visually stunning applications that solve real-world problems.",
    },
    {
      title: "Tech Expertise",
      description:
        "With proficiency in modern frameworks like React, Next.js, and Tailwind CSS, I deliver top-notch solutions.",
    },
    {
      title: "Continuous Growth",
      description:
        "Always learning and exploring new technologies to stay ahead in this fast-evolving industry.",
    },
  ];

  type Project = string;

  const portfolioProjects: Project[] = ["Project A", "Project B", "Project C"];

  return (
    <section className="bg-white text-gray-800 py-16 min-h-screen mb-9">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto text-center mb-12"
      >
        <h1 className="text-4xl font-extrabold mb-3 sm:text-5xl">
          Hi, I’m Milan, a Developer and a Student
        </h1>
        <p className="text-base font-light mb-6 sm:text-lg">
          Balancing the art of coding and learning, I build meaningful digital experiences while
          sharpening my skills as a student.
        </p>
        <div className="flex justify-center space-x-3">
          <Link
            href="/projects"
            className="flex items-center space-x-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-2 px-5 rounded-lg font-medium shadow-md hover:from-yellow-600 hover:to-orange-600 focus:outline-none focus:ring-4 focus:ring-yellow-300 transition-all text-sm sm:text-base"
          >
            <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex items-center space-x-2">
              <Eye className="w-5 h-5" />
              <span>View My Projects</span>
            </motion.span>
          </Link>
          <Link
            href="/documents/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-2 px-5 rounded-lg font-medium shadow-md hover:from-yellow-600 hover:to-orange-600 focus:outline-none focus:ring-4 focus:ring-yellow-300 transition-all text-sm sm:text-base"
          >
            <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex items-center space-x-2">
              <FileText className="w-5 h-5" />
              <span>View My CV</span>
            </motion.span>
          </Link>
        </div>
      </motion.div>

      {/* Highlights Section */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 mb-12">
        {highlights.map((highlight, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-100 text-gray-800 rounded-lg shadow-lg p-6 text-center"
          >
            <h3 className="text-xl font-semibold mb-2 sm:text-2xl">{highlight.title}</h3>
            <p className="text-sm sm:text-base">{highlight.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Portfolio Section */}
      <div className="container mx-auto text-center mb-12 px-4">
        <h2 className="text-2xl font-bold mb-4 sm:text-3xl">Portfolio Highlights</h2>
        <p className="text-base font-light mb-6 sm:text-lg">
          Here are some of my recent projects that showcase my skills and expertise.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white border border-gray-200 rounded-lg shadow-md p-5"
            >
              <h4 className="text-lg font-semibold mb-2">{project}</h4>
              <p className="text-sm mb-4">
                A brief description of {project}. It demonstrates my ability to deliver quality
                solutions.
              </p>
              <Link
                href={`/projects/${project.toLowerCase().replace(/\s+/g, "-")}`}
                className="flex items-center space-x-2 text-yellow-500 font-medium hover:underline"
              >
                <span>Learn More</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-3 sm:text-3xl">Contact Me!</h2>
          <p className="text-base font-light mb-6 sm:text-lg">
            Looking for innovative solutions or a passionate developer for your next project?
            Let's make it happen together.
          </p>
          <Link
            href="/contact"
            className="flex items-center space-x-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-2 px-5 rounded-lg font-medium shadow-md hover:from-yellow-600 hover:to-orange-600 focus:outline-none focus:ring-4 focus:ring-yellow-300 transition-all text-sm sm:text-base"
          >
            <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex items-center space-x-2">
              <ArrowRight className="w-5 h-5" />
              <span>Get in Touch</span>
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
