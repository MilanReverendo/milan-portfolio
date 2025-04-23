"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const DownloadButton = ({ href, label }: { href: string; label: string }) => (
  <motion.a
    href={href}
    className="inline-flex items-center bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-2 px-6 rounded-lg shadow-lg hover:from-blue-600 hover:to-indigo-600 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all"
    download
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Download className="mr-2" size={18} />
    {label}
  </motion.a>
);

export default DownloadButton;
