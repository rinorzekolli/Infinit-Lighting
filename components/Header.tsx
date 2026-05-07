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
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 via-black/40 to-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between lg:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="/images/Infinit-logo-white.png"
              alt="Infinit Lighting Logo"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <div className="flex flex-col leading-none">
              <span className="text-xs font-light tracking-[0.2em] text-white">
                INFINIT
              </span>
              <span className="text-[10px] font-light tracking-[0.15em] text-white/80">
                LIGHTING
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs font-medium text-white/80 tracking-wide transition-colors duration-300 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <Link
            href="/kontakti"
            className="hidden lg:inline-flex items-center gap-2 rounded bg-lime px-5 py-2.5 text-xs font-bold text-background tracking-wide transition-all duration-300 hover:bg-lime-dark"
          >
            KËRKO OFERTË
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-md border-t border-white/10 overflow-hidden"
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
                className="mt-2 inline-flex items-center justify-center gap-2 rounded bg-lime px-5 py-2.5 text-xs font-bold text-background"
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
