"use client";

import { motion } from "framer-motion";

interface SectionHeroProps {
  title: string;
  description: string;
}

export default function SectionHero({ title, description }: SectionHeroProps) {
  return (
    <section className="relative z-10 pt-32 pb-12 lg:pb-16 bg-transparent">
      <div className="mx-auto max-w-310 px-5 sm:px-7 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="text-center"
        >
          <h1 className="text-[34px] sm:text-[44px] lg:text-[48px] font-light leading-[1.13] tracking-tight text-white drop-shadow-[0_6px_20px_rgba(0,0,0,0.65)]">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-[15px] lg:text-[16px] text-white/82 leading-[1.8] drop-shadow-[0_4px_16px_rgba(0,0,0,0.65)]">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
