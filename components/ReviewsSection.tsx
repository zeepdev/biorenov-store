import React from "react";
import { Star, CheckCircle, ShieldCheck } from "lucide-react";

export function ReviewsSection() {
  const reviews = [
    {
      name: "Dra. Renata Vasconcelos",
      role: "Dermatologista & Cliente",
      location: "São Paulo, SP",
      product: "Biolumini Probiótico",
      text: "Eu sofria com melasma recidivo há anos. Qualquer ácido causava inflamação e a mancha voltava pior. O Biolumini foi a única abordagem que clareou meu rosto respeitando a barreira biológica. Hoje indico para todos os meus pacientes.",
      rating: 5,
      date: "Há 4 dias",
    },
    {
      name: "Marcus Vinícius Castro",
      role: "Terapeuta Capilar",
      location: "Belo Horizonte, MG",
      product: "Fator de Crescimento Vegano",
      text: "Comecei aplicando nas entradas do cabelo e falhas da barba. Em 40 dias o preenchimento foi notável. O melhor de tudo: sem a irritação ou ressecamento que outros tônicos químicos sintéticos causavam.",
      rating: 5,
      date: "Há 1 semana",
    },
    {
      name: "Luciana Fontes",
      role: "Praticante de Crossfit & Corrida",
      location: "Curitiba, PR",
      product: "Dorless Relaxante Muscular",
      text: "O Dorless virou item obrigatório na minha rotina pós-treino. O cheiro de copaíba e arnica é extremamente reconfortante e a absorção é rápida. Alivia a tensão nos ombros e pernas de forma impressionante.",
      rating: 5,
      date: "Há 2 semanas",
    },
  ];

  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-[#f9f8f5] border-b border-[#e6e2d8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-[#8d5b3a] font-bold">
            Comprovação de Quem Vive a Rotina
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#183324] mt-2">
            Resultados Reais & Experiências Verificadas
          </h2>
          <p className="text-stone-600 text-sm mt-3">
            O impacto diário dos probióticos e bioativos botânicos na saúde da pele, dos fios e do corpo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white p-7 rounded-3xl border border-[#e6e2d8] shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-amber-600">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] text-stone-400">{rev.date}</span>
                </div>

                <p className="text-stone-700 text-sm leading-relaxed mb-6 italic">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-stone-900">
                    <span>{rev.name}</span>
                    <CheckCircle className="w-3.5 h-3.5 text-[#587d65]" />
                  </div>
                  <span className="text-[10px] text-stone-500">{rev.location}</span>
                </div>
                <div className="flex items-center justify-between text-[11px] text-stone-500 mt-1">
                  <span>{rev.role}</span>
                  <span className="font-semibold text-[#8d5b3a]">{rev.product}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
