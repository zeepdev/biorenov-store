export interface Product {
  id: string;
  name: string;
  subtitle: string;
  badge?: string;
  description: string;
  indication: string;
  activeIngredients: string[];
  benefits: string[];
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  tag: string;
  category: "facial" | "capilar" | "terapeutico" | "solar" | "perfumaria" | "kits";
  image: string;
  volume: string;
  whatsappMessage: string;
  anvisa?: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "biolumini-uniformizador",
    name: "Biorenov Clareador e Rejuvenescedor Biolumini",
    subtitle: "Creme Uniformizador com Probióticos Ativos & Clareamento Seguro",
    badge: "Hero Dermocosmético",
    description:
      "Tratamento de alta precisão biotecnológica formulado para uniformizar a tonalidade da pele, atuando diretamente em manchas de melasma e hiperpigmentação sem provocar o temido efeito rebote.",
    indication:
      "Tratamento suave e eficaz de melasma, manchas solares, marcas pós-inflamatórias e fortalecimento contínuo da barreira cutânea facial e corporal.",
    activeIngredients: [
      "Lisado Probiótico Ativo",
      "Fitocomplexo Clareador Botânico",
      "Niacinamida Farmacêutica",
      "Vitamina E Antioxidante",
    ],
    benefits: [
      "Clareamento gradativo e seguro sem descamação agressiva",
      "Equilibra o microbioma e previne inflamações",
      "Zero efeito rebote com hidratação celular profunda",
      "Dermatologicamente testado e seguro para uso contínuo",
    ],
    price: 189.9,
    originalPrice: 229.0,
    rating: 4.9,
    reviewsCount: 168,
    tag: "Ação Sem Efeito Rebote",
    category: "facial",
    image: "/produtos/pdf_p5_img3.jpeg",
    volume: "50 g",
    whatsappMessage:
      "Olá! Gostaria de saber mais sobre o Biolumini Probiótico para clareamento de melasma e como adquirir.",
  },
  {
    id: "fator-crescimento-vegano",
    name: "Biorenov Fator Crescimento Sobrancelhas e Calvície",
    subtitle: "Tônico Biotecnológico para Cabelos, Barba, Sobrancelhas e Fios",
    badge: "Hero Capilar & Folicular",
    description:
      "Sérum capilar concentrado de alta absorção desenvolvido para estimular o crescimento ativo de novos fios em áreas como couro cabeludo, falhas na barba, sobrancelhas e cílios.",
    indication:
      "Aumento de densidade, ancoragem e aceleração do crescimento ativo para cabelos ralos, combate a falhas e regeneração folicular com bioativos vegetais.",
    activeIngredients: [
      "Peptídeos Vegetais Bioidênticos",
      "Extrato de Brotos Botânicos",
      "Probióticos para Couro Cabeludo",
      "Biotina Vegetal",
    ],
    benefits: [
      "Estimula novos fios e reduz a queda folicular acentuada",
      "Eficaz para cabelo, barba, sobrancelhas e cílios",
      "Não deixa raiz oleosa e não resseca o comprimento",
      "Fórmula 100% limpa, sem minoxidil sintético e sem formol",
    ],
    price: 169.0,
    originalPrice: 199.0,
    rating: 4.9,
    reviewsCount: 142,
    tag: "Fios + Barba + Sobrancelhas",
    category: "capilar",
    image: "/produtos/pdf_p5_img2.jpeg",
    volume: "60 ml",
    whatsappMessage:
      "Olá! Quero saber como usar o Fator de Crescimento Vegano para recuperação e fortalecimento dos meus fios.",
  },
  {
    id: "dorless-terapeutico",
    name: "Biorenov Bío Dorless Relaxante Muscular Antiestresse",
    subtitle: "Frasco Ergonômico 240g • Tecnologia Purcell Win • Arnica & Copaíba",
    badge: "Linha Terapêutica",
    anvisa: "25351.022804/201-94",
    description:
      "Creme corporal inovador desenvolvido com a exclusiva Tecnologia Purcell Win para rápida absorção e alívio imediato sem resíduos. Une óleos da Amazônia, Copaíba pura, Arnica Montana e aromaterapia inteligente com fragrância exclusiva de Verbena.",
    indication:
      "Tensão muscular, dores articulares (artrite/artrose), estresse postural (costas/nuca), alívio pós-treino e melhora da circulação local.",
    activeIngredients: [
      "Arnica Montana Concentrada",
      "Óleo Puro de Copaíba da Amazônia",
      "Tecnologia Purcell Win",
      "Fragrância Calmante de Verbena",
      "Castanha da Índia & Mentol",
    ],
    benefits: [
      "Tecnologia Purcell Win: absorção ultrarrápida sem oleosidade",
      "Aromaterapia Inteligente de Verbena com ação calmante neural",
      "Design ergonômico patenteado com encaixe anatômico nas mãos",
      "Embalagem generosa de 240g de alto rendimento",
    ],
    price: 89.9,
    originalPrice: 109.0,
    rating: 5.0,
    reviewsCount: 194,
    tag: "240g • Tecnologia Purcell Win",
    category: "terapeutico",
    image: "/produtos/dorless_render_1.png",
    volume: "240 g",
    whatsappMessage:
      "Olá! Gostaria de pedir o Dorless Relaxante Muscular 240g com Arnica, Copaíba e Verbena.",
  },
  {
    id: "serum-24k-gold-foil",
    name: "Biorenov Sérum 24K Gold Foil Hialurônico Vita C",
    subtitle: "Sérum Facial de Luxo com Ouro 24K, Ácido Hialurônico & Resveratrol",
    badge: "Alta Cosmetologia",
    description:
      "Sérum facial de luxo enriquecido com partículas de ouro 24K, Ácido Hialurônico puro, Vitamina C e Resveratrol. Desenvolvido para uma hidratação celular profunda, combate aos radicais livres e viço rejuvenescedor imediato.",
    indication:
      "Luminosidade instantânea, efeito antioxidante potente, preenchimento de linhas finas e revitalização celular da pele cansada.",
    activeIngredients: [
      "Ouro 24K Biocompatível",
      "Ácido Hialurônico Fracionado",
      "Vitamina C Ativa",
      "Resveratrol Puro",
    ],
    benefits: [
      "Brilho dourado natural e viço radiante desde o primeiro uso",
      "Estímulo intenso da síntese de colágeno natural",
      "Proteção antioxidante profunda contra envelhecimento prematuro",
      "Textura leve com toque acetinado",
    ],
    price: 198.0,
    originalPrice: 249.0,
    rating: 5.0,
    reviewsCount: 84,
    tag: "Ouro 24K + Resveratrol",
    category: "facial",
    image: "/produtos/pdf_p5_img1.jpeg",
    volume: "30 ml",
    whatsappMessage:
      "Olá! Gostaria de saber mais sobre o Sérum 24K Gold Foil da Biorenov.",
  },
  {
    id: "creme-facial-btox-lifting",
    name: "Biorenov Creme Facial Btox Lifting",
    subtitle: "Efeito Lifting Tensor com Ácido Hialurônico, Vita C & Resveratrol",
    badge: "Efeito Lifting",
    description:
      "Creme facial de sustentação celular desenvolvido com bioativos tensores para combater a flacidez facial, remodelar o contorno do rosto e devolver elasticidade e firmeza à derme.",
    indication:
      "Flacidez facial, perda de contorno, rugas dinâmicas e estáticas, promovendo sensação imediata de pele firme e tonificada.",
    activeIngredients: [
      "Complexo Peptídico Tensor",
      "Ácido Hialurônico de Alto Impacto",
      "Vitamina C",
      "Resveratrol",
    ],
    benefits: [
      "Efeito lifting tensor perceptível com suporte estrutural",
      "Estimula elastina e reduz o aspecto de cansaço facial",
      "Hidratação contínua sem pesar",
      "Ideal para protocolo diurno e noturno",
    ],
    price: 179.0,
    originalPrice: 219.0,
    rating: 4.9,
    reviewsCount: 112,
    tag: "Lifting & Firmeza",
    category: "facial",
    image: "/produtos/btox_photo_1.png",
    volume: "50 g",
    whatsappMessage:
      "Olá! Gostaria de adquirir o Creme Facial Btox Lifting da Biorenov.",
  },
  {
    id: "purifique-agua-micelar",
    name: "Biorenov Purifique Água Micelar",
    subtitle: "Tensoativos Suaves de Maçã e Milho • pH Fisiológico Sem Sulfatos",
    badge: "Purificação Diária",
    description:
      "Ideal para o cuidado diário de todos os tipos de pele. Formulação com pH fisiológico, 0% parabenos e tensoativos suaves e inovadores derivados de aminoácidos da maçã e do milho.",
    indication:
      "Higienização diária suave, remoção de maquiagem, equilíbrio da flora cutânea e controle calmante sem repuxar.",
    activeIngredients: [
      "Aminoácidos da Maçã e do Milho",
      "Biofermento Probiótico",
      "Pantenol Calmante",
      "Água Termal Botânica",
    ],
    benefits: [
      "100% livre de sulfatos agressivos e parabenos",
      "Respeita o pH fisiológico e a barreira da microbiota",
      "Remove impurezas e maquiagem com extrema delicadeza",
      "Ação refrescante e calmante imediata",
    ],
    price: 79.9,
    originalPrice: 95.0,
    rating: 4.8,
    reviewsCount: 88,
    tag: "Zero Sulfatos • Maçã & Milho",
    category: "facial",
    image: "/produtos/pdf_p7_img3.jpeg",
    volume: "200 ml",
    whatsappMessage:
      "Olá! Gostaria de encomendar a Biorenov Purifique Água Micelar.",
  },
  {
    id: "perfume-capilar-corporal-raspberry",
    name: "Biorenov Perfume Capilar e Corporal Bío Raspberry",
    subtitle: "Framboesa Inglesa & Avelã • Aura de Elegância para Fios e Corpo",
    badge: "Perfumaria Botânica",
    description:
      "Combina praticidade e sofisticação em uma fragrância versátil e marcante para o dia a dia. Pode ser aplicado tanto nos cabelos quanto no corpo, criando uma aura de elegância e frescor sem ressecar os fios e deixando a pele suavemente perfumada por muito mais tempo.",
    indication:
      "Perfumação sofisticada de cabelos e corpo com proteção contra odores externos e sem álcool agressivo ressecante.",
    activeIngredients: [
      "Extrato de Framboesa Inglesa",
      "Toque Reconfortante de Avelã",
      "Silicones Botânicos Voláteis",
      "Filtro Protetor de Brilho",
    ],
    benefits: [
      "Não resseca os fios capilares nem desbota colorações",
      "Fixação duradoura com fragrância gourmand envolvente",
      "Frasco compacto e elegante de 50ml para levar na bolsa",
      "Experiência sensorial marcante e exclusiva",
    ],
    price: 119.0,
    originalPrice: 145.0,
    rating: 5.0,
    reviewsCount: 126,
    tag: "Cabelo & Corpo • Framboesa Inglesa",
    category: "perfumaria",
    image: "/produtos/perfume_photo_2.png",
    volume: "50 ml",
    whatsappMessage:
      "Olá! Gostaria de pedir o Perfume Capilar e Corporal Bío Raspberry Framboesa Inglesa.",
  },
  {
    id: "bio-sun-care-protetor",
    name: "Biorenov Dorless SunCare FPS 50+",
    subtitle: "Hidratação Refrescante & Proteção Solar com Toque Aveludado",
    badge: "Linha Solar",
    description:
      "Hidratação refrescante e protetora para a pele antes e durante a exposição solar. Textura fluida e de rápida absorção que promove hidratação equilibrada sem pesar, mantendo a pele macia, protegida e com toque suave ao longo do dia.",
    indication:
      "Proteção solar de alta eficácia UVA/UVB com barreira contra o fotoenvelhecimento e luz azul, respeitando a flora biológica da pele.",
    activeIngredients: [
      "Filtros Fotoestáveis de Amplo Espectro",
      "Complexo Hidratante Fluido",
      "Antioxidantes Botânicos",
      "Toque Aveludado Antibrilho",
    ],
    benefits: [
      "Alta proteção solar sem resíduo esbranquiçado",
      "Toque aveludado e absorção em segundos",
      "Não obstrui os poros e não causa cravos",
      "Fórmula amiga do microbioma cutâneo",
    ],
    price: 119.0,
    originalPrice: 139.0,
    rating: 4.9,
    reviewsCount: 79,
    tag: "Toque Aveludado • Não Pesa",
    category: "solar",
    image: "/produtos/pdf_p6_img1.jpeg",
    volume: "60 g",
    whatsappMessage:
      "Olá! Gostaria de garantir o protetor facial Biorenov Dorless SunCare.",
  },
  {
    id: "kit-ritual-botanico",
    name: "Kit Protocolo Completo Biorenov (3 Passos)",
    subtitle: "Purifique Água Micelar + Biolumini Probiótico + Dorless SunCare",
    badge: "Protocolo Recomendado",
    description:
      "O protocolo diário perfeito desenvolvido pelo cosmetólogo Douglas Alan: 1. Purificar com aminoácidos da maçã e milho, 2. Tratar e clarear melasma com Biolumini, 3. Proteger com Dorless SunCare.",
    indication:
      "Rotina completa de regeneração, clareamento seguro e blindagem solar diária com o melhor custo-benefício.",
    activeIngredients: [
      "Tratamento Integrado de 3 Fórmulas Oficiais",
      "Economia real no combo completo",
      "Acompanha guia exclusivo de aplicação do cosmetólogo",
    ],
    benefits: [
      "Sinergia de ativos para potencializar o clareamento do melasma",
      "Frete Grátis garantido para todo o Brasil",
      "5% de desconto extra no pagamento via Pix",
      "Resultados potencializados pela ordem correta de aplicação",
    ],
    price: 349.0,
    originalPrice: 388.8,
    rating: 5.0,
    reviewsCount: 215,
    tag: "Frete Grátis • Economia de R$ 78+",
    category: "kits",
    image: "/produtos/pdf_p8_img2.png",
    volume: "3 Produtos Oficiais",
    whatsappMessage:
      "Olá! Quero pedir o Kit Protocolo Completo Biorenov (3 Passos) com frete grátis e desconto no Pix.",
  },
];
