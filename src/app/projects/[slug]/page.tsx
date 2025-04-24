"use client";
import { dummyProjects } from '../../data/projects';
import Image from 'next/image';
import { use } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface ProjectDetailProps {
  params: Promise<{ slug: string }>;
}

// Animation variants for different elements
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const buttonVariants = {
  hover: { scale: 1.05, boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)' },
  tap: { scale: 0.95 },
};

export default function ProjectDetail({ params }: ProjectDetailProps) {
  const { slug } = use(params);

  const project = dummyProjects.find((p) => p.slug === slug);

  const featuresRef = useRef(null);
  const techRef = useRef(null);
  const challengesRef = useRef(null);
  const lessonsRef = useRef(null);
  const impactRef = useRef(null);
  const futureRef = useRef(null);
  const galleryRef = useRef(null);

  const isFeaturesInView = useInView(featuresRef, { once: true, margin: '-50px' });
  const isTechInView = useInView(techRef, { once: true, margin: '-50px' });
  const isChallengesInView = useInView(challengesRef, { once: true, margin: '-50px' });
  const isLessonsInView = useInView(lessonsRef, { once: true, margin: '-50px' });
  const isImpactInView = useInView(impactRef, { once: true, margin: '-50px' });
  const isFutureInView = useInView(futureRef, { once: true, margin: '-50px' });
  const isGalleryInView = useInView(galleryRef, { once: true, margin: '-50px' });

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600 text-xl">Project not found.</p>
      </div>
    );
  }

  return (
    <section className="py-12 bg-gray-100 min-h-screen mt-6 mb-9">
      <div className="container mx-auto px-6">
        <motion.button
          onClick={() => window.history.back()}
          className="mb-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-md flex items-center gap-2"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Go Back
        </motion.button>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h1 className="text-5xl font-bold text-gray-800">{project.title}</h1>
          <p className="mt-4 text-lg text-gray-600">{project.description}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div variants={imageVariants} initial="hidden" animate="visible">
            <Image
              src={project.imageUrl}
              alt={project.title}
              width={800}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div ref={featuresRef}>
              <motion.h2
                className="text-2xl font-semibold mb-4"
                variants={itemVariants}
                animate={isFeaturesInView ? 'visible' : 'hidden'}
              >
                Features
              </motion.h2>
              <motion.ul
                className="list-disc list-inside text-gray-700 mb-8"
                variants={containerVariants}
                animate={isFeaturesInView ? 'visible' : 'hidden'}
              >
                {project.features.map((feature, index) => (
                  <motion.li key={index} variants={itemVariants}>
                    {feature}
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            <div ref={techRef}>
              <motion.h2
                className="text-2xl font-semibold mb-4"
                variants={itemVariants}
                animate={isTechInView ? 'visible' : 'hidden'}
              >
                Technologies
              </motion.h2>
              <motion.p
                className="text-gray-700 mb-8"
                variants={itemVariants}
                animate={isTechInView ? 'visible' : 'hidden'}
              >
                {project.technologies}
              </motion.p>
            </div>

            <div ref={challengesRef}>
              <motion.h2
                className="text-2xl font-semibold mb-4"
                variants={itemVariants}
                animate={isChallengesInView ? 'visible' : 'hidden'}
              >
                Challenges
              </motion.h2>
              <motion.p
                className="text-gray-700 mb-8"
                variants={itemVariants}
                animate={isChallengesInView ? 'visible' : 'hidden'}
              >
                {project.challenges}
              </motion.p>
            </div>

            <div ref={lessonsRef}>
              <motion.h2
                className="text-2xl font-semibold mb-4"
                variants={itemVariants}
                animate={isLessonsInView ? 'visible' : 'hidden'}
              >
                Lessons Learned
              </motion.h2>
              <motion.p
                className="text-gray-700 mb-8"
                variants={itemVariants}
                animate={isLessonsInView ? 'visible' : 'hidden'}
              >
                {project.lessonsLearned}
              </motion.p>
            </div>

            <div ref={impactRef}>
              <motion.h2
                className="text-2xl font-semibold mb-4"
                variants={itemVariants}
                animate={isImpactInView ? 'visible' : 'hidden'}
              >
                Impact
              </motion.h2>
              <motion.p
                className="text-gray-700 mb-8"
                variants={itemVariants}
                animate={isImpactInView ? 'visible' : 'hidden'}
              >
                {project.impact}
              </motion.p>
            </div>

            <div ref={futureRef}>
              <motion.h2
                className="text-2xl font-semibold mb-4"
                variants={itemVariants}
                animate={isFutureInView ? 'visible' : 'hidden'}
              >
                Future Improvements
              </motion.h2>
              <motion.p
                className="text-gray-700"
                variants={itemVariants}
                animate={isFutureInView ? 'visible' : 'hidden'}
              >
                {project.futureImprovements}
              </motion.p>
            </div>
          </motion.div>
        </div>

        {project.screenshots.length > 0 && (
          <div className="mt-12" ref={galleryRef}>
            <motion.h2
              className="text-3xl font-semibold mb-6"
              variants={itemVariants}
              animate={isGalleryInView ? 'visible' : 'hidden'}
            >
              Gallery
            </motion.h2>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              animate={isGalleryInView ? 'visible' : 'hidden'}
            >
              {project.screenshots.map((screenshot, index) => (
                <motion.div
                  key={index}
                  variants={imageVariants}
                  whileHover={{ scale: 1.05, boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Image
                    src={screenshot}
                    alt={`${project.title} screenshot ${index + 1}`}
                    width={400}
                    height={250}
                    className="rounded-lg shadow-md"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}