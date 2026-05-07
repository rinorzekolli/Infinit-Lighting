"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "HOME" },
  { href: "/produktet", label: "PRODUKTET" },
  { href: "/projektet", label: "PROJEKTET" },
  { href: "/teknologjia", label: "TEKNOLOGJIA" },
  { href: "/rreth-nesh", label: "RRETH NESH" },
  { href: "/kontakti", label: "KONTAKTI" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-[#03060b]/95 via-[#03060b]/60 to-transparent backdrop-blur-[2px]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/10" />

      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
        <div className="flex h-20 items-center justify-between lg:h-24">
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/images/Infinit-logo-white.png"
              alt="Infinit Lighting Logo"
              width={48}
              height={48}
              className="h-12 w-auto drop-shadow-[0_0_18px_rgba(164,196,45,0.18)]"
            />
            <div className="flex flex-col leading-none">
              <span className="text-sm font-light tracking-[0.32em] text-white">
                INFINIT
              </span>
              <span className="text-[11px] font-light tracking-[0.28em] text-lime">
                LIGHTING
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-xs font-bold text-white/85 tracking-wide transition-colors duration-300 hover:text-white ${
                  index === 0
                    ? "after:absolute after:-bottom-3 after:left-0 after:h-px after:w-full after:bg-lime"
                    : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/kontakti"
            className="hidden lg:inline-flex items-center gap-2 bg-lime px-6 py-3 text-xs font-black text-[#07100d] tracking-wide shadow-[0_0_25px_rgba(164,196,45,0.22)] transition-all duration-300 hover:bg-lime-dark hover:shadow-[0_0_35px_rgba(164,196,45,0.32)]"
          >
            KËRKO OFERTË
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden border-y border-white/10 bg-[#070b12]/95 backdrop-blur-md"
          >
            <nav className="flex flex-col px-4 py-4 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 px-3 text-sm font-medium text-white/80 transition-colors duration-300 hover:text-white hover:bg-white/5 rounded"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/kontakti"
                onClick={() => setMobileOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 bg-lime px-5 py-3 text-xs font-black text-[#07100d]"
              >
                KËRKO OFERTË
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
