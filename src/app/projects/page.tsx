"use client";
import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';
import { dummyProjects } from '../data/projects';

export default function Projects() {
  return (
    <section className="py-12 bg-gray-50 min-h-screen mt-4 mb-9">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h1 className="text-3xl font-bold sm:text-4xl">My Projects</h1>
        <p className="mt-3 text-base text-gray-600 sm:text-lg">
          A curated showcase of my work demonstrating diverse technologies and skills.
        </p>
      </motion.div>

      <div className="container mx-auto px-4 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
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
    </section>
  );
}