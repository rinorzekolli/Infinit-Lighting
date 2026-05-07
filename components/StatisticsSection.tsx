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
    <section className="py-16 lg:py-20 border-t border-white/10 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-white">
                {stat.value}
              </div>
              <p className="mt-2 text-xs font-bold text-white/80 tracking-wide uppercase">
                {stat.label}
              </p>
              <p className="mt-1 text-xs text-white/40">{stat.sublabel}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
