import React from "react";
import { Package, RotateCcw, Lock, Headphones } from "lucide-react";

export function TrustBar() {
  const items = [
    {
      icon: Package,
      title: "Frete Grátis",
      desc: "Em compras acima de R$ 199 para todo o Brasil",
    },
    {
      icon: RotateCcw,
      title: "Garantia de 30 Dias",
      desc: "Resultados perceptíveis ou reembolso total",
    },
    {
      icon: Lock,
      title: "Pagamento Seguro",
      desc: "Pix com 5% de desconto ou até 12x no cartão",
    },
    {
      icon: Headphones,
      title: "Atendimento Consultivo",
      desc: "Suporte com especialistas via WhatsApp",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 relative z-20">
      {/* Floating White Card (Verdora Style) */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#e8e4db]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#f0ece3]">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`flex items-center gap-4 ${
                  idx !== 0 ? "pt-4 sm:pt-0 sm:pl-6" : ""
                }`}
              >
                {/* Soft circular icon backdrop */}
                <div className="w-12 h-12 rounded-full bg-[#f3f5f2] flex items-center justify-center flex-shrink-0 text-[#2d4734]">
                  <Icon className="w-5 h-5 stroke-[1.6]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#1e2420] tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#5f6761] mt-0.5 leading-snug">
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
