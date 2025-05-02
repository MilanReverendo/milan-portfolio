"use client";

import { dummyProjects } from "../../data/projects";
import Image from "next/image";
import { use } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ProjectDetailProps {
  params: Promise<{ slug: string }>;
}

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const buttonVariants = {
  hover: { scale: 1.05, boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)" },
  tap: { scale: 0.95 },
};

export default function ProjectDetail({ params }: ProjectDetailProps) {
  const { slug } = use(params);
  const project = dummyProjects.find((p) => p.slug === slug);

  // Ref for scroll-based animations
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-600 text-xl font-medium">Project not found.</p>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12">
      <div className="container mx-auto px-6 lg:px-12" ref={ref}>
        {/* Back Button */}
        <motion.button
          onClick={() => window.history.back()}
          className="mb-8 flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-white shadow-lg transition-colors hover:from-blue-700 hover:to-purple-700"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Projects
        </motion.button>

        {/* Hero Section */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-4xl font-bold text-gray-800 md:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 text-lg text-gray-600 md:text-xl">
            {project.description}
          </p>
          {project.projectUrl && (
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block rounded-lg bg-blue-600 px-6 py-3 text-white shadow-md transition-colors hover:bg-blue-700"
            >
              Visit Project
            </a>
          )}
        </motion.div>

        {/* Main Content */}
        <motion.div
          className="grid grid-cols-1 gap-12 lg:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Project Image */}
          <motion.div variants={imageVariants}>
            <Image
              src={project.imageUrl}
              alt={project.title}
              width={800}
              height={500}
              className="h-auto w-full rounded-lg shadow-xl"
            />
          </motion.div>

          {/* Project Details */}
          <motion.div variants={containerVariants}>
            <motion.h2
              className="mb-4 text-2xl font-semibold text-gray-800"
              variants={itemVariants}
            >
              Tech Stack Reasoning
            </motion.h2>
            <motion.p
              className="mb-6 text-gray-600"
              variants={itemVariants}
            >
              {project.techStackReason || "No tech stack reasoning provided."}
            </motion.p>

            <motion.h2
              className="mb-4 text-2xl font-semibold text-gray-800"
              variants={itemVariants}
            >
              Technologies Used
            </motion.h2>
            <motion.p
              className="mb-6 text-gray-600"
              variants={itemVariants}
            >
              {project.technologies}
            </motion.p>

            <motion.h2
              className="mb-4 text-2xl font-semibold text-gray-800"
              variants={itemVariants}
            >
              Tags
            </motion.h2>
            <motion.div
              className="mb-6 flex flex-wrap gap-2"
              variants={itemVariants}
            >
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Additional Sections */}
        <motion.div
          className="mt-12 grid grid-cols-1 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Features */}
          <motion.div variants={itemVariants}>
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">
              Key Features
            </h2>
            <ul className="list-disc space-y-2 pl-6 text-gray-600">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </motion.div>

          {/* Challenges */}
          <motion.div variants={itemVariants}>
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">
              Challenges Faced
            </h2>
            <p className="text-gray-600">{project.challenges}</p>
          </motion.div>

          {/* Screenshots */}
          {project.screenshots.length > 0 && (
            <motion.div variants={itemVariants}>
              <h2 className="mb-4 text-2xl font-semibold text-gray-800">
                Screenshots
              </h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {project.screenshots.map((screenshot, index) => (
                  <Image
                    key={index}
                    src={screenshot}
                    alt={`Screenshot ${index + 1}`}
                    width={400}
                    height={300}
                    className="h-auto w-full rounded-lg shadow-md"
                  />
                ))}
              </div>
            </motion.div>
          )}

          {/* Lessons Learned */}
          <motion.div variants={itemVariants}>
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">
              Lessons Learned
            </h2>
            <p className="text-gray-600">{project.lessonsLearned}</p>
          </motion.div>

          {/* Impact */}
          <motion.div variants={itemVariants}>
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">
              Impact
            </h2>
            <p className="text-gray-600">{project.impact}</p>
          </motion.div>

          {/* Future Improvements */}
          <motion.div variants={itemVariants}>
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">
              Future Improvements
            </h2>
            <p className="text-gray-600">{project.futureImprovements}</p>
          </motion.div>

          {/* Additional Details */}
          {project.details && (
            <motion.div variants={itemVariants}>
              <h2 className="mb-4 text-2xl font-semibold text-gray-800">
                Additional Details
              </h2>
              <p className="text-gray-600">{project.details}</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}