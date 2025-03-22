
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { format, parseISO } from 'date-fns';
import { fr } from 'date-fns/locale';
import { matches } from '@/data/matches';
import { equipes } from '@/data/equipes';
import { stades } from '@/data/stades';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Trophy, Calendar, MapPin, ArrowLeft, 
  Users, Flag, Info, User, Shield, Crown
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import StadeHotels from '@/components/StadeHotels';
import { hotels } from '@/data/hotels';
import StadeRestaurants from '@/components/StadeRestaurants';
import { restaurants } from '@/data/restaurants';

// Données fictives sur les joueurs des équipes
interface Joueur {
  id: string;
  nom: string;
  poste: string;
  numero: number;
  age: number;
  club: string;
  pays: string;
  image: string;
  capitaine?: boolean;
}

// Données fictives sur les pays
interface PaysInfo {
  capitale: string;
  population: string;
  superficie: string;
  langue: string;
  monnaie: string;
  gouvernement: string;
  dirigeant: string;
  independance: string;
  description: string;
}

// Données fictives sur les joueurs (à enrichir si nécessaire)
const joueursParEquipe: Record<string, Joueur[]> = {
  "maroc": [
    {
      id: "1",
      nom: "Yassine Bounou",
      poste: "Gardien",
      numero: 1,
      age: 32,
      club: "Al-Hilal",
      pays: "Maroc",
      image: "https://img.a.transfermarkt.technology/portrait/header/234781-1662713727.jpg",
    },
    {
      id: "2",
      nom: "Achraf Hakimi",
      poste: "Défenseur",
      numero: 2,
      age: 24,
      club: "Paris Saint-Germain",
      pays: "Maroc",
      image: "https://img.a.transfermarkt.technology/portrait/header/398073-1606236053.jpg",
    },
    {
      id: "3",
      nom: "Romain Saïss",
      poste: "Défenseur",
      numero: 6,
      age: 33,
      club: "Al-Shabab",
      pays: "Maroc",
      image: "https://img.a.transfermarkt.technology/portrait/header/149513-1662713857.jpg",
      capitaine: true
    },
    {
      id: "4",
      nom: "Sofyan Amrabat",
      poste: "Milieu",
      numero: 4,
      age: 26,
      club: "Manchester United",
      pays: "Maroc",
      image: "https://img.a.transfermarkt.technology/portrait/header/398450-1627290177.jpg",
    },
    {
      id: "5",
      nom: "Hakim Ziyech",
      poste: "Ailier",
      numero: 7,
      age: 30,
      club: "Galatasaray",
      pays: "Maroc",
      image: "https://img.a.transfermarkt.technology/portrait/header/217111-1617175854.jpg",
    },
    {
      id: "6",
      nom: "Youssef En-Nesyri",
      poste: "Attaquant",
      numero: 19,
      age: 26,
      club: "Séville FC",
      pays: "Maroc",
      image: "https://img.a.transfermarkt.technology/portrait/header/396886-1662714099.jpg",
    }
  ],
  "senegal": [
    {
      id: "1",
      nom: "Édouard Mendy",
      poste: "Gardien",
      numero: 16,
      age: 31,
      club: "Al-Ahli",
      pays: "Sénégal",
      image: "https://img.a.transfermarkt.technology/portrait/header/442531-1661505267.jpg",
    },
    {
      id: "2",
      nom: "Kalidou Koulibaly",
      poste: "Défenseur",
      numero: 3,
      age: 32,
      club: "Al-Hilal",
      pays: "Sénégal",
      image: "https://img.a.transfermarkt.technology/portrait/header/93128-1657729486.jpg",
      capitaine: true
    },
    {
      id: "3",
      nom: "Sadio Mané",
      poste: "Attaquant",
      numero: 10,
      age: 31,
      club: "Al-Nassr",
      pays: "Sénégal",
      image: "https://img.a.transfermarkt.technology/portrait/header/200512-1661505495.jpg",
    }
  ],
  "algerie": [
    {
      id: "1",
      nom: "Riyad Mahrez",
      poste: "Ailier",
      numero: 7,
      age: 32,
      club: "Al-Ahli",
      pays: "Algérie",
      image: "https://img.a.transfermarkt.technology/portrait/header/171424-1662640326.jpg",
      capitaine: true
    },
    {
      id: "2",
      nom: "Ismaël Bennacer",
      poste: "Milieu",
      numero: 8,
      age: 25,
      club: "AC Milan",
      pays: "Algérie",
      image: "https://img.a.transfermarkt.technology/portrait/header/351816-1656920182.jpg",
    },
    {
      id: "3",
      nom: "Youcef Atal",
      poste: "Défenseur",
      numero: 20,
      age: 27,
      club: "Adana Demirspor",
      pays: "Algérie",
      image: "https://img.a.transfermarkt.technology/portrait/header/372025-1662635989.jpg",
    }
  ],
  "egypte": [
    {
      id: "1",
      nom: "Mohamed Salah",
      poste: "Ailier",
      numero: 10,
      age: 31,
      club: "Liverpool FC",
      pays: "Égypte",
      image: "https://img.a.transfermarkt.technology/portrait/header/148455-1546611604.jpg",
      capitaine: true
    },
    {
      id: "2",
      nom: "Mohamed Elneny",
      poste: "Milieu",
      numero: 17,
      age: 31,
      club: "Arsenal FC",
      pays: "Égypte",
      image: "https://img.a.transfermarkt.technology/portrait/header/160438-1663941817.jpg",
    },
    {
      id: "3",
      nom: "Ahmed Hegazi",
      poste: "Défenseur",
      numero: 6,
      age: 32,
      club: "Al-Ittihad",
      pays: "Égypte",
      image: "https://img.a.transfermarkt.technology/portrait/header/141593-1538989334.jpg",
    }
  ],
  "nigeria": [
    {
      id: "1",
      nom: "Victor Osimhen",
      poste: "Attaquant",
      numero: 9,
      age: 24,
      club: "SSC Napoli",
      pays: "Nigeria",
      image: "https://img.a.transfermarkt.technology/portrait/header/401923-1661450862.jpg",
    },
    {
      id: "2",
      nom: "Wilfred Ndidi",
      poste: "Milieu",
      numero: 4,
      age: 26,
      club: "Leicester City",
      pays: "Nigeria",
      image: "https://img.a.transfermarkt.technology/portrait/header/340324-1630493817.jpg",
    },
    {
      id: "3",
      nom: "William Troost-Ekong",
      poste: "Défenseur",
      numero: 5,
      age: 30,
      club: "PAOK Salonique",
      pays: "Nigeria",
      image: "https://img.a.transfermarkt.technology/portrait/header/238656-1641461462.jpg",
      capitaine: true
    }
  ],
  "cote-ivoire": [
    {
      id: "1",
      nom: "Sébastien Haller",
      poste: "Attaquant",
      numero: 22,
      age: 29,
      club: "Borussia Dortmund",
      pays: "Côte d'Ivoire",
      image: "https://img.a.transfermarkt.technology/portrait/header/181375-1669191583.jpg",
    },
    {
      id: "2",
      nom: "Franck Kessié",
      poste: "Milieu",
      numero: 8,
      age: 26,
      club: "Al-Ahli",
      pays: "Côte d'Ivoire",
      image: "https://img.a.transfermarkt.technology/portrait/header/294808-1673519458.jpg",
    },
    {
      id: "3",
      nom: "Serge Aurier",
      poste: "Défenseur",
      numero: 17,
      age: 30,
      club: "Nottingham Forest",
      pays: "Côte d'Ivoire",
      image: "https://img.a.transfermarkt.technology/portrait/header/127032-1663942153.jpg",
      capitaine: true
    }
  ]
};

