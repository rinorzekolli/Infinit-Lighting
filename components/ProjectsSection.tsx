"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const projects = [
  { id: 1, title: "AUTOSTRADA PRISHTINË – FERIZAJ", description: "Ndriçim LED i autostradës", image: "/images/road-01.png" },
  { id: 2, title: 'RUGA "AGIM RAMADANI", PRISHTINË', description: "Ndriçim urban LED", image: "/images/road-02.png" },
  { id: 3, title: 'BOULEVARDI "BILL KLINTON", PRISHTINË', description: "Ndriçim urban inteligjent", image: "/images/road-03.png" },
  { id: 4, title: "RUGA PRIZREN – SUHAREKË", description: "Ndriçim rrugor LED", image: "/images/road-04.png" },
];

export default function ProjectsSection() {
  return (
    <section className="relative bg-transparent py-12 lg:py-14">
      <div className="relative mx-auto max-w-[1140px] px-5 sm:px-7 lg:px-10">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.45 }} className="flex items-center gap-3 mb-9">
          <h2 className="text-[15px] font-black tracking-[0.06em] text-lime uppercase">PROJEKTET TONA</h2><div className="h-px w-12 bg-lime/55" />
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {projects.map((project, index) => (
            <motion.div key={project.id} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.45, delay: index * 0.08 }} className="group cursor-pointer">
              <div className="relative h-[158px] overflow-hidden border border-white/8 bg-black/35 shadow-[0_18px_34px_rgba(0,0,0,0.34)]"><Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" /><div className="absolute inset-0 bg-gradient-to-t from-[#050912]/70 via-transparent to-transparent opacity-75" /></div>
              <div className="border-x border-b border-white/8 bg-black/34 px-4 py-4 backdrop-blur-[1px]"><h3 className="text-[11px] font-black text-white leading-snug tracking-[0.035em]">{project.title}</h3><p className="mt-2 text-[12px] text-white/58">{project.description}</p></div>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: 0.25 }} className="mt-10 flex justify-center">
          <a href="/projektet" className="inline-flex items-center gap-2 border border-lime/65 bg-black/22 px-7 py-3 text-[12px] font-black text-white tracking-[0.04em] transition-all duration-300 hover:bg-lime hover:text-[#07100d]">SHIKO TË GJITHA PROJEKTET <ArrowRight className="h-4 w-4" /></a>
        </motion.div>
      </div>
    </section>
  );
}
