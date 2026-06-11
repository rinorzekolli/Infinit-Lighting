"use client";

import { motion } from "framer-motion";
import { Product } from "@/types/product";

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  return (
    <section className="relative z-10 py-12 lg:py-16 bg-transparent">
      <div className="mx-auto max-w-310 px-5 sm:px-7 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Main Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              {/* Category */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[12px] font-semibold tracking-[0.08em] text-lime uppercase">
                  {product.category}
                </span>
                <div className="h-px flex-1 bg-lime/30" />
              </div>

              {/* Title */}
              <h1 className="text-[32px] sm:text-[40px] lg:text-[44px] font-light leading-[1.15] text-white mb-6">
                {product.title}
              </h1>

              {/* Description */}
              <p className="text-[15px] lg:text-[16px] text-white/72 leading-[1.8] mb-8">
                {product.description}
              </p>

              {/* Key Features Section */}
              <div className="mb-10">
                <h2 className="text-[16px] font-semibold text-white mb-4\">
                  Karakteristikat kryesore:
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-lime font-semibold text-[14px] mt-1">
                        ✓
                      </span>
                      <span className="text-[14px] text-white/70">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Applications Section */}
              {product.applications.length > 0 && (
                <div className="mb-10">
                  <h2 className="text-[16px] font-semibold text-white mb-4">
                    Aplikimet:
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {product.applications.map((app, idx) => (
                      <div
                        key={idx}
                        className="border border-white/15 bg-white/5 px-4 py-3 text-[14px] text-white/80"
                      >
                        {app}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>

          {/* Specifications Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="lg:col-span-1"
          >
            <div className="border border-white/12 bg-[#080d15]/60 p-6 lg:p-7">
              <h2 className="text-[14px] font-semibold text-white mb-6 uppercase tracking-[0.06em]">
                Specifika teknik
              </h2>

              <div className="space-y-4">
                {product.specifications.map((spec, idx) => (
                  <div key={idx} className="border-b border-white/10 pb-4">
                    <p className="text-[11px] font-semibold text-lime uppercase tracking-[0.06em] mb-1">
                      {spec.label}
                    </p>
                    <p className="text-[14px] text-white/80">{spec.value}</p>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <a
                href="/kontakti"
                className="mt-8 w-full inline-flex items-center justify-center bg-lime px-6 py-4 text-[12px] font-semibold text-[#07100d] tracking-[0.04em] transition-all duration-300 hover:bg-lime-dark"
              >
                KËRKO OFERTË
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
