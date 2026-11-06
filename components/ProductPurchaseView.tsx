"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Product, PRODUCTS } from "@/data/products";
import { useCart } from "@/lib/cart-context";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LowerTrustBar } from "@/components/LowerTrustBar";
import { CartDrawer } from "@/components/CartDrawer";
import { CheckoutModal } from "@/components/CheckoutModal";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { ProductCard } from "@/components/ProductCard";
import {
  Star,
  ShieldCheck,
  Truck,
  Heart,
  Plus,
  Minus,
  Check,
  ShoppingBag,
  CreditCard,
  MessageCircle,
  ChevronRight,
  Sparkles,
  Leaf,
  Clock,
  RotateCcw,
} from "lucide-react";

interface ProductPurchaseViewProps {
  product: Product;
}

export function ProductPurchaseView({ product }: ProductPurchaseViewProps) {
  const { addItem, setIsCheckoutOpen } = useCart();
  const [selectedImage, setSelectedImage] = useState<string>(
    product.images && product.images.length > 0 ? product.images[0] : product.image
  );
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<"descricao" | "modoDeUso" | "ativos" | "envio">("descricao");
  const [added, setAdded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [cepInput, setCepInput] = useState("");
  const [shippingResult, setShippingResult] = useState<string | null>(null);

  // Gallery list
  const gallery = product.images && product.images.length > 0 ? product.images : [product.image];

  // Related products (exclude current)
  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const handleBuyNow = () => {
    addItem(product, quantity);
    setIsCheckoutOpen(true);
  };

  const handleCalculateShipping = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCep = cepInput.replace(/\D/g, "");
    if (cleanCep.length === 8) {
      if (product.price >= 199) {
        setShippingResult("Frete Grátis garantido para este pedido! Entrega em 2 a 5 dias úteis.");
      } else {
        setShippingResult("Envio padrão: R$ 18,90 (Sedex/Jadlog 2 a 5 dias úteis). Frete Grátis em pedidos acima de R$ 199.");
      }
    } else {
      setShippingResult("Por favor, digite um CEP válido de 8 dígitos.");
    }
  };

  const pixPrice = (product.price * 0.95).toFixed(2).replace(".", ",");
  const installmentValue = (product.price / 12).toFixed(2).replace(".", ",");

  return (
    <>
      <Navbar />

      <main className="bg-[#fcfaf8] min-h-screen pb-16">
        {/* Breadcrumb Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-xs text-stone-500 border-b border-stone-200">
          <div className="flex items-center gap-2">
            <Link href="/" className="hover:text-[#b4536a] transition-colors">
              Início
            </Link>
            <ChevronRight className="w-3 h-3 text-stone-400" />
            <Link href="/#produtos" className="hover:text-[#b4536a] transition-colors">
              Loja
            </Link>
            <ChevronRight className="w-3 h-3 text-stone-400" />
            <span className="capitalize text-stone-500">{product.category}</span>
            <ChevronRight className="w-3 h-3 text-stone-400" />
            <span className="text-stone-900 font-medium truncate max-w-xs sm:max-w-sm">
              {product.name}
            </span>
          </div>
        </div>

        {/* Product Purchase Hero (2 Columns) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 bg-white rounded-2xl p-6 sm:p-10 shadow-xs border border-stone-200/80">
            
            {/* LEFT COLUMN: Gallery with Thumbnails */}
            <div className="lg:col-span-7 flex flex-col-reverse md:flex-row gap-4 items-center md:items-start">
              
              {/* Thumbnail Strip */}
              {gallery.length > 1 && (
                <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-y-auto max-h-[540px] w-full md:w-24 shrink-0 py-1">
                  {gallery.map((imgSrc, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(imgSrc)}
                      className={`relative aspect-square w-20 md:w-20 rounded-lg overflow-hidden border-2 bg-stone-50 p-1 cursor-pointer transition-all duration-200 shrink-0 ${
                        selectedImage === imgSrc
                          ? "border-[#b4536a] ring-2 ring-[#b4536a]/20 scale-102"
                          : "border-stone-200 hover:border-stone-300 opacity-80 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={imgSrc}
                        alt={`${product.name} foto ${idx + 1}`}
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Main Photo Showcase */}
              <div className="relative aspect-4/5 w-full flex-1 rounded-xl bg-stone-50 border border-stone-200/70 p-6 flex items-center justify-center overflow-hidden">
                {product.badge && (
                  <span className="absolute top-4 left-4 z-10 bg-[#b4536a] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-2xs">
                    {product.badge}
                  </span>
                )}

                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-white/90 shadow-sm text-stone-400 hover:text-[#b4536a] transition-all cursor-pointer"
                  aria-label="Favoritar"
                >
                  <Heart
                    className={`w-5 h-5 transition-colors ${
                      isFavorite ? "fill-[#b4536a] text-[#b4536a]" : "text-stone-400"
                    }`}
                  />
                </button>

                <img
                  src={selectedImage}
                  alt={product.name}
                  className="max-h-[460px] w-auto max-w-full object-contain transition-transform duration-300 hover:scale-103"
                />
              </div>

            </div>

            {/* RIGHT COLUMN: Purchase Details & Action Controls */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              
              <div>
                {/* Reviews & Star Rating */}
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-stone-800">
                    {product.rating.toFixed(1)}
                  </span>
                  <span className="text-xs text-stone-500">
                    ({product.reviewsCount} avaliações verificadas)
                  </span>
                </div>

                {/* Product Title */}
                <h1 className="font-serif text-2xl sm:text-3xl text-stone-900 leading-snug font-normal">
                  {product.name}
                </h1>

                {/* Subtitle / Volume */}
                <p className="text-xs sm:text-sm text-stone-600 mt-2 font-medium">
                  {product.subtitle}
                </p>

                {/* Price Display */}
                <div className="mt-5 p-4 rounded-xl bg-stone-50 border border-stone-200/80">
                  <div className="flex items-baseline gap-3">
                    {product.originalPrice && (
                      <span className="text-sm text-stone-400 line-through">
                        R$ {product.originalPrice.toFixed(2).replace(".", ",")}
                      </span>
                    )}
                    <span className="font-serif text-3xl font-bold text-[#b4536a]">
                      R$ {product.price.toFixed(2).replace(".", ",")}
                    </span>
                    {product.originalPrice && (
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                        Economize R$ {(product.originalPrice - product.price).toFixed(2).replace(".", ",")}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-stone-600 mt-2">
                    ou em até <strong className="text-stone-900">12x de R$ {installmentValue}</strong> no cartão
                  </p>

                  <div className="mt-2.5 flex items-center gap-2 text-xs font-semibold text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200">
                    <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>R$ {pixPrice} no Pix (5% de desconto imediato)</span>
                  </div>
                </div>

                {/* Short indication */}
                <div className="mt-5 text-xs text-stone-600 leading-relaxed">
                  <strong className="text-stone-900 block mb-1">Indicação:</strong>
                  {product.indication}
                </div>

                {/* Volume Badge */}
                <div className="mt-4 flex items-center gap-2">
                  <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                    Volume:
                  </span>
                  <span className="text-xs font-bold text-stone-900 bg-stone-100 px-3 py-1 rounded-md border border-stone-300">
                    {product.volume}
                  </span>
                  {product.anvisa && (
                    <span className="text-[11px] text-stone-500 ml-auto font-mono">
                      Anvisa: {product.anvisa}
                    </span>
                  )}
                </div>
              </div>

              {/* Quantity Selector + CTAs */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3">
                  
                  {/* Quantity Counter */}
                  <div className="flex items-center border border-stone-300 rounded-lg bg-white overflow-hidden">
                    <button
                      onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                      className="p-3 text-stone-600 hover:text-stone-900 hover:bg-stone-100 transition-colors cursor-pointer"
                      aria-label="Diminuir"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-12 text-center text-sm font-bold text-stone-900">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity((prev) => prev + 1)}
                      className="p-3 text-stone-600 hover:text-stone-900 hover:bg-stone-100 transition-colors cursor-pointer"
                      aria-label="Aumentar"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Add to Cart CTA */}
                  <button
                    onClick={handleAddToCart}
                    className={`flex-1 py-3.5 px-4 rounded-lg font-semibold text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer border ${
                      added
                        ? "bg-emerald-700 text-white border-emerald-700"
                        : "bg-white hover:bg-stone-50 text-[#b4536a] border-[#b4536a] shadow-2xs"
                    }`}
                  >
                    {added ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Adicionado à Sacola!</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4" />
                        <span>Adicionar à Sacola</span>
                      </>
                    )}
                  </button>

                </div>

                {/* Primary COMPRAR AGORA CTA (Mercado Pago Direct) */}
                <button
                  onClick={handleBuyNow}
                  className="w-full py-4 rounded-lg bg-[#b4536a] hover:bg-[#9c4357] text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <CreditCard className="w-4 h-4" />
                  <span>Comprar Agora (Mercado Pago)</span>
                </button>

                {/* WhatsApp Concierge Buy */}
                <a
                  href={`https://wa.me/5511999999999?text=${encodeURIComponent(product.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-semibold text-xs transition-colors flex items-center justify-center gap-2 border border-emerald-200"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>Dúvidas? Compre direto via WhatsApp com Douglas Alan</span>
                </a>
              </div>

              {/* CEP / Shipping Simulator */}
              <div className="pt-2 border-t border-stone-200">
                <form onSubmit={handleCalculateShipping} className="flex gap-2">
                  <input
                    type="text"
                    value={cepInput}
                    onChange={(e) => setCepInput(e.target.value)}
                    placeholder="Digite seu CEP (ex: 05089-000)"
                    maxLength={9}
                    className="flex-1 px-3 py-2 text-xs rounded-md border border-stone-300 focus:outline-none focus:ring-1 focus:ring-[#b4536a]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-stone-800 hover:bg-stone-900 text-white text-xs font-semibold rounded-md transition-colors cursor-pointer"
                  >
                    Calcular Frete
                  </button>
                </form>
                {shippingResult && (
                  <p className="text-[11px] text-stone-600 mt-2 font-medium bg-stone-50 p-2 rounded border border-stone-200">
                    {shippingResult}
                  </p>
                )}
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-stone-200 text-[11px] text-stone-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#b4536a] shrink-0" />
                  <span>Mercado Pago 100% Seguro</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-[#b4536a] shrink-0" />
                  <span>Envio Rápido para Todo o Brasil</span>
                </div>
                <div className="flex items-center gap-2">
                  <RotateCcw className="w-4 h-4 text-[#b4536a] shrink-0" />
                  <span>Garantia de 15 Dias Biorenov</span>
                </div>
                <div className="flex items-center gap-2">
                  <Leaf className="w-4 h-4 text-[#b4536a] shrink-0" />
                  <span>Cruelty-Free & Fórmula Limpa</span>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* Product Tabs Navigation (Abas de Compra & Detalhes) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-xs border border-stone-200/80">
            
            {/* Tab Headers */}
            <div className="flex border-b border-stone-200 overflow-x-auto gap-4 sm:gap-8 pb-px">
              {[
                { id: "descricao", label: "Descrição & Benefícios" },
                { id: "modoDeUso", label: "Modo de Uso & Aplicação" },
                { id: "ativos", label: "Ingredientes & Biotecnologia" },
                { id: "envio", label: "Garantia & Envio" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as typeof activeTab)}
                  className={`pb-4 text-xs sm:text-sm font-semibold uppercase tracking-wider cursor-pointer transition-all border-b-2 whitespace-nowrap ${
                    activeTab === tab.id
                      ? "border-[#b4536a] text-[#b4536a]"
                      : "border-transparent text-stone-500 hover:text-stone-900"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Contents */}
            <div className="pt-8">
              {activeTab === "descricao" && (
                <div className="space-y-6 max-w-4xl text-stone-700">
                  <p className="text-sm sm:text-base leading-relaxed">
                    {product.description}
                  </p>

                  <div>
                    <h3 className="font-serif text-lg font-semibold text-stone-900 mb-3">
                      Principais Benefícios Comprovados:
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {product.benefits.map((b, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm">
                          <Check className="w-4 h-4 text-[#b4536a] shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === "modoDeUso" && (
                <div className="space-y-4 max-w-4xl text-stone-700">
                  <h3 className="font-serif text-lg font-semibold text-stone-900">
                    Protocolo de Aplicação Oficial Douglas Alan
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed">
                    {product.howToUse ||
                      "Aplique sobre a área limpa e seca massageando suavemente até completa absorção. Uso diurno e noturno conforme indicação de rotina."}
                  </p>
                  <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 text-xs text-amber-900 flex items-start gap-3">
                    <Clock className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                    <div>
                      <strong>Dica do Especialista:</strong> Para potencializar a absorção celular dos ativos botânicos, faça uma esfoliação suave semanal ou higienize previamente com a Purifique Água Micelar.
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "ativos" && (
                <div className="space-y-6 max-w-4xl text-stone-700">
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-stone-900 mb-3">
                      Ativos de Alta Performance:
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {product.activeIngredients.map((ing, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 p-3 rounded-lg bg-stone-50 border border-stone-200 text-xs sm:text-sm font-medium"
                        >
                          <Leaf className="w-4 h-4 text-emerald-700 shrink-0" />
                          <span>{ing}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {product.compositionInfo && (
                    <div className="pt-4 border-t border-stone-200">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
                        Composição Completa (INCI):
                      </h4>
                      <p className="text-xs font-mono text-stone-600 bg-stone-50 p-4 rounded-lg border border-stone-200 leading-relaxed">
                        {product.compositionInfo}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {activeTab === "envio" && (
                <div className="space-y-4 max-w-4xl text-xs sm:text-sm text-stone-700 leading-relaxed">
                  <h3 className="font-serif text-lg font-semibold text-stone-900">
                    Política de Envio, Rastreio & Garantia Biorenov
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                    <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                      <h4 className="font-bold text-stone-900 mb-1">Envio Expresso</h4>
                      <p className="text-xs text-stone-600">
                        Postagem em até 24h úteis com código de rastreamento enviado via e-mail e WhatsApp.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                      <h4 className="font-bold text-stone-900 mb-1">Frete Grátis</h4>
                      <p className="text-xs text-stone-600">
                        Garantido para compras acima de R$ 199,00 para todo o território nacional.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                      <h4 className="font-bold text-stone-900 mb-1">Garantia de 15 Dias</h4>
                      <p className="text-xs text-stone-600">
                        Se não ficar 100% satisfeito, garantimos troca ou devolução sem burocracias.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>
        </section>

        {/* Related Products Carousel ("Você Também Pode Gostar") */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-stone-200">
            <h2 className="font-serif text-2xl sm:text-3xl text-stone-900 uppercase tracking-wider font-normal">
              Você Também Pode Gostar
            </h2>
            <Link
              href="/#produtos"
              className="text-xs uppercase tracking-wider font-semibold text-[#b4536a] hover:text-[#9c4357] transition-colors"
            >
              Ver Toda a Loja
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>

        <div className="mt-16">
          <LowerTrustBar />
        </div>
      </main>

      <Footer />

      {/* Global Modals */}
      <CartDrawer />
      <CheckoutModal />
      <FloatingWhatsApp />
    </>
  );
}
