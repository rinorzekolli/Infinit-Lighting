"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section className="py-16 lg:py-24 border-t border-dark-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="text-xs font-black tracking-widest text-lime uppercase">
            PORTFOLIO
          </span>
          <h2 className="mt-2 text-4xl sm:text-5xl font-black">
            PROJEKTET TONA
          </h2>
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
              className="group rounded-xl border border-white/10 bg-white/5 overflow-hidden transition-all hover:border-lime/30 hover:shadow-[0_0_30px_rgba(192,249,74,0.08)]"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-dark-card/80 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-sm font-semibold text-white leading-snug">
                  {project.title}
                </h3>
                <p className="mt-1.5 text-xs text-gray-text">
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
          className="mt-10 flex justify-center"
        >
          <a
            href="/projektet"
            className="inline-flex items-center gap-2 rounded-full border border-lime/50 px-8 py-3.5 text-sm font-bold text-lime transition-all hover:bg-lime/10 hover:border-lime"
          >
            SHIKO TË GJITHA PROJEKTET
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
