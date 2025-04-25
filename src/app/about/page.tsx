"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SkillCard from "@/components/SkillCard";
import HobbyCard from "@/components/HobbyCard";
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiAngular, SiDotnet, SiPostgresql } from "react-icons/si";
import { FaReact, FaJava, FaGamepad, FaUsers } from "react-icons/fa";
import { GiHiking } from "react-icons/gi";
import Link from "next/link";
import { FileText } from "lucide-react";

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
    { icon: SiTypescript, name: "TypeScript", proficiency: 85, ariaLabel: "TypeScript proficiency: 85%" },
    { icon: FaReact, name: "React", proficiency: 75, ariaLabel: "React proficiency: 75%" },
    { icon: SiNextdotjs, name: "Next.js", proficiency: 70, ariaLabel: "Next.js proficiency: 70%" },
    { icon: SiTailwindcss, name: "Tailwind CSS", proficiency: 85, ariaLabel: "Tailwind CSS proficiency: 85%" },
    { icon: SiAngular, name: "Angular", proficiency: 90, ariaLabel: "Angular proficiency: 90%" },
    { icon: FaJava, name: "Java", proficiency: 75, ariaLabel: "Java proficiency: 75%" },
    { icon: SiDotnet, name: ".NET", proficiency: 80, ariaLabel: ".NET proficiency: 80%" },
    { icon: SiPostgresql, name: "SQL", proficiency: 85, ariaLabel: "SQL proficiency: 85%" },
];


  const hobbies: Hobby[] = [
    {
      icon: FaGamepad,
      name: "Gaming",
      description: "I enjoy immersive video games, from strategy to adventure, to unwind and spark creativity.",
    },
    {
      icon: FaUsers,
      name: "Chiro",
      description: "Engaging in youth leadership and teamwork through creative activities and outdoor adventures.",
    },
    {
      icon: GiHiking,
      name: "Hiking",
      description: "I love going on walks to refresh my mind, clear my thoughts, and immerse myself in the beauty of nature.",
    }
  ];

  return (
    <section className="py-12 bg-gray-50 pb-20">
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
              src="/images/ai.jpg"
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
            I&apos;m a passionate and curious individual with a deep love for technology and creativity. As someone who thrives on solving problems, I find joy in building web applications that are not only functional but also intuitive and visually captivating. My journey in tech has been driven by a relentless curiosity and a desire to create meaningful digital experiences that make a difference.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed sm:text-base">
            Beyond coding, I&apos;m someone who values balance and growth. I&apos;m an avid learner, always diving into new hobbies or exploring the outdoors to recharge. Whether it’s practicing Chiro to stay grounded, hiking through nature’s trails, or losing myself in the immersive worlds of gaming, I find inspiration in both the physical and digital realms. I believe in staying connected to my community, contributing to open-source projects, and sharing my knowledge to help others grow.
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
            I specialize in crafting web applications that blend functionality with aesthetic appeal. With a strong foundation in modern frameworks like React and Node.js, I enjoy experimenting with cutting-edge technologies to push the boundaries of what’s possible. Coding, for me, is both an art and a science—I love tinkering with new IT tools, prototyping ideas, and building solutions that are scalable and user-friendly. My passion for experimentation often leads me to explore emerging trends, from AI-driven interfaces to decentralized web technologies.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed sm:text-base">
            When I’m not immersed in code, I’m often pursuing hobbies that keep me balanced and inspired. Practicing Chiro helps me stay centered and mindful, while hiking allows me to disconnect and find clarity in nature. Gaming is another passion—whether it’s strategizing in competitive titles or exploring rich, narrative-driven worlds, it fuels my creativity and problem-solving skills. I also contribute to open-source projects, where I collaborate with others to build tools that empower the tech community. Staying engaged with the ever-evolving tech world keeps me motivated to create and innovate.
          </p>
        </motion.article>
        <p className="text-gray-600 text-sm sm:text-base text-center mt-4">
          Learn more about my education or work experience in my CV.
        </p>
        <Link
          href="/documents/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center space-x-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-2 px-5 rounded-lg font-medium shadow-md hover:from-yellow-600 hover:to-orange-600 focus:outline-none focus:ring-4 focus:ring-yellow-300 transition-all text-sm sm:text-base"
        >
          <motion.span
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9, rotate: -5 }}
            className="flex items-center space-x-2"
          >
            <FileText className="w-5 h-5" />
            <span className="text-center">View My CV</span>
          </motion.span>
        </Link>
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
    </section>
  );
}