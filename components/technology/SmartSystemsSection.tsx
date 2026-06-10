"use client";

import { motion } from "framer-motion";
import {
  Smartphone,
  Activity,
  MapPin,
  Zap,
  AlertCircle,
  BarChart3,
  LucideIcon,
} from "lucide-react";

interface SmartFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const smartFeatures: SmartFeature[] = [
  {
    icon: Smartphone,
    title: "Kontroll Mobile",
    description: "Menaxho ndriçuesin nga aplikacioni direkt në telefonin tënd.",
  },
  {
    icon: Activity,
    title: "Monitorim Real-Time",
    description:
      "Shiko statusin e çdo ndriçuesi në kohë reale përmes dashboard-it.",
  },
  {
    icon: Zap,
    title: "Dimming Inteligjent",
    description:
      "Ulte/rrite intensitetin automatikisht bazuar në nevojë dhe orarë.",
  },
  {
    icon: MapPin,
    title: "Gjeolokalizimi",
    description:
      "Vizualizim i pozicionit të çdo ndriçuesi në hartë interaktive.",
  },
  {
    icon: AlertCircle,
    title: "Alarmet Automatike",
    description: "Merr notifikime menjëherë nëse ka defekt ose problem.",
  },
  {
    icon: BarChart3,
    title: "Raportim & Analitika",
    description:
      "Analizime të detajuara të konsumit, efikasitetit dhe performancës.",
  },
];

export default function SmartSystemsSection() {
  return (
    <section className="relative z-10 py-12 lg:py-16 bg-transparent">
      <div className="mx-auto max-w-310 px-5 sm:px-7 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.45 }}
          className="text-center mb-12 lg:mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-lime/50" />
            <span className="text-[12px] font-black tracking-[0.14em] text-lime uppercase">
              SISTEME SMART
            </span>
            <div className="h-px w-12 bg-lime/50" />
          </div>
          <h2 className="text-[28px] sm:text-[36px] lg:text-[40px] font-black leading-[1.15] text-white">
            Kontroll Inteligjent
            <br />
            të Ndriçimit
          </h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {smartFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="border border-white/12 bg-[#080d15]/60 p-7 hover:border-lime/50 transition-all duration-300 group"
              >
                <div className="mb-5">
                  <Icon className="h-10 w-10 text-lime group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-[15px] font-black text-white mb-2 group-hover:text-lime transition-colors duration-300">
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
