import React from "react";
import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Estou%20no%20site%20da%20Biorenov%20e%20gostaria%20de%20ajuda%20para%20escolher%20o%20melhor%20produto%20para%20minha%20pele."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 p-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-2xl hover:scale-110 transition-all flex items-center justify-center group"
      title="Falar no WhatsApp"
      aria-label="Atendimento no WhatsApp"
    >
      <MessageCircle className="w-7 h-7 fill-current" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-xs font-semibold px-0 group-hover:px-2">
        Dúvidas? Fale Conosco
      </span>
    </a>
  );
}
