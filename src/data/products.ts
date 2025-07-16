import type { Product } from "@/features/product/interfaces/product.interface";

export const products: Product[] = [
  {
    id: "hoodie-1-men",
    name: "Classic Cotton Hoodie",
    description:
      "Buzo premium en algodón peinado 400gsm con capucha acolchada. Refuerzos en codos y costuras francesas para máxima durabilidad. Incluye bolsillo canguro termo-sellado.",
    price: 38000,
    sizes: ["S", "M", "L", "XL"],
    category: "hoodies",
    gender: "men",
    colors: [
      {
        name: "gray",
        images: ["/assets/hoodies/1-01-m.webp"],
      },
      {
        name: "white",
        images: ["/assets/hoodies/1-04-m.webp"],
      },
      {
        name: "green",
        images: ["/assets/hoodies/1-05-m.webp"],
      },
    ],
  },
  {
    id: "hoodie-1-women",
    name: "Slim Fit Cloud Hoodie",
    description:
      "Versión femenina con tejido French Terry ultra suave (95% algodón orgánico, 5% elastano). Silueta entallada con costuras planas para cero rozaduras. Capucha con ajuste perfecto sin apretar.",
    price: 39000,
    sizes: ["XS", "S", "M", "L"],
    category: "hoodies",
    gender: "women",
    colors: [
      {
        name: "gray",
        images: ["/assets/hoodies/1-02-w.webp"],
      },
      {
        name: "white",
        images: ["/assets/hoodies/1-03-w.webp"],
      },
      {
        name: "green",
        images: ["/assets/hoodies/1-06-w.webp"],
      },
    ],
  },
  {
    id: "hoodie-2-men",
    name: "Oversize Street Hoodie",
    description:
      "Diseño urbano oversized en algodón reciclado. Mangas drop-shoulder y doble capucha para estilo estratificado. Incluye cordones reflectantes y bolsillo canguro reforzado.",
    price: 42000,
    sizes: ["S", "M", "L", "XL"],
    category: "hoodies",
    gender: "men",
    colors: [
      {
        name: "gray",
        images: ["/assets/hoodies/2-01-m.webp", "/assets/hoodies/2-02-m.webp"],
      },
      {
        name: "white",
        images: ["/assets/hoodies/2-04-m.webp", "/assets/hoodies/2-03-m.webp"],
      },
    ],
  },
  {
    id: "hoodie-3-men",
    name: "Arctic Expedition Hoodie",
    description:
      "Buzo técnico para clima extremo con forro polar 300gr. Costuras selladas al agua, capucha con ajuste de snowboard y puños termo-sellados. Resistente hasta -15°C.",
    price: 45000,
    sizes: ["M", "L", "XL"],
    category: "hoodies",
    gender: "men",
    colors: [
      {
        name: "gray",
        images: ["/assets/hoodies/3-01-m.webp", "/assets/hoodies/3-02-m.webp"],
      },
    ],
  },
  {
    id: "hoodie-4-women",
    name: "Cropped Cloud Hoodie",
    description:
      "Diseño cropped con cintura elástica y tejido Brushed Back fleece. Largo perfecto para high-waisted pants. Capucha ligera con doble capa para mayor estructura.",
    price: 37000,
    sizes: ["XS", "S", "M", "L"],
    category: "hoodies",
    gender: "women",
    colors: [
      {
        name: "white",
        images: ["/assets/hoodies/4-03-w.webp", "/assets/hoodies/4-04-w.webp"],
      },
      {
        name: "gray",
        images: ["/assets/hoodies/4-01-w.webp", "/assets/hoodies/4-02-w.webp"],
      },
      {
        name: "green",
        images: ["/assets/hoodies/4-05-w.webp", "/assets/hoodies/4-06-w.webp"],
      },
    ],
  },
  {
    id: "hoodie-5-women",
    name: "Minimalist Logo Hoodie",
    description:
      "Buzo con estampado eco-solvente que no craquela. Tejido anti-pilling de 320gsm con tratamiento Soft-Touch. Corte regular con silueta ligeramente amplia para comfort.",
    price: 40000,
    sizes: ["XS", "S", "M", "L", "XL"],
    category: "hoodies",
    gender: "women",
    colors: [
      {
        name: "gray",
        images: ["/assets/hoodies/5-01-w.webp", "/assets/hoodies/5-02-w.webp"],
      },
      {
        name: "white",
        images: ["/assets/hoodies/5-03-w.webp", "/assets/hoodies/5-04-w.webp"],
      },
    ],
  },
  {
    id: "hoodie-6-men",
    name: "Blackout Heavyweight Hoodie",
    description:
      "Buzo unisex en algodón 500gsm con tintura negra permanente. Costuras reforzadas triple puntada, capucha con doble capa y cordones de paracord.",
    price: 45000,
    sizes: ["S", "M", "L", "XL"],
    category: "hoodies",
    gender: "men",
    colors: [
      {
        name: "black",
        images: ["/assets/hoodies/6-01-m.webp", "/assets/hoodies/6-02-m.webp"],
      },
    ],
  },
  {
    id: "hoodie-6-women",
    name: "Slim Blackout Hoodie",
    description:
      "Versión femenina con corte ergonómico y paneles laterales elásticos. Tejido Heavyweight sin peso extra. Costuras planas y etiqueta sin picor.",
    price: 43000,
    sizes: ["XS", "S", "M", "L"],
    category: "hoodies",
    gender: "women",
    colors: [
      {
        name: "black",
        images: ["/assets/hoodies/6-03-w.webp", "/assets/hoodies/6-04-w.webp"],
      },
    ],
  },
  {
    id: "hoodie-7-men",
    name: "Tech Runner Hoodie",
    description:
      "Buzo técnico para running con tejido DryVent. Costuras reflectantes 360°, capucha con visera integrada y bolsillo trasero con cierre hidrofóbico.",
    price: 47000,
    sizes: ["XS", "S", "M", "L"],
    category: "hoodies",
    gender: "men",
    colors: [
      {
        name: "black",
        images: ["/assets/hoodies/7-01-m.webp", "/assets/hoodies/7-02-m.webp"],
      },
    ],
  },
  {
    id: "hoodie-8-men",
    name: "Street Fighter Hoodie",
    description:
      "Diseño streetwear con mangas raglán y paneles laterales ventilados. Cuello alto desmontable y puños con ajuste de pulgar. Estampado resistente al lavado.",
    price: 41000,
    sizes: ["XS", "S", "M", "L", "XL"],
    category: "hoodies",
    gender: "men",
    colors: [
      {
        name: "black",
        images: ["/assets/hoodies/8-01-m.webp", "/assets/hoodies/8-02-m.webp"],
      },
    ],
  },
  {
    id: "hoodie-9-men",
    name: "Night Ops Reflective Hoodie",
    description:
      "Buzo negro con detalles reflectantes 3M. Tejido silencioso para movimiento stealth. Capucha con ajuste de una mano y bolsillos internos seguros.",
    price: 46000,
    sizes: ["S", "M", "L", "XL"], // Complete tactical sizing
    category: "hoodies",
    gender: "men",
    colors: [
      {
        name: "black",
        images: ["/assets/hoodies/9-01-m.webp", "/assets/hoodies/9-02-m.webp"],
      },
    ],
  },
  {
    id: "hoodie-10-men",
    name: "Dual-Zip Tech Hoodie",
    description:
      "Innovador diseño con doble cremallera YKK® para múltiples estilos. Forro microfleece, capucha magnética y puños con memoria de forma. Ideal para capas técnicas.",
    price: 49000,
    sizes: ["S", "M", "L", "XL"],
    category: "hoodies",
    gender: "men",
    colors: [
      {
        name: "black",
        images: [
          "/assets/hoodies/10-01-m.webp",
          "/assets/hoodies/10-02-m.webp",
        ],
      },
    ],
  },
  {
    id: "hoodie-11-men",
    name: "Essential Color-Block Hoodie",
    description:
      "Buzo unisex en algodón orgánico 380gsm con paneles de contraste. Tratamiento Enzyme Wash para suavidad inmediata y costuras reforzadas con hilo de poliéster. Mantiene su forma después de 50+ lavados.",
    price: 42000,
    sizes: ["XS", "S", "M", "L"],
    category: "hoodies",
    gender: "men",
    colors: [
      {
        name: "black",
        images: [
          "/assets/hoodies/11-01-m.webp",
          "/assets/hoodies/11-02-m.webp",
        ],
      },
      {
        name: "white",
        images: [
          "/assets/hoodies/11-05-m.webp",
          "/assets/hoodies/11-06-m.webp",
        ],
      },
      {
        name: "gray",
        images: [
          "/assets/hoodies/11-03-m.webp",
          "/assets/hoodies/11-04-m.webp",
        ],
      },
    ],
  },
  {
    id: "hoodie-12-women",
    name: "Black Contrast Hoodie",
    description:
      "Diseño femenino con detalles en silicona reflectante y costuras contrastantes. Tejido French Terry de doble capa (320gsm) con cintura y puños elásticos premium. Capucha con doble capa para estructura perfecta.",
    price: 39000,
    sizes: ["XS", "S", "M", "L"], // Added M for better fit options
    category: "hoodies",
    gender: "women",
    colors: [
      {
        name: "black",
        images: [
          "/assets/hoodies/12-01-w.webp",
          "/assets/hoodies/12-02-w.webp",
        ],
      },
    ],
  },
  {
    id: "hoodie-13-men",
    name: "Triple-Stitch Pro Hoodie",
    description:
      "Buzo técnico con triple costura en puntos críticos (capucha, hombros, puños). Tejido Brushed Back fleece 400gsm con propiedades térmicas. Incluye bolsillo canguro con compartimento interno para llaves.",
    price: 45000,
    sizes: ["S", "M", "L", "XL"],
    category: "hoodies",
    gender: "men",
    colors: [
      {
        name: "black",
        images: [
          "/assets/hoodies/13-01-m.webp",
          "/assets/hoodies/13-02-m.webp",
        ],
      },
      {
        name: "gray",
        images: [
          "/assets/hoodies/13-03-m.webp",
          "/assets/hoodies/13-04-m.webp",
        ],
      },
      {
        name: "white",
        images: [
          "/assets/hoodies/13-05-m.webp",
          "/assets/hoodies/13-06-m.webp",
        ],
      },
    ],
  },
  {
    id: "accessory-1",
    name: "Winter Merino Beanie",
    description:
      "Gorro ultra suave en lana merino ultrafina (18.5 micras). Diseño clásico noruego con refuerzo en costuras y terminación de punto invisible. Regula temperatura en climas de -10°C a 15°C.",
    price: 15000,
    sizes: ["Único"],
    category: "accesorios",
    gender: "unisex",
    colors: [
      {
        name: "gray",
        images: ["/assets/accessories/1.1.webp"],
      },
      {
        name: "white",
        images: [
          "/assets/accessories/1.3.webp",
          "/assets/accessories/1.4.webp",
          "/assets/accessories/1.11.webp",
          "/assets/accessories/1.12.webp",
        ],
      },
      {
        name: "green",
        images: [
          "/assets/accessories/1.5.webp",
          "/assets/accessories/1.6.webp",
        ],
      },
      {
        name: "black",
        images: [
          "/assets/accessories/1.7.webp",
          "/assets/accessories/1.8.webp",
          "/assets/accessories/1.9.webp",
          "/assets/accessories/1.10.webp",
        ],
      },
      {
        name: "red",
        images: [
          "/assets/accessories/1.13.webp",
          "/assets/accessories/1.14.webp",
        ],
      },
    ],
  },
  {
    id: "accessory-2",
    name: "Ribbed Merino Beanie",
    description:
      "Versión acanalada con elastano reciclado para mejor ajuste. Lana merino hipoalergénica certificada (no pica). Banda interna anti-viento y costura plana para máximo confort.",
    price: 14500,
    sizes: ["Único"],
    category: "accesorios",
    gender: "unisex",
    colors: [
      {
        name: "white",
        images: [
          "/assets/accessories/2.1.webp",
          "/assets/accessories/2.2.webp",
        ],
      },
      {
        name: "gray",
        images: [
          "/assets/accessories/2.3.webp",
          "/assets/accessories/2.4.webp",
        ],
      },
    ],
  },
  {
    id: "accessory-3",
    name: "Classic Cotton Cap",
    description:
      "Gorra de algodón pre-encogido con tratamiento Sanforized® (0% encogimiento). Visera curva de 7cm con núcleo rígido. Cierre ajustable de metal con sistema de bloqueo.",
    price: 18000,
    sizes: ["Único"],
    category: "accesorios",
    gender: "unisex",
    colors: [
      {
        name: "black",
        images: [
          "/assets/accessories/3.1.webp",
          "/assets/accessories/3.2.webp",
        ],
      },
      {
        name: "white",
        images: [
          "/assets/accessories/3.3.webp",
          "/assets/accessories/3.4.webp",
        ],
      },
    ],
  },
  {
    id: "accessory-4",
    name: "Performance Sport Cap",
    description:
      "Tecnología CoolMax® con paneles laterales 3D mesh. Bordado láser resistente a 50 lavados. Visera perforada y cierre de ajuste rápido con sistema de flujo de aire.",
    price: 22000,
    sizes: ["Único"],
    category: "accesorios",
    gender: "unisex",
    colors: [
      {
        name: "black",
        images: [
          "/assets/accessories/4.1.webp",
          "/assets/accessories/4.2.webp",
        ],
      },
    ],
  },
  {
    id: "accessory-5",
    name: "Organic 6-Panel Cap",
    description:
      "Algodón orgánico GOTS certificado con logo bordado con hilo reciclado. Peso ligero (110gr) con forro interior absorbente de humedad. Forma pre-moldeada que no se deforma.",
    price: 20000,
    sizes: ["Único"],
    category: "accesorios",
    gender: "unisex",
    colors: [
      {
        name: "gray",
        images: [
          "/assets/accessories/5.1.webp",
          "/assets/accessories/5.2.webp",
        ],
      },
    ],
  },
  {
    id: "accessory-6",
    name: "UV Graphic Socks (2-Pack)",
    description:
      "Pack de medias con estampado fotocrómico (cambia con luz UV). Tejido de bambú antibacteriano + refuerzos invisibles en talón/punta. Costuras planas y banda elástica que no marca.",
    price: 12000,
    sizes: ["Único"],
    category: "accesorios",
    gender: "unisex",
    colors: [
      {
        name: "black",
        images: [
          "/assets/accessories/6.1.webp",
          "/assets/accessories/6.2.webp",
        ],
      },
      {
        name: "gray",
        images: [
          "/assets/accessories/6.3.webp",
          "/assets/accessories/6.4.webp",
        ],
      },
    ],
  },
  {
    id: "accessory-7",
    name: "Media estampada #2",
    description:
      "Diseños geométricos en tejido de bambú antibacteriano. Transpirables y sin costuras.",
    price: 8500,
    sizes: ["Único"],
    category: "accesorios",
    gender: "unisex",
    colors: [
      {
        name: "black",
        images: [
          "/assets/accessories/7.1.webp",
          "/assets/accessories/7.2.webp",
        ],
      },
      {
        name: "gray",
        images: [
          "/assets/accessories/7.3.webp",
          "/assets/accessories/7.4.webp",
        ],
      },
    ],
  },
  {
    id: "accessory-8",
    name: "Media estampada #3",
    description:
      "Colección otoño-invierno con motivos alpinos. Tejido térmico y antirozaduras.",
    price: 9000,
    sizes: ["Único"],
    category: "accesorios",
    gender: "unisex",
    colors: [
      {
        name: "white",
        images: [
          "/assets/accessories/8.1.webp",
          "/assets/accessories/8.2.webp",
        ],
      },
      {
        name: "red",
        images: [
          "/assets/accessories/8.3.webp",
          "/assets/accessories/8.4.webp",
        ],
      },
    ],
  },
  {
    id: "accessory-9",
    name: "Media lisa #1",
    description:
      "Pack de 3 medias básicas en algodón peinado. Suaves y resistentes a lavados frecuentes.",
    price: 7000,
    sizes: ["Único"],
    category: "accesorios",
    gender: "unisex",
    colors: [
      {
        name: "black",
        images: [
          "/assets/accessories/9.1.webp",
          "/assets/accessories/9.2.webp",
        ],
      },
      {
        name: "gray",
        images: [
          "/assets/accessories/9.3.webp",
          "/assets/accessories/9.4.webp",
        ],
      },
    ],
  },
  {
    id: "accessory-10",
    name: "Media lisa #2",
    description:
      "Tejido técnico con microfibra que absorbe la humedad. Ideales para deportistas.",
    price: 7500,
    sizes: ["Único"],
    category: "accesorios",
    gender: "unisex",
    colors: [
      {
        name: "gray",
        images: [
          "/assets/accessories/10.1.webp",
          "/assets/accessories/10.2.webp",
        ],
      },
      {
        name: "white",
        images: [
          "/assets/accessories/10.3.webp",
          "/assets/accessories/10.4.webp",
        ],
      },
    ],
  },
  {
    id: "accessory-11",
    name: "Media lisa #3",
    description:
      "Pack de 4 medias ultra-livianas con refuerzo en zona de impacto. Lavable a máquina.",
    price: 6500,
    sizes: ["Único"],
    category: "accesorios",
    gender: "unisex",
    colors: [
      {
        name: "black",
        images: [
          "/assets/accessories/11.1.webp",
          "/assets/accessories/11.2.webp",
        ],
      },
      {
        name: "white",
        images: [
          "/assets/accessories/11.3.webp",
          "/assets/accessories/11.4.webp",
        ],
      },
    ],
  },
  {
    id: "accessory-12",
    name: "Media con diseño #1",
    description:
      "Edición artista: estampado exclusivo inspirado en arte callejero. 85% algodón, 15% elastano.",
    price: 9500,
    sizes: ["Único"],
    category: "accesorios",
    gender: "unisex",
    colors: [
      {
        name: "gray",
        images: ["/assets/accessories/12.1.webp"],
      },
    ],
  },
  {
    id: "accessory-13",
    name: "Media con diseño #2",
    description:
      "Motivos retro en colores vibrantes. Cuello elástico que no marca la piel.",
    price: 10000,
    sizes: ["Único"],
    category: "accesorios",
    gender: "unisex",
    colors: [
      {
        name: "gray",
        images: ["/assets/accessories/13.1.webp"],
      },
    ],
  },
  {
    id: "accessory-14",
    name: "Media con diseño #3",
    description:
      "Diseño vintage con visera rígida y ojales metálicos. Forro interior absorbente.",
    price: 14000,
    sizes: ["Único"],
    category: "accesorios",
    gender: "unisex",
    colors: [
      {
        name: "black",
        images: ["/assets/accessories/14.1.webp"],
      },
    ],
  },
  {
    id: "accessory-15",
    name: "Media con diseño #4",
    description:
      "Perfil bajo con cierre ajustable de hebilla. Costuras reforzadas a prueba de desgaste.",
    price: 12500,
    sizes: ["Único"],
    category: "accesorios",
    gender: "unisex",
    colors: [
      {
        name: "gray",
        images: ["/assets/accessories/15.1.webp"],
      },
    ],
  },
  {
    id: "accessory-16",
    name: "Media con diseño #5",
    description:
      "Modelo unisex con paneles curvos. Banda interior de terciopelo para mayor confort.",
    price: 13000,
    sizes: ["Único"],
    category: "accesorios",
    gender: "unisex",
    colors: [
      {
        name: "gray",
        images: ["/assets/accessories/16.1.webp"],
      },
    ],
  },
  {
    id: "accessory-17",
    name: "Media con diseño #6",
    description:
      "Línea eco-friendly: fabricada con algodón reciclado y tintes naturales.",
    price: 15000,
    sizes: ["Único"],
    category: "accesorios",
    gender: "unisex",
    colors: [
      {
        name: "black",
        images: ["/assets/accessories/17.1.webp"],
      },
    ],
  },
  {
    id: "shirt-1-women",
    name: "Shirt #1",
    description:
      "Camisa de algodón orgánico premium, corte slim fit con cuello italiano. Ideal para looks elegantes casuales.",
    price: 35000,
    sizes: ["XS", "S", "M", "L"],
    category: "remeras",
    gender: "women",
    colors: [
      {
        name: "white",
        images: ["/assets/shirts/1-01-w.webp", "/assets/shirts/1-02-w.webp"],
      },
      {
        name: "gray",
        images: ["/assets/shirts/1-03-w.webp", "/assets/shirts/1-04-w.webp"],
      },
      {
        name: "red",
        images: ["/assets/shirts/1-05-w.webp", "/assets/shirts/1-06-w.webp"],
      },
    ],
  },
  {
    id: "shirt-2-women",
    name: "Shirt #2",
    description:
      "Modelo oversized con mangas balloon y botones ocultos. Tejido de algodón egipcio para máxima suavidad.",
    price: 38000,
    sizes: ["S", "M", "L", "XL"],
    category: "remeras",
    gender: "women",
    colors: [
      {
        name: "white",
        images: ["/assets/shirts/2-01-w.webp"],
      },
      {
        name: "gray",
        images: ["/assets/shirts/2-02-w.webp"],
      },
      {
        name: "red",
        images: ["/assets/shirts/2-03-w.webp"],
      },
    ],
  },
  {
    id: "shirt-3-men",
    name: "Shirt #3",
    description:
      "Camisa negra clásica con doble costura en cuello y puños. Resistente a arrugas, perfecta para oficina.",
    price: 32000,
    sizes: ["XS", "S", "M", "L", "XL"],
    category: "remeras",
    gender: "men",
    colors: [
      {
        name: "black",
        images: [
          "/assets/shirts/3-01-m.webp",
          "/assets/shirts/3-02-m.webp",
          "/assets/shirts/3-02-m.webp",
        ],
      },
    ],
  },
  {
    id: "shirt-4-women", // Corregido: era "men" pero en colors tenía "-w"
    name: "Shirt #4",
    description:
      "Diseño cropped con corte recto y bolsillo pecho. Algodón pima con mezcla de elastano para mejor ajuste.",
    price: 29000,
    sizes: ["XS", "S", "M"],
    category: "remeras",
    gender: "women",
    colors: [
      {
        name: "black",
        images: ["/assets/shirts/4-01-w.webp"],
      },
    ],
  },
  {
    id: "shirt-5-men",
    name: "Shirt #5",
    description:
      "Camisa de vestir con textura sutil en espiga. Cuello spread y puños franceses para estilo formal.",
    price: 40000,
    sizes: ["S", "M", "L", "XL"],
    category: "remeras",
    gender: "men",
    colors: [
      {
        name: "black",
        images: ["/assets/shirts/5-01-m.webp", "/assets/shirts/5-02-m.webp"],
      },
    ],
  },
  {
    id: "shirt-6-men",
    name: "Shirt #6",
    description:
      "Blanca clásica con tejido popelín 100% algodón. Transpirable y opaca para evitar transparencias.",
    price: 28000,
    sizes: ["M", "L", "XL"], // Sin XS para este modelo
    category: "remeras",
    gender: "men",
    colors: [
      {
        name: "white",
        images: ["/assets/shirts/6-01-m.webp", "/assets/shirts/6-02-m.webp"],
      },
    ],
  },
  {
    id: "shirt-7-men",
    name: "Shirt #7",
    description:
      "Negra mate con acabado anti-manchas. Corte regular fit para mayor comodidad en movimiento.",
    price: 34000,
    sizes: ["XS", "S", "M", "L"],
    category: "remeras",
    gender: "men",
    colors: [
      {
        name: "black",
        images: ["/assets/shirts/7-01-m.webp", "/assets/shirts/7-02-m.webp"],
      },
    ],
  },
  {
    id: "shirt-8-men",
    name: "Shirt #8",
    description:
      "Pack de 2 camisas básicas (gris/blanca) con etiqueta sin picor y costuras planas para evitar rozaduras.",
    price: 45000,
    sizes: ["S", "M", "L", "XL"],
    category: "remeras",
    gender: "men",
    colors: [
      {
        name: "gray",
        images: ["/assets/shirts/8-01-m.webp", "/assets/shirts/8-02-m.webp"],
      },
      {
        name: "white",
        images: ["/assets/shirts/8-03-m.webp"],
      },
    ],
  },
  {
    id: "shirt-9-men",
    name: "Camisa Clásica Oxford",
    description:
      "Camisa de algodón Oxford grueso con cuello button-down. Ideal para looks casuales o semi-formales. Tejido resistente que mejora con cada lavado.",
    price: 32000,
    sizes: ["S", "M", "L", "XL"],
    category: "remeras",
    gender: "men",
    colors: [
      {
        name: "gray",
        images: ["/assets/shirts/9-01-m.webp", "/assets/shirts/9-02-m.webp"],
      },
    ],
  },
  {
    id: "shirt-10-women", // Corregido: cambiamos de men a women
    name: "Camisa Oversized Elegante",
    description:
      "Diseño oversized en algodón egipcio con mangas tipo globo y doble botonadura francesa. Perfecta para combinar con jeans o pantalones de vestir.",
    price: 35000,
    sizes: ["XS", "S", "M"], // Tallas más pequeñas para mujer
    category: "remeras",
    gender: "women",
    colors: [
      {
        name: "black",
        images: ["/assets/shirts/10-01-w.webp", "/assets/shirts/10-02-w.webp"],
      },
    ],
  },
  {
    id: "shirt-11-women", // Corregido: cambiamos de men a women
    name: "Camisa Slim Fit Premium",
    description:
      "Versión femenina de nuestra camisa más vendida. Corte slim fit en algodón pima con refuerzos anti-transparencia y costuras planas.",
    price: 38000,
    sizes: ["XS", "S", "M", "L"],
    category: "remeras",
    gender: "women",
    colors: [
      {
        name: "black",
        images: ["/assets/shirts/11-01-w.webp", "/assets/shirts/11-02-w.webp"],
      },
    ],
  },
  {
    id: "shirt-12-men", // Corregido: cambiamos de women a men
    name: "Camisa Blanca Clásica",
    description:
      "Blanca impoluta en popelín de algodón 120 hilos. Cuello italiano y puños con doble botón para mayor durabilidad. Incluye bolsillo de peto.",
    price: 29000,
    sizes: ["M", "L", "XL"], // Sin tallas pequeñas
    category: "remeras",
    gender: "men",
    colors: [
      {
        name: "white",
        images: ["/assets/shirts/12-01-m.webp", "/assets/shirts/12-02-m.webp"],
      },
    ],
  },
  {
    id: "shirt-13-men",
    name: "Camisa Blanca Executive",
    description:
      "Tejido antiarrugas con mezcla de algodón y elastano. Diseñada para viajeros frecuentes que necesitan lucir impecables en todo momento.",
    price: 42000,
    sizes: ["S", "M", "L", "XL"],
    category: "remeras",
    gender: "men",
    colors: [
      {
        name: "white",
        images: ["/assets/shirts/13-01-m.webp", "/assets/shirts/13-02-m.webp"],
      },
    ],
  },
  {
    id: "shirt-14-women",
    name: "Camisa Blanca Cropped",
    description:
      "Versión corta con doble bolsillo y botones nacarados. Largo perfecto para usar con pantalones de tiro alto o faldas.",
    price: 31000,
    sizes: ["XS", "S", "M"],
    category: "remeras",
    gender: "women",
    colors: [
      {
        name: "white",
        images: ["/assets/shirts/14-01-w.webp", "/assets/shirts/14-02-w.webp"],
      },
    ],
  },
  {
    id: "shirt-15-women", // Corregido: cambiamos de men a women
    name: "Camisa Blanca Luxe",
    description:
      "Edición premium con detalles en encaje francés y botones de madreperla. Tejido extra suave que no pierde su blancura con el lavado.",
    price: 45000,
    sizes: ["XS", "S", "M", "L"],
    category: "remeras",
    gender: "women",
    colors: [
      {
        name: "white",
        images: ["/assets/shirts/15-01-w.webp", "/assets/shirts/15-02-w.webp"],
      },
    ],
  },
  {
    id: "shirt-16",
    name: "Pack Esencial 3 Camisas",
    description:
      "Set de 3 camisas básicas (negro, blanco, gris) en algodón peinado de 200gr. Incluye 1 camisa de regalo al comprar el pack completo.",
    price: 85000, // Precio especial por pack
    sizes: ["S", "M", "L", "XL"],
    category: "remeras",
    gender: "men",
    colors: [
      {
        name: "black",
        images: ["/assets/shirts/16-01-m.webp", "/assets/shirts/16-02-m.webp"],
      },
      {
        name: "white",
        images: ["/assets/shirts/16-03-m.webp", "/assets/shirts/16-04-m.webp"],
      },
      {
        name: "gray",
        images: ["/assets/shirts/16-05-m.webp", "/assets/shirts/16-06-m.webp"],
      },
    ],
  },
  {
    id: "shirt-17-men",
    name: "Camisa Negra Matte",
    description:
      "Color negro intenso que no destiñe. Corte regular fit con hombreras desmontables para adaptarse a cualquier silueta.",
    price: 34000,
    sizes: ["S", "M", "L", "XL"],
    category: "remeras",
    gender: "men",
    colors: [
      {
        name: "black",
        images: ["/assets/shirts/17-01-m.webp"],
      },
    ],
  },
  {
    id: "shirt-18-men",
    name: "Camisa Negra Performance",
    description:
      "Tecnología Dry-Tech: tejido que absorbe la humedad y seca rápido. Ideal para climas cálidos o uso profesional activo.",
    price: 37000,
    sizes: ["M", "L", "XL"], // Tallas más grandes
    category: "remeras",
    gender: "men",
    colors: [
      {
        name: "black",
        images: ["/assets/shirts/18-01-m.webp"],
      },
    ],
  },
  {
    id: "shirt-19-men",
    name: "Camisa Negra Premium",
    description:
      "Edición limitada con hilos de seda integrados para un brillo sutil. Costuras reforzadas en áreas de mayor movimiento.",
    price: 48000,
    sizes: ["S", "M", "L", "XL"],
    category: "remeras",
    gender: "men",
    colors: [
      {
        name: "black",
        images: ["/assets/shirts/19-01-m.webp"],
      },
    ],
  },
  {
    id: "shirt-20-men",
    name: "Camisa Negra Essential",
    description:
      "Básico atemporal en algodón peinado de 180gr. Corte regular fit con costuras reforzadas en hombros y puños. Ideal para múltiples lavados sin perder forma.",
    price: 28000,
    sizes: ["S", "M", "L", "XL"],
    category: "remeras",
    gender: "men",
    colors: [
      {
        name: "black",
        images: ["/assets/shirts/20-01-m.webp"],
      },
    ],
  },
  {
    id: "shirt-21-men",
    name: "Pack Trío Versátil",
    description:
      "Set de 3 camisas en algodón orgánico (negro/blanco/gris). Incluye: 1 clásica, 1 slim fit y 1 casual con bolsillo de peto. Lavado previo para mayor suavidad.",
    price: 75000, // Precio pack (3 unidades)
    sizes: ["M", "L", "XL"], // Tallas completas
    category: "remeras",
    gender: "men",
    colors: [
      {
        name: "black",
        images: ["/assets/shirts/21-01-m.webp", "/assets/shirts/21-02-m.webp"],
      },
      {
        name: "white",
        images: ["/assets/shirts/21-03-m.webp", "/assets/shirts/21-04-m.webp"],
      },
      {
        name: "gray",
        images: ["/assets/shirts/21-05-m.webp", "/assets/shirts/21-06-m.webp"],
      },
    ],
  },
  {
    id: "shirt-22-women",
    name: "Camisa Relaxed Fit",
    description:
      "Diseño oversize en tejido de lino y algodón para máxima transpirabilidad. Mangas tipo kimono y doble costura en cuello para estructura sin rigidez.",
    price: 32000,
    sizes: ["XS", "S", "M"], // Tallas femeninas
    category: "remeras",
    gender: "women",
    colors: [
      {
        name: "gray",
        images: ["/assets/shirts/22-01-w.webp", "/assets/shirts/22-02-w.webp"],
      },
    ],
  },
  {
    id: "shirt-23-women",
    name: "Blanca Pure Linen",
    description:
      "Camisa 100% lino ecológico con tratamiento antiarrugas. Botones de corozo y terminaciones con hilo contrastante para un look artesanal.",
    price: 38000,
    sizes: ["XS", "S", "M", "L"],
    category: "remeras",
    gender: "women",
    colors: [
      {
        name: "white",
        images: ["/assets/shirts/23-01-w.webp", "/assets/shirts/23-02-w.webp"],
      },
    ],
  },
  {
    id: "shirt-24-women",
    name: "Dúo Contrastes",
    description:
      "Pack de 2 camisas (negro/blanco) con detalles complementarios. Cuello mandarín en la negra y cuello italiano en la blanca. Tejido técnico que regula temperatura.",
    price: 65000, // Pack 2 unidades
    sizes: ["S", "M", "L"],
    category: "remeras",
    gender: "women",
    colors: [
      {
        name: "black",
        images: ["/assets/shirts/24-01-w.webp", "/assets/shirts/24-02-w.webp"],
      },
      {
        name: "white",
        images: ["/assets/shirts/24-03-w.webp", "/assets/shirts/24-04-w.webp"],
      },
    ],
  },
  {
    id: "shirt-25-women",
    name: "Colección Signature",
    description:
      "Trío premium con estampado único (gris/negro/blanco). Cuello barco con detalle de encaje invisible y mangas abullonadas. Incluye funda de lavandería.",
    price: 89000, // Pack premium
    sizes: ["XS", "S", "M"],
    category: "remeras",
    gender: "women",
    colors: [
      {
        name: "gray",
        images: ["/assets/shirts/25-01-w.webp", "/assets/shirts/25-02-w.webp"],
      },
      {
        name: "black",
        images: [
          "/assets/shirts/25-03-w.webp",
          "/assets/shirts/25-04-w.webp",
          "/assets/shirts/25-05-w.webp",
          "/assets/shirts/25-06-w.webp",
        ],
      },
      {
        name: "white",
        images: ["/assets/shirts/25-07-w.webp", "/assets/shirts/25-08-w.webp"],
      },
    ],
  },
  {
    id: "shirt-26-women",
    name: "Dúo Clásico",
    description:
      "Pack básico (gris/blanco) en algodón pima de 140 hilos. Costuras francesas y doble botón en puños para mayor durabilidad.",
    price: 58000,
    sizes: ["S", "M", "L"],
    category: "remeras",
    gender: "women",
    colors: [
      {
        name: "gray",
        images: ["/assets/shirts/26-01-w.webp", "/assets/shirts/26-02-w.webp"],
      },
      {
        name: "white",
        images: ["/assets/shirts/26-03-w.webp", "/assets/shirts/26-04-w.webp"],
      },
    ],
  },
  {
    id: "shirt-27-women",
    name: "Negra Midnight",
    description:
      "Color negro intenso con tintura ecológica. Silueta semi-ajustada con aberturas laterales y espalda ligeramente más larga para mejor cobertura.",
    price: 34000,
    sizes: ["XS", "S", "M"],
    category: "remeras",
    gender: "women",
    colors: [
      {
        name: "black",
        images: ["/assets/shirts/27-01-w.webp", "/assets/shirts/27-02-w.webp"],
      },
    ],
  },
  {
    id: "shirt-28-men",
    name: "Pack Ejecutivo",
    description:
      "Dúo profesional (negro/gris) con tejido antiarrugas y bolsillo para lapiceros. Refuerzos en codos y hombros para mayor vida útil.",
    price: 68000,
    sizes: ["M", "L", "XL"],
    category: "remeras",
    gender: "men",
    colors: [
      {
        name: "black",
        images: ["/assets/shirts/28-01-m.webp", "/assets/shirts/28-02-m.webp"],
      },
      {
        name: "gray",
        images: ["/assets/shirts/28-03-m.webp", "/assets/shirts/28-04-m.webp"],
      },
    ],
  },
  {
    id: "shirt-29-men",
    name: "Colección Maestro",
    description:
      "Set de 3 camisas (blanco/negro/gris) con detalles únicos: cuello contrastante, puños franceses y botones tallados a mano. Incluye kit de cuidado.",
    price: 95000,
    sizes: ["S", "M", "L", "XL"],
    category: "remeras",
    gender: "men",
    colors: [
      {
        name: "white",
        images: [
          "/assets/shirts/29-01-m.webp",
          "/assets/shirts/29-02-m.webp",
          "/assets/shirts/29-07-m.webp",
          "/assets/shirts/29-08-m.webp",
        ],
      },
      {
        name: "black",
        images: ["/assets/shirts/29-03-m.webp", "/assets/shirts/29-04-m.webp"],
      },
      {
        name: "gray",
        images: ["/assets/shirts/29-05-m.webp", "/assets/shirts/29-06-m.webp"],
      },
    ],
  },
  {
    id: "shirt-30",
    name: "Dúo Essential",
    description:
      "Combinación perfecta (negro/blanco) en tejido stretch con 2% elastano. Cuello desmontable y doble bastilla en costuras para look impecable.",
    price: 62000,
    sizes: ["XS", "S", "M", "L"],
    category: "remeras",
    gender: "women",
    colors: [
      {
        name: "black",
        images: ["/assets/shirts/30-01-w.webp", "/assets/shirts/30-02-w.webp"],
      },
      {
        name: "white",
        images: ["/assets/shirts/30-03-w.webp", "/assets/shirts/30-04-w.webp"],
      },
    ],
  },
  {
    id: "shirt-31-women",
    name: "Essential Contrast Shirt",
    description:
      "Dual-layer cotton shirt with hidden button placket and contrast inner collar. Perfect for layered looks or wearing alone. Pre-washed for extra softness.",
    price: 32000,
    sizes: ["XS", "S", "M", "L"],
    category: "remeras",
    gender: "women",
    colors: [
      {
        name: "black",
        images: ["/assets/shirts/31-01-w.webp", "/assets/shirts/31-02-w.webp"],
      },
      {
        name: "white",
        images: ["/assets/shirts/31-03-w.webp", "/assets/shirts/31-04-w.webp"],
      },
    ],
  },
  {
    id: "shirt-32-women",
    name: "Tri-Tone Collection",
    description:
      "Premium 3-shirt set featuring our signature curved hem design. Each shirt has reinforced elbow patches and mother-of-pearl buttons. Includes storage pouch.",
    price: 85000,
    sizes: ["S", "M", "L"],
    category: "remeras",
    gender: "women",
    colors: [
      {
        name: "gray",
        images: ["/assets/shirts/32-01-w.webp", "/assets/shirts/32-03-w.webp"],
      },
      {
        name: "white",
        images: ["/assets/shirts/32-04-w.webp", "/assets/shirts/32-05-w.webp"],
      },
      {
        name: "black",
        images: ["/assets/shirts/32-06-w.webp", "/assets/shirts/32-07-w.webp"],
      },
    ],
  },
  {
    id: "shirt-33-men",
    name: "Executive Color-Block",
    description:
      "Business-casual shirt with color-blocked panels. Features anti-odor treatment and wrinkle-resistant fabric. Hidden locker loop at back collar.",
    price: 38000,
    sizes: ["M", "L", "XL"],
    category: "remeras",
    gender: "women",
    colors: [
      {
        name: "black",
        images: ["/assets/shirts/33-01-w.webp", "/assets/shirts/33-02-w.webp"],
      },
      {
        name: "green",
        images: ["/assets/shirts/33-03-w.webp", "/assets/shirts/33-04-w.webp"],
      },
      {
        name: "white",
        images: ["/assets/shirts/33-05-w.webp", "/assets/shirts/33-06-w.webp"],
      },
    ],
  },
  {
    id: "shirt-34-men",
    name: "Blackout Performance",
    description:
      "Ultra-matte black shirt with laser-cut ventilation panels under arms. Moisture-wicking fabric with UPF 30+ sun protection. Tagless design.",
    price: 42000,
    sizes: ["S", "M", "L", "XL"],
    category: "remeras",
    gender: "men",
    colors: [
      {
        name: "black",
        images: ["/assets/shirts/34-01-m.webp", "/assets/shirts/34-02-m.webp"],
      },
    ],
  },
  {
    id: "shirt-34-women",
    name: "Silk Touch Shirt",
    description:
      "Cotton-silk blend (70/30) with pearlescent gray hue. French seams and convertible cuffs (button or roll-up). Comes with matching fabric care kit.",
    price: 45000,
    sizes: ["XS", "S", "M"],
    category: "remeras",
    gender: "women",
    colors: [
      {
        name: "gray",
        images: ["/assets/shirts/34-03-w.webp", "/assets/shirts/34-04-w.webp"],
      },
    ],
  },
  {
    id: "shirt-35-men",
    name: "Weekender Bundle",
    description:
      "2-shirt set for casual Fridays (gray/red). Features: Gray: Brushed cotton with hidden chest pocket, Red: Micro-tex fabric with stain resistance, Includes matching collar stays.",
    price: 68000,
    sizes: ["M", "L", "XL"],
    category: "remeras",
    gender: "men",
    colors: [
      {
        name: "gray",
        images: ["/assets/shirts/35-01-m.webp", "/assets/shirts/35-02-m.webp"],
      },
      {
        name: "red",
        images: [
          "/assets/shirts/35-03-m.webp",
          "/assets/shirts/35-04-m.webp",
          "/assets/shirts/35-02-m.webp",
        ],
      },
    ],
  },
  {
    id: "pants-1-women",
    name: "Jogger Essential",
    description:
      "Pantalón jogger en algodón orgánico con cintura elástica y bolsillos laterales. Corte relajado pero estructurado para look casual elegante.",
    price: 25000,
    sizes: ["XS", "S", "M", "L"], // Added XS for women
    category: "pantalones",
    gender: "women",
    colors: [
      {
        name: "black",
        images: ["/assets/pants/1-01-w.webp", "/assets/pants/1-02-w.webp"],
      },
    ],
  },
  {
    id: "pants-2-men",
    name: "Jogger Tech",
    description:
      "Jogger deportivo con tejido transpirable y resistente al agua. Incluye cordón ajustable y refuerzos en rodillas para mayor durabilidad.",
    price: 28000,
    sizes: ["S", "M", "L", "XL"],
    category: "pantalones",
    gender: "men",
    colors: [
      {
        name: "gray",
        images: ["/assets/pants/2-01-m.webp", "/assets/pants/2-02-m.webp"],
      },
    ],
  },
  {
    id: "jacket-1-men",
    name: "Bomber Premium",
    description:
      "Campera bomber en cuero ecológico con forro de seda. Costuras reforzadas y cremalleras de metal antidesgaste. Edición limitada numerada.",
    price: 98000,
    sizes: ["S", "M", "L", "XL"],
    category: "camperas",
    gender: "men",
    colors: [
      {
        name: "black",
        images: ["/assets/jackets/1-01-m.webp", "/assets/jackets/1-02-m.webp"],
      },
    ],
  },
  {
    id: "jacket-2-men",
    name: "Urban Shield Jacket",
    description:
      "Campera urbana con tecnología Windproof 360° y capucha desmontable. Multiple bolsillos con cierre hidrofóbico y ajuste ergonómico para movilidad.",
    price: 85000,
    sizes: ["M", "L", "XL"], // Urban fit runs larger
    category: "camperas",
    gender: "men",
    colors: [
      {
        name: "black",
        images: ["/assets/jackets/2-01-m.webp", "/assets/jackets/2-02-m.webp"],
      },
    ],
  },
  {
    id: "jacket-2-women",
    name: "Urban Shield Jacket",
    description:
      "Versión femenina con cintura ajustable y paneles laterales elásticos. Tecnología anti-olor y protección UV 50+. Capucha con sistema de almacenamiento integrado.",
    price: 87000,
    sizes: ["XS", "S", "M", "L"],
    category: "camperas",
    gender: "women",
    colors: [
      {
        name: "black",
        images: ["/assets/jackets/2-03-w.webp", "/assets/jackets/2-04-w.webp"],
      },
    ],
  },
  {
    id: "jacket-3-men",
    name: "Winter Expedition Parka",
    description:
      "Abrigo térmico para temperaturas bajo cero con relleno de plumón 650FP. Incluye: capucha desmontable con piel sintética, pantalla anti-viento y 8 bolsillos estratégicos.",
    price: 120000,
    sizes: ["S", "M", "L", "XL"],
    category: "camperas",
    gender: "men",
    colors: [
      {
        name: "black",
        images: [
          "/assets/jackets/3-01-m.webp",
          "/assets/jackets/3-02-m.webp",
          "/assets/jackets/3-05-m.webp",
          "/assets/jackets/3-06-m.webp",
        ],
      },
      {
        name: "gray",
        images: [
          "/assets/jackets/3-03-m.webp",
          "/assets/jackets/3-04-m.webp",
          "/assets/jackets/3-07-m.webp",
          "/assets/jackets/3-08-m.webp",
        ],
      },
    ],
  },
  {
    id: "jacket-3-women",
    name: "Winter Expedition Parka",
    description:
      "Versión femenina con cintura definida y tecnología HeatLock™ en torso. Sistema de ventilación bajo brazos y capucha con ajuste magnético.",
    price: 115000,
    sizes: ["XS", "S", "M", "L"],
    category: "camperas",
    gender: "women",
    colors: [
      {
        name: "black",
        images: ["/assets/jackets/3-09-w.webp", "/assets/jackets/3-10-w.webp"],
      },
    ],
  },
  {
    id: "jacket-4-men",
    name: "Tech Fleece Jacket",
    description:
      "Campera ultraligera (solo 420g) con tejido 3D Stormshield. Ideal para running urbano, pliega en su propio bolsillo para transporte.",
    price: 75000,
    sizes: ["S", "M", "L", "XL"],
    category: "camperas",
    gender: "men",
    colors: [
      {
        name: "gray",
        images: ["/assets/jackets/4-01-m.webp", "/assets/jackets/4-02-m.webp"],
      },
    ],
  },
  {
    id: "jacket-5-men",
    name: "All-Weather Shell",
    description:
      "Impermeable técnico 10K/10K (resistencia agua/viento). Costuras selladas, cremalleras hidrofóbicas y reflectivos 360° para seguridad nocturna.",
    price: 92000,
    sizes: ["S", "M", "L", "XL"],
    category: "camperas",
    gender: "men",
    colors: [
      {
        name: "gray",
        images: ["/assets/jackets/5-01-m.webp", "/assets/jackets/5-02-m.webp"],
      },
    ],
  },
  {
    id: "jacket-6-women",
    name: "Transition Trench",
    description:
      "Gabardina moderna con cinturón ajustable y doble botonadura. Tejido resistente a la lluvia con memoria de forma para evitar arrugas.",
    price: 89000,
    sizes: ["XS", "S", "M", "L"],
    category: "camperas",
    gender: "women",
    colors: [
      {
        name: "black",
        images: ["/assets/jackets/6-01-w.webp", "/assets/jackets/6-02-w.webp"],
      },
    ],
  },
  {
    id: "jacket-6-men",
    name: "Transition Trench",
    description:
      'Versión masculina con hombreras desmontables y forro térmico extraíble. Incluye anillo para colgar llaves y bolsillo interno para laptop hasta 15".',
    price: 95000,
    sizes: ["S", "M", "L", "XL"],
    category: "camperas",
    gender: "men",
    colors: [
      {
        name: "black",
        images: ["/assets/jackets/6-03-m.webp", "/assets/jackets/6-04-m.webp"],
      },
    ],
  },
];
