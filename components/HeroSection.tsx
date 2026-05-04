"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, Cpu } from "lucide-react";
import Image from "next/image";

const heroFeatures = [
  {
    icon: ShieldCheck,
    title: "Siguri Maksimale",
    description: "Ndriçim i besueshëm për çdo situatë.",
  },
  {
    icon: Zap,
    title: "Efiçiencë Energjetike",
    description: "Kursim energjie deri në 70%.",
  },
  {
    icon: Cpu,
    title: "Teknologji e Avancuar",
    description: "Sisteme smart dhe të qëndrueshme.",
  },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
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
        <div className="absolute inset-0 bg-linear-to-r from-background/20 via-background/40 to-background/20" />
        <div className="absolute inset-0 bg-background/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-32 lg:pb-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-none tracking-tight">
                NDRIÇIMI QË
                <br />
                KRIJON SIGURI.
              </h1>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-none tracking-tight text-lime mt-3">
                TEKNOLOGJIA QË
                <br />
                DREJTON TË ARDHMEN.
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 max-w-2xl text-lg sm:text-xl text-gray-text leading-relaxed font-medium"
            >
              Zgjidhje profesionale të ndriçimit LED për rrugë, autostrada, zona
              urbane dhe hapësira publike.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 flex flex-wrap gap-6"
            >
              <a
                href="/produktet"
                className="inline-flex items-center justify-center rounded-full bg-lime px-10 py-4 text-sm font-bold text-background transition-all hover:bg-lime-dark hover:shadow-[0_0_32px_rgba(192,249,74,0.4)]"
              >
                ZBULO PRODUKTET
              </a>
              <a
                href="/projektet"
                className="inline-flex items-center justify-center rounded-full border border-lime/50 px-10 py-4 text-sm font-bold text-lime transition-all hover:bg-lime/10 hover:border-lime"
              >
                SHIKO PROJEKTET
              </a>
            </motion.div>
          </div>

          {/* Right Features */}
          <div className="lg:col-span-5">
            <div className="flex flex-col gap-4">
              {heroFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                  className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-5 transition-all hover:border-lime/30 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(192,249,74,0.08)]"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-lime/15">
                    <feature.icon
                      className="h-5 w-5 text-lime"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-text leading-relaxed">
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
