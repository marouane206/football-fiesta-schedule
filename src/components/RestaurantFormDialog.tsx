
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Restaurant } from "@/data/restaurants";
import { Utensils, Phone, Clock, MapPin, Star, Tag, Home } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

const formSchema = z.object({
  nom: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères" }),
  description: z.string().min(10, { message: "La description doit contenir au moins 10 caractères" }),
  cuisine: z.string().min(2, { message: "Le type de cuisine est requis" }),
  prixMoyen: z.string().min(1, { message: "Le prix moyen est requis" }),
  adresse: z.string().min(5, { message: "L'adresse est requise" }),
  distance: z.string().min(1, { message: "La distance est requise" }),
  note: z.coerce.number().min(1).max(5),
  image: z.string().url({ message: "L'URL de l'image n'est pas valide" }),
  stadeId: z.string().min(1, { message: "Le stade associé est requis" }),
  horaires: z.string().optional(),
  telephone: z.string().optional(),
  vegOptions: z.boolean().optional().default(false),
});

type FormValues = z.infer<typeof formSchema>;

interface RestaurantFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (data: FormValues) => void;
  editingRestaurant?: Restaurant | null;
}

export function RestaurantFormDialog({ open, onOpenChange, onSubmit, editingRestaurant }: RestaurantFormDialogProps) {
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nom: "",
      description: "",
      cuisine: "",
      prixMoyen: "",
      adresse: "",
      distance: "",
      note: 4,
      image: "",
      stadeId: "",
      horaires: "",
      telephone: "",
      vegOptions: false,
    },
  });

  // Mettre à jour le formulaire quand editingRestaurant change
  useEffect(() => {
    if (editingRestaurant) {
      form.reset({
        nom: editingRestaurant.nom || "",
        description: editingRestaurant.description || "",
        cuisine: editingRestaurant.cuisine || "",
        prixMoyen: editingRestaurant.prixMoyen || "",
        adresse: editingRestaurant.adresse || "",
        distance: editingRestaurant.distance || "",
        note: editingRestaurant.note || 4,
        image: editingRestaurant.image || "",
        stadeId: editingRestaurant.stadeId || "",
        horaires: editingRestaurant.horaires || "",
        telephone: editingRestaurant.telephone || "",
        vegOptions: editingRestaurant.vegOptions || false,
      });
    } else {
      form.reset({
        nom: "",
        description: "",
        cuisine: "",
        prixMoyen: "",
        adresse: "",
        distance: "",
        note: 4,
        image: "",
        stadeId: "",
        horaires: "",
        telephone: "",
        vegOptions: false,
      });
    }
  }, [editingRestaurant, form]);

  const handleSubmit = async (data: FormValues) => {
    try {
      onSubmit(data);
      
      form.reset();
      onOpenChange(false);
      toast({
        title: editingRestaurant ? "Restaurant modifié" : "Restaurant ajouté",
        description: editingRestaurant 
          ? `Le restaurant ${data.nom} a été modifié avec succès.`
          : `Le restaurant ${data.nom} a été ajouté avec succès.`,
      });
    } catch (error) {
      console.error('Error adding restaurant:', error);
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite lors de l'ajout du restaurant. Veuillez réessayer.",
        variant: "destructive",
      });
    }
  };

  const handleReset = () => {
    form.reset();
    toast({
      title: "Formulaire réinitialisé",
      description: "Toutes les valeurs ont été réinitialisées.",
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 border-none shadow-lg">
        <DialogHeader className="space-y-3">
          <DialogTitle className="text-2xl font-bold flex items-center gap-2 text-caf-green">
            <Utensils className="h-6 w-6" />
            {editingRestaurant ? "Modifier un restaurant" : "Ajouter un nouveau restaurant"}
          </DialogTitle>
          <DialogDescription className="text-base">
            {editingRestaurant 
              ? "Modifiez les informations du restaurant existant."
              : "Remplissez le formulaire pour ajouter un nouveau restaurant partenaire."}
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="nom"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2 text-caf-green">
                      <Utensils className="h-4 w-4" />
                      Nom du restaurant
                    </FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="La Table Marocaine" 
                        {...field} 
                        className="border-caf-green/30 focus-visible:ring-caf-green/50"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="cuisine"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2 text-caf-red">
                        <Tag className="h-4 w-4" />
                        Type de cuisine
                      </FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Marocaine traditionnelle" 
                          {...field} 
                          className="border-caf-red/30 focus-visible:ring-caf-red/50"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="note"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2 text-yellow-600">
                        <Star className="h-4 w-4" />
                        Note (1-5)
                      </FormLabel>
                      <FormControl>
                        <Input 
                          type="number" 
                          min="1" 
                          max="5" 
                          {...field} 
                          className="border-yellow-600/30 focus-visible:ring-yellow-600/50"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="prixMoyen"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2 text-caf-gold">
                        <Tag className="h-4 w-4" />
                        Prix moyen
                      </FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="200 DH" 
                          {...field} 
                          className="border-caf-gold/30 focus-visible:ring-caf-gold/50"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="distance"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2 text-blue-500">
                        <MapPin className="h-4 w-4" />
                        Distance du stade
                      </FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="1.5 km" 
                          {...field} 
                          className="border-blue-500/30 focus-visible:ring-blue-500/50"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="stadeId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2 text-purple-500">
                        <Home className="h-4 w-4" />
                        ID du stade associé
                      </FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="stade-marrakech" 
                          {...field} 
                          className="border-purple-500/30 focus-visible:ring-purple-500/50"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="adresse"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2 text-emerald-600">
                        <MapPin className="h-4 w-4" />
                        Adresse
                      </FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="45 Avenue Mohammed V, Marrakech" 
                          {...field} 
                          className="border-emerald-600/30 focus-visible:ring-emerald-600/50"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="telephone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2 text-indigo-500">
                        <Phone className="h-4 w-4" />
                        Téléphone
                      </FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="+212 522 123 456" 
                          {...field} 
                          className="border-indigo-500/30 focus-visible:ring-indigo-500/50"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="horaires"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2 text-orange-500">
                        <Clock className="h-4 w-4" />
                        Horaires
                      </FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="12h-23h tous les jours" 
                          {...field} 
                          className="border-orange-500/30 focus-visible:ring-orange-500/50"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="vegOptions"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow-sm">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Options végétariennes</FormLabel>
                        <FormDescription>
                          Cochez si le restaurant propose des options végétariennes.
                        </FormDescription>
                      </div>
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2 text-caf-red">
                      URL de l'image
                    </FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="https://example.com/image.jpg" 
                        {...field} 
                        className="border-caf-red/30 focus-visible:ring-caf-red/50"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2 text-caf-green">
                      Description
                    </FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Décrivez le restaurant, son ambiance et sa spécialité..." 
                        className="min-h-[120px] border-caf-green/30 focus-visible:ring-caf-green/50 resize-none"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <DialogFooter className="flex flex-col sm:flex-row sm:justify-between gap-3 pt-2">
              <Button type="button" variant="outline" onClick={handleReset} className="w-full sm:w-auto">
                Réinitialiser
              </Button>
              <Button type="submit" className="w-full sm:w-auto bg-gradient-to-r from-caf-green to-emerald-600 hover:from-emerald-600 hover:to-caf-green transition-all duration-300">
                {editingRestaurant ? "Mettre à jour" : "Confirmer"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
