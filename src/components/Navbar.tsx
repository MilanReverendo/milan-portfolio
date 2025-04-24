"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Me", href: "/about" },
  { label: "Internship", href: "/internship" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const linkVariants = {
  initial: { y: 0 },
  hover: { y: -3 },
};

const underlineVariants = {
  initial: { width: 0 },
  animate: { width: "100%" },
};

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 w-full z-50 bg-white border-b border-gray-200 opacity-90">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-bold text-gray-800"
        >
          <Link href="/">Milan.dev</Link>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <motion.div key={item.href} className="relative">
                <Link
                  href={item.href}
                  className={`text-gray-700 font-medium transition-colors ${
                    isActive ? "text-blue-600" : "hover:text-blue-600"
                  }`}
                >
                  <motion.span
                    variants={linkVariants}
                    initial="initial"
                    whileHover="hover"
                  >
                    {item.label}
                  </motion.span>
                </Link>
                <AnimatePresence>
                  {isActive && (
                    <motion.span
                      variants={underlineVariants}
                      initial="initial"
                      animate="animate"
                      exit="initial"
                      className="absolute left-0 bottom-[-2px] h-0.5 bg-blue-600"
                    />
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
          className="lg:hidden text-gray-700"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-200"
          >
            <nav className="flex flex-col items-center py-4 space-y-4">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-gray-700 font-medium text-lg transition-colors ${
                      isActive ? "text-blue-600" : "hover:text-blue-600"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;