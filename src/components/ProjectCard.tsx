"use client";
import React from "react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  imageUrl?: string;
  tags?: string[];
  onViewMore?: () => void; // New optional prop
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  link,
  imageUrl,
  tags,
  onViewMore,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:border-transparent"
    >
      {imageUrl && (
        <div className="h-48 w-full overflow-hidden">
          <img
            src={imageUrl}
            alt={`${title} screenshot`}
            className="object-cover h-full w-full hover:scale-105 transform transition-transform duration-300"
          />
        </div>
      )}
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-3 text-gray-800">{title}</h2>
        <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
        {tags && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <button
          onClick={onViewMore}
          className="inline-block mt-2 text-blue-600 font-medium hover:underline"
        >
          View More &rarr;
        </button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
