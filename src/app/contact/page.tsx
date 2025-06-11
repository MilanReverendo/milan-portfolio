"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from 'emailjs-com';

export default function Contactpagina() {
  const [formData, setFormData] = useState({ naam: "", email: "", bericht: "" });
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    try {
      const result = await emailjs.send(
        'service_kdltcgr',
        'template_41pmf9c',
        formData,
        'Hpzv7qND_3KXZufmv'
      );

      if (result.status === 200) {
        setStatus("succes");
        setFormData({ naam: "", email: "", bericht: "" });
      } else {
        setStatus("fout");
      }
    } catch (error) {
      console.error("Fout bij verzenden e-mail:", error);
      setStatus("fout");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-white text-gray-800 min-h-screen">
      <div className="container mx-auto px-6 text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold mb-4">Neem <span className="text-amber-600">Contact</span> Op</h1>
          <p className="text-lg font-light text-gray-600">
            Heb je een vraag of wil je gewoon een berichtje sturen? Ik hoor graag van je!
          </p>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 max-w-2xl">
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="bg-gray-100 rounded-xl shadow-lg p-8 mb-6"
        >
          <div className="mb-6">
            <label htmlFor="naam" className="block text-sm font-medium mb-2 text-gray-700">Naam</label>
            <input
              type="text"
              id="naam"
              name="naam"
              value={formData.naam}
              onChange={handleChange}
              className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg shadow-sm focus:border-amber-600 focus:ring-2 focus:ring-amber-600 transition-colors duration-200 placeholder-gray-400"
              placeholder="Jouw naam"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg shadow-sm focus:border-amber-600 focus:ring-2 focus:ring-amber-600 transition-colors duration-200 placeholder-gray-400"
              placeholder="Jouw e-mailadres"
              required
            />
          </div>

          <div className="mb-8">
            <label htmlFor="bericht" className="block text-sm font-medium mb-2 text-gray-700">Bericht</label>
            <textarea
              id="bericht"
              name="bericht"
              value={formData.bericht}
              onChange={handleChange}
              rows={6}
              className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg shadow-sm focus:border-amber-600 focus:ring-2 focus:ring-amber-600 transition-colors duration-200 placeholder-gray-400"
              placeholder="Jouw bericht"
              required
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={isSubmitting}
            className={`w-full bg-amber-600 text-white py-3 rounded-xl font-medium shadow-lg hover:bg-amber-700 focus:outline-none focus:ring-4 focus:ring-amber-300 transition-colors duration-200 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isSubmitting ? "Verzenden..." : "Verstuur bericht"}
          </motion.button>
        </motion.form>

        {status === "succes" && <p className="text-green-600 text-center">Bericht is succesvol verzonden!</p>}
        {status === "fout" && <p className="text-red-600 text-center">Verzenden is mislukt. Probeer het opnieuw.</p>}
      </div>

      <div className="container mx-auto px-6 text-center mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold mb-4">Andere manieren om te <span className="text-amber-600">verbinden</span></h2>
          <p className="text-lg font-light text-gray-600 mb-6">
            Je kunt me ook bereiken via onderstaande kanalen.
          </p>
          <div className="flex justify-center space-x-6 text-amber-600">
            <a href="mailto:milanreverendo@gmail.com" className="hover:underline">E-mail</a>
            <span>|</span>
            <a href="https://www.linkedin.com/in/milan-reverendo-41ba1829a/" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
            <span>|</span>
            <a href="https://github.com/MilanReverendo" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
