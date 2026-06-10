"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Wifi,
  Smartphone,
  Radio,
  Wind,
  Clock,
  LucideIcon,
} from "lucide-react";

interface TechFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: TechFeature[] = [
  {
    icon: Zap,
    title: "Efiçiencë Energjetike",
    description:
      "LED me efiçiencë deri 130 lm/W, kursim energjie deri 70% krahasuar me ndriçimin tradicional.",
  },
  {
    icon: Wifi,
    title: "Sisteme Smart",
    description:
      "Kontroll i largët përmes 4G LTE, WiFi ose Ethernet. Monitorim në kohë reale të gjithë sistemeve.",
  },
  {
    icon: Smartphone,
    title: "Aplikacioni Mobile",
    description:
      "Menaxho të gjithë ndriçuesit drejtpërdrejtë nga telefoni. Dashboard interaktiv dhe raportim real-time.",
  },
  {
    icon: Radio,
    title: "Sensorë Inteligjentë",
    description:
      "Sensorë luksit, lëvizjeje dhe temperature. Dimming automatik bazuar në kushte të jashtme.",
  },
  {
    icon: Wind,
    title: "Qëndrueshmëri",
    description:
      "Rezistenca ndaj kushteve ekstreme: erë 200 km/h, temperaturë -40°C deri +60°C, lagështi maksimale.",
  },
  {
    icon: Clock,
    title: "Jetëgjatësi Maksimale",
    description:
      "100,000 orë jetëgjatësi, ose rreth 10 vjet funksionim kontinuë pa ndërrim. Garancia 10 vjet.",
  },
];

export default function TechnologyFeatures() {
  return (
    <section className="relative z-10 py-12 lg:py-16 bg-transparent">
      <div className="mx-auto max-w-310 px-5 sm:px-7 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.45 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <div className="h-px flex-1 bg-white/16" />
          <span className="text-[12px] font-black tracking-[0.13em] text-lime uppercase whitespace-nowrap">
            Teknologjia e avancuar
          </span>
          <div className="h-px flex-1 bg-white/16" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="border border-white/12 bg-[#080d15]/60 p-7 hover:border-lime/50 hover:bg-[#0a1020]/80 transition-all duration-300 group"
              >
                <div className="mb-5">
                  <Icon className="h-10 w-10 text-lime group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-[15px] font-black text-white mb-3 group-hover:text-lime transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-[13px] text-white/62 leading-[1.7]">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
