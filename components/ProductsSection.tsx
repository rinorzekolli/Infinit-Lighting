"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Zap, Package, Eye } from "lucide-react";

const products = [
  {
    id: 1,
    name: "LED PANEL PRO",
    category: "PANELI",
    description: "Paneli LED me teknologji të avancuar për ndriçim profesional",
    features: ["4K Ready", "Dimmer Control", "RGB Spectrum"],
    price: "Kontaktoni për çmim",
  },
  {
    id: 2,
    name: "SMART LIGHT BULB",
    category: "LLAMBË",
    description: "Llambë inteligjente me kontroll nëpër aplikacion mobile",
    features: ["WiFi Enabled", "16M Colors", "Voice Control"],
    price: "Kontaktoni për çmim",
  },
  {
    id: 3,
    name: "EXTERIOR PROJECTOR",
    category: "PROJEKSIONI",
    description: "Projektori i fuqishëm për ndriçimin e hapësirave të jashtme",
    features: ["IP65 Rated", "10000 Lumens", "Long Range"],
    price: "Kontaktoni për çmim",
  },
  {
    id: 4,
    name: "SMART CONTROLLER",
    category: "KONTROLLER",
    description: "Sistemi i kontrollimit të integruar për të gjitha produktet",
    features: ["Multi-Zone", "Real-time Control", "Automation"],
    price: "Kontaktoni për çmim",
  },
];

export default function ProductsSection() {
  return (
    <section
      className="relative z-10 py-16 lg:py-20"
      style={{ backgroundColor: "#03060C" }}
    >
      <div className="mx-auto max-w-285 px-5 sm:px-7 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.45 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <div className="h-px flex-1 bg-white/16" />
          <span className="text-[12px] font-black tracking-[0.13em] text-lime uppercase whitespace-nowrap">
            PRODUKTET TONA
          </span>
          <div className="h-px flex-1 bg-white/16" />
        </motion.div>

        <div className="mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="text-3xl lg:text-5xl font-bold text-white text-center mb-4"
          >
            Zgjidhjet e Ndriçimit të Ardhmes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="text-center text-white/60 max-w-2xl mx-auto"
          >
            Produktet tona janë dizajnuar me teknologjinë më të fundit për të
            plotësuar të gjitha nevojat tuaja të ndriçimit
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="border border-white/10 bg-white/5 backdrop-blur-md p-6 hover:border-lime/50 hover:bg-white/8 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-black tracking-[0.1em] text-lime uppercase">
                  {product.category}
                </span>
                <Package className="w-5 h-5 text-white/40 group-hover:text-lime transition-colors" />
              </div>

              <h3 className="text-lg font-bold text-white mb-2">
                {product.name}
              </h3>
              <p className="text-sm text-white/60 mb-4">{product.description}</p>

              <div className="mb-6 pb-6 border-b border-white/10">
                <ul className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="text-xs text-white/50 flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-lime rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-lime">
                  {product.price}
                </span>
                <Eye className="w-4 h-4 text-white/40 group-hover:text-lime transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
