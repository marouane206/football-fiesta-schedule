import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { matches } from '@/data/matches';
import { stades } from '@/data/stades';
import { equipes } from '@/data/equipes';
import { hotels } from '@/data/hotels';
import { Sidebar, SidebarContent, SidebarProvider, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar';
import { Calendar, Home, BarChart3, MapPin, Shield, Users, Hotel, LogOut, Plus } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import AdminLogin from '@/components/AdminLogin';
import { HotelFormDialog } from '@/components/HotelFormDialog';

type AdminSection = 'dashboard' | 'matches' | 'stades' | 'equipes' | 'utilisateurs' | 'hotels';

type NewHotelData = {
  nom: string;
  description: string;
  etoiles: number;
  image: string;
  prix: string;
  ville: string;
  distance: string;
  stadeId: string;
};

// Définition des données de formulaire pour le type Match
type NewMatchData = {
  equipe1: string;
  equipe2: string;
  date: string;
  heure: string;
  stade: string;
  phase: string;
};

// Définition des données de formulaire pour le type Stade
type NewStadeData = {
  nom: string;
  ville: string;
  capacite: number;
  image: string;
  description: string;
  anneeConstruction: number;
};

// Définition des données de formulaire pour le type Equipe
type NewEquipeData = {
  nom: string;
  drapeau: string;
  groupe: string;
  confederation: string;
};

// Définition des données de formulaire pour le type Utilisateur
type NewUserData = {
  username: string;
  password: string;
  role: string;
};

const Dashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeSection, setActiveSection] = useState<AdminSection>('dashboard');
  const [showHotelForm, setShowHotelForm] = useState(false);
  const [showMatchForm, setShowMatchForm] = useState(false);
  const [showStadeForm, setShowStadeForm] = useState(false);
  const [showEquipeForm, setShowEquipeForm] = useState(false);
  const [showUserForm, setShowUserForm] = useState(false);
  const [hotelsList, setHotelsList] = useState(hotels);
  const { toast } = useToast();
  
  const data = [
    { name: 'Casablanca', value: matches.filter(match => match.stade === 'Complexe Sportif Mohammed V').length },
    { name: 'Rabat', value: matches.filter(match => match.stade === 'Stade Moulay Abdellah').length },
    { name: 'Marrakech', value: matches.filter(match => match.stade === 'Stade de Marrakech').length },
    { name: 'Tanger', value: matches.filter(match => match.stade === 'Stade Ibn Batouta').length },
    { name: 'Autres', value: matches.filter(match => !['Complexe Sportif Mohammed V', 'Stade Moulay Abdellah', 'Stade de Marrakech', 'Stade Ibn Batouta'].includes(match.stade)).length },
  ];
  
  const COLORS = ['#FF8042', '#0088FE', '#00C49F', '#FFBB28', '#8884d8'];
  
  const handleLogout = () => {
    setIsAuthenticated(false);
    toast({
      title: "Déconnecté",
      description: "Vous êtes maintenant déconnecté du tableau de bord.",
    });
  };
  
  const handleLogin = (success: boolean) => {
    setIsAuthenticated(success);
    if (success) {
      toast({
        title: "Connecté",
        description: "Bienvenue dans le tableau de bord administrateur.",
      });
    }
  };

  const handleAddHotel = (hotelData: NewHotelData) => {
    try {
      const newHotel = {
        id: hotelData.nom.toLowerCase().replace(/\s+/g, '-'),
        ...hotelData
      };
      
      const updatedHotels = [...hotelsList, newHotel];
      setHotelsList(updatedHotels);
      
      toast({
        title: "Hôtel ajouté",
        description: `L'hôtel ${hotelData.nom} a été ajouté avec succès.`,
      });
    } catch (error) {
      console.error('Error updating hotels list:', error);
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite lors de l'ajout de l'hôtel.",
        variant: "destructive",
      });
    }
  };

  // Fonctions pour gérer l'ajout des différentes entités (à implémenter plus tard)
  const handleAddMatch = () => {
    setShowMatchForm(false);
    toast({
      title: "Fonctionnalité à venir",
      description: "L'ajout de match sera disponible prochainement.",
    });
  };

  const handleAddStade = () => {
    setShowStadeForm(false);
    toast({
      title: "Fonctionnalité à venir",
      description: "L'ajout de stade sera disponible prochainement.",
    });
  };

  const handleAddEquipe = () => {
    setShowEquipeForm(false);
    toast({
      title: "Fonctionnalité à venir",
      description: "L'ajout d'équipe sera disponible prochainement.",
    });
  };

  const handleAddUser = () => {
    setShowUserForm(false);
    toast({
      title: "Fonctionnalité à venir",
      description: "L'ajout d'utilisateur sera disponible prochainement.",
    });
  };

  const renderDashboardContent = () => (
    <div className="flex flex-col space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Tableau de bord</h1>
        <p className="text-muted-foreground">Bienvenue sur le dashboard d'administration CAN 2025</p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Matches</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{matches.length}</div>
          </CardContent>
          <CardFooter>
            <p className="text-xs text-muted-foreground">
              Total des matches programmés
            </p>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Stades</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stades.length}</div>
          </CardContent>
          <CardFooter>
            <p className="text-xs text-muted-foreground">
              Nombre de stades
            </p>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Équipes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{equipes.length}</div>
          </CardContent>
          <CardFooter>
            <p className="text-xs text-muted-foreground">
              Équipes qualifiées
            </p>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Utilisateurs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
          </CardContent>
          <CardFooter>
            <p className="text-xs text-muted-foreground">
              Administrateurs actifs
            </p>
          </CardFooter>
        </Card>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Répartition des Matches par Stade</CardTitle>
            <CardDescription>Distribution des matches dans chaque stade</CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                    label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Prochains Matches</CardTitle>
            <CardDescription>Matches à venir</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {matches.slice(0, 5).map((match) => (
                <div key={match.id} className="flex items-center justify-between border-b pb-2">
                  <div className="flex items-center space-x-3">
                    <div className="font-medium">
                      {match.equipe1} vs {match.equipe2}
                    </div>
                  </div>
                  <Badge>{new Date(match.date).toLocaleDateString()}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <p className="text-xs text-muted-foreground">
              Affichage des 5 prochains matches
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );

  const renderMatchesContent = () => (
    <div className="flex flex-col space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Matches</h1>
          <p className="text-muted-foreground">Gestion des matches de la CAN 2025</p>
        </div>
        <Button onClick={() => setShowMatchForm(true)}>
          <Plus className="mr-2 h-4 w-4" /> Ajouter un match
        </Button>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Liste des Matches</CardTitle>
          <CardDescription>Total: {matches.length} matches programmés</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {matches.map((match) => (
              <div key={match.id} className="flex items-center justify-between border-b pb-2">
                <div className="flex items-center space-x-3">
                  <div className="font-medium">
                    {match.equipe1} vs {match.equipe2}
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge>{new Date(match.date).toLocaleDateString()}</Badge>
                  <Badge variant="secondary">{match.stade}</Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderStadesContent = () => (
    <div className="flex flex-col space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Stades</h1>
          <p className="text-muted-foreground">Gestion des stades de la CAN 2025</p>
        </div>
        <Button onClick={() => setShowStadeForm(true)}>
          <Plus className="mr-2 h-4 w-4" /> Ajouter un stade
        </Button>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Liste des Stades</CardTitle>
          <CardDescription>Total: {stades.length} stades</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {stades.map((stade) => (
              <div key={stade.id} className="flex items-center justify-between border-b pb-2">
                <div className="flex items-center space-x-3">
                  <div className="font-medium">
                    {stade.nom}
                  </div>
                </div>
                <div>
                  <Badge variant="secondary">{stade.ville}</Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderEquipesContent = () => (
    <div className="flex flex-col space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Équipes</h1>
          <p className="text-muted-foreground">Gestion des équipes de la CAN 2025</p>
        </div>
        <Button onClick={() => setShowEquipeForm(true)}>
          <Plus className="mr-2 h-4 w-4" /> Ajouter une équipe
        </Button>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Liste des Équipes</CardTitle>
          <CardDescription>Total: {equipes.length} équipes qualifiées</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {equipes.map((equipe) => (
              <div key={equipe.id} className="flex items-center justify-between border-b pb-2">
                <div className="flex items-center space-x-3">
                  <div className="font-medium">
                    {equipe.nom}
                  </div>
                </div>
                <div>
                  <Badge variant="secondary">Groupe {equipe.groupe}</Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderUtilisateursContent = () => (
    <div className="flex flex-col space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Utilisateurs</h1>
          <p className="text-muted-foreground">Gestion des utilisateurs administrateurs</p>
        </div>
        <Button onClick={() => setShowUserForm(true)}>
          <Plus className="mr-2 h-4 w-4" /> Ajouter un utilisateur
        </Button>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Liste des Utilisateurs</CardTitle>
          <CardDescription>Total: 2 administrateurs</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b pb-2">
              <div className="flex items-center space-x-3">
                <div className="font-medium">
                  admin
                </div>
              </div>
              <div>
                <Badge variant="success">Administrateur</Badge>
              </div>
            </div>
            <div className="flex items-center justify-between border-b pb-2">
              <div className="flex items-center space-x-3">
                <div className="font-medium">
                  demo
                </div>
              </div>
              <div>
                <Badge variant="secondary">Démo</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderHotelsContent = () => (
    <div className="flex flex-col space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Hôtels</h1>
          <p className="text-muted-foreground">Gestion des hôtels partenaires</p>
        </div>
        <Button onClick={() => setShowHotelForm(true)}>
          <Plus className="mr-2 h-4 w-4" /> Ajouter un hôtel
        </Button>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Liste des Hôtels</CardTitle>
          <CardDescription>Total: {hotelsList.length} hôtels partenaires</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {hotelsList.map((hotel) => (
              <div key={hotel.id} className="flex items-center justify-between border-b pb-2">
                <div className="flex items-center space-x-3">
                  <div className="font-medium">
                    {hotel.nom}
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Badge>{hotel.ville}</Badge>
                  <Badge variant="outline">{hotel.etoiles} étoiles</Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      
      <HotelFormDialog 
        open={showHotelForm} 
        onOpenChange={setShowHotelForm} 
        onSubmit={handleAddHotel} 
      />
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return renderDashboardContent();
      case 'matches':
        return renderMatchesContent();
      case 'stades':
        return renderStadesContent();
      case 'equipes':
        return renderEquipesContent();
      case 'utilisateurs':
        return renderUtilisateursContent();
      case 'hotels':
        return renderHotelsContent();
      default:
        return renderDashboardContent();
    }
  };
  
  return (
    <>
      {!isAuthenticated ? (
        <AdminLogin onLogin={handleLogin} />
      ) : (
        <SidebarProvider>
          <div className="min-h-screen flex w-full">
            <Sidebar>
              <SidebarHeader>
                <div className="px-2 py-2">
                  <h2 className="text-xl font-bold tracking-tight">CAN 2025</h2>
                  <p className="text-sm text-muted-foreground">Dashboard Admin</p>
                </div>
              </SidebarHeader>
              <SidebarContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton 
                      tooltip="Tableau de bord" 
                      isActive={activeSection === 'dashboard'}
                      onClick={() => setActiveSection('dashboard')}
                    >
                      <Home className="h-4 w-4" />
                      <span>Tableau de bord</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton 
                      tooltip="Matches" 
                      isActive={activeSection === 'matches'}
                      onClick={() => setActiveSection('matches')}
                    >
                      <Calendar className="h-4 w-4" />
                      <span>Matches</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton 
                      tooltip="Stades" 
                      isActive={activeSection === 'stades'}
                      onClick={() => setActiveSection('stades')}
                    >
                      <MapPin className="h-4 w-4" />
                      <span>Stades</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton 
                      tooltip="Équipes" 
                      isActive={activeSection === 'equipes'}
                      onClick={() => setActiveSection('equipes')}
                    >
                      <Shield className="h-4 w-4" />
                      <span>Équipes</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton 
                      tooltip="Utilisateurs" 
                      isActive={activeSection === 'utilisateurs'}
                      onClick={() => setActiveSection('utilisateurs')}
                    >
                      <Users className="h-4 w-4" />
                      <span>Utilisateurs</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton 
                      tooltip="Hotels" 
                      isActive={activeSection === 'hotels'}
                      onClick={() => setActiveSection('hotels')}
                    >
                      <Hotel className="h-4 w-4" />
                      <span>Hotels</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarContent>
              <SidebarFooter>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton onClick={handleLogout} tooltip="Déconnexion">
                      <LogOut className="h-4 w-4" />
                      <span>Déconnexion</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarFooter>
            </Sidebar>
            
            <motion.div 
              className="flex-1 p-6 md:p-8 bg-gray-50 dark:bg-gray-900"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              key={activeSection}
            >
              {renderContent()}
            </motion.div>
          </div>
        </SidebarProvider>
      )}

      {/* Dialog forms pour ajouter de nouveaux éléments */}
      <HotelFormDialog 
        open={showHotelForm} 
        onOpenChange={setShowHotelForm} 
        onSubmit={handleAddHotel} 
      />
      
      {/* Ici, des formulaires similaires seraient ajoutés pour les autres entités */}
    </>
  );
};

export default Dashboard;
