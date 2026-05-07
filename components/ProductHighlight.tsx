"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function ProductHighlight() {
  return (
    <section className="relative -mt-24 z-20 pb-0">
      <div className="pointer-events-none absolute inset-x-0 -top-28 h-56 bg-gradient-to-b from-transparent via-[#070b12]/85 to-[#070b12]" />

      <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10">
        <div className="relative overflow-hidden border border-white/10 bg-[#0b1018]/95 shadow-[0_28px_80px_rgba(0,0,0,0.65)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_34%,rgba(255,255,255,0.10),transparent_34%),radial-gradient(circle_at_20%_20%,rgba(164,196,45,0.08),transparent_28%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.035] to-black/20" />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center px-8 py-12 sm:px-12 lg:px-20 lg:py-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-black tracking-widest text-lime uppercase">
                  PRODUKTE PREMIUM
                </span>
                <div className="h-px w-12 bg-lime/70" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black leading-tight text-white">
                Ndriçues LED të
                <br />
                gjeneratës së fundit
              </h2>
              <p className="mt-5 text-base text-white/66 leading-relaxed max-w-md">
                Performancë e lartë, dizajn modern dhe jetëgjatësi maksimale.
              </p>
              <a
                href="/produktet"
                className="mt-8 inline-flex items-center gap-2 border border-lime/70 px-7 py-3.5 text-sm font-black text-white transition-all duration-300 hover:bg-lime hover:text-[#07100d] hover:shadow-[0_0_28px_rgba(164,196,45,0.24)]"
              >
                MËSO MË SHUMË
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30, scale: 0.98 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative lg:col-span-7 h-72 sm:h-80 lg:h-[340px] flex items-center justify-center"
            >
              <div className="absolute right-6 top-8 h-44 w-72 rounded-full bg-white/10 blur-[70px]" />
              <Image
                src="/images/led-street-light-product.png"
                alt="LED Street Light Product"
                fill
                className="object-contain drop-shadow-[0_28px_42px_rgba(0,0,0,0.62)]"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
