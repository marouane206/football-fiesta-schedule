export interface Hotel {
  id: string;
  nom: string;
  ville: string;
  etoiles: number;
  description: string;
  prix: string;
  distance: string;
  adresse?: string;
  telephone?: string;
  image: string;
  stadeId: string;
  wifi?: boolean;
  parking?: boolean;
  piscine?: boolean;
}

export const hotels: Hotel[] = [
  {
    id: "hotel-1",
    nom: "Luxury Grand Hotel",
    ville: "Marrakech",
    etoiles: 5,
    description: "Un hôtel de luxe avec des vues imprenables sur les montagnes de l'Atlas.",
    prix: "2500 DH",
    distance: "5 km",
    adresse: "Avenue Mohammed VI, Marrakech",
    telephone: "+212 524 444444",
    image: "https://images.unsplash.com/photo-1566073771259-6a690aa3dc54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    stadeId: "stade-marrakech",
    wifi: true,
    parking: true,
    piscine: true,
  },
  {
    id: "hotel-2",
    nom: "Riad Oasis",
    ville: "Marrakech",
    etoiles: 4,
    description: "Un riad traditionnel offrant une expérience authentique au cœur de la médina.",
    prix: "1200 DH",
    distance: "2 km",
    adresse: "Derb Fhal Chidmi, Marrakech",
    telephone: "+212 524 333333",
    image: "https://images.unsplash.com/photo-1611892489614-1372c46eebc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    stadeId: "stade-marrakech",
    wifi: true,
    parking: false,
    piscine: false,
  },
  {
    id: "hotel-3",
    nom: "Atlas Golf Resort",
    ville: "Marrakech",
    etoiles: 4,
    description: "Un complexe hôtelier de luxe avec un parcours de golf de championnat.",
    prix: "1800 DH",
    distance: "8 km",
    adresse: "Route d'Amizmiz, Marrakech",
    telephone: "+212 524 222222",
    image: "https://images.unsplash.com/photo-1598928536118-63227759c95d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    stadeId: "stade-marrakech",
    wifi: true,
    parking: true,
    piscine: true,
  },
  {
    id: "hotel-4",
    nom: "Hotel Casablanca",
    ville: "Casablanca",
    etoiles: 4,
    description: "Situé au cœur de Casablanca, cet hôtel offre un accès facile aux principales attractions de la ville.",
    prix: "1600 DH",
    distance: "10 km",
    adresse: "Boulevard Mohammed V, Casablanca",
    telephone: "+212 522 555555",
    image: "https://images.unsplash.com/photo-1616364465248-195c13789752?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    stadeId: "stade-casablanca",
    wifi: true,
    parking: true,
    piscine: true,
  },
  {
    id: "hotel-5",
    nom: "Kenzi Tower Hotel",
    ville: "Casablanca",
    etoiles: 5,
    description: "Offrant une vue panoramique sur Casablanca, cet hôtel de luxe est parfait pour les voyageurs d'affaires et de loisirs.",
    prix: "2800 DH",
    distance: "12 km",
    adresse: "Twin Center, Casablanca",
    telephone: "+212 522 777777",
    image: "https://images.unsplash.com/photo-1616364461854-014ca59943ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdGVsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    stadeId: "stade-casablanca",
    wifi: true,
    parking: true,
    piscine: true,
  },
  {
    id: "hotel-6",
    nom: "Hyatt Regency",
    ville: "Casablanca",
    etoiles: 5,
    description: "Situé à quelques pas de la plage, cet hôtel offre un mélange parfait de luxe et de commodité.",
    prix: "2200 DH",
    distance: "15 km",
    adresse: "Place des Nations Unies, Casablanca",
    telephone: "+212 522 999999",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdGVsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    stadeId: "stade-casablanca",
    wifi: true,
    parking: true,
    piscine: true,
  },
];
