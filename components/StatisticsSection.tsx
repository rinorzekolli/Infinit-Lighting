"use client";

import { motion } from "framer-motion";

const stats = [
  {
    id: 1,
    value: "500+",
    label: "PROJEKTE TË REALIZUARA",
    sublabel: "në Kosovë dhe rajon",
  },
  {
    id: 2,
    value: "1M+",
    label: "METRA RRUGË TË NDRIÇUARA",
    sublabel: "me teknologji LED",
  },
  {
    id: 3,
    value: "70%",
    label: "KURSIM ENERGJIE",
    sublabel: "krahasuar me ndriçimin tradicional",
  },
  {
    id: 4,
    value: "10+",
    label: "VITE PËRVOJË",
    sublabel: "në ndriçim profesional",
  },
];

export default function StatisticsSection() {
  return (
    <section className="relative bg-[#070b12] pb-14 pt-2 lg:pb-16">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10">
        <div className="relative overflow-hidden border border-white/14 bg-[#080d15]/72 shadow-[0_24px_70px_rgba(0,0,0,0.42)]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(164,196,45,0.08),transparent_36%)]" />
          <div className="relative grid grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative px-4 py-9 text-center lg:py-10"
              >
                {index !== 0 && (
                  <div className="absolute left-0 top-1/2 hidden h-20 w-px -translate-y-1/2 bg-white/14 lg:block" />
                )}
                <div className="text-4xl sm:text-5xl lg:text-[54px] font-black text-lime drop-shadow-[0_0_18px_rgba(164,196,45,0.18)]">
                  {stat.value}
                </div>
                <p className="mt-3 text-xs font-black text-white tracking-wide uppercase">
                  {stat.label}
                </p>
                <p className="mt-2 text-xs text-white/50">{stat.sublabel}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
