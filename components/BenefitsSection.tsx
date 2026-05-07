"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Cpu, Wrench } from "lucide-react";

const benefits = [
  {
    id: 1,
    icon: Zap,
    title: "EFIKASITET I LARTË",
    description: "LED me efiçiencë të lartë ndriçimi dhe konsum minimal energjie.",
  },
  {
    id: 2,
    icon: Shield,
    title: "QËNDRUESHMËRI",
    description: "Materiale cilësore dhe rezistente ndaj kushteve ekstreme.",
  },
  {
    id: 3,
    icon: Cpu,
    title: "SISTEME SMART",
    description: "Kontroll i largët, sensorë dhe menaxhim inteligjent.",
  },
  {
    id: 4,
    icon: Wrench,
    title: "INSTALIM I LEHTË",
    description: "Dizajn i projektuar për montim të shpejtë dhe mirëmbajtje minimale.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="relative z-10 -mt-px bg-[#090e16] py-14 lg:py-16">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/10" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white/10" />

      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <div className="h-px flex-1 bg-white/16" />
          <span className="text-xs font-black tracking-widest text-lime uppercase whitespace-nowrap">
            ZHVILLUAR PËR PERFORMANCË
          </span>
          <div className="h-px flex-1 bg-white/16" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative px-4 py-4 text-center"
              >
                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-white/[0.025]" />
                <div className="relative flex justify-center mb-5">
                  <Icon className="h-11 w-11 text-lime drop-shadow-[0_0_16px_rgba(164,196,45,0.25)]" strokeWidth={1.15} />
                </div>
                <h3 className="relative text-sm font-black text-white tracking-wide mb-3">
                  {benefit.title}
                </h3>
                <p className="relative text-sm text-white/56 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
