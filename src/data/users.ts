import type { User } from "@/features/user/interfaces";

const user1: User = {
  firstName: "Franco",
  lastName: "Galluccio",
  email: "franco@example.com",
  avatarUrl: "https://i.pravatar.cc/150?img=3",
  isVip: true,
  purchases: [
    {
      ticketNumber: "#000001AG",
      purchaseDate: "12-05-2024",
      purchaseTime: "14:30",
      total: 90000,
      products: [
        {
          id: "hoodie-6-women",
          name: "Slim Blackout Hoodie",
          description:
            "Versión femenina con corte ergonómico y paneles laterales elásticos. Tejido Heavyweight sin peso extra. Costuras planas y etiqueta sin picor.",
          price: 43000,
          quantity: 1,
          category: "hoodies",
          sizes: ["XS", "S", "M", "L"],
          gender: "women",
          colors: [
            {
              name: "black",
              images: [
                "/assets/hoodies/6-03-w.webp",
                "/assets/hoodies/6-04-w.webp",
              ],
            },
          ],
        },
        {
          id: "hoodie-7-men",
          name: "Tech Runner Hoodie",
          description:
            "Buzo técnico para running con tejido DryVent. Costuras reflectantes 360°, capucha con visera integrada y bolsillo trasero con cierre hidrofóbico.",
          price: 47000,
          quantity: 1,
          category: "hoodies",
          sizes: ["XS", "S", "M", "L"],
          gender: "men",
          colors: [
            {
              name: "black",
              images: [
                "/assets/hoodies/7-01-m.webp",
                "/assets/hoodies/7-02-m.webp",
              ],
            },
          ],
        },
      ],
    },
    {
      ticketNumber: "#0000023GS",
      purchaseDate: "03-06-2024",
      purchaseTime: "11:45",
      total: 41000,
      products: [
        {
          id: "hoodie-8-men",
          name: "Street Fighter Hoodie",
          description:
            "Diseño streetwear con mangas raglán y paneles laterales ventilados. Cuello alto desmontable y puños con ajuste de pulgar. Estampado resistente al lavado.",
          price: 41000,
          category: "hoodies",
          quantity: 1,
          sizes: ["XS", "S", "M", "L", "XL"],
          gender: "men",
          colors: [
            {
              name: "black",
              images: [
                "/assets/hoodies/8-01-m.webp",
                "/assets/hoodies/8-02-m.webp",
              ],
            },
          ],
        },
      ],
    },
  ],
};

const user2: User = {
  firstName: "Lucía",
  lastName: "Fernández",
  email: "lucia@example.com",
  avatarUrl: "https://i.pravatar.cc/150?img=47",
  isVip: false,
  purchases: [
    {
      ticketNumber: "#000023X",
      purchaseDate: "01-07-2024",
      purchaseTime: "09:20",
      total: 39000,
      products: [
        {
          id: "hoodie-12-women",
          name: "Black Contrast Hoodie",
          description:
            "Diseño femenino con detalles en silicona reflectante y costuras contrastantes. Tejido French Terry de doble capa (320gsm) con cintura y puños elásticos premium. Capucha con doble capa para estructura perfecta.",
          price: 39000,
          category: "hoodies",
          quantity: 1,
          sizes: ["XS", "S", "M", "L"],
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
      ],
    },
  ],
};

const user3: User = {
  firstName: "Martín",
  lastName: "Gómez",
  email: "martin@example.com",
  avatarUrl: "https://i.pravatar.cc/150?img=58",
  isVip: false,
  purchases: [
    {
      ticketNumber: "#0000053S",
      purchaseDate: "22-04-2024",
      purchaseTime: "17:15",
      total: 42000,
      products: [
        {
          id: "hoodie-11-men",
          name: "Essential Color-Block Hoodie",
          description:
            "Buzo unisex en algodón orgánico 380gsm con paneles de contraste. Tratamiento Enzyme Wash para suavidad inmediata y costuras reforzadas con hilo de poliéster. Mantiene su forma después de 50+ lavados.",
          price: 42000,
          category: "hoodies",
          quantity: 1,
          sizes: ["XS", "S", "M", "L", "XL"],
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
          ],
        },
      ],
    },
  ],
};

export const users = { user1, user2, user3 };
export type UserKey = keyof typeof users;
