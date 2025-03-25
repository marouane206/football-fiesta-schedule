
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { matches, Match } from '@/data/matches';
import { stades, Stade } from '@/data/stades';
import { equipes, Equipe } from '@/data/equipes';
import { hotels, Hotel } from '@/data/hotels';
import { restaurants, Restaurant } from '@/data/restaurants';
import { Sidebar, SidebarContent, SidebarProvider, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar';
import { Calendar, Home, BarChart3, MapPin, Shield, Users, Hotel as HotelIcon, LogOut, Plus, Utensils, Edit, Trash2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import AdminLogin from '@/components/AdminLogin';
import { HotelFormDialog } from '@/components/HotelFormDialog';
import { RestaurantFormDialog } from '@/components/RestaurantFormDialog';
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

type AdminSection = 'dashboard' | 'matches' | 'stades' | 'equipes' | 'utilisateurs' | 'hotels' | 'restaurants';

type NewHotelData = {
  nom: string;
  description: string;
  etoiles: number;
  image: string;
  prix: string;
  ville: string;
  distance: string;
  stadeId: string;
  adresse?: string;
  telephone?: string;
};

type NewMatchData = {
  equipe1: string;
  equipe2: string;
  date: string;
  heure: string;
  stade: string;
  phase: "Groupe" | "Huitièmes" | "Quarts" | "Demi-finales" | "Match pour la 3e place" | "Finale";
  groupe?: string;
};

type NewStadeData = {
  nom: string;
  ville: string;
  capacite: number;
  image: string;
  description: string;
  anneeConstruction: number;
  coordonnees: {
    lat: number;
    lng: number;
  };
};

type NewEquipeData = {
  nom: string;
  drapeau: string;
  groupe: string;
  confederation: string;
  abreviation: string;
  entraineur: string;
  rang: number;
};

type NewUserData = {
  username: string;
  password: string;
  role: string;
};

type NewRestaurantData = {
  nom: string;
  description: string;
  cuisine: string;
  prixMoyen: string;
  adresse: string;
  distance: string;
  note: number;
  image: string;
  stadeId: string;
  horaires: string;
  telephone: string;
};

const Dashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeSection, setActiveSection] = useState<AdminSection>('restaurants');
  const [showHotelForm, setShowHotelForm] = useState(false);
  const [showMatchForm, setShowMatchForm] = useState(false);
  const [showStadeForm, setShowStadeForm] = useState(false);
  const [showEquipeForm, setShowEquipeForm] = useState(false);
  const [showUserForm, setShowUserForm] = useState(false);
  const [showRestaurantForm, setShowRestaurantForm] = useState(false);
  const [hotelsList, setHotelsList] = useState(hotels);
  const [matchesList, setMatchesList] = useState(matches);
  const [stadesList, setStadesList] = useState(stades);
  const [equipesList, setEquipesList] = useState(equipes);
  const [restaurantsList, setRestaurantsList] = useState(restaurants);
  const [editingItemId, setEditingItemId] = useState<string | null>(null);
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

  const handleDelete = (type: string, id: string) => {
    try {
      switch (type) {
        case 'match':
          setMatchesList(prev => prev.filter(item => item.id !== id));
          break;
        case 'stade':
          setStadesList(prev => prev.filter(item => item.id !== id));
          break;
        case 'equipe':
          setEquipesList(prev => prev.filter(item => item.id !== id));
          break;
        case 'hotel':
          setHotelsList(prev => prev.filter(item => item.id !== id));
          break;
        case 'restaurant':
          setRestaurantsList(prev => prev.filter(item => item.id !== id));
          break;
      }
      
      toast({
        title: "Supprimé avec succès",
        description: `L'élément a été supprimé avec succès.`,
      });
    } catch (error) {
      console.error('Error deleting item:', error);
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite lors de la suppression.",
        variant: "destructive",
      });
    }
  };

  const handleEdit = (type: string, id: string) => {
    setEditingItemId(id);
    
    switch (type) {
      case 'match':
        setShowMatchForm(true);
        break;
      case 'stade':
        setShowStadeForm(true);
        break;
      case 'equipe':
        setShowEquipeForm(true);
        break;
      case 'hotel':
        setShowHotelForm(true);
        break;
      case 'restaurant':
        setShowRestaurantForm(true);
        break;
      case 'user':
        setShowUserForm(true);
        break;
    }
    
    toast({
      title: "Édition en cours",
      description: `Vous êtes en train d'éditer ${id}.`,
    });
  };

  const handleAddHotel = (hotelData: NewHotelData) => {
    try {
      if (editingItemId) {
        setHotelsList(prev => prev.map(hotel => 
          hotel.id === editingItemId ? { ...hotel, ...hotelData } : hotel
        ));
        
        toast({
          title: "Hôtel modifié",
          description: `L'hôtel ${hotelData.nom} a été modifié avec succès.`,
        });
        
        setEditingItemId(null);
      } else {
        const newHotel = {
          id: hotelData.nom.toLowerCase().replace(/\s+/g, '-'),
          ...hotelData
        };
        
        setHotelsList(prev => [...prev, newHotel]);
        
        toast({
          title: "Hôtel ajouté",
          description: `L'hôtel ${hotelData.nom} a été ajouté avec succès.`,
        });
      }
      
      setShowHotelForm(false);
    } catch (error) {
      console.error('Error updating hotels list:', error);
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite lors de l'opération.",
        variant: "destructive",
      });
    }
  };

  const handleAddRestaurant = (restaurantData: NewRestaurantData) => {
    try {
      if (editingItemId) {
        setRestaurantsList(prev => prev.map(restaurant => 
          restaurant.id === editingItemId ? { ...restaurant, ...restaurantData } : restaurant
        ));
        
        toast({
          title: "Restaurant modifié",
          description: `Le restaurant ${restaurantData.nom} a été modifié avec succès.`,
        });
        
        setEditingItemId(null);
      } else {
        const newRestaurant = {
          id: restaurantData.nom.toLowerCase().replace(/\s+/g, '-'),
          ...restaurantData
        };
        
        setRestaurantsList(prev => [...prev, newRestaurant]);
        
        toast({
          title: "Restaurant ajouté",
          description: `Le restaurant ${restaurantData.nom} a été ajouté avec succès.`,
        });
      }
      
      setShowRestaurantForm(false);
    } catch (error) {
      console.error('Error updating restaurants list:', error);
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite lors de l'opération.",
        variant: "destructive",
      });
    }
  };

  const handleAddMatch = (matchData: NewMatchData) => {
    try {
      if (editingItemId) {
        setMatchesList(prev => prev.map(match => 
          match.id === editingItemId ? { ...match, ...matchData } as Match : match
        ));
        
        toast({
          title: "Match modifié",
          description: `Le match a été modifié avec succès.`,
        });
        
        setEditingItemId(null);
      } else {
        const newMatch: Match = {
          id: `match-${Date.now()}`,
          ...matchData
        };
        
        setMatchesList(prev => [...prev, newMatch]);
        
        toast({
          title: "Match ajouté",
          description: `Le match a été ajouté avec succès.`,
        });
      }
      
      setShowMatchForm(false);
    } catch (error) {
      console.error('Error updating matches list:', error);
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite lors de l'opération.",
        variant: "destructive",
      });
    }
  };

  const handleAddStade = (stadeData: NewStadeData) => {
    try {
      if (editingItemId) {
        setStadesList(prev => prev.map(stade => 
          stade.id === editingItemId ? { ...stade, ...stadeData } as Stade : stade
        ));
        
        toast({
          title: "Stade modifié",
          description: `Le stade ${stadeData.nom} a été modifié avec succès.`,
        });
        
        setEditingItemId(null);
      } else {
        const newStade: Stade = {
          id: stadeData.nom.toLowerCase().replace(/\s+/g, '-'),
          ...stadeData
        };
        
        setStadesList(prev => [...prev, newStade]);
        
        toast({
          title: "Stade ajouté",
          description: `Le stade ${stadeData.nom} a été ajouté avec succès.`,
        });
      }
      
      setShowStadeForm(false);
    } catch (error) {
      console.error('Error updating stades list:', error);
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite lors de l'opération.",
        variant: "destructive",
      });
    }
  };

  const handleAddEquipe = (equipeData: NewEquipeData) => {
    try {
      if (editingItemId) {
        setEquipesList(prev => prev.map(equipe => 
          equipe.id === editingItemId ? { ...equipe, ...equipeData } as Equipe : equipe
        ));
        
        toast({
          title: "Équipe modifiée",
          description: `L'équipe ${equipeData.nom} a été modifiée avec succès.`,
        });
        
        setEditingItemId(null);
      } else {
        const newEquipe: Equipe = {
          id: equipeData.nom.toLowerCase().replace(/\s+/g, '-'),
          ...equipeData
        };
        
        setEquipesList(prev => [...prev, newEquipe]);
        
        toast({
          title: "Équipe ajoutée",
          description: `L'équipe ${equipeData.nom} a été ajoutée avec succès.`,
        });
      }
      
      setShowEquipeForm(false);
    } catch (error) {
      console.error('Error updating equipes list:', error);
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite lors de l'opération.",
        variant: "destructive",
      });
    }
  };

  const handleAddUser = (userData: NewUserData) => {
    setShowUserForm(false);
    toast({
      title: "Utilisateur ajouté",
      description: `L'utilisateur ${userData.username} a été ajouté avec succès.`,
    });
    setEditingItemId(null);
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
          <CardDescription>Total: {matchesList.length} matches programmés</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {matchesList.map((match) => (
              <div key={match.id} className="flex items-center justify-between border-b pb-2">
                <div className="flex items-center space-x-3">
                  <div className="font-medium">
                    {match.equipe1} vs {match.equipe2}
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge>{new Date(match.date).toLocaleDateString()}</Badge>
                  <Badge variant="secondary">{match.stade}</Badge>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" onClick={() => handleEdit('match', match.id)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="outline" size="sm" className="text-destructive">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Êtes-vous sûr ?</AlertDialogTitle>
                          <AlertDialogDescription>
                            Cette action ne peut pas être annulée. Voulez-vous vraiment supprimer ce match ?
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Annuler</AlertDialogCancel>
                          <AlertDialogAction onClick={() => handleDelete('match', match.id)}>
                            Confirmer
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
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
          <CardDescription>Total: {stadesList.length} stades</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {stadesList.map((stade) => (
              <div key={stade.id} className="flex items-center justify-between border-b pb-2">
                <div className="flex items-center space-x-3">
                  <div className="font-medium">
                    {stade.nom}
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary">{stade.ville}</Badge>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" onClick={() => handleEdit('stade', stade.id)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="outline" size="sm" className="text-destructive">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Êtes-vous sûr ?</AlertDialogTitle>
                          <AlertDialogDescription>
                            Cette action ne peut pas être annulée. Voulez-vous vraiment supprimer ce stade ?
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Annuler</AlertDialogCancel>
                          <AlertDialogAction onClick={() => handleDelete('stade', stade.id)}>
                            Confirmer
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
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
          <CardDescription>Total: {equipesList.length} équipes qualifiées</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {equipesList.map((equipe) => (
              <div key={equipe.id} className="flex items-center justify-between border-b pb-2">
                <div className="flex items-center space-x-3">
                  <div className="font-medium">
                    {equipe.nom}
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary">Groupe {equipe.groupe}</Badge>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" onClick={() => handleEdit('equipe', equipe.id)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="outline" size="sm" className="text-destructive">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Êtes-vous sûr ?</AlertDialogTitle>
                          <AlertDialogDescription>
                            Cette action ne peut pas être annulée. Voulez-vous vraiment supprimer cette équipe ?
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Annuler</AlertDialogCancel>
                          <AlertDialogAction onClick={() => handleDelete('equipe', equipe.id)}>
                            Confirmer
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
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
              <div className="flex items-center space-x-2">
                <Badge variant="success">Administrateur</Badge>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" onClick={() => handleEdit('user', 'admin')}>
                    <Edit className="h-4 w-4" />
                  </Button>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="outline" size="sm" className="text-destructive">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Êtes-vous sûr ?</AlertDialogTitle>
                        <AlertDialogDescription>
                          Cette action ne peut pas être annulée. Voulez-vous vraiment supprimer cet utilisateur ?
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Annuler</AlertDialogCancel>
                        <AlertDialogAction onClick={() => handleDelete('user', 'admin')}>
                          Confirmer
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between border-b pb-2">
              <div className="flex items-center space-x-3">
                <div className="font-medium">
                  demo
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="secondary">Démo</Badge>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" onClick={() => handleEdit('user', 'demo')}>
                    <Edit className="h-4 w-4" />
                  </Button>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="outline" size="sm" className="text-destructive">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Êtes-vous sûr ?</AlertDialogTitle>
                        <AlertDialogDescription>
                          Cette action ne peut pas être annulée. Voulez-vous vraiment supprimer cet utilisateur ?
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Annuler</AlertDialogCancel>
                        <AlertDialogAction onClick={() => handleDelete('user', 'demo')}>
                          Confirmer
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
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
                <div className="flex items-center space-x-2">
                  <Badge>{hotel.ville}</Badge>
                  <Badge variant="outline">{hotel.etoiles} étoiles</Badge>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" onClick={() => handleEdit('hotel', hotel.id)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="outline" size="sm" className="text-destructive">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Êtes-vous sûr ?</AlertDialogTitle>
                          <AlertDialogDescription>
                            Cette action ne peut pas être annulée. Voulez-vous vraiment supprimer cet hôtel ?
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Annuler</AlertDialogCancel>
                          <AlertDialogAction onClick={() => handleDelete('hotel', hotel.id)}>
                            Confirmer
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderRestaurantsContent = () => (
    <div className="flex flex-col space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Restaurants</h1>
          <p className="text-muted-foreground">Gestion des restaurants partenaires</p>
        </div>
        <Button onClick={() => {
          setEditingItemId(null);
          setShowRestaurantForm(true);
        }}>
          <Plus className="mr-2 h-4 w-4" /> Ajouter un restaurant
        </Button>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Liste des Restaurants</CardTitle>
          <CardDescription>Total: {restaurantsList.length} restaurants partenaires</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {restaurantsList.map((restaurant) => (
              <div key={restaurant.id} className="flex items-center justify-between border-b pb-2">
                <div className="flex items-center space-x-3">
                  <div className="font-medium">
                    {restaurant.nom}
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge>{restaurant.cuisine}</Badge>
                  <Badge variant="outline">{restaurant.stadeId}</Badge>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" onClick={() => handleEdit('restaurant', restaurant.id)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="outline" size="sm" className="text-destructive">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Êtes-vous sûr ?</AlertDialogTitle>
                          <AlertDialogDescription>
                            Cette action ne peut pas être annulée. Voulez-vous vraiment supprimer ce restaurant ?
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Annuler</AlertDialogCancel>
                          <AlertDialogAction onClick={() => handleDelete('restaurant', restaurant.id)}>
                            Confirmer
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
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
      case 'restaurants':
        return renderRestaurantsContent();
      default:
        return renderDashboardContent();
    }
  };
  
  // Get the editing hotel
  const editingHotel = editingItemId 
    ? hotelsList.find(hotel => hotel.id === editingItemId) 
    : null;
  
  // Get the editing restaurant
  const editingRestaurant = editingItemId 
    ? restaurantsList.find(restaurant => restaurant.id === editingItemId) 
    : null;
  
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
                      tooltip="Restaurants" 
                      isActive={activeSection === 'restaurants'}
                      onClick={() => setActiveSection('restaurants')}
                    >
                      <Utensils className="h-4 w-4" />
                      <span>Restaurants</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
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
                      <HotelIcon className="h-4 w-4" />
                      <span>Hotels</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarContent>
              <SidebarFooter>
                <Button 
                  variant="outline" 
                  className="w-full justify-start gap-2"
                  onClick={handleLogout}
                >
                  <LogOut className="h-4 w-4" />
                  <span>Déconnexion</span>
                </Button>
              </SidebarFooter>
            </Sidebar>
            <div className="flex-1 p-8">
              {renderContent()}
            </div>
          </div>
        </SidebarProvider>
      )}
      
      {/* Formulaire pour les hôtels */}
      {showHotelForm && (
        <HotelFormDialog 
          open={showHotelForm}
          onOpenChange={setShowHotelForm}
          onSubmit={handleAddHotel}
          editingHotel={editingHotel}
        />
      )}
      
      {/* Formulaire pour les restaurants */}
      {showRestaurantForm && (
        <RestaurantFormDialog 
          open={showRestaurantForm}
          onOpenChange={setShowRestaurantForm}
          onSubmit={handleAddRestaurant}
          editingRestaurant={editingRestaurant}
        />
      )}
      
      {/* Formulaires pour les autres types d'entités pourraient être ajoutés ici */}
    </>
  );
};

export default Dashboard;
