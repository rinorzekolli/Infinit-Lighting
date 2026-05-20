"use client";

import { motion } from "framer-motion";
import { Award, Users, Target, Lightbulb } from "lucide-react";

const aboutPoints = [
  {
    id: 1,
    icon: Target,
    title: "MISIONI YNËS",
    description:
      "Të revolucionarizojmë industrinë e ndriçimit me zgjidhje të zeza, inteligjente dhe të qëndrueshme",
  },
  {
    id: 2,
    icon: Award,
    title: "PËRVOJË",
    description:
      "Më shumë se 15 vjet përvojë në projektimin dhe instalimin e sistemeve të ndriçimit profesional",
  },
  {
    id: 3,
    icon: Users,
    title: "EKIPI NOR",
    description:
      "Inxhinierë të çertifikuar dhe specialist me përvojë ndërkombëtare",
  },
  {
    id: 4,
    icon: Lightbulb,
    title: "INOVACIONI",
    description:
      "Vazhdimisht zhvillojmë zgjidhje të reja për të ardhmen e ndriçimit",
  },
];

export default function AboutSection() {
  return (
    <section
      className="relative z-10 py-16 lg:py-20"
      style={{ backgroundColor: "#03060C" }}
    >
      <div className="mx-auto max-w-285 px-5 sm:px-7 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.45 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <div className="h-px flex-1 bg-white/16" />
          <span className="text-[12px] font-black tracking-[0.13em] text-lime uppercase whitespace-nowrap">
            RRETH NESH
          </span>
          <div className="h-px flex-1 bg-white/16" />
        </motion.div>

        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="text-3xl lg:text-5xl font-bold text-white text-center mb-4"
          >
            Kush Jemi Ne
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="text-center text-white/60 max-w-2xl mx-auto text-lg"
          >
            Infinit Lighting është e përkushtuar në sigurimin e zgjidhjeve
            inovatsh dhe të qëndrueshme për ndriçimin e ardhmes. Misioni ynë
            është të transformojmë mënyrën se si botëra sheh ndriçimin.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {aboutPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className="border border-white/10 bg-white/5 backdrop-blur-md p-8 hover:border-lime/50 hover:bg-white/8 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <Icon className="w-8 h-8 text-lime flex-shrink-0" />
                  <h3 className="text-lg font-bold text-white">
                    {point.title}
                  </h3>
                </div>
                <p className="text-sm text-white/60">{point.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.45, delay: 0.4 }}
          className="border border-white/10 bg-white/5 backdrop-blur-md p-8 text-center"
        >
          <p className="text-white/70 text-lg mb-4">
            Vizioni ynë është të bëhemi lideri global në industrinë e ndriçimit
            inteligjent dhe të qëndrueshëm
          </p>
          <div className="flex justify-center gap-8 flex-wrap">
            <div className="text-center">
              <div className="text-3xl font-bold text-lime mb-1">500+</div>
              <div className="text-sm text-white/60">
                Projektet e Përfunduara
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-lime mb-1">50+</div>
              <div className="text-sm text-white/60">Klientë Satisfaksionë</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-lime mb-1">15+</div>
              <div className="text-sm text-white/60">Vitet e Përvojës</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
