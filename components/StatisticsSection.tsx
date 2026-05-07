"use client";

import { motion } from "framer-motion";

const stats = [
  { id: 1, value: "500+", label: "PROJEKTE TË REALIZUARA", sublabel: "në Kosovë dhe rajon" },
  { id: 2, value: "1M+", label: "METRA RRUGË TË NDRIÇUARA", sublabel: "me teknologji LED" },
  { id: 3, value: "70%", label: "KURSIM ENERGJIE", sublabel: "krahasuar me ndriçimin tradicional" },
  { id: 4, value: "10+", label: "VITE PËRVOJË", sublabel: "në ndriçim profesional" },
];

export default function StatisticsSection() {
  return (
    <section className="relative bg-transparent pb-12 pt-0 lg:pb-14">
      <div className="mx-auto max-w-[1140px] px-5 sm:px-7 lg:px-10">
        <div className="relative overflow-hidden border border-white/14 bg-black/26 shadow-[0_24px_68px_rgba(0,0,0,0.42)] backdrop-blur-[1px]">
          <div className="relative grid grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div key={stat.id} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: index * 0.08 }} className="relative px-4 py-8 text-center lg:py-9">
                {index !== 0 && <div className="absolute left-0 top-1/2 hidden h-20 w-px -translate-y-1/2 bg-white/14 lg:block" />}
                <div className="text-[36px] sm:text-[44px] lg:text-[42px] font-black text-lime">{stat.value}</div>
                <p className="mt-3 text-[11px] font-black text-white tracking-[0.04em] uppercase">{stat.label}</p>
                <p className="mt-2 text-[12px] text-white/55">{stat.sublabel}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
