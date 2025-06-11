"use client";
import React, { useState, useEffect, JSX } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, FileText, Eye, Linkedin, Github, Mail, Code, Rocket, BookOpen } from "lucide-react";
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

// Gradient background for highlight cards
const gradients = [
  "from-blue-50 to-blue-100 border-blue-200",
  "from-amber-50 to-amber-100 border-amber-200",
  "from-emerald-50 to-emerald-100 border-emerald-200",
];

// Icons for highlight cards
const highlightIcons = [
  <Code className="w-8 h-8 text-blue-500" key="code" />,
  <Rocket className="w-8 h-8 text-amber-500" key="rocket" />,
  <BookOpen className="w-8 h-8 text-emerald-500" key="book" />,
];

export default function HomePage() {
  type Highlight = {
    title: string;
    description: string;
    icon?: JSX.Element;
  };

  const highlights: Highlight[] = [
    {
      title: "Passion for IT",
      description:
        "Since I was young I have been fascinated by technology and its potential to change the world. As a young teen I started experimenting myself!",
    },
    {
      title: "Collaborative Spirit",
      description:
        "I love working together with others to achieve a common goal. I believe that teamwork leads to the best results.",
    },
    {
      title: "Continuous Growth",
      description:
        "I love learning and trying new technologies. I am always looking for new challenges to expand my experience.",
    },
  ];

  // Assign icons to highlights
  const highlightsWithIcons = highlights.map((highlight, index) => ({
    ...highlight,
    icon: highlightIcons[index],
  }));

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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Profile Picture and Social Icons */}
      <section className="py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="container mx-auto px-6"
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
            <div className="relative">
              <motion.div
                variants={profileVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="relative w-40 h-40 md:w-48 md:h-48 overflow-hidden"
              >
                <Image
                  src="/images/profiel.jpg"
                  alt="Milan&apos;s Profile Picture"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover rounded-2xl shadow-xl"
                />
                <motion.div
                  className="absolute -bottom-1 -right-1 flex space-x-2 bg-white/80 backdrop-blur-sm py-2 px-3 rounded-lg shadow-md"
                  variants={iconContainerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.a
                    href="https://www.linkedin.com/in/milan-reverendo-41ba1829a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={iconVariants}
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href="https://github.com/MilanReverendo"
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={iconVariants}
                    className="text-gray-800 hover:text-black transition-colors"
                    aria-label="GitHub Profile"
                  >
                    <Github className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href="mailto:milanreverendo@gmail.com"
                    variants={iconVariants}
                    className="text-red-500 hover:text-red-700 transition-colors"
                    aria-label="Email Me"
                  >
                    <Mail className="w-5 h-5" />
                  </motion.a>
                </motion.div>
              </motion.div>
            </div>
            
            <div className="text-center md:text-left max-w-2xl">
              <div className="mb-1 inline-block py-1 px-3 rounded-full bg-amber-100 text-amber-800 text-xs font-medium">
                Developer & Student
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Hi, I&apos;m Milan
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
                Balancing the art of coding and learning, I build meaningful digital experiences while
                sharpening my skills as a student.
              </p>
              
              {/* Explanation Section */}
              <div className="bg-white/70 backdrop-blur-sm p-4 rounded-lg border border-gray-100 shadow-sm mb-6">
                <p className="text-gray-600 leading-relaxed">
                  Welcome to my portfolio! This website showcases my journey as a developer and student,
                  highlighting the projects, skills, and values that define my work. From collaborative
                  endeavors to individual challenges, this portfolio represents my passion for technology,
                  continuous growth, and problem-solving.
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                <Link
                  href="/projects"
                  className="flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white py-3 px-6 rounded-lg font-medium shadow-md hover:from-amber-600 hover:to-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-200 transition-all"
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
                  className="flex items-center space-x-2 bg-white text-gray-800 border border-gray-200 py-3 px-6 rounded-lg font-medium shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-100 transition-all"
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
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold"
            >
              What Makes Me <span className="text-amber-500">Different</span>
            </motion.h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mt-4 mb-6 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlightsWithIcons.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-gradient-to-br ${gradients[index]} border rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow`}
              >
                <div className="flex flex-col items-center">
                  <div className="mb-4 p-3 bg-white rounded-full shadow-sm">
                    {highlight.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{highlight.title}</h3>
                  <p className="text-gray-600 text-center">{highlight.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold"
            >
              Portfolio <span className="text-amber-500">Highlights</span>
            </motion.h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mt-4 mb-6 rounded-full"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Here are some of the projects I have realized in the past.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {randomProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-md flex flex-col h-full"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover"
                    style={{ objectPosition: "center" }}
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-xl font-semibold mb-3">{project.title}</h4>
                  <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
                  <Link
                    href={project.link}
                    className="inline-flex items-center text-amber-500 hover:text-amber-600 font-medium group"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link
              href="/projects"
              className="inline-flex items-center space-x-2 text-amber-500 hover:text-amber-600 font-medium"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
            <p className="text-gray-600 mb-8">
              I&apos;m always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-gradient-to-r from-amber-500 to-orange-500 text-white py-3 px-8 rounded-lg font-medium shadow-md hover:from-amber-600 hover:to-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-200 transition-all"
            >
              <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex items-center space-x-2">
                <span>Get in Touch</span>
                <ArrowRight className="w-5 h-5 ml-1" />
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}