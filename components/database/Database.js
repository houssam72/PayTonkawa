export const COLOURS = {
  white: "#ffffff",
  black: "#000000",
  green: "#00AC76",
  red: "#C04345",
  blue: "#0043F9",
  grey: "#808080",
  yellow: "#ffC500",
  backgroundLight: "#F0F0F3",
  backgroundMedium: "#B9B9B9",
  backgroundDark: "#777777",
};

export const Items = [
  {
    id: 1,
    category: "product",
    productName: "X1 Anniversary ESE & Ground ",
    productPrice: 649,
    description:
      "Une beauté renouvelée -associée à la durabilité- pour atteindre la perfection.",
    isOff: true,
    offPercentage: 10,
    productImage: require("../database/images/products/X1_1.png"),
    isAvailable: true,
    productImageList: [
      // require("../database/images/products/X1_1.png"),
      require("../database/images/products/X1_2.png"),
      require("../database/images/products/X1_3.png"),
      require("../database/images/products/X1_4.png"),
      require("../database/images/products/X1_5.png"),
      require("../database/images/products/X1_6.png"),
    ],
  },
  {
    id: 2,
    category: "product",
    productName: "Machine à dosettes E.S.E - illy Easy",
    productPrice: 129,
    description:
      "Machine à dosettes en papier E.S.E., optimisée pour répondre aux standards de qualité illy .",
    isOff: false,
    productImage: require("../database/images/products/E_4.png"),
    isAvailable: true,
    productImageList: [
      require("../database/images/products/E_4.png"),
      require("../database/images/products/E_1.png"),
      require("../database/images/products/E_3.png"),
      require("../database/images/products/E_2.png"),
    ],
  },
  {
    id: 3,
    category: "accessory",
    productName: "Café moulu Classico 250g - Édition Limitée Pascale Marthine Tayou",
    productPrice: 10,
    description:
      "Préparez-vous à une expérience de dégustation d’espresso des plus raffinées avec la boîte de 250 g de café moulu CLASSICO",
    isOff: true,
    offPercentage: 18,
    productImage: require("../database/images/accessories/Mouli2.png"),
    isAvailable: true,
    productImageList: [
      require("../database/images/accessories/Mouli2.png"),
      require("../database/images/accessories/Mouli1.png"),
    ],
  },
  {
    id: 4,
    category: "accessory",
    productName: "Café en capsules compatibles DECAFFEINATO",
    productPrice: 12,
    description:
      "Le café torréfié décaféiné a un goût moelleux et velouté, avec une teneur en caféine ",
    isOff: false,
    productImage: require("../database/images/accessories/Deca2.png"),
    isAvailable: true,
    productImageList: [
      require("../database/images/accessories/Deca2.png"),
      require("../database/images/accessories/Deca1.png"),
      require("../database/images/accessories/Deca3.png"),
    ],
  },
  {
    id: 5,
    category: "accessory",
    productName: "Café en capsules Iperespresso FORTE",
    productPrice: 15,
    description:
      "Découvrez l’incomparable café torréfié FORTE d’illy, un assemblage 100 % Arabica ",
    isOff: false,
    productImage: require("../database/images/accessories/Iperes2.png"),
    isAvailable: false,
    productImageList: [
      require("../database/images/accessories/Iperes2.png"),
      require("../database/images/accessories/Iperes1.png"),
      require("../database/images/accessories/Iperes3.png"),
    ],
  },
  {
    id: 6,
    category: "accessory",
    productName: "Cafetière Moka Alessi 1 tasse + 2 boîtes de café moulu moka Classico 250g",
    productPrice: 22,
    description:
      "Goûtez pleinement au rituel du Moka avec la cafetière Moka Alessi 1 tasse et son café associé.",
    isOff: false,
    productImage: require("../database/images/accessories/cf1.png"),
    isAvailable: true,
    productImageList: [
      require("../database/images/accessories/cf1.png"),
      require("../database/images/accessories/cf2.png"),
      require("../database/images/accessories/cf3.png"),
    ],
  },
];
