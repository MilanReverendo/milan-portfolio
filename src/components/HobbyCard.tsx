import React from "react";
import { motion } from "framer-motion";

interface HobbyCardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  name: string;
  description: string;
}

export default function HobbyCard({ icon: Icon, name, description }: HobbyCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center space-y-2">
        <motion.div
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <Icon className="h-8 w-8 mx-auto text-gray-800 hover:text-blue-500 transition-colors" aria-hidden="true" />
        </motion.div>
        <h3 className="text-base font-semibold text-gray-800 sm:text-lg">{name}</h3>
        <p className="text-sm text-gray-600 sm:text-base">{description}</p>
      </div>
    </motion.article>
  );
}