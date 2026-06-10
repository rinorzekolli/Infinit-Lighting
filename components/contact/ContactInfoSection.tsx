"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ContactInfoSection() {
  return (
    <section className="relative z-10 py-12 lg:py-16 bg-transparent">
      <div className="mx-auto max-w-310 px-5 sm:px-7 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {/* Address */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.45 }}
            className="border border-white/12 bg-[#080d15]/60 p-7 hover:border-lime/50 transition-all duration-300"
          >
            <MapPin className="h-8 w-8 text-lime mb-4" />
            <h3 className="text-[14px] font-black text-white mb-3 uppercase tracking-[0.06em]">
              Adresa
            </h3>
            <p className="text-[13px] text-white/70 leading-[1.6]">
              Rr. Ndriçimi, Prishtinë, Kosovë
            </p>
          </motion.div>

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="border border-white/12 bg-[#080d15]/60 p-7 hover:border-lime/50 transition-all duration-300"
          >
            <Phone className="h-8 w-8 text-lime mb-4" />
            <h3 className="text-[14px] font-black text-white mb-3 uppercase tracking-[0.06em]">
              Telefoni
            </h3>
            <p className="text-[13px] text-white/70 leading-[1.6]">
              <Link
                href="tel:+383491234556"
                className="hover:text-lime transition-colors"
              >
                +383 (0) 49 123 456
              </Link>
            </p>
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.45, delay: 0.16 }}
            className="border border-white/12 bg-[#080d15]/60 p-7 hover:border-lime/50 transition-all duration-300"
          >
            <Mail className="h-8 w-8 text-lime mb-4" />
            <h3 className="text-[14px] font-black text-white mb-3 uppercase tracking-[0.06em]">
              Email
            </h3>
            <p className="text-[13px] text-white/70 leading-[1.6]">
              <Link
                href="mailto:info@infinitlighting.com"
                className="hover:text-lime transition-colors"
              >
                info@infinitlighting.com
              </Link>
            </p>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.45, delay: 0.24 }}
            className="border border-white/12 bg-[#080d15]/60 p-7 hover:border-lime/50 transition-all duration-300"
          >
            <Clock className="h-8 w-8 text-lime mb-4" />
            <h3 className="text-[14px] font-black text-white mb-3 uppercase tracking-[0.06em]">
              Orari i punës
            </h3>
            <p className="text-[13px] text-white/70 leading-[1.6]">
              Mon-Fri: 08:00 - 17:00 <br />
              Weekend: Me kërkesë
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
