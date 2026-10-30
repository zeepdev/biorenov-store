import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/cart-context";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Biorenov | Botanic Beauty • Cuidados Probióticos & Botânicos",
  description:
    "Cosméticos probióticos e bioativos botânicos de alta performance formulados por Douglas Alan. Tratamentos seguros para melasma, fios capilares e bem-estar corporal.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${jakarta.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-[#f7f5f0] text-[#1c221e] antialiased">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
