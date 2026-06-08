"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function ProductHighlight() {
  return (
    <section className="relative z-20 -mt-20 pb-0 bg-transparent">
      <div className="relative mx-auto max-w-285 px-5 sm:px-7 lg:px-10">
        <div className="relative overflow-hidden border border-white/12 bg-[#080d15]/78 shadow-[0_26px_76px_rgba(0,0,0,0.62)] backdrop-blur-[2px]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_34%,rgba(255,255,255,0.09),transparent_32%),radial-gradient(circle_at_20%_20%,rgba(164,196,45,0.06),transparent_26%)]" />
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center px-7 py-9 sm:px-10 lg:px-16 lg:py-7">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.55 }}
              className="lg:col-span-5"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[12px] font-black tracking-[0.14em] text-lime uppercase">
                  PRODUKTE PREMIUM
                </span>
                <div className="h-px w-11 bg-lime/70" />
              </div>
              <h2 className="text-[28px] sm:text-[34px] lg:text-[33px] font-black leading-[1.12] text-white">
                Ndriçues LED të
                <br />
                gjeneratës së fundit
              </h2>
              <p className="mt-5 text-[15px] text-white/68 leading-relaxed max-w-md">
                Performancë e lartë, dizajn modern dhe jetëgjatësi maksimale.
              </p>
              <a
                href="/produktet"
                className="mt-7 inline-flex items-center gap-2 border border-lime/70 px-6 py-3 text-[12px] font-black text-white tracking-[0.04em] transition-all duration-300 hover:bg-lime hover:text-[#07100d]"
              >
                MËSO MË SHUMË <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24, scale: 0.985 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.55, delay: 0.16 }}
              className="relative lg:col-span-7 h-64 sm:h-72 lg:h-76.25 flex items-center justify-center"
            >
              <Image
                src="/images/led-street-light-product.png"
                alt="LED Street Light Product"
                fill
                className="object-contain object-[75%_50%] scale-180 drop-shadow-[0_30px_60px_rgba(255,255,255,4)]"
                sizes="(max-width: 1024px) 100vw, 108vw"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
