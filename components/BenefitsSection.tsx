"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Cpu, Wrench } from "lucide-react";

const benefits = [
  { id: 1, icon: Zap, title: "EFIKASITET I LARTË", description: "LED me efiçiencë të lartë ndriçimi dhe konsum minimal energjie." },
  { id: 2, icon: Shield, title: "QËNDRUESHMËRI", description: "Materiale cilësore dhe rezistente ndaj kushteve ekstreme." },
  { id: 3, icon: Cpu, title: "SISTEME SMART", description: "Kontroll i largët, sensorë dhe menaxhim inteligjent." },
  { id: 4, icon: Wrench, title: "INSTALIM I LEHTË", description: "Dizajn i projektuar për montim të shpejtë dhe mirëmbajtje minimale." },
];

export default function BenefitsSection() {
  return (
    <section className="relative z-10 bg-transparent py-12 lg:py-14">
      <div className="mx-auto max-w-[1140px] px-5 sm:px-7 lg:px-10">
        <div className="border-x border-b border-white/10 bg-black/24 px-6 py-10 backdrop-blur-[1px]">
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.45 }} className="flex items-center justify-center gap-4 mb-10">
            <div className="h-px flex-1 bg-white/16" /><span className="text-[12px] font-black tracking-[0.13em] text-lime uppercase whitespace-nowrap">ZHVILLUAR PËR PERFORMANCË</span><div className="h-px flex-1 bg-white/16" />
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 lg:gap-8">
            {benefits.map((benefit, index) => { const Icon = benefit.icon; return (
              <motion.div key={benefit.id} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.45, delay: index * 0.08 }} className="group relative px-3 py-3 text-left sm:text-center">
                <div className="relative flex justify-start sm:justify-center mb-5"><Icon className="h-10 w-10 text-lime" strokeWidth={1.15} /></div>
                <h3 className="relative text-[12px] font-black text-white tracking-[0.04em] mb-3">{benefit.title}</h3>
                <p className="relative text-[12px] text-white/60 leading-[1.75]">{benefit.description}</p>
              </motion.div>
            );})}
          </div>
        </div>
      </div>
    </section>
  );
}
