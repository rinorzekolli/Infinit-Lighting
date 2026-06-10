"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function EnergyEfficiencySection() {
  return (
    <section className="relative z-10 py-12 lg:py-16 bg-transparent">
      <div className="mx-auto max-w-310 px-5 sm:px-7 lg:px-10">
        <div className="border border-white/12 bg-[#080d15]/78 overflow-hidden shadow-[0_26px_76px_rgba(0,0,0,0.62)] backdrop-blur-[2px]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_34%,rgba(192,249,74,0.08),transparent_32%)]" />

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 px-7 py-10 sm:px-10 lg:px-16 lg:py-12">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.55 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-[12px] font-black tracking-[0.14em] text-lime uppercase">
                  EFIÇIENCË ENERGJETIKE
                </span>
                <div className="h-px w-10 bg-lime/70" />
              </div>

              <h2 className="text-[28px] sm:text-[34px] lg:text-[36px] font-black leading-[1.15] text-white mb-6">
                Kursim Energjie
                <br />
                deri 70%
              </h2>

              <p className="text-[14px] text-white/68 leading-[1.8] mb-6 max-w-md">
                Ndriçuesit LED të Infinit Lighting kërkojnë shumë më pak energji
                se sistemet tradicionale të halogenureve dhe fluoreshencës.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "Konsum 70% më i ulët se ndriçimi tradicional",
                  "Reduksion i emetimeve të CO2 në mbi 80%",
                  "Jetëgjatësi 10 herë më e lartë",
                  "Efikasitet maksimal me dimming inteligjent",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-lime font-black text-[12px] mt-1">
                      ✓
                    </span>
                    <span className="text-[13px] text-white/70">{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="/produktet"
                className="inline-flex items-center gap-2 border border-lime/70 px-6 py-3 text-[12px] font-black text-white tracking-[0.04em] transition-all duration-300 hover:bg-lime hover:text-[#07100d]"
              >
                EKSPLORO PRODUKTET <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>

            {/* Right Stats */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.55, delay: 0.16 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { label: "Kursim Energjie", value: "70%" },
                { label: "Reduksion CO2", value: "85%" },
                { label: "Jetëgjatësi", value: "100K h" },
                { label: "ROI", value: "3-5 v" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="border border-lime/30 bg-lime/5 p-6 text-center"
                >
                  <div className="text-[32px] sm:text-[40px] font-black text-lime mb-2">
                    {stat.value}
                  </div>
                  <div className="text-[12px] text-white/60 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
