export interface Product {
  id: string;
  name: string;
  subtitle: string;
  badge?: string;
  description: string;
  indication: string;
  activeIngredients: string[];
  benefits: string[];
  howToUse?: string;
  compositionInfo?: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  tag: string;
  category: "facial" | "capilar" | "terapeutico" | "solar" | "perfumaria" | "kits";
  image: string;
  images: string[];
  volume: string;
  whatsappMessage: string;
  anvisa?: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "dorless-terapeutico",
    name: "Biorenov Bío Dorless Relaxante Muscular Antiestresse",
    subtitle: "Frasco Ergonômico 240g • Tecnologia Purcell Win • Arnica & Copaíba",
    badge: "Mais Vendido Terapêutico",
    anvisa: "25351.022804/201-94",
    description:
      "Creme corporal inovador desenvolvido com a exclusiva Tecnologia Purcell Win para rápida absorção e alívio imediato sem resíduos gordurosos. Une os mais puros óleos da Amazônia, Copaíba pura, Arnica Montana e aromaterapia inteligente com fragrância exclusiva de Verbena.",
    indication:
      "Tensão muscular, dores articulares (artrite/artrose), estresse postural (costas/nuca), alívio pré e pós-treino e massagem terapêutica para toda a família.",
    activeIngredients: [
      "Arnica Montana Concentrada",
      "Óleo Puro de Copaíba da Amazônia",
      "Tecnologia Purcell Win",
      "Fragrância Calmante de Verbena",
      "Castanha da Índia & Mentol Suave",
    ],
    benefits: [
      "Tecnologia Purcell Win: absorção ultrarrápida sem manchar roupas",
      "Aromaterapia Inteligente de Verbena com ação calmante neural",
      "Design ergonômico patenteado com encaixe anatômico perfeito nas mãos",
      "Embalagem generosa de 240g de altíssimo rendimento",
      "Alívio perceptível logo nos primeiros minutos de massagem",
    ],
    howToUse:
      "Aplique uma quantidade generosa sobre a área desejada (ombros, nuca, lombar, pernas ou articulações). Massageie suavemente com movimentos circulares até a absorção total. Use diariamente ou após atividades físicas intensas.",
    compositionInfo:
      "Aqua, Arnica Montana Flower Extract, Copaifera Officinalis Resin, Menthol, Purcell Win Bio-Lipids, Aesculus Hippocastanum Extract, Verbena Officinalis Fragrance, Tocopherol.",
    price: 89.9,
    originalPrice: 109.0,
    rating: 5.0,
    reviewsCount: 194,
    tag: "240g • Purcell Win",
    category: "terapeutico",
    image: "/produtos/aky06721.jpg",
    images: [
      "/produtos/aky06721.jpg",
      "/produtos/aky06825.jpg",
      "/produtos/aky06687.jpg",
      "/produtos/aky06718.jpg",
      "/produtos/aky06715.jpg",
      "/produtos/aky06698.jpg",
      "/produtos/aky06729.jpg",
      "/produtos/aky06828.jpg",
    ],
    volume: "240 g",
    whatsappMessage:
      "Olá! Gostaria de pedir o Dorless Relaxante Muscular 240g com Arnica, Copaíba e Verbena.",
  },
  {
    id: "creme-facial-btox-lifting",
    name: "Biorenov Creme Facial Btox Lifting Age Freeze",
    subtitle: "Efeito Lifting Tensor Imediato • Ácido Hialurônico, Vitamina E, Biotina & Niacinamida",
    badge: "Hero Antissinais",
    description:
      "Creme facial de sustentação celular desenvolvido com bioativos tensores Age Freeze para combater a flacidez facial, remodelar o contorno do rosto e devolver elasticidade e firmeza à derme desde a primeira aplicação.",
    indication:
      "Flacidez facial, perda de contorno, linhas de expressão dinâmicas e estáticas, promovendo firmeza instantânea e rejuvenescimento gradual.",
    activeIngredients: [
      "Complexo Age Freeze Tensor",
      "Ácido Hialurônico Fracionado",
      "Vitamina E Antioxidante",
      "Biotina Folicular Cutânea",
      "Niacinamida Farmacêutica",
    ],
    benefits: [
      "Efeito lifting imediato com suporte estrutural dérmico",
      "Estimula colágeno e elastina, reduzindo aspecto cansado",
      "Hidratação profunda sem efeito pesado ou oleoso",
      "Ideal para protocolo diurno sob maquiagem e noturno restaurador",
    ],
    howToUse:
      "Com a pele limpa e seca, aplique uma pequena quantidade no rosto, colo e pescoço. Espalhe com movimentos ascendentes (de baixo para cima) até completa absorção. Pode ser usado de manhã e à noite.",
    compositionInfo:
      "Aqua, Sodium Hyaluronate, Niacinamide, Tocopheryl Acetate, Biotin, Age Freeze Bio-Peptides, Vegetable Squalane, Phenoxyethanol.",
    price: 179.0,
    originalPrice: 219.0,
    rating: 4.9,
    reviewsCount: 112,
    tag: "Lifting Imediato • Age Freeze",
    category: "facial",
    image: "/produtos/aky06763.jpg",
    images: [
      "/produtos/aky06763.jpg",
      "/produtos/aky06840.jpg",
      "/produtos/aky06766.jpg",
      "/produtos/aky06767.jpg",
      "/produtos/aky06791.jpg",
      "/produtos/aky06843.jpg",
    ],
    volume: "50 g",
    whatsappMessage:
      "Olá! Gostaria de adquirir o Creme Facial Btox Lifting Age Freeze 50g da Biorenov.",
  },
  {
    id: "perfume-capilar-corporal-raspberry",
    name: "Biorenov Perfume Capilar e Corporal Bío Raspberry (Cremma Bacio)",
    subtitle: "Framboesa Inglesa & Avelã • Aura de Elegância para Fios e Corpo",
    badge: "Perfumaria Botânica",
    description:
      "Combina praticidade e sofisticação em uma fragrância versátil e marcante para o dia a dia. Pode ser aplicado tanto nos cabelos quanto no corpo, criando uma aura de elegância e frescor sem ressecar os fios e deixando a pele suavemente perfumada por muito mais tempo.",
    indication:
      "Perfumação sofisticada de cabelos e corpo com proteção contra odores externos (fumaça, poluição, academia) sem álcool agressivo ressecante.",
    activeIngredients: [
      "Extrato de Framboesa Inglesa",
      "Notas Gourmand de Avelã e Baunilha",
      "Silicones Botânicos Voláteis",
      "Filtro Protetor de Brilho Cuticular",
    ],
    benefits: [
      "Não resseca os fios capilares nem desbota químicas e colorações",
      "Fixação duradoura com fragrância gourmand envolvente",
      "Frasco compacto e elegante de 50ml para levar na bolsa",
      "Ação anti-odor inteligente e toque acetinado",
    ],
    howToUse:
      "Borrife a uma distância de 15 a 20 cm dos cabelos secos ou úmidos, do comprimento às pontas. Aplique também nos pontos de pulsação do corpo (pulsos, nuca e colo) para intensificar a projeção.",
    compositionInfo:
      "Alcohol Denat Cosmetic Grade, Fragrance (Parfum Raspberry & Hazelnut), Cyclopentasiloxane, Botanical Oils, Tocopherol.",
    price: 119.0,
    originalPrice: 145.0,
    rating: 5.0,
    reviewsCount: 126,
    tag: "Cabelo & Corpo • Framboesa Inglesa",
    category: "perfumaria",
    image: "/produtos/aky06774.jpg",
    images: [
      "/produtos/aky06774.jpg",
      "/produtos/aky06855.jpg",
      "/produtos/aky06856.jpg",
      "/produtos/aky06742.jpg",
      "/produtos/aky06743.jpg",
      "/produtos/aky06852.jpg",
    ],
    volume: "50 ml",
    whatsappMessage:
      "Olá! Gostaria de pedir o Perfume Capilar e Corporal Bío Raspberry Framboesa Inglesa.",
  },
  {
    id: "bio-sun-care-protetor",
    name: "Biorenov Dorless SunCare FPS 50+",
    subtitle: "Clean & Care • Hidratação Refrescante & Proteção UVA/UVB com Toque Aveludado",
    badge: "Linha Solar",
    description:
      "Hidratação refrescante e protetora para a pele antes e durante a exposição solar diária. Textura fluida e de rápida absorção que promove hidratação equilibrada sem pesar, mantendo a pele macia, protegida contra queimaduras e envelhecimento precoce com toque aveludado.",
    indication:
      "Proteção solar de alta eficácia UVA/UVB e luz visível, com barreira contra o fotoenvelhecimento, respeitando a flora biológica da derme.",
    activeIngredients: [
      "Filtros Fotoestáveis de Amplo Espectro",
      "Complexo Hidratante Fluido Clean & Care",
      "Antioxidantes Botânicos",
      "Partículas Matificantes Antibrilho",
    ],
    benefits: [
      "Alta proteção solar FPS 50+ sem resíduo esbranquiçado (white cast)",
      "Toque aveludado e absorção em segundos",
      "Não obstrui os poros (não comedogênico) e não causa espinhas",
      "Fórmula amiga do microbioma cutâneo e resistente ao suor",
    ],
    howToUse:
      "Aplique abundantemente sobre o rosto, pescoço e colo 30 minutos antes da exposição ao sol. Reaplique a cada 2 horas ou após sudorese intensa, nadar ou secar-se com toalha.",
    compositionInfo:
      "Aqua, Octocrylene, Ethylhexyl Methoxycinnamate, Zinc Oxide, Titanium Dioxide, Dimethicone, Glycerin, Silica, Phenoxyethanol.",
    price: 119.0,
    originalPrice: 139.0,
    rating: 4.9,
    reviewsCount: 79,
    tag: "Toque Aveludado • Não Pesa",
    category: "solar",
    image: "/produtos/aky06735.jpg",
    images: [
      "/produtos/aky06735.jpg",
      "/produtos/aky06848.jpg",
      "/produtos/aky06849.jpg",
      "/produtos/aky06851.jpg",
    ],
    volume: "60 g",
    whatsappMessage:
      "Olá! Gostaria de garantir o protetor facial Biorenov Dorless SunCare FPS 50+.",
  },
  {
    id: "mascara-argila-verde-detox",
    name: "Biorenov Máscara de Argila Verde Detox 2 em 1",
    subtitle: "Esfoliante & Purificante • Couro Cabeludo & Rosto • Óxido de Zinco & Mentol",
    badge: "Lançamento Exclusivo",
    description:
      "Tratamento desintoxicante duplo de alta performance: purifica profundamente o couro cabeludo combatendo oleosidade excessiva e caspa, e restaura o viço facial limpando poros obstruídos e promovendo sensação calmante e refrescante.",
    indication:
      "Controle de oleosidade capilar e facial, desobstrução folicular, combate a impurezas urbanas e refrescância anti-inflamatória.",
    activeIngredients: [
      "Argila Verde Mineralizada Pura",
      "Óxido de Zinco Calmante",
      "Mentol Refrescante & Ativador da Circulação",
      "Bioativos Botânicos Adstringentes",
    ],
    benefits: [
      "Fórmula 2 em 1: cuida do couro cabeludo e da face no mesmo protocolo",
      "Desintoxica raízes capilares favorecendo o crescimento de novos fios",
      "Regula a produção sebácea sem causar ressecamento",
      "Ação refrescante imediata que alivia coceiras e irritações",
    ],
    howToUse:
      "No couro cabeludo: aplique na raiz úmida, massageie suavemente por 3 minutos e enxágue antes do xampu. No rosto: aplique camada uniforme, deixe agir por 10 a 15 minutos até secar parcialmente e enxágue com água morna.",
    compositionInfo:
      "Aqua, Kaolin (Green Clay), Zinc Oxide, Menthol, Rosmarinus Officinalis Extract, Melaleuca Alternifolia Leaf Oil, Glycerin.",
    price: 129.0,
    originalPrice: 159.0,
    rating: 4.9,
    reviewsCount: 63,
    tag: "2 em 1 • Couro & Rosto",
    category: "capilar",
    image: "/produtos/aky06748.jpg",
    images: [
      "/produtos/aky06748.jpg",
      "/produtos/aky06751.jpg",
    ],
    volume: "160 g",
    whatsappMessage:
      "Olá! Gostaria de saber mais sobre a Máscara de Argila Verde Detox 2 em 1 da Biorenov.",
  },
  {
    id: "tratamento-pernas-pes",
    name: "Biorenov Tratamento Pernas e Pés com Esfoliante",
    subtitle: "Creme Protetor Antifúngico • Fortalecedor de Cutículas • Previne Rachaduras",
    badge: "Cuidado Avançado",
    description:
      "Fórmula multifuncional para pernas cansadas e pés ressecados. Combina microesfoliação suave para renovação celular com película protetora antimicótica, fortalecendo as cutículas e prevenindo rachaduras profundas no calcanhar.",
    indication:
      "Pés ásperos, rachaduras no calcanhar, pernas cansadas e pesadas, cutículas frágeis e proteção higienizante contra fungos e bactérias.",
    activeIngredients: [
      "Microesferas Esfoliantes Naturais",
      "Agentes Protetores Antimicóticos",
      "Complexo Fortalecedor de Cutículas",
      "Óleo Essencial Tonificante para Circulação",
    ],
    benefits: [
      "Cria película protetora invisível contra perda de umidade",
      "Renova a textura da pele áspera dos pés desde o 1º uso",
      "Alivia a sensação de peso e fadiga nas pernas no fim do dia",
      "Ação antimicótica contínua recomendada por podólogos e terapeutas",
    ],
    howToUse:
      "Aplique nos pés limpos e secos massageando os calcanhares e as unhas/cutículas. Estenda a massagem subindo pelas pernas com movimentos ascendentes até completa absorção.",
    compositionInfo:
      "Aqua, Urea, Melaleuca Alternifolia Oil, Prunus Amygdalus Dulcis Oil, Salicylic Acid, Menthol, Cetearyl Alcohol.",
    price: 99.0,
    originalPrice: 129.0,
    rating: 4.9,
    reviewsCount: 81,
    tag: "Anti-Rachaduras & Pernas Leves",
    category: "terapeutico",
    image: "/produtos/aky06707.jpg",
    images: [
      "/produtos/aky06707.jpg",
      "/produtos/aky06708.jpg",
      "/produtos/aky06830.jpg",
    ],
    volume: "150 g",
    whatsappMessage:
      "Olá! Gostaria de pedir o Tratamento para Pernas e Pés da Biorenov.",
  },
  {
    id: "kit-btox-trio",
    name: "Kit Protocolo Trio Btox Lifting Age Freeze (3 x 50g)",
    subtitle: "Tratamento Contínuo de 90 Dias • Efeito Lifting Tensor & Rejuvenescimento Facial",
    badge: "Super Combo Econômico",
    description:
      "O protocolo definitivo de sustentação dérmica: leve 3 frascos do Creme Facial Btox Lifting Age Freeze com economia máxima e garanta o ciclo completo de renovação celular e firmeza facial de 90 dias com frete grátis.",
    indication:
      "Tratamento contínuo de firmeza dérmica para rosto, pescoço e colo, potencializando a síntese de colágeno a médio e longo prazo.",
    activeIngredients: [
      "3 Frascos Oficiais Btox Lifting 50g",
      "Ácido Hialurônico + Vitamina E + Biotina + Niacinamida",
      "Economia real de R$ 148,00 no combo",
    ],
    benefits: [
      "Garante a continuidade essencial do tratamento por 3 meses",
      "Economia expressiva comparado à compra individual",
      "Frete Grátis garantido para todo o Brasil",
      "5% de desconto extra no pagamento via Pix",
    ],
    howToUse:
      "Utilize diariamente pela manhã e à noite. Cada frasco de 50g rende em média 30 dias de uso contínuo.",
    compositionInfo:
      "3x Creme Facial Btox Lifting Age Freeze 50g (Composição completa idêntica ao produto individual).",
    price: 389.0,
    originalPrice: 537.0,
    rating: 5.0,
    reviewsCount: 147,
    tag: "Frete Grátis • Economia de R$ 148",
    category: "kits",
    image: "/produtos/aky06791.jpg",
    images: [
      "/produtos/aky06791.jpg",
      "/produtos/aky06790.jpg",
      "/produtos/aky06842.jpg",
      "/produtos/aky06843.jpg",
    ],
    volume: "3 Frascos de 50g",
    whatsappMessage:
      "Olá! Gostaria de garantir o Kit Trio Btox Lifting Age Freeze com frete grátis e desconto no Pix.",
  },
  {
    id: "biolumini-uniformizador",
    name: "Biorenov Clareador e Rejuvenescedor Biolumini",
    subtitle: "Creme Uniformizador com Probióticos Ativos & Clareamento Seguro",
    badge: "Hero Dermocosmético",
    description:
      "Tratamento de alta precisão biotecnológica formulado para uniformizar a tonalidade da pele, atuando diretamente em manchas de melasma, axilas, virilha e hiperpigmentação pós-inflamatória sem provocar o temido efeito rebote.",
    indication:
      "Tratamento suave e eficaz de melasma, manchas solares, marcas pós-depilação, controle de odores em axilas e fortalecimento contínuo da barreira cutânea facial e corporal.",
    activeIngredients: [
      "Lisado Probiótico Ativo",
      "Fitocomplexo Clareador Botânico",
      "Niacinamida Farmacêutica",
      "Vitamina E Antioxidante",
    ],
    benefits: [
      "Clareamento gradativo e seguro sem descamação agressiva",
      "Calmante eficaz para áreas sensibilizadas pós-depilação",
      "Zero efeito rebote com hidratação celular profunda",
      "Auxilia no equilíbrio da microbiota e controle de odores axilares",
      "Dermatologicamente testado e seguro para uso contínuo",
    ],
    howToUse:
      "Com a pele limpa, aplique nas regiões com hiperpigmentação (rosto, axilas, virilhas ou mãos) massageando suavemente até absorção. Use à noite ou pela manhã sempre associado ao protetor Dorless SunCare FPS 50+.",
    compositionInfo:
      "Aqua, Probiotic Ferment Lysate, Niacinamide, Alpha-Arbutin, Kojic Dipalmitate, Chamomilla Recutita Extract, Tocopherol.",
    price: 189.9,
    originalPrice: 229.0,
    rating: 4.9,
    reviewsCount: 168,
    tag: "Ação Sem Efeito Rebote",
    category: "facial",
    image: "/produtos/pdf_p5_img3.jpeg",
    images: [
      "/produtos/pdf_p5_img3.jpeg",
      "/produtos/aky06821.jpg",
      "/produtos/aky06701.jpg",
      "/produtos/aky06819.jpg",
    ],
    volume: "50 g",
    whatsappMessage:
      "Olá! Gostaria de saber mais sobre o Biolumini Probiótico para clareamento de melasma e como adquirir.",
  },
  {
    id: "purifique-agua-micelar",
    name: "Biorenov Purifique Água Micelar",
    subtitle: "Tensoativos Suaves de Maçã e Milho • pH Fisiológico Sem Sulfatos",
    badge: "Purificação Diária",
    description:
      "Ideal para o cuidado diário de todos os tipos de pele. Formulação com pH fisiológico, 0% parabenos e tensoativos suaves e inovadores derivados de aminoácidos da maçã e do milho.",
    indication:
      "Higienização diária suave, remoção de maquiagem à prova d'água, equilíbrio da flora cutânea e ação calmante sem repuxar.",
    activeIngredients: [
      "Aminoácidos da Maçã e do Milho",
      "Biofermento Probiótico",
      "Pantenol Calmante (Pró-Vitamina B5)",
      "Água Termal Botânica",
    ],
    benefits: [
      "100% livre de sulfatos agressivos, sabão e parabenos",
      "Respeita o pH fisiológico e a integridade da barreira cutânea",
      "Remove maquiagem e poluição com extrema delicadeza",
      "Sensação refrescante e hidratante instantânea",
    ],
    howToUse:
      "Umedeça um disco de algodão com a água micelar e passe suavemente pelo rosto, olhos e lábios. Não necessita de enxágue. Use pela manhã e à noite.",
    compositionInfo:
      "Aqua, Apple Amino Acids, Corn Glucosides, Panthenol, Probiotic Ferment, Disodium EDTA, Phenoxyethanol.",
    price: 79.9,
    originalPrice: 95.0,
    rating: 4.8,
    reviewsCount: 88,
    tag: "Zero Sulfatos • Maçã & Milho",
    category: "facial",
    image: "/produtos/pdf_p7_img3.jpeg",
    images: [
      "/produtos/pdf_p7_img3.jpeg",
      "/produtos/aky06780.jpg",
    ],
    volume: "200 ml",
    whatsappMessage:
      "Olá! Gostaria de encomendar a Biorenov Purifique Água Micelar.",
  },
  {
    id: "kit-ritual-botanico",
    name: "Kit Protocolo Completo Biorenov (3 Passos)",
    subtitle: "Purifique Água Micelar + Biolumini Probiótico + Dorless SunCare FPS 50+",
    badge: "Protocolo Recomendado",
    description:
      "O protocolo diário perfeito desenvolvido pelo cosmetólogo Douglas Alan: 1. Purificar com aminoácidos da maçã e milho, 2. Tratar e clarear melasma com Biolumini, 3. Proteger com Dorless SunCare.",
    indication:
      "Rotina completa de regeneração celular, clareamento seguro e blindagem solar diária com o melhor custo-benefício.",
    activeIngredients: [
      "Tratamento Integrado de 3 Fórmulas Oficiais",
      "Economia real de R$ 78,00 no combo completo",
      "Acompanha guia exclusivo de aplicação do cosmetólogo",
    ],
    benefits: [
      "Sinergia de bioativos para potencializar o clareamento do melasma",
      "Frete Grátis garantido para todo o Brasil",
      "5% de desconto extra no pagamento via Pix",
      "Resultados potencializados pela ordem correta de aplicação",
    ],
    howToUse:
      "Passo 1 (Manhã e Noite): Limpar o rosto com a Água Micelar Purifique. Passo 2: Aplicar o Biolumini Probiótico nas áreas de melasma e marcas. Passo 3 (Manhã): Finalizar com a proteção solar Dorless SunCare FPS 50+.",
    compositionInfo:
      "Contém 1x Purifique Água Micelar 200ml, 1x Biolumini 50g e 1x Dorless SunCare 60g.",
    price: 349.0,
    originalPrice: 388.8,
    rating: 5.0,
    reviewsCount: 215,
    tag: "Frete Grátis • Economia de R$ 78+",
    category: "kits",
    image: "/produtos/aky06791.jpg",
    images: [
      "/produtos/aky06791.jpg",
      "/produtos/aky06735.jpg",
      "/produtos/pdf_p5_img3.jpeg",
      "/produtos/pdf_p7_img3.jpeg",
    ],
    volume: "3 Produtos Oficiais",
    whatsappMessage:
      "Olá! Quero pedir o Kit Protocolo Completo Biorenov (3 Passos) com frete grátis e desconto no Pix.",
  },
  {
    id: "kit-trio-raspberry-hazelnut",
    name: "Kit Coleção Raspberry Hazelnut (Framboesa & Avelã)",
    subtitle: "Trio Completo: Cremma Bacio 30g + Body Splash 100ml + Deo Colônia Marcante",
    badge: "Lançamento Especial",
    description:
      "Uma experiência sensorial envolvente que une o frescor vibrante da framboesa à sofisticação cremosa da avelã. Desenvolvido para perfumar na medida certa, hidratar sem pesar e proporcionar sensação de frescor prolongado durante todo o dia.",
    indication:
      "Cuidado diário das mãos e perfumaria corporal sofisticada para quem valoriza fragrâncias doces, modernas, marcantes e confortáveis na pele.",
    activeIngredients: [
      "Extrato Botânico de Framboesa Silvestre",
      "Manteiga Nutritiva de Avelã Pura",
      "Bio-ativos Emolientes de Rápida Absorção",
      "Base Floral Frutada Delicada",
      "Fragrância Fina com Fixação Prolongada",
    ],
    benefits: [
      "Perfuma na medida certa: notas elegantes sem sobrecarregar o olfato",
      "Sensação de frescor prolongado ao longo do dia inteiro",
      "Fórmula leve, sedosa e de rápida absorção para o uso diário",
      "Fragrância doce, moderna, feminina e marcante",
      "Contém o trio completo: Creme para as Mãos (30g), Body Splash (100ml) e Deo Colônia",
    ],
    howToUse:
      "Cremma Bacio: Aplique uma pequena porção nas mãos secas massageando suavemente até completa absorção. Body Splash: Borrife generosamente sobre o corpo após o banho ou sempre que desejar renovar o frescor. Deo Colônia: Aplique nos pontos de pulsação (punhos, pescoço e colo) para fixação duradoura.",
    compositionInfo:
      "Fragrância exclusiva Framboesa & Avelã. Livre de parabenos pesados. 100% cruelty-free e desenvolvido com bioativos seguros.",
    price: 189.0,
    originalPrice: 229.0,
    rating: 5.0,
    reviewsCount: 87,
    tag: "Trio Completo • Framboesa & Avelã",
    category: "kits",
    image: "/produtos/kit_raspberry_hazelnut.jpg",
    images: [
      "/banners/raspberry_hazelnut_banner.jpg",
      "/produtos/kit_raspberry_hazelnut.jpg",
    ],
    volume: "Kit com 3 Produtos",
    whatsappMessage:
      "Olá! Gostaria de garantir o Kit Linha Raspberry Hazelnut (Framboesa & Avelã) com desconto de lançamento.",
  },
  {
    id: "body-splash-raspberry-hazelnut",
    name: "Body Splash Fresh & Fragrant Raspberry Hazelnut 100ml",
    subtitle: "Névoa Perfumada Corporal • Framboesa & Avelã • Frescor Prolongado",
    badge: "Mais Vendido Perfumaria",
    description:
      "Névoa corporal aromática e refrescante formulada com o equilíbrio perfeito entre o adocicado luminoso da framboesa e o conforto envolvente da avelã. Proporciona perfumação agradável, leve e revigorante.",
    indication:
      "Perfumação diária pós-banho, para reaplicar ao longo do dia e deixar a pele delicadamente perfumada.",
    activeIngredients: [
      "Extrato de Framboesa Silvestre",
      "Bio-hidratantes de toque aveludado",
      "Notas florais e frutadas elegantes",
    ],
    benefits: [
      "Fragrância doce e equilibrada, moderna e irresistível",
      "Sensação imediata de frescor e banho recém-tomado",
      "Não resseca e não agride a barreira natural da pele",
      "Frasco prático de 100ml com válvula spray ultrafina",
    ],
    howToUse:
      "Borrife sobre todo o corpo a uma distância de 15cm. Pode ser reaplicado sempre que quiser renovar o aroma e a sensação de bem-estar.",
    compositionInfo: "Alcohol, Aqua, Parfum, Raspberry Extract, Hazelnut Notes, Glycerin, Tocopherol.",
    price: 79.9,
    originalPrice: 94.0,
    rating: 4.9,
    reviewsCount: 64,
    tag: "100ml • Fresh & Fragrant",
    category: "perfumaria",
    image: "/produtos/kit_raspberry_hazelnut.jpg",
    images: [
      "/produtos/kit_raspberry_hazelnut.jpg",
      "/banners/raspberry_hazelnut_banner.jpg",
    ],
    volume: "100ml",
    whatsappMessage:
      "Olá! Gostaria de comprar o Body Splash Raspberry Hazelnut 100ml da Biorenov.",
  },
  {
    id: "cremma-bacio-raspberry",
    name: "Cremma Bacio Creme Hidratante para as Mãos Raspberry 30g",
    subtitle: "Toque Acetinado • Nutrição com Avelã • Rápida Absorção",
    badge: "Essencial Bolsa",
    description:
      "Creme nutritivo concentrado para mãos e cutículas. Enriquecido com manteiga emoliente de avelã e fragrância suculenta de framboesa, cria uma película protetora sedosa sem deixar as mãos pegajosas.",
    indication:
      "Ressecamento das mãos, cutículas desidratadas e proteção contra o ressecamento do sabonete e álcool gel.",
    activeIngredients: [
      "Manteiga de Avelã Pura",
      "Extrato de Framboesa",
      "Glicerina Vegetal Probiótica",
      "Vitamina E Antioxidante",
    ],
    benefits: [
      "Absorção imediata: digite no celular ou teclado segundos após aplicar",
      "Perfuma delicadamente as mãos o dia inteiro",
      "Protege contra rachaduras e ressecamento",
      "Tamanho perfeito para carregar na bolsa ou nécessaire",
    ],
    howToUse:
      "Aplique uma pequena quantidade no dorso das mãos e massageie suavemente nos dedos e cutículas sempre que sentir necessidade.",
    compositionInfo: "Aqua, Corylus Avellana Seed Oil, Cetearyl Alcohol, Glycerin, Tocopheryl Acetate, Raspberry Fragrance.",
    price: 49.9,
    originalPrice: 59.9,
    rating: 5.0,
    reviewsCount: 52,
    tag: "30g • Toque Aveludado",
    category: "facial",
    image: "/produtos/kit_raspberry_hazelnut.jpg",
    images: [
      "/produtos/kit_raspberry_hazelnut.jpg",
      "/banners/raspberry_hazelnut_banner.jpg",
    ],
    volume: "30g",
    whatsappMessage:
      "Olá! Quero pedir o Cremma Bacio Creme para Mãos Raspberry 30g.",
  },
];
