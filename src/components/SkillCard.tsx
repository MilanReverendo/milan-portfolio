'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SkillCardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  name: string;
  proficiency: number;
  level: string;      
  ariaLabel: string;
}

export default function SkillCard({ icon: Icon, name, proficiency, level, ariaLabel }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      aria-label={ariaLabel}
    >
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <motion.div
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <Icon className="h-8 w-8 mx-auto text-gray-800 hover:text-blue-500 transition-colors" aria-hidden="true" />
        </motion.div>
        <p className="mt-2 text-base font-semibold text-gray-800 sm:text-lg">{name}</p>
        <div className="mt-2 bg-gray-200 rounded-full h-2.5 overflow-hidden">
          <motion.div
            className="bg-blue-500 h-2.5 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: `${proficiency}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />
        </div>
        <p className="mt-1 text-sm text-gray-600 text-center">{level}</p>
      </div>
    </motion.div>
  );
}