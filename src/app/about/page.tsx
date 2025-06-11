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

export default function OverMij() {
  const skills: Skill[] = [
    { icon: SiTypescript, name: "TypeScript", proficiency: 85, ariaLabel: "TypeScript vaardigheid: 85%" },
    { icon: FaReact, name: "React", proficiency: 75, ariaLabel: "React vaardigheid: 75%" },
    { icon: SiNextdotjs, name: "Next.js", proficiency: 70, ariaLabel: "Next.js vaardigheid: 70%" },
    { icon: SiTailwindcss, name: "Tailwind CSS", proficiency: 85, ariaLabel: "Tailwind CSS vaardigheid: 85%" },
    { icon: SiAngular, name: "Angular", proficiency: 90, ariaLabel: "Angular vaardigheid: 90%" },
    { icon: FaJava, name: "Java", proficiency: 75, ariaLabel: "Java vaardigheid: 75%" },
    { icon: SiDotnet, name: ".NET", proficiency: 80, ariaLabel: ".NET vaardigheid: 80%" },
    { icon: SiPostgresql, name: "SQL", proficiency: 85, ariaLabel: "SQL vaardigheid: 85%" },
  ];

  const hobbies: Hobby[] = [
    { icon: FaGamepad, name: "Gaming", description: "Ik speel graag strategische en avontuurlijke games om te ontspannen en creatief te blijven." },
    { icon: FaUsers, name: "Chiro", description: "Jeugdbegeleiding en teambuilding via creatieve activiteiten en buitenavonturen." },
    { icon: GiHiking, name: "Wandelen", description: "Wandelen helpt mij mijn geest te verfrissen en te genieten van de natuur." },
  ];

  return (
    <section className="py-16 bg-white text-gray-800">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Over Mij</h1>
          <p className="text-lg text-gray-600">
            Hallo, ik ben Milan, een gepassioneerde ontwikkelaar die ideeën tot leven brengt met code.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-16">
          {/* Afbeelding */}
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
              className="relative max-w-xs rounded-full overflow-hidden shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-30 blur-lg"></div>
              <Image
                src="/images/ai.jpg"
                alt="Portret van Milan"
                width={300}
                height={300}
                className="relative rounded-full border-4 border-white object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Tekst */}
          <div className="space-y-8">
            <motion.article
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-semibold mb-2">Wie ik ben</h2>
              <p className="text-gray-600 leading-relaxed">
                Ik ben nieuwsgierig en gedreven, met een grote liefde voor technologie en creativiteit. Ik bouw webapplicaties die niet alleen werken, maar ook intuïtief en visueel aantrekkelijk zijn.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Buiten het coderen ben ik altijd op zoek naar balans en groei: van Chiro-activiteiten tot wandelingen in de natuur en gaming. Ik geloof in delen en samenwerken met anderen.
              </p>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-semibold mb-2">Wat ik doe</h2>
              <p className="text-gray-600 leading-relaxed">
                Ik maak moderne webapplicaties met een focus op gebruiksvriendelijkheid en schaalbaarheid. Met frameworks als React en Node.js experimenteer ik graag met nieuwe technologieën, van AI-interfaces tot decentrale weboplossingen.
              </p>
              <p className="text-gray-600 leading-relaxed">
                In mijn vrije tijd beoefen ik enkele hobby's die mij inspireren en ontspannen. Of het nu gaat om het spelen van games, het begeleiden van jongeren in de Chiro, of het genieten van de natuur tijdens een wandeling, ik geloof dat deze ervaringen mijn creativiteit en probleemoplossend vermogen versterken. Ik leer ook graag op mezelf bij binnen IT.
              </p>
            </motion.article>

            <div className="text-center">
              <p className="text-gray-600 mb-4">
                Bekijk mijn opleiding en werkervaring in mijn cv.
              </p>
              <Link
                href="/documents/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-amber-600 text-white py-2 px-6 rounded-lg font-medium shadow transition hover:bg-amber-700 focus:outline-none focus:ring-4 focus:ring-amber-300"
              >
                <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} className="flex items-center space-x-2">
                  <FileText className="w-5 h-5" />
                  <span>Bekijk CV</span>
                </motion.span>
              </Link>
            </div>
          </div>
        </div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h2 className="text-2xl font-semibold">Vaardigheden</h2>
        </motion.div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {skills.map((skill, idx) => (
            <SkillCard
              key={idx}
              icon={skill.icon}
              name={skill.name}
              proficiency={skill.proficiency}
              ariaLabel={skill.ariaLabel}
            />
          ))}
        </div>

        {/* Hobbies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h2 className="text-2xl font-semibold">Hobby's & vrije tijd</h2>
          <p className="text-gray-600">Activiteiten die mij inspireren en ontspannen.</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hobbies.map((hobby, idx) => (
            <HobbyCard
              key={idx}
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
