"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  X,
  ChevronLeft,
  ChevronRight,
  ShoppingBag,
  ExternalLink,
  Sparkles,
  Check,
} from "lucide-react";

export interface VideoStory {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  videoSrc: string;
  posterSrc: string;
  productId: string;
  productName: string;
  productPrice: number;
  productImage: string;
}

const STORIES: VideoStory[] = [
  {
    id: "dorless-alivio",
    title: "Alívio Imediato para Dores e Tensão",
    subtitle: "Aplicação real do creme relaxante com Arnica & Copaíba",
    tag: "Relaxante Muscular",
    videoSrc: "/videos/dorless_clip1.mp4",
    posterSrc: "/videos/dorless_clip1_poster.jpg",
    productId: "dorless-terapeutico",
    productName: "Biorenov Bío Dorless Relaxante 240g",
    productPrice: 89.9,
    productImage: "/produtos/aky06721.jpg",
  },
  {
    id: "perfume-cheiro-limpa",
    title: "Cheiro de Mulher Limpa que Fixa",
    subtitle: "Framboesa inglesa & avelã para cabelos e corpo",
    tag: "Perfumaria Botânica",
    videoSrc: "/videos/perfume_clip1.mp4",
    posterSrc: "/videos/perfume_clip1_poster.jpg",
    productId: "perfume-capilar-corporal-raspberry",
    productName: "Perfume Capilar Bío Raspberry 50ml",
    productPrice: 119.0,
    productImage: "/produtos/aky06774.jpg",
  },
  {
    id: "dorless-rotina",
    title: "Minha Rotina Pós-Treino & Postura",
    subtitle: "Tecnologia Purcell Win sem oleosidade na pele",
    tag: "Absorção Rápida",
    videoSrc: "/videos/dorless_clip2.mp4",
    posterSrc: "/videos/dorless_clip2_poster.jpg",
    productId: "dorless-terapeutico",
    productName: "Biorenov Bío Dorless Relaxante 240g",
    productPrice: 89.9,
    productImage: "/produtos/aky06721.jpg",
  },
  {
    id: "perfume-sem-alcool",
    title: "Perfume Capilar Sem Álcool que Resseca",
    subtitle: "Fixação prolongada e brilho cuticular sem pesar",
    tag: "Ação Anti-Odor",
    videoSrc: "/videos/perfume_clip2.mp4",
    posterSrc: "/videos/perfume_clip2_poster.jpg",
    productId: "perfume-capilar-corporal-raspberry",
    productName: "Perfume Capilar Bío Raspberry 50ml",
    productPrice: 119.0,
    productImage: "/produtos/aky06774.jpg",
  },
  {
    id: "dorless-completo",
    title: "Review Completo: Alívio para Toda a Família",
    subtitle: "Como Douglas Alan formulou o alívio muscular ideal",
    tag: "Review Completo",
    videoSrc: "/videos/dorless_review.mp4",
    posterSrc: "/videos/dorless_poster.jpg",
    productId: "dorless-terapeutico",
    productName: "Biorenov Bío Dorless Relaxante 240g",
    productPrice: 89.9,
    productImage: "/produtos/aky06721.jpg",
  },
];

