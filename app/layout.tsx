import type { Metadata } from "next";
import { Poppins, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/cart-context";

// Fonte gordinha e arredondada estilo Creamy / Gotham Ultra
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-heading",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Biorenov | Cuidados Probióticos & Alta Performance",
  description:
    "Fórmulas concentradas, bioativos botânicos e cuidados dermatológicos inteligentes por Douglas Alan. Tratamentos para melasma, fios e alívio muscular.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} ${jakarta.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-[#ffffff] text-[#1a1518] antialiased">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
