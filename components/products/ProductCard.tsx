"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/produktet/${product.slug}`}>
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.45 }}
        className="group relative h-full border border-white/12 bg-[#080d15]/60 overflow-hidden transition-all duration-300 hover:border-lime/50 hover:bg-[#0a1020]/80 hover:shadow-[0_0_30px_rgba(192,249,74,0.1)]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_34%,rgba(255,255,255,0.06),transparent_32%)]" />

        <div className="relative flex flex-col h-full p-6 lg:p-7">
          {/* Category Badge */}
          <div className="mb-4 flex items-center gap-2">
            <span className="text-[11px] font-black tracking-[0.08em] text-lime uppercase">
              {product.category}
            </span>
            <div className="h-px w-8 bg-lime/50" />
          </div>

          {/* Title */}
          <h3 className="text-[16px] lg:text-[17px] font-black leading-[1.2] text-white mb-3 group-hover:text-lime transition-colors duration-300">
            {product.title}
          </h3>

          {/* Description */}
          <p className="text-[13px] text-white/62 leading-[1.6] mb-5 flex-grow">
            {product.shortDescription}
          </p>

          {/* Specs */}
          {(product.power || product.efficiency || product.lifetime) && (
            <div className="mb-6 space-y-2 text-[12px] text-white/50">
              {product.power && (
                <div className="flex justify-between">
                  <span>Fuqia:</span>
                  <span className="text-white/70">{product.power}</span>
                </div>
              )}
              {product.efficiency && (
                <div className="flex justify-between">
                  <span>Efikasitet:</span>
                  <span className="text-white/70">{product.efficiency}</span>
                </div>
              )}
              {product.lifetime && (
                <div className="flex justify-between">
                  <span>Jetëgjatësi:</span>
                  <span className="text-white/70">{product.lifetime}</span>
                </div>
              )}
            </div>
          )}

          {/* Button */}
          <div className="mt-auto flex items-center gap-2 text-lime font-black text-[12px] tracking-[0.04em] group-hover:gap-3 transition-all duration-300">
            SHIKO DETAJET <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
