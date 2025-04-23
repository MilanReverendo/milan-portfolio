"use client";
import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';

interface Project {
  title: string;
  description: string;
  link: string;
  imageUrl: string;
  tags: string[];
}

const dummyProjects: Project[] = [
  {
    title: 'Chatify',
    description: 'A real-time chat application with rooms, direct messages, and emojis built using Socket.io and React.',
    link: '#',
    imageUrl: '/images/test.jpg',
    tags: ['React', 'Socket.io', 'Node.js'],
  },
  {
    title: 'ShopEase',
    description: 'An e-commerce platform featuring product listings, shopping cart, and payment integration.',
    link: '#',
    imageUrl: '/images/test.jpg',
    tags: ['Next.js', 'Stripe', 'Tailwind CSS'],
  },
  {
    title: 'FitTrack',
    description: 'A fitness tracker app that lets users log workouts and monitor progress over time.',
    link: '#',
    imageUrl: '/images/test.jpg',
    tags: ['React Native', 'Expo', 'Firebase'],
  },
  {
    title: 'Weatherly',
    description: 'A weather dashboard providing forecasts, maps, and alerts using a third-party API.',
    link: '#',
    imageUrl: '/images/test.jpg',
    tags: ['Next.js', 'OpenWeather API', 'Chart.js'],
  },
  {
    title: 'BlogFlow',
    description: 'A headless CMS-powered blog with markdown support and SEO optimization.',
    link: '#',
    imageUrl: '/images/test.jpg',
    tags: ['Gatsby', 'Contentful', 'GraphQL'],
  },
  {
    title: 'TaskMaster',
    description: 'A productivity app enabling users to manage tasks, set reminders, and track deadlines.',
    link: '#',
    imageUrl: '/images/test.jpg',
    tags: ['Vue.js', 'Vuetify', 'Firebase'],
  },
];

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