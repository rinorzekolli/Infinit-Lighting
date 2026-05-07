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
    <section className="py-16 lg:py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-4 mb-14"
        >
          <div className="h-px flex-1 bg-white/20" />
          <span className="text-xs font-bold tracking-widest text-white/60 uppercase whitespace-nowrap">
            ZHVILLUAR PËR PERFORMANCË
          </span>
          <div className="h-px flex-1 bg-white/20" />
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-5">
                  <Icon
                    className="h-10 w-10 text-lime"
                    strokeWidth={1}
                  />
                </div>
                <h3 className="text-sm font-bold text-white tracking-wide mb-3">
                  {benefit.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">
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
