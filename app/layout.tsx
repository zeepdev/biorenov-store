import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/lib/cart-context";

export const metadata: Metadata = {
  title: "Biorenov Cosméticos | Biotecnologia & Renovação Celular",
  description:
    "Tratamentos dermocosméticos de alta performance. Redução de linhas finas, estímulo de colágeno e hidratação profunda. Frete grátis para todo o Brasil e 5% de desconto no Pix.",
  keywords: [
    "biorenov",
    "dermocosméticos",
    "sérum anti-idade",
    "colágeno",
    "ácido hialurônico",
    "skincare brasil",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-[#faf8f5] text-[#1c1917] antialiased">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
