
import { stades } from "./stades";

export interface Restaurant {
  id: string;
  nom: string;
  description: string;
  image: string;
  prix: string;
  cuisine: string;
  distance: string;
  ville: string;
  stadeId: string;
  noteClient?: number;
}

export const restaurants: Restaurant[] = [
  {
    id: "restaurant-la-sqala",
    nom: "La Sqala",
    description: "Restaurant traditionnel marocain situé dans une ancienne forteresse portugaise avec un jardin paisible",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    prix: "150-300 DH",
    cuisine: "Marocaine",
    distance: "2 km",
    ville: "Casablanca",
    stadeId: "complexe-sportif-mohammed-v",
    noteClient: 4.6
  },
  {
    id: "restaurant-dar-dada",
    nom: "Dar Dada",
    description: "Restaurant familial servant une cuisine marocaine authentique dans un cadre chaleureux",
    image: "https://images.unsplash.com/photo-1600335895229-6e75511892c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    prix: "100-200 DH",
    cuisine: "Marocaine",
    distance: "1.5 km",
    ville: "Casablanca",
    stadeId: "complexe-sportif-mohammed-v",
    noteClient: 4.3
  },
  {
    id: "restaurant-le-rouget",
    nom: "Le Rouget de l'Isle",
    description: "Restaurant de fruits de mer et poissons frais avec vue panoramique sur l'océan",
    image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1071&q=80",
    prix: "200-500 DH",
    cuisine: "Fruits de mer",
    distance: "3 km",
    ville: "Casablanca",
    stadeId: "complexe-sportif-mohammed-v",
    noteClient: 4.7
  },
  {
    id: "restaurant-al-mounia",
    nom: "Al Mounia",
    description: "Restaurant traditionnel proposant des plats marocains authentiques et des tajines savoureux",
    image: "https://images.unsplash.com/photo-1530990457142-bb18a441c52b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    prix: "150-300 DH",
    cuisine: "Marocaine",
    distance: "1 km",
    ville: "Rabat",
    stadeId: "stade-moulay-abdellah",
    noteClient: 4.5
  },
  {
    id: "restaurant-dar-naji",
    nom: "Dar Naji",
    description: "Restaurant chaleureux proposant des spécialités marocaines dans un cadre traditionnel",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    prix: "120-250 DH",
    cuisine: "Marocaine",
    distance: "1.8 km",
    ville: "Rabat",
    stadeId: "stade-moulay-abdellah",
    noteClient: 4.4
  },
  {
    id: "restaurant-le-dhow",
    nom: "Le Dhow",
    description: "Restaurant flottant sur un bateau traditionnel avec vue sur le fleuve Bouregreg",
    image: "https://images.unsplash.com/photo-1564758866811-4d92f84ebe4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    prix: "200-400 DH",
    cuisine: "Fusion",
    distance: "3.5 km",
    ville: "Rabat",
    stadeId: "stade-moulay-abdellah",
    noteClient: 4.8
  },
  {
    id: "restaurant-pepe-nero",
    nom: "Pepe Nero",
    description: "Restaurant italien-marocain situé dans un riad avec terrasse proposant une cuisine raffinée",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    prix: "180-350 DH",
    cuisine: "Italienne/Marocaine",
    distance: "1.5 km",
    ville: "Marrakech",
    stadeId: "stade-de-marrakech",
    noteClient: 4.6
  },
  {
    id: "restaurant-al-fassia",
    nom: "Al Fassia",
    description: "Restaurant traditionnel marocain tenu par des femmes, réputé pour ses plats authentiques",
    image: "https://images.unsplash.com/photo-1508424757105-b6d5ad9329d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
    prix: "200-400 DH",
    cuisine: "Marocaine",
    distance: "2.2 km",
    ville: "Marrakech",
    stadeId: "stade-de-marrakech",
    noteClient: 4.7
  },
  {
    id: "restaurant-palais-jad",
    nom: "Palais Jad Mahal",
    description: "Restaurant-lounge avec spectacles live proposant une cuisine internationale et marocaine",
    image: "https://images.unsplash.com/photo-1595436252086-7496fb8118bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    prix: "250-500 DH",
    cuisine: "Internationale",
    distance: "3 km",
    ville: "Marrakech",
    stadeId: "stade-de-marrakech",
    noteClient: 4.5
  },
  {
    id: "restaurant-la-table-du-palais",
    nom: "La Table du Palais",
    description: "Restaurant gastronomique situé dans un palais historique avec ambiance traditionnelle",
    image: "https://images.unsplash.com/photo-1585518419759-7fe2e0fbf8a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80",
    prix: "250-500 DH",
    cuisine: "Marocaine gastronomique",
    distance: "2.5 km",
    ville: "Marrakech",
    stadeId: "stade-de-marrakech",
    noteClient: 4.8
  },
  {
    id: "restaurant-la-maison-arabe",
    nom: "La Maison Arabe",
    description: "Restaurant légendaire avec cours de cuisine, proposant des plats raffinés dans un cadre élégant",
    image: "https://images.unsplash.com/photo-1605651202774-7d231530766e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    prix: "300-600 DH",
    cuisine: "Marocaine raffinée",
    distance: "3.5 km",
    ville: "Marrakech",
    stadeId: "stade-de-marrakech",
    noteClient: 4.9
  },
  {
    id: "restaurant-mosaik",
    nom: "Mosaik",
    description: "Restaurant chaleureux proposant une cuisine marocaine authentique dans un cadre décontracté",
    image: "https://images.unsplash.com/photo-1562158074-d63792467f42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    prix: "120-250 DH",
    cuisine: "Marocaine",
    distance: "1.2 km",
    ville: "Tanger",
    stadeId: "stade-ibn-batouta",
    noteClient: 4.3
  },
  {
    id: "restaurant-el-tangerino",
    nom: "El Tangerino",
    description: "Restaurant avec vue sur la mer proposant des fruits de mer frais et spécialités locales",
    image: "https://images.unsplash.com/photo-1594041680839-c0908da0294d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    prix: "150-300 DH",
    cuisine: "Poissons et fruits de mer",
    distance: "2 km",
    ville: "Tanger",
    stadeId: "stade-ibn-batouta",
    noteClient: 4.6
  },
  {
    id: "restaurant-hamadi",
    nom: "Hamadi",
    description: "Restaurant traditionnel servant des grillades et tajines dans un cadre authentique",
    image: "https://images.unsplash.com/photo-1519690889869-e705e59f72e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    prix: "100-200 DH",
    cuisine: "Marocaine traditionnelle",
    distance: "1.5 km",
    ville: "Tanger",
    stadeId: "stade-ibn-batouta",
    noteClient: 4.4
  },
  {
    id: "restaurant-nord-pinus",
    nom: "Nord-Pinus Tanger",
    description: "Restaurant élégant situé sur une terrasse panoramique avec vue sur le détroit de Gibraltar",
    image: "https://images.unsplash.com/photo-1515668236457-83c3b8764839?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    prix: "250-450 DH",
    cuisine: "Méditerranéenne",
    distance: "3.5 km",
    ville: "Tanger",
    stadeId: "stade-ibn-batouta",
    noteClient: 4.7
  },
  {
    id: "restaurant-la-colombe-blanche",
    nom: "La Colombe Blanche",
    description: "Restaurant familial servant des recettes authentiques de Fès dans un décor traditionnel",
    image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    prix: "120-250 DH",
    cuisine: "Marocaine",
    distance: "1.2 km",
    ville: "Fès",
    stadeId: "complexe-sportif-de-fes",
    noteClient: 4.5
  },
  {
    id: "restaurant-dar-hatim",
    nom: "Dar Hatim",
    description: "Restaurant familial situé dans un riad traditionnel proposant des plats faits maison",
    image: "https://images.unsplash.com/photo-1484659619207-9165d119dafe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    prix: "150-250 DH",
    cuisine: "Marocaine traditionnelle",
    distance: "1.8 km",
    ville: "Fès",
    stadeId: "complexe-sportif-de-fes",
    noteClient: 4.8
  },
  {
    id: "restaurant-nur",
    nom: "Nur",
    description: "Restaurant moderne proposant une cuisine marocaine réinventée avec des ingrédients locaux",
    image: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
    prix: "250-450 DH",
    cuisine: "Nouvelle cuisine marocaine",
    distance: "2.5 km",
    ville: "Fès",
    stadeId: "complexe-sportif-de-fes",
    noteClient: 4.7
  },
  {
    id: "restaurant-cafe-clock",
    nom: "Café Clock",
    description: "Restaurant-café culturel proposant des plats traditionnels revisités et des événements",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    prix: "100-200 DH",
    cuisine: "Fusion marocaine",
    distance: "3 km",
    ville: "Fès",
    stadeId: "complexe-sportif-de-fes",
    noteClient: 4.6
  },
  {
    id: "restaurant-les-jardins-de-villa",
    nom: "Les Jardins de Villa",
    description: "Restaurant avec jardin servant une cuisine marocaine et internationale de qualité",
    image: "https://images.unsplash.com/photo-1602522042670-159c8eca42ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    prix: "150-300 DH",
    cuisine: "Marocaine/Internationale",
    distance: "2 km",
    ville: "Agadir",
    stadeId: "stade-dadrar",
    noteClient: 4.5
  },
  {
    id: "restaurant-le-jardin-dagathe",
    nom: "Le Jardin d'Agathe",
    description: "Restaurant avec terrasse offrant une cuisine méditerranéenne dans un cadre verdoyant",
    image: "https://images.unsplash.com/photo-1529417305485-480f579e7578?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1109&q=80",
    prix: "180-350 DH",
    cuisine: "Méditerranéenne",
    distance: "1.5 km",
    ville: "Agadir",
    stadeId: "stade-dadrar",
    noteClient: 4.6
  },
  {
    id: "restaurant-la-scala",
    nom: "La Scala",
    description: "Restaurant de fruits de mer avec vue panoramique sur la baie d'Agadir",
    image: "https://images.unsplash.com/photo-1509391487004-772c4c4f22e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    prix: "200-400 DH",
    cuisine: "Fruits de mer",
    distance: "3 km",
    ville: "Agadir",
    stadeId: "stade-dadrar",
    noteClient: 4.7
  },
  {
    id: "restaurant-le-petit-pecheur",
    nom: "Le Petit Pêcheur",
    description: "Restaurant simple proposant des poissons frais du jour et fruits de mer à prix abordable",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    prix: "120-250 DH",
    cuisine: "Poissons",
    distance: "2.2 km",
    ville: "Agadir",
    stadeId: "stade-dadrar",
    noteClient: 4.4
  },
  {
    id: "restaurant-dar-essalam",
    nom: "Dar Essalam",
    description: "Restaurant traditionnel dans un riad où a été tourné le film Hitchcock 'L'Homme qui en savait trop'",
    image: "https://images.unsplash.com/photo-1605651202774-7d231530766e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    prix: "200-400 DH",
    cuisine: "Marocaine",
    distance: "4 km",
    ville: "Larache",
    stadeId: "stade-municipal-de-larache",
    noteClient: 4.7
  },
  {
    id: "restaurant-porto-fino",
    nom: "Porto Fino",
    description: "Restaurant italien proposant des pizzas, pâtes et fruits de mer dans un cadre élégant",
    image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    prix: "150-300 DH",
    cuisine: "Italienne",
    distance: "2 km",
    ville: "Larache",
    stadeId: "stade-municipal-de-larache",
    noteClient: 4.5
  },
  {
    id: "restaurant-la-plage",
    nom: "La Plage",
    description: "Restaurant en bord de mer proposant des poissons grillés et fruits de mer frais",
    image: "https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    prix: "150-250 DH",
    cuisine: "Poissons et fruits de mer",
    distance: "3 km",
    ville: "Larache",
    stadeId: "stade-municipal-de-larache",
    noteClient: 4.6
  }
];
