"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Globe } from "lucide-react";
import { useState } from "react";

const contactMethods = [
  {
    id: 1,
    icon: Phone,
    label: "TELEFON",
    value: "+383 (38) XXX-XXXX",
    link: "tel:+38338XXXXXX",
  },
  {
    id: 2,
    icon: Mail,
    label: "EMAIL",
    value: "info@infinitlighting.com",
    link: "mailto:info@infinitlighting.com",
  },
  {
    id: 3,
    icon: MapPin,
    label: "ADRESA",
    value: "Prishtinë, Kosovë",
    link: "#",
  },
  {
    id: 4,
    icon: Globe,
    label: "FAQJA WEB",
    value: "www.infinitlighting.com",
    link: "https://infinitlighting.com",
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would send the form data to your backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 3000);
  };

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
            KONTAKTI
          </span>
          <div className="h-px flex-1 bg-white/16" />
        </motion.div>

        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="text-3xl lg:text-5xl font-bold text-white text-center mb-4"
          >
            Kontaktoni Zgjidhjeve Tuaja
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="text-center text-white/60 max-w-2xl mx-auto"
          >
            Ne jemi këtu për t'ju ndihmuar me pyetje, kërkesa për ofertë apo
            ndonjë need tjetër lidhur me produktet e shërbimete tona
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <motion.a
                key={method.id}
                href={method.link}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className="border border-white/10 bg-white/5 backdrop-blur-md p-8 hover:border-lime/50 hover:bg-white/8 transition-all duration-300 group"
              >
                <Icon className="w-8 h-8 text-lime mb-4 group-hover:scale-110 transition-transform" />
                <div className="text-xs font-black tracking-[0.1em] text-lime uppercase mb-2">
                  {method.label}
                </div>
                <div className="text-white font-medium hover:text-lime transition-colors">
                  {method.value}
                </div>
              </motion.a>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.45, delay: 0.3 }}
          className="border border-white/10 bg-white/5 backdrop-blur-md p-8 lg:p-12 max-w-2xl mx-auto"
        >
          <h3 className="text-xl font-bold text-white mb-6">Dërgoni Mesazh</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-black tracking-[0.1em] text-white/60 uppercase mb-3">
                  Emri
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/30 focus:border-lime focus:outline-none transition-colors"
                  placeholder="Emri juaj"
                />
              </div>
              <div>
                <label className="block text-xs font-black tracking-[0.1em] text-white/60 uppercase mb-3">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/30 focus:border-lime focus:outline-none transition-colors"
                  placeholder="email@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-black tracking-[0.1em] text-white/60 uppercase mb-3">
                Telefoni
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/30 focus:border-lime focus:outline-none transition-colors"
                placeholder="+383 (38) XXX-XXXX"
              />
            </div>

            <div>
              <label className="block text-xs font-black tracking-[0.1em] text-white/60 uppercase mb-3">
                Mesazh
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/30 focus:border-lime focus:outline-none transition-colors resize-none"
                placeholder="Shkruani mesazhin tuaj këtu..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-lime text-black font-bold py-3 px-6 hover:bg-lime/90 transition-colors flex items-center justify-center gap-2 group"
            >
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              Dërgoni Mesazh
            </button>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-center text-lime font-medium"
              >
                ✓ Mesazhi u dërgua me sukses!
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
