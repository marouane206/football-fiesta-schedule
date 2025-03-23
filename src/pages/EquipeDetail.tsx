
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Trophy, Users, Flag, Globe, User, Calendar, Ruler, Weight, Building } from 'lucide-react';
import { equipes } from '@/data/equipes';
import { joueurs } from '@/data/joueurs';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { matches } from '@/data/matches';
import MatchCard from '@/components/MatchCard';

const EquipeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const equipe = equipes.find(e => e.id === id);
  
  const equipeMatches = matches.filter(match => 
    match.equipe1 === equipe?.id || match.equipe2 === equipe?.id
  );
  
  const equipeJoueurs = joueurs.filter(joueur => 
    joueur.equipId === equipe?.id
  );
  
  // Group players by position
  const gardiens = equipeJoueurs.filter(j => j.poste === "Gardien");
  const defenseurs = equipeJoueurs.filter(j => j.poste === "Défenseur");
  const milieux = equipeJoueurs.filter(j => j.poste === "Milieu");
  const attaquants = equipeJoueurs.filter(j => j.poste === "Attaquant");
  
  if (!equipe) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Équipe non trouvée</h1>
        <Link to="/equipes" className="text-caf-green">
          Retour à la liste des équipes
        </Link>
      </div>
    );
  }
  
  // Group color mapping
  const groupColorMap: Record<string, string> = {
    "A": "bg-caf-green text-white",
    "B": "bg-caf-red text-white",
    "C": "bg-caf-gold text-black",
    "D": "bg-blue-500 text-white",
    "E": "bg-purple-500 text-white",
    "F": "bg-orange-500 text-white"
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <div className="pt-24 pb-8">
        <div className="container mx-auto px-6 md:px-10">
          <div className="mb-8">
            <Link to="/equipes" className="inline-flex items-center text-gray-600 hover:text-caf-green transition-colors">
              <ArrowLeft size={16} className="mr-2" />
              Retour aux équipes
            </Link>
          </div>
          
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-subtle mb-10"
            >
              <div className="relative h-48 bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/40 to-gray-900/40"></div>
                <img 
                  src={equipe.drapeau} 
                  alt={equipe.nom}
                  className="w-full h-full object-cover object-center opacity-30"
                />
                <div className="absolute w-32 h-24 flex items-center justify-center">
                  <img 
                    src={equipe.drapeau} 
                    alt={equipe.nom}
                    className="w-full h-full object-contain drop-shadow-md"
                  />
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-2/3">
                    <div className="flex items-center mb-4">
                      <h1 className="text-3xl font-bold mr-4">{equipe.nom}</h1>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${groupColorMap[equipe.groupe]}`}>
                        Groupe {equipe.groupe}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                      <Card>
                        <CardContent className="p-4 flex items-center">
                          <Flag className="mr-3 text-caf-green" />
                          <div>
                            <p className="text-sm text-gray-500">Confédération</p>
                            <p className="font-medium">{equipe.confederation}</p>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardContent className="p-4 flex items-center">
                          <Trophy className="mr-3 text-caf-gold" />
                          <div>
                            <p className="text-sm text-gray-500">Rang FIFA</p>
                            <p className="font-medium">{equipe.rang}</p>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardContent className="p-4 flex items-center">
                          <User className="mr-3 text-blue-500" />
                          <div>
                            <p className="text-sm text-gray-500">Entraîneur</p>
                            <p className="font-medium">{equipe.entraineur}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    
                    <div className="mb-8">
                      <h2 className="text-xl font-bold mb-4">Présentation</h2>
                      <p className="text-gray-600 dark:text-gray-300">
                        L'équipe nationale de {equipe.nom} participe à la Coupe d'Afrique des Nations 2025 sous la 
                        direction de {equipe.entraineur}. Actuellement classée au {equipe.rang}ème rang mondial FIFA, 
                        cette sélection cherche à marquer l'histoire du football africain lors de cette compétition au Maroc.
                      </p>
                    </div>
                  </div>
                  
                  <div className="md:w-1/3">
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="font-bold text-lg mb-4">Informations</h3>
                        
                        <div className="space-y-4">
                          <div className="flex justify-between items-center pb-2 border-b border-gray-100 dark:border-gray-700">
                            <span className="text-gray-500">Nom officiel</span>
                            <span className="font-medium">{equipe.nom}</span>
                          </div>
                          
                          <div className="flex justify-between items-center pb-2 border-b border-gray-100 dark:border-gray-700">
                            <span className="text-gray-500">Code</span>
                            <span className="font-medium">{equipe.abreviation}</span>
                          </div>
                          
                          <div className="flex justify-between items-center pb-2 border-b border-gray-100 dark:border-gray-700">
                            <span className="text-gray-500">Groupe</span>
                            <span className="font-medium">Groupe {equipe.groupe}</span>
                          </div>
                          
                          <div className="flex justify-between items-center">
                            <span className="text-gray-500">Classement FIFA</span>
                            <span className="font-medium">{equipe.rang}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <Tabs defaultValue="joueurs" className="mb-12">
              <TabsList className="mb-6">
                <TabsTrigger value="joueurs">Joueurs</TabsTrigger>
                <TabsTrigger value="matches">Matchs</TabsTrigger>
                <TabsTrigger value="statistics">Statistiques</TabsTrigger>
              </TabsList>
              
              <TabsContent value="joueurs">
                <h2 className="text-2xl font-bold mb-6">Effectif de {equipe.nom}</h2>
                
                {equipeJoueurs.length > 0 ? (
                  <div className="space-y-8">
                    {gardiens.length > 0 && (
                      <div>
                        <h3 className="text-xl font-medium mb-4 text-gray-800 dark:text-gray-200">Gardiens</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {gardiens.map(joueur => (
                            <JoueurCard key={joueur.id} joueur={joueur} />
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {defenseurs.length > 0 && (
                      <div>
                        <h3 className="text-xl font-medium mb-4 text-gray-800 dark:text-gray-200">Défenseurs</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {defenseurs.map(joueur => (
                            <JoueurCard key={joueur.id} joueur={joueur} />
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {milieux.length > 0 && (
                      <div>
                        <h3 className="text-xl font-medium mb-4 text-gray-800 dark:text-gray-200">Milieux</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {milieux.map(joueur => (
                            <JoueurCard key={joueur.id} joueur={joueur} />
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {attaquants.length > 0 && (
                      <div>
                        <h3 className="text-xl font-medium mb-4 text-gray-800 dark:text-gray-200">Attaquants</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {attaquants.map(joueur => (
                            <JoueurCard key={joueur.id} joueur={joueur} />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-xl">
                    <p className="text-gray-500">Aucun joueur disponible pour cette équipe pour le moment.</p>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="matches">
                <h2 className="text-2xl font-bold mb-6">Matchs de {equipe.nom}</h2>
                
                {equipeMatches.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {equipeMatches.map(match => (
                      <MatchCard key={match.id} match={match} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-xl">
                    <p className="text-gray-500">Aucun match prévu pour cette équipe pour le moment.</p>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="statistics">
                <h2 className="text-2xl font-bold mb-6">Statistiques</h2>
                <div className="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-xl">
                  <p className="text-gray-500">Statistiques à venir pendant le tournoi.</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

interface JoueurCardProps {
  joueur: typeof joueurs[0];
}

const JoueurCard: React.FC<JoueurCardProps> = ({ joueur }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('fr-FR', { 
      day: '2-digit', 
      month: '2-digit', 
      year: 'numeric' 
    }).format(date);
  };
  
  const calculateAge = (dateString: string) => {
    const today = new Date();
    const birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };
  
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-5 flex items-start space-x-4">
        <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-100 border border-gray-200 flex-shrink-0">
          {joueur.photo ? (
            <img 
              src={joueur.photo} 
              alt={`${joueur.prenom} ${joueur.nom}`}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-200">
              <User size={36} className="text-gray-400" />
            </div>
          )}
        </div>
        
        <div className="flex-1">
          <div className="flex items-center">
            <span className="w-8 h-8 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-sm font-medium mr-2">
              {joueur.numero}
            </span>
            <h3 className="text-lg font-bold">
              {joueur.prenom} {joueur.nom}
            </h3>
          </div>
          
          <span className="inline-block px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium mt-2">
            {joueur.poste}
          </span>
          
          <div className="mt-3 space-y-2 text-sm">
            <div className="flex items-center">
              <Calendar className="mr-2 h-4 w-4 text-gray-500" />
              <span>{formatDate(joueur.dateNaissance)} ({calculateAge(joueur.dateNaissance)} ans)</span>
            </div>
            <div className="flex items-center">
              <Ruler className="mr-2 h-4 w-4 text-gray-500" />
              <span>{joueur.taille} cm</span>
            </div>
            <div className="flex items-center">
              <Weight className="mr-2 h-4 w-4 text-gray-500" />
              <span>{joueur.poids} kg</span>
            </div>
            <div className="flex items-center">
              <Building className="mr-2 h-4 w-4 text-gray-500" />
              <span>{joueur.club}</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default EquipeDetail;
