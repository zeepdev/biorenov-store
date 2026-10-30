import React from "react";
import { Sparkles, Dna, Droplets, CheckCircle2 } from "lucide-react";

export function ScienceSection() {
  const pillars = [
    {
      icon: Droplets,
      tag: "Hidratação Multicamadas",
      title: "Ácido Hialurônico Reticulado 2.0%",
      description:
        "Moléculas fracionadas com 4 pesos moleculares distintos. Atingem desde a epiderme superficial até as camadas mais profundas da derme para um efeito preenchedor imediato.",
    },
    {
      icon: Dna,
      tag: "Bioestimulação Ativa",
      title: "Peptídeos de Sinalização Celular",
      description:
        "Agem diretamente nos fibroblastos, instruindo o organismo a produzir colágeno tipos I e III. Reduz o aspecto de flacidez e devolve a elasticidade natural da juventude.",
    },
    {
      icon: Sparkles,
      tag: "Uniformização e Barreira",
      title: "Niacinamida Farmacêutica 5%",
      description:
        "Fortalece a barreira lipídica contra agressões externas, ameniza poros dilatados e uniformiza marcas de pigmentação sem causar descamação agressiva.",
    },
  ];

  return (
    <section id="formula" className="py-16 md:py-24 bg-white border-b border-[#e7e3dc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs uppercase tracking-widest text-[#8e6840] font-bold">
              Biotecnologia Biorenov
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1b382b] font-normal leading-tight">
              A ciência por trás da renovação da sua pele.
            </h2>
            <p className="text-stone-600 text-sm leading-relaxed">
              Não acreditamos em milagres passageiros. Nossas formulações combinam
              química limpa, biologia celular e estudos clínicos rigorosos para entregar
              efeito rejuvenescedor perceptível a partir dos primeiros 14 dias de rotina.
            </p>

            <ul className="space-y-3 pt-2 text-xs text-stone-700 font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                <span>Zero parabenos, sulfatos agressivos e petrolatos</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                <span>Textura biocompatível com rápida absorção (toque seco)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                <span>Compatível com todos os fototipos e tipos de pele</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-5">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-3xl bg-[#faf8f5] border border-stone-200/90 flex flex-col justify-between hover:shadow-md transition-shadow"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm text-[#1b382b] mb-4 border border-stone-200">
                      <Icon className="w-6 h-6 text-[#1b382b]" />
                    </div>
                    <span className="text-[10px] uppercase tracking-wider font-bold text-[#8e6840]">
                      {pillar.tag}
                    </span>
                    <h3 className="font-serif text-base font-bold text-stone-900 mt-1 mb-2">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed mt-2">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
