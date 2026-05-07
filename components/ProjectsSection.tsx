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
    <section className="relative bg-[#070b12] py-14 lg:py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(164,196,45,0.055),transparent_34%)]" />

      <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-10"
        >
          <h2 className="text-base font-black tracking-widest text-lime uppercase">
            PROJEKTET TONA
          </h2>
          <div className="h-px w-12 bg-lime/55" />
        </motion.div>

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
              <div className="relative h-48 overflow-hidden border border-white/8 bg-black/35 shadow-[0_18px_38px_rgba(0,0,0,0.36)]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050912]/70 via-transparent to-transparent opacity-75" />
              </div>

              <div className="border-x border-b border-white/8 bg-[#080d15]/70 px-4 py-4">
                <h3 className="text-xs font-black text-white leading-snug tracking-wide">
                  {project.title}
                </h3>
                <p className="mt-2 text-xs text-white/52">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-12 flex justify-center"
        >
          <a
            href="/projektet"
            className="inline-flex items-center gap-2 border border-lime/65 bg-black/10 px-7 py-3.5 text-sm font-black text-white transition-all duration-300 hover:bg-lime hover:text-[#07100d] hover:shadow-[0_0_28px_rgba(164,196,45,0.22)]"
          >
            SHIKO TË GJITHA PROJEKTET
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
