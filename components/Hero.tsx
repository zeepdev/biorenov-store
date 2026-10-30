"use client";

import React from "react";
import { ArrowRight, Leaf, Heart, Award } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 bg-[#f7f5f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Copy (Inspired by Verdora & Lunara) */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-[72px] text-[#1e2420] leading-[1.08] tracking-[-0.02em] font-normal">
              Escolhas conscientes. <br />
              <span className="italic font-serif font-light text-[#2d4734]">
                Pele que respira.
              </span>
            </h1>

            <p className="text-[#4a524c] text-base sm:text-lg max-w-lg font-normal leading-relaxed">
              Fórmulas botânicas limpas e biotecnologia probiótica desenvolvidas pelo cosmetólogo 
              <strong> Douglas Alan</strong> para restaurar a barreira biológica natural da sua pele e fios.
            </p>

            {/* Main Action Button */}
            <div className="pt-2">
              <a
                href="#produtos"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#1e3324] text-[#f7f5f0] text-sm font-medium hover:bg-[#132218] transition-all group shadow-sm"
              >
                <span>Conhecer a Coleção</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Clean Minimalist Badges (Exact Verdora Style) */}
            <div className="pt-8 border-t border-[#e8e4db] flex flex-wrap items-center gap-6 sm:gap-10 text-xs text-[#4a524c]">
              <div className="flex items-center gap-2">
                <Leaf className="w-4 h-4 text-[#2d4734]" />
                <span>Fórmulas Limpas</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-[#2d4734]" />
                <span>100% Vegano & Cruelty-Free</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#2d4734]" />
                <span>Biotecnologia Probiótica</span>
              </div>
            </div>
          </div>

          {/* Right Column: Organic Pebble Shape & Real Product (Verdora Style) */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px] aspect-[4/5] flex items-center justify-center">
              
              {/* Organic Curved Wave / Pebble Background (Verdora Style) */}
              <div className="absolute inset-0 bg-[#e7ebe4] rounded-[60px] md:rounded-[80px] -rotate-1 transition-transform" />
              <div className="absolute inset-4 bg-[#f0eee8] rounded-[50px] md:rounded-[70px] rotate-1" />

              {/* Real Product Image (Crisp & Clean) */}
              <div className="relative z-10 w-full h-full p-8 flex items-center justify-center">
                <img
                  src="/produtos/dorless_render_1.png"
                  alt="Biorenov Dorless Relaxante Muscular"
                  className="max-h-[380px] w-auto object-contain drop-shadow-xl hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Circular Stamp Badge (Exact Verdora "Thoughtful by Nature" circular badge) */}
              <div className="absolute top-4 right-2 z-20 w-24 h-24 rounded-full bg-[#8d5b3a] text-[#f7f5f0] p-2 flex flex-col items-center justify-center text-center shadow-md rotate-12">
                <Leaf className="w-4 h-4 mb-0.5 text-[#f7f5f0]/90" />
                <span className="text-[9px] uppercase font-bold tracking-wider leading-tight">
                  Douglas Alan
                </span>
                <span className="text-[8px] opacity-80 uppercase tracking-widest mt-0.5">
                  Cosmetologia
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
