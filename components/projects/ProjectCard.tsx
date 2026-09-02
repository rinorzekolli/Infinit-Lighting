"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Project } from "@/types/project";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projektet/${project.slug}`}>
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.45 }}
        className="group relative h-full overflow-hidden border border-white/12 transition-all duration-300 hover:border-lime/50 hover:shadow-[0_0_30px_rgba(192,249,74,0.1)]"
      >
        {/* Image Container */}
        <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden bg-black/40">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/30 to-black/60" />
        </div>

        {/* Content */}
        <div className="relative bg-[#080d15]/60 px-6 py-7 lg:px-7 lg:py-8">
          {/* Category & Location */}
          <div className="flex items-center justify-between gap-3 mb-3">
            <span className="text-[11px] font-semibold tracking-[0.08em] text-lime uppercase">
              {project.category}
            </span>
            <span className="text-[11px] text-white/50 truncate">
              {project.location}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-[16px] lg:text-[17px] font-semibold leading-[1.2] text-white mb-2 group-hover:text-lime transition-colors duration-300">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-[13px] text-white/62 leading-[1.6] mb-5">
            {project.shortDescription}
          </p>

          {/* Results Preview */}
          {project.results.length > 0 && (
            <div className="mb-5 space-y-1">
              {project.results.slice(0, 2).map((result, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="text-lime text-[10px] font-semibold mt-1">
                    ✓
                  </span>
                  <span className="text-[12px] text-white/60">{result}</span>
                </div>
              ))}
            </div>
          )}

          {/* CTA */}
          <div className="flex items-center gap-2 text-lime font-semibold text-[12px] tracking-[0.04em] group-hover:gap-3 transition-all duration-300">
            SHIKO PROJEKTIN <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
