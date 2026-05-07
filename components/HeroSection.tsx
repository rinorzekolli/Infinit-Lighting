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
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Hero-section-bg-image.png"
          alt="Highway with LED street lighting at night"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-white">
                NDRIÇIMI QË
                <br />
                KRIJON SIGURI.
              </h1>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-lime italic mt-2">
                TEKNOLOGJIA QË
                <br />
                DREJTON TË ARDHMEN.
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 max-w-lg text-base text-white/70 leading-relaxed"
            >
              Zgjidhje profesionale të ndriçimit LED për rrugë, autostrada, zona
              urbane dhe hapësira publike.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="/produktet"
                className="inline-flex items-center gap-2 rounded bg-lime px-6 py-3 text-sm font-bold text-background transition-all duration-300 hover:bg-lime-dark"
              >
                ZBULO PRODUKTET
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/projektet"
                className="inline-flex items-center gap-2 rounded border border-white/30 px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-white/10 hover:border-white/50"
              >
                SHIKO PROJEKTET
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          </div>

          {/* Right Features */}
          <div className="lg:col-span-5">
            <div className="flex flex-col gap-6">
              {heroFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-lime/30 bg-lime/10">
                    <feature.icon
                      className="h-5 w-5 text-lime"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white tracking-wide">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-sm text-white/60">
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
