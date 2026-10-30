"use client";

import React from "react";
import { useCart } from "@/lib/cart-context";
import { PRODUCTS } from "@/data/products";
import { Sparkles, CheckCircle2, ShieldCheck, Sun, Moon, ArrowRight, MessageCircle } from "lucide-react";

export function BioluminiDeepDive() {
  const { addItem } = useCart();
  const biolumini = PRODUCTS.find((p) => p.id === "biolumini-uniformizador") || PRODUCTS[0];

  return (
    <section id="biolumini" className="py-16 md:py-24 bg-[#f0eee9] border-b border-[#e6e2d8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Showcase */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white border border-[#e6e2d8]">
              <img
                src={biolumini.image}
                alt="Biolumini Probiótico - Creme Uniformizador"
                className="w-full h-[460px] object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3.5 py-1.5 rounded-full bg-[#183324] text-white text-[11px] font-bold uppercase tracking-wider shadow">
                  Hero Dermocosmético
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#f9f8f5]/95 backdrop-blur-md border border-[#e6e2d8]">
                <div className="flex items-center justify-between text-xs text-[#183324] font-semibold">
                  <span>Textura: Fluida & Aveludada</span>
                  <span className="text-[#8d5b3a]">Absorção em 30 segundos</span>
                </div>
              </div>
            </div>

            {/* Application routine cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-2xl border border-[#e6e2d8] flex items-start gap-3">
                <Sun className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-stone-900 uppercase">Manhã</h4>
                  <p className="text-[11px] text-stone-600 mt-0.5">
                    Aplicar após a água micelar e finalizar sempre com o Bio Sun Care.
                  </p>
                </div>
              </div>
              <div className="p-4 bg-white rounded-2xl border border-[#e6e2d8] flex items-start gap-3">
                <Moon className="w-5 h-5 text-indigo-700 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-stone-900 uppercase">Noite</h4>
                  <p className="text-[11px] text-stone-600 mt-0.5">
                    Aplicar na pele limpa para ação reparadora noturna e regeneração profunda.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Clinical & Scientific Details */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#8d5b3a] font-bold">
              <Sparkles className="w-3.5 h-3.5 text-[#8d5b3a]" />
              Inovação no Controle de Hiperpigmentação
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-[#183324] font-normal leading-tight">
              Biolumini: O fim do efeito rebote no tratamento do melasma.
            </h2>

            <p className="text-stone-700 text-sm leading-relaxed">
              O maior erro nos tratamentos tradicionais de manchas é a agressão química
              (ácidos agressivos e hidroquinona) que inflama a pele. Quando a inflamação cessa,
              os melanócitos produzem ainda mais pigmento — gerando o efeito rebote.
            </p>

            <p className="text-stone-700 text-sm leading-relaxed">
              O <strong>Biolumini</strong> atua de forma biológica inteligente: os probióticos
              silenciam os mensageiros inflamatórios enquanto fitoativos seguros desaceleram a
              produção excessiva de melanina, restaurando a luminosidade uniforme e a densidade da pele.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#587d65] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-xs text-stone-900 block font-bold">
                    Fortalecimento da Barreira Lipídica
                  </strong>
                  <span className="text-xs text-stone-600">
                    Aumenta a resistência cutânea contra a luz azul de telas e calor ambiente.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#587d65] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-xs text-stone-900 block font-bold">
                    Uniformização Gradual e Duradoura
                  </strong>
                  <span className="text-xs text-stone-600">
                    Clareamento suave sem vermelhidão, descamação severa ou fotossensibilidade extrema.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#587d65] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-xs text-stone-900 block font-bold">
                    Uso Facial e Corporal
                  </strong>
                  <span className="text-xs text-stone-600">
                    Seguro também para áreas de atrito como axilas, virilhas, colo e mãos.
                  </span>
                </div>
              </div>
            </div>

            {/* Price & Immediate Purchase */}
            <div className="p-6 bg-white rounded-3xl border border-[#e6e2d8] space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs text-stone-400 line-through">De R$ 229,00</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-[#183324]">R$ 189,90</span>
                    <span className="text-xs text-emerald-800 font-semibold">
                      (R$ 180,40 no Pix)
                    </span>
                  </div>
                </div>
                <span className="text-xs text-stone-500 font-medium">Frasco 50g • Rende 60 dias</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={() => addItem(biolumini)}
                  className="py-3 px-5 rounded-xl bg-[#183324] hover:bg-[#12261b] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <span>Garantir Meu Biolumini</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`https://wa.me/5511999999999?text=${encodeURIComponent(biolumini.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-5 rounded-xl bg-[#f9f8f5] hover:bg-[#f0eee9] border border-[#d8d3c7] text-[#183324] font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#587d65]" />
                  <span>Dúvidas no WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
