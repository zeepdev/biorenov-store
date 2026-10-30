"use client";

import React from "react";
import { useCart } from "@/lib/cart-context";
import { PRODUCTS } from "@/data/products";
import { Droplet, Sparkles, Sun, ArrowRight } from "lucide-react";

export function RitualSection() {
  const { addItem } = useCart();
  const combo = PRODUCTS.find((p) => p.id === "kit-ritual-botanico") || PRODUCTS[0];

  const steps = [
    {
      number: "Passo 01",
      action: "Purificar a Microbiota",
      product: "Purifique Água Micelar",
      detail:
        "Remoção de toxinas, poluição diária e maquiagem com biofermentos calmantes que preparam a pele sem agredir a barreira lipídica.",
      icon: Droplet,
      time: "Manhã e Noite",
    },
    {
      number: "Passo 02",
      action: "Regenerar e Tratar",
      product: "Biolumini Probiótico",
      detail:
        "Ativos concentrados uniformizadores e reparadores celulares que atuam na despigmentação segura do melasma e estímulo biológico de firmeza.",
      icon: Sparkles,
      time: "Manhã e Noite",
    },
    {
      number: "Passo 03",
      action: "Blindar e Proteger",
      product: "Bio Sun Care FPS 50+",
      detail:
        "Alta proteção solar UVA/UVB fotoestável com toque aveludado e antibrilho, bloqueando a luz azul e evitando o envelhecimento precoce.",
      icon: Sun,
      time: "Uso Diurno Diário",
    },
  ];

  return (
    <section id="ritual" className="py-16 md:py-24 bg-[#f9f8f5] border-b border-[#e6e2d8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest text-[#8d5b3a] font-bold">
            Simplicidade com Alta Eficácia
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#183324] font-normal mt-2">
            O Ritual Botânico em 3 Passos Diários
          </h2>
          <p className="text-stone-600 text-sm mt-3 leading-relaxed">
            Desenvolvido pelo cosmetólogo Douglas Alan para que você não precise de dezenas
            de etapas confusas. Apenas o essencial, concentrado e sinérgico.
          </p>
        </div>

        {/* 3 Step Flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((st, i) => {
            const Icon = st.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-3xl p-8 border border-[#e6e2d8] shadow-sm flex flex-col justify-between relative group hover:shadow-lg transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#8d5b3a] bg-[#f5ede6] px-3 py-1 rounded-full border border-[#e2d0c2]">
                      {st.number}
                    </span>
                    <span className="text-[11px] text-stone-500 font-medium">
                      {st.time}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-2xl bg-[#183324] text-white flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#183324] mb-1">
                    {st.action}
                  </h3>
                  <p className="text-xs font-bold text-[#8d5b3a] uppercase tracking-wide mb-3">
                    {st.product}
                  </p>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {st.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Combo Box CTA */}
        <div className="mt-12 p-8 rounded-3xl bg-[#183324] text-[#f9f8f5] flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center lg:text-left">
            <span className="text-[10px] uppercase tracking-widest text-[#e5c18e] font-bold">
              Economia no Protocolo Completo
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-normal">
              Garanta o Kit Ritual Botânico com R$ 78+ de Desconto
            </h3>
            <p className="text-xs text-stone-300 max-w-xl">
              Os 3 tratamentos (Purifique + Biolumini + Bio Sun Care) com frete grátis
              para todo o Brasil e 5% de desconto extra no Pix.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0">
            <div className="text-center sm:text-right">
              <span className="text-xs text-stone-400 line-through">De R$ 388,80</span>
              <p className="text-2xl font-bold text-white">R$ 349,00</p>
              <span className="text-[11px] text-emerald-400 font-medium">
                (R$ 331,55 no Pix)
              </span>
            </div>
            <button
              onClick={() => addItem(combo)}
              className="px-8 py-4 rounded-full bg-[#8d5b3a] hover:bg-[#774a2d] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg transition-colors"
            >
              <span>Adicionar o Kit à Sacola</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
