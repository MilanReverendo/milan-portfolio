"use client";

import React, { ReactNode } from 'react';
import { use } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { dummyProjects } from '../../data/projects';
import { useRef } from 'react';

interface ProjectDetailProps {
  params: Promise<{ slug: string }>;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};
const buttonVariants = { hover: { scale: 1.05, boxShadow: '0px 5px 15px rgba(0,0,0,0.2)' }, tap: { scale: 0.95 } };

export default function ProjectDetail({ params }: ProjectDetailProps) {
  const { slug } = use(params);
  const project = dummyProjects.find((p) => p.slug === slug);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-600 text-xl font-medium">Project niet gevonden.</p>
      </div>
    );
  }
  const renderSection = (title: string, content: ReactNode) =>
    content ? (
      <motion.div variants={itemVariants} className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{title}</h2>
        {content}
      </motion.div>
    ) : null;

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16 text-gray-800">
      <div className="container mx-auto px-6 lg:px-12" ref={ref}>
        <motion.button
          onClick={() => window.history.back()}
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8 flex items-center gap-2 rounded-lg bg-amber-600 px-6 py-3 text-white shadow-lg hover:bg-amber-700 transition"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          Terug naar Projecten
        </motion.button>

        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h1 className="text-5xl font-bold mb-4">{project.title}</h1>
          {project.description && <p className="text-xl text-gray-600 mb-4">{project.description}</p>}
          {project.projectUrl && (
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block rounded-lg bg-amber-600 px-6 py-3 text-white shadow-md hover:bg-amber-700 transition"
            >
              Bezoek Project
            </a>
          )}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {project.imageUrl && (
            <motion.div variants={imageVariants} className="">
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={800}
                height={500}
                className="w-full rounded-lg shadow-xl object-cover"
              />
            </motion.div>
          )}

          <div className="">
            {renderSection('Gebruikte Technologieën', <p className="text-gray-600 mb-4">{project.technologies}</p>)}
            {renderSection(
              'Waarom deze Technologieën',
              <p className="text-gray-600 mb-4">{project.techStackReason || 'Geen toelichting beschikbaar.'}</p>
            )}
            {project.tags?.length > 0 && renderSection(
              'Tags',
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="px-3 py-1 bg-amber-100 rounded-full text-sm text-amber-800">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </motion.div>

        <motion.div
          className="mt-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {renderSection(
            'Belangrijkste Kenmerken',
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              {project.features?.map((f, idx) => <li key={idx}>{f}</li>)}
            </ul>
          )}

          {renderSection('Uitdagingen', <p className="text-gray-600">{project.challenges}</p>)}

          {project.screenshots?.length > 0 &&
            renderSection(
              'Schermafbeeldingen',
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.screenshots.map((src, idx) => (
                  <Image
                    key={idx}
                    src={src}
                    alt={`Screenshot ${idx + 1}`}
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-lg shadow-md object-cover"
                  />
                ))}
              </div>
            )}

          {renderSection('Geleerde Lessen', <p className="text-gray-600">{project.lessonsLearned}</p>)}
          {renderSection('Impact', <p className="text-gray-600">{project.impact}</p>)}
          {renderSection('Toekomstige Verbeteringen', <p className="text-gray-600">{project.futureImprovements}</p>)}
          {project.details && renderSection('Extra Details', <p className="text-gray-600">{project.details}</p>)}
        </motion.div>
      </div>
    </section>
  );
}
