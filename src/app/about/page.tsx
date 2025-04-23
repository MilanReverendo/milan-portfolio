"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import DownloadButton from "@/components/DownloadButton";
import SkillCard from "@/components/SkillCard";
import HobbyCard from "@/components/HobbyCard";
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiAngular, SiDotnet, SiPostgresql } from "react-icons/si";
import { FaReact, FaJava, FaGamepad, FaCamera, FaBook } from "react-icons/fa";
import { GiHiking } from "react-icons/gi";

interface Skill {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  name: string;
  proficiency: number;
  ariaLabel: string;
}

interface Hobby {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  name: string;
  description: string;
}

export default function AboutMe() {
  const skills: Skill[] = [
    { icon: SiTypescript, name: "TypeScript", proficiency: 92, ariaLabel: "TypeScript proficiency: 92%" },
    { icon: FaReact, name: "React", proficiency: 83, ariaLabel: "React proficiency: 78%" },
    { icon: SiNextdotjs, name: "Next.js", proficiency: 75, ariaLabel: "Next.js proficiency: 75%" },
    { icon: SiTailwindcss, name: "Tailwind CSS", proficiency: 93, ariaLabel: "Tailwind CSS proficiency: 93%" },
    { icon: SiAngular, name: "Angular", proficiency: 92, ariaLabel: "Angular proficiency: 92%" },
    { icon: FaJava, name: "Java", proficiency: 80, ariaLabel: "Java proficiency: 80%" },
    { icon: SiDotnet, name: ".NET", proficiency: 89, ariaLabel: ".NET proficiency: 89%" },
    { icon: SiPostgresql, name: "SQL", proficiency: 94, ariaLabel: "SQL proficiency: 94%" },
  ];

  const hobbies: Hobby[] = [
    {
      icon: FaGamepad,
      name: "Gaming",
      description: "I enjoy immersive video games, from strategy to adventure, to unwind and spark creativity.",
    },
    {
      icon: FaCamera,
      name: "Photography",
      description: "Capturing moments through my lens helps me appreciate the beauty in everyday life.",
    },
    {
      icon: GiHiking,
      name: "Hiking",
      description: "Exploring nature trails keeps me active and inspired by the outdoors.",
    }
  ];

  return (
    <section className="py-12 bg-gray-50 mb-6 pb-20 mt-4">
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

      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 py-8 mb-12 min-h-[50vh] items-start">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
            transition={{ duration: 0.3 }}
            className="relative max-w-[250px] sm:max-w-[300px] lg:max-w-[350px]"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-75 blur-md"></div>
            <Image
              src="/images/milan_profile.jpg"
              alt="Portrait of Milan, a web developer"
              width={350}
              height={350}
              className="relative rounded-full shadow-xl object-cover border-4 border-white"
              onError={(e) => {
                console.error("Failed to load image at /images/milan_profile.jpg. Ensure the file exists in public/images/ and is a valid image.");
              }}
            />
          </motion.div>
        </motion.div>


        {/* Articles */}
        <div className="space-y-8">
          <motion.article
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
          </motion.article>

          <motion.article
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h2 className="text-xl font-semibold text-gray-800 sm:text-2xl">What I Do</h2>
            <p className="text-gray-600 text-sm leading-relaxed sm:text-base">
              I specialize in crafting web applications that are both functional and visually
              appealing. With a strong foundation in modern frameworks and a keen eye for design, I
              aim to build seamless digital experiences.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed sm:text-base">
              When I’m not coding, I enjoy exploring new technologies, contributing to open-source
              projects, and staying inspired by the ever-evolving tech world.
            </p>
          </motion.article>
        </div>
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

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              icon={skill.icon}
              name={skill.name}
              proficiency={skill.proficiency}
              ariaLabel={skill.ariaLabel}
            />
          ))}
        </div>
      </div>

      {/* Hobbies & Free Time Section */}
      <div className="container mx-auto px-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h2 className="text-xl font-semibold text-gray-800 sm:text-2xl">Hobbies & Free Time</h2>
          <p className="mt-3 text-base text-gray-600 sm:text-lg">
            In my free time, I enjoy a variety of activities that keep me inspired and balanced.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hobbies.map((hobby, index) => (
            <HobbyCard
              key={index}
              icon={hobby.icon}
              name={hobby.name}
              description={hobby.description}
            />
          ))}
        </div>
      </div>

      {/* Download CV Section */}
      <div className="container mx-auto px-4 text-center">
        <DownloadButton
          href="/documents/Milan_CV.pdf"
          label="Download My CV"
          aria-label="Download Milan's CV"
        />
      </div>
    </section>
  );
}