"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#fbf4f0] via-[#f7ece7] to-[#f4e6e1] py-12 md:py-20 border-b border-[#ede2dc]">
      {/* Left and Right Carousel Arrow Controls (Velvetique style) */}
      <button
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/70 hover:bg-white text-stone-600 hover:text-stone-900 shadow-sm flex items-center justify-center transition-all cursor-pointer hidden md:flex"
        aria-label="Anterior"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/70 hover:bg-white text-stone-600 hover:text-stone-900 shadow-sm flex items-center justify-center transition-all cursor-pointer hidden md:flex"
        aria-label="Próximo"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Velvetique Editorial Copy */}
          <div className="lg:col-span-5 space-y-5 text-left">
            <span className="text-xs uppercase tracking-widest text-stone-600 font-semibold block">
              Novidade Biorenov
            </span>

            <h1 className="font-serif text-5xl sm:text-6xl lg:text-[64px] text-[#24171d] leading-[1.08] tracking-tight font-normal">
              Pele Radiante. <br />
              <span className="font-serif">Confiança Real.</span>
            </h1>

            <p className="text-stone-600 text-sm sm:text-base max-w-md font-normal leading-relaxed">
              Beleza limpa e biotecnologia probiótica que nutre, regenera e empodera
              a saúde da sua pele e fios com ativos biocompatíveis.
            </p>

            <div className="pt-2">
              <a
                href="#produtos"
                className="inline-block px-8 py-3.5 rounded-md bg-[#b4536a] hover:bg-[#9c4357] text-white text-xs font-semibold uppercase tracking-wider shadow-sm transition-all cursor-pointer"
              >
                Comprar Agora
              </a>
            </div>
          </div>

          {/* Right Column: Multi-Product Showcase on Pedestal with Florals (Velvetique style) */}
          <div className="lg:col-span-7 relative flex items-center justify-center">
            <div className="relative w-full max-w-lg lg:max-w-none flex items-end justify-center pt-8 pb-4">
              
              {/* Product arrangement: 3 flagship products side by side */}
              <div className="relative z-10 grid grid-cols-3 gap-3 sm:gap-6 items-end justify-center w-full px-4">
                
                {/* Product 1: Biolumini Melasma */}
                <div className="flex flex-col items-center group">
                  <div className="relative aspect-square w-full rounded-2xl bg-white/60 p-3 sm:p-4 shadow-sm border border-pink-100 flex items-center justify-center hover:scale-105 transition-transform">
                    <img
                      src="/produtos/pdf_p5_img3.jpeg"
                      alt="Biolumini Probiótico"
                      className="max-h-36 sm:max-h-52 w-auto object-contain drop-shadow-md"
                    />
                  </div>
                  <span className="text-[11px] font-semibold text-stone-700 mt-2 text-center">
                    Biolumini Clareador
                  </span>
                </div>

                {/* Product 2: Dorless 240g (Center piece) */}
                <div className="flex flex-col items-center group -mt-6">
                  <div className="relative aspect-square w-full rounded-2xl bg-white/80 p-3 sm:p-4 shadow-md border border-pink-200 flex items-center justify-center hover:scale-105 transition-transform">
                    <img
                      src="/produtos/dorless_render_1.png"
                      alt="Dorless 240g"
                      className="max-h-44 sm:max-h-64 w-auto object-contain drop-shadow-lg"
                    />
                  </div>
                  <span className="text-[11px] font-bold text-[#b4536a] mt-2 text-center">
                    Dorless 240g
                  </span>
                </div>

                {/* Product 3: Btox Facial Lifting */}
                <div className="flex flex-col items-center group">
                  <div className="relative aspect-square w-full rounded-2xl bg-white/60 p-3 sm:p-4 shadow-sm border border-pink-100 flex items-center justify-center hover:scale-105 transition-transform">
                    <img
                      src="/produtos/btox_photo_1.png"
                      alt="Btox Facial Lifting"
                      className="max-h-36 sm:max-h-52 w-auto object-contain drop-shadow-md"
                    />
                  </div>
                  <span className="text-[11px] font-semibold text-stone-700 mt-2 text-center">
                    Btox Lifting Tensor
                  </span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
