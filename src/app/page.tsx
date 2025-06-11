"use client";
import React, { useState, useEffect, JSX } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, FileText, Eye, Code, Rocket, BookOpen } from "lucide-react";
import Image from "next/image";
import { dummyProjects } from "./data/projects";

// Animaties voor afbeeldingen en kaarten
const profileVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  hover: { scale: 1.05, boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)" },
};


const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  hover: { scale: 1.03, boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.05)" },
};

// Gradients en iconen voor highlights
const gradients = [
  "from-gray-50 to-gray-100 border-gray-200",
  "from-gray-50 to-gray-100 border-gray-200",
  "from-gray-50 to-gray-100 border-gray-200",
];

const highlightIcons = [
  <Code className="w-8 h-8 text-gray-600" key="code" />,  
  <Rocket className="w-8 h-8 text-gray-600" key="rocket" />,  
  <BookOpen className="w-8 h-8 text-gray-600" key="book" />,  
];

export default function HomePage() {
  type Highlight = {
    title: string;
    description: string;
    icon?: JSX.Element;
  };

  const highlights: Highlight[] = [
    {
      title: "Passie voor IT",
      description:
        "Sinds mijn jeugd ben ik gefascineerd door technologie en de mogelijkheden om de wereld te verbeteren.",
    },
    {
      title: "Samenwerkingsgericht",
      description:
        "Ik werk graag samen om gezamenlijke doelen te bereiken; teamwerk levert de beste resultaten.",
    },
    {
      title: "Continu groeien",
      description:
        "Ik leer constant nieuwe technologieën en zoek uitdagingen om mijn vaardigheden te vergroten.",
    },
  ];

  const highlightsWithIcons = highlights.map((highlight, index) => ({
    ...highlight,
    icon: highlightIcons[index],
  }));

  const [randomProjects, setRandomProjects] = useState<typeof dummyProjects>([]);

  useEffect(() => {
    const getRandomProjects = (projects: typeof dummyProjects, count: number) => {
      return projects.sort(() => 0.5 - Math.random()).slice(0, count);
    };
    setRandomProjects(getRandomProjects(dummyProjects, 3));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero */}
      <section className="py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-10"
        >
          <motion.div
            variants={profileVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            className="w-40 h-40 md:w-48 md:h-48 rounded-xl overflow-hidden border border-gray-200"
          >
            <Image
              src="/images/profiel.jpg"
              alt="Profielfoto Milan"
              width={192}
              height={192}
              className="object-cover w-full h-full"
            />
          </motion.div>

          <div className="max-w-xl">
            <span className="inline-block bg-amber-100 text-amber-700 text-sm font-semibold px-3 py-1 rounded-full mb-2">
              Ontwikkelaar & Student
            </span>
            <h1 className="text-4xl font-bold mb-4">
              Hallo, ik ben Milan
            </h1>
            <p className="text-lg mb-6">
              Ik ontwerp betekenisvolle digitale ervaringen terwijl ik mijn vaardigheden als student blijf ontwikkelen.
            </p>

            <p className="mb-6">
              Welkom op mijn portfolio! Hier vind je mijn projecten, vaardigheden en waarden die mijn werk vormgeven.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="flex items-center bg-amber-600 text-white py-2 px-5 rounded-lg font-medium hover:bg-amber-700 transition"
              >
                <Eye className="w-5 h-5 mr-2" />
                Bekijk projecten
              </Link>
              <Link
                href="/documents/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center border border-gray-300 text-gray-700 py-2 px-5 rounded-lg font-medium hover:bg-gray-100 transition"
              >
                <FileText className="w-5 h-5 mr-2" />
                Bekijk CV
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-semibold mb-4"
          >
            Wat mij <span className="text-amber-600">onderscheidt</span>
          </motion.h2>
          <div className="w-16 h-1 bg-amber-600 mx-auto mb-10 rounded-full"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlightsWithIcons.map((h, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`p-6 bg-gradient-to-br ${gradients[i]} border rounded-lg text-left`}
              >
                <div className="mb-4">
                  {h.icon}
                </div>
                <h3 className="text-xl font-medium mb-2">{h.title}</h3>
                <p className="text-gray-600">{h.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-semibold mb-4"
          >
            Portfolio <span className="text-amber-600">Hoogtepunten</span>
          </motion.h2>
          <p className="text-gray-600 mb-10 max-w-lg mx-auto">
            Een selectie van projecten die ik recent heb gerealiseerd.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {randomProjects.map((project, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-lg overflow-hidden border border-gray-200 flex flex-col h-full"
              >
                <div className="relative h-48">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h4 className="text-xl font-medium mb-2">{project.title}</h4>
                  <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
                  <Link
                    href={project.link}
                    className="mt-auto inline-flex items-center font-medium text-amber-600 hover:underline"
                  >
                    Meer lezen <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/projects"
              className="inline-flex items-center font-medium text-amber-600 hover:underline"
            >
              Bekijk alle projecten <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-lg mx-auto"
          >
            <h2 className="text-3xl font-semibold mb-4">Wilt u mij contacteren?</h2>
            <p className="text-gray-700 mb-6">
              Via deze knop kunt u eenvoudig een bericht sturen of een vraag stellen.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-amber-600 text-white py-2 px-6 rounded-lg font-medium hover:bg-amber-700 transition"
            >
              Neem contact op <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
