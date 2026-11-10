"use client";

import React from "react";
import Link from "next/link";
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
          
          {/* Left Column: Chunky Creamy-Style Headline */}
          <div className="lg:col-span-5 space-y-5 text-left">
            <span className="inline-block px-3 py-1 rounded-full bg-pink-100 text-[#b4536a] text-[11px] uppercase tracking-wider font-black">
              Biotecnologia & Alta Performance
            </span>

            <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-[62px] text-[#24171d] leading-[1.04] tracking-tight">
              Pele Radiante. <br />
              <span className="text-[#b4536a]">Confiança Real.</span>
            </h1>

            <p className="text-stone-600 text-sm sm:text-base max-w-md font-medium leading-relaxed">
              Fórmulas concentradas, bioativos botânicos e cuidados dermatológicos
              inteligentes para melasma, fios e alívio muscular.
            </p>

            <div className="pt-2">
              <a
                href="#produtos"
                className="inline-block px-8 py-4 rounded-full bg-[#b4536a] hover:bg-[#9c4357] text-white text-xs font-black uppercase tracking-wider shadow-lg hover:shadow-xl transition-all cursor-pointer"
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
                <Link href="/produto/biolumini-uniformizador" className="flex flex-col items-center group cursor-pointer">
                  <div className="relative aspect-square w-full rounded-2xl bg-white/60 p-3 sm:p-4 shadow-sm border border-pink-100 flex items-center justify-center hover:scale-105 transition-transform">
                    <img
                      src="/produtos/pdf_p5_img3.jpeg"
                      alt="Biolumini Probiótico"
                      className="max-h-36 sm:max-h-52 w-auto object-contain drop-shadow-md"
                    />
                  </div>
                  <span className="text-[11px] font-semibold text-stone-700 mt-2 text-center group-hover:text-[#b4536a] transition-colors">
                    Biolumini Clareador
                  </span>
                </Link>

                {/* Product 2: Dorless 240g (Center piece) */}
                <Link href="/produto/dorless-terapeutico" className="flex flex-col items-center group -mt-6 cursor-pointer">
                  <div className="relative aspect-square w-full rounded-2xl bg-white/80 p-3 sm:p-4 shadow-md border border-pink-200 flex items-center justify-center hover:scale-105 transition-transform">
                    <img
                      src="/produtos/aky06721.jpg"
                      alt="Dorless 240g"
                      className="max-h-44 sm:max-h-64 w-auto object-contain drop-shadow-lg"
                    />
                  </div>
                  <span className="text-[11px] font-bold text-[#b4536a] mt-2 text-center">
                    Dorless 240g
                  </span>
                </Link>

                {/* Product 3: Btox Facial Lifting */}
                <Link href="/produto/creme-facial-btox-lifting" className="flex flex-col items-center group cursor-pointer">
                  <div className="relative aspect-square w-full rounded-2xl bg-white/60 p-3 sm:p-4 shadow-sm border border-pink-100 flex items-center justify-center hover:scale-105 transition-transform">
                    <img
                      src="/produtos/aky06763.jpg"
                      alt="Btox Facial Lifting"
                      className="max-h-36 sm:max-h-52 w-auto object-contain drop-shadow-md"
                    />
                  </div>
                  <span className="text-[11px] font-semibold text-stone-700 mt-2 text-center group-hover:text-[#b4536a] transition-colors">
                    Btox Lifting Tensor
                  </span>
                </Link>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
