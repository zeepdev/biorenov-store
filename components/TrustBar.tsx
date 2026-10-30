import React from "react";
import { Leaf, Dna, ShieldAlert, Award } from "lucide-react";

export function TrustBar() {
  const badges = [
    {
      icon: Leaf,
      title: "100% Vegano & Cruelty-Free",
      desc: "Nenhum teste em animais ou derivado animal",
    },
    {
      icon: Dna,
      title: "Equilíbrio da Microbiota",
      desc: "Nutre e respeita as bactérias benéficas da pele",
    },
    {
      icon: ShieldAlert,
      title: "0% Parabenos & Petrolatos",
      desc: "Fórmula limpa, sem silicones pesados ou formol",
    },
    {
      icon: Award,
      title: "Cosmetologia Douglas Alan",
      desc: "Desenvolvido com rigor e embasamento científico",
    },
  ];

  return (
    <div className="bg-[#f0eee9] border-b border-[#e6e2d8] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((b, i) => {
            const Icon = b.icon;
            return (
              <div key={i} className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center flex-shrink-0 shadow-sm border border-[#e6e2d8]">
                  <Icon className="w-5 h-5 text-[#183324]" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-[#183324]">
                    {b.title}
                  </h4>
                  <p className="text-xs text-stone-600 mt-0.5 leading-snug">
                    {b.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
