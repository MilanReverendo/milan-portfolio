"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, FileText, Eye, Linkedin, Github, Mail } from "lucide-react";
import Image from "next/image";
import { dummyProjects } from "./data/projects";

// Animation variants for profile picture
const profileVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  hover: { scale: 1.05, boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)" },
};

// Animation variants for social icons
const iconContainerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const iconVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

// Animation variants for project cards
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  hover: { scale: 1.03, boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)" },
};

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

  // Select 3 random projects on the client side to avoid hydration mismatch
  const [randomProjects, setRandomProjects] = useState<typeof dummyProjects>([]);

  useEffect(() => {
    const getRandomProjects = (projects: typeof dummyProjects, count: number) => {
      const shuffled = [...projects].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, count);
    };
    setRandomProjects(getRandomProjects(dummyProjects, 3));
  }, []);

  return (
    <section className="bg-white text-gray-800 py-16">
      {/* Hero Section with Profile Picture and Social Icons */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="container mx-auto mb-12 px-4"
      >
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
          <motion.div
            variants={profileVariants}
            initial="hidden"
            animate="visible"
            className="relative w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] flex-shrink-0"
          >
            <Image
              src="/images/test.jpg"
              alt="Milan's Profile Picture"
              width={150}
              height={150}
              className="rounded-full border-4 border-yellow-500 shadow-lg w-full h-full object-cover"
            />
            <motion.div
              className="absolute inset-0 rounded-full flex items-center justify-center"
              variants={iconContainerVariants}
              initial="hidden"
              animate="hidden"
              whileHover="visible"
              transition={{ duration: 0.2 }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-5 rounded-full" />
              <div className="relative flex space-x-4">
                <motion.a
                  href="https://www.linkedin.com/in/your-linkedin-profile" // Replace with your LinkedIn URL
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={iconVariants}
                  className="text-white hover:text-yellow-500"
                >
                  <Linkedin className="w-6 h-6" />
                </motion.a>
                <motion.a
                  href="https://github.com/your-github-profile" // Replace with your GitHub URL
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={iconVariants}
                  className="text-white hover:text-yellow-500"
                >
                  <Github className="w-6 h-6" />
                </motion.a>
                <motion.a
                  href="mailto:your.email@example.com" // Replace with your email address
                  variants={iconVariants}
                  className="text-white hover:text-yellow-500"
                >
                  <Mail className="w-6 h-6" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
          <div className="text-center sm:text-left">
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
          </div>
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
          {randomProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-lg shadow-md p-5 flex flex-col"
            >
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={300}
                height={200}
                className="rounded-md mb-4 object-cover"
              />
              <h4 className="text-lg font-semibold mb-2">{project.title}</h4>
              <p className="text-sm mb-4 flex-grow">{project.description}</p>
              <Link
                href={project.link}
                className="flex items-center space-x-2 text-yellow-500 font-medium hover:underline mt-auto"
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