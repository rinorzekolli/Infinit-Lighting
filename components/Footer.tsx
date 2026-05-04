"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Globe,
  Camera,
  Briefcase,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <footer className="relative border-t border-dark-border">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Footer-bg-image.png"
          alt="City skyline at night with LED lighting"
          fill
          className="object-cover opacity-70"
          sizes="100vw"
          priority
          style={{ objectPosition: "center" }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/30 via-background/50 to-background/70" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Image
                  src="/images/Infinit-logo-white.png"
                  alt="Infinit Lighting Logo"
                  width={36}
                  height={36}
                  className="h-9 w-auto"
                />
                <span className="text-lg font-bold tracking-tight text-white">
                  INFINIT <span className="text-lime">LIGHTING</span>
                </span>
              </div>
              <p className="text-sm text-gray-text leading-relaxed max-w-sm">
                Infinit Lighting është kompani e specializuar në projektim,
                furnizim dhe instalim të sistemeve të ndriçimit LED për rrugë,
                autostrada dhe hapësira publike.
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
                Kontakto Na
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin
                    className="h-4 w-4 text-lime shrink-0 mt-0.5"
                    strokeWidth={1.5}
                  />
                  <p className="text-sm text-gray-text">
                    Rr. Ndriçimi, Prishtinë, Kosovë
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Phone
                    className="h-4 w-4 text-lime shrink-0 mt-0.5"
                    strokeWidth={1.5}
                  />
                  <p className="text-sm text-gray-text">+383 49 123 456</p>
                </div>
                <div className="flex items-start gap-3">
                  <Mail
                    className="h-4 w-4 text-lime shrink-0 mt-0.5"
                    strokeWidth={1.5}
                  />
                  <p className="text-sm text-gray-text">
                    info@infinitlighting.com
                  </p>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
                Abonohu për njoftime
              </h3>
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email juaj"
                  required
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-text focus:border-lime/50 focus:outline-none focus:ring-1 focus:ring-lime/30 transition-colors"
                />
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-lime px-4 py-3 text-sm font-bold text-background transition-all hover:bg-lime-dark hover:shadow-[0_0_20px_rgba(192,249,74,0.3)]"
                >
                  <Send className="h-4 w-4" />
                  ABONOHU
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-dark-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-gray-text">
                © 2024 Infinit Lighting. Të gjitha të drejtat e rezervuara.
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-gray-text transition-all hover:border-lime/30 hover:text-lime hover:shadow-[0_0_12px_rgba(192,249,74,0.15)]"
                  aria-label="Facebook"
                >
                  <Globe className="h-4 w-4" strokeWidth={1.5} />
                </a>
                <a
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-gray-text transition-all hover:border-lime/30 hover:text-lime hover:shadow-[0_0_12px_rgba(192,249,74,0.15)]"
                  aria-label="Instagram"
                >
                  <Camera className="h-4 w-4" strokeWidth={1.5} />
                </a>
                <a
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-gray-text transition-all hover:border-lime/30 hover:text-lime hover:shadow-[0_0_12px_rgba(192,249,74,0.15)]"
                  aria-label="LinkedIn"
                >
                  <Briefcase className="h-4 w-4" strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
