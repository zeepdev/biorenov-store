"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export function FaqSection() {
  const faqs = [
    {
      q: "Como funcionam os probióticos aplicados em cosméticos?",
      a: "Diferente de suplementos orais com bactérias vivas, os probióticos tópicos da Biorenov utilizam lisados e biofermentos estáveis (frações celulares bioativas). Eles interagem com os receptores da pele e do couro cabeludo, estimulando a multiplicação da flora protetora, inibindo bactérias nocivas causadoras de acne/inflamação e acelerando a síntese de colágeno.",
    },
    {
      q: "As fórmulas são seguras para gestantes e lactantes?",
      a: "Sim! Por serem 100% veganas, limpas e livres de ácidos agressivos proibidos na gestação (como ácido retinóico, hidroquinona ou derivados de formol), produtos como a Purifique Água Micelar e o Bio Sun Care são amplamente indicados. No caso do Biolumini, por ser focado em melasma (muito comum na gestação), recomendamos apresentar a lista de ingredientes ao seu obstetra antes de iniciar.",
    },
    {
      q: "Posso utilizar os produtos mesmo se fizer químicas no cabelo ou pele?",
      a: "Sim, e é altamente recomendado. Procedimentos como alisamentos, colorações e peelings químicos danificam severamente o microbioma e a barreira hidrolipídica. O Fator de Crescimento Vegano e o Biolumini agem exatamente na recuperação biológica dessa estrutura fragilizada.",
    },
    {
      q: "O Fator de Crescimento Vegano serve para barba, sobrancelhas e cílios?",
      a: "Sim! Sua formulação foi desenhada para atuar em todo e qualquer folículo piloso do corpo. Ele estimula o bulbo folicular sem irritar a mucosa dos olhos ou a pele do rosto, sendo excelente para correção de falhas na barba e sobrancelhas ralas.",
    },
    {
      q: "Quais os prazos de entrega e valor do frete?",
      a: "Enviamos com código de rastreamento para todo o Brasil diretamente de São Paulo - SP. O frete é 100% gratuito para compras acima de R$ 199,00. O prazo de entrega varia tipicamente de 2 a 6 dias úteis para Sul e Sudeste, e de 4 a 9 dias úteis para demais regiões.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 md:py-24 bg-white border-b border-[#e6e2d8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest text-[#8d5b3a] font-bold">
            Transparência & Segurança
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#183324] font-normal mt-2">
            Perguntas Frequentes
          </h2>
          <p className="text-stone-600 text-sm mt-3">
            Respostas diretas da nossa equipe cosmetológica sobre aplicação e segurança biológica.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-[#e6e2d8] rounded-2xl overflow-hidden bg-[#f9f8f5] transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-serif text-base font-semibold text-[#183324] hover:text-[#8d5b3a] transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-stone-500 transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? "transform rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs text-stone-700 leading-relaxed border-t border-[#e6e2d8]/60 animate-fade-in">
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