// Données fictives sur les pays
const paysInfo: Record<string, PaysInfo> = {
  "maroc": {
    capitale: "Rabat",
    population: "37,3 millions",
    superficie: "710 850 km²",
    langue: "Arabe, amazigh (berbère), français",
    monnaie: "Dirham marocain (MAD)",
    gouvernement: "Monarchie constitutionnelle",
    dirigeant: "Roi Mohammed VI",
    independance: "2 mars 1956 (de la France et de l'Espagne)",
    description: "Le Maroc est un pays d'Afrique du Nord au riche patrimoine culturel et historique. Son histoire remonte à plus de 1000 ans, avec des dynasties comme les Idrissides, les Almoravides et les Almohades. Le pays est connu pour ses magnifiques paysages, de l'Atlas aux côtes méditerranéennes et atlantiques, ainsi que pour sa cuisine, son artisanat et son hospitalité."
  },
  "senegal": {
    capitale: "Dakar",
    population: "16,7 millions",
    superficie: "196 722 km²",
    langue: "Français (officiel), wolof, pulaar, sérère",
    monnaie: "Franc CFA (XOF)",
    gouvernement: "République démocratique",
    dirigeant: "Président Bassirou Diomaye Faye",
    independance: "4 avril 1960 (de la France)",
    description: "Le Sénégal est reconnu pour sa stabilité politique et sa tradition démocratique. C'est un pays de l'Afrique de l'Ouest connu pour sa diversité culturelle, sa musique (notamment le mbalax), sa littérature et sa cuisine. Le pays abrite également des sites historiques importants comme l'île de Gorée et des réserves naturelles comme le Parc national du Niokolo-Koba."
  },
  "algerie": {
    capitale: "Alger",
    population: "44,7 millions",
    superficie: "2 381 741 km²",
    langue: "Arabe (officiel), tamazight (berbère), français",
    monnaie: "Dinar algérien (DZD)",
    gouvernement: "République démocratique populaire",
    dirigeant: "Président Abdelmadjid Tebboune",
    independance: "5 juillet 1962 (de la France)",
    description: "L'Algérie est le plus grand pays d'Afrique en superficie. Son histoire est marquée par diverses civilisations (berbères, phéniciennes, romaines, ottomanes) et par sa guerre d'indépendance contre la France. Le pays est riche en ressources naturelles, notamment en gaz et en pétrole. Son paysage varie des montagnes de l'Atlas au désert du Sahara, qui couvre une grande partie du territoire."
  },
  "egypte": {
    capitale: "Le Caire",
    population: "104,2 millions",
    superficie: "1 001 450 km²",
    langue: "Arabe (officiel)",
    monnaie: "Livre égyptienne (EGP)",
    gouvernement: "République",
    dirigeant: "Président Abdel Fattah al-Sissi",
    independance: "28 février 1922 (du Royaume-Uni)",
    description: "L'Égypte est le berceau de l'une des plus anciennes civilisations du monde, datant de plus de 5000 ans. Le pays est célèbre pour ses monuments anciens comme les pyramides de Gizeh et le Sphinx, ainsi que pour le Nil, le plus long fleuve du monde. La culture égyptienne a influencé de nombreuses civilisations au fil des siècles, et le pays continue d'être un important centre culturel et politique du Moyen-Orient."
  },
  "nigeria": {
    capitale: "Abuja",
    population: "218,5 millions",
    superficie: "923 768 km²",
    langue: "Anglais (officiel), yoruba, hausa, igbo",
    monnaie: "Naira (NGN)",
    gouvernement: "République fédérale",
    dirigeant: "Président Bola Tinubu",
    independance: "1er octobre 1960 (du Royaume-Uni)",
    description: "Le Nigeria est le pays le plus peuplé d'Afrique et possède une économie dynamique, principalement basée sur le pétrole. Sa culture est extrêmement diverse, avec plus de 250 groupes ethniques, chacun avec ses propres traditions. Le pays est connu pour sa littérature, son cinéma (Nollywood) et sa musique (afrobeat). Malgré ses défis, le Nigeria reste une puissance régionale importante en Afrique."
  },
  "cote-ivoire": {
    capitale: "Yamoussoukro (officielle), Abidjan (économique)",
    population: "26,4 millions",
    superficie: "322 463 km²",
    langue: "Français (officiel), dioula, baoulé, dan",
    monnaie: "Franc CFA (XOF)",
    gouvernement: "République présidentielle",
    dirigeant: "Président Alassane Ouattara",
    independance: "7 août 1960 (de la France)",
    description: "La Côte d'Ivoire est l'un des principaux producteurs de cacao au monde et possède une économie diversifiée. Après des années d'instabilité politique, le pays connaît aujourd'hui une période de croissance économique. La Côte d'Ivoire est connue pour sa riche tradition musicale, ses danses traditionnelles et son artisanat. Le pays possède également des parcs nationaux abritant une faune et une flore diversifiées."
  }
};

const MatchDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("equipes");
  
  const match = matches.find(m => m.id === id);
  
  if (!match) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <div className="container mx-auto px-6 md:px-10 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Match non trouvé</h1>
          <Button onClick={() => navigate('/matches')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour aux matches
          </Button>
        </div>
        <Footer />
      </div>
    );
  }
  
  const equipe1 = equipes.find(e => e.id === match.equipe1);
  const equipe2 = equipes.find(e => e.id === match.equipe2);
  const stade = stades.find(s => s.id === match.stade);
  
  const matchDate = parseISO(match.date);
  const formattedDate = format(matchDate, 'dd MMMM yyyy', { locale: fr });
  const jour = format(matchDate, 'EEEE', { locale: fr });
  
  const joueurs1 = equipe1 ? joueursParEquipe[equipe1.id] || [] : [];
  const joueurs2 = equipe2 ? joueursParEquipe[equipe2.id] || [] : [];
  
  const pays1Info = equipe1 ? paysInfo[equipe1.id] : undefined;
  const pays2Info = equipe2 ? paysInfo[equipe2.id] : undefined;
  
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <div className="pt-24 pb-8 bg-gradient-to-b from-caf-green/10 to-transparent">
        <div className="container mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <Button 
              variant="ghost" 
              className="flex items-center" 
              onClick={() => navigate('/matches')}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour aux matches
            </Button>
            
            <div className="flex items-center text-gray-600 dark:text-gray-300">
              <Calendar className="mr-2 h-4 w-4 text-caf-red" />
              <span className="text-sm font-medium capitalize">
                {jour}, {formattedDate} • {match.heure}
              </span>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-subtle p-6 md:p-10">
              <div className="text-center mb-6">
                <div className="text-sm text-caf-red font-medium mb-2">
                  {match.phase} {match.groupe ? `• Groupe ${match.groupe}` : ""}
                </div>
                <h1 className="text-2xl md:text-3xl font-bold">Match {match.id}</h1>
              </div>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
                <div className="flex flex-col items-center text-center">
                  {equipe1 ? (
                    <>
                      <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-gray-100 dark:border-gray-700 flex items-center justify-center bg-gray-50 dark:bg-gray-700 mb-3">
                        <img 
                          src={equipe1.drapeau} 
                          alt={equipe1.nom}
                          className="w-20 h-14 object-cover"
                        />
                      </div>
                      <div className="font-bold text-lg">{equipe1.nom}</div>
                      <div className="text-sm text-gray-500">{equipe1.confederation}</div>
                    </>
                  ) : (
                    <div className="font-bold text-lg">{match.equipe1}</div>
                  )}
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="text-2xl font-bold mb-2">VS</div>
                  {match.termine && (
                    <div className="flex space-x-2 text-lg font-bold">
                      <span>{match.score1}</span>
                      <span>-</span>
                      <span>{match.score2}</span>
                    </div>
                  )}
                </div>
                
                <div className="flex flex-col items-center text-center">
                  {equipe2 ? (
                    <>
                      <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-gray-100 dark:border-gray-700 flex items-center justify-center bg-gray-50 dark:bg-gray-700 mb-3">
                        <img 
                          src={equipe2.drapeau} 
                          alt={equipe2.nom}
                          className="w-20 h-14 object-cover"
                        />
                      </div>
                      <div className="font-bold text-lg">{equipe2.nom}</div>
                      <div className="text-sm text-gray-500">{equipe2.confederation}</div>
                    </>
                  ) : (
                    <div className="font-bold text-lg">{match.equipe2}</div>
                  )}
                </div>
              </div>
              
              {stade && (
                <div className="text-center border-t border-gray-100 dark:border-gray-700 pt-6">
                  <div className="flex items-center justify-center text-gray-600 dark:text-gray-300 mb-1">
                    <MapPin className="mr-2 h-4 w-4 text-caf-red" />
                    <span className="font-medium">{stade.nom}</span>
                  </div>
                  <div className="text-sm text-gray-500">
                    {stade.ville}, Maroc • Capacité: {stade.capacite.toLocaleString()} spectateurs
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <main className="flex-grow container mx-auto px-6 md:px-10 pb-16">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="mb-8">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="equipes" className="flex items-center">
                <Flag className="mr-2 h-4 w-4" />
                <span>Les équipes</span>
              </TabsTrigger>
              <TabsTrigger value="joueurs" className="flex items-center">
                <Users className="mr-2 h-4 w-4" />
                <span>Joueurs</span>
              </TabsTrigger>
              <TabsTrigger value="infos" className="flex items-center">
                <Info className="mr-2 h-4 w-4" />
                <span>Infos pays</span>
              </TabsTrigger>
              <TabsTrigger value="stade" className="flex items-center">
                <MapPin className="mr-2 h-4 w-4" />
                <span>Stade et hébergement</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="equipes">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {equipe1 && (
                    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-subtle">
                      <div className="h-1.5 bg-caf-green" />
                      <div className="p-6">
                        <div className="flex items-center space-x-4 mb-6">
                          <div className="w-20 h-14 overflow-hidden rounded-md border border-gray-100 dark:border-gray-700 flex items-center justify-center bg-gray-50 dark:bg-gray-700">
                            <img 
                              src={equipe1.drapeau} 
                              alt={equipe1.nom}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          
                          <div>
                            <h2 className="text-xl font-bold">{equipe1.nom}</h2>
                            <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                              <span>Groupe {equipe1.groupe}</span>
                              <span>•</span>
                              <span>Rang FIFA: {equipe1.rang}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600 dark:text-gray-300">Confédération:</span>
                            <span className="font-medium">{equipe1.confederation}</span>
                          </div>
                          
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600 dark:text-gray-300">Entraîneur:</span>
                            <span className="font-medium">{equipe1.entraineur}</span>
                          </div>
                          
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600 dark:text-gray-300">Victoires CAN:</span>
                            <span className="font-medium flex items-center">
                              {Array.from({ length: equipe1.palmares?.can || 0 }).map((_, i) => (
                                <Trophy key={i} size={14} className="text-caf-gold fill-caf-gold mr-1" />
                              ))}
                              {equipe1.palmares?.can || 0}
                            </span>
                          </div>
                          
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600 dark:text-gray-300">Meilleur résultat:</span>
                            <span className="font-medium">{equipe1.palmares?.meilleurResultat}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {equipe2 && (
                    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-subtle">
                      <div className="h-1.5 bg-caf-red" />
                      <div className="p-6">
                        <div className="flex items-center space-x-4 mb-6">
                          <div className="w-20 h-14 overflow-hidden rounded-md border border-gray-100 dark:border-gray-700 flex items-center justify-center bg-gray-50 dark:bg-gray-700">
                            <img 
                              src={equipe2.drapeau} 
                              alt={equipe2.nom}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          
                          <div>
                            <h2 className="text-xl font-bold">{equipe2.nom}</h2>
                            <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                              <span>Groupe {equipe2.groupe}</span>
                              <span>•</span>
                              <span>Rang FIFA: {equipe2.rang}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600 dark:text-gray-300">Confédération:</span>
                            <span className="font-medium">{equipe2.confederation}</span>
                          </div>
                          
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600 dark:text-gray-300">Entraîneur:</span>
                            <span className="font-medium">{equipe2.entraineur}</span>
                          </div>
                          
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600 dark:text-gray-300">Victoires CAN:</span>
                            <span className="font-medium flex items-center">
                              {Array.from({ length: equipe2.palmares?.can || 0 }).map((_, i) => (
                                <Trophy key={i} size={14} className="text-caf-gold fill-caf-gold mr-1" />
                              ))}
                              {equipe2.palmares?.can || 0}
                            </span>
                          </div>
                          
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600 dark:text-gray-300">Meilleur résultat:</span>
                            <span className="font-medium">{equipe2.palmares?.meilleurResultat}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </TabsContent>
            
            <TabsContent value="joueurs">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {equipe1 && (
                    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-subtle p-6">
                      <div className="flex items-center space-x-2 mb-6">
                        <img 
                          src={equipe1.drapeau} 
                          alt={equipe1.nom}
                          className="w-8 h-5 object-cover rounded"
                        />
                        <h2 className="text-xl font-bold">{equipe1.nom}</h2>
                      </div>
                      
                      {joueurs1.length > 0 ? (
                        <div className="space-y-4">
                          {joueurs1.map(joueur => (
                            <div 
                              key={joueur.id} 
                              className="flex items-center space-x-4 border-b border-gray-100 dark:border-gray-700 pb-4"
                            >
                              <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-700">
                                <img 
                                  src={joueur.image} 
                                  alt={joueur.nom}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center">
                                  <span className="font-medium">{joueur.nom}</span>
                                  {joueur.capitaine && (
                                    <span className="ml-2 text-xs bg-caf-gold text-white px-2 py-0.5 rounded-full">
                                      Capitaine
                                    </span>
                                  )}
                                </div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                  {joueur.poste} • {joueur.club} • {joueur.age} ans
                                </div>
                              </div>
                              <div className="w-6 h-6 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-xs font-bold">
                                {joueur.numero}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-8 text-gray-500">
                          Aucune information disponible sur les joueurs
                        </div>
                      )}
                    </div>
                  )}
                  
                  {equipe2 && (
                    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-subtle p-6">
                      <div className="flex items-center space-x-2 mb-6">
                        <img 
                          src={equipe2.drapeau} 
                          alt={equipe2.nom}
                          className="w-8 h-5 object-cover rounded"
                        />
                        <h2 className="text-xl font-bold">{equipe2.nom}</h2>
                      </div>
                      
                      {joueurs2.length > 0 ? (
                        <div className="space-y-4">
                          {joueurs2.map(joueur => (
                            <div 
                              key={joueur.id} 
                              className="flex items-center space-x-4 border-b border-gray-100 dark:border-gray-700 pb-4"
                            >
                              <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-700">
                                <img 
                                  src={joueur.image} 
                                  alt={joueur.nom}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center">
                                  <span className="font-medium">{joueur.nom}</span>
                                  {joueur.capitaine && (
                                    <span className="ml-2 text-xs bg-caf-gold text-white px-2 py-0.5 rounded-full">
                                      Capitaine
                                    </span>
                                  )}
                                </div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                  {joueur.poste} • {joueur.club} • {joueur.age} ans
                                </div>
                              </div>
                              <div className="w-6 h-6 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-xs font-bold">
                                {joueur.numero}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-8 text-gray-500">
                          Aucune information disponible sur les joueurs
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            </TabsContent>
            
            <TabsContent value="infos">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {equipe1 && pays1Info && (
                    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-subtle">
                      <div className="h-32 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 relative">
                        <img 
                          src={equipe1.drapeau} 
                          alt={equipe1.nom}
                          className="absolute inset-0 w-full h-full object-cover opacity-30"
                        />
                        <div className="absolute bottom-4 left-6 flex items-center space-x-3">
                          <img 
                            src={equipe1.drapeau} 
                            alt={equipe1.nom}
                            className="w-10 h-7 object-cover rounded shadow-md"
                          />
                          <h2 className="text-2xl font-bold">{equipe1.nom}</h2>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Capitale</div>
                            <div className="font-medium">{pays1Info.capitale}</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Population</div>
                            <div className="font-medium">{pays1Info.population}</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Superficie</div>
                            <div className="font-medium">{pays1Info.superficie}</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Langue(s)</div>
                            <div className="font-medium">{pays1Info.langue}</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Monnaie</div>
                            <div className="font-medium">{pays1Info.monnaie}</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Indépendance</div>
                            <div className="font-medium">{pays1Info.independance}</div>
                          </div>
                        </div>
                        
                        <div className="border-t border-gray-100 dark:border-gray-700 pt-4">
                          <div className="flex items-center space-x-2 mb-2">
                            <Crown className="h-4 w-4 text-caf-gold" />
                            <div className="font-medium">{pays1Info.gouvernement}</div>
                          </div>
                          <div className="flex items-center space-x-2 mb-4">
                            <User className="h-4 w-4 text-caf-red" />
                            <div className="font-medium">{pays1Info.dirigeant}</div>
                          </div>
                          
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            {pays1Info.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {equipe2 && pays2Info && (
                    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-subtle">
                      <div className="h-32 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 relative">
                        <img 
                          src={equipe2.drapeau} 
                          alt={equipe2.nom}
                          className="absolute inset-0 w-full h-full object-cover opacity-30"
                        />
                        <div className="absolute bottom-4 left-6 flex items-center space-x-3">
                          <img 
                            src={equipe2.drapeau} 
                            alt={equipe2.nom}
                            className="w-10 h-7 object-cover rounded shadow-md"
                          />
                          <h2 className="text-2xl font-bold">{equipe2.nom}</h2>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Capitale</div>
                            <div className="font-medium">{pays2Info.capitale}</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Population</div>
                            <div className="font-medium">{pays2Info.population}</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Superficie</div>
                            <div className="font-medium">{pays2Info.superficie}</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Langue(s)</div>
                            <div className="font-medium">{pays2Info.langue}</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Monnaie</div>
                            <div className="font-medium">{pays2Info.monnaie}</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Indépendance</div>
                            <div className="font-medium">{pays2Info.independance}</div>
                          </div>
                        </div>
                        
                        <div className="border-t border-gray-100 dark:border-gray-700 pt-4">
                          <div className="flex items-center space-x-2 mb-2">
                            <Crown className="h-4 w-4 text-caf-gold" />
                            <div className="font-medium">{pays2Info.gouvernement}</div>
                          </div>
                          <div className="flex items-center space-x-2 mb-4">
                            <User className="h-4 w-4 text-caf-red" />
                            <div className="font-medium">{pays2Info.dirigeant}</div>
                          </div>
                          
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            {pays2Info.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </TabsContent>
            
            <TabsContent value="stade">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {stade && (
                  <div className="space-y-10">
                    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-subtle">
                      <div className="relative aspect-video overflow-hidden">
                        <img 
                          src={stade.image} 
                          alt={stade.nom}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                          <div className="p-6 text-white">
                            <h2 className="text-2xl font-bold mb-1">{stade.nom}</h2>
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1" />
                              <span>{stade.ville}, Maroc</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                          <div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Capacité</div>
                            <div className="font-medium">{stade.capacite.toLocaleString()} spectateurs</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Année de construction</div>
                            <div className="font-medium">{stade.anneeConstruction}</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Nombre de matchs</div>
                            <div className="font-medium">
                              {matches.filter(m => m.stade === stade.id).length} matchs de la CAN 2025
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 dark:text-gray-300">
                          {stade.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Hôtels à proximité */}
                    <StadeHotels hotels={hotels} stadeId={stade.id} />
                    
                    {/* Restaurants à proximité */}
                    <StadeRestaurants restaurants={restaurants} stadeId={stade.id} />
                  </div>
                )}
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MatchDetails;
