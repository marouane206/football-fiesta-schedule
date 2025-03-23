
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Trophy, Users, Flag, Globe, User } from 'lucide-react';
import { equipes } from '@/data/equipes';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { matches } from '@/data/matches';
import MatchCard from '@/components/MatchCard';

const EquipeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const equipe = equipes.find(e => e.id === id);
  
  const equipeMatches = matches.filter(match => 
    match.equipe1 === equipe?.id || match.equipe2 === equipe?.id
  );
  
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
            
            <Tabs defaultValue="matches" className="mb-12">
              <TabsList className="mb-6">
                <TabsTrigger value="matches">Matchs</TabsTrigger>
                <TabsTrigger value="statistics">Statistiques</TabsTrigger>
              </TabsList>
              
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

export default EquipeDetail;
