"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const ChevronRight = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
);

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-start pt-32 pb-20 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Street Lighting"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-background)] via-[var(--color-background)]/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-12 w-full items-center">
        {/* Left - Main Content */}
        <div className="lg:col-span-2 space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
            <span className="block text-[var(--color-foreground)]">
              NDRIÇIMI QË
            </span>
            <span className="block text-[var(--color-foreground)]">
              KRIJON SIGURI.
            </span>
            <span className="block text-[var(--color-lime)] mt-4">
              TEKNOLOGJIA QË
            </span>
            <span className="block text-[var(--color-lime)]">
              DREJTON TË ARDHMEN.
            </span>
          </h1>

          <p className="text-lg text-[var(--color-gray-text)] max-w-lg leading-relaxed">
            Zgjidhe profesionale të ndriçimit LED për rrugë, autostrada, zona
            urbane dhe hapësira publike.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Link href="#products">
              <button className="group px-8 py-4 bg-[var(--color-lime)] text-[var(--color-background)] font-bold rounded-lg hover:bg-[var(--color-foreground)] transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg hover:shadow-[0_0_30px_rgba(192,249,74,0.4)]">
                ZBULO PRODUKTET
                <ChevronRight />
              </button>
            </Link>
            <Link href="#projects">
              <button className="px-8 py-4 border-2 border-[var(--color-lime)] text-[var(--color-lime)] font-bold rounded-lg hover:bg-[var(--color-lime)] hover:text-[var(--color-background)] transition-all duration-300 flex items-center gap-2">
                SHIKO PROJEKTET
                <ChevronRight />
              </button>
            </Link>
          </div>
        </div>

        {/* Right - Feature Cards */}
        <div className="hidden lg:flex flex-col space-y-6">
          {[
            {
              icon: "🛡️",
              title: "SIGURI MAKSIMALE",
              desc: "Ndriç i besueshëm për çdo situatë",
            },
            {
              icon: "⚡",
              title: "EFIÇIENCE ENERGJETIKE",
              desc: "Kurnim energjie deri në 70%",
            },
            {
              icon: "🔧",
              title: "TEKNOLOGJI E AVANCUAR",
              desc: "Sisteme smart dhe të qëndrueshme",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 p-4 rounded-lg border border-[var(--color-dark-border)] bg-[var(--color-dark-card)]/50 backdrop-blur hover:border-[var(--color-lime)] hover:shadow-[0_0_20px_rgba(192,249,74,0.2)] transition-all duration-300 animate-slide-in-right"
              style={{ animationDelay: `${idx * 0.2}s` }}
            >
              <div className="text-3xl flex-shrink-0">{item.icon}</div>
              <div>
                <p className="font-bold text-sm text-[var(--color-lime)]">
                  {item.title}
                </p>
                <p className="text-xs text-[var(--color-gray-text)] mt-1">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
