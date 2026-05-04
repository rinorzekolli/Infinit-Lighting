"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Cpu, Wrench } from "lucide-react";
import { benefits } from "@/data/benefits";

const iconMap: Record<string, React.ElementType> = {
  Zap,
  Shield,
  Cpu,
  Wrench,
};

export default function BenefitsSection() {
  return (
    <section className="py-16 lg:py-24 border-t border-dark-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = iconMap[benefit.icon] || Zap;
            return (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-xl border border-white/10 bg-white/5 p-6 transition-all hover:border-lime/30 hover:bg-white/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-lime/10 transition-all group-hover:bg-lime/20 group-hover:shadow-[0_0_20px_rgba(192,249,74,0.15)]">
                  <Icon className="h-5 w-5 text-lime" strokeWidth={1.5} />
                </div>
                <h3 className="mt-4 text-base font-semibold text-white">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm text-gray-text leading-relaxed">
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
