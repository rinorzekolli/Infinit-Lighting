"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const ChevronRight = () => (
  <svg
    className="w-4 h-4"
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

export default function Products() {
  return (
    <section
      id="products"
      className="py-20 px-6 md:px-12 lg:px-20 border-t border-[var(--color-dark-border)]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-[var(--color-lime)] font-bold text-sm tracking-widest mb-2">
            PRODUKTE PREMIUM
          </p>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Ndriçues LED të gjeneratës së fundit
          </h2>
          <p className="text-[var(--color-gray-text)] max-w-2xl mx-auto text-lg">
            Performancë e lartë, dizajn modern dhe jetëgjatësi maksimale.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Product Info */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold">
                Ndriçues LED me teknologji të avancuar
              </h3>
              <p className="text-[var(--color-gray-text)] leading-relaxed">
                Revolucioni në ndriçimin publik me teknologji LED të gjeneratës
                më të re. Kombinim i përsosur i efiçiencës energjetike dhe
                cilësisë së dritës.
              </p>
            </div>

            <Link href="#contact">
              <button className="px-6 py-3 border-2 border-[var(--color-lime)] text-[var(--color-lime)] font-bold rounded-lg hover:bg-[var(--color-lime)] hover:text-[var(--color-background)] transition-all duration-300 flex items-center gap-2 w-fit">
                MËSO më SHUMË
                <ChevronRight />
              </button>
            </Link>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              {[
                { num: "50k+", text: "Orë jetëgjatësie" },
                { num: "80%", text: "Kursim energjie" },
                { num: "5000K", text: "Temperatura ngjyrë" },
                { num: "IP65", text: "Certificim rezistencë" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-lg bg-[var(--color-dark-card)] border border-[var(--color-dark-border)] hover:border-[var(--color-lime)] transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <p className="text-[var(--color-lime)] font-bold text-2xl">
                    {stat.num}
                  </p>
                  <p className="text-[var(--color-gray-text)] text-sm mt-1">
                    {stat.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Product Image */}
          <div className="relative h-96 lg:h-96 rounded-xl overflow-hidden shadow-2xl animate-slide-in-right">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-lime)]/20 to-transparent z-10"></div>
            <Image
              src="/images/led-product.jpg"
              alt="LED Product"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              quality={90}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
