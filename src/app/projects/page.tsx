"use client";
import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';
import { dummyProjects } from '../data/projects';

export default function Projecten() {
  return (
    <section className="min-h-screen bg-white py-16 text-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Mijn Projecten</h1>
          <p className="text-lg text-gray-600">
            Een zorgvuldig samengestelde selectie van mijn werk met diverse technologieën en vaardigheden.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
          {dummyProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              link={project.link}
              imageUrl={project.imageUrl}
              tags={project.tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
