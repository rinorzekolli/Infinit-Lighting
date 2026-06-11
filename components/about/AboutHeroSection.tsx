"use client";

import { motion } from "framer-motion";

export default function AboutHeroSection() {
  return (
    <section className="relative z-10 pt-32 pb-16 lg:pb-20 bg-transparent">
      <div className="mx-auto max-w-310 px-5 sm:px-7 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <h1 className="text-[34px] sm:text-[44px] lg:text-[48px] font-light leading-[1.13] tracking-tight text-white drop-shadow-[0_6px_20px_rgba(0,0,0,0.65)] mb-6">
              Rreth Infinit Lighting
            </h1>
            <p className="text-[15px] lg:text-[16px] text-white/82 leading-[1.8] drop-shadow-[0_4px_16px_rgba(0,0,0,0.65)]">
              Kompani e specializuar në projektimin, furnizimin, instalimin dhe
              mirëmbajtjen e sistemeve moderne LED për rrugë, autostrada, zonat
              urbane dhe hapësira publike.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="relative h-64 sm:h-72 lg:h-80"
          >
            <div className="absolute inset-0 border border-lime/30 bg-lime/5 flex items-center justify-center">
              <div className="text-center">
                <div className="text-[56px] font-light text-lime mb-3">
                  +500
                </div>
                <p className="text-[14px] text-white/60">
                  Projektesh të realizuara
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
