"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section className="bg-white text-gray-800 py-16 min-h-screen">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto text-center mb-8"
      >
        <h1 className="text-4xl font-extrabold mb-3 sm:text-5xl">
          Get in <span className="text-yellow-500">Touch</span>
        </h1>
        <p className="text-base font-light sm:text-lg">
          Have a question, a project in mind, or just want to say hi? I'd love to hear from you!
        </p>
      </motion.div>
      {/* Form */}
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="bg-gray-100 rounded-lg shadow-lg p-6"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg shadow-sm focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 transition-colors duration-200 placeholder-gray-400"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg shadow-sm focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 transition-colors duration-200 placeholder-gray-400"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6} // Increased for better visibility
              className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg shadow-sm focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 transition-colors duration-200 placeholder-gray-400"
              placeholder="Your Message"
              required
            />
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-yellow-500 text-white py-2 rounded-lg font-medium shadow-lg hover:bg-yellow-600 focus:outline-none focus:ring-4 focus:ring-yellow-300"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.form>
        {status === "success" && <p className="text-green-600 mt-4">Message sent successfully!</p>}
        {status === "error" && <p className="text-red-600 mt-4">Failed to send the message. Try again.</p>}
      </div>
      {/* Contact Information */}
      <div className="container mx-auto text-center mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-3 sm:text-3xl">Other Ways to Connect</h2>
          <p className="text-base font-light mb-6 sm:text-lg">
            You can also reach me via email or follow me on my social media channels.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="mailto:your-email@example.com"
              className="text-yellow-500 hover:underline"
            >
              Email Me
            </a>
            <span>|</span>
            <a
              href="https://www.linkedin.com/in/your-profile"
              className="text-yellow-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <span>|</span>
            <a
              href="https://github.com/your-profile"
              className="text-yellow-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}