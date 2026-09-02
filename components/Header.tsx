"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-linear-to-b from-black/75 via-black/35 to-transparent">
      <div className="mx-auto max-w-310 px-5 sm:px-7 lg:px-10">
        <div className="flex h-19.5 items-center justify-between lg:h-22">
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/images/Infinit-logo-white-enhanced.png"
              alt="Infinit Lighting Logo"
              width={72}
              height={72}
              className="shrink-0"
              loading="eager"
              style={{ width: "auto", height: "102px" }}
            />
          </Link>
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-[11px] font-extrabold tracking-[0.06em] transition-colors duration-300 ${
                  isActive(link.href)
                    ? "text-lime after:absolute after:-bottom-3 after:left-0 after:h-px after:w-full after:bg-lime"
                    : "text-white/88 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/kontakti"
            className="hidden lg:inline-flex items-center gap-2 bg-lime px-6 py-3 text-[11px] font-semibold text-[#07100d] tracking-[0.04em] transition-all duration-300 hover:bg-lime-dark"
          >
            KËRKO OFERTË <ArrowRight className="h-3.5 w-3.5" />
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
            className="lg:hidden overflow-hidden border-y border-white/10 bg-black/85 backdrop-blur-md"
          >
            <nav className="flex flex-col px-4 py-4 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`py-3 px-3 text-sm font-medium transition-colors duration-300 rounded ${
                    isActive(link.href)
                      ? "text-lime bg-lime/10"
                      : "text-white/80 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/kontakti"
                onClick={() => setMobileOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 bg-lime px-5 py-3 text-xs font-semibold text-[#07100d]"
              >
                KËRKO OFERTË <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
