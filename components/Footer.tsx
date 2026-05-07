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
    <footer className="relative border-t border-white/10 bg-background">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <Image
                src="/images/Infinit-logo-white.png"
                alt="Infinit Lighting Logo"
                width={32}
                height={32}
                className="h-8 w-auto"
              />
              <div className="flex flex-col leading-none">
                <span className="text-xs font-light tracking-[0.2em] text-white">
                  INFINIT
                </span>
                <span className="text-[10px] font-light tracking-[0.15em] text-white/80">
                  LIGHTING
                </span>
              </div>
            </div>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              Infinit Lighting është kompani e specializuar në projektim,
              furnizim dhe instalim e sistemeve të ndriçimit LED për rrugë,
              autostrada dhe hapësira publike.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-5">
              KONTAKTO NA
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin
                  className="h-4 w-4 text-lime shrink-0"
                  strokeWidth={1.5}
                />
                <p className="text-sm text-white/50">
                  Rr. Ndriçimi, Prishtinë, Kosovë
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone
                  className="h-4 w-4 text-lime shrink-0"
                  strokeWidth={1.5}
                />
                <p className="text-sm text-white/50">+383 49 123 456</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail
                  className="h-4 w-4 text-lime shrink-0"
                  strokeWidth={1.5}
                />
                <p className="text-sm text-white/50">
                  info@infinitlighting.com
                </p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-5">
              ABONOHU PËR NDJJMTIME
            </h3>
            <p className="text-sm text-white/50 mb-4">
              Merr njoftimet për projektet dhe produktet tona më të reja.
            </p>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email juaj"
                required
                className="flex-1 rounded border border-white/20 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/40 focus:border-lime/50 focus:outline-none transition-colors duration-300"
              />
              <button
                type="submit"
                className="flex items-center justify-center rounded bg-lime px-4 py-2.5 text-background transition-all duration-300 hover:bg-lime-dark"
                aria-label="Subscribe"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/40">
              © 2024 Infinit Lighting. Të gjitha të drejtat e rezervuara.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-white/50 transition-all duration-300 hover:border-lime/50 hover:text-lime"
                aria-label="Facebook"
              >
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-white/50 transition-all duration-300 hover:border-lime/50 hover:text-lime"
                aria-label="LinkedIn"
              >
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-white/50 transition-all duration-300 hover:border-lime/50 hover:text-lime"
                aria-label="Instagram"
              >
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
