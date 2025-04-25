"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Mail, ArrowUp } from 'lucide-react';
import Link from 'next/link';

const socialLinks = [
  { icon: <Linkedin size={18} />, url: 'https://www.linkedin.com/in/milan-reverendo-41ba1829a/', label: 'LinkedIn' },
  { icon: <Github size={18} />, url: 'https://github.com/MilanReverendo', label: 'GitHub' },
  { icon: <Mail size={18} />, url: 'mailto:milanreverendo@gmail.com', label: 'Email' },
];

const footerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Footer: React.FC = () => (
  <footer className="w-full bg-white border-t border-gray-200 z-40">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
      transition={{ duration: 0.6 }}
      className="container mx-auto px-6 py-4 flex flex-col items-center space-y-4"
    >
      {/* Social Links */}
      <div className="flex space-x-4 justify-center">
        {socialLinks.map(({ icon, url, label }) => (
          <Link
            key={label}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            {icon}
          </Link>
        ))}
        {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
        aria-label="Back to top"
      >
        <ArrowUp size={18} className="mr-1" /> Top
      </button>
      </div>

      
    </motion.div>

    {/* Bottom Bar */}
    <div className="bg-gray-100 py-2">
      <p className="text-center text-xs text-gray-500">© {new Date().getFullYear()} Milan. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;