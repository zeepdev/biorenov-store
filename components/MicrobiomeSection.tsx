import React from "react";
import { Dna, ShieldCheck, Sparkles, CheckCircle2, RefreshCw } from "lucide-react";

export function MicrobiomeSection() {
  const pillars = [
    {
      title: "O Ecossistema Invisível",
      tag: "Microbiota Humana",
      desc: "Nossa pele e couro cabeludo abrigam trilhões de microrganismos vivos que formam a primeira barreira de defesa imunológica. Cosméticos convencionais com químicos agressivos esterilizam esse ecossistema, causando inflamação, melasma e queda capilar.",
    },
    {
      title: "Proteção Contra Estresse Oxidativo",
      tag: "Blindagem Biológica",
      desc: "Os biofermentos probióticos da Biorenov produzem peptídeos antimicrobianos e antioxidantes naturais que neutralizam os radicais livres induzidos pela radiação UV e pela poluição das grandes cidades.",
    },
    {
      title: "Restauração do Manto Hidrolipídico",
      tag: "Zero Efeito Rebote",
      desc: "Ao invés de agredir a pele para forçar a renovação celular, nossos probióticos fortalecem as junções celulares da barreira cutânea, promovendo uniformização suave do tom e fios capilares até 3x mais resistentes.",
    },
  ];

  return (
    <section id="probioticos" className="py-16 md:py-24 bg-white border-b border-[#e6e2d8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#8d5b3a] font-bold">
              <Dna className="w-3.5 h-3.5 text-[#8d5b3a]" />
              O Pilar Científico Biorenov
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-[#183324] font-normal leading-tight">
              Por que a biotecnologia probiótica é o futuro da estética?
            </h2>

            <p className="text-stone-700 text-sm leading-relaxed">
              Durante décadas, a indústria tradicional tratou a pele e o couro cabeludo
              como superfícies inertes que precisavam ser ressecadas ou atacadas com ácidos agressivos.
              A Biorenov parte do princípio oposto: <strong>sua pele é um órgão vivo</strong>.
            </p>

            <ul className="space-y-3 pt-2 text-xs text-stone-700 font-medium">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#587d65] flex-shrink-0" />
                <span>Compatibilidade celular comprovada: bioativos idênticos ao corpo</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#587d65] flex-shrink-0" />
                <span>Zero agressão ao pH fisiológico da derme e do couro cabeludo</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#587d65] flex-shrink-0" />
                <span>Clareamento e crescimento sem descamação ou efeito rebote</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-5">
            {pillars.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-[#f9f8f5] border border-[#e6e2d8] flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-[#183324] text-[#f9f8f5] flex items-center justify-center font-bold text-xs mb-4">
                    0{idx + 1}
                  </div>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-[#8d5b3a]">
                    {item.tag}
                  </span>
                  <h3 className="font-serif text-base font-bold text-[#183324] mt-1 mb-2">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed mt-2">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
