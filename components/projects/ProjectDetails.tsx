"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Project } from "@/types/project";
import { ArrowRight } from "lucide-react";

interface ProjectDetailsProps {
  project: Project;
}

export default function ProjectDetails({ project }: ProjectDetailsProps) {
  return (
    <section className="relative z-10 py-12 lg:py-16 bg-transparent">
      <div className="mx-auto max-w-310 px-5 sm:px-7 lg:px-10">
        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="relative h-80 sm:h-96 lg:h-[500px] overflow-hidden border border-white/12 mb-12 lg:mb-16"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 1280px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
            >
              {/* Category & Location */}
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-[12px] font-semibold tracking-[0.08em] text-lime uppercase">
                    {project.category}
                  </span>
                  <div className="h-px w-8 bg-lime/50" />
                </div>
                <div className="text-[13px] text-white/60">
                  {project.location}
                </div>
              </div>

              {/* Title */}
              <h1 className="text-[32px] sm:text-[40px] lg:text-[44px] font-light leading-[1.15] text-white mb-6">
                {project.title}
              </h1>

              {/* Description */}
              <p className="text-[15px] lg:text-[16px] text-white/72 leading-[1.8] mb-10">
                {project.description}
              </p>

              {/* Solution Section */}
              <div className="mb-10 border-l-2 border-lime pl-6">
                <h2 className="text-[14px] font-semibold text-lime uppercase tracking-[0.06em] mb-3">
                  Zgjidhja e aplikuar
                </h2>
                <p className="text-[14px] text-white/70 leading-[1.7]">
                  {project.solution}
                </p>
              </div>

              {/* Results Section */}
              {project.results.length > 0 && (
                <div className="mb-10">
                  <h2 className="text-[16px] font-semibold text-white mb-5">
                    Rezultatet e projektit:
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.results.map((result, idx) => (
                      <div
                        key={idx}
                        className="border border-white/15 bg-white/5 px-4 py-3 flex items-start gap-3"
                      >
                        <span className="text-lime font-semibold text-[12px] mt-0.5 shrink-0">
                          ✓
                        </span>
                        <span className="text-[13px] text-white/70">
                          {result}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Gallery */}
              {project.gallery && project.gallery.length > 1 && (
                <div className="mb-10">
                  <h2 className="text-[16px] font-semibold text-white mb-5">
                    Galeria e projektit:
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {project.gallery.slice(1).map((image, idx) => (
                      <div
                        key={idx}
                        className="relative h-48 sm:h-56 overflow-hidden border border-white/12"
                      >
                        <Image
                          src={image}
                          alt={`Gallery ${idx + 1}`}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="border border-white/12 bg-[#080d15]/60 p-6 lg:p-7 sticky top-32">
              <h2 className="text-[14px] font-semibold text-white mb-6 uppercase tracking-[0.06em]">
                Informacione
              </h2>

              <div className="space-y-6">
                {/* Kategoria */}
                <div>
                  <p className="text-[11px] font-semibold text-lime uppercase tracking-[0.06em] mb-2">
                    Tip projekti
                  </p>
                  <p className="text-[14px] text-white/80">
                    {project.category}
                  </p>
                </div>

                {/* Lokacioni */}
                <div>
                  <p className="text-[11px] font-semibold text-lime uppercase tracking-[0.06em] mb-2">
                    Lokacioni
                  </p>
                  <p className="text-[14px] text-white/80">
                    {project.location}
                  </p>
                </div>

                {/* Produktet e përdorura */}
                {project.usedProducts && project.usedProducts.length > 0 && (
                  <div>
                    <p className="text-[11px] font-semibold text-lime uppercase tracking-[0.06em] mb-2">
                      Produktet e përdorura
                    </p>
                    <div className="space-y-2">
                      {project.usedProducts.map((product, idx) => (
                        <p
                          key={idx}
                          className="text-[13px] text-white/70 capitalize"
                        >
                          • {product.replace(/-/g, " ")}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* CTA Buttons */}
              <div className="mt-8 space-y-3">
                <a
                  href="/kontakti"
                  className="w-full inline-flex items-center justify-center bg-lime px-6 py-4 text-[12px] font-semibold text-[#07100d] tracking-[0.04em] transition-all duration-300 hover:bg-lime-dark gap-2"
                >
                  KËRKESO PROJEKT <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="/produktet"
                  className="w-full inline-flex items-center justify-center border border-lime/70 px-6 py-4 text-[12px] font-semibold text-white tracking-[0.04em] transition-all duration-300 hover:bg-lime hover:text-[#07100d]"
                >
                  SHFLETONI PRODUKTET
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
