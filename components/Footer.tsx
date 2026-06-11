"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const [email, setEmail] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter subscription:", email);
    setEmail("");
  };
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-transparent">
      <div className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-black/20 to-transparent pointer-events-none" />
      <div className="relative mx-auto max-w-285 px-5 sm:px-7 lg:px-10 py-11 lg:py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          <div>
            <div className="flex items-center gap-3 mb-5">
              {/* <Image
                src="/images/Infinit-logo-white.png"
                alt="Infinit Lighting Logo"
                width={48}
                height={48}
                className="shrink-0"
                style={{ width: "auto", height: "50px" }}
              /> */}
              <div className="flex flex-col leading-none">
                <span className="text-[14px] font-light tracking-[0.34em] text-white">
                  INFINIT
                </span>
                <span className="mt-1 text-[10px] font-light tracking-[0.32em] text-lime">
                  LIGHTING
                </span>
              </div>
            </div>
            <p className="text-[13px] text-white/62 leading-[1.65] max-w-xs">
              Infinit Lighting është kompani e specializuar në projektim,
              furnizim dhe instalim e sistemeve të ndriçimit LED për rrugë,
              autostrada dhe hapësira publike.
            </p>
          </div>
          <div>
            <h3 className="text-[12px] font-semibold text-white uppercase tracking-[0.08em] mb-5">
              KONTAKTO NA
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin
                  className="h-4 w-4 text-lime shrink-0"
                  strokeWidth={1.5}
                />
                <p className="text-[13px] text-white/62">
                  Rr. Ndriçimi, Prishtinë, Kosovë
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone
                  className="h-4 w-4 text-lime shrink-0"
                  strokeWidth={1.5}
                />
                <p className="text-[13px] text-white/62">+383 49 123 456</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail
                  className="h-4 w-4 text-lime shrink-0"
                  strokeWidth={1.5}
                />
                <p className="text-[13px] text-white/62">
                  info@infinitlighting.com
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-[12px] font-semibold text-white uppercase tracking-[0.08em] mb-5">
              ABONOHU PËR NJOFTIME
            </h3>
            <p className="text-[13px] text-white/62 mb-4">
              Merr njoftime për projektet dhe produktet tona më të reja.
            </p>
            <form onSubmit={handleSubmit} className="flex gap-0">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email juaj"
                required
                className="flex-1 border border-white/18 bg-black/22 px-4 py-3 text-[13px] text-white placeholder-white/45 focus:border-lime/50 focus:outline-none transition-colors duration-300"
              />
              <button
                type="submit"
                className="flex items-center justify-center bg-lime px-5 py-3 text-[#07100d] transition-all duration-300 hover:bg-lime-dark"
                aria-label="Subscribe"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="relative border-t border-white/10">
        <div className="mx-auto max-w-285 px-5 sm:px-7 lg:px-10 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[12px] text-white/48">
              © 2024 Infinit Lighting. Të gjitha të drejtat e rezervuara.
            </p>
            <div className="flex items-center gap-3">
              {["f", "in", "ig"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-[11px] font-bold text-white/65 transition-all duration-300 hover:border-lime/60 hover:text-lime"
                  aria-label={item}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
