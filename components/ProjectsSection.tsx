"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "AUTOSTRADA PRISHTINË – FERIZAJ",
    description: "Ndriçim LED i autostradës",
    image: "/images/road-01.png",
  },
  {
    id: 2,
    title: 'RUGA "AGIM RAMADANI", PRISHTINË',
    description: "Ndriçim urban LED",
    image: "/images/road-02.png",
  },
  {
    id: 3,
    title: 'BOULEVARDI "BILL KLINTON", PRISHTINË',
    description: "Ndriçim urban inteligjent",
    image: "/images/road-03.png",
  },
  {
    id: 4,
    title: "RUGA PRIZREN – SUHAREKË",
    description: "Ndriçim rrugor LED",
    image: "/images/road-04.png",
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-10"
        >
          <h2 className="text-sm font-bold tracking-widest text-white uppercase">
            PROJEKTET TONA
          </h2>
          <div className="h-px w-12 bg-white/30" />
        </motion.div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden rounded mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xs font-bold text-white leading-snug tracking-wide">
                  {project.title}
                </h3>
                <p className="mt-1 text-xs text-white/50">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-12 flex justify-center"
        >
          <a
            href="/projektet"
            className="inline-flex items-center gap-2 rounded border border-white/30 px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-white/10 hover:border-white/50"
          >
            SHIKO TË GJITHA PROJEKTET
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
