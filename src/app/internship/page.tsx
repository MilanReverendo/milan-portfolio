"use client";

import React from 'react';
import { motion } from 'framer-motion';
import DownloadButton from '@/components/DownloadButton';
import Image from 'next/image';

export default function StageErvaring() {
  return (
    <section className="py-16 bg-gray-50 text-gray-800 min-h-screen">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Mijn Stage-ervaring</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Drie maanden bij Remmicom waarin ik de Sign-off extensie voor de Deploy Request-tool heb ontworpen, ontwikkeld en in productie gebracht.
          </p>
        </motion.div>

        {/* Bedrijfsintroductie */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12 items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-semibold">Over Remmicom</h2>
            <p className="text-gray-600 leading-relaxed">
              Remmicom is toonaangevend in IT-oplossingen voor Vlaamse gemeenten. Met meer dan 200 klanten levert het bedrijf maatwerk op het gebied van softwareontwikkeling, infrastructuur en cloudservices.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Innovatie, veiligheid en gebruiksvriendelijkheid staan centraal in alle projecten, wat dit een inspirerende omgeving maakt voor junior en ervaren developers.
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

        {/* Mijn rol en aanpak */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold mb-4">Mijn Rol & Aanpak</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Als stagiair heb ik in een Agile-team gewerkt aan de digitalisering van het sign-off-proces. Na een grondige analyse van de bestaande Word-gebaseerde workflow, ontwierp ik mockups en definieerde ik REST-API’s. Daarna implementeerde ik in Angular 19 en .NET 8 de belangrijkste features, waarbij ik voortdurend afstemde met senior developers en eindgebruikers.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Mijn werkwijze bestond uit wekelijkse demo’s, peer reviews en scrums, zodat ik snel kon bijsturen en feedback integreerde in de sprintplanning.
          </p>
        </motion.div>

        {/* Belangrijkste Functionaliteiten */}
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-semibold mb-4"
          >
            Belangrijkste Functionaliteiten
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-600">
            <div>
              <h3 className="font-medium">Workflow & Overzicht</h3>
              <p className="mt-2">
                Een centrale overzichtspagina met filters op status, applicatie en tester, waarin gebruikers alle open, in behandeling zijnde en afgesloten sign-offs terugvinden.
              </p>
            </div>
            <div>
              <h3 className="font-medium">Templates & Versiebeheer</h3>
              <p className="mt-2">
                Customizable templates per domein, met default-waarden en een editor voor het aanmaken en aanpassen. Draft-functionaliteit en versiebeheer zorgen voor duidelijke concept- en definitieve documenten.
              </p>
            </div>
            <div>
              <h3 className="font-medium">Collaboratie & Locking</h3>
              <p className="mt-2">
                Optimistische locking voorkomt file-locks en faciliteert gelijktijdige bewerking. Eventueel opkomende merge-conflicten worden duidelijk getoond zodat testers deze snel kunnen oplossen.
              </p>
            </div>
            <div>
              <h3 className="font-medium">Notificaties & Integratie</h3>
              <p className="mt-2">
                Automatische e-mailnotificaties bij statusveranderingen en inactiviteit, en automatische goedkeuring van Deploy Requests wanneer een sign-off als "OK" is gemarkeerd.
              </p>
            </div>
          </div>
        </div>

        {/* Technische Architectuur */}
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
          <p className="text-gray-600 leading-relaxed mb-3">
            De frontend is opgebouwd met Angular 19, gebruikmakend van modulaire componenten, services en state-management. Voor de backend is .NET 8 ingezet, met REST-API’s, Entity Framework Core voor data‑toegang en SQL Server als database.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Autorisatie is geregeld via role-based access control en JWT-tokens.  De applicatie is gehost in Azure, met CI/CD-pijplijnen voor automatische deployments.
          </p>
        </div>

        {/* Screenshots */}
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-semibold mb-6 text-center"
          >
            Applicatie in Actie
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
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

        {/* Download Links */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <DownloadButton
            href="/documents/realisatiedocument.pdf"
            label="Download Realisatiedocument"
          />
          <DownloadButton
            href="/documents/reflectie.pdf"
            label="Download Reflectieverslag"
          />
        </div>
      </div>
    </section>
  );
}
