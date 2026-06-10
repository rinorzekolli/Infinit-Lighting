"use client";

import { motion } from "framer-motion";

export default function MissionVisionSection() {
  return (
    <section className="relative z-10 py-12 lg:py-16 bg-transparent">
      <div className="mx-auto max-w-310 px-5 sm:px-7 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.55 }}
            className="border border-white/12 bg-[#080d15]/60 p-8 lg:p-10"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[12px] font-black tracking-[0.14em] text-lime uppercase">
                MISIONI
              </span>
              <div className="h-px flex-1 bg-lime/50" />
            </div>

            <h2 className="text-[24px] sm:text-[28px] font-black text-white mb-4">
              Të ofrojmë zgjidhje të sigurta, efikase dhe moderne të ndriçimit
              LED
            </h2>

            <p className="text-[14px] text-white/70 leading-[1.8]">
              Përmes teknologjisë së avancuar dhe shërbimit të përkushtuar, ne
              përpiqemi të sigurojmë ndriçim të lartë cilësie për rrugë,
              autostrada dhe hapësira publike, duke kontribuar në siguri,
              efikasitet energjetik dhe zhvillim urban.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="border border-white/12 bg-[#080d15]/60 p-8 lg:p-10"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[12px] font-black tracking-[0.14em] text-lime uppercase">
                VIZIONI
              </span>
              <div className="h-px flex-1 bg-lime/50" />
            </div>

            <h2 className="text-[24px] sm:text-[28px] font-black text-white mb-4">
              Të jemi partner i besueshëm në zhvillimin e infrastrukturës
              moderne të ndriçimit
            </h2>

            <p className="text-[14px] text-white/70 leading-[1.8]">
              Në Kosovë dhe në rajon, ne dëshirojmë të bëhemi referenca në
              implementimin e zgjidhjeve LED inteligjente, duke përmbushur
              standardet më të larta europiane të cilësisë dhe sigurisë.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
