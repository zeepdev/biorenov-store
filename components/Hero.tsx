"use client";

import React from "react";
import { ArrowRight, MessageCircle, ShieldCheck, Sparkles, Leaf, Dna } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-24 border-b border-[#e6e2d8] bg-[#f9f8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Positioning Copy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f0eee9] border border-[#dcd7cb] text-[#183324] text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#8d5b3a]" />
              BIOTECNOLOGIA BOTÂNICA & MICROBIOTA
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#183324] leading-[1.12] tracking-tight font-normal">
              A ciência probiótica que o seu corpo e cabelo{" "}
              <span className="italic font-serif font-light text-[#8d5b3a]">
                reconhecem.
              </span>
            </h1>

            <p className="text-stone-700 text-base sm:text-lg max-w-xl font-normal leading-relaxed">
              Cuidados avançados formulados pelo cosmetólogo <strong>Douglas Alan</strong> para restaurar
              a barreira natural da sua pele e fios com ativos vivos da natureza,
              respeitando profundamente a microbiota humana.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#produtos"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#183324] text-[#f9f8f5] font-semibold hover:bg-[#12261b] shadow-md hover:shadow-lg transition-all text-xs uppercase tracking-wider group"
              >
                <span>Conhecer Produtos</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20comprar%20produtos%20Biorenov%20diretamente%20pelo%20WhatsApp."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white border border-[#d8d3c7] text-[#183324] font-semibold hover:bg-[#f0eee9] transition-colors text-xs uppercase tracking-wider"
              >
                <MessageCircle className="w-4 h-4 text-[#587d65]" />
                <span>Compre via WhatsApp</span>
              </a>
            </div>

            {/* Scientific Badges */}
            <div className="pt-6 border-t border-[#e6e2d8] grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-stone-700">
              <div className="flex items-center gap-2">
                <Dna className="w-4 h-4 text-[#183324] flex-shrink-0" />
                <span>Equilíbrio da Microbiota</span>
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="w-4 h-4 text-[#183324] flex-shrink-0" />
                <span>100% Vegano & Cruelty-Free</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#183324] flex-shrink-0" />
                <span>0% Formol, Parabenos & Petrolatos</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Benchmark (Aesop / Biossance Clean Aesthetic) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <img
                  src="https://images.unsplash.com/photo-1608248597359-00977821c97a?auto=format&fit=crop&w=1000&q=80"
                  alt="Biorenov Botanic Beauty - Tratamentos Probióticos"
                  className="w-full h-[470px] object-cover"
                />

                {/* Overlaid Botanical Card */}
                <div className="absolute bottom-5 left-5 right-5 p-5 rounded-2xl bg-[#f9f8f5]/95 backdrop-blur-md border border-[#e6e2d8] shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-[#8d5b3a] font-bold">
                        Formulação do Cosmetólogo
                      </p>
                      <p className="font-serif text-base font-bold text-[#183324]">
                        Biolumini & Fator de Crescimento
                      </p>
                    </div>
                    <span className="px-3 py-1 bg-[#183324] text-white rounded-full text-[11px] font-semibold tracking-wide">
                      Bioativos
                    </span>
                  </div>
                  <p className="text-stone-600 text-xs mt-2 line-clamp-2">
                    Cosméticos vivos formulados para restaurar o manto biológico cutâneo e capilar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
