"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Product } from "@/types/product";
import { productCategories } from "@/data/products";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  products: Product[];
  categoriesFilter?: boolean;
}

export default function ProductGrid({
  products,
  categoriesFilter = true,
}: ProductGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProducts = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : products;

  return (
    <section className="relative z-10 py-12 lg:py-16 bg-transparent">
      <div className="mx-auto max-w-310 px-5 sm:px-7 lg:px-10">
        {/* Category Filter */}
        {categoriesFilter && (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.45 }}
            className="mb-12 flex flex-wrap gap-3 justify-center"
          >
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-5 py-2.5 text-[12px] font-black tracking-[0.04em] transition-all duration-300 border ${
                selectedCategory === null
                  ? "border-lime bg-lime text-[#07100d]"
                  : "border-white/20 bg-transparent text-white hover:border-lime/50"
              }`}
            >
              TË GJITHA
            </button>
            {productCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 text-[12px] font-black tracking-[0.04em] transition-all duration-300 border whitespace-nowrap ${
                  selectedCategory === category
                    ? "border-lime bg-lime text-[#07100d]"
                    : "border-white/20 bg-transparent text-white hover:border-lime/50"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        )}

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-white/60 text-[14px]">
              Asnjë produkt nuk u gjet në këtë kategori.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
