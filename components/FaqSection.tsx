"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export function FaqSection() {
  const faqs = [
    {
      q: "O que torna a Linha Raspberry Hazelnut tão especial?",
      a: "Ela une a riqueza nutritiva da avelã pura com a leveza refrescante da framboesa silvestre. O resultado é uma perfumação elegante na medida certa, toque aveludado sem oleosidade e sensação de frescor prolongado que te acompanha o dia inteiro.",
    },
    {
      q: "Como funcionam os probióticos aplicados em cosméticos?",
      a: "Diferente de suplementos orais com bactérias vivas, os probióticos tópicos da Biorenov utilizam frações celulares biofermentadas estáveis. Elas interagem com os receptores da pele, multiplicando a microbiota benéfica protetora, inibindo inflamações e acelerando a regeneração celular.",
    },
    {
      q: "As fórmulas são seguras para gestantes e peles sensíveis?",
      a: "Sim! Por serem 100% veganas, limpas e livres de ácidos agressivos (sem parabenos pesados, formol ou derivados tóxicos), nossos produtos oferecem extrema biocompatibilidade e conforto diário.",
    },
    {
      q: "O Fator de Crescimento Vegano serve para sobrancelhas e barba?",
      a: "Sim! Sua formulação foi desenhada para atuar em qualquer folículo piloso do corpo. Ele estimula o bulbo folicular sem irritar a mucosa dos olhos ou a pele do rosto, sendo excelente para correção de falhas.",
    },
    {
      q: "Quais os prazos de entrega e valor do frete?",
      a: "Enviamos com código de rastreamento para todo o Brasil diretamente de São Paulo - SP. O frete é 100% gratuito para compras acima de R$ 199,00. O prazo de entrega varia tipicamente de 2 a 6 dias úteis para Sul e Sudeste, e de 4 a 9 dias úteis para demais regiões.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 md:py-24 bg-white border-b border-stone-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-[11px] font-black uppercase tracking-widest text-[#c84b68] block">
            Transparência & Cuidado
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-[#24171d] mt-2 tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="text-stone-500 text-sm mt-2 font-medium">
            Respostas diretas sobre fórmulas, protocolos de uso e prazos de envio.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-stone-200/90 rounded-2xl overflow-hidden bg-[#faf7f5] transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-heading font-bold text-sm sm:text-base text-stone-900 hover:text-[#c84b68] transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-stone-400 transition-transform duration-200 shrink-0 ${
                      isOpen ? "transform rotate-180 text-[#c84b68]" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-200/60 animate-fade-in font-normal">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
