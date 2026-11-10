"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { PRODUCTS } from "@/data/products";

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { addItem, setIsCheckoutOpen } = useCart();

  const totalSlides = 2;

  // Auto-advance subtle timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 8000);
    return () => clearInterval(timer);
  }, [totalSlides]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const handleBuyRaspberry = () => {
    const kit = PRODUCTS.find((p) => p.id === "kit-trio-raspberry-hazelnut");
    if (kit) {
      addItem(kit);
      setIsCheckoutOpen(true);
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#fdf6f7] via-[#faf0f3] to-[#f7ecf0] py-10 sm:py-16 md:py-20 border-b border-pink-100 transition-all duration-700">
      
      {/* Setas do Carrossel (Estilo Creamy Skincare) */}
      <button
        onClick={prevSlide}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/80 hover:bg-white text-stone-700 hover:text-stone-900 shadow-md flex items-center justify-center transition-all cursor-pointer hidden md:flex border border-pink-100"
        aria-label="Slide Anterior"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/80 hover:bg-white text-stone-700 hover:text-stone-900 shadow-md flex items-center justify-center transition-all cursor-pointer hidden md:flex border border-pink-100"
        aria-label="Próximo Slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* ======================================================== */}
        {/* SLIDE 0: LINHA RASPBERRY HAZELNUT (NOVIDADE ESTRELA)     */}
        {/* ======================================================== */}
        {currentSlide === 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center animate-fade-in">
            
            {/* Coluna Texto */}
            <div className="lg:col-span-5 space-y-5 text-left order-2 lg:order-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100 text-[#c84b68] text-[11px] uppercase tracking-wider font-black">
                <Sparkles className="w-3.5 h-3.5" />
                Lançamento Exclusivo
              </div>

              <h1 className="font-heading font-black text-3xl sm:text-5xl lg:text-[56px] text-[#24171d] leading-[1.05] tracking-tight">
                Linha Raspberry <br />
                <span className="text-[#c84b68]">Hazelnut.</span>
              </h1>

              <p className="text-stone-600 text-sm sm:text-base font-medium leading-relaxed max-w-md">
                Framboesa & Avelã em uma experiência sensorial inesquecível.
                Fórmula leve, hidratação profunda e perfumação marcante na medida certa.
              </p>

              {/* Chips Rápidos */}
              <div className="flex flex-wrap gap-2 pt-1 text-xs">
                <span className="px-3 py-1 rounded-full bg-white/90 border border-pink-200 text-stone-700 font-semibold shadow-2xs">
                  🌸 Perfuma na medida certa
                </span>
                <span className="px-3 py-1 rounded-full bg-white/90 border border-pink-200 text-stone-700 font-semibold shadow-2xs">
                  ✨ Frescor prolongado
                </span>
                <span className="px-3 py-1 rounded-full bg-white/90 border border-pink-200 text-stone-700 font-semibold shadow-2xs">
                  🍃 Toque leve e aveludado
                </span>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  onClick={handleBuyRaspberry}
                  className="px-8 py-3.5 rounded-full bg-[#c84b68] hover:bg-[#b03b55] text-white text-xs font-black uppercase tracking-wider shadow-lg hover:shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Garantir Meu Kit Trio (R$ 189)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="#produtos"
                  className="px-6 py-3.5 rounded-full bg-white/80 hover:bg-white text-stone-700 border border-pink-200 text-xs font-bold uppercase tracking-wider transition-colors text-center cursor-pointer"
                >
                  Ver Catálogo
                </a>
              </div>
            </div>

            {/* Coluna Imagem Banner Oficial */}
            <div className="lg:col-span-7 order-1 lg:order-2 flex items-center justify-center">
              <div className="relative w-full rounded-3xl overflow-hidden shadow-xl border border-pink-200 bg-white group cursor-pointer" onClick={handleBuyRaspberry}>
                <img
                  src="/banners/raspberry_hazelnut_banner.jpg"
                  alt="Linha Raspberry Hazelnut Biorenov"
                  className="w-full h-auto object-cover max-h-[380px] sm:max-h-[420px] transition-transform duration-700 group-hover:scale-102"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>

          </div>
        )}

        {/* ======================================================== */}
        {/* SLIDE 1: LINHA DERMATOLÓGICA DOUGLAS ALAN               */}
        {/* ======================================================== */}
        {currentSlide === 1 && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center animate-fade-in">
            
            <div className="lg:col-span-5 space-y-5 text-left order-2 lg:order-1">
              <span className="inline-block px-3 py-1 rounded-full bg-pink-100 text-[#b4536a] text-[11px] uppercase tracking-wider font-black">
                Biotecnologia & Alta Performance
              </span>

              <h1 className="font-heading font-black text-3xl sm:text-5xl lg:text-[56px] text-[#24171d] leading-[1.05] tracking-tight">
                Pele Radiante. <br />
                <span className="text-[#b4536a]">Confiança Real.</span>
              </h1>

              <p className="text-stone-600 text-sm sm:text-base max-w-md font-medium leading-relaxed">
                Fórmulas concentradas, bioativos botânicos e cuidados dermatológicos
                inteligentes para melasma, fios e alívio muscular.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href="#produtos"
                  className="px-8 py-3.5 rounded-full bg-[#b4536a] hover:bg-[#9c4357] text-white text-xs font-black uppercase tracking-wider shadow-lg hover:shadow-xl transition-all cursor-pointer text-center"
                >
                  Comprar Agora
                </a>
                <Link
                  href="/produto/kit-ritual-botanico"
                  className="px-6 py-3.5 rounded-full bg-white/80 hover:bg-white text-stone-700 border border-stone-200 text-xs font-bold uppercase tracking-wider transition-colors text-center cursor-pointer"
                >
                  Ver Kit 3 Passos
                </Link>
              </div>
            </div>

            {/* Pedestal dos 3 produtos */}
            <div className="lg:col-span-7 order-1 lg:order-2 flex items-center justify-center">
              <div className="relative w-full max-w-lg lg:max-w-none flex items-end justify-center pt-4 pb-2">
                <div className="relative z-10 grid grid-cols-3 gap-3 sm:gap-6 items-end justify-center w-full px-2">
                  
                  {/* Biolumini */}
                  <Link href="/produto/biolumini-uniformizador" className="flex flex-col items-center group cursor-pointer">
                    <div className="relative aspect-square w-full rounded-2xl bg-white/80 p-3 sm:p-4 shadow-sm border border-pink-100 flex items-center justify-center hover:scale-105 transition-transform">
                      <img
                        src="/produtos/pdf_p5_img3.jpeg"
                        alt="Biolumini Probiótico"
                        className="max-h-36 sm:max-h-52 w-auto object-contain drop-shadow-md"
                      />
                    </div>
                    <span className="text-[11px] font-bold text-stone-700 mt-2 text-center group-hover:text-[#b4536a] transition-colors">
                      Biolumini Clareador
                    </span>
                  </Link>

                  {/* Dorless */}
                  <Link href="/produto/dorless-terapeutico" className="flex flex-col items-center group -mt-6 cursor-pointer">
                    <div className="relative aspect-square w-full rounded-2xl bg-white/95 p-3 sm:p-4 shadow-md border border-pink-200 flex items-center justify-center hover:scale-105 transition-transform">
                      <img
                        src="/produtos/aky06721.jpg"
                        alt="Dorless 240g"
                        className="max-h-44 sm:max-h-64 w-auto object-contain drop-shadow-lg"
                      />
                    </div>
                    <span className="text-[11px] font-black text-[#b4536a] mt-2 text-center">
                      Dorless 240g
                    </span>
                  </Link>

                  {/* Btox */}
                  <Link href="/produto/creme-facial-btox-lifting" className="flex flex-col items-center group cursor-pointer">
                    <div className="relative aspect-square w-full rounded-2xl bg-white/80 p-3 sm:p-4 shadow-sm border border-pink-100 flex items-center justify-center hover:scale-105 transition-transform">
                      <img
                        src="/produtos/aky06763.jpg"
                        alt="Btox Facial Lifting"
                        className="max-h-36 sm:max-h-52 w-auto object-contain drop-shadow-md"
                      />
                    </div>
                    <span className="text-[11px] font-bold text-stone-700 mt-2 text-center group-hover:text-[#b4536a] transition-colors">
                      Btox Lifting Tensor
                    </span>
                  </Link>

                </div>
              </div>
            </div>

          </div>
        )}

        {/* Indicadores de Bolinha (Dots) */}
        <div className="flex items-center justify-center gap-2 pt-6">
          <button
            onClick={() => setCurrentSlide(0)}
            className={`h-2 rounded-full transition-all cursor-pointer ${
              currentSlide === 0 ? "w-8 bg-[#c84b68]" : "w-2 bg-pink-200 hover:bg-pink-300"
            }`}
            aria-label="Ir para Coleção Raspberry"
          />
          <button
            onClick={() => setCurrentSlide(1)}
            className={`h-2 rounded-full transition-all cursor-pointer ${
              currentSlide === 1 ? "w-8 bg-[#b4536a]" : "w-2 bg-pink-200 hover:bg-pink-300"
            }`}
            aria-label="Ir para Cuidados Probióticos"
          />
        </div>

      </div>
    </section>
  );
}
