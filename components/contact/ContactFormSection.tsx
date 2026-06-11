"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <section className="relative z-10 py-12 lg:py-16 bg-transparent">
      <div className="mx-auto max-w-310 px-5 sm:px-7 lg:px-10">
        <div className="max-w-2xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.45 }}
            onSubmit={handleSubmit}
            className="border border-white/12 bg-[#080d15]/60 p-8 lg:p-10"
          >
            <h2 className="text-[24px] sm:text-[28px] font-light text-white mb-8">
              Dërgo mesazhin tuaj
            </h2>

            {submitted && (
              <div className="mb-8 p-4 bg-lime/10 border border-lime/50 text-lime text-[13px] font-medium">
                ✓ Faleminderit! Mesazhi juaj u dërgua me sukses. Do t'ju
                kontaktojmë shpejt.
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-[12px] font-semibold text-white mb-2 uppercase tracking-[0.06em]"
                >
                  Emri <span className="text-lime">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/30 border border-white/15 px-4 py-3 text-[13px] text-white placeholder-white/40 focus:border-lime focus:outline-none transition-colors duration-300"
                  placeholder="Emri juaj"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-[12px] font-semibold text-white mb-2 uppercase tracking-[0.06em]"
                >
                  Email <span className="text-lime">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/30 border border-white/15 px-4 py-3 text-[13px] text-white placeholder-white/40 focus:border-lime focus:outline-none transition-colors duration-300"
                  placeholder="Email juaj"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-[12px] font-semibold text-white mb-2 uppercase tracking-[0.06em]"
                >
                  Telefoni
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-black/30 border border-white/15 px-4 py-3 text-[13px] text-white placeholder-white/40 focus:border-lime focus:outline-none transition-colors duration-300"
                  placeholder="Numri juaj i telefonit"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-[12px] font-semibold text-white mb-2 uppercase tracking-[0.06em]"
                >
                  Subjekti <span className="text-lime">*</span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/30 border border-white/15 px-4 py-3 text-[13px] text-white focus:border-lime focus:outline-none transition-colors duration-300"
                >
                  <option value="">Zgjidh subjektin</option>
                  <option value="Ofertë për produkte">
                    Ofertë për produkte
                  </option>
                  <option value="Konsultim për projekt">
                    Konsultim për projekt
                  </option>
                  <option value="Kërkesë për mirëmbajtje">
                    Kërkesë për mirëmbajtje
                  </option>
                  <option value="I përgjithshëm">I përgjithshëm</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div className="mb-8">
              <label
                htmlFor="message"
                className="block text-[12px] font-semibold text-white mb-2 uppercase tracking-[0.06em]"
              >
                Mesazhi <span className="text-lime">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full bg-black/30 border border-white/15 px-4 py-3 text-[13px] text-white placeholder-white/40 focus:border-lime focus:outline-none transition-colors duration-300 resize-none"
                placeholder="Shkathtim e detajet e kërkesës tuaj..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 bg-lime px-6 py-4 text-[12px] font-semibold text-[#07100d] tracking-[0.04em] transition-all duration-300 hover:bg-lime-dark"
            >
              DËRGO MESAZHIN <ArrowRight className="h-4 w-4" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