export function VideoCommunitySection() {
  const { addItem, setIsCheckoutOpen } = useCart();
  const [activeVideo, setActiveVideo] = useState<VideoStory | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [addedItem, setAddedItem] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const modalVideoRef = useRef<HTMLVideoElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const offset = direction === "left" ? -340 : 340;
      scrollContainerRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  const handleOpenVideo = (story: VideoStory) => {
    setActiveVideo(story);
    setIsPlaying(true);
    setIsMuted(false);
  };

  const handleCloseVideo = () => {
    setActiveVideo(null);
  };

  const togglePlay = () => {
    if (modalVideoRef.current) {
      if (isPlaying) {
        modalVideoRef.current.pause();
        setIsPlaying(false);
      } else {
        modalVideoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (modalVideoRef.current) {
      modalVideoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleBuyProduct = (story: VideoStory) => {
    addItem({
      id: story.productId,
      name: story.productName,
      subtitle: story.tag,
      description: "",
      indication: "",
      activeIngredients: [],
      benefits: [],
      price: story.productPrice,
      rating: 5.0,
      reviewsCount: 150,
      tag: story.tag,
      category: "terapeutico",
      image: story.productImage,
      images: [story.productImage],
      volume: "Original",
      whatsappMessage: `Olá! Vi o vídeo de review do ${story.productName} e gostaria de comprar.`,
    });
    setAddedItem(true);
    setTimeout(() => {
      setAddedItem(false);
      setActiveVideo(null);
      setIsCheckoutOpen(true);
    }, 600);
  };

  return (
    <section className="py-16 sm:py-24 bg-[#faf7f5] border-y border-stone-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Creamy style) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#b4536a] animate-pulse" />
              <span className="text-xs uppercase tracking-widest text-[#b4536a] font-bold">
                Vídeos & Reviews Reais
              </span>
            </div>
            <h2 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-stone-900 leading-tight tracking-tight">
              Quem Usa, <span className="text-[#b4536a]">Ama.</span>
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm mt-2 max-w-lg">
              Veja criadores, clientes e especialistas testando as fórmulas de Douglas Alan na pele e nos fios.
            </p>
          </div>

          {/* Carousel Arrow Controls */}
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full bg-white hover:bg-stone-50 border border-stone-300 text-stone-700 flex items-center justify-center transition-all cursor-pointer shadow-2xs hover:scale-105"
              aria-label="Vídeo anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full bg-white hover:bg-stone-50 border border-stone-300 text-stone-700 flex items-center justify-center transition-all cursor-pointer shadow-2xs hover:scale-105"
              aria-label="Próximo vídeo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Video Reel Cards Carousel */}
        <div
          ref={scrollContainerRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 pt-2 snap-x snap-mandatory scrollbar-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {STORIES.map((story) => (
            <div
              key={story.id}
              onClick={() => handleOpenVideo(story)}
              className="group relative shrink-0 w-[240px] sm:w-[280px] aspect-9/16 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer snap-start border border-stone-200/80 bg-stone-900"
            >
              {/* Poster Image */}
              <img
                src={story.posterSrc}
                alt={story.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 pointer-events-none" />

              {/* Top Tag & Play Badge */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <span className="bg-white/90 backdrop-blur-xs text-stone-900 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-2xs">
                  {story.tag}
                </span>

                <div className="w-9 h-9 rounded-full bg-white/30 backdrop-blur-md border border-white/40 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-[#b4536a] transition-all">
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                </div>
              </div>

              {/* Bottom Shoppable Card on Video */}
              <div className="absolute bottom-4 left-4 right-4 pointer-events-none">
                <h3 className="text-white font-sans text-xs sm:text-sm font-bold leading-snug line-clamp-2 drop-shadow-sm mb-2">
                  {story.title}
                </h3>

                {/* Mini Shoppable Product Pill */}
                <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/95 backdrop-blur-md shadow-lg border border-white/50">
                  <img
                    src={story.productImage}
                    alt={story.productName}
                    className="w-9 h-9 object-contain rounded-md bg-stone-50 p-0.5 shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] font-bold text-stone-900 truncate">
                      {story.productName}
                    </p>
                    <p className="text-[11px] font-bold text-[#b4536a]">
                      R$ {story.productPrice.toFixed(2).replace(".", ",")}
                    </p>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-[#b4536a] px-2 py-1 rounded-md shrink-0">
                    Ver
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Full-Screen TikTok/Reels Shoppable Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-2 sm:p-4">
          
          {/* Modal Container */}
          <div className="relative w-full max-w-[390px] h-[85vh] sm:h-[88vh] rounded-3xl overflow-hidden bg-black shadow-2xl flex flex-col justify-between border border-white/10">
            
            {/* Native Video Element */}
            <video
              ref={modalVideoRef}
              src={activeVideo.videoSrc}
              poster={activeVideo.posterSrc}
              playsInline
              autoPlay
              loop
              muted={isMuted}
              onClick={togglePlay}
              className="absolute inset-0 w-full h-full object-cover cursor-pointer"
            />

            {/* Top Controls Overlay */}
            <div className="relative z-20 p-4 flex items-center justify-between bg-gradient-to-b from-black/70 to-transparent">
              <span className="text-white/90 text-xs font-semibold px-3 py-1 rounded-full bg-white/20 backdrop-blur-md">
                {activeVideo.tag}
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={toggleMute}
                  className="p-2 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md transition-colors cursor-pointer"
                  aria-label="Ativar/desativar som"
                >
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>

                <button
                  onClick={handleCloseVideo}
                  className="p-2 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md transition-colors cursor-pointer"
                  aria-label="Fechar vídeo"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Play/Pause Central Tap Indicator */}
            {!isPlaying && (
              <div
                onClick={togglePlay}
                className="absolute inset-0 z-10 flex items-center justify-center cursor-pointer bg-black/25"
              >
                <div className="w-16 h-16 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center shadow-lg">
                  <Play className="w-8 h-8 fill-current ml-1" />
                </div>
              </div>
            )}

            {/* Bottom Shoppable Card & Direct Purchase */}
            <div className="relative z-20 p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent space-y-3">
              <div>
                <h4 className="text-white font-bold text-sm leading-snug drop-shadow-sm">
                  {activeVideo.title}
                </h4>
                <p className="text-white/80 text-xs mt-0.5 line-clamp-1">
                  {activeVideo.subtitle}
                </p>
              </div>

              {/* Shoppable Product Box */}
              <div className="p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-white/80 flex items-center gap-3 shadow-xl">
                <img
                  src={activeVideo.productImage}
                  alt={activeVideo.productName}
                  className="w-12 h-12 object-contain rounded-lg bg-stone-50 p-1 shrink-0"
                />

                <div className="flex-1 min-w-0">
                  <h5 className="text-xs font-bold text-stone-900 truncate">
                    {activeVideo.productName}
                  </h5>
                  <div className="flex items-baseline gap-2 mt-0.5">
                    <span className="text-xs font-bold text-[#b4536a]">
                      R$ {activeVideo.productPrice.toFixed(2).replace(".", ",")}
                    </span>
                    <span className="text-[10px] text-emerald-700 font-semibold">
                      5% OFF no Pix
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-1 shrink-0">
                  <button
                    onClick={() => handleBuyProduct(activeVideo)}
                    className="px-3.5 py-2 rounded-lg bg-[#b4536a] hover:bg-[#9c4357] text-white text-[11px] font-bold uppercase tracking-wider shadow-sm transition-all flex items-center justify-center gap-1 cursor-pointer"
                  >
                    {addedItem ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Adicionado!</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>Comprar</span>
                      </>
                    )}
                  </button>

                  <Link
                    href={`/produto/${activeVideo.productId}`}
                    onClick={handleCloseVideo}
                    className="text-[10px] text-center font-semibold text-stone-600 hover:text-[#b4536a] transition-colors py-0.5"
                  >
                    Ver Detalhes
                  </Link>
                </div>
              </div>
            </div>

          </div>

        </div>
      )}

    </section>
  );
}
