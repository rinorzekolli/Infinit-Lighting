"use client";

import { motion } from "framer-motion";
import {
  Cpu,
  Zap,
  Shield,
  Cloud,
  Smartphone,
  Settings,
} from "lucide-react";

const technologies = [
  {
    id: 1,
    icon: Cpu,
    title: "AI-POWERED CONTROL",
    description:
      "Sisteme inteligjente të bazuara në AI për optimizimin automatik të ndriçimit",
  },
  {
    id: 2,
    icon: Cloud,
    title: "CLOUD INTEGRATION",
    description:
      "Integrim me serverat e shtuar për të dhëna në kohë reale dhe analizë",
  },
  {
    id: 3,
    icon: Smartphone,
    title: "MOBILE APP",
    description:
      "Aplikacion mobil me ndërfaqe intuitiv për kontroll nga çdo vend",
  },
  {
    id: 4,
    icon: Shield,
    title: "SIGURËSI MAKSIMALE",
    description:
      "Enkriptim end-to-end dhe protokolle sigurie të certifikuara",
  },
  {
    id: 5,
    icon: Zap,
    title: "ENERGY EFFICIENT",
    description:
      "Teknologji që zvogëlon konsumin energjitik deri në 60%",
  },
  {
    id: 6,
    icon: Settings,
    title: "CUSTOMIZABLE",
    description:
      "Përshtatje plotë sipas kërkesave specifike të projektit tuaj",
  },
];

export default function TechnologySection() {
  return (
    <section
      className="relative z-10 py-16 lg:py-20"
      style={{ backgroundColor: "#03060C" }}
    >
      <div className="mx-auto max-w-285 px-5 sm:px-7 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.45 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <div className="h-px flex-1 bg-white/16" />
          <span className="text-[12px] font-black tracking-[0.13em] text-lime uppercase whitespace-nowrap">
            TEKNOLOGJIA BASHKËKOHORE
          </span>
          <div className="h-px flex-1 bg-white/16" />
        </motion.div>

        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="text-3xl lg:text-5xl font-bold text-white text-center mb-4"
          >
            Teknologjia në Zemër të Zgjidhjes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="text-center text-white/60 max-w-2xl mx-auto"
          >
            Përdorim teknologjinë më të avancuar për të siguruar përformancë
            maksimale dhe besueshmëri në çdo situatë
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="border border-white/10 bg-white/5 backdrop-blur-md p-8 hover:border-lime/50 hover:bg-white/8 transition-all duration-300 group"
              >
                <div className="mb-6">
                  <Icon className="w-10 h-10 text-lime group-hover:scale-110 transition-transform duration-300" />
                </div>

                <h3 className="text-lg font-bold text-white mb-3">
                  {tech.title}
                </h3>
                <p className="text-sm text-white/60">{tech.description}</p>

                <div className="mt-6 h-1 w-12 bg-gradient-to-r from-lime to-transparent" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
