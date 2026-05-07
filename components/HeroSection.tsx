"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, Cpu, ArrowRight } from "lucide-react";
import Image from "next/image";

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
    <section className="relative min-h-[760px] lg:min-h-[820px] flex items-center overflow-hidden bg-[#050912]">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Hero-section-bg-image.png"
          alt="Highway with LED street lighting at night"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#03060b]/95 via-[#03060b]/58 to-[#03060b]/36" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#03060b]/55 via-transparent to-[#070b12]" />
        <div className="absolute inset-x-0 bottom-0 h-80 bg-gradient-to-b from-transparent via-[#070b12]/75 to-[#070b12]" />
        <div className="absolute -left-32 top-20 h-[520px] w-[520px] rounded-full bg-lime/10 blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-14 pt-32 pb-36">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-black leading-[1.08] tracking-tight text-white drop-shadow-[0_6px_24px_rgba(0,0,0,0.55)]">
                NDRIÇIMI QË
                <br />
                KRIJON SIGURI.
              </h1>
              <h2 className="mt-2 text-4xl sm:text-5xl lg:text-[60px] font-black leading-[1.08] tracking-tight text-lime drop-shadow-[0_0_22px_rgba(164,196,45,0.16)]">
                TEKNOLOGJIA QË
                <br />
                DREJTON TË ARDHMEN.
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 max-w-[560px] text-base lg:text-lg text-white/78 leading-relaxed"
            >
              Zgjidhje profesionale të ndriçimit LED për rrugë, autostrada, zona
              urbane dhe hapësira publike.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex flex-wrap gap-5"
            >
              <a
                href="/produktet"
                className="inline-flex items-center gap-2 bg-lime px-7 py-4 text-sm font-black text-[#07100d] shadow-[0_0_28px_rgba(164,196,45,0.22)] transition-all duration-300 hover:bg-lime-dark hover:translate-y-[-1px]"
              >
                ZBULO PRODUKTET
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/projektet"
                className="inline-flex items-center gap-2 border border-white/45 bg-black/15 px-7 py-4 text-sm font-black text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-lime/60"
              >
                SHIKO PROJEKTET
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          </div>

          <div className="lg:col-span-5 lg:pl-10">
            <div className="relative flex flex-col gap-8 border-l border-lime/70 pl-8">
              <div className="absolute -left-px top-0 h-full w-px bg-gradient-to-b from-transparent via-lime to-transparent shadow-[0_0_24px_rgba(164,196,45,0.45)]" />
              {heroFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                  className="flex items-start gap-5"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center text-white">
                    <feature.icon className="h-8 w-8" strokeWidth={1.15} />
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-white tracking-wide">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/68 leading-relaxed">
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
