
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
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>{editingRestaurant ? "Modifier un restaurant" : "Ajouter un nouveau restaurant"}</DialogTitle>
          <DialogDescription>
            {editingRestaurant 
              ? "Modifiez les informations du restaurant existant."
              : "Remplissez le formulaire pour ajouter un nouveau restaurant partenaire."}
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="nom"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nom du restaurant</FormLabel>
                    <FormControl>
                      <Input placeholder="La Table Marocaine" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="cuisine"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Type de cuisine</FormLabel>
                    <FormControl>
                      <Input placeholder="Marocaine traditionnelle" {...field} />
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
                    <FormLabel>Note (1-5)</FormLabel>
                    <FormControl>
                      <Input type="number" min="1" max="5" {...field} />
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
                    <FormLabel>Prix moyen</FormLabel>
                    <FormControl>
                      <Input placeholder="200 DH" {...field} />
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
                    <FormLabel>Distance du stade</FormLabel>
                    <FormControl>
                      <Input placeholder="1.5 km" {...field} />
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
                    <FormLabel>ID du stade associé</FormLabel>
                    <FormControl>
                      <Input placeholder="stade-marrakech" {...field} />
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
                    <FormLabel>Adresse</FormLabel>
                    <FormControl>
                      <Input placeholder="45 Avenue Mohammed V, Marrakech" {...field} />
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
                    <FormLabel>Téléphone</FormLabel>
                    <FormControl>
                      <Input placeholder="+212 522 123 456" {...field} />
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
                    <FormLabel>Horaires</FormLabel>
                    <FormControl>
                      <Input placeholder="12h-23h tous les jours" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>URL de l'image</FormLabel>
                  <FormControl>
                    <Input placeholder="https://example.com/image.jpg" {...field} />
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
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Décrivez le restaurant, son ambiance et sa spécialité..." 
                      className="min-h-[100px]"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <DialogFooter className="flex justify-between">
              <Button type="button" variant="outline" onClick={handleReset}>
                Réinitialiser
              </Button>
              <Button type="submit">{editingRestaurant ? "Mettre à jour" : "Confirmer"}</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
