export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  compareAtPrice?: number;
  category: string;
  categorySlug: string;
  image: string;
  gallery: string[];
  description: string;
  features: string[];
  ageGroup: string;
  rating: number;
  reviewsCount: number;
  colors: { name: string; hex: string }[];
  sizes: string[];
  inStock: boolean;
  isBestSeller?: boolean;
  isNew?: boolean;
}

export const CATEGORIES = [
  {
    id: "vetements",
    slug: "vetements-0-12m",
    name: "Vêtements 0-12m",
    description: "Bodys doux, pyjamas en velours et barboteuses 100% coton bio.",
    image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=700",
    itemCount: 14,
  },
  {
    id: "sommeil",
    slug: "sommeil-et-nids",
    name: "Sommeil & Nids d'ange",
    description: "Gigoteuses 4 saisons, nids d'ange molletonnés et langes.",
    image: "https://images.unsplash.com/photo-1544126592-807ade215a0b?auto=format&fit=crop&q=80&w=700",
    itemCount: 8,
  },
  {
    id: "eveil",
    slug: "eveil-et-doudous",
    name: "Éveil & Doudous",
    description: "Hochets en bois naturel, peluches sensorielles et doudous câlins.",
    image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=700",
    itemCount: 12,
  },
  {
    id: "repas",
    slug: "repas-et-bavoirs",
    name: "Repas & Bavoirs",
    description: "Bavoirs imperméables, vaisselle en silicone souple sans BPA.",
    image: "https://images.unsplash.com/photo-1584839617966-2e840e6ebf5d?auto=format&fit=crop&q=80&w=700",
    itemCount: 6,
  },
];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: "prod-1",
    slug: "gigoteuse-coton-bio-soleil",
    name: "Gigoteuse Cocon Coton Bio (0-6m)",
    price: 24.99,
    compareAtPrice: 34.99,
    category: "Sommeil & Nids d'ange",
    categorySlug: "sommeil-et-nids",
    image: "https://images.unsplash.com/photo-1555252333-978fead06c00?auto=format&fit=crop&q=80&w=800",
    gallery: [
      "https://images.unsplash.com/photo-1555252333-978fead06c00?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1544126592-807ade215a0b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=800",
    ],
    description: "Une gigoteuse ultra-douce certifiée OEKO-TEX et 100% Coton Biologique pour des nuits paisibles et sécurisées dès la naissance.",
    features: [
      "100% Coton Biologique certifié GOTS",
      "TOG 2.0 (idéal chambre 18-21°C)",
      "Fermeture éclair sécurisée avec rabat anti-pincement",
      "Lavable en machine à 30°C",
    ],
    ageGroup: "0-6 mois",
    rating: 4.9,
    reviewsCount: 38,
    colors: [
      { name: "Bleu Ciel Pastel", hex: "#8EBEEC" },
      { name: "Rose Guimauve", hex: "#F7B5CD" },
      { name: "Vert Menthe Douce", hex: "#A8DDC5" },
    ],
    sizes: ["0-3 mois", "3-6 mois", "6-12 mois"],
    inStock: true,
    isBestSeller: true,
    isNew: false,
  },
  {
    id: "prod-2",
    slug: "ensemble-barboteuse-bebe-pastel",
    name: "Ensemble Barboteuse & Bonnet Douceur",
    price: 19.99,
    compareAtPrice: 27.99,
    category: "Vêtements 0-12m",
    categorySlug: "vetements-0-12m",
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=800",
    gallery: [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=800",
    ],
    description: "Un ensemble craquant composé d'une barboteuse à boutons en bois naturel et de son petit bonnet assorti.",
    features: [
      "Maille côtelée ultra respirante et souple",
      "Pressions à l'entrejambe pour un change facile",
      "Sans étiquettes irritantes à l'intérieur",
    ],
    ageGroup: "0-12 mois",
    rating: 4.8,
    reviewsCount: 24,
    colors: [
      { name: "Bleu Ciel", hex: "#8EBEEC" },
      { name: "Rose Poudré", hex: "#F7B5CD" },
    ],
    sizes: ["1 mois", "3 mois", "6 mois", "12 mois"],
    inStock: true,
    isBestSeller: true,
    isNew: true,
  },
  {
    id: "prod-3",
    slug: "doudou-lapin-peluche-apaisante",
    name: "Doudou Lapin Peluche Apaisante",
    price: 14.99,
    category: "Éveil & Doudous",
    categorySlug: "eveil-et-doudous",
    image: "https://images.unsplash.com/photo-1566454544259-f4b94c3d758c?auto=format&fit=crop&q=80&w=800",
    gallery: [
      "https://images.unsplash.com/photo-1566454544259-f4b94c3d758c?auto=format&fit=crop&q=80&w=800",
    ],
    description: "Le compagnon inséparable de bébé avec ses longues oreilles faciles à attraper par les petites mains.",
    features: [
      "Velours de coton ultra doux",
      "Lavable facilement sans déformation",
      "Conforme aux normes européennes EN71 (sécurité bébé)",
    ],
    ageGroup: "Dès la naissance",
    rating: 5.0,
    reviewsCount: 52,
    colors: [
      { name: "Blanc Crème", hex: "#FDFBF9" },
      { name: "Rose Guimauve", hex: "#F7B5CD" },
      { name: "Bleu Nuage", hex: "#8EBEEC" },
    ],
    sizes: ["Taille Unique (28 cm)"],
    inStock: true,
    isBestSeller: true,
    isNew: false,
  },
  {
    id: "prod-4",
    slug: "coffret-vaisselle-silicone-bebe",
    name: "Coffret Repas Silicone Antidérapant",
    price: 22.99,
    compareAtPrice: 29.99,
    category: "Repas & Bavoirs",
    categorySlug: "repas-et-bavoirs",
    image: "https://images.unsplash.com/photo-1584839617966-2e840e6ebf5d?auto=format&fit=crop&q=80&w=800",
    gallery: [
      "https://images.unsplash.com/photo-1584839617966-2e840e6ebf5d?auto=format&fit=crop&q=80&w=800",
    ],
    description: "Kit complet pour la diversification alimentaire : assiette à ventouse, cuillère ergonomique et bavoir récupérateur.",
    features: [
      "100% Silicone alimentaire de qualité médicale sans BPA",
      "Ventouse anti-renversement ultra puissante",
      "Passe au lave-vaisselle et micro-ondes (-40°C à +220°C)",
    ],
    ageGroup: "4-24 mois",
    rating: 4.7,
    reviewsCount: 19,
    colors: [
      { name: "Menthe Pastel", hex: "#A8DDC5" },
      { name: "Rose Doux", hex: "#F7B5CD" },
      { name: "Bleu Ciel", hex: "#8EBEEC" },
    ],
    sizes: ["Kit Complet 4 pièces"],
    inStock: true,
    isBestSeller: false,
    isNew: true,
  },
  {
    id: "prod-5",
    slug: "lot-3-bodys-croises-bio",
    name: "Lot de 3 Bodys Croisés Coton Bio",
    price: 18.99,
    compareAtPrice: 24.99,
    category: "Vêtements 0-12m",
    categorySlug: "vetements-0-12m",
    image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=800",
    gallery: [
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=800",
    ],
    description: "Ouverture cache-cœur sur le devant pour habiller bébé sans lui passer le vêtement par la tête.",
    features: [
      "Pur coton peigné extra-doux",
      "Boutons pressions sans nickel",
      "Couleurs pastels tendres et apaisantes",
    ],
    ageGroup: "0-6 mois",
    rating: 4.9,
    reviewsCount: 41,
    colors: [
      { name: "Mix Pastel (Bleu, Rose, Crème)", hex: "#8EBEEC" },
    ],
    sizes: ["Naissance", "1 mois", "3 mois", "6 mois"],
    inStock: true,
    isBestSeller: true,
    isNew: false,
  },
  {
    id: "prod-6",
    slug: "hochet-anneau-dentition-bois-coton",
    name: "Hochet & Anneau de Dentition Lapinou",
    price: 9.99,
    category: "Éveil & Doudous",
    categorySlug: "eveil-et-doudous",
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&q=80&w=800",
    gallery: [
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&q=80&w=800",
    ],
    description: "Soulage les gencives douloureuses de bébé tout en stimulant ses sens grâce au bruit doux du hochet.",
    features: [
      "Bois de hêtre naturel non traité",
      "Oreilles en mousseline de coton biologique",
      "Facile à saisir",
    ],
    ageGroup: "3-12 mois",
    rating: 4.9,
    reviewsCount: 16,
    colors: [
      { name: "Vert Sauge", hex: "#A8DDC5" },
      { name: "Rose Pâle", hex: "#F7B5CD" },
    ],
    sizes: ["Taille Unique"],
    inStock: true,
    isBestSeller: false,
    isNew: false,
  },
];
