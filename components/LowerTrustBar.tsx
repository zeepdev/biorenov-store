import React from "react";
import { Truck, RotateCcw, ShieldCheck, Headphones } from "lucide-react";

export function LowerTrustBar() {
  const items = [
    {
      icon: Truck,
      title: "FRETE GRÁTIS",
      desc: "Em pedidos acima de R$ 199",
    },
    {
      icon: RotateCcw,
      title: "TROCA GARANTIDA",
      desc: "30 dias de garantia total",
    },
    {
      icon: ShieldCheck,
      title: "PAGAMENTO SEGURO",
      desc: "Checkout 100% criptografado",
    },
    {
      icon: Headphones,
      title: "SUPORTE ESPECIALIZADO",
      desc: "Estamos prontos para te ajudar",
    },
  ];

  return (
    <div className="bg-[#fcf8f6] border-t border-stone-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {items.map((it, idx) => {
            const Icon = it.icon;
            return (
              <div key={idx} className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full bg-white shadow-2xs border border-pink-100 flex items-center justify-center flex-shrink-0 text-[#b4536a]">
                  <Icon className="w-5 h-5 stroke-[1.6]" />
                </div>
                <div>
                  <h4 className="text-[11px] sm:text-xs font-bold text-stone-900 tracking-wider uppercase">
                    {it.title}
                  </h4>
                  <p className="text-[11px] text-stone-500 mt-0.5 leading-snug">
                    {it.desc}
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
