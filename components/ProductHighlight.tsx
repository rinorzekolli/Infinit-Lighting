"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function ProductHighlight() {
  return (
    <section className="relative py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/10 bg-dark-card/80 overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left Content */}
            <div className="p-8 sm:p-10 lg:p-14 flex flex-col justify-center">
              <span className="inline-block text-xs font-black tracking-widest text-lime uppercase mb-6">
                PRODUKTE PREMIUM
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">
                Ndriçues LED të gjeneratës së fundit
              </h2>
              <p className="mt-6 text-lg text-gray-text leading-relaxed max-w-lg font-medium">
                Performancë e lartë, dizajn modern dhe jetëgjatësi maksimale.
              </p>
              <a
                href="/produktet"
                className="mt-10 inline-flex items-center gap-3 rounded-full bg-lime px-8 py-3.5 text-sm font-bold text-background transition-all hover:bg-lime-dark hover:shadow-[0_0_24px_rgba(192,249,74,0.4)]"
              >
                MËSO MË SHUMË
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>

            {/* Right Product Image */}
            <div className="relative min-h-75 lg:min-h-100 bg-dark-navy flex items-center justify-center">
              <Image
                src="/images/Logo.png"
                alt="LED Street Light Product"
                fill
                className="object-contain p-8"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
