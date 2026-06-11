"use client";

import { motion } from "framer-motion";
import { CheckCircle, LucideIcon } from "lucide-react";

interface Benefit {
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    title: "Cilësi Profesionale",
    description:
      "Produktet dhe shërbimet na përputhen me standardet më të larta europiane.",
  },
  {
    title: "Siguri Maksimale",
    description:
      "Sisteme të testuar dhe të sigurta për ndriçim të besueshëm 24/7.",
  },
  {
    title: "Efikasitet Energjetik",
    description: "Zgjidhe që kursejnë energji dhe reduktojnë kostot operative.",
  },
  {
    title: "Teknologji Moderne",
    description:
      "Sisteme smart me kontroll inteligjent dhe monitorim në kohë reale.",
  },
  {
    title: "Përvojë Profesionale",
    description: "Ekip me dhjetëra vite përvojë në sektorin e ndriçimit LED.",
  },
  {
    title: "Mbështetje Teknike",
    description:
      "Shërbim 24/7 teknik dhe suport për të gjitha projektinizat tona.",
  },
  {
    title: "Zgjidhje Afatgjata",
    description:
      "Garansia deri në 10 vjet dhe mbështetje pas-shitje e përkushtuar.",
  },
  {
    title: "ROI i Lartë",
    description:
      "Shpenzimet vlerësohen brenda 3-5 viteve për shumicën e projekteve.",
  },
];

export default function WhyChooseUsSection() {
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
            <span className="text-[12px] font-semibold tracking-[0.14em] text-lime uppercase">
              PËRSE INFINIT LIGHTING
            </span>
            <div className="h-px w-12 bg-lime/50" />
          </div>
          <h2 className="text-[28px] sm:text-[36px] lg:text-[40px] font-light leading-[1.15] text-white">
            Arsye për të na zgjedhur
          </h2>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="border border-white/12 bg-[#080d15]/60 p-6 lg:p-7 hover:border-lime/50 transition-all duration-300 group"
            >
              <div className="mb-5">
                <CheckCircle className="h-8 w-8 text-lime group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-[14px] font-semibold text-white mb-2 group-hover:text-lime transition-colors duration-300">
                {benefit.title}
              </h3>
              <p className="text-[12px] text-white/62 leading-[1.6]">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
