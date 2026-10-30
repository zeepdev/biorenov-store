import React from "react";
import { Leaf, FlaskConical, Heart, Globe } from "lucide-react";

export function TrustBar() {
  const items = [
    {
      icon: Leaf,
      title: "Ingredientes Limpos",
      desc: "Seguros & livres de toxinas",
    },
    {
      icon: FlaskConical,
      title: "Clinicamente Comprovado",
      desc: "Testado dermatologicamente",
    },
    {
      icon: Heart,
      title: "Cruelty-Free",
      desc: "Nunca testado em animais",
    },
    {
      icon: Globe,
      title: "Beleza Consciente",
      desc: "Bom para você e para o planeta",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
      {/* Floating White Card (Exact Velvetique Style) */}
      <div className="bg-white rounded-xl py-6 px-6 sm:px-10 shadow-sm border border-stone-200">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-center">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#faf2f4] flex items-center justify-center flex-shrink-0 text-[#b4536a]">
                  <Icon className="w-5 h-5 stroke-[1.6]" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-stone-900 tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-stone-500 mt-0.5 leading-snug">
                    {item.desc}
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
