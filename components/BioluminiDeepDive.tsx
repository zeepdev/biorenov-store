"use client";

import React from "react";
import { useCart } from "@/lib/cart-context";
import { PRODUCTS } from "@/data/products";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function BioluminiDeepDive() {
  const { addItem } = useCart();
  const biolumini =
    PRODUCTS.find((p) => p.id === "biolumini-uniformizador") || PRODUCTS[0];

  return (
    <section id="biolumini" className="py-16 sm:py-24 bg-[#efece4]/60 border-y border-[#e8e4db]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Natural, Human Editorial Photography (Lunara Style) */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-lg border border-[#e8e4db] bg-[#f7f5f0]">
              <img
                src="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1000&q=80"
                alt="Aplicação sensorial Biolumini Probiótico"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/40 text-xs text-[#1e2420]">
                <span className="font-serif font-semibold text-sm block mb-0.5">
                  Fórmula Biotecnológica Probiótica
                </span>
                <span className="text-[#5f6761]">
                  Clareamento seguro sem descamação severa e sem efeito rebote.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy (Lunara "The Double Cleanse" Style) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs uppercase tracking-widest text-[#8d5b3a] font-semibold">
              O Protocolo em Destaque
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl text-[#1e2420] font-normal leading-[1.15] tracking-tight">
              Clareamento inteligente. <br />
              <span className="italic font-serif font-light text-[#2d4734]">
                Sem efeito rebote.
              </span>
            </h2>

            <p className="text-[#4a524c] text-sm sm:text-base leading-relaxed">
              O maior erro nos tratamentos tradicionais de melasma é agredir a pele com
              ácidos severos que provocam inflamação. Quando a barreira se rompe, os melanócitos
              produzem ainda mais pigmento — o temido efeito rebote.
            </p>

            <p className="text-[#4a524c] text-sm sm:text-base leading-relaxed">
              O <strong>Biolumini</strong> age por biocompatibilidade celular: seus biofermentos
              probióticos silenciam os mensageiros inflamatórios e equilibram a flora cutânea,
              enquanto bioativos botânicos uniformizam o tom de forma suave, segura e contínua.
            </p>

            {/* Key benefits list */}
            <div className="space-y-3 pt-2 text-xs sm:text-sm text-[#38413b]">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#2d4734] flex-shrink-0" />
                <span>Compatível com peles sensíveis e áreas de atrito (rosto, axilas e virilhas)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#2d4734] flex-shrink-0" />
                <span>Textura aveludada com rápida absorção (toque seco em 30 segundos)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#2d4734] flex-shrink-0" />
                <span>Rende 60 dias de aplicação diária com economia real no Pix</span>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => addItem(biolumini)}
                className="px-8 py-4 rounded-full bg-[#1e3324] hover:bg-[#132218] text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <span>Garantir Meu Biolumini • R$ 189,90</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/5511999999999?text=${encodeURIComponent(
                  biolumini.whatsappMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-full bg-white hover:bg-stone-50 border border-[#dcd6c9] text-[#1e2420] text-xs font-semibold uppercase tracking-wider text-center transition-colors"
              >
                Tirar Dúvidas com Consultor
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
