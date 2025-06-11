"use client";

import React from 'react';
import { motion } from 'framer-motion';
import DownloadButton from '@/components/DownloadButton';
import Image from 'next/image';

export default function StageErvaring() {
  return (
    <section className="py-16 bg-white text-gray-800 min-h-screen">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Mijn Stage-ervaring</h1>
          <p className="text-lg text-gray-600">
            Een driemaandse reis waarin ik een Sign-off-extensie ontwikkelde voor de Deploy Request-tool bij Remmicom.
          </p>
        </motion.div>

        {/* Bedrijf */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12 items-start">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-semibold">Over het Bedrijf</h2>
            <p className="text-gray-600 leading-relaxed">
              Remmicom is toonaangevend in IT-oplossingen voor Vlaamse gemeenten, met meer dan 200 klanten en een focus op digitale transformatie via software, infrastructuur en cloudplatforms.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Het bedrijf hecht veel waarde aan innovatie, veiligheid en gebruiksvriendelijkheid.
            </p>
          </motion.div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <Image
              src="/images/remmicom_logo.jpg"
              alt="Remmicom logo"
              width={240}
              height={240}
              className="rounded-lg shadow-lg object-cover"
            />
          </motion.div>
        </div>

        {/* Overzicht */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12 items-start">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-semibold">Mijn Rol</h2>
            <p className="text-gray-600 leading-relaxed">
              Als stagiair in een Agile-team heb ik een webextensie ontworpen en gebouwd om het sign-off-proces te digitaliseren en automatiseren.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Ik analyseerde de bestaande Word-gebaseerde workflow, creëerde mockups, werkte REST-API`s uit en implementeerde key features in Angular en .NET Core.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Ik werkte nauw samen met een collega-stagiair en senior developers om de kwaliteit en gebruikerservaring te optimaliseren.
            </p>
          </motion.div>

          
        </div>

        {/* Functionele Modules */}
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-semibold mb-4"
          >
            Belangrijkste Functionaliteiten
          </motion.h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Overzichtspagina met uitgebreide filters</li>
            <li>Formulieren voor aanmaken, bijwerken en kopiëren van sign-offs</li>
            <li>Versiebeheer en draft-functionaliteit voor concept- en definitieve documenten</li>
            <li>Template-editor voor default- en maatwerksjablonen per pakket/applicatie</li>
            <li>Optimistische locking voor collaboratief bewerken</li>
            <li>Rolgebaseerde autorisatie en audit trail van wijzigingen</li>
            <li>Automatische e-mailnotificaties en reminders bij statuswijzigingen</li>
            <li>Automatische goedkeuring van Deploy Requests bij “OK” sign-off</li>
          </ul>
        </div>

        {/* Technische Details */}
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-semibold mb-4"
          >
            Technologieën & Architectuur
          </motion.h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Voor de frontend werd Angular gebruikt voor dynamische componenten en state-management. De backend is in .NET Core opgebouwd, met REST-API`s voor dataflow, autorisatie en e-mailservices.
          </p>
          <p className="text-gray-600 leading-relaxed">
            De modulaire architectuur maakt hergebruik van formulieren, tabellen en services mogelijk. Versiebeheer en event logging zijn ingericht met Entity Framework en SQL Server.
          </p>
        </div>

        {/* Screenshots Sectie */}
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-semibold mb-6 text-center"
          >
            Screenshots van de Applicatie
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {['/images/crud.png', '/images/overview.png'].map((src, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="flex justify-center"
              >
                <a href={src} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={src}
                    alt={`Screenshot ${idx + 1}`}
                    width={400}
                    height={300}
                    className="rounded-lg shadow-md object-cover hover:opacity-80 transition"
                  />
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Download */}
        <div className="flex justify-center gap-4 mb-12">
          <DownloadButton
            href="/documents/realisatie_document.docx"
            label="Download Realisatiedocument"
          />
          <DownloadButton
            href="/documents/Analyse_Deploy_Request_tool_-_Sign-Off_extensie.docx"
            label="Download Analyse & Plan"
          />
        </div>
      </div>
    </section>
  );
}