"use client";

import React, { useState } from "react";
import { Check, ArrowRight } from "lucide-react";

export function BannerQuote() {
  const [contact, setContact] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contact.trim()) return;
    setSubmitted(true);
  };

  return (
    <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Dark Forest Green Card (Exact Verdora Style) */}
      <div className="bg-[#1e3324] rounded-3xl p-8 sm:p-14 text-white shadow-xl relative overflow-hidden">
        {/* Subtle decorative leaf watermark in background */}
        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center relative z-10">
          
          {/* Left Column: VIP Newsletter / WhatsApp Signup */}
          <div className="lg:col-span-6 space-y-4">
            <span className="text-[11px] uppercase tracking-widest text-[#d8c39e] font-semibold">
              Círculo Biorenov
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-normal leading-tight">
              Orientações cosmetológicas exclusivas para a sua rotina.
            </h3>
            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed max-w-md">
              Receba dicas de aplicação do cosmetólogo Douglas Alan, lançamentos antecipados e benefícios reservados.
            </p>

            {submitted ? (
              <div className="flex items-center gap-2 p-3 bg-white/10 rounded-xl text-xs text-emerald-300">
                <Check className="w-4 h-4" />
                <span>Pronto! Entraremos em contato com conteúdos exclusivos.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 pt-2 max-w-md">
                <input
                  type="text"
                  required
                  placeholder="Seu e-mail ou WhatsApp..."
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-full bg-white text-[#1e2420] text-xs placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#8d5b3a]"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-full bg-[#8d5b3a] hover:bg-[#784d2f] text-white text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Participar</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Founder Quote (Verdora Style) */}
          <div className="lg:col-span-6 lg:border-l lg:border-white/15 lg:pl-12 space-y-4">
            <span className="font-serif text-5xl sm:text-6xl text-[#d8c39e] leading-none block font-light">
              “
            </span>
            <p className="font-serif text-xl sm:text-2xl text-stone-100 font-light italic leading-snug">
              Cuidar da pele não é agredi-la com químicos invasivos, mas devolver ao organismo 
              os bioativos que ele reconhece biologicamente para se autorregular.
            </p>
            <div className="pt-2 text-xs text-[#d8c39e] uppercase tracking-wider font-semibold">
              Douglas Alan — Cosmetólogo & Fundador
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
