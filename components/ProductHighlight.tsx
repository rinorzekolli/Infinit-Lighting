"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function ProductHighlight() {
  return (
    <section className="relative py-20 lg:py-28 bg-[#1a1a1a]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold tracking-widest text-lime uppercase">
                PRODUKTE PREMIUM
              </span>
              <div className="h-px w-12 bg-lime/50" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-white">
              Ndriçues LED të
              <br />
              gjeneratës së fundit
            </h2>
            <p className="mt-6 text-base text-white/60 leading-relaxed max-w-md">
              Performancë e lartë, dizajn modern dhe jetëgjatësi maksimale.
            </p>
            <a
              href="/produktet"
              className="mt-8 inline-flex items-center gap-2 rounded border border-white/30 px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-white/10 hover:border-white/50"
            >
              MËSO MË SHUMË
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

          {/* Right Product Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-80 lg:h-96 flex items-center justify-center"
          >
            <Image
              src="/images/led-street-light-product.png"
              alt="LED Street Light Product"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
