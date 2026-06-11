"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, Cpu, ArrowRight } from "lucide-react";

const heroFeatures = [
  {
    icon: ShieldCheck,
    title: "SIGURI MAKSIMALE",
    description: "Ndriçim i besueshëm për çdo situatë.",
  },
  {
    icon: Zap,
    title: "EFIÇIENCË ENERGJETIKE",
    description: "Kursim energjie deri në 70%.",
  },
  {
    icon: Cpu,
    title: "TEKNOLOGJI E AVANCUAR",
    description: "Sisteme smart dhe të qëndrueshme.",
  },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-172.5 lg:min-h-181.25 flex items-center overflow-hidden bg-transparent">
      <div className="relative z-10 mx-auto w-full max-w-310 px-5 sm:px-7 lg:px-10 pt-28 pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              <h1 className="text-[34px] sm:text-[44px] lg:text-[48px] font-light leading-[1.13] tracking-tight text-white drop-shadow-[0_6px_20px_rgba(0,0,0,0.65)]">
                NDRIÇIMI QË
                <br />
                KRIJON SIGURI.
              </h1>
              <h2 className="mt-2 text-[32px] sm:text-[43px] lg:text-[47px] font-light leading-[1.12] tracking-[-0.02em] text-lime drop-shadow-[0_0_20px_rgba(164,196,45,0.18)]">
                TEKNOLOGJIA QË
                <br />
                DREJTON TË ARDHMEN.
              </h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="mt-7 max-w-138.75 text-[15px] lg:text-[16px] text-white/82 leading-[1.8] drop-shadow-[0_4px_16px_rgba(0,0,0,0.65)]"
            >
              Zgjidhje profesionale të ndriçimit LED për rrugë, autostrada, zona
              urbane dhe hapësira publike.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.32 }}
              className="mt-9 flex flex-wrap gap-5"
            >
              <a
                href="/produktet"
                className="inline-flex items-center gap-2 bg-lime px-6 py-3.5 text-[12px] font-semibold text-[#07100d] tracking-[0.04em] transition-all duration-300 hover:bg-lime-dark"
              >
                ZBULO PRODUKTET <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/projektet"
                className="inline-flex items-center gap-2 border border-white/45 bg-black/20 px-6 py-3.5 text-[12px] font-semibold text-white tracking-[0.04em] transition-all duration-300 hover:bg-white/10 hover:border-lime/60"
              >
                SHIKO PROJEKTET <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          </div>
          <div className="lg:col-span-5 lg:pl-12">
            <div className="relative flex flex-col gap-9 border-l border-lime/70 pl-8">
              <div className="absolute -left-px top-0 h-full w-px bg-linear-to-b from-transparent via-lime to-transparent" />
              {heroFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.45, delay: 0.28 + index * 0.12 }}
                  className="flex items-start gap-5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white drop-shadow-[0_4px_14px_rgba(0,0,0,0.7)]">
                    <feature.icon className="h-8 w-8" strokeWidth={1.1} />
                  </div>
                  <div>
                    <h3 className="text-[12px] font-semibold text-white tracking-[0.04em] drop-shadow-[0_4px_14px_rgba(0,0,0,0.7)]">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-[12px] text-white/72 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
